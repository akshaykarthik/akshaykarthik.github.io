import React from "react";
import Typography from "typography";
import { GoogleFont } from "react-typography";
import { createGlobalStyle } from "styled-components";
import usWebDesignStandardsTheme from "typography-theme-github";

const typography = new Typography({ ...usWebDesignStandardsTheme });

export const GlobalStyles = createGlobalStyle`
    ${typography.toString()}

    article > .task-list-item {
        list-style-type: none;
        margin-left: 0;
    }
`;

export const Font = () => <GoogleFont typography={typography} />;
