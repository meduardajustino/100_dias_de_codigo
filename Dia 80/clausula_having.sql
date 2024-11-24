CREATE DATABASE  IF NOT EXISTS `empresa` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `empresa`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: empresa
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `departamento`
--

DROP TABLE IF EXISTS `departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamento` (
  `dnome` varchar(15) DEFAULT NULL,
  `dnumero` int NOT NULL,
  `cpf_gerente` char(11) NOT NULL,
  `data_inicio_gerente` date DEFAULT NULL,
  PRIMARY KEY (`dnumero`),
  KEY `cpf_gerente` (`cpf_gerente`),
  CONSTRAINT `departamento_ibfk_1` FOREIGN KEY (`cpf_gerente`) REFERENCES `funcionario` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamento`
--

LOCK TABLES `departamento` WRITE;
/*!40000 ALTER TABLE `departamento` DISABLE KEYS */;
INSERT INTO `departamento` VALUES ('Matriz',1,'88866555576','1981-06-19'),('Compras',3,'33344555587',NULL),('Administração',4,'98765432168','1995-01-01'),('Pesquisa',5,'33344555587','1988-05-22');
/*!40000 ALTER TABLE `departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dependente`
--

DROP TABLE IF EXISTS `dependente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dependente` (
  `fcpf` char(11) NOT NULL,
  `nome_dependente` varchar(15) NOT NULL,
  `sexo` char(1) DEFAULT NULL,
  `datanasc` date DEFAULT NULL,
  `parentesco` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`fcpf`,`nome_dependente`),
  CONSTRAINT `dependente_ibfk_1` FOREIGN KEY (`fcpf`) REFERENCES `funcionario` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dependente`
--

LOCK TABLES `dependente` WRITE;
/*!40000 ALTER TABLE `dependente` DISABLE KEYS */;
INSERT INTO `dependente` VALUES ('12345678966','Alicia','F','1988-12-30','Filha'),('12345678966','Elizabeth','F','1967-05-05','Esposa'),('12345678966','Michael','M','1988-01-04','Filho'),('33344555587','Alicia','F','1986-04-05','Filha'),('33344555587','Janaína','F','1958-05-03','Esposa'),('33344555587','Tiago','M','1983-10-25','Filho'),('98765432168','Antonio','M','1942-02-28','Marido');
/*!40000 ALTER TABLE `dependente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionario`
--

DROP TABLE IF EXISTS `funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionario` (
  `pnome` varchar(15) DEFAULT NULL,
  `minicial` char(1) DEFAULT NULL,
  `unome` varchar(15) DEFAULT NULL,
  `cpf` char(11) NOT NULL,
  `datanasc` date DEFAULT NULL,
  `endereco` varchar(50) DEFAULT NULL,
  `sexo` char(1) DEFAULT NULL,
  `salario` decimal(10,2) DEFAULT NULL,
  `cpf_supervisor` char(11) DEFAULT NULL,
  `dnr` int DEFAULT NULL,
  PRIMARY KEY (`cpf`),
  KEY `cpf_supervisor` (`cpf_supervisor`),
  KEY `dnr` (`dnr`),
  CONSTRAINT `funcionario_ibfk_1` FOREIGN KEY (`cpf_supervisor`) REFERENCES `funcionario` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `funcionario_ibfk_2` FOREIGN KEY (`dnr`) REFERENCES `departamento` (`dnumero`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionario`
--

LOCK TABLES `funcionario` WRITE;
/*!40000 ALTER TABLE `funcionario` DISABLE KEYS */;
INSERT INTO `funcionario` VALUES ('Jorge','L','Caio','10000000000','1955-12-01','Rua Carolina Silva, 832, São Paulo, SP','M',26000.00,NULL,5),('João','B','Silva','12345678966','1965-01-09','Rua das Flores, 751, São Paulo, SP','M',30000.00,'33344555587',5),('Fernando','T','Wong','33344555587','1955-12-08','Rua da Lapa, 34, São Paulo, SP','M',40000.00,'88866555576',5),('Joice','A','Leite','45345345376','1972-07-31','Avenida Lucas Obes, 74, São Paulo, SP','F',25000.00,'33344555587',5),('Ronaldo','K','Lima','66688444476','1962-09-15','Rua Rebouças, 65, Piracicaba, SP','M',38000.00,'33344555587',NULL),('Jorge','E','Brito','88866555576','1937-11-10','Rua do Horto, 35, São Paulo, SP','M',55000.00,NULL,1),('Jennifer','S','Souza','98765432168','1941-06-20','Avenida Artur de Lima, 54, Santo André, SP','F',43000.00,'88866555576',4),('André','V','Pereira','98798798733','1969-03-29','Rua Timbira, 35, São Paulo, SP','M',25000.00,'98765432168',4),('Alice','J','Zelaya','99988777767','1968-01-19','Rua Souza Lima, 35, Curitiba, PR','F',25000.00,'98765432168',4);
/*!40000 ALTER TABLE `funcionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localizacao_dep`
--

DROP TABLE IF EXISTS `localizacao_dep`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localizacao_dep` (
  `dnumero` int NOT NULL,
  `dlocal` varchar(15) NOT NULL,
  PRIMARY KEY (`dnumero`,`dlocal`),
  CONSTRAINT `localizacao_dep_ibfk_1` FOREIGN KEY (`dnumero`) REFERENCES `departamento` (`dnumero`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localizacao_dep`
--

LOCK TABLES `localizacao_dep` WRITE;
/*!40000 ALTER TABLE `localizacao_dep` DISABLE KEYS */;
INSERT INTO `localizacao_dep` VALUES (1,'São Paulo'),(4,'Mauá'),(5,'Itu'),(5,'Santo André'),(5,'São Paulo');
/*!40000 ALTER TABLE `localizacao_dep` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projeto`
--

DROP TABLE IF EXISTS `projeto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projeto` (
  `projnome` varchar(15) NOT NULL,
  `projnumero` int NOT NULL,
  `projlocal` varchar(15) DEFAULT NULL,
  `dnum` int NOT NULL,
  PRIMARY KEY (`projnumero`),
  KEY `dnum` (`dnum`),
  CONSTRAINT `projeto_ibfk_1` FOREIGN KEY (`dnum`) REFERENCES `departamento` (`dnumero`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projeto`
--

LOCK TABLES `projeto` WRITE;
/*!40000 ALTER TABLE `projeto` DISABLE KEYS */;
INSERT INTO `projeto` VALUES ('ProdutoX',1,'Santo André',5),('ProdutoY',2,'Itu',5),('ProdutoZ',3,'São Paulo',5),('Informatização',10,'Mauá',4),('Reorganização',20,'São Paulo',1),('Novosbenefícios',30,'Mauá',4);
/*!40000 ALTER TABLE `projeto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trabalha_em`
--

DROP TABLE IF EXISTS `trabalha_em`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trabalha_em` (
  `fcpf` char(11) NOT NULL,
  `pnr` int NOT NULL,
  `horas` decimal(3,1) NOT NULL,
  PRIMARY KEY (`fcpf`,`pnr`,`horas`),
  KEY `pnr` (`pnr`),
  CONSTRAINT `trabalha_em_ibfk_1` FOREIGN KEY (`pnr`) REFERENCES `projeto` (`projnumero`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `trabalha_em_ibfk_2` FOREIGN KEY (`fcpf`) REFERENCES `funcionario` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabalha_em`
--

LOCK TABLES `trabalha_em` WRITE;
/*!40000 ALTER TABLE `trabalha_em` DISABLE KEYS */;
INSERT INTO `trabalha_em` VALUES ('12345678966',1,32.5),('45345345376',1,20.0),('12345678966',2,7.5),('33344555587',2,10.0),('45345345376',2,20.0),('33344555587',3,10.0),('66688444476',3,40.0),('33344555587',10,10.0),('98798798733',10,35.0),('99988777767',10,10.0),('33344555587',20,10.0),('88866555576',20,0.0),('98765432168',20,15.0),('98765432168',30,20.0),('98798798733',30,5.0),('99988777767',30,30.0);
/*!40000 ALTER TABLE `trabalha_em` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Consultas com HAVING 

-- Para cada supervisor, recuperar o cpf, o número de funcionários deste supervisor e seu salário mínimo
select cpf_supervisor, count(*), min(salario)
from funcionario
group by cpf_supervisor;

-- Recuperar o cpf do supervisor, o número de todos os funcionários deste supervisor e seu salário médio
-- para supervisores com três ou mais funcionários
select cpf_supervisor, count(*), avg(salario)
from funcionario
group by cpf_supervisor
having count(*)>2;

-- Recuperar os nomes de todos os funcionários que tem dois ou mais dependentes
select pnome, unome
from funcionario, dependente
where cpf = fcpf
group by pnome, unome
having count(*)>= 2;