CREATE TABLE table_25
(
    codigo      VARCHAR(1)  NOT NULL PRIMARY KEY,
    descripcion VARCHAR(94) NOT NULL
);
INSERT INTO table_25(codigo, descripcion)
VALUES ('0', 'Sin información')
     , ('1', 'Si es construcción /adquisición')
     , ('2', 'Si es para refacción, remodelación, ampliación, mejoramiento o subdivisión de vivienda propia.');
