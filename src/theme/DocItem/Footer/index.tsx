import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import GitHubContributors from './GitHubContributors';
import GitUrlParse from 'git-url-parse';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const { metadata } = useDoc();
  const file = metadata.editUrl;
  const additionalContributors = metadata.frontMatter.additionalContributors;

  if (!file) {
      return <Footer {...props} />;
  }

  const info = GitUrlParse(file);
  const { name, owner, filepath } = info;

  return (
      <>
          <Footer {...props} />
          <GitHubContributors repo={name} owner={owner} filePath={filepath} additionalContributors={additionalContributors}/>
      </>
  );
}
