import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://placehold.net/**')],
    },
    experimental: {
        scrollRestoration: true,
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
