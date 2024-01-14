-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2023 at 11:07 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hire_shop`
--
CREATE DATABASE IF NOT EXISTS `hire_shop` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `hire_shop`;

-- --------------------------------------------------------

--
-- Table structure for table `tool`
--

CREATE TABLE `tool` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `hire_price` decimal(6,2) NOT NULL,
  `tool_category_id` int(11) NOT NULL,
  `image` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tool`
--

INSERT INTO `tool` (`id`, `description`, `hire_price`, `tool_category_id`, `image`) VALUES
(5, 'Carpet Cleaner', '21.50', 1, 0x5c7075626c69635c696d616765735c313639363334333531323838302d6361727065745f636c65616e65722e504e47),
(6, 'Power Washer', '93.00', 1, 0x5c7075626c69635c696d616765735c313639363334333534373634392d706f7765725f7761736865722e504e47),
(7, 'Floor Sander', '33.50', 2, 0x5c7075626c69635c696d616765735c313639363334333537313333382d666c6f6f725f73616e6465722e504e47),
(8, 'Air Conditioner', '39.00', 3, 0x5c7075626c69635c696d616765735c313639363334333630303134332d6169725f636f6e646974696f6e65722e504e47),
(12, 'Air Pump', '62.00', 3, 0x5c7075626c69635c696d616765735c313639373533353734373535392d6169725f70756d702e504e47);

-- --------------------------------------------------------

--
-- Table structure for table `tool_category`
--

CREATE TABLE `tool_category` (
  `id` int(11) NOT NULL,
  `description` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tool_category`
--

INSERT INTO `tool_category` (`id`, `description`) VALUES
(1, 'Cleaning'),
(2, 'Sanding'),
(3, 'Cooling');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tool`
--
ALTER TABLE `tool`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk` (`tool_category_id`);

--
-- Indexes for table `tool_category`
--
ALTER TABLE `tool_category`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tool`
--
ALTER TABLE `tool`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tool_category`
--
ALTER TABLE `tool_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tool`
--
ALTER TABLE `tool`
  ADD CONSTRAINT `fk` FOREIGN KEY (`tool_category_id`) REFERENCES `tool_category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
