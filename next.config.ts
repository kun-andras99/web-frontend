import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["172.29.112.1", "10.99.141.215"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                // hostname: "images.unsplash.com",
                hostname: "randomuser.me",
                pathname: "/api/portraits/**",
            },
        ],
    },
};

export default nextConfig;
