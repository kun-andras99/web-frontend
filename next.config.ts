import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ['192.168.0.115'],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                // hostname: "images.unsplash.com",
                hostname: "randomuser.me",
            },

        ],
    },
};

export default nextConfig;
