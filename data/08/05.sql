CREATE TABLE table_05(
   codigo               VARCHAR(4) NOT NULL PRIMARY KEY
  ,descripcion          VARCHAR(33) NOT NULL
  ,codigo_internacional VARCHAR(3) NOT NULL
  ,nombre               VARCHAR(6) NOT NULL
);
INSERT INTO table_05(codigo,descripcion,codigo_internacional,nombre) VALUES
 ('1000','IGV Impuesto General a las Ventas','VAT','IGV')
,('1016','Impuesto a la Venta Arroz Pilado','VAT','IVAP')
,('2000','ISC Impuesto Selectivo al Consumo','EXC','ISC')
,('3000','Impuesto a la Renta','TOX','IR')
,('7152','Impuesto a la bolsa plastica','OTH','ICBPER')
,('9995','Exportación','FRE','EXP')
,('9996','Gratuito','FRE','GRA')
,('9997','Exonerado','VAT','EXO')
,('9998','Inafecto','FRE','INA')
,('9999','Otros tributos','OTH','OTROS');
