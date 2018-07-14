module.exports = {
  siteMetadata: {
    siteUrl: `https://atxtacotour.com`,
    title: `Austin Tour de Taco`,
    keywords:  `
      mateo,
      taco,
      tour,
      tour de taco,
      austin tacos,
      austin
    `,
    description: 'Austin Tour de Taco is pub-crawl style journey across Austin to celebrate Latinx culture and to raise money for immigrant rights',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-122361932-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
  ],
}
