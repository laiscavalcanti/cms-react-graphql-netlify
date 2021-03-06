const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: `blog`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `blog/${slug.slice(12)}`,
    })
  }
}
exports.createPages = ({graphql, actions}) =>{
  const{ createPage } = actions

  return graphql(`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            tags
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
           timeToRead
          }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
  
`).then(result => {
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node, next, previous }) =>{
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
        previusPost: next,
        nextPost: previous
      },
    })
  })
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length /postsPerPage); 
  Array.from({ length: numPages }).forEach((_, i) =>{
       createPage({
         path: i === 0 ? `/blog/` : `/blog/page/${i + 1}`,
         component: path.resolve(`./src/templates/blog-list.js`),
         context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
       }) 
  })
})
}
