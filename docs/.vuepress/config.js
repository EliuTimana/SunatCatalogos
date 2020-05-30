module.exports = {
    title: 'Sunat Catalogos',
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
        ['meta', {name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no"}]
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
