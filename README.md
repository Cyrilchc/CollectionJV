# CollectionJV
**Un CRUD avec Angular, une base de données MySql et un serveur node express**

## Installation

### Récupérer le projet 

``` git clone https://github.com/Cyrilchc/CollectionJV.git ```

### Installer les dépendances nécessaires

``` 
npm install --save-dev @angular-devkit/build-angular
npm install --save-dev express
npm install --save-dev cors
npm install --save-dev mysql
```

### Mettre en place la base de données

#### Connectez-vous à mysql

```
mysql
```
#### Créez la base de données
```
create database collectionjv
```

#### Créez les tables nécessaires

```
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
```

**_Ou_**

#### Créez la base de données avec phpmyadmin
* Dans le menu, cliquez sur "Nouvelle base de données"
* Dans le champ proposé, entrez "collectionjv"


#### Créez les tables avec phpmyadmin
* Dans le menu, cliquez sur la base "collectionjv"
* Dans le bandeau, cliquez sur "Importer"
* Cliquez sur le bouton "Choisir un fichier"
* Sélectionnez le fichier "collectionjv.sql" qui se trouve à la racine du projet
* Cliquez sur le bouton "Exécuter"

## Faire fonctionner l'application

#### Se rendre dans le projet 

```
cd cheminduclonage\collectionjv
```

#### Lancer l'application

``` 
ng serve
```

#### Lancer le serveur node (express)

```
node .\src\index.js
```

#### Utilisez l'application
```
http://localhost:4200/
```

## Démonstration

[Démonstration](https://drive.google.com/file/d/1vPMqGeOajLeRzz8Xv3iNFYuDbZC5nzO_/view?usp=sharing)
