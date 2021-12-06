-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : epyo-robot-db
-- Généré le : ven. 08 oct. 2021 à 14:37
-- Version du serveur : 8.0.26
-- Version de PHP : 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `epyo-robot`
--

-- --------------------------------------------------------

--
-- Structure de la table `diagnostique`
--

CREATE TABLE `diagnostique` (
  `id_diag` int NOT NULL,
  `diagnostique` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `diagnostique`
--

INSERT INTO `diagnostique` (`id_diag`, `diagnostique`) VALUES
(1, 'Non visité'),
(2, 'Conforme'),
(3, 'Palette manquante'),
(4, 'Palette présente'),
(5, 'Mauvaise palette'),
(6, 'Problème lecture');

-- --------------------------------------------------------

--
-- Structure de la table `inventaire`
--

CREATE TABLE `inventaire` (
  `id_inventaire` int NOT NULL,
  `date_debut` timestamp NOT NULL,
  `date_fin` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `inventaire`
--

INSERT INTO `inventaire` (`id_inventaire`, `date_debut`, `date_fin`) VALUES
(0, '2021-09-30 14:00:51', '2021-09-30 15:05:51'),
(1, '2021-09-11 02:04:21', '2021-09-11 03:22:46');

-- --------------------------------------------------------

--
-- Structure de la table `localisation`
--

CREATE TABLE `localisation` (
  `id_localisation` int NOT NULL,
  `zones` varchar(1) NOT NULL,
  `cellules` int NOT NULL,
  `allees` int NOT NULL,
  `colonnes` int NOT NULL,
  `niveaux` int NOT NULL,
  `emplacements` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `localisation`
--

INSERT INTO `localisation` (`id_localisation`, `zones`, `cellules`, `allees`, `colonnes`, `niveaux`, `emplacements`) VALUES
(1, 'A', 1, 30, 2, 0, 12),
(2, 'A', 2, 25, 1, 1, 2),
(3, 'B', 1, 3, 1, 4, 6),
(4, 'B', 4, 5, 2, 0, 7),
(5, 'A', 5, 6, 3, 5, 18),
(6, 'B', 6, 4, 1, 1, 2),
(7, 'A', 3, 2, 1, 0, 14),
(8, 'B', 6, 4, 2, 1, 14),
(9, 'B', 2, 6, 2, 5, 2),
(10, 'A', 2, 15, 6, 2, 14),
(11, 'C', 4, 3, 2, 1, 14),
(12, 'C', 3, 6, 2, 0, 15),
(13, 'C', 4, 2, 1, 0, 12),
(14, 'C', 3, 1, 1, 0, 14),
(15, 'D', 5, 16, 2, 1, 14),
(16, 'D', 3, 14, 2, 5, 14),
(17, 'B', 4, 12, 3, 0, 11),
(18, 'B', 5, 14, 6, 2, 10),
(19, 'B', 3, 6, 4, 2, 13),
(20, 'A', 3, 4, 1, 0, 13),
(21, 'D', 5, 3, 2, 0, 15);

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `id_produit` int NOT NULL,
  `reference` int NOT NULL,
  `designation` varchar(50) NOT NULL,
  `cab` varchar(200) NOT NULL,
  `PCB` int NOT NULL,
  `SPCB` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `produit`
--

INSERT INTO `produit` (`id_produit`, `reference`, `designation`, `cab`, `PCB`, `SPCB`) VALUES
(2, 55816533, 'ELDYS 2 MC COCOON NOIR 38/41', '001801068016317299', 20, 10),
(3, 55815535, 'POMMETTE TAPIS DE GENOUX', '55815535', 5, 2),
(4, 55810873, 'POMMETTE GOBELET PAILLE', '55810873', 20, 5),
(5, 558159142, 'DODO OREILLER ANTI ACARIEN', '558159142', 5, 2),
(6, 55816530, 'ELDYS 2 MC COCOON RS/EC 25/37', '55816530', 50, 10),
(7, 55812050, 'COUSSIN DECO', '001801068016317305', 20, 2),
(8, 55815407, 'DOMEDIA COUV FLANELLE BLANC', '001801068012317329', 6, 2),
(9, 55816532, 'ELDYS 3 BOXERS L NR', '55816532', 20, 4),
(10, 55816528, 'ELDYS 2 MC COCOON GR/ECR35/37', '55816528', 20, 5),
(11, 55812050, 'COUSSIN DECO', '001801068016317350', 5, 1),
(12, 55815444, 'DOM PLAID COTON BLANC ROUGE', '55815444', 20, 4),
(13, 55816529, 'ELDYS 2 MC COCOON GR/ECRU38/41', '55816529', 20, 5),
(14, 17584702, 'VIN ARGENTINE RG BIENVENIDA 75', '17584702', 30, 6),
(15, 558151915, 'DOM LOT 3 TORCH CARREAU ROUGE', '558151915', 40, 10),
(16, 55812074, 'PLAID EMBOSSE MARINE', '55812074', 30, 4),
(17, 558159143, 'DODO OREILLER ANTI ACARIEN', '558159143', 20, 2),
(18, 55815414, 'DOMEDIA PLAID FLANELLE ROSE', '55815414', 30, 5),
(19, 55815433, 'DOMEDIA PLAID MOHAIR VERT', '001801068016317370', 10, 1),
(20, 55815413, 'DOMEDIA PLAID FLANELLE GRIS', '55815413', 20, 4),
(21, 55816937, 'ELDYS MULE MDF RAYURE NOIRP 38', '55816937', 20, 4),
(22, 55810128, 'TB LOT 2 TORCHONS MINEURS', '55810128', 40, 10);

-- --------------------------------------------------------

--
-- Structure de la table `statut`
--

CREATE TABLE `statut` (
  `id_statut` int NOT NULL,
  `statut` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `statut`
--

INSERT INTO `statut` (`id_statut`, `statut`) VALUES
(1, 'A valider'),
(2, 'A vérifier par le cariste'),
(3, 'A modifier dans le WMS'),
(4, 'Non visité'),
(5, 'Validé');

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

CREATE TABLE `stock` (
  `id_stock` int NOT NULL,
  `quantite` int NOT NULL,
  `cab_constate` varchar(200) NOT NULL,
  `produit_id` int NOT NULL,
  `inventaire_id` int NOT NULL,
  `localisation_id` int NOT NULL,
  `diag_id` int NOT NULL,
  `statut_id` int NOT NULL,
  `photo` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `stock`
--

INSERT INTO `stock` (`id_stock`, `quantite`, `cab_constate`, `produit_id`, `inventaire_id`, `localisation_id`, `diag_id`, `statut_id`, `photo`) VALUES
(1, 2, '001801068016317?05', 7, 0, 20, 6, 1, 'https://i.ibb.co/ZgsdxcQ/a1-a1-a1-2019-11-01-11-57-023-f897533d-dd31-4d5f-9c9c-e4912eccf6e2.jpg'),
(2, 1, '001801068016317', 11, 0, 13, 2, 5, 'https://i.ibb.co/bHYGPxN/a1-a1-a1-2019-11-01-11-57-022-086eb63b-3ab0-4cd6-9f09-9f8bfcce6848.jpg'),
(3, 2, '558159143', 17, 0, 19, 2, 5, 'https://i.ibb.co/ysb09Zn/a1-a1-a1-2019-11-01-11-57-021-24bd003f-43a4-4a29-888f-abc97ad0061a.jpg'),
(4, 0, '558159142', 5, 0, 18, 2, 5, 'https://i.ibb.co/hWzrqxZ/a1-a1-a1-2019-11-01-11-57-020-2a2cdf3a-ff2f-47f9-8de2-730b554178b6.jpg'),
(5, 1, '0018010?801?317329', 8, 0, 4, 2, 5, 'https://i.ibb.co/D4MdXQ7/a1-a1-a1-2019-11-01-11-57-019-18e8c73c-d235-4b5a-a511-7e0ab324b167.jpg'),
(6, 2, '', 20, 0, 14, 1, 4, 'https://i.ibb.co/WvYTcsg/a1-a1-a1-2019-11-01-11-57-018-fcdd9236-e255-45b3-879c-98ba3d0a724e.jpg'),
(7, 1, '55815414', 18, 0, 1, 2, 5, 'https://i.ibb.co/WGZ8vQ8/a1-a1-a1-2019-11-01-11-57-017-ff2c9505-1132-4c00-ae0f-5a73f4437f62.jpg'),
(8, 0, '00180106801631737.', 19, 0, 5, 6, 1, 'https://i.ibb.co/x8qnBrz/a1-a1-a1-2019-11-01-11-57-016-c80cc22e-67f2-4a75-9431-fb8b4c842f18.jpg'),
(9, 1, '558151915', 15, 0, 15, 2, 5, 'https://i.ibb.co/FsvtHSW/a1-a1-a1-2019-11-01-11-57-015-d0cf4863-8785-4bac-8e1e-bd7f43aefb41.jpg'),
(10, 2, '55815444', 12, 0, 11, 2, 5, 'https://i.ibb.co/n3ZYtKP/a1-a1-a1-2019-11-01-11-57-014-4dbb5ed9-fc86-4f2d-a12f-4994353858c8.jpg'),
(11, 0, '55816528', 10, 0, 2, 2, 5, 'https://i.ibb.co/XpSZ153/a1-a1-a1-2019-11-01-11-56-013-981d091a-be41-47a3-87a4-76f9e3178d59.jpg'),
(12, 1, '', 13, 0, 10, 1, 4, 'https://i.ibb.co/cgNgNMY/a1-a1-a1-2019-11-01-11-56-012-384fdd48-463e-45d3-a508-b466e7b390e0.jpg'),
(13, 0, '001801068016317299', 2, 0, 12, 2, 5, 'https://i.ibb.co/8m7tTPw/a1-a1-a1-2019-11-01-11-56-011-c66bc338-db5a-4aad-bff0-b9c857de057c.jpg'),
(14, 1, '55816530', 6, 0, 21, 2, 3, 'https://i.ibb.co/v40HT48/a1-a1-a1-2019-11-01-11-56-010-26401bb6-8983-425f-9d0e-fc8c78a4a839.jpg'),
(15, 0, '55816532', 9, 0, 9, 2, 5, 'https://i.ibb.co/mF53hSP/a1-a1-a1-2019-11-01-11-56-009-d2ffe8cb-3930-473c-be4f-00ae73773097.jpg'),
(16, 1, '55816937', 21, 0, 17, 2, 5, 'https://i.ibb.co/RBNVxwc/a1-a1-a1-2019-11-01-11-56-008-50e64f62-1842-4cc4-b5e1-a0ec2b731726.jpg'),
(17, 2, '55812074', 16, 0, 3, 2, 2, 'https://i.ibb.co/x5b8qDh/a1-a1-a1-2019-11-01-11-56-007-019b260c-9cc9-4280-80bc-22bda75e6c86.jpg'),
(18, 0, '55810873', 4, 0, 7, 2, 5, 'https://i.ibb.co/zhkwrSj/a1-a1-a1-2019-11-01-11-56-006-bd89499b-263b-435d-8f31-85e2d6696969.jpg'),
(19, 1, '55815535', 3, 0, 8, 2, 5, 'https://i.ibb.co/Fm3sGCR/a1-a1-a1-2019-11-01-11-56-005-eb948f4b-771d-4a79-b8a2-5c1ff9ee96fe.jpg'),
(20, 0, '55810128', 22, 0, 6, 2, 5, 'https://i.ibb.co/YRbL7Z4/a1-a1-a1-2019-11-01-11-56-004-3720877b-004d-4b24-a256-9320474f6aa9.jpg'),
(21, 1, '17584702', 14, 0, 16, 2, 5, 'https://i.ibb.co/CwXPLqt/a1-a1-a1-2019-11-01-11-56-003-707739a2-6540-4aed-9738-b2e4a1b5f0b1.jpg'),
(22, 1, '001801068016317?05', 7, 1, 20, 6, 1, 'https://i.ibb.co/ZgsdxcQ/a1-a1-a1-2019-11-01-11-57-023-f897533d-dd31-4d5f-9c9c-e4912eccf6e2.jpg'),
(23, 1, '001801068016317', 11, 1, 13, 2, 5, 'https://i.ibb.co/bHYGPxN/a1-a1-a1-2019-11-01-11-57-022-086eb63b-3ab0-4cd6-9f09-9f8bfcce6848.jpg'),
(24, 2, '558159143', 17, 1, 19, 2, 5, 'https://i.ibb.co/ysb09Zn/a1-a1-a1-2019-11-01-11-57-021-24bd003f-43a4-4a29-888f-abc97ad0061a.jpg'),
(25, 0, '558159142', 5, 1, 18, 2, 5, 'https://i.ibb.co/hWzrqxZ/a1-a1-a1-2019-11-01-11-57-020-2a2cdf3a-ff2f-47f9-8de2-730b554178b6.jpg'),
(26, 1, '0018010?801?317329', 8, 1, 4, 6, 1, 'https://i.ibb.co/D4MdXQ7/a1-a1-a1-2019-11-01-11-57-019-18e8c73c-d235-4b5a-a511-7e0ab324b167.jpg'),
(27, 2, '55815413', 20, 1, 16, 5, 2, 'https://i.ibb.co/WvYTcsg/a1-a1-a1-2019-11-01-11-57-018-fcdd9236-e255-45b3-879c-98ba3d0a724e.jpg'),
(28, 2, '55815414', 18, 1, 1, 2, 5, 'https://i.ibb.co/WGZ8vQ8/a1-a1-a1-2019-11-01-11-57-017-ff2c9505-1132-4c00-ae0f-5a73f4437f62.jpg'),
(29, 0, '001801068016317370', 19, 1, 5, 2, 5, 'https://i.ibb.co/x8qnBrz/a1-a1-a1-2019-11-01-11-57-016-c80cc22e-67f2-4a75-9431-fb8b4c842f18.jpg'),
(30, 0, '558151915', 15, 1, 15, 2, 2, 'https://i.ibb.co/FsvtHSW/a1-a1-a1-2019-11-01-11-57-015-d0cf4863-8785-4bac-8e1e-bd7f43aefb41.jpg'),
(31, 2, '55815444', 12, 1, 11, 2, 5, 'https://i.ibb.co/n3ZYtKP/a1-a1-a1-2019-11-01-11-57-014-4dbb5ed9-fc86-4f2d-a12f-4994353858c8.jpg'),
(32, 0, '55816528', 10, 1, 2, 2, 5, 'https://i.ibb.co/XpSZ153/a1-a1-a1-2019-11-01-11-56-013-981d091a-be41-47a3-87a4-76f9e3178d59.jpg'),
(33, 2, '55816529', 13, 1, 10, 2, 5, 'https://i.ibb.co/cgNgNMY/a1-a1-a1-2019-11-01-11-56-012-384fdd48-463e-45d3-a508-b466e7b390e0.jpg'),
(34, 0, '001?01068016317299', 2, 1, 12, 6, 1, 'https://i.ibb.co/8m7tTPw/a1-a1-a1-2019-11-01-11-56-011-c66bc338-db5a-4aad-bff0-b9c857de057c.jpg'),
(35, 1, '55816530', 6, 1, 21, 2, 5, 'https://i.ibb.co/v40HT48/a1-a1-a1-2019-11-01-11-56-010-26401bb6-8983-425f-9d0e-fc8c78a4a839.jpg'),
(36, 1, '55816532', 9, 1, 9, 2, 5, 'https://i.ibb.co/mF53hSP/a1-a1-a1-2019-11-01-11-56-009-d2ffe8cb-3930-473c-be4f-00ae73773097.jpg'),
(37, 1, '', 21, 1, 17, 1, 4, 'https://i.ibb.co/RBNVxwc/a1-a1-a1-2019-11-01-11-56-008-50e64f62-1842-4cc4-b5e1-a0ec2b731726.jpg'),
(38, 1, '55812074', 16, 1, 3, 2, 5, 'https://i.ibb.co/x5b8qDh/a1-a1-a1-2019-11-01-11-56-007-019b260c-9cc9-4280-80bc-22bda75e6c86.jpg'),
(39, 0, '55810873', 4, 1, 7, 2, 5, 'https://i.ibb.co/zhkwrSj/a1-a1-a1-2019-11-01-11-56-006-bd89499b-263b-435d-8f31-85e2d6696969.jpg'),
(40, 2, '55815535', 3, 1, 8, 2, 3, 'https://i.ibb.co/Fm3sGCR/a1-a1-a1-2019-11-01-11-56-005-eb948f4b-771d-4a79-b8a2-5c1ff9ee96fe.jpg'),
(41, 0, '55810128', 22, 1, 6, 2, 5, 'https://i.ibb.co/YRbL7Z4/a1-a1-a1-2019-11-01-11-56-004-3720877b-004d-4b24-a256-9320474f6aa9.jpg'),
(42, 1, '1758470.', 14, 1, 14, 5, 2, 'https://i.ibb.co/CwXPLqt/a1-a1-a1-2019-11-01-11-56-003-707739a2-6540-4aed-9738-b2e4a1b5f0b1.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_user` int NOT NULL,
  `email` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'USER'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `email`, `username`, `password`, `role`) VALUES
(1, 'jeremy@epyo.eu', 'Jérémy', 'e5988db6b917547327a9c6d5896d2a2fb23a0866e4f706608cb0dde9fbedefaa', 'User'),
(2, 'demo@epyo.eu', 'demo', '2a97516c354b68848cdbd8f54a226a0a55b21ed138e207ad6c5cbb9c00aa5aea', 'User'),
(29, 'admin@epyo.eu', 'admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Admin'),
(30, 'test@epyo.eu', 'test', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'User'),
(31, 'essai@essai.fr', 'essai', '71b4e190fc7a0aa86f24cb18d88c09bfd8a45292f1ae434fac3c0351f4d838d3', 'Admin');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `diagnostique`
--
ALTER TABLE `diagnostique`
  ADD PRIMARY KEY (`id_diag`);

--
-- Index pour la table `inventaire`
--
ALTER TABLE `inventaire`
  ADD PRIMARY KEY (`id_inventaire`);

--
-- Index pour la table `localisation`
--
ALTER TABLE `localisation`
  ADD PRIMARY KEY (`id_localisation`);

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id_produit`);

--
-- Index pour la table `statut`
--
ALTER TABLE `statut`
  ADD PRIMARY KEY (`id_statut`);

--
-- Index pour la table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_stock`),
  ADD KEY `produit_id` (`produit_id`),
  ADD KEY `inventaire_id` (`inventaire_id`),
  ADD KEY `diag_id` (`diag_id`),
  ADD KEY `statut_id` (`statut_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `diagnostique`
--
ALTER TABLE `diagnostique`
  MODIFY `id_diag` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `inventaire`
--
ALTER TABLE `inventaire`
  MODIFY `id_inventaire` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `localisation`
--
ALTER TABLE `localisation`
  MODIFY `id_localisation` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `id_produit` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `statut`
--
ALTER TABLE `statut`
  MODIFY `id_statut` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `stock`
--
ALTER TABLE `stock`
  MODIFY `id_stock` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`produit_id`) REFERENCES `produit` (`id_produit`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stock_ibfk_2` FOREIGN KEY (`inventaire_id`) REFERENCES `inventaire` (`id_inventaire`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stock_ibfk_3` FOREIGN KEY (`diag_id`) REFERENCES `diagnostique` (`id_diag`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stock_ibfk_4` FOREIGN KEY (`statut_id`) REFERENCES `statut` (`id_statut`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
