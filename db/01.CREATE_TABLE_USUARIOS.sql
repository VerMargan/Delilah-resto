CREATE TABLE `usuarios` (
  `usuario_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `userName` varchar(50) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `telephone` varchar(50) NOT NULL,
  `address` varchar(300) NOT NULL,
  `password` varchar(50) NOT NULL,
  `administrator` tinyint(1) NOT NULL
)

INSERT INTO `usuarios` (`userName`, `fullName`, `mail`, `telephone`, `address`, `password`, `administrator`) VALUES
('vmargan', 'Verónica Margan', 'veritoTest@funciona.com', '4553-8831', 'Av. Cabildo 300', 'gato13', 1),
('Bowie', 'David Bowie', 'db@gmail.com', '400-105-203', 'Somewhere in heaven St', 'Heroes', 0),
('AntonioMele', 'Antonio Mele Margan', 'ant@hotmail.com', '4785-5698', 'La Pampa 4386', 'mascota', 0);