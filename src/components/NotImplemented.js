// @ts-check
import React from "react";
import Admonition from "@theme/Admonition";
import Translate, { translate } from "@docusaurus/Translate";

export default function NotImplemented() {
	return (
		<Admonition type="danger" title={ translate({
			id: "component.page.notImplemented.title",
			message: "Not implemented yet"
		}) }>
			<Translate id="component.page.notImplemented.visitLater">Visit this page slightly later, here will appear what you've assuming to be.</Translate>
			<> </>
			<Translate id="component.page.notImplemented.contributeAdvice">Or just make contribution to this page creation, it helpful for everyone!</Translate>
		</Admonition>
	);
}
