CREATE TABLE Tasks (
	title VARCHAR (255) NOT NULL,
	description TEXT NOT NULL,
	limitDate DATE NOT NULL,
	creatorUserId VARCHAR(255) NOT NULL,
    status ENUM("TO_DO", "DOING", "DONE"),
    creatorUserNickname VARCHAR(255) NOT NULL,
    id VARCHAR(255) PRIMARY KEY,
    FOREIGN KEY (creatorUserId) REFERENCES Users (id)
);

select * FROM Users ;

select * FROM Tasks ;


CREATE TABLE User_Tasks (
	id_task varchar(255),
    id_users varchar(255),
    FOREIGN KEY (id_task) REFERENCES Tasks(id),
	FOREIGN KEY (id_users) REFERENCES Users(id)
);

select * FROM User_Tasks ;

CREATE TABLE Adress (
	cep varchar(255) NOT NULL,
    logradouro varchar(255) not null,
    numero varchar(4) not null,
    complemento varchar(4),
    bairro varchar(255) ,
    cidade varchar(255) NOT NULL,
    estado varchar(255) NOT NULL
);




