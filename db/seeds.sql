DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    id INT NOT NULL PRIMARY KEY,
    department VARCHAR(30) NOT NULL
);

INSERT INTO departments (id, department)
VALUES 
    (1, 'Engineering'),
    (2, 'Finance'),
    (3, 'Legal'),
    (4, 'Sales');

/*--------------------------------*/

DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary INT NOT NULL
);

INSERT INTO roles (id, title, department, salary)
VALUES
    (1, 'Sales Lead', 'Sales', 100000),
    (2, 'Salesperson', 'Sales', 80000),
    (3, 'Lead Engineer', 'Engineering', 150000),
    (4, 'Software Engineer', 'Engineering', 120000),
    (5, 'Account Manager', 'Finance', 160000),
    (6, 'Accountant', 'Finance', 125000),
    (7, 'Legal Team Lead', 'Legal', 250000),
    (8, 'Lawyer', 'Legal', 190000);