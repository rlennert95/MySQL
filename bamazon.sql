DROP DATABASE IF EXISTS bamazon_db ;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NULL,
department_name VARCHAR(30) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socks", "Clothes", 9.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blue T-Shirt", "Clothes", 19.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Harry Potter", "Books", 14.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer", "Technology", 999.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Sneakers", "Shoes", 79.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Green T-Shirt", "Clothes", 17.99, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fortnite", "Games", 4.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Protein Bars", "Food", 8.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Action Figure", "Toys", 24.99, 94);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Barbie Doll", "Toys", 34.99, 874);

SELECT * FROM products;


