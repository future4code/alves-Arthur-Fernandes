1-a) varchar > type text 
date > type date
primary key > a informação deve ser única e sem ser nula, além de representar o identificador do elemento da tabela.
not null > não pode ser vazio.
varchat (x) > x representa o número de characteres máximos aceitos.
b) SHOW DATABASES > mostra os schemas conectados ao usuário (talvez)
SHOW TABLES > mostra as tabelas criadas 
c)DESCRIBE Actor > mostra a tabela com seus elementos chaves(as categorias) e types associados.

2-b) Entrada duplicada na primary key. Pois a primary key deve ser única.
c) Faltava birth_date e gender nos parametros,
INSERT INTO Actor (id, name, salary) >(id, name, salary, birth_date, gender) 
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
d) Faltava o nome do ator
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
d) Faltava aspas na data de nascimento.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

3-a) SELECT * from Actor WHERE gender = "female"
b) SELECT salary from Actor WHERE name = "Tony Ramos"
c) SELECT * from Actor WHERE gender = "invalid" >> Por não haver nenhum as colunas voltaram nulas.
d) SELECT id, name, salary from Actor WHERE salary <= 500000
e) SELECT id, nome from Actor WHERE id = "002" >> SELECT id, name from Actor WHERE id = "002" > name não nome.

4-a) Mostra os atores da tabela Actor onde o nome começa com A ou J e o salário é maior que 300.000. 
b)SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000
c)SELECT * from Actor WHERE name LIKE "%G%" or "%g%"
d)SELECT * from Actor WHERE ((name LIKE "%G%" OR "%g%") OR (name like "%A%" OR "%a%")) AND salary BETWEEN 350000 and 900000

5-a) 
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    evaluation tinyint(10),
    release_date DATE NOT NULL,
    synopsis text NOT NULL
);
b-c-d-e)
INSERT INTO Filmes (id, name, evaluation, release_date, synopsis)
VALUES(
  "004", 
  "O Auto da Compadecida",
  9,
  "2000-09-10", 
  "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna."
);

6-a)SELECT id, name, evaluation from Filmes WHERE id LIKE "string de id chegando do back ex: 004"
b) SELECT * from Filmes WHERE name LIKE "string de titulo"
b) SELECT id, name, synopsis from Filmes WHERE evaluation >= 7

7-a)SELECT * from Filmes WHERE name LIKE "%vida%" or "%Vida%"
b)SELECT * from Filmes WHERE (name LIKE "%auto%" or "%Auto%") OR synopsis LIKE "%auto%" or "%Auto%"
c)SELECT * from Filmes WHERE release_date < "2022-08-022"
d)SELECT * from Filmes WHERE ((name LIKE "%auto%" or "%Auto%") OR synopsis LIKE "%auto%" or "%Auto%") AND (release_date < "2022-08-022") AND (evaluation > 7)
