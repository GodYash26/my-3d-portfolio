/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "shrug-person-78902957.figma.site" },
      { protocol: "https", hostname: "images.higgs.ai" },
      { protocol: "https", hostname: "motionsites.ai" },
    ],
  },
};

module.exports = nextConfig;
