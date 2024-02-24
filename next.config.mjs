/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/senchat',
        destination: 'https://senchat.cloud',
        permanent: false
      },
      {
        source: '/pinatacloud',
        destination: 'https://www.pinata.cloud',
        permanent: false
      }
    ]
  }
};

export default nextConfig;
