CREATE TABLE table_27
(
    codigo      VARCHAR(1)   NOT NULL PRIMARY KEY,
    descripcion VARCHAR(139) NOT NULL
);
INSERT INTO table_27(codigo, descripcion)
VALUES ('0', 'Sin indicador')
     , ('1', 'Calificado para crédito Mi Vivienda / Techo Propio')
     , ('2', 'Libre disposición de la AFP')
     , ('3',
        'Calificado como primera vivienda de acuerdo a la información proporcionada por el cliente (para créditos otorgados a partir del 01.01.2013)');
