module.exports = {
  siteMetadata: {
    siteUrl: ``, // TODO
    title: `Mateo's Tour de Taco`,
    keywords:  `
      mateo,
      taco,
      tour,
      birthday,
      mateo clarke
    `,
    description: 'Can he do it?',
    facebookUrl: ``, // TODO
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
        trackingId: "", // TODO
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
    // {
    //   resolve: `gatsby-plugin-sitemap`
    // },
  ],
}
