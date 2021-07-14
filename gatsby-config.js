module.exports = {
  siteMetadata: {
    siteUrl: "https://jaipeurduvaccin.fr",
    title: "J'ai peur du vaccin",
    description: "Cette page vise à regrouper les différentes ressources apportant des réponses scientifiques à des questions légitimes.",
    author: "jaipeurduvaccin.fr"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "J'ai peur du vaccin",
        short_name: "Vaccin",
        start_url: "/",
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
