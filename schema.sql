DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users (
  id int AUTO_INCREMENT PRIMARY KEY,
  name varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  password varchar(20) NOT NULL
);

CREATE TABLE shippingInfo (
  id int AUTO_INCREMENT PRIMARY KEY,
  address1 varchar(50) NOT NULL,
  address2 varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  state varchar(50) NOT NULL,
  zipCode int NOT NULL,
  FOREIGN KEY (id) REFERENCES users(ID)
);

CREATE TABLE billingInfo (
  id int AUTO_INCREMENT PRIMARY KEY,
  cardNum int NOT NULL,
  expDate varchar(50) NOT NULL,
  CVV int NOT NULL,
  billingZip int NOT NULL,
  FOREIGN KEY (id) REFERENCES users(ID)
)