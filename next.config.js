/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        deviceSizes: [475, 640, 750, 828, 1080, 1200, 1920, 2048],
        remotePatterns: [
            {
                protocol: "https",
                hostname: process.env.CMS_HOSTNAME,
                port: "",
                pathname: `/${process.env.CMS_SPACE_ID}/**`
            }
        ]
    }
}

module.exports = nextConfig
