create database projeto;
use projeto ;

create table  filme (
idFilme int primary key auto_increment,
nome varchar(45),
lancamento date,
diretor varchar(45) 
);

create table usuario (
IdUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45), 
senha varchar(45),
Slasher varchar(45),
Alien varchar(45),
Trash varchar(45),
Fantasma varchar(45),
Zumbi varchar(45)
);
create table critica(
idCritica int primary key  auto_increment  ,
fkFilme int,
foreign key (fkFilme) references filme(idFilme),
fkUsuario int ,
foreign key  (fkUsuario) references usuario(idUsuario),
NomeFilme varchar(255),
avaliacaoUsuario char(10)
);


insert into  filme value 
(null,'o massacre da serra eletrica ', '1974-08-19','Tobe Hooper'),
(null,'Panico  ', '1996-06-10','Wes Craven'),
(null,'sexta feira 13', '1980-08-13','Sean S. Cunningham'),
(null,'Halloween','1978-08-31','John Carpenter'),
(null,'Brinquedo Assassino','1988-02-20','Don Mancini'),
(null,'Alien ', '1979-08-19','Ridley Scott'),
(null,'O Predador','1987-08-10','John McTiernan'),
(null,'Alien Vs Predador',' 2004-05-20','Paul W. S. Anderson'),
(null,'O enigma de outro mundo','1982-10-03','John Carpenter'),
(null,' Guerras dos mundos',' 2005-03-04','Steven Spielberg'),
(null,'Evil Dead 2','1987-09=27 ','Sam Raimi'),
(null,' Fome animal','1992-04-25','Peter Jackson'),
(null,'Palhaços Assassinos do Espaço Sideral','1988-05-27','Stephen Chiodo'),
(null,'O Ataque dos Vermes Malditos','1990-11-30','Ron Underwood'),
(null,'Re-Animator',' 1985-09-02','Stuart Gordon'),
(null,' Invocação do mal',' 2021-07-09','James Wan'),
(null,'O Grito','2005-01-19','Nicolas Pesce'),
(null,'O Chamado','2002-02-15 ','Gore Verbinski'),
(null,'O Exorcista','1973-12-19 ','William Friedkin'),
(null,'A Hora do Pesadelo','1984-01-30','Wes Craven'),
(null,'Madrugada dos Mortos','2004-10-12','Zack Snyder'),
(null,'Extermínio','2002-08-01','Danny Boyle'),
(null,'REC','2007-09-30',' Jaume Balagueró'),
(null,'Resident Evil','2002-04-13','Paul W. S. Anderson'),
(null,'Guerra mundial z','2013-08-10','Marc Forster');



 




insert into critica value 
(1,5,4,4),
(2,4,4,3),
(3,9,4,3),
(4,3,4,2),
(5,2,4,1),
(6,10,4,3),
(1,5,4,4),
(2,4,4,5),
(3,9,4,1),
(4,3,4,2),
(5,2,4,1),
(6,10,4,2);

insert into critica value 
(1,5,1,5),
(2,4,1,4),
(3,9,1,1),
(4,3,1,3),
(5,2,1,2),
(6,10,1,1),
(7,21,1,1),
(4,17,1,1),
(9,11,1,5),
(10,12,1,5);



select * from  filme;
select * from  usuario;
select * from  critica;

alter table critica add column NomeFilme varchar(255);

select avg(avaliacaoUsuario) from critica group by nomeFilme = 'Predator';

-- exibindo os filmes favoritos dos usuarios
select * from usuario join filme on idUsuario = idFilme;
 

 -- exibindo todos os filmes lançamentos e diretores 
 select filme.nome,filme.lancamento,filme.diretor from filme;
 
-- exibindo os filmes favoritos dos usuarios e as avaliações
select * from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme ;

-- exibindo os filmes trash favoritos e as notas dos usuario
select usuario.trash ,critica.avaliacaoUsuario from usuario join critica on idUsuario = fkUsuario;

-- exibindo os filmes slasher favoritos e as notas dos usuario
select usuario.slasher ,critica.avaliacaoUsuario from usuario join critica on idUsuario = fkUsuario;

-- exibindo os filmes fantasma favoritos e as notas dos usuario
select usuario.fantasma ,critica.avaliacaoUsuario from usuario join critica on idUsuario = fkUsuario;

-- exibindo o nome dos filmes com avaliação 5 estrela
select critica.avaliacaoUsuario , filme.nome  from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme where  critica.avaliacaoUsuario = 5; 

-- exibindo o nome dos filmes com avaliação 1 estrela
select critica.avaliacaoUsuario ,  filme.nome from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme where  critica.avaliacaoUsuario = 1;

-- exibindo o nome dos filmes diretores e data de lançamento
select  filme.nome , filme.diretor, filme.lancamento  from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme ;

-- exibindo a data dos  filme favoritos dos clientes 
select  filme.nome , filme.diretor, filme.lancamento from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme group by lancamento;


-- exibindo os nomes dos filmes com maior e menor nota 
select filme.nome , max(avaliacaoUsuario) as 'Maior Notas', min(avaliacaoUsuario) as 'Menor Nota'  
from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme  group by nome ;





