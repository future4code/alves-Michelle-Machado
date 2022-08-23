 
 ALTER TABLE Filmes ADD playing_limit_date Date;
 
  UPDATE Filmes 
    SET 
	    playing_limit_date = "2022-08-30"
    WHERE id = 001;
    
    UPDATE Filmes  
    SET 
	    playing_limit_date = "2022-08-15"
    WHERE id = 003;
    
    DELETE FROM Filmes WHERE id = 004;
    
    UPDATE Filmes 
    SET 
	    sinopse = "Um homem tenta plantar uma ideia atraves dos sonhos, porém suas ações tem consequencias"
    WHERE id = 004;
    
    SELECT COUNT(*) FROM Filmes WHERE avaliation > 7.5;
    
    SELECT AVG(avaliation) FROM Filmes;
    
    SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE();
    
    SELECT MAX(avaliation) FROM Filmes; 
    
    SELECT MIN(avaliation) FROM Filmes;
    
    
    
    SELECT * FROM Filmes ORDER BY title ASC;
    
    SELECT * FROM Filmes ORDER BY title DESC LIMIT 5 ;
    
	SELECT * FROM Filmes ORDER BY date DESC LIMIT 3;
    
    SELECT * FROM Filmes ORDER BY avaliation DESC LIMIT 3;
 
 SELECT * FROM Filmes;