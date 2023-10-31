/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV
const nextConfig = {
    output: "export",
    basePath: isProduction === 'production' ? '/logistics-company' : '',
}

module.exports = nextConfig
