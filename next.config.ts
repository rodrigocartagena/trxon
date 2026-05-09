const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/trxon' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
