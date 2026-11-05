/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Old URL from the previous site -> clean URL
      { source: "/terms&condition", destination: "/terms-and-conditions", permanent: true },
      { source: "/terms-and-condition", destination: "/terms-and-conditions", permanent: true },
      { source: "/tenders-details", destination: "/tenders-list", permanent: false },
    ];
  },
};

module.exports = nextConfig;
