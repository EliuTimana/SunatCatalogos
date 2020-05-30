CREATE TABLE table_10
(
    codigo      VARCHAR(2)  NOT NULL PRIMARY KEY,
    descripcion VARCHAR(38) NOT NULL
);
INSERT INTO table_10(codigo, descripcion)
VALUES ('01', 'Intereses por mora')
     , ('02', 'Aumento en el valor')
     , ('03', 'Penalidades/ otros conceptos')
     , ('11', 'Ajustes de operaciones de exportación')
     , ('12', 'Ajustes afectos al IVAP');
