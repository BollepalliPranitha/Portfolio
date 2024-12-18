

module.exports = {
    reactStrictMode: true,
    env: {
      NAME: process.env.NAME,
    },
    output: 'export',
  basePath: '/Portfolio', // Replace with your GitHub repo name
  assetPrefix: '/Portfolio', 
  assetPrefix: './', // Ensures assets (CSS, JS) are loaded correctly
  trailingSlash: true,
}