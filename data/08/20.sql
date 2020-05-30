CREATE TABLE table_20
(
    codigo      VARCHAR(2)  NOT NULL PRIMARY KEY,
    descripcion VARCHAR(51) NOT NULL
);
INSERT INTO table_20(codigo, descripcion)
VALUES ('01', 'Venta')
     , ('02', 'Compra')
     , ('04', 'Traslado entre establecimientos de la misma empresa')
     , ('08', 'Importación')
     , ('09', 'Exportación')
     , ('13', 'Otros')
     , ('14', 'Venta sujeta a confirmación del comprador')
     , ('18', 'Traslado emisor itinerante CP')
     , ('19', 'Traslado a zona primaria');
