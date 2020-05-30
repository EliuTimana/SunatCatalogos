CREATE TABLE table_22
(
    codigo      VARCHAR(2)    NOT NULL PRIMARY KEY,
    descripcion VARCHAR(62)   NOT NULL,
    porcentaje  NUMERIC(3, 1) NOT NULL
);
INSERT INTO table_22(codigo, descripcion, porcentaje)
VALUES ('01', 'Percepción Venta Interna', 2)
     , ('02', 'Percepción a la adquisición de combustible', 1)
     , ('03', 'Percepción realizada al agente de percepción con tasa especial', 0.5);
