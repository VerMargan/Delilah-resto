CREATE TABLE pedidosConComidas (
    pedidoYcomida_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    comida_id INT NOT NULL,
    pedido_id INT NOT NULL,
    cantidad INT NOT NULL,
    precioUnidad FLOAT UNSIGNED NOT NULL,
    FOREING KEY (comida_id) REFERENCES comidas (comida_id),
    FOREING KEY (pedido_id) REFERENCES pedidos(pedido_id)
)
INSERT INTO `pedidosconcomidas` (`comida_id`, `pedido_id`, `cantidad`, `precioUnidad`) VALUES ( '3', '2', '2', '300');