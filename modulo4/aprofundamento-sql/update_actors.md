
EXERCICIO 1

a) ALTER TABLE Actor DROP COLUMN salary;
    Essa query altera a tabela Actor, excluindo a coluna de salário

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
    Essa query altera a tabela Actor, renomeando a coluna gender para sex e demilitando seu valor para até 6 caracteres

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
     Essa query altera a tabela Actor, alterando o valor de gender para até 255 caracteres

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

EXERCICIO 2

a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "1936-10-05"
WHERE id = 003;

b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

UPDATE Actor
SET 
	name = "JULIANA PAES",
WHERE name = "Juliana Paes";

UPDATE Actor
SET 
	name = "Juliana Paes"
WHERE name = "JULIANA PAES";

c) Escreva uma query que atualize todas as informações do ator com o id 005

UPDATE Actor
SET
 name = "Cláudia Raia",
 salary = 530000,
 birth_date = "1966-12-23", 
 gender = "female",
WHERE id =  005;

d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.

 RESPOSTA: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
 Não aparece erro, mas aparece que nenhuma linha foi alterada. Nada foi afetado

EXERCICIO 3

a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro

    DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

    DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

Exercício 4

    SELECT COUNT(*) FROM Actor 
    <!-- CONTA DA QUANTIDADE DE ATORES NO TOTAL -->

    SELECT COUNT(*) FROM Actor WHERE gender = "female"
    <!-- CONTA DA QUANTIDADE DE ATRIZES -->

    SELECT AVG(salary) FROM Actor
    <!-- CONTA A MÉDIA DOS SALÁRIOS DOS ATORES -->

a) Escreva uma query que pegue o maior salário de todos os atores e atrizes

SELECT MAX(salary) FROM Actor 

b) Escreva uma query que pegue o menor salário das atrizes

SELECT MIN(salary) FROM Actor WHERE gender = "female" 

c) Escreva uma query que pegue a quantidade de atrizes

SELECT COUNT(*) FROM Actor WHERE gender = "female" 

d) Escreva uma query que pegue a soma de todos os salários

SELECT SUM(salary) FROM Actor 


Exercício 5

    SELECT * FROM Actor LIMIT 3
    <!-- O LIMIT limita a quantidade de dados retornados. Se quisermos somente 3 atores da tabela -->

    SELECT * FROM Actor ORDER BY name ASC
    <!-- ORDER BY permite que ordenemos os dados dependendo de alguma coluna da tabela. 
    Podemos dizer se queremos na ordem crescente (ASC) ou decrescente (DESC). -->

    SELECT * FROM Actor ORDER BY name ASC LIMIT 4
    <!-- Podemos juntar com o LIMIT e pegarmos os 4 primeiros atores (em ordem alfabética) -->

    SELECT COUNT(*), gender FROM Actor GROUP BY gender
    <!-- O último é um operador que permite agrupar os dados em relação a alguma coluna da tabela -->

a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
    A query fez uma tabela com a quantidade de atores e atrizes. 
    Como teste eu exclui o GROUP BY gender e o código não funcionou, simplesmente porque ele iria contar os generos, 
    porém não saberia como mostrar isso na tela, já que não foram agrupados nem especificaram qual genero seria mostrado.

b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
    
SELECT id, name FROM Actor ORDER BY name DESC

c) Faça uma query que retorne todos os atores ordenados pelo salário

SELECT * FROM Actor ORDER BY salary

d) Faça uma query que retorne os atores com os três maiores salarios

SELECT * FROM Actor 
ORDER BY salary DESC
LIMIT 3;

e) Faça uma query que retorne a média de salário por gênero
    SELECT AVG(salary), gender FROM Actor
    GROUP BY gender


