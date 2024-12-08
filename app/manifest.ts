import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "engdoit",
    short_name: "engdoit",
    description: "English voca app",
    scope: "./",
    start_url: "./",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/icon512_rounded.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon512_maskable.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        "src": "/icons/favicon.ico",
        "sizes": "64x64 32x32 24x24 16x16",
        "type": "image/x-icon"
      },
      {
        "src": "images/",
        "sizes": "192x192",
        "type": "image/png"
      },
    ],
  };
}
