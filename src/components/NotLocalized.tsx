import React from 'react';
import Admonition from '@theme/Admonition';
import Translate, { translate } from '@docusaurus/Translate';

export default function NotLocalized() {
	return (
		<Admonition type='danger' title={ translate({
			id: 'component.page.notLocalized.title',
			message: 'We cannot understand you'
		}) }>
			<Translate id='component.page.notLocalized.visitLater'>Unfortunately, tutorial is not available in this language yet, try changing it.</Translate>
			<> </>
			<Translate id='component.page.notImplemented.contributeAdvice'>Or just make contribution to this page creation, it helpful for everyone!</Translate>
		</Admonition>
	);
}
