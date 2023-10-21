/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "encrypted-tbn0.gstatic.com",
      "hips.hearstapps.com",
      "i2.wp.com",
      "img.youtube.com",
    ],
  },
};

module.exports = nextConfig;
