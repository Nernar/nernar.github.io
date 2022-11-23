// @ts-check
import mdx from '@mdx-js/mdx';
import React from 'react';
import path from 'path';

import { useMDXComponents, mdx as createElement, MDXProvider } from '@mdx-js/react';
import { LiveProvider, LivePreview, LiveEditor, LiveError } from 'react-live';
import { usePrismTheme } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Admonition from '@theme/Admonition';
import AnnouncementBar from '@theme/AnnouncementBar';
import AnnouncementBarContent from '@theme/AnnouncementBar/Content';
import AnnouncementBarCloseButton from '@theme/AnnouncementBar/CloseButton';
import BackToTopButton from '@theme/BackToTopButton';
import CodeBlock from '@theme/CodeBlock';
import CopyButton from '@theme/CodeBlock/CopyButton';
import CodeBlockContainer from '@theme/CodeBlock/Container';
import CodeBlockElementContent from '@theme/CodeBlock/Content/Element';
import CodeBlockStringContent from '@theme/CodeBlock/Content/String';
import CodeBlockLine from '@theme/CodeBlock/Line';
import WordWrapButton from '@theme/CodeBlock/WordWrapButton';
import EditThisPage from '@theme/EditThisPage';
import ErrorPageContent from '@theme/ErrorPageContent';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import LayoutProvider from '@theme/Layout/Provider';
import SearchMetadata from '@theme/SearchMetadata';
import LastUpdated from '@theme/LastUpdated';
import SkipToContent from '@theme/SkipToContent';
import Mermaid from '@theme/Mermaid';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import Details from '@theme/Details';
import TOCItems from '@theme/TOCItems';
import { default as TOCTree } from '@theme/TOCItems/Tree';
import TOC from '@theme/TOC';
import TOCInline from '@theme/TOCInline';
import TOCCollapsible from '@theme/TOCCollapsible';
import TOCCollapsibleCollapseButton from '@theme/TOCCollapsible/CollapseButton';
import ColorModeToggle from '@theme/ColorModeToggle';
import TagsListByLetter from '@theme/TagsListByLetter';
import TagsListInline from '@theme/TagsListInline';
import Tag from '@theme/Tag';

import BlogListPaginator from '@theme/BlogListPaginator';
import BlogSidebarDesktop from '@theme/BlogSidebar/Desktop';
import BlogSidebarMobile from '@theme/BlogSidebar/Mobile';
import BlogSidebar from '@theme/BlogSidebar';
import BlogPostItem from '@theme/BlogPostItem';
import { default as BlogPostItems } from '@theme/BlogPostItems';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthor from '@theme/BlogPostItem/Header/Author';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import BlogPostItemFooterReadMoreLink from '@theme/BlogPostItem/Footer/ReadMoreLink';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogLayout from '@theme/BlogLayout';

import DocCard from '@theme/DocCard';
import DocCardList from '@theme/DocCardList';
import DocItemLayout from '@theme/DocItem/Layout';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemContent from '@theme/DocItem/Content';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocItemFooter from '@theme/DocItem/Footer';
import DocPageLayout from '@theme/DocPage/Layout';
import DocPageLayoutSidebar from '@theme/DocPage/Layout/Sidebar';
import DocPageLayoutSidebarExpandButton from '@theme/DocPage/Layout/Sidebar/ExpandButton';
import DocPageLayoutMain from '@theme/DocPage/Layout/Main';
import DocPaginator from '@theme/DocPaginator';
import DocSidebar from '@theme/DocSidebar';
import DocSidebarMobile from '@theme/DocSidebar/Mobile';
import DocSidebarDesktop from '@theme/DocSidebar/Desktop';
import Content from '@theme/DocSidebar/Desktop/Content';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import DocSidebarItem from '@theme/DocSidebarItem';
import DocSidebarItemLink from '@theme/DocSidebarItem/Link';
import DocSidebarItemHtml from '@theme/DocSidebarItem/Html';
import DocSidebarItemCategory from '@theme/DocSidebarItem/Category';
import DocSidebarItems from '@theme/DocSidebarItems';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';

import Footer from '@theme/Footer';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLinkItem from '@theme/Footer/LinkItem';
import FooterLayout from '@theme/Footer/Layout';
import FooterLinks from '@theme/Footer/Links';
import FooterLinksMultiColumn from '@theme/Footer/Links/MultiColumn';
import FooterLinksSimple from '@theme/Footer/Links/Simple';

import MDXComponents from '@theme/MDXComponents';
import MDXA from '@theme/MDXComponents/A';
import MDXCode from '@theme/MDXComponents/Code';
import MDXDetails from '@theme/MDXComponents/Details';
import MDXUl from '@theme/MDXComponents/Ul';
import MDXImg from '@theme/MDXComponents/Img';
import MDXHead from '@theme/MDXComponents/Head';
import MDXHeading from '@theme/MDXComponents/Heading';
import MDXPre from '@theme/MDXComponents/Pre';
import MDXContent from '@theme/MDXContent';

import Navbar from '@theme/Navbar';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarContent from '@theme/Navbar/Content';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarSearch from '@theme/Navbar/Search';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import DocsVersionNavbarItem from '@theme/NavbarItem/DocsVersionNavbarItem';
import DocsSidebarNavbarItem from '@theme/NavbarItem/DocNavbarItem';
import DocSidebarNavbarItem from '@theme/NavbarItem/DocSidebarNavbarItem';
import HtmlNavbarItem from '@theme/NavbarItem/HtmlNavbarItem';
import NavbarItem from '@theme/NavbarItem';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import SearchBar from '@theme/SearchBar';

import ThemedImage from '@theme/ThemedImage';
import Logo from '@theme/Logo';
import IconArrow from '@theme/Icon/Arrow';
import IconDarkMode from '@theme/Icon/DarkMode';
import IconEdit from '@theme/Icon/Edit';
import IconHome from '@theme/Icon/Home';
import IconLightMode from '@theme/Icon/LightMode';
import IconMenu from '@theme/Icon/Menu';
import IconClose from '@theme/Icon/Close';
import IconLanguage from '@theme/Icon/Language';
import IconExternalLink from '@theme/Icon/ExternalLink';

import NotImplemented from './NotImplemented';
import DocMap from './DocMap';

const components = {
	Admonition,
	AnnouncementBar,
	AnnouncementBarContent,
	AnnouncementBarCloseButton,
	BackToTopButton,
	CodeBlock,
	CopyButton,
	CodeBlockContainer,
	CodeBlockElementContent,
	CodeBlockStringContent,
	CodeBlockLine,
	WordWrapButton,
	EditThisPage,
	ErrorPageContent,
	Heading,
	Layout,
	LayoutProvider,
	SearchMetadata,
	LastUpdated,
	SkipToContent,
	Mermaid,
	TabItem,
	Tabs,
	Details,
	TOCItems,
	TOCTree, // <- TOCItems
	TOC,
	TOCInline,
	TOCCollapsible,
	TOCCollapsibleCollapseButton,
	ColorModeToggle,
	TagsListByLetter,
	TagsListInline,
	Tag,

	BlogListPaginator,
	BlogSidebarDesktop,
	BlogSidebarMobile,
	BlogSidebar,
	BlogPostItem,
	BlogPostItems, // <- BlogPostItem
	BlogPostItemContainer,
	BlogPostItemHeader,
	BlogPostItemHeaderTitle,
	BlogPostItemHeaderInfo,
	BlogPostItemHeaderAuthor,
	BlogPostItemHeaderAuthors,
	BlogPostItemContent,
	BlogPostItemFooter,
	BlogPostItemFooterReadMoreLink,
	BlogPostPaginator,
	BlogLayout,

	DocCard,
	DocCardList,
	DocItemLayout,
	DocItemMetadata,
	DocItemContent,
	DocItemTOCMobile,
	DocItemTOCDesktop,
	DocItemPaginator,
	DocItemFooter,
	DocPageLayout,
	DocPageLayoutSidebar,
	DocPageLayoutSidebarExpandButton,
	DocPageLayoutMain,
	DocPaginator,
	DocSidebar,
	DocSidebarMobile,
	DocSidebarDesktop,
	Content,
	CollapseButton,
	DocSidebarItem,
	DocSidebarItemLink,
	DocSidebarItemHtml,
	DocSidebarItemCategory,
	DocSidebarItems,
	DocVersionBanner,
	DocVersionBadge,

	Footer,
	FooterLogo,
	FooterCopyright,
	FooterLinkItem,
	FooterLayout,
	FooterLinks,
	FooterLinksMultiColumn,
	FooterLinksSimple,

	// MDXComponents > *
	MDXA,
	MDXCode,
	MDXDetails,
	MDXUl,
	MDXImg,
	MDXHead,
	MDXHeading,
	MDXPre,
	MDXContent,

	Navbar,
	NavbarColorModeToggle,
	NavbarLogo,
	NavbarContent,
	NavbarLayout,
	NavbarMobileSidebar,
	NavbarMobileSidebarLayout,
	NavbarMobileSidebarToggle,
	NavbarMobileSidebarPrimaryMenu,
	NavbarMobileSidebarSecondaryMenu,
	NavbarMobileSidebarHeader,
	NavbarSearch,
	DefaultNavbarItem,
	NavbarNavLink,
	DropdownNavbarItem,
	SearchNavbarItem,
	LocaleDropdownNavbarItem,
	DocsVersionDropdownNavbarItem,
	DocsVersionNavbarItem,
	DocsSidebarNavbarItem,
	DocSidebarNavbarItem,
	HtmlNavbarItem,
	NavbarItem,
	PaginatorNavLink,
	SearchBar,

	ThemedImage,
	Logo,
	IconArrow,
	IconDarkMode,
	IconEdit,
	IconHome,
	IconLightMode,
	IconMenu,
	IconClose,
	IconLanguage,
	IconExternalLink,

	NotImplemented,
	DocMap
};

import emoji from 'remark-emoji';

import transformAdmonitions from '@docusaurus/mdx-loader/lib/remark/admonitions';
import unwrapMdxCodeBlocks from '@docusaurus/mdx-loader/lib/remark/unwrapMdxCodeBlocks';
import mermaid from '@docusaurus/mdx-loader/lib/remark/mermaid';

import transformImage from './polyfill/transformImage';
import transformLinks from './polyfill/transformLinks';

const remarkPlugins = [
	transformAdmonitions,
	unwrapMdxCodeBlocks,
	emoji,
	mermaid
];

const rehypePlugins = [];

const transformCode = function(/** @type {string} */ code, remark = [], rehype = []) {
	let transpiledMDX = '';

	try {
		transpiledMDX = mdx.sync(code, {
			skipExport: true,
			remarkPlugins: [...remarkPlugins, ...remark],
			rehypePlugins: [...rehypePlugins, ...rehype]
		});
	} catch (e) {
		console.log(e);
		return '';
	}

	return `
		${ transpiledMDX }

		render(
			<MDXProvider components={ components }>
				<MDXContent { ...props } />
				<NotImplemented />
			</MDXProvider>
		)
	`;
};

export default function LivePlayground({ code, onChange = (/** @type {string} */ code) => {}, scope = {}, ...props }) {
	const defaultScope = useMDXComponents(MDXComponents);
	const fullScope = { ...defaultScope, ...scope };
	const isBrowser = useIsBrowser();
	const theme = usePrismTheme();

	const siteDir = path.resolve('@site');
	const staticDirs = useDocusaurusContext().siteConfig.staticDirectories.map((value) =>
		path.resolve(siteDir, value));

	return (
		<LiveProvider
			{ ...props }
			code={ code }
			scope={{
				...fullScope,
				...components,
				components: fullScope,
				MDXProvider,
				props: {},
				mdx: createElement
			}}
			noInline={ true }
			transformCode={
				function(code) {
					onChange(code);
					return transformCode(code, [
						[
							transformImage, { siteDir, staticDirs }
						],
						[
							transformLinks, { siteDir, staticDirs }
						]
					]);
				}
			}
			theme={ theme }>
			<div style={{
				display: 'flex'
			}}>
				<LiveEditor
					key={ String(isBrowser) }
					style={{
						padding: 16,
						minHeight: 400,
						width: '50%'
					}} />
				<BrowserOnly>{
					() => (
						<LivePreview
							style={{
								padding: 16,
								width: '50%'
							}} />
					)
				}</BrowserOnly>
			</div>
			<BrowserOnly>{
				() => (
					<LiveError
						style={{
							padding: 16,
							color: 'red'
						}} />
				)
			}</BrowserOnly>
		</LiveProvider>
	)
}
