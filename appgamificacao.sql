-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Jul-2022 às 23:10
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `appgamificacao`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `idproduto` int(11) NOT NULL,
  `NomeProduto` varchar(55) DEFAULT NULL,
  `PontosProduto` int(11) DEFAULT NULL,
  `QuantidadeProduto` int(11) DEFAULT NULL,
  `ProdutoComprado` tinyint(4) NOT NULL DEFAULT 0,
  `utilizadorPai_idutilizadorPai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `NomeProduto`, `PontosProduto`, `QuantidadeProduto`, `ProdutoComprado`, `utilizadorPai_idutilizadorPai`) VALUES
(28, 'Pacote de pastilhas', 10, 10, 1, 23),
(29, 'Saqueta de cromos', 20, 10, 0, 23),
(30, 'Cinema', 100, 1, 1, 23),
(31, 'Jantar fora', 100, 3, 1, 23),
(32, 'Jogo ', 200, 1, 0, 23),
(33, 'Playstation', 1000, 1, 0, 23),
(34, 'Peca de roupa ', 50, 5, 0, 24),
(35, 'Mochila', 50, 1, 0, 24),
(36, 'Gomas', 10, 10, 1, 24),
(37, 'Brinquedo', 50, 1, 0, 24);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto_has_utilizadorfilho`
--

CREATE TABLE `produto_has_utilizadorfilho` (
  `produto_idproduto` int(11) NOT NULL,
  `utilizadorFilho_idutilizadorFilho` int(11) NOT NULL,
  `DataCompra` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produto_has_utilizadorfilho`
--

INSERT INTO `produto_has_utilizadorfilho` (`produto_idproduto`, `utilizadorFilho_idutilizadorFilho`, `DataCompra`) VALUES
(30, 23, '2022-07-19'),
(31, 23, '2022-07-19'),
(36, 25, '2022-07-19'),
(28, 27, '2022-07-19');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tarefa`
--

CREATE TABLE `tarefa` (
  `IdTarefa` int(11) NOT NULL,
  `NomeTarefa` varchar(25) NOT NULL,
  `DescricaoTarefa` varchar(200) DEFAULT NULL,
  `PontosTarefa` int(11) NOT NULL,
  `DataAtribuicao` date NOT NULL DEFAULT current_timestamp(),
  `DataLimite` date DEFAULT NULL,
  `TarefaRealizada` tinyint(4) NOT NULL DEFAULT 0,
  `DataRealizacao` date DEFAULT NULL,
  `TarefaValidada` tinyint(4) DEFAULT NULL,
  `DataValidacao` date DEFAULT NULL,
  `utilizadorFilho_idutilizadorFilho` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tarefa`
--

INSERT INTO `tarefa` (`IdTarefa`, `NomeTarefa`, `DescricaoTarefa`, `PontosTarefa`, `DataAtribuicao`, `DataLimite`, `TarefaRealizada`, `DataRealizacao`, `TarefaValidada`, `DataValidacao`, `utilizadorFilho_idutilizadorFilho`) VALUES
(2, 'Arrumar o quarto', 'Arrumar o quarto e limpar o pó.', 30, '2022-07-19', NULL, 1, '2022-07-19', NULL, NULL, 23),
(3, 'Arrumar a loica', 'Arrumar tudo no sitio', 25, '2022-07-19', NULL, 1, '2022-07-19', NULL, NULL, 24),
(5, 'Lavar o carro', 'Lavar bem', 200, '2022-07-19', NULL, 1, '2022-07-19', NULL, NULL, 23),
(6, 'Passear o cão', 'Passear antes de anoitecer.', 20, '2022-07-19', NULL, 0, NULL, NULL, NULL, 23),
(7, 'Fazer TPC', 'Antes do prazo', 25, '2022-07-19', NULL, 0, NULL, NULL, NULL, 24),
(8, 'Estudar matemática', 'Estudar 1 hora pelo menos.', 100, '2022-07-19', NULL, 0, NULL, NULL, NULL, 25),
(9, 'Escovar o cão', 'Escovar bem', 50, '2022-07-19', NULL, 1, '2022-07-19', NULL, NULL, 25),
(10, 'Aspirar a sala', 'Aspirar bem.', 100, '2022-07-19', NULL, 0, NULL, NULL, NULL, 25),
(11, 'Lavar a roupa', 'Colocar a roupa na maquina de lavar.', 50, '2022-07-19', NULL, 0, NULL, NULL, NULL, 26),
(12, 'Arrumar a loica', 'Tentar não partir nada.', 50, '2022-07-19', NULL, 0, NULL, NULL, NULL, 26),
(13, 'Limpar o vidros', 'Limpar bem', 50, '2022-07-19', NULL, 1, '2022-07-19', NULL, NULL, 27),
(14, 'Fazer TPC', 'TPC de português.', 50, '2022-07-19', NULL, 1, '2022-07-19', NULL, NULL, 26);

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilizadorfilho`
--

CREATE TABLE `utilizadorfilho` (
  `idutilizadorFilho` int(11) NOT NULL,
  `NomeFilho` varchar(45) NOT NULL,
  `MailFilho` varchar(90) NOT NULL,
  `Senha` varchar(45) NOT NULL,
  `Pontos` smallint(6) NOT NULL DEFAULT 0,
  `utilizadorPai_idutilizadorPai` int(11) NOT NULL,
  `TipoUtilizador` varchar(10) NOT NULL DEFAULT 'filho'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `utilizadorfilho`
--

INSERT INTO `utilizadorfilho` (`idutilizadorFilho`, `NomeFilho`, `MailFilho`, `Senha`, `Pontos`, `utilizadorPai_idutilizadorPai`, `TipoUtilizador`) VALUES
(23, 'Gustavo', 'gustavo@gmail.com', '1234', 30, 23, 'filho'),
(24, 'Maria', 'maria@gmai.com', '1234', 25, 23, 'filho'),
(25, 'Francisco', 'francisco@gmail.com', '1234', 40, 24, 'filho'),
(26, 'Murillo', 'murillo@gmail.com', '1234', 50, 24, 'filho'),
(27, 'joana', 'joana@gmail.com', '1234', 40, 23, 'filho');

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilizadorpai`
--

CREATE TABLE `utilizadorpai` (
  `idutilizadorPai` int(11) NOT NULL,
  `NomePai` varchar(45) DEFAULT NULL,
  `MailPai` varchar(90) DEFAULT NULL,
  `Senha` varchar(45) DEFAULT NULL,
  `TipoUtilizador` varchar(10) NOT NULL DEFAULT 'pai'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `utilizadorpai`
--

INSERT INTO `utilizadorpai` (`idutilizadorPai`, `NomePai`, `MailPai`, `Senha`, `TipoUtilizador`) VALUES
(23, 'Jose', 'jose@gmail.com', '1234', 'pai'),
(24, 'Ana', 'ana@gmail.com', '1234', 'pai');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`),
  ADD KEY `fk_produto_utilizadorPai1_idx` (`utilizadorPai_idutilizadorPai`);

--
-- Índices para tabela `produto_has_utilizadorfilho`
--
ALTER TABLE `produto_has_utilizadorfilho`
  ADD KEY `fk_produto_has_utilizadorFilho_utilizadorFilho1_idx` (`utilizadorFilho_idutilizadorFilho`),
  ADD KEY `fk_produto_has_utilizadorFilho_produto1_idx` (`produto_idproduto`);

--
-- Índices para tabela `tarefa`
--
ALTER TABLE `tarefa`
  ADD PRIMARY KEY (`IdTarefa`),
  ADD KEY `fk_tarefa_utilizadorFilho1_idx` (`utilizadorFilho_idutilizadorFilho`);

--
-- Índices para tabela `utilizadorfilho`
--
ALTER TABLE `utilizadorfilho`
  ADD PRIMARY KEY (`idutilizadorFilho`),
  ADD KEY `fk_utilizadorFilho_utilizadorPai1_idx` (`utilizadorPai_idutilizadorPai`);

--
-- Índices para tabela `utilizadorpai`
--
ALTER TABLE `utilizadorpai`
  ADD PRIMARY KEY (`idutilizadorPai`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de tabela `tarefa`
--
ALTER TABLE `tarefa`
  MODIFY `IdTarefa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `utilizadorfilho`
--
ALTER TABLE `utilizadorfilho`
  MODIFY `idutilizadorFilho` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de tabela `utilizadorpai`
--
ALTER TABLE `utilizadorpai`
  MODIFY `idutilizadorPai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `fk_produto_utilizadorPai1` FOREIGN KEY (`utilizadorPai_idutilizadorPai`) REFERENCES `utilizadorpai` (`idutilizadorPai`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `produto_has_utilizadorfilho`
--
ALTER TABLE `produto_has_utilizadorfilho`
  ADD CONSTRAINT `fk_produto_has_utilizadorFilho_produto1` FOREIGN KEY (`produto_idproduto`) REFERENCES `produto` (`idproduto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_produto_has_utilizadorFilho_utilizadorFilho1` FOREIGN KEY (`utilizadorFilho_idutilizadorFilho`) REFERENCES `utilizadorfilho` (`idutilizadorFilho`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `tarefa`
--
ALTER TABLE `tarefa`
  ADD CONSTRAINT `fk_tarefa_utilizadorFilho1` FOREIGN KEY (`utilizadorFilho_idutilizadorFilho`) REFERENCES `utilizadorfilho` (`idutilizadorFilho`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `utilizadorfilho`
--
ALTER TABLE `utilizadorfilho`
  ADD CONSTRAINT `fk_utilizadorFilho_utilizadorPai1` FOREIGN KEY (`utilizadorPai_idutilizadorPai`) REFERENCES `utilizadorpai` (`idutilizadorPai`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
