/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        dangerouslyAllowSVG: true, 
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'connecteam.com',
            port: '',
            pathname: '/static/frontend-home-task/jpg/**',
          }
        ]
      }
};

export default nextConfig;
