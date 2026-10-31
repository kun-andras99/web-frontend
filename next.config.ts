import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        staleTimes: {
            dynamic: 0,
            static: 180,
        },
    },
    allowedDevOrigins: ["192.168.0.115", "10.105.149.215"],
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
