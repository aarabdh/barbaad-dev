/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'barbaad-dev'; // Replace with your actual GitHub repository name

const nextConfig = {
  output: 'export',
};

module.exports = nextConfig;