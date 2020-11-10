module.exports = {
  siteMetadata: {
    title: 'Calculadora de Tareas',
    description: 'Ayuda a indentificar que tareas se están ejecutando.',
    author: '@yuniors87',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Calculador de tareas',
        short_name: 'CaT',
        lang: 'es',
        start_url: '/',
        background_color: '#aaff',
        theme_color: '#EAECEE',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
