CREATE DATABASE DELIVERYAPP_db;
USE DELIVERYAPP_db;

CREATE TABLE users(
    email VARCHAR(100),
    password VARCHAR(100),
    PRIMARY KEY(email)
);

