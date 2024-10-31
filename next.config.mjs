/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: `
      @import "@/styles/breakpoints.scss";
    `,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        })

        return config
    },
};

export default nextConfig;
