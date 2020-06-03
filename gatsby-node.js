const { createFilePath } = require(`gatsby-source-filesystem`);

const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const { permalink } = node.frontmatter;

        let slug = permalink;
        const parent = getNode(node.parent);
        if (parent.internal.type === 'File') {
            createNodeField({
                name: "sourceInstanceName",
                node,
                value: parent.sourceInstanceName
            })
        }

        if (!slug) {
            const { relativePath } = parent;

            const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
            if (match !== null) {
                const [, year, month, day, filename] = match;
                const date = new Date(year, month - 1, day);

                slug = `/blog/${year}/${month}/${day}/${filename}.html`;

                createNodeField({
                    name: `date`,
                    node,
                    value: date.toJSON(),
                });
            }
        }

        createNodeField({
            name: `slug`,
            node,
            value: slug,
        });
    }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const blogPostTemplate = require.resolve(`./src/components/blog-post.js`);

    const result = await graphql(`
        {
            allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }, limit: 1000) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
                slug: node.fields.slug,
            },
        });
    });
};
