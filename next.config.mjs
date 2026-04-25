/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "autoblog-bg.netlify.app" }],
        destination: "https://kolipari.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
