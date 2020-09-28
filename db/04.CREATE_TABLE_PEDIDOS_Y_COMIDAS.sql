-- CREATE TABLE pedidosConComidas (
--     pedidoYcomida_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     comida_id INT NOT NULL,
--     pedido_id INT NOT NULL,
--     cantidad INT NOT NULL,
--     precioUnidad FLOAT UNSIGNED NOT NULL,
--     FOREING KEY (comida_id) REFERENCES comidas (comida_id),
--     FOREING KEY (pedido_id) REFERENCES pedidos(pedido_id)
-- )

CREATE TABLE `pedidosconcomidas` (
  `pedidoYcomida_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `comida_id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precioUnidad` float UNSIGNED NOT NULL,
  CONSTRAINT `pedidosconcomidas_ibfk_1` FOREIGN KEY (`comida_id`) REFERENCES `comidas` (`comida_id`),
  CONSTRAINT `pedidosconcomidas_ibfk_2` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`pedido_id`)
) 


INSERT INTO `pedidosconcomidas` (`comida_id`, `pedido_id`, `cantidad`, `precioUnidad`) VALUES
(3, 2, 2, 300),
(6, 3, 1, 320),
(1, 3, 3, 500),
(4, 3, 1, 350);
