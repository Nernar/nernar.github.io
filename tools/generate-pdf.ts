import { launch as puppeteerLaunch, PDFOptions, PaperFormat } from 'puppeteer';
import { scrollPageToBottom } from 'puppeteer-autoscroll-down';
import { createCommand } from 'commander';

export interface generatePDFOptions {
	initialDocURLs: Array<string>;
	excludeURLs: Array<string>;
	outputPDFFilename: string;
	pdfMargin: PDFOptions['margin'];
	contentSelector: string;
	paginationSelector: string;
	pdfFormat: PaperFormat;
	excludeSelectors: Array<string>;
	cssStyle: string;
	puppeteerArgs: Array<string>;
	disableTOC: boolean;
	headerTemplate: string;
	footerTemplate: string;
}

export async function generatePDF({
	initialDocURLs,
	excludeURLs,
	outputPDFFilename = 'innercore-docs.pdf',
	pdfMargin = { top: 32, right: 32, bottom: 32, left: 32 },
	contentSelector = '.theme-doc-markdown',
	paginationSelector = 'a.pagination-nav__link--next',
	pdfFormat,
	excludeSelectors,
	cssStyle,
	puppeteerArgs,
	disableTOC = true,
	headerTemplate,
	footerTemplate,
}: generatePDFOptions): Promise<string> {
	const browser = await puppeteerLaunch({ args: puppeteerArgs });
	const page = await browser.newPage();

	let contentHTML = '';
	for (const url of initialDocURLs) {
		let nextPageURL = url;

		// Create a list of HTML for the content section of all pages by looping
		while (nextPageURL) {
			console.info(`Retrieving html from ${nextPageURL}...`);

			// Go to the page specified by nextPageURL
			await page.goto(`${nextPageURL}`, {
				waitUntil: 'networkidle0',
				timeout: 0,
			});

			// Get the HTML string of the content section.
			const html = await page.evaluate(
				({ contentSelector }) => {
					const element: HTMLElement | null = document.querySelector(
						contentSelector,
					);
					if (element) {
						// Add pageBreak for PDF
						element.style.pageBreakAfter = 'always';

						// Disable dark theme if it enabled
						// if (document.documentElement.getAttribute('data-theme') == 'dark') {
							// document.documentElement.setAttribute('data-theme', 'light');
						// }

						// Open <details> tags
						const detailsArray = element.getElementsByTagName('details');
						Array.from(detailsArray).forEach((element) => {
							element.open = true;
						});

						return element.outerHTML;
					}
					return '';
				},
				{ contentSelector },
			);

			// Make joined content html
			if (excludeURLs && excludeURLs.includes(nextPageURL)) {
				console.info('* This URL is excluded.');
			} else {
				contentHTML += html;
			}

			// Find next page url before DOM operations
			nextPageURL = await page.evaluate((paginationSelector) => {
				const element = document.querySelector(paginationSelector);
				if (element) {
					return (element as HTMLLinkElement).href;
				}
				return '';
			}, paginationSelector);
		}
	}

	console.info("Generating table of contents...");

	// Go to initial page
	await page.goto(`${initialDocURLs[0]}`, { waitUntil: 'networkidle0' });

	// Add Toc
	const { modifiedContentHTML, tocHTML } = generateToc(contentHTML);

	// Restructuring the html of a document
	await page.evaluate(
		({ tocHTML, modifiedContentHTML, disableTOC }) => {
			// Empty body content
			const body = document.body;
			body.innerHTML = '';

			// Add toc
			if (!disableTOC) body.innerHTML += tocHTML;

			// Add body content
			body.innerHTML += modifiedContentHTML;
		},
		{ tocHTML, modifiedContentHTML, disableTOC },
	);

	// Remove unnecessary HTML by using excludeSelectors
	excludeSelectors &&
		excludeSelectors.map(async (excludeSelector) => {
			// "selector" is equal to "excludeSelector"
			// https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-pageevaluatepagefunction-args
			await page.evaluate((selector) => {
				const matches = document.querySelectorAll(selector);
				matches.forEach((match) => match.remove());
			}, excludeSelector);
		});

	// Add CSS to HTML
	if (cssStyle) {
		await page.addStyleTag({ content: cssStyle });
	}

	// Scroll to the bottom of the page with puppeteer-autoscroll-down
	// This forces lazy-loading images to load
	// TODO: await scrollPageToBottom(page, {});

	console.info("Generating PDF...");

	await page.pdf({
		path: outputPDFFilename,
		format: pdfFormat,
		// printBackground: true,
		margin: pdfMargin,
		displayHeaderFooter: !!(headerTemplate || footerTemplate),
		headerTemplate,
		footerTemplate,
	});

	console.info(`Written ${outputPDFFilename} successfully!`);

	return contentHTML;
}

function generateToc(contentHtml: string) {
	const headers: Array<{
		header: string;
		level: number;
		id: string;
	}> = [];

	// Create TOC only for h1~h3
	const modifiedContentHTML = contentHtml.replace(
		/<h[1-3](.+?)<\/h[1-3]( )*>/g,
		htmlReplacer,
	);

	function htmlReplacer(matchedStr: string) {
		// docusaurus inserts #s into headers for direct links to the header
		const headerText = matchedStr
			.replace(/<a[^>]*>#<\/a( )*>/g, '')
			.replace(/<[^>]*>/g, '')
			.trim();

		const headerId = `${Math.random().toString(36).substr(2, 5)}-${
			headers.length
		}`;

		// level is h<level>
		const level = Number(matchedStr[matchedStr.indexOf('h') + 1]);

		headers.push({
			header: headerText,
			level,
			id: headerId,
		});

		const modifiedContentHTML = matchedStr.replace(/<h[1-3].*?>/g, (header) => {
			if (header.match(/id( )*=( )*"/g)) {
				return header.replace(/id( )*=( )*"/g, `id="${headerId} `);
			}
			return header.substring(0, header.length - 1) + ` id="${headerId}">`;
		});

		return modifiedContentHTML;
	}

	const toc = headers
		.map(
		(header) =>
			`<li class="toc-item toc-item-${header.level}" style="margin-left:${
			(header.level - 1) * 20
			}px"><a href="#${header.id}">${header.header}</a></li>`,
		)
		.join('\n');

	const tocHTML = `
		<div class="toc-page" style="page-break-after: always;">
		<h1 class="toc-header">Table of contents:</h1>
		<ul class="toc-list">${toc}</ul>
		</div>
		`;

	return { modifiedContentHTML, tocHTML };
}

export function commaSeparatedList(
	value: string,
): Array<string> {
	return value.split(',');
}

export function generatePuppeteerPDFMargin(
	value: string,
): PDFOptions['margin'] {
	const marginStrings = value.split(',');
	return {
		top: marginStrings[0],
		right: marginStrings[1],
		bottom: marginStrings[2],
		left: marginStrings[3],
	};
}

createCommand('generate-innercore-pdf')
	.requiredOption(
		'--initialDocURLs <urls>',
		'set urls to start generating PDF from',
		commaSeparatedList,
	)
	.option(
		'--excludeURLs <urls>',
		'urls to be excluded in PDF',
		commaSeparatedList,
	)
	.option(
		'--contentSelector <selector>',
		'used to find the part of main content',
	)
	.option('--paginationSelector <selector>', 'used to find next url')
	.option(
		'--excludeSelectors <selectors>',
		'exclude selector ex: .nav',
		commaSeparatedList,
	)
	.option(
		'--cssStyle <cssString>',
		'css style to adjust PDF output ex: body{padding-top: 0;}',
	)
	.option('--outputPDFFilename <filename>', 'name of output PDF file')
	.option(
		'--pdfMargin <margin>',
		'set margin around PDF file',
		generatePuppeteerPDFMargin,
	)
	.option('--pdfFormat <format>', 'pdf format ex: A3, A4...')
	.option('--disableTOC', 'disable table of contents')
	.option('--headerTemplate <html>', 'html template for page header')
	.option('--footerTemplate <html>', 'html template for page footer')
	.action((options: generatePDFOptions) => {
		generatePDF(options)
			.then(() => {
				console.info('Completed generating PDF!');
				process.exit(0);
			})
			.catch((err: { stack: any }) => {
				console.error(err.stack);
				process.exit(1);
			});
	})
	.parse(process.argv);
