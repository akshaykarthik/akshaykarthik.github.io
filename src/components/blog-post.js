import React from "react";
import { graphql, Link } from "gatsby";

import { Layout } from "./layout";
import { SEO } from "./seo";

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, fields, html } = markdownRemark;
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <h1>
            <Link to="/">
                Akshay Karthik
            </Link>
            {" · "}
            <Link to={fields.slug}>
                {frontmatter.title}
            </Link>
</h1>
            <h2>{fields.date}</h2>
            <article dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
}
export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
            fields {
                date(formatString: "MMMM DD, YYYY")
                slug
            }
        }
    }
`;
