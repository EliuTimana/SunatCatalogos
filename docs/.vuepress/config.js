module.exports = {
    title: 'Sunat Catálogos',
    description: 'SUNAT : Catálogo de Códigos',
    themeConfig: {
        searchPlaceholder: 'Buscar...',
        lastUpdated: 'Última Actualización',
        logo: 'https://raw.githubusercontent.com/EliuTimana/SunatCatalogos/master/sunat-logo.svg',
        sidebar: [
            '/',
            'cat-08'
        ]
    },
    head: [
        ['meta', {name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no"}],
        ['link', { rel: 'icon', href: '/icon.svg' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#1e88e5' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#1e88e5' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#1e88e5' }]
    ],
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "Nuevo contenido disponible.",
                buttonText: "Actualizar"
            }
        }
    }
}
