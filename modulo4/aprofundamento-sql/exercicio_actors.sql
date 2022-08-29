SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "1936-10-05"
WHERE id = 003;

UPDATE Actor
SET 
	name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET 
	name = "Juliana Paes"
WHERE name = "JULIANA PAES";

UPDATE Actor
SET
 name = "Cláudia Raia",
 salary = 530000,
 birth_date = "1966-12-23", 
 gender = "female"
WHERE id =  005;

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor 
WHERE 
	gender = "male" 
    AND salary > 1000000;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female"; 

SELECT SUM(salary) FROM Actor ;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name FROM Actor ORDER BY name DESC;

SELECT * FROM Actor ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

 SELECT AVG(salary), gender FROM Actor
    GROUP BY gender;

SELECT * FROM Actor;