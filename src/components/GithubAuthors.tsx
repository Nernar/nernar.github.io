import React from 'react';

export default function GithubAuthors({ authors }) {
	const authorList = typeof authors === 'string' ? JSON.parse(authors) : authors;

	return (
		<span className="github-authors-inline">
			{authorList.map((author: any) => (
				<a
					href={`https://github.com/${author}`}
					target="_blank"
					rel="noopener noreferrer"
					className="github-author-link">
					<img
						src={`https://github.com/${author}.png?size=40`}
						alt={`@${author}`}
						className="github-author-avatar"
						width="20"
						height="20"
						loading="lazy" />
				</a>
			))}
		</span>
	);
}
