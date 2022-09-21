module.exports = {
  siteMetadata: {
    title: `Tom Waterton's website`,
    description: `Content design, portfolio, articles, crosswords, and more.`,
    author: `Tom Waterton`,
    twitterUsername: `@tomwaterton`,
    image: `/static/images/site_preview.png`,
    siteUrl: 'https://tomwaterton.com/'
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon/typewriter.svg',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          // "G-FLF83ZC9XP", // My new Google GA4 tracking ID
          // "268137405", // Property ID added 18 Sep 2022
          // "G-LTGBY7DN1E" // Added 21 Sep 2022 (stream ID 3272363831)
          "G-FLF83ZC9XP" // Added 21 Sep 2022 (2411352490)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
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

