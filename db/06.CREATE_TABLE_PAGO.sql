CREATE TABLE `pago` (
  `pago_id` int(11) NOT NULL,
  `formaPago` varchar(50) NOT NULL
)

INSERT INTO `pago` (`pago_id`, `formaPago`) VALUES
(1, 'Efectivo'),
(2, 'Tarjeta');