/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {
  // reactStrictMode: false,
};

export default withPWA({
  ...nextConfig,
  dest: "build",
});
