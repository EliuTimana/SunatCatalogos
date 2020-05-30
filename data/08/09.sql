CREATE TABLE table_09
(
    codigo      VARCHAR(2)  NOT NULL PRIMARY KEY,
    descripcion VARCHAR(38) NOT NULL
);
INSERT INTO table_09(codigo, descripcion)
VALUES ('01', 'Anulación de la operación'),
       ('02', 'Anulación por error en el RUC'),
       ('03', 'Corrección por error en la descripción'),
       ('04', 'Descuento global'),
       ('05', 'Descuento por ítem'),
       ('06', 'Devolución total'),
       ('07', 'Devolución por ítem'),
       ('08', 'Bonificación'),
       ('09', 'Disminución en el valor'),
       ('10', 'Otros Conceptos'),
       ('11', 'Ajustes de operaciones de exportación'),
       ('12', 'Ajustes afectos al IVAP');
