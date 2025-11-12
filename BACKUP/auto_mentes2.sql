-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: pandaplug1
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `elerhetoseg`
--

DROP TABLE IF EXISTS `elerhetoseg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elerhetoseg` (
  `id` int NOT NULL AUTO_INCREMENT,
  `statusz` varchar(20) COLLATE utf8mb4_hungarian_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `statusz` (`statusz`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elerhetoseg`
--

LOCK TABLES `elerhetoseg` WRITE;
/*!40000 ALTER TABLE `elerhetoseg` DISABLE KEYS */;
INSERT INTO `elerhetoseg` VALUES (2,'nincs_raktaron'),(1,'raktaron');
/*!40000 ALTER TABLE `elerhetoseg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `felhasznalok`
--

DROP TABLE IF EXISTS `felhasznalok`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `felhasznalok` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nev` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `jog` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `felhasznalok`
--

LOCK TABLES `felhasznalok` WRITE;
/*!40000 ALTER TABLE `felhasznalok` DISABLE KEYS */;
/*!40000 ALTER TABLE `felhasznalok` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `gyak`
--

DROP TABLE IF EXISTS `gyak`;
/*!50001 DROP VIEW IF EXISTS `gyak`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `gyak` AS SELECT 
 1 AS `Vasarlo_Nev`,
 1 AS `Szamlaszam`,
 1 AS `Osszeg_USD`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `gyak2`
--

DROP TABLE IF EXISTS `gyak2`;
/*!50001 DROP VIEW IF EXISTS `gyak2`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `gyak2` AS SELECT 
 1 AS `Termek_Nev`,
 1 AS `Eladott_Darabszam`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `gyak3`
--

DROP TABLE IF EXISTS `gyak3`;
/*!50001 DROP VIEW IF EXISTS `gyak3`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `gyak3` AS SELECT 
 1 AS `Vasarlo_Nev`,
 1 AS `Szamlaszam`,
 1 AS `Szamla_Osszeg_USD`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `gyak4`
--

DROP TABLE IF EXISTS `gyak4`;
/*!50001 DROP VIEW IF EXISTS `gyak4`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `gyak4` AS SELECT 
 1 AS `Termek_nev`,
 1 AS `Eladott_darab`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `gyak5`
--

DROP TABLE IF EXISTS `gyak5`;
/*!50001 DROP VIEW IF EXISTS `gyak5`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `gyak5` AS SELECT 
 1 AS `Szamla_ID`,
 1 AS `Vevo_nev`,
 1 AS `Ossz_ertek_usd`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `meret`
--

DROP TABLE IF EXISTS `meret`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meret` (
  `id` int NOT NULL AUTO_INCREMENT,
  `meret` varchar(10) COLLATE utf8mb4_hungarian_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `meret` (`meret`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meret`
--

LOCK TABLES `meret` WRITE;
/*!40000 ALTER TABLE `meret` DISABLE KEYS */;
INSERT INTO `meret` VALUES (4,'L'),(3,'M'),(2,'S'),(5,'XL'),(1,'XS'),(6,'XXL');
/*!40000 ALTER TABLE `meret` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `szamla`
--

DROP TABLE IF EXISTS `szamla`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `szamla` (
  `id` int NOT NULL AUTO_INCREMENT,
  `datum` date NOT NULL,
  `vevo_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `szamla_ibfk_1` (`vevo_id`),
  CONSTRAINT `szamla_ibfk_1` FOREIGN KEY (`vevo_id`) REFERENCES `vevo` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `szamla`
--

LOCK TABLES `szamla` WRITE;
/*!40000 ALTER TABLE `szamla` DISABLE KEYS */;
INSERT INTO `szamla` VALUES (1,'2025-10-13',1),(2,'2025-10-01',1),(3,'2025-05-06',2),(4,'2025-10-03',3),(5,'2025-05-21',4),(6,'2025-10-05',5);
/*!40000 ALTER TABLE `szamla` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `szamla1`
--

DROP TABLE IF EXISTS `szamla1`;
/*!50001 DROP VIEW IF EXISTS `szamla1`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `szamla1` AS SELECT 
 1 AS `Vevo_nev`,
 1 AS `Vevo_cim`,
 1 AS `Vevo_adoszam`,
 1 AS `Vasarlas_datum`,
 1 AS `Termek_nev`,
 1 AS `Termek_ar`,
 1 AS `Darabszam`,
 1 AS `Osszeg_USD`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `szamla_termek`
--

DROP TABLE IF EXISTS `szamla_termek`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `szamla_termek` (
  `szamla_id` int NOT NULL,
  `termek_id` int NOT NULL,
  `mennyiseg` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`szamla_id`,`termek_id`),
  KEY `szamla_termek_ibfk_2` (`termek_id`),
  CONSTRAINT `szamla_termek_ibfk_1` FOREIGN KEY (`szamla_id`) REFERENCES `szamla` (`id`) ON DELETE CASCADE,
  CONSTRAINT `szamla_termek_ibfk_2` FOREIGN KEY (`termek_id`) REFERENCES `termekek` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `szamla_termek`
--

LOCK TABLES `szamla_termek` WRITE;
/*!40000 ALTER TABLE `szamla_termek` DISABLE KEYS */;
INSERT INTO `szamla_termek` VALUES (1,1,1),(1,2,2),(2,3,1),(3,4,2),(4,5,1),(5,1,1),(5,2,1),(5,3,1);
/*!40000 ALTER TABLE `szamla_termek` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `szin`
--

DROP TABLE IF EXISTS `szin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `szin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `szin` varchar(30) COLLATE utf8mb4_hungarian_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `szin` (`szin`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `szin`
--

LOCK TABLES `szin` WRITE;
/*!40000 ALTER TABLE `szin` DISABLE KEYS */;
INSERT INTO `szin` VALUES (9,'Barna'),(8,'Bézs'),(2,'Fehér'),(1,'Fekete'),(4,'Kék'),(10,'Lila'),(11,'Narancssárga'),(5,'Piros'),(12,'Rózsaszín'),(7,'Sárga'),(3,'Szürke'),(6,'Zöld');
/*!40000 ALTER TABLE `szin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `termekek`
--

DROP TABLE IF EXISTS `termekek`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `termekek` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nev` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `ar_usd` int NOT NULL,
  `szin_id` int NOT NULL,
  `meret_id` int NOT NULL,
  `elerhetoseg_id` int NOT NULL,
  `tipus_id` int NOT NULL,
  `kep_id` varchar(8) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kep_id` (`kep_id`),
  KEY `tipus_id` (`tipus_id`),
  KEY `meret_id` (`meret_id`),
  KEY `elerhetoseg_id` (`elerhetoseg_id`),
  KEY `FK_termekek_szin_id` (`szin_id`),
  CONSTRAINT `FK_termekek_szin_id` FOREIGN KEY (`szin_id`) REFERENCES `szin` (`id`),
  CONSTRAINT `termekek_ibfk_1` FOREIGN KEY (`tipus_id`) REFERENCES `tipus` (`id`),
  CONSTRAINT `termekek_ibfk_3` FOREIGN KEY (`meret_id`) REFERENCES `meret` (`id`),
  CONSTRAINT `termekek_ibfk_4` FOREIGN KEY (`elerhetoseg_id`) REFERENCES `elerhetoseg` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=357 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `termekek`
--

LOCK TABLES `termekek` WRITE;
/*!40000 ALTER TABLE `termekek` DISABLE KEYS */;
INSERT INTO `termekek` VALUES (1,'Masion Margiela   Tees',14,2,6,1,1,'image1'),(2,'Masion Margiela   Tees',14,1,2,2,1,'image2'),(3,'syna world  Tees',14,1,5,1,1,'image3'),(4,'syna world  Tees',14,2,4,1,1,'image4'),(5,'syna world  Tees',14,2,4,2,1,'image5'),(6,'syna world suits',25,2,4,1,1,'image6'),(7,'syna world suits',25,1,1,1,1,'image7'),(8,'syna world  Tees',14,2,6,1,1,'image8'),(9,'VLONE Tees',11,1,2,1,1,'image9'),(10,'VLONE Tees',11,1,2,1,1,'image10'),(11,'VLONE Tees',11,2,5,1,1,'image11'),(12,'VLONE Tees',11,1,4,2,1,'image12'),(13,'VLONE Tees',11,2,4,1,1,'image13'),(14,'VLONE Tees',11,4,2,1,1,'image14'),(15,'VLONE Tees',11,2,6,2,1,'image15'),(16,'VLONE Tees',11,2,1,2,1,'image16'),(17,'VLONE Tees',11,1,5,1,1,'image17'),(18,'VLONE Tees',11,2,1,1,1,'image18'),(19,'VLONE Tees',11,1,1,1,1,'image19'),(20,'VLONE Tees',11,1,5,1,1,'image20'),(21,'VLONE Tees',11,2,5,2,1,'image21'),(22,'VLONE Tees',11,1,5,2,1,'image22'),(23,'VLONE Tees',11,8,2,2,1,'image23'),(24,'VLONE Tees',11,1,2,1,1,'image24'),(25,'VLONE Tees',11,1,1,1,1,'image25'),(26,'VLONE Tees',11,1,2,2,1,'image26'),(27,'VLONE Tees',11,1,4,2,1,'image27'),(28,'VLONE Tees',11,1,3,2,1,'image28'),(29,'VLONE Tees',11,1,3,1,1,'image29'),(30,'VLONE Tees',11,2,1,1,1,'image30'),(31,'VLONE Tees',11,11,5,2,1,'image31'),(32,'Ralph Lauren Tee',12,1,2,1,1,'image32'),(33,'Ralph Lauren Tee',12,3,2,1,1,'image33'),(34,'Ralph Lauren Tee',12,2,2,2,1,'image34'),(35,'Ralph Lauren Tee',12,4,2,2,1,'image35'),(36,'Ralph Lauren Tee',12,2,6,1,1,'image36'),(37,'Ralph Lauren Tee',12,3,2,2,1,'image37'),(38,'Ralph Lauren Tee',12,4,2,2,1,'image38'),(39,'Casablanca T-Shirts',12,3,3,1,1,'image39'),(40,'Casablanca set ',17,1,4,1,1,'image40'),(41,'Casablanca T-Shirts',12,2,1,2,1,'image41'),(42,'Casablanca T-Shirts',12,2,3,2,1,'image42'),(43,'Casablanca T-Shirts',12,1,6,2,1,'image43'),(44,'Casablanca T-Shirts',12,2,6,1,1,'image44'),(45,'Casablanca T-Shirts',12,2,1,2,1,'image45'),(46,'Casablanca T-Shirts',12,4,1,1,1,'image46'),(47,'Balenciaga  T-Shirts',12,1,2,2,1,'image47'),(48,'ASSC ANTI T-Shirts',10,4,4,1,1,'image48'),(49,'ASSC ANTI T-Shirts',10,1,5,1,1,'image49'),(50,'ASSC ANTI T-Shirts',10,12,2,2,1,'image50'),(51,'ASSC ANTI T-Shirts',10,4,1,1,1,'image51'),(52,'Corteiz Tees',17,2,3,2,1,'image52'),(53,'Corteiz Tees',17,1,4,1,1,'image53'),(54,'Corteiz Tees',17,2,1,2,1,'image54'),(55,'Corteiz Tees',17,2,6,1,1,'image55'),(56,'Corteiz Tees',17,2,6,2,1,'image56'),(57,'Corteiz Tees',17,1,3,1,1,'image57'),(58,'Corteiz Tees',17,2,3,1,1,'image58'),(59,'Corteiz Tees',17,1,3,2,1,'image59'),(60,'Corteiz Tees',17,2,5,2,1,'image60'),(61,'Corteiz Tees',17,2,6,1,1,'image61'),(62,'Corteiz Tees',17,1,5,1,1,'image62'),(63,'Corteiz Tees',17,2,2,2,1,'image63'),(64,'Corteiz Tees',18,1,6,2,1,'image64'),(65,'Balenciaga \r\nTees',19,3,4,1,1,'image65'),(66,'Balenciaga \r\nTees',19,1,3,1,1,'image66'),(67,'Balenciaga \r\nTees',20,1,1,2,1,'image67'),(68,'Balenciaga \r\nTees',21,4,4,2,1,'image68'),(69,'Hellstar  Tees',13,1,6,2,1,'image69'),(70,'Hellstar  Tees',13,2,3,2,1,'image70'),(71,'Hellstar  Tees',13,1,2,1,1,'image71'),(72,'Hellstar  Tees',13,2,6,1,1,'image72'),(73,'Hellstar  Tees',13,2,5,2,1,'image73'),(74,'Hellstar  Tees',13,2,3,2,1,'image74'),(75,'Hellstar  Tees',13,1,6,1,1,'image75'),(76,'Hellstar  Tees',13,2,4,2,1,'image76'),(77,'Hellstar  Tees',13,1,1,2,1,'image77'),(78,'Hellstar  Tees',13,1,3,2,1,'image78'),(79,'Hellstar  Tees',13,1,1,2,1,'image79'),(80,'Hellstar  Tees',13,3,6,2,1,'image80'),(81,'Hellstar  Tees',13,1,1,1,1,'image81'),(82,'Hellstar  Tees',13,1,2,1,1,'image82'),(83,'Hellstar  Tees',13,1,1,2,1,'image83'),(84,'Chrome Hearts  T-Shirts',15,2,5,2,1,'image84'),(85,'Chrome Hearts  T-Shirts',15,12,1,1,1,'image85'),(86,'Chrome Hearts  T-Shirts',14,1,1,1,1,'image86'),(87,'Chrome Hearts  T-Shirts',14,1,1,1,1,'image87'),(88,'Chrome Hearts  T-Shirts',14,2,1,1,1,'image88'),(89,'Chrome Hearts  T-Shirts',16,1,6,2,1,'image89'),(90,'Chrome Hearts  T-Shirts',16,1,6,2,1,'image90'),(91,'Chrome Hearts  T-Shirts',15,2,1,1,1,'image91'),(92,'Chrome Hearts  T-Shirts',15,2,2,2,1,'image92'),(93,'Chrome Hearts  T-Shirts',15,1,3,1,1,'image93'),(94,'Chrome Hearts  T-Shirts',15,1,2,2,1,'image94'),(95,'Chrome Hearts  T-Shirts',15,1,4,1,1,'image95'),(96,'Chrome Hearts  T-Shirts',14,2,1,1,1,'image96'),(97,'Chrome Hearts  T-Shirts',14,2,3,1,1,'image97'),(98,'Chrome Hearts  T-Shirts',15,1,5,1,1,'image98'),(99,'Chrome Hearts  T-Shirts',14,1,5,2,1,'image99'),(100,'Chrome Hearts  T-Shirts',14,3,3,2,1,'image100'),(101,'Chrome Hearts  T-Shirts',17,11,3,1,1,'image101'),(102,'Chrome Hearts  T-Shirts',17,2,2,2,1,'image102'),(103,'Chrome Hearts  T-Shirts',14,1,6,1,1,'image103'),(104,'Chrome Hearts  T-Shirts',14,5,2,2,1,'image104'),(105,'Chrome Hearts  T-Shirts',14,11,3,2,1,'image105'),(106,'Chrome Hearts  T-Shirts',15,12,3,2,1,'image106'),(107,'Chrome Hearts  T-Shirts',15,2,1,2,1,'image107'),(108,'Chrome Hearts  T-Shirts',15,1,5,1,1,'image108'),(109,'Chrome Hearts  T-Shirts',15,1,3,2,1,'image109'),(110,'Chrome Hearts  T-Shirts',15,1,2,2,1,'image110'),(111,'Chrome Hearts  T-Shirts',14,2,5,2,1,'image111'),(112,'Chrome Hearts  T-Shirts',14,3,2,1,1,'image112'),(113,'Chrome Hearts  T-Shirts',18,2,1,2,1,'image113'),(114,'Chrome Hearts  T-Shirts',15,2,3,2,1,'image114'),(115,'Chrome Hearts  T-Shirts',15,1,1,2,1,'image115'),(116,'Chrome Hearts  T-Shirts',14,2,1,1,1,'image116'),(117,'Amiri Tees',13,6,2,2,1,'image117'),(118,'Amiri Tees',13,4,5,1,1,'image118'),(119,'Amiri Tees',12,6,1,2,1,'image119'),(120,'Amiri Tees',12,1,3,2,1,'image120'),(121,'Ami  Tees',13,2,2,1,1,'image121'),(122,'Ami  Tees',13,1,3,1,1,'image122'),(123,'Ami  Tees',13,2,6,2,1,'image123'),(124,'Ami  Tees',13,4,2,1,1,'image124'),(125,'Ami  Tees',13,12,3,2,1,'image125'),(126,'Ami  Tees',13,1,3,1,1,'image126'),(127,'Ami  Tees',13,2,4,1,1,'image127'),(128,'Ami  Tees',13,1,1,1,1,'image128'),(129,'Ami  Tees',13,2,5,1,1,'image129'),(130,'Ami  Tees',13,4,3,1,1,'image130'),(131,'Ami  Tees',13,4,5,2,1,'image131'),(132,'Ami  Tees',13,4,3,2,1,'image132'),(133,'Revenge T-Shirts',15,1,5,2,1,'image133'),(134,'Revenge T-Shirts',15,8,4,2,1,'image134'),(135,'Revenge T-Shirts',15,1,5,1,1,'image135'),(136,'Revenge T-Shirts',15,1,2,2,1,'image136'),(137,'Revenge T-Shirts',15,1,4,2,1,'image137'),(138,'Revenge T-Shirts',15,1,1,2,1,'image138'),(139,'Revenge T-Shirts',15,2,1,1,1,'image139'),(140,'Revenge T-Shirts',15,1,3,1,1,'image140'),(141,'Revenge T-Shirts',15,1,3,1,1,'image141'),(142,'Revenge T-Shirts',15,2,5,1,1,'image142'),(143,'Bape Tees',12,1,4,2,1,'image143'),(144,'Bape Tees',12,1,2,2,1,'image144'),(145,'Bape Tees',12,1,5,2,1,'image145'),(146,'Bape Tees',12,2,4,2,1,'image146'),(147,'Bape Tees',12,1,6,1,1,'image147'),(148,'Bape Tees',12,2,3,1,1,'image148'),(149,'Bape Tees',12,1,5,1,1,'image149'),(150,'Bape Tees',12,3,6,2,1,'image150'),(151,'Bape Tees',12,1,5,1,1,'image151'),(152,'Bape Tees',12,8,4,2,1,'image152'),(153,'Bape Tees',12,1,2,1,1,'image153'),(154,'Bape Tees',12,3,4,1,1,'image154'),(155,'Bape  polo shirt',13,1,6,2,1,'image155'),(156,'Cp Compagny polo shirt',15,1,2,1,1,'image156'),(157,'Cp Compagny polo shirt',15,3,1,2,1,'image157'),(158,'Ralph Lauren Button Up Shirt',26,3,4,2,1,'image158'),(159,'Ralph Lauren Tee',16,1,3,1,1,'image159'),(160,'Ralph Lauren Tee',16,2,6,2,1,'image160'),(161,'Ralph Lauren Tee',16,4,2,2,1,'image161'),(162,'Ralph Lauren Tee',16,3,6,2,1,'image162'),(163,'Ralph Lauren Tee',16,2,1,1,1,'image163'),(164,'Lacoste  polo',27,1,1,2,1,'image164'),(165,'Lacoste  polo',27,1,1,2,1,'image165'),(166,'Lacoste  polo',27,2,1,1,1,'image166'),(167,'Lacoste  polo',27,3,6,2,1,'image167'),(168,'Lacoste t-shirt',21,1,2,2,1,'image168'),(169,'Lacoste t-shirt',21,2,5,1,1,'image169'),(170,'Lacoste t-shirt',21,4,6,2,1,'image170'),(171,'Lacoste t-shirt',21,3,6,1,1,'image171'),(172,'Lacoste t-shirt',21,4,1,2,1,'image172'),(173,'Lacoste t-shirt',21,12,4,2,1,'image173'),(174,'Yamha polo t-shirt',5,2,5,1,1,'image174'),(175,'Stussy  t-shirt',14,2,4,2,1,'image175'),(176,'Stussy  t-shirt',13,1,1,1,1,'image176'),(177,'Stussy  t-shirt',13,2,4,2,1,'image177'),(178,'Stussy  t-shirt',13,5,2,1,1,'image178'),(179,'Stussy  t-shirt',13,4,3,2,1,'image179'),(180,'Stussy  t-shirt',13,8,6,1,1,'image180'),(181,'Stussy  t-shirt',13,1,4,2,1,'image181'),(182,'Stussy  t-shirt',13,1,3,1,1,'image182'),(183,'Stussy  t-shirt',13,1,6,1,1,'image183'),(184,'Stussy  t-shirt',13,1,1,2,1,'image184'),(185,'Stussy  t-shirt',13,1,2,1,1,'image185'),(186,'Nike x Stussy black white t-shirt',13,1,1,2,1,'image186'),(187,'Nike x Stussy white black  t-shirt',13,2,2,2,1,'image187'),(188,'Nike x Stussy green white t-shirt',13,6,2,1,1,'image188'),(189,'Stussy  t-shirt',13,1,6,2,1,'image189'),(190,'Stussy  t-shirt',13,2,2,2,1,'image190'),(191,'Stussy  t-shirt',13,2,1,1,1,'image191'),(192,'Stussy  t-shirt',13,1,2,1,1,'image192'),(193,'Stussy  t-shirt',13,2,3,2,1,'image193'),(194,'Stussy  t-shirt',13,1,6,2,1,'image194'),(195,'Stussy  t-shirt',13,2,1,2,1,'image195'),(196,'Stussy  t-shirt',13,1,2,2,1,'image196'),(197,'Polo Gucci Tees',37,6,6,2,1,'image197'),(198,'Polo Gucci Tees',34,1,1,2,1,'image198'),(199,'Polo Gucci Tees',39,4,2,2,1,'image199'),(200,'Polo Gucci Tees',37,1,5,2,1,'image200'),(201,'Polo Gucci Tees',33,2,4,1,1,'image201'),(202,'Polo Gucci Tees',48,8,6,1,1,'image202'),(203,'Polo Gucci Tees',48,4,3,1,1,'image203'),(204,'Polo Gucci Tees',48,5,4,2,1,'image204'),(205,'Polo Gucci Tees',48,6,2,1,1,'image205'),(206,'Polo Gucci Tees',48,4,3,1,1,'image206'),(207,'Polo Gucci Tees',48,12,3,1,1,'image207'),(208,'Polo Gucci Tees',48,9,4,2,1,'image208'),(209,'Burberry  Tees',27,6,3,1,1,'image209'),(210,'Burberry  Tees',27,2,1,2,1,'image210'),(211,'Burberry  Tees',27,1,1,1,1,'image211'),(212,'Palm Angels Tees',14,6,4,1,1,'image212'),(213,'Palm Angels Tees',14,1,1,1,1,'image213'),(214,'Palm Angels Tees',14,1,6,1,1,'image214'),(215,'Palm Angels Tees',14,2,2,2,1,'image215'),(216,'Palm Angels Tees',14,1,1,2,1,'image216'),(217,'Moncler POLO',16,3,2,2,1,'image217'),(218,'Moncler POLO',16,2,5,1,1,'image218'),(219,'Moncler POLO',16,1,5,1,1,'image219'),(220,'Moncler Tees',16,1,2,2,1,'image220'),(221,'Moncler Tees',16,2,1,1,1,'image221'),(222,'Moncler Tees',16,1,3,1,1,'image222'),(223,'Moncler Tees',16,8,1,1,1,'image223'),(224,'Moncler Tees',16,2,4,1,1,'image224'),(225,'Moncler Tees',16,2,2,2,1,'image225'),(226,'PRADA  T-shirt',20,12,6,1,1,'image226'),(227,'PRADA  T-shirt',20,1,2,1,1,'image227'),(228,'PINK Floyd T-shirt',15,4,4,1,1,'image228'),(229,'PINK Floyd T-shirt',15,1,1,2,1,'image229'),(230,'PINK Floyd T-shirt',14,2,3,1,1,'image230'),(233,'Polo Ralph Lauren track pant ',30,3,1,2,2,'image233'),(234,'Polo Ralph Lauren track pant ',30,1,6,2,2,'image234'),(235,'Polo Ralph Lauren track pant ',30,2,5,2,2,'image235'),(236,'Essentials pant ',26,3,4,1,2,'image236'),(238,'syna world pant ',18,1,1,1,2,'image238'),(239,'syna world pant ',18,3,5,2,2,'image239'),(240,'Vicinity  pant ',8,4,4,1,2,'image240'),(241,'Amiri  jeans',19,1,1,2,2,'image241'),(242,'Amiri  jeans',19,1,6,1,2,'image242'),(243,'Amiri  jeans',19,4,2,2,2,'image243'),(244,'Amiri  jeans',19,1,2,1,2,'image244'),(245,'Amiri  jeans',19,4,2,1,2,'image245'),(246,'Dsquared 2 jeans',19,1,5,2,2,'image246'),(247,'Dsquared 2 jeans',19,4,5,1,2,'image247'),(248,'Dsquared 2 jeans',19,1,5,2,2,'image248'),(249,'Dsquared 2 jeans',19,4,5,2,2,'image249'),(250,'Evisu  jeans',25,3,4,1,2,'image250'),(251,'Evisu  jeans',25,1,6,2,2,'image251'),(252,'Evisu  jeans',25,1,1,2,2,'image252'),(253,'Carhartt Cargo',19,4,3,1,2,'image253'),(254,'Carhartt Cargo',30,1,2,1,2,'image254'),(255,'Carhartt Cargo',30,8,2,2,2,'image255'),(256,'Carhartt Cargo',30,6,3,2,2,'image256'),(257,'Carhartt Cargo',30,1,2,2,2,'image257'),(258,'Carhartt WIP\r\nPants',25,4,3,2,2,'image258'),(259,'Carhartt WIP\r\nPants',25,1,3,2,2,'image259'),(260,'Carhatt Pants',30,1,1,2,2,'image260'),(261,'Carhatt Pants',30,3,4,1,2,'image261'),(262,'Carhatt Pants',30,9,6,2,2,'image262'),(263,'Carhatt Pants',30,8,3,1,2,'image263'),(264,'Burberry x Supreme Pants',41,4,6,2,2,'image264'),(265,'Louis Vuitton jeans',66,3,1,1,2,'image265'),(266,'Louis Vuitton jeans',66,4,5,1,2,'image266'),(267,'Chrome Hearts  jeans',27,4,5,1,2,'image267'),(268,'Chrome Hearts  jeans',27,4,4,1,2,'image268'),(269,'Chrome Hearts  jeans',27,4,3,1,2,'image269'),(270,'Chrome Hearts  jeans',60,3,6,1,2,'image270'),(271,'Hellstar  Pants',22,1,6,1,2,'image271'),(272,'Hellstar  Pants',22,1,6,1,2,'image272'),(273,'Hellstar  Pants',22,1,2,2,2,'image273'),(274,'Hellstar  Pants',22,4,5,1,2,'image274'),(275,'Hellstar  Pants',22,1,5,2,2,'image275'),(276,'Yeezy Pants',19,9,4,2,2,'image276'),(277,'Yeezy Pants',19,3,5,1,2,'image277'),(278,'Yeezy Pants',19,1,3,2,2,'image278'),(279,'Broken Planet  Pants',18,3,3,1,2,'image279'),(280,'Moncer Pants',29,1,1,2,2,'image280'),(281,'Moncer Pants',29,3,6,2,2,'image281'),(282,'Corteiz classic cargo 5 stars black white logo pant',56,1,3,2,2,'image282'),(283,'Corteiz Slant pocket military green pant',52,6,1,2,2,'image283'),(284,'Corteiz classic cargo black whitelogo pant',56,4,1,1,2,'image284'),(285,'Corteiz classic cargo black green logo pant',56,1,6,1,2,'image285'),(286,'Corteiz classic cargo 4 stars black white logo pant',56,1,3,1,2,'image286'),(287,'Jordan Shorts',10,1,4,2,3,'image287'),(288,'Jordan Shorts',10,1,6,2,3,'image288'),(289,'Jordan Shorts',10,1,1,1,3,'image289'),(290,'Jordan Shorts',10,2,4,1,3,'image290'),(291,'Jordan Shorts',10,1,2,1,3,'image291'),(292,'Jordan Shorts',10,2,2,2,3,'image292'),(293,'Jordan Shorts',10,1,1,1,3,'image293'),(294,'Jordan Shorts',10,2,6,1,3,'image294'),(295,'Jordan Shorts',10,1,4,2,3,'image295'),(296,'Jordan Shorts',10,1,3,1,3,'image296'),(297,'Jordan Shorts',10,1,2,1,3,'image297'),(298,'Jordan Shorts',10,1,2,1,3,'image298'),(299,'Stussy Shorts',21,1,6,1,3,'image299'),(300,'Balenciaga Shorts',19,1,2,2,3,'image300'),(301,'Denim Tears  Shorts',17,5,6,2,3,'image301'),(302,'Denim Tears  jorts',23,1,6,1,3,'image302'),(303,'Denim Tears  jorts',23,4,2,2,3,'image303'),(304,'Rhude Attack Shorts',14,1,5,2,3,'image304'),(305,'Rhude Attack Shorts',14,5,4,2,3,'image305'),(306,'Rhude Attack Shorts',14,6,5,1,3,'image306'),(307,'Rhude Attack Shorts',13,1,1,2,3,'image307'),(308,'Rhude Attack Shorts',13,4,2,1,3,'image308'),(309,'Rhude Attack Shorts',13,5,1,1,3,'image309'),(310,'Rhude Attack Shorts',13,4,4,1,3,'image310'),(311,'Rhude Attack Shorts',13,6,4,2,3,'image311'),(312,'Supreme Hoodie',32,1,2,1,4,'image312'),(313,'Supreme Hoodie',32,1,6,1,4,'image313'),(314,'Supreme Hoodie',32,3,3,2,4,'image314'),(315,'Supreme Hoodie',32,1,6,2,4,'image315'),(316,'Supreme Hoodie',32,1,6,1,4,'image316'),(317,'Supreme Hoodie',32,2,6,1,4,'image317'),(318,'Supreme Hoodie',32,1,3,1,4,'image318'),(319,'Supreme Hoodie',32,2,4,2,4,'image319'),(320,'Supreme Hoodie',33,6,4,1,4,'image320'),(321,'Sp5der Hoodie',23,1,2,2,4,'image321'),(322,'Sp5der Hoodie',23,12,2,1,4,'image322'),(323,'Sp5der Hoodie',23,9,3,2,4,'image323'),(324,'Nike X ACG Jacket',36,1,6,2,4,'image324'),(325,'Nike X ACG Jacket',36,2,4,2,4,'image325'),(326,'Stone Island Jacket',24,1,3,1,4,'image326'),(327,'Balenciaga Jacket',36,1,6,2,4,'image327'),(328,'Ami sweater',19,1,6,2,4,'image328'),(329,'Ami sweater',19,2,3,2,4,'image329'),(330,'Ami sweater',19,8,4,1,4,'image330'),(331,'Ami sweater',19,4,3,1,4,'image331'),(332,'ARC\'TERYX SV7  Jacket',69,1,4,2,4,'image332'),(333,'ARC\'TERYX  Squamish  Jacket',32,4,5,2,4,'image333'),(334,'ARC\'TERYX  Squamish  Jacket',37,1,4,2,4,'image334'),(335,'ARC\'TERYX   2024 LT Jacket',45,1,6,2,4,'image335'),(336,'ARC\'TERYX  X Beams  Jacket',45,8,6,2,4,'image336'),(337,'Carsicko signature   Hoodie',20,1,2,2,4,'image337'),(338,'company Hoodie',31,4,5,2,4,'image338'),(339,'company Hoodie',31,1,2,2,4,'image339'),(340,'company Hoodie',28,1,1,1,4,'image340'),(341,'company Hoodie',28,4,1,1,4,'image341'),(342,'company Hoodie',28,3,2,2,4,'image342'),(343,'Amiri Hoodie',22,1,5,1,4,'image343'),(344,'Mardi Hoodie',14,1,1,1,4,'image344'),(345,'Mardi Hoodie',14,2,3,1,4,'image345'),(346,'Balenciaga Hoodie',52,4,4,2,4,'image346'),(347,'Stone Island Hoodie',21,1,4,2,4,'image347'),(348,'Stone Island Hoodie',21,3,4,1,4,'image348'),(349,'Stone Island Hoodie',21,6,4,2,4,'image349'),(350,'Stone Island Hoodie',18,4,1,2,4,'image350'),(351,'Stone Island Hoodie',18,1,6,2,4,'image351'),(352,'Bape Hoodie',16,1,3,2,4,'image352'),(353,'Bape Hoodie',16,2,4,2,4,'image353'),(354,'Bape Hoodie',16,2,2,1,4,'image354'),(355,'Moncler  Hoodie',25,1,4,1,4,'image355'),(356,'Moncler  Hoodie',25,2,4,2,4,'image356');
/*!40000 ALTER TABLE `termekek` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipus`
--

DROP TABLE IF EXISTS `tipus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipus` varchar(50) COLLATE utf8mb4_hungarian_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tipus` (`tipus`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipus`
--

LOCK TABLES `tipus` WRITE;
/*!40000 ALTER TABLE `tipus` DISABLE KEYS */;
INSERT INTO `tipus` VALUES (2,'nadrag'),(1,'polo'),(4,'pulover'),(3,'rovidnadrag');
/*!40000 ALTER TABLE `tipus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vevo`
--

DROP TABLE IF EXISTS `vevo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vevo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `adoszam` varchar(20) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `nev` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `cim` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vevo`
--

LOCK TABLES `vevo` WRITE;
/*!40000 ALTER TABLE `vevo` DISABLE KEYS */;
INSERT INTO `vevo` VALUES (1,'32926113-1-24','Kiss Pál','5400, Mezőtúr Petőfi tér 1'),(2,'12345678-1-42','Kovács Béla','Budapest, Fő utca 1.'),(3,'87654321-1-33','Szabó Anna','Debrecen, Kossuth tér 5.'),(4,'11112222-1-11','Tóth Gábor','Szeged, Tavasz utca 10.'),(5,'22221111-1-22','Nagy Márta','Pécs, Nyár utca 8.'),(6,'33334444-1-33','Fekete László','Győr, Ősz utca 4.');
/*!40000 ALTER TABLE `vevo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view1`
--

DROP TABLE IF EXISTS `view1`;
/*!50001 DROP VIEW IF EXISTS `view1`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view1` AS SELECT 
 1 AS `termek_id`,
 1 AS `Név`,
 1 AS `Ár(usd)`,
 1 AS `Típus`,
 1 AS `Szín`,
 1 AS `Méret`,
 1 AS `Státusz`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `gyak`
--

/*!50001 DROP VIEW IF EXISTS `gyak`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `gyak` AS select `v`.`nev` AS `Vasarlo_Nev`,`s`.`id` AS `Szamlaszam`,sum((`t`.`ar_usd` * `st`.`mennyiseg`)) AS `Osszeg_USD` from (((`szamla` `s` join `vevo` `v` on((`s`.`vevo_id` = `v`.`id`))) join `szamla_termek` `st` on((`s`.`id` = `st`.`szamla_id`))) join `termekek` `t` on((`st`.`termek_id` = `t`.`id`))) group by `s`.`id`,`v`.`nev` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `gyak2`
--

/*!50001 DROP VIEW IF EXISTS `gyak2`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `gyak2` AS select `t`.`nev` AS `Termek_Nev`,sum(`st`.`mennyiseg`) AS `Eladott_Darabszam` from ((`szamla` `s` join `szamla_termek` `st` on((`s`.`id` = `st`.`szamla_id`))) join `termekek` `t` on((`st`.`termek_id` = `t`.`id`))) where (month(`s`.`datum`) = 5) group by `t`.`nev` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `gyak3`
--

/*!50001 DROP VIEW IF EXISTS `gyak3`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `gyak3` AS select `v`.`nev` AS `Vasarlo_Nev`,`s`.`id` AS `Szamlaszam`,sum((`t`.`ar_usd` * `st`.`mennyiseg`)) AS `Szamla_Osszeg_USD` from (((`szamla` `s` join `vevo` `v` on((`s`.`vevo_id` = `v`.`id`))) join `szamla_termek` `st` on((`s`.`id` = `st`.`szamla_id`))) join `termekek` `t` on((`st`.`termek_id` = `t`.`id`))) where (`v`.`nev` = 'Kovács Béla') group by `s`.`id`,`v`.`nev` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `gyak4`
--

/*!50001 DROP VIEW IF EXISTS `gyak4`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `gyak4` AS select `t`.`nev` AS `Termek_nev`,sum(`sz`.`mennyiseg`) AS `Eladott_darab` from (`szamla_termek` `sz` join `termekek` `t` on((`sz`.`termek_id` = `t`.`id`))) group by `t`.`nev` order by `Eladott_darab` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `gyak5`
--

/*!50001 DROP VIEW IF EXISTS `gyak5`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `gyak5` AS select `sz`.`id` AS `Szamla_ID`,`v`.`nev` AS `Vevo_nev`,sum((`t`.`ar_usd` * `szt`.`mennyiseg`)) AS `Ossz_ertek_usd` from (((`szamla` `sz` join `vevo` `v` on((`sz`.`vevo_id` = `v`.`id`))) join `szamla_termek` `szt` on((`sz`.`id` = `szt`.`szamla_id`))) join `termekek` `t` on((`szt`.`termek_id` = `t`.`id`))) group by `sz`.`id`,`v`.`nev` order by `Ossz_ertek_usd` desc limit 1 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `szamla1`
--

/*!50001 DROP VIEW IF EXISTS `szamla1`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `szamla1` AS select `v`.`nev` AS `Vevo_nev`,`v`.`cim` AS `Vevo_cim`,`v`.`adoszam` AS `Vevo_adoszam`,`s`.`datum` AS `Vasarlas_datum`,`t`.`nev` AS `Termek_nev`,`t`.`ar_usd` AS `Termek_ar`,`st`.`mennyiseg` AS `Darabszam`,(`t`.`ar_usd` * `st`.`mennyiseg`) AS `Osszeg_USD` from (((`szamla` `s` join `vevo` `v` on((`s`.`vevo_id` = `v`.`id`))) join `szamla_termek` `st` on((`s`.`id` = `st`.`szamla_id`))) join `termekek` `t` on((`st`.`termek_id` = `t`.`id`))) where (`s`.`id` = 1) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view1`
--

/*!50001 DROP VIEW IF EXISTS `view1`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view1` AS select `termekek`.`id` AS `termek_id`,`termekek`.`nev` AS `Név`,`termekek`.`ar_usd` AS `Ár(usd)`,`tipus`.`tipus` AS `Típus`,`szin`.`szin` AS `Szín`,`meret`.`meret` AS `Méret`,`elerhetoseg`.`statusz` AS `Státusz` from ((((`termekek` join `tipus` on((`termekek`.`tipus_id` = `tipus`.`id`))) join `szin` on((`termekek`.`szin_id` = `szin`.`id`))) join `meret` on((`termekek`.`meret_id` = `meret`.`id`))) join `elerhetoseg` on((`termekek`.`elerhetoseg_id` = `elerhetoseg`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-10  8:24:25
