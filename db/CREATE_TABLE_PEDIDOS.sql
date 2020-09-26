CREATE TABLE pedidos (
    pedido_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_id INT NOT NULL,
    orderDescription VARCHAR (500) NOT NULL
    estadopedido VARCHAR (50) NOT NULL,
    hour DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    formaPago VARCHAR (50) NOT NULL,
    FOREING KEY (usuario_id) REFERENCES usuarios (usuario_id)
)

