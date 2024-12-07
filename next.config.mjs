/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

export default withPWA({
  ...nextConfig,
  dest: "build",
});
