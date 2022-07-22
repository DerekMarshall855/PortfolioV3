/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "",
    },
    basePath: "/portfolioV3",
    assetPrefix: "/portfolioV3",
};

module.exports = nextConfig;