// @ts-check
import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import { ThemeClassNames } from '@docusaurus/theme-common';
// @ts-ignore
import { useDoc, useDocsVersion } from '@docusaurus/theme-common/internal';

export default function DocVersionBadge({ className }) {
  const versionMetadata = useDocsVersion();
  const doc = (() => { try { return useDoc() } catch (e) {} })();
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
        doc?.frontMatter?.since && (<span
          className={clsx(
            className,
            ThemeClassNames.docs.docVersionBadge,
            'badge badge--primary',
          )}>
          <Translate
            id='theme.api.sinceBadge.label'
            values={{ versionLabel: doc.frontMatter.since }}>
            {'Since: {versionLabel}'}
          </Translate>
        </span>)
      }
      </div>
  );
}
