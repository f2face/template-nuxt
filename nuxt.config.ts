// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    nitro: {
        preset: 'cloudflare-pages',
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
        },
    },

    vue: {
        compilerOptions: {
            isCustomElement: (tag) => {
                // For custom or non-standard HTML tags that should not be processed by the compiler.
                const customElements: string[] = [];
                if (!customElements.length) return false;
                return customElements.some((prefix) => tag.startsWith(prefix));
            },
        },
    },

    modules: [
        'nitro-cloudflare-dev',
        [
            '@nuxtjs/tailwindcss',
            {
                cssPath: '~/assets/css/global.css',
            },
        ],
        '@nuxtjs/color-mode',
        'nuxt-gtag', // Gtag ID can be set in env
        'nuxt-icons',
    ],

    runtimeConfig: {
        public: {
            isProduction: process.env.NODE_ENV === 'production',
        },
    },
});

