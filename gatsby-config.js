module.exports = {
    siteMetadata: {
        title: `Akshay Karthik - Blog/Website/Portfolio`,
        description: `Akshay's Personal Website`,
        author: `Akshay Karthik`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
            },
        },


 
        "gatsby-plugin-styled-components",
        `gatsby-plugin-react-helmet`,

        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Akshay Karthik Blog/Website/Portfolio`,
                short_name: `Akshay Karthik`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-autolink-headers",
                    "gatsby-remark-vscode",
                    "gatsby-remark-katex"
                ],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
