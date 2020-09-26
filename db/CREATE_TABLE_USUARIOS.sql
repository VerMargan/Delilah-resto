CREATE TABLE usuarios (
    usuario_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    userName VARCHAR (50) UNIQUE NOT NULL,
    fullName VARCHAR (100) NOT NULL,
    mail VARCHAR (100) UNIQUE NOT NULL,
    telephone VARCHAR (50) NOT NULL,
    address VARCHAR (300) NOT NULL,
    password VARCHAR (50) NOT NULL,
    administrator BOOLEAN NOT NULL
    
)