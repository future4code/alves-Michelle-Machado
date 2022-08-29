Exercício 1

a) Explique o que é uma chave estrangeira
    É uma forma de relacionar duas tabelas, indicando qual informação vincular atraves do id.
    A sintaxe da chave estrangeira é FOREIGN KEY, e ele deve sempre se referenciar a uma PRIMARY KEY

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

    CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id)
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

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

   Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-michelle-machado`.`Avaliacoes`, CONSTRAINT `Avaliacoes_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

   Não foi achado esse id do movie, por isso o erro fala que não se pode adicionar nem modificar um valor, pois a chave do id não existe

d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

    ALTER TABLE Filmes DROP COLUMN avaliation;

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query

    DELETE FROM Filmes WHERE id = "001"

    Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-michelle-machado`.`Avaliacoes`, CONSTRAINT `Avaliacoes_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

    Não pode deletar um filme cujo tem avaliação em outra tabela

Exercício 2

a) Explique, com as suas palavras, essa tabela

    A tabela é 
    O objetivo dessa tabela é correlacionar os atores com os filmes

b) Crie, ao menos, 6 relações nessa tabela 

    CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

 
    INSERT INTO MovieCast
    VALUES (
	    "001",
        "001"
);

c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query


Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-michelle-machado`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

    Não encontrou nem o filme nem o ator para correlacionar as tabelas


d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

    Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-michelle-machado`.`Avaliacoes`, CONSTRAINT `Avaliacoes_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

    Não pode deletar um ator que tenha relação em outra tabela

Exercício 3

a) Explique, com suas palavras, a query acima. O que é o operador ON?
    
    O on é pra corresponder / correlacionar uma coluna de duas tabelas diferentes

b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

    SELECT Filmes.id, title, Avaliacoes.rate FROM Filmes
    INNER JOIN Avaliacoes ON Filmes.id = Avaliacoes.movie_id;   








