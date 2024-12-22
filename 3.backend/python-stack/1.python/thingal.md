Thaithngal is the website that sells Indian Traditional Rices, Thaithingal Essential like shampoo, soap, etc., Traditional Medicines like herbs, powders, ect., Thaithingal Nourishment like health mix, honey, sprouts powder, ect. and few cooking Books with traditional recipies.
WQe have following data
1. CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `req_ip` varchar(65) DEFAULT NULL,
  `storeid` int(11) DEFAULT NULL,
  `order_id` varchar(15) DEFAULT NULL,
  `order_status` int(11) DEFAULT 0 COMMENT '0 - Pending, 1 - Processing, 2 - SL Generated, 3 - Shipped, 4 - Delivered',
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `mobile_prefix` varchar(10) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `currency` varchar(10) DEFAULT NULL,
  `is_wallet` tinyint(1) DEFAULT 0,
  `amt` double DEFAULT NULL,
  `totalamt` int(10) UNSIGNED DEFAULT NULL,
  `wallet_used` int(10) UNSIGNED DEFAULT 0,
  `deliverychg` smallint(5) UNSIGNED DEFAULT NULL,
  `cod_charge` int(11) DEFAULT 0,
  `payment_status` enum('Success','Failure','Canceled','Pending','Return') NOT NULL DEFAULT 'Pending',
  `payment_date` timestamp NULL DEFAULT NULL,
  `address_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `deliveryaddress` longtext DEFAULT NULL,
  `country` int(11) DEFAULT NULL,
  `testing_column` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`testing_column`)),
  `cartinfodata` longtext DEFAULT NULL,
  `inv_number` int(11) DEFAULT NULL,
  `mapping` tinyint(4) DEFAULT 0,
  `product_ids` text DEFAULT NULL,
  `referral` varchar(11) DEFAULT '0',
  `shipping_method` varchar(100) DEFAULT NULL,
  `payment_method` varchar(300) DEFAULT NULL,
  `payment_id` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `payment_intent_id` text DEFAULT NULL,
  `ref_no` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `note` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `coupon_code` varchar(55) DEFAULT NULL,
  `cashback_id` int(11) DEFAULT NULL,
  `discount` int(11) NOT NULL DEFAULT 0,
  `migrated` int(11) DEFAULT NULL,
  `record_date` datetime DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tracking_awb` varchar(45) DEFAULT NULL,
  `tracking_courier` int(11) DEFAULT NULL,
  `shipped_at` datetime DEFAULT NULL,
  `delivered_at` datetime DEFAULT NULL,
  `updated_via` int(11) DEFAULT NULL COMMENT '1 - Status Check',
  `zinvoice_no` varchar(75) DEFAULT NULL,
  `zinvoice_url` text DEFAULT NULL,
  `invoice` text DEFAULT NULL
)
2. CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `storeid` tinyint(4) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile_prefix` varchar(10) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `profile_pic` text DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` varchar(15) DEFAULT NULL,
  `wallet` decimal(12,2) DEFAULT 0.00,
  `location` int(11) DEFAULT NULL,
  `last_logged_ip` varchar(250) DEFAULT NULL,
  `registered_ip` varchar(250) DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `cartinfo` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`cartinfo`)),
  `wishlist` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`wishlist`)),
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `migrated` int(11) DEFAULT NULL,
  `migrated_user_id` int(11) DEFAULT NULL,
  `added_by` tinyint(4) DEFAULT 1 COMMENT '1 - Customer, 2 - Admin',
  `mapping` tinyint(4) DEFAULT 0
)

My requirements
1. From these two i want the customers who has spent the max amount
2. Customers who has placed the maximum number of orders
3. Customers per day expenditure by calculating their total order value divided by number of days between date of their first order up-until today 
4. Seggregate the customers along with number of customer into 6 different categories based on when they place their order in a day. Monring 7AM-10AM, 10AM-1PM,  1PM-4PM, 4PM-6PM, 6PM-11PM, 11PM-7AM. 
5. Now from the above result i also want another result. Take every individual customer and based on the number of orders that they have placed, give a percentage of orders under every time slot by naming the column with time slot.
6. Seggregate the customers based on which category of orders that they have placed. (like rice or nutritional or books, ect.). Here categories can be the name of the columns and values should be in numbers (perecentage). So columns can be cutomer, category1, 2,...n and percentage as their value.
7. Every customer and their last placed order date

I need queries for everything. 
Here is your data.

