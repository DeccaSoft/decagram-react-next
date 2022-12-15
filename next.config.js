const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePahts: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
