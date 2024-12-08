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
    ],
  };
}
