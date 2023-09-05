INSERT INTO department (id, department_name)
VALUES (1, "Board"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Finance"),
       (5, "Legal");

-- Role seeds
INSERT INTO roles (department_id, title, salary)
VALUES (1, "CEO", 1000000),
       (2, "Sales Lead", 100000),
       (2, "Salesperson", 80000),
       (3, "Lead Engineer", 150000),
       (3, "Software Engineer", 120000),
       (4, "Accountant Manager", 160000),
       (4, "Accountant", 125000),
       (5, "Legal Team Lead", 250000),
       (5, "Lawyer", 190000);

-- Employee seeds
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "Colwell", 1, null),
       ("Tyler", "Brown", 2, 1),
       ("James", "Gordan", 3, 3),
       ("William", "Becker", 4, 1),
       ("Zion", "Green", 5, 4), 
       ("Beck", "Rellis", 6, 1),
       ("Clay", "Andrews", 7, 5),
       ("Zack", "Plates", 8, 1),
       ("Mia", "Lewis", 9, 6);