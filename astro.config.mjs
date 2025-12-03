// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    experimental: {
        fonts: [
            {
                provider: fontProviders.fontsource(),
                name: "Inter",
                cssVariable: "--font-inter",
                weights: [400, 500, 700],
                styles: ["normal", "italic"]
            }
        ]
    }
});
