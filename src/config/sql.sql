CREATE DATABASE `nest_stu` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE Users (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(32),
  `phone` varchar(20) UNIQUE,
  `email` varchar(100) UNIQUE,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;