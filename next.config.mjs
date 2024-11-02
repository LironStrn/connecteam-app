/** @type {import('next').NextConfig} */
const nextConfig = {
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
