module.exports = {
  siteMetadata: {
    title: `tomwaterton.com`,
    description: `A personal website for Tom Waterton`,
    author: `Tom Waterton`,
    siteUrl: 'https://tomwaterton.com/'
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal website for Tom Waterton`,
        short_name: `tomwaterton.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/favicon/typewriter.svg`
      }
    },
    'gatsby-plugin-cname',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};

