-- CREATE TABLE pedidos (
--     pedido_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     usuario_id INT NOT NULL,
--     orderDescription VARCHAR (500) NOT NULL
--     estadopedido VARCHAR (50) NOT NULL,
--     hour DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
--     formaPago VARCHAR (50) NOT NULL,
--     FOREING KEY (usuario_id) REFERENCES usuarios (usuario_id)
-- )

CREATE TABLE `pedidos` (
  `pedido_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `orderDescription` varchar(500) NOT NULL,
  `hour` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `formaPago` int(2) NOT NULL,
  `estadopedido` int(6) NOT NULL DEFAULT 1,
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`)
)



INSERT INTO `pedidos` (`usuario_id`, `orderDescription`, `formaPago`) VALUES
(3, '', 1),
(1, '', 2),
(2, 'Paella sin morrón por favor',2),
(1, '', 1),
(1, '', 1),
(3, '', 1);
