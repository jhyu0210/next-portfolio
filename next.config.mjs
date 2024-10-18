/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{
            hostname: "media.istockphoto.com",
            protocol: "https",
        }]
    }
};

export default nextConfig;
