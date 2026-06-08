CREATE TABLE `courses` (
`id` INTEGER PRIMARY KEY AUTOINCREMENT,
`title` TEXT,
`description`TEXT
);

CREATE TABLE `lessons` (
`id` INTEGER PRIMARY KEY AUTOINCREMENT,
`courses_id` INTEGER,
`title` TEXT,
`body` TEXT
);
