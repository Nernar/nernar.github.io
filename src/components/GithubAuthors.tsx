import React from 'react';

export default function GithubAuthors({ authors }) {
	const authorList = typeof authors === 'string' ? JSON.parse(authors) : authors;
	if (!Array.isArray(authorList) || authorList.length === 0) {
		return null;
	}

	return (
		<span className="github-authors-inline">
			{authorList.map((author: any) => (
				<a
					href={`https://github.com/${author}`}
					title={`@${author}`}
					target="_blank"
					rel="noopener noreferrer"
					className="github-author-link">
					<img
						src={`https://github.com/${author}.png?size=96`}
						alt={`@${author}`}
						className="github-author-avatar"
						loading="lazy"
						onError={(e) => {
							e.currentTarget.src = 'https://github.com/error.png?size=96';
						}} />
				</a>
			))}
		</span>
	);
}
