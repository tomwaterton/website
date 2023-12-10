module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    title: `Tom Waterton's website`,
    description: `Tom Waterton's website: content design, portfolio, articles, patents, cryptic crosswords, and more.`,
    author: `Tom Waterton`,
    twitterUsername: `@tomwaterton`,
    twitterCreatorId: `188022199`, //not used; see seo.jsx
    image: `/images/site_preview.png`,
    siteUrl: 'https://tomwaterton.com',
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://tomwaterton.com',
        sitemap: 'https://tomwaterton.com/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}],
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://tomwaterton.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-FLF83ZC9XP", // Added 21 Sep 2022 (2411352490)
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon/typewriter.svg',
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

