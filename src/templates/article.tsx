import React from "react";
import { graphql } from "gatsby";
import { Layout, NavBar, Header, Title, Card, SEO } from "../components";

import styles from "./article.module.css";

interface PostProps {
	data: GatsbyTypes.ArticleQuery;
}

const Article: React.FC<PostProps> = ({ data }) => {
	const post = data.markdownRemark;
	return (
		<Layout>
			<SEO title={post?.frontmatter?.title ?? ""} />
			<Header>
				<NavBar />
				<Title title={post?.frontmatter?.title ?? ""} />
			</Header>
			<Card className={styles.articleCard}>
				<div dangerouslySetInnerHTML={{ __html: post?.html ?? "" }} />
			</Card>
		</Layout>
	);
};

export default Article;

export const postQuery = graphql`
	query Article($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
