/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/test2.jpeg',
        destination: 'https://www.shtypketu.com/i-vdekuri-cohet-ne-kembe-ne-morg-dhe-fillon-te-ece-duke-tmerruar-punonjesit/',
        permanent: false,
      },
      // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
      
    ]
  },
}

module.exports = nextConfig
