/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Font, GlobalStyles } from "../utils/typography";

export const Layout = ({ style = {}, children }) => {
    return (
        <>
            <GlobalStyles />
            <Font />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `1rem 1.0875rem 1.45rem`,
                    ...style,
                }}
            >
                <main>{children}</main>
            </div>
        </>
    );
};
