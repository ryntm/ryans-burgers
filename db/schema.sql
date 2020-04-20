DROP DATABASE IF EXISTS flavortown;

CREATE DATABASE flavortown;

USE flavortown;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    hide BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);