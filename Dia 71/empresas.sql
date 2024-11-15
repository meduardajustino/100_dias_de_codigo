-- Criação do banco de dados e tabelas conforme o seu exemplo
CREATE DATABASE IF NOT EXISTS `empresa` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `empresa`;

-- Tabela `departamento`
CREATE TABLE `departamento` (
  `dnome` varchar(15) DEFAULT NULL,
  `dnumero` int NOT NULL,
  `cpf_gerente` char(11) NOT NULL,
  `data_inicio_gerente` date DEFAULT NULL,
  PRIMARY KEY (`dnumero`),
  CONSTRAINT `departamento_ibfk_1` FOREIGN KEY (`cpf_gerente`) REFERENCES `funcionario` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabela `dependente`
CREATE TABLE `dependente` (
  `fcpf` char(11) NOT NULL,
  `nome_dependente` varchar(15) NOT NULL,
  `sexo` char(1) DEFAULT NULL,
  `datanasc` date DEFAULT NULL,
  `parentesco` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`fcpf`, `nome_dependente`),
  CONSTRAINT `dependente_ibfk_1` FOREIGN KEY (`fcpf`) REFERENCES `funcionario` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabela `funcionario`
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
  CONSTRAINT `funcionario_ibfk_1` FOREIGN KEY (`cpf_supervisor`) REFERENCES `funcionario` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `funcionario_ibfk_2` FOREIGN KEY (`dnr`) REFERENCES `departamento` (`dnumero`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabela `trabalha_em`
CREATE TABLE `trabalha_em` (
  `fcpf` char(11) NOT NULL,
  `pnr` int NOT NULL,
  `horas` decimal(3,1) NOT NULL,
  PRIMARY KEY (`fcpf`, `pnr`, `horas`),
  CONSTRAINT `trabalha_em_ibfk_1` FOREIGN KEY (`pnr`) REFERENCES `projeto` (`projnumero`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `trabalha_em_ibfk_2` FOREIGN KEY (`fcpf`) REFERENCES `funcionario` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tabela `projeto`
CREATE TABLE `projeto` (
  `projnome` varchar(15) NOT NULL,
  `projnumero` int NOT NULL,
  `projlocal` varchar(15) DEFAULT NULL,
  `dnum` int NOT NULL,
  PRIMARY KEY (`projnumero`),
  CONSTRAINT `projeto_ibfk_1` FOREIGN KEY (`dnum`) REFERENCES `departamento` (`dnumero`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exemplo de inserções nas tabelas
INSERT INTO `funcionario` VALUES 
('Jorge', 'L', 'Caio', '10000000000', '1955-12-01', 'Rua Carolina Silva, 832, São Paulo, SP', 'M', 26000.00, NULL, 5),
('João', 'B', 'Silva', '12345678966', '1965-01-09', 'Rua das Flores, 751, São Paulo, SP', 'M', 30000.00, '33344555587', 5);

INSERT INTO `trabalha_em` VALUES 
('12345678966', 1, 32.5),
('12345678966', 2, 7.5),
('33344555587', 2, 10.0),
('33344555587', 3, 10.0);

-- Criação da visão que retorna funcionários que trabalham mais de 35 horas
CREATE VIEW total_horas AS 
SELECT pnome, unome, SUM(horas) AS total_horas
FROM funcionario
INNER JOIN trabalha_em ON funcionario.cpf = trabalha_em.fcpf
GROUP BY funcionario.cpf
HAVING total_horas > 35;

-- Selecionando dados da visão
SELECT * FROM total_horas;
