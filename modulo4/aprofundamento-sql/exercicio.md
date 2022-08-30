1-a) Remove a coluna de salário.
b)Muda o nome da coluna de gender para sex
c)Muda o tamanho máximo de characteres da coluna gender de 6 para 255.
d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2-a)
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "1936-10-05"
WHERE id = "003"
b)
UPDATE Actor
SET name = UPPER(name)
WHERE name = "Juliana Paes"

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES"
c)
UPDATE Actor
SET name = "",
birth_date = "",
salary = "",
gender = "",
id = ""
WHERE id = "005"

d) Ele atualiza (sucesso na requisição), porém como o dado não existe, nada muda. 

3-a)DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b) DELETE FROM Actor WHERE gender = "male" and salary > 1000000

4-a)SELECT MAX(salary) FROM Actor

b) SELECT MIN(salary) FROM Actor where gender = "female"

C) SELECT COUNT(*) FROM Actor where gender = "female"

d) SELECT SUM(salary) FROM Actor

5-a) Mostra a contagem agrupada de atores e atrizes.

b)SELECT id, name 
FROM Actor
ORDER BY name DESC

c)SELECT * 
FROM Actor
ORDER BY salary 
(ordenou crescente)

d)SELECT * 
FROM Actor
ORDER BY salary DESC LIMIT 3

e)SELECT AVG(salary), gender
FROM Actor
GROUP BY gender

6-a)ALTER TABLE Filmes ADD playing_limit_date DATE 
b)ALTER TABLE Filmes CHANGE evaluation rating DECIMAL(3,1);

c)
UPDATE Filmes 
SET playing_limit_date = current_date()
where id = "001" or id = "002"
 
UPDATE Filmes 
SET playing_limit_date = "2021-08-08"
where id = "003"

d) Você consegue atualizar um campo inexistente, porém nada é salvo.

