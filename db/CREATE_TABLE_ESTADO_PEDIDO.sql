CREATE TABLE estadoPedido (
   estado_id INT NOT NULL,
   estado VARCHAR(50) NOT NULL DEFAULT "Nuevo"
);

INSERT INTO estadoPedido (estado) VALUES ('Nuevo'), ('Confirmado'), ('Preparando'), ('Enviando'), ('Entregado'), ('Cancelado')