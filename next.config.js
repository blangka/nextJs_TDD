/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // https://nextjs.org/docs/architecture/nextjs-compiler#remove-react-properties
        reactRemoveProperties: {properties: ['^data-testid$']},
    },
}

module.exports = nextConfig
