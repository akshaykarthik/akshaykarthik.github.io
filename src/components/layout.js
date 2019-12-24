/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Font, GlobalStyles } from "../utils/typography"


const Layout = ({ style = {}, children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <GlobalStyles />
            <Font />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `1rem 1.0875rem 1.45rem`,
                    ...style
                }}
            >
                <main>{children}</main>
            </div>
        </>
    );
};

export default Layout;
