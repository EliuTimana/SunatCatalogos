CREATE TABLE table_21
(
    codigo      VARCHAR(2)  NOT NULL PRIMARY KEY,
    descripcion VARCHAR(34) NOT NULL
);
INSERT INTO table_21(codigo, descripcion)
VALUES ('01', 'Numeración DAM')
     , ('02', 'Número de orden de entrega')
     , ('03', 'Número SCOP')
     , ('04', 'Número de manifiesto de carga')
     , ('05', 'Número de constancia de detracción')
     , ('06', 'Otros');
