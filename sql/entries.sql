CREATE DATABASE postlink;

USE postlink;

CREATE TABLE entries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    theme VARCHAR(255) NOT NULL,
    key VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    file_name VARCHAR(255),
    file_data LONGBLOB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
