/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'preetheme.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
