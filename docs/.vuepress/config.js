module.exports = ctx => ({
    title: 'Sunat Catálogos',
    description: 'Lista de catálogos y códigos utilizados por SUNAT para facturación electrónica.',
    base: '/SunatCatalogos/',
    locales: {
        '/': {
            lang: 'es-PE'
        },
    },
    themeConfig: {
        searchPlaceholder: 'Buscar...',
        lastUpdated: 'Última Actualización',
        logo: '/icons/android-chrome-192x192.png',
        repo: 'eliutimana/SunatCatalogos',
        docsBranch: 'site',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Editar esta página',
        sidebar: [
            '/',
            'cat-08',
            'errors'
        ]
    },
    head: [
        ['meta', {name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no"}],
        ['link', {rel: 'icon', href: '/icons/favicon.ico'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#1e88e5'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png'}],
        ['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png"}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#1e88e5'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#1e88e5'}],
        ['link', {
            rel: "stylesheet",
            href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
            integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
            crossorigin: "anonymous"
        }],
        ['link', {
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css',
            rel: "stylesheet"
        }]
    ],
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "Nuevo contenido disponible.",
                popupComponent: 'MySWUpdatePopup',
                buttonText: "Actualizar"
            }
        }
    }
})
