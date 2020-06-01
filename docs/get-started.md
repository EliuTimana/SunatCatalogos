---
pageClass: content-page-w100
sidebarDepth: 3
---

# Inicio
Lista de catálogos utilizados por SUNAT para facturación electrónica.

## ¿Cómo utilizarlo?
### Consume los endpoints JSON
```javascript
const code = '01';
let response;
const url = `https://raw.githubusercontent.com/EliuTimana/SunatCatalogos/master/data/08/${code}.json`; 
fetch(url).then((r) => {
    r.json().then(data => {
        response = data; // Json response
    });
})
```
<data-fetcher type="json"></data-fetcher>

### Descarga los archivos CSV
<data-fetcher type="csv"></data-fetcher>

### Descarga las tablas SQL
<data-fetcher type="sql"></data-fetcher>
