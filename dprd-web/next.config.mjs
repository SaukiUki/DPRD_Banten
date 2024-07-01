/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "i.ytimg.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "dprd-bantenprov.go.id",
            port: "",
          },
        ],
      },
};

export default nextConfig;

