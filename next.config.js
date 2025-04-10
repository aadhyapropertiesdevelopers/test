/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // This replaces `next export`

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  devIndicators: false,
  rules: {
    "react/no-unescaped-entities": "off"
  }
};

export default nextConfig;

