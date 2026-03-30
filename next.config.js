/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-f9f1a0f4e3da4489b5f731278c99d3cc.r2.dev",
      },
    ],
  },
}

module.exports = nextConfig
