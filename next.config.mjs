/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "apostillemygovbd.vercel.app",
      },
      {
        protocol: "https",
        hostname: "apostille.mygov.bd",
      },
    ],
  },
};

export default nextConfig;
