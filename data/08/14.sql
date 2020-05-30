CREATE TABLE table_14
(
    codigo      VARCHAR(4)  NOT NULL PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);
INSERT INTO table_14(codigo, descripcion)
VALUES ('1000', 'Total valor de venta - operaciones exportadas')
     , ('1001', 'Total valor de venta - operaciones gravadas')
     , ('1002', 'Total valor de venta - operaciones inafectas')
     , ('1003', 'Total valor de venta - operaciones exoneradas')
     , ('1004', 'Total valor de venta – Operaciones gratuitas')
     , ('1005', 'Sub total de venta')
     , ('2001', 'Percepciones')
     , ('2002', 'Retenciones')
     , ('2003', 'Detracciones')
     , ('2004', 'Bonificaciones')
     , ('2005', 'Total descuentos')
     , ('3001', 'FISE (Ley 29852) Fondo Inclusión Social Energético');
