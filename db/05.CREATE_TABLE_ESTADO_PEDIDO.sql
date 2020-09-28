CREATE TABLE `estadopedido` (
  `estado_id` int(11) NOT NULL,
  `estado` varchar(50) NOT NULL DEFAULT 'Nuevo'
)

INSERT INTO `estadopedido` (`estado_id`, `estado`) VALUES
(1, 'Nuevo'),
(2, 'Confirmado'),
(3, 'Preparando'),
(4, 'Enviando'),
(5, 'Entregado'),
(6, 'Cancelado');