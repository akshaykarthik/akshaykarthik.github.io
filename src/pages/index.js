import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import * as colors from "../utils/colors";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled, { css } from "styled-components";

const linkStyle = css`
    &:link,
    &:visited {
        text-decoration: none;
        color: ${colors.textColor};
    }
    &:hover,
    &:active {
        text-decoration: underline;
        color: ${colors.pCol1};
    }
    h1,
    h2 {
        color: ${colors.textColor};
    }
`;

const InternalLink = styled(Link)`
    ${linkStyle}
`;
const ExternalLink = styled.a`
    ${linkStyle}
`;

const indexPageQuery = graphql`
    query IndexPageQuery {
        site {
            siteMetadata {
                author
            }
        }
        file(name: { eq: "akarthik_resume" }) {
            publicURL
        }
    }
`;

const IndexPage = () => {
    const data = useStaticQuery(indexPageQuery);
    console.log(data);

    return (
        <Layout
            noHeader
            style={{
                margin: "4em auto",
                height: "50%",
                textAlign: "center",
            }}
        >
            <SEO title="Home" />
            <InternalLink to="/">
                <h1>{data.site.siteMetadata.author}</h1>
            </InternalLink>
            <ExternalLink href="http://www.github.com/akshaykarthik">
                <h2>github</h2>
            </ExternalLink>
            <ExternalLink href="mailto:akshay.karthik@gmail.com">
                <h2>email</h2>
            </ExternalLink>
            <ExternalLink href={data.file.publicURL}>
                <h2>resume</h2>
            </ExternalLink>
        </Layout>
    );
};

export default IndexPage;
