import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["192.168.0.115", "10.99.141.215"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                // hostname: "images.unsplash.com",
                hostname: "randomuser.me",
                pathname: "/api/portraits/**",
            },
            {
                protocol: "https",
                hostname: "i.pravatar.cc",
            },
        ],
    },
};

export default nextConfig;
