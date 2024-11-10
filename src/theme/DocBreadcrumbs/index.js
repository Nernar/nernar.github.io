// @ts-check
import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import {
	useActivePluginAndVersion,
	useSidebarBreadcrumbs
} from '@docusaurus/plugin-content-docs/client'
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';
import IconHome from '@theme/Icon/Home';
import styles from './styles.module.css';

function BreadcrumbsItemLink({ children, href, isLast }) {
	const className = 'breadcrumbs__link';
	if (isLast) {
		return (
			<span className={ className } itemProp='name'>
				{ children }
			</span>
		);
	}
	return href ? (
		<Link className={ className } href={ href } itemProp='item'>
			<span itemProp='name'>{ children }</span>
		</Link>
	) : (
		<span className={ className }>{ children }</span>
	);
}

function BreadcrumbsItem({ children, active, index, addMicrodata }) {
	return (
		<li
			{ ...(addMicrodata && {
				itemScope: true,
				itemProp: 'itemListElement',
				itemType: 'https://schema.org/ListItem',
			}) }
			className={ clsx('breadcrumbs__item', {
				'breadcrumbs__item--active': active,
			}) }>
			{ children }
			<meta itemProp='position' content={ String(index + 1) } />
		</li>
	);
}

function HomeBreadcrumbItem({ href, docs }) {
	const homeHref = docs.find((doc) => doc.id === href)?.path || useBaseUrl('/');
	return (
		<li className='breadcrumbs__item'>
			<Link
				aria-label={ translate({
					id: 'theme.docs.breadcrumbs.home',
					message: 'Home page',
					description: 'The ARIA label for the home page in the breadcrumbs',
				}) }
				className={ clsx('breadcrumbs__link', styles.breadcrumbsItemLink) }
				href={ homeHref }>
				<IconHome className={ styles.breadcrumbHomeIcon } />
			</Link>
		</li>
	);
}

export default function DocBreadcrumbs() {
	const breadcrumbs = useSidebarBreadcrumbs();
	if (breadcrumbs == null || !(breadcrumbs.length > 0)) {
		return null;
	}
	const activePluginAndVersion = useActivePluginAndVersion();
	const homePageRoute = activePluginAndVersion?.activeVersion?.mainDocId;
	const activeRoutes = activePluginAndVersion?.activeVersion?.docs || [];
	return (
		<nav
			className={ clsx(
				ThemeClassNames.docs.docBreadcrumbs,
				styles.breadcrumbsContainer,
			) }
			aria-label={ translate({
				id: 'theme.docs.breadcrumbs.navAriaLabel',
				message: 'Breadcrumbs',
				description: 'The ARIA label for the breadcrumbs',
			}) }>
			<ul
				className='breadcrumbs'
				itemScope
				itemType='https://schema.org/BreadcrumbList'>
				{ homePageRoute && <HomeBreadcrumbItem href={ homePageRoute } docs={ activeRoutes } /> }
				{ breadcrumbs.map((item, idx) => {
					const isLast = idx === breadcrumbs.length - 1;
					return (
						<BreadcrumbsItem
							key={ idx }
							active={ isLast }
							index={ idx }
							addMicrodata={ !!item.href }>
							<BreadcrumbsItemLink href={ item.href } isLast={ isLast }>
								{ item.label }
							</BreadcrumbsItemLink>
						</BreadcrumbsItem>
					);
				}) }
			</ul>
		</nav>
	);
}
