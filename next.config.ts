import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pixabay.com',
                pathname: '/**', // optional: allows all paths
            },
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                pathname: '/**', // optional: allows all paths
            },
            {
                protocol: 'https',
                hostname: 'openweathermap.org',
                pathname: '/**', // optional: allows all paths
            },
        ],
    },
}

export default nextConfig
