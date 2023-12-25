/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        imageSizes: [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
    },
}

module.exports = nextConfig
