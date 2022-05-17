create database projeto;
use projeto ;

create table  filme (
idFilme int primary key auto_increment,
favorito varchar(45),
lancamento date,
diretor varchar(45) 
);

create table usuario (
IdUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45), 
filme varchar(45)
);
create table critica(
idCritica int ,
fkFilme int,
foreign key (fkFilme) references filme(idFilme),
fkUsuario int ,
foreign key  (fkUsuario) references usuario(idUsuario),
primary key  (fkFilme, fkUsuario, idCritica), 
avaliacaoCritica char(1),
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
(null,'‎Resident Evil','2002-04-13','Paul W. S. Anderson'),
(null,'Guerra mundial z','2013-08-10','Marc Forster');


insert into  usuario value 
(null,'tiago','tiago@silva',1),
(null,'vivi','vivi@franca',3),
(null,'gabriel','gabriel@mello',4),
(null,'bebelle','bebelle@bebelle',5),
(null,'kay ','kay@kay',7),
(null,'larissa','larissa@larissa',6),
(null,'laura','laura@laura',8),
(null,'limbert','limbert@limbert',9),
(null,'vlady','vlady@vlady',10),
(null,'marcos','marcos@marcos',18),
(null,'paula','paula@paula',20),
(null,'emy','emy@emy',1),
(null,'edy','edy@edy',1),
(null,'naty','naty',3),
(null,'may','may@may',15);

insert into critica value 
(1,5,1,5,5),
(2,4,2,4,4),
(3,9,3,1,1),
(4,3,4,3,3),
(5,2,5,2,2),
(6,10,6,1,1),
(7,21,7,1,1),
(8,25,8,1,1),
(9,11,9,5,5),
(10,12,10,5,5);



select * from  filme;
select * from  usuario;
select * from  critica;

select * from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme; 

select usuario.nome , filme.favorito from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme; 

select critica.avalicaoCritica from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme ;

select critica.avaliacaoCritica , filme.favorito from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme where  critica.avaliacaoCritica = 5; 

select critica.avaliacaoCritica ,critica.avaliacaoUsuario , filme.favorito from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme where  critica.avaliacaoCritica = 1;

select usuario.nome , filme.favorito , filme.diretor, critica.avaliacaoUsuario , critica.avaliacaoCritica  from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme where  critica.avaliacaoCritica = 5;

select usuario.nome , filme.favorito , filme.diretor from usuario join critica  on idUsuario = fkUsuario join  filme on idFilme = fkFilme where  critica.avaliacaoCritica = 1;