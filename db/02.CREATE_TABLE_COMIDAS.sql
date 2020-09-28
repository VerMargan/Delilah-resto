CREATE TABLE `comidas` (
  `comida_id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` varchar(200) NOT NULL,
  `photoURL` varchar(300) NOT NULL,
  `description` varchar(500) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `inhabilitada` tinyint(1) DEFAULT 0
)

INSERT INTO `comidas` (`name`, `photoURL`, `description`, `price`, `inhabilitada`) VALUES
('ravioles de ricota con estofado', 'https://via.placeholder.com/150', 'ravioles rellenos con ricota acompañado con estofado de ternera', 500, 0),
('hamburguesa completa', 'https://via.placeholder.com/150', 'medallon de carne vacuna entre dos panes con jamón, queso y tomate', 300, 0),
('milanesa suprena de pollo con puré de papas', 'https://via.placeholder.com/150', 'milanesa de suprema acompañado con puré de papas posta, no puré chef', 350, 1),
('Pizza Napolitana', 'https://via.placeholder.com/150', 'pizza a la piedra con muzzarella de búfala, tomate, ajo y aceite de oliva', 320, 0),
('paella de mariscos', 'https://via.placeholder.com/150', 'arroz acompañado con frutos de mar y verduras', 600, 0),
('ensalada césar', 'https://via.placeholder.com/150', 'hojas verdes, crutons, pollo y queso parmesano', 360, 0);