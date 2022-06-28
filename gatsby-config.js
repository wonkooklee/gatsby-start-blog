module.exports = {
  pathPrefix: `/gatsby-start-blog/`,
  siteMetadata: {
    title: `wonkook.dev`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `wonkook.dev | 개발자 이원국`,
        short_name: `wonkook.dev | 개발자 이원국`,
        icon: "src/assets/images/icon.png",
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.3,
        once: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-smoothscroll'
  ],
};
