CREATE TABLE table_59(
   codigo      VARCHAR(3) NOT NULL PRIMARY KEY
  ,descripcion VARCHAR(187) NOT NULL
);
INSERT INTO table_59(codigo,descripcion) VALUES
 ('001','Depósito en cuenta')
,('002','Giro')
,('003','Transferencia de fondos')
,('004','Orden de pago')
,('005','Tarjeta de débito')
,('006','Tarjeta de crédito emitida en el país por una empresa del sistema financiero')
,('007','Cheques con la cláusula de "NO NEGOCIABLE", "INTRANSFERIBLES", "NO A LA ORDEN" u otra equivalente, a que se refiere el inciso g) del artículo 5° de la ley')
,('008','Efectivo, por operaciones en las que no existe obligación de utilizar medio de pago')
,('009','Efectivo, en los demás casos')
,('010','Medios de pago usados en comercio exterior')
,('011','Documentos emitidos por las EDPYMES y las cooperativas de ahorro y crédito no autorizadas a captar depósitos del público')
,('012','Tarjeta de crédito emitida en el país o en el exterior por una empresa no perteneciente al sistema financiero, cuyo objeto principal sea la emisión y administración de tarjetas de crédito')
,('013','Tarjetas de crédito emitidas en el exterior por empresas bancarias o financieras no domiciliadas')
,('101','Transferencias – Comercio exterior')
,('102','Cheques bancarios - Comercio exterior')
,('103','Orden de pago simple - Comercio exterior')
,('104','Orden de pago documentario - Comercio exterior')
,('105','Remesa simple - Comercio exterior')
,('106','Remesa documentaria - Comercio exterior')
,('107','Carta de crédito simple - Comercio exterior')
,('108','Carta de crédito documentario - Comercio exterior')
,('999','Otros medios de pago');
