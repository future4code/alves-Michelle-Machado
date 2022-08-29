EXERCICIO 6

a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 

    ALTER TABLE Filmes ADD playing_limit_date Date;

b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, 
uma avaliação 8.5.

    ALTER TABLE Filmes CHANGE avaliation FLOAT;

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído

    UPDATE Filmes 
    SET 
	    playing_limit_date = "2022-08-30"
    WHERE id = 001;

    UPDATE Filmes  
    SET 
	    playing_limit_date = "2022-08-15"
    WHERE id = 003;

d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

    DELETE FROM Filmes WHERE id = 004

    UPDATE Filmes 
    SET 
	    sinopse = "Um homem tenta plantar uma ideia atraves dos sonhos, porém suas ações tem consequencias"
    WHERE id = 004;

    RESPOSTA: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
    Nada foi modificado, pois o id não existe, porém não houve mensagem de erro.


DESAFIOS

a) Quantos filmes em cartaz possuem avaliações maiores do que 7.5?  RESPOSTA: 2

    SELECT COUNT(*) FROM Filmes WHERE avaliation > 7.5

b) Qual a média das avaliações dos filmes? RESPOSTA: 8.3

    SELECT AVG(avaliation) FROM Filmes

c) Qual a quantidade de filmes em cartaz?   RESPOSTA: 1

    SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE();


d) Qual a quantidade de filmes que ainda irão lançar?

    SELECT COUNT(*) FROM Filmes WHERE date > CURDATE();

e) Qual a maior nota dos filmes? RESPOSTA: 10

    SELECT MAX(avaliation) FROM Filmes; 

f) Qual a menor nota dos filmes? RESPOSTA: 7

    SELECT MIN(avaliation) FROM Filmes;   

g) Escreva uma query que:
*Retorne todos os filmes em ordem alfabética*
*Retorne os 5 primeiros filmes em ordem descrente alfabética* 
*Retorne os 3 filmes mais recentes em cartaz*
*Retorne os 3 filmes melhor avaliados*  

    SELECT * FROM Filmes ORDER BY title ASC

    SELECT * FROM Filmes ORDER BY title DESC LIMIT 5  

    SELECT * FROM Filmes ORDER BY date DESC LIMIT 3

    SELECT * FROM Filmes ORDER BY avaliation LIMIT 3
    



