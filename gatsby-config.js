module.exports = {
  siteMetadata: {
    title: `Tom Waterton's website`,
    description: `Content design, portfolio, articles, crosswords, and more.`,
    author: `Tom Waterton`,
    siteUrl: 'https://tomwaterton.com/'
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-158029429-1", // My old Google Analytics tracking ID
          "UA-164602539-1", // Other old-style tracking ID
          "G-FLF83ZC9XP", // My new Google GA4 tracking ID
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-158029429-1",
    //   },
    // },
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
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

