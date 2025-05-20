SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

DROP DATABASE IF EXISTS roaya_form_complaint;

CREATE DATABASE roaya_form_complaint;

USE roaya_form_complaint;

CREATE TABLE `visitors` ( 
    `id` int(100) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`),
    `name` varchar(100) NOT NULL, 
    `number` varchar(100) NOT NULL, 
    `email` varchar(100) NOT NULL, 
    `subject` varchar(100) NOT NULL, 
    `complaints` varchar(100) NOT NULL, 
    `message` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;