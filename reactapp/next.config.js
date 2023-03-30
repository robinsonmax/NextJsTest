/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "http://localhost:5187/:path*", // Using http for development as next.js doesn't like the self signed SSL //"https://localhost:7186/:path*",
      },
    ]
  }
}

module.exports = nextConfig
