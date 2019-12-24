import React from "react";
import Typography from "typography";
import { GoogleFont } from "react-typography";
import { createGlobalStyle } from "styled-components";
import usWebDesignStandardsTheme from "typography-theme-us-web-design-standards";

const typography = new Typography({ ...usWebDesignStandardsTheme });

export const GlobalStyles = createGlobalStyle`
    ${typography.toString()}
`;

export const Font = () => <GoogleFont typography={typography} />;

export default typography;
