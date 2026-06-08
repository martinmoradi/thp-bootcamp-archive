CREATE TABLE `user` (
`id` INTEGER PRIMARY KEY AUTOINCREMENT,
`name` TEXT
);

CREATE TABLE `article` (
`id` INTEGER PRIMARY KEY AUTOINCREMENT,
`user_id` INTEGER
);

CREATE TABLE `article_category` (
`id` INTEGER PRIMARY KEY AUTOINCREMENT,
`article_id` INTEGER,
`category_title` TEXT
);

CREATE TABLE `article_category_tag` (
`id` INTEGER PRIMARY KEY AUTOINCREMENT,
`category_id` INTEGER,
`tag_color` TEXT
);
