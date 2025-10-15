/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Pour dire à Next.js de générer un site statique (à la place de "next export")
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
