-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 16, 2022 at 10:12 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mmpcdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `member_beneficiaries`
--

CREATE TABLE `member_beneficiaries` (
  `id` int(11) NOT NULL,
  `fullname` varchar(100) DEFAULT NULL,
  `relationship` varchar(100) DEFAULT NULL,
  `ben_birth` date DEFAULT NULL,
  `mem_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `member_business`
--

CREATE TABLE `member_business` (
  `id` int(11) NOT NULL,
  `business_name` varchar(100) DEFAULT NULL,
  `business_address` varchar(100) DEFAULT NULL,
  `mem_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `member_education`
--

CREATE TABLE `member_education` (
  `id` int(11) NOT NULL,
  `course` varchar(100) DEFAULT NULL,
  `school` varchar(100) DEFAULT NULL,
  `year_grad` varchar(100) DEFAULT NULL,
  `mem_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `member_ids`
--

CREATE TABLE `member_ids` (
  `id` int(11) NOT NULL,
  `sss` varchar(100) DEFAULT NULL,
  `gsis` varchar(100) DEFAULT NULL,
  `tin` varchar(100) DEFAULT NULL,
  `mem_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member_ids`
--

INSERT INTO `member_ids` (`id`, `sss`, `gsis`, `tin`, `mem_id`) VALUES
(1, 'etrtert', 'etewtew', 'wetwet', 'alm5iql3usi');

-- --------------------------------------------------------

--
-- Table structure for table `member_info`
--

CREATE TABLE `member_info` (
  `mem_id` varchar(255) NOT NULL,
  `fn` varchar(100) NOT NULL,
  `mn` varchar(100) NOT NULL,
  `ln` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `gender` varchar(11) NOT NULL,
  `status` varchar(11) NOT NULL,
  `birth` date DEFAULT NULL,
  `birth_place` varchar(100) NOT NULL,
  `brgy` varchar(100) NOT NULL,
  `zipcode` int(11) NOT NULL,
  `member_status` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member_info`
--

INSERT INTO `member_info` (`mem_id`, `fn`, `mn`, `ln`, `email`, `contact`, `gender`, `status`, `birth`, `birth_place`, `brgy`, `zipcode`, `member_status`, `image`) VALUES
('alm5iql3usi', 'Judith', 'Montero', 'Garcia', 'gacia@gmail.com', '09361891728', 'Female', 'Seperated', '1991-02-01', 'Cabuyo', 'Malbog', 4904, 0, '5aee9605-c5b7-429e-9202-53d23a705504');

-- --------------------------------------------------------

--
-- Table structure for table `member_occupation`
--

CREATE TABLE `member_occupation` (
  `id` int(11) NOT NULL,
  `occupation` varchar(100) DEFAULT NULL,
  `occu_address` varchar(100) DEFAULT NULL,
  `employee_name` varchar(100) DEFAULT NULL,
  `date_employed` varchar(100) DEFAULT NULL,
  `salary` varchar(100) DEFAULT NULL,
  `mem_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `member_spouse`
--

CREATE TABLE `member_spouse` (
  `id` int(11) NOT NULL,
  `spouse_name` varchar(100) DEFAULT NULL,
  `spouse_birth` date DEFAULT NULL,
  `spouse_occupation` varchar(100) DEFAULT NULL,
  `spouse_salary` varchar(100) DEFAULT NULL,
  `mem_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member_beneficiaries`
--
ALTER TABLE `member_beneficiaries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mem_id` (`mem_id`);

--
-- Indexes for table `member_business`
--
ALTER TABLE `member_business`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mem_id` (`mem_id`);

--
-- Indexes for table `member_education`
--
ALTER TABLE `member_education`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mem_id` (`mem_id`);

--
-- Indexes for table `member_ids`
--
ALTER TABLE `member_ids`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mem_id` (`mem_id`);

--
-- Indexes for table `member_info`
--
ALTER TABLE `member_info`
  ADD PRIMARY KEY (`mem_id`),
  ADD UNIQUE KEY `UC_Member_info` (`email`,`contact`);

--
-- Indexes for table `member_occupation`
--
ALTER TABLE `member_occupation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mem_id` (`mem_id`);

--
-- Indexes for table `member_spouse`
--
ALTER TABLE `member_spouse`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mem_id` (`mem_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member_beneficiaries`
--
ALTER TABLE `member_beneficiaries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `member_business`
--
ALTER TABLE `member_business`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `member_education`
--
ALTER TABLE `member_education`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `member_ids`
--
ALTER TABLE `member_ids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `member_occupation`
--
ALTER TABLE `member_occupation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `member_spouse`
--
ALTER TABLE `member_spouse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `member_beneficiaries`
--
ALTER TABLE `member_beneficiaries`
  ADD CONSTRAINT `member_beneficiaries_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member_info` (`mem_id`);

--
-- Constraints for table `member_business`
--
ALTER TABLE `member_business`
  ADD CONSTRAINT `member_business_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member_info` (`mem_id`);

--
-- Constraints for table `member_education`
--
ALTER TABLE `member_education`
  ADD CONSTRAINT `member_education_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member_info` (`mem_id`);

--
-- Constraints for table `member_ids`
--
ALTER TABLE `member_ids`
  ADD CONSTRAINT `member_ids_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member_info` (`mem_id`);

--
-- Constraints for table `member_occupation`
--
ALTER TABLE `member_occupation`
  ADD CONSTRAINT `member_occupation_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member_info` (`mem_id`);

--
-- Constraints for table `member_spouse`
--
ALTER TABLE `member_spouse`
  ADD CONSTRAINT `member_spouse_ibfk_1` FOREIGN KEY (`mem_id`) REFERENCES `member_info` (`mem_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
