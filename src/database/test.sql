
-- PRODUCT (food, drink)
DROP TABLE IF EXISTS `media`;
DROP TABLE IF EXISTS `rating`;

DROP TABLE IF EXISTS `drink_variant`;
DROP TABLE IF EXISTS `drinks`;
DROP TABLE IF EXISTS `foods`;
DROP TABLE IF EXISTS `categories_products`;

-- authentication
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `roles`;

-- roles
CREATE TABLE `roles`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255),
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

-- users
CREATE TABLE `users`  (
  `id` int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(50),
  `email` varchar(50),
  `username` varchar(50),
  `password` varchar(50),
  `phone` varchar(50) NULL,
  `address` varchar(255),
  `avatar` varchar(255),
  `gender` boolean,
  `role_id` int(10) UNSIGNED,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`)
);

-- PRODUCT
-- category-foods :V
CREATE TABLE `categories_products`  (
  `id` int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `keyword` varchar(50),
  `name` varchar(255),
  `slogan` varchar(255),
  `thumbnail` varchar(255),
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

-- foods
CREATE TABLE `foods`  (
  `id` int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `keyword` varchar(50),
  `name` varchar(255),
  `thumbnail` varchar(255),
  `price` float(10),
  `discount` int(10),
  `desc` text,
  `category_id` int(10) UNSIGNED,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`category_id`) REFERENCES `categories_products`(`id`)
);

CREATE TABLE `drinks`  (
  `id` int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `keyword` varchar(50),
  `name` varchar(255),
  `thumbnail` varchar(255),
  `discount` int(10),
  `desc` text,
  `category_id` int(10) UNSIGNED,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`category_id`) REFERENCES `categories_products`(`id`)
);

CREATE TABLE `drink_variant`  (
  `id` int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `keyword` varchar(50),
  `name` varchar(255),
  `price` float(10),
  `size` varchar(50),
  `discount_variant` int(10),
  `drink_id` int(10) UNSIGNED,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`)
);

-- đánh giá các sản phẩm
CREATE TABLE `rating`  (
  `id` int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `eval` int(1),
  `comment` text,
  `prod_id` int(10) UNSIGNED,
  `for` varchar(255),
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `media`  (
  `id` int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `filepath` varchar(255),
  `mimetype` varchar(255),
  `owner_id` int(10) UNSIGNED,
  `rating_id` int(10) UNSIGNED,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`),
  FOREIGN KEY (`rating_id`) REFERENCES `rating`(`id`)
);
