-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 25 mars 2020 à 14:03
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `collectionjv`
--

-- --------------------------------------------------------

--
-- Structure de la table `console`
--

DROP TABLE IF EXISTS `console`;
CREATE TABLE IF NOT EXISTS `console` (
  `console_id` int(11) NOT NULL AUTO_INCREMENT,
  `console_nom` varchar(255) DEFAULT NULL,
  `console_constructeur` varchar(255) DEFAULT NULL,
  `console_developpeur` varchar(255) DEFAULT NULL,
  `console_dureedevie` varchar(255) DEFAULT NULL,
  `console_unitesvendues` int(11) DEFAULT NULL,
  `console_bits` int(11) DEFAULT NULL,
  `console_meilleurevente` varchar(255) DEFAULT NULL,
  `console_image` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`console_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `console`
--

INSERT INTO `console` (`console_id`, `console_nom`, `console_constructeur`, `console_developpeur`, `console_dureedevie`, `console_unitesvendues`, `console_bits`, `console_meilleurevente`, `console_image`) VALUES
(9, 'Switch', 'Nintendo', 'Nintendo', '2018-2020', 89461, 64, 'Zelda : Breath of the wild', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg/220px-Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg'),
(10, 'Wii', 'Nintendo', 'Nintendo', '2003-2006', 654321, 64, 'Wii Sport', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Wii-console.jpg/250px-Wii-console.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `jeux`
--

DROP TABLE IF EXISTS `jeux`;
CREATE TABLE IF NOT EXISTS `jeux` (
  `jeu_id` int(11) NOT NULL AUTO_INCREMENT,
  `jeu_nom` varchar(255) DEFAULT NULL,
  `jeu_presencejaquette` tinyint(1) DEFAULT NULL,
  `jeu_fonctionnel` tinyint(1) DEFAULT NULL,
  `jeu_note` decimal(3,1) DEFAULT NULL,
  `jeu_valeurestimee` decimal(15,2) DEFAULT NULL,
  `jeu_developpeur` varchar(255) DEFAULT NULL,
  `jeu_editeur` varchar(255) DEFAULT NULL,
  `jeu_estmultijoueur` varchar(255) DEFAULT NULL,
  `jeu_image` varchar(5000) DEFAULT NULL,
  `jeu_plateformes` varchar(5000) DEFAULT NULL,
  `jeu_genre` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`jeu_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `jeux`
--

INSERT INTO `jeux` (`jeu_id`, `jeu_nom`, `jeu_presencejaquette`, `jeu_fonctionnel`, `jeu_note`, `jeu_valeurestimee`, `jeu_developpeur`, `jeu_editeur`, `jeu_estmultijoueur`, `jeu_image`, `jeu_plateformes`, `jeu_genre`) VALUES
(1, 'CS GO', 0, 1, '18.0', '0.00', 'valve', 'steam', '1', 'https://axisrevolution.fr/wp-content/uploads/2018/12/7oxe2g7t0y411.jpg', 'pc', 'fps'),
(5, 'Bioshock Infinite', 1, 1, '20.0', '654.00', '2k', '2k', '0', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg/220px-Official_cover_art_for_Bioshock_Infinite.jpg', 'pc', 'FPS');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
