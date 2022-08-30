1-a) Uma chave estrangeira é uma key associada a uma key de uma outra tabela. Ou seja, para que o valor dessa key seja valida ela já deve existir em uma outra tabela.

b)
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"003",
    "Muito bom!",
    7,
		"002"
),(
		"002",
    "Muito bom!",
    7,
		"002"
),
(
		"004",
    "Muito bom!",
    7,
		"004"
);
c) Erro pois não existe a key associada a foreign key.

d) ALTER TABLE Filmes DROP COLUMN rating

2-a) Uma tabela que representa a relação ator e filme.

b)INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "001"
),(
	"002",
    "002"
),(
	"003",
    "001"
),(
	"003",
    "002"
),(
	"004",
    "001"
),(
	"004",
    "002"
);

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-arthur-fernandes`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

Erro de inexistência da Primary Key na tabela Filmes associada a Foreign Key da query.

d)Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-arthur-fernandes`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possivel deletar ou atualizar uma linha Pai, existe uma foreign key referente a este elemento.

3-a) Condicional. Em que ...
b) SELECT name, Filmes.id, Rating.rate FROM Filmes 
INNER JOIN Rating ON Filmes.id = Rating.movie_id;
select * from Rating