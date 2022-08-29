	CREATE TABLE Avaliacoes (
		id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Filmes(id)
    );

	INSERT INTO Avaliacoes 
	VALUES(
	"432",
	"Filme muito bom, me fez questionar sobre varias coisas da minha vida",
    7.8,
    "001"
);

	INSERT INTO Avaliacoes 
	VALUES(
	"744",
	"Gostei, porém poderia ter sido melhor",
    6.5,
    "002"
);

	INSERT INTO Avaliacoes 
	VALUES(
	"987",
	"Amei o figurino, me inspirou para fazer o meu TCC",
    9.5,
    "003"
);

    INSERT INTO Avaliacoes 
    VALUES(
	"235",
	"Odiei esse filme",
    0.5,
    "007"
    );
    
    ALTER TABLE Filmes DROP COLUMN avaliation;
    
	DELETE FROM Filmes WHERE id = "001";
    
     CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

 SELECT * FROM MovieCast;
 
 INSERT INTO MovieCast
 VALUES (
	"001",
    "001"
 );
 
SELECT Filmes.id, title, Avaliacoes.rate FROM Filmes
INNER JOIN Avaliacoes ON Filmes.id = Avaliacoes.movie_id;
 
 
