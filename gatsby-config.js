module.exports = {
  siteMetadata: {
    title: `tomwaterton.com`,
    description: `Content design, articles, crosswords, and more.`,
    author: `Tom Waterton`,
    siteUrl: 'https://tomwaterton.com/'
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158029429-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Content design, articles, crosswords, and more.`,
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

