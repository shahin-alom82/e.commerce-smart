/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
            domains: [
                  "images.pexels.com",
                  "img.freepik.com",
                  "avatars.githubusercontent.com",
                  "lh3.googleusercontent.com",
            ],
            remotePatterns: [
                  {
                        protocol: "https",
                        hostname: "avatars.githubusercontent.com"
                  },
                  {
                        protocol: "https",
                        hostname: "lh3.googleusercontent.com"
                  },
                  {
                        protocol: "https",
                        hostname: "images.pexels.com"
                  },
                  {
                        protocol: "https",
                        hostname: "img.freepik.com"
                  },

            ]
      }
};

export default nextConfig;
