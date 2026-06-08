CREATE TABLE `users` (
`id` INTEGER PRIMARY KEY AUTOINCREMENT,
`name` TEXT
);

CREATE TABLE `posted_urls` (
`id` INTEGER PRIMARY KEY AUTOINCREMENT,
`user_id` INTEGER,
`url` TEXT
);

CREATE TABLE `url_comments` (
`id` INTEGER PRIMARY KEY AUTOINCREMENT,
`user_id` INTEGER,
`url_id` INTEGER,
`body` TEXT
);

CREATE TABLE `comment_comments` (
`id` INTEGER PRIMARY KEY AUTOINCREMENT,
`user_id` INTEGER,
`url_id` INTEGER,
`comment_id` INTEGER,
`body` TEXT
);
