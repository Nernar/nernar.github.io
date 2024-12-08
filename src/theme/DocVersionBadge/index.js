// @ts-check
import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc, useDocsVersion } from '@docusaurus/plugin-content-docs/client';

export default function DocVersionBadge({ className }) {
  const versionMetadata = useDocsVersion();
  const doc = (() => { try { return useDoc() } catch (e) {} })();
  // @ts-ignore
  if (!(versionMetadata.badge || doc?.frontMatter?.since)) {
    return null;
  }
  return (
    <div>
      {
        versionMetadata.badge && (<span
          className={clsx(
            className,
            ThemeClassNames.docs.docVersionBadge,
            'badge badge--secondary',
          )}>
          <Translate
            id='theme.docs.versionBadge.label'
            values={{ versionLabel: versionMetadata.label }}>
            {'Version: {versionLabel}'}
          </Translate>
        </span>)
      }
      {
        // @ts-ignore
        doc?.frontMatter?.since && (<span
          className={clsx(
            className,
            ThemeClassNames.docs.docVersionBadge,
            'badge badge--primary',
          )}>
          <Translate
            id='component.api.sinceBadge.label'
            // @ts-ignore
            values={{ versionLabel: doc.frontMatter.since }}>
            {'Since: {versionLabel}'}
          </Translate>
        </span>)
      }
      </div>
  );
}
