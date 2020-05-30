CREATE TABLE table_12
(
    codigo      VARCHAR(2)  NOT NULL PRIMARY KEY,
    descripcion VARCHAR(11) NOT NULL
);
INSERT INTO table_12(codigo, descripcion)
VALUES ('01', 'Factura – emitida para corregir error en el RUC')
     , ('02', 'Factura – emitida por anticipos')
     , ('03', 'Boleta de Venta – emitida por anticipos')
     , ('04', 'Ticket de Salida - ENAPU')
     , ('05', 'Código SCOP')
     , ('06', 'Factura electrónica remitente')
     , ('07', 'Guia de remisión remitente')
     , ('08', 'Declaración de salida del depósito franco')
     , ('09', 'Declaración simplificada de importación')
     , ('10', 'Liquidación de compra - emitida por anticipos')
     , ('99', 'Otros');
