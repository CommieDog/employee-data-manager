INSERT INTO departments
(name) VALUES
    ("Operations"),
    ("Mechanical"),
    ("Geology");

INSERT INTO roles
(title, salary, department_id) VALUES
    ("Underground Operator", 60000, 1),
    ("Mill Operator", 60000, 1),
    ("Underground Shift Leader", 75000, 1),
    ("Underground Manager", 90000, 1),
    ("Mill Manager", 90000, 1),
    ("Mining Maintenance Worker", 70000, 2),
    ("Mill Maintenance Worker", 70000, 2),
    ("Maintenance Worker Manager", 95000, 2),
    ("Core Logger", 50000, 3),
    ("Ore Sampler", 60000, 3),
    ("Geology Manager", 90000, 3);

INSERT INTO employees
(first_name, last_name, role_id, manager_id) VALUES
    ("Tim", "Greene", 1, 6),
    ("Will", "Johnson", 1, 6),
    ("Robert", "Lace", 1, 6),
    ("James", "Shumacher", 1, 7),
    ("Steve", "Brown", 1, 7),
    ("Jason", "Miller", 2, 8),
    ("Patrick", "Crusher", 2, 8),
    ("Larry", "Peters", 3, 11),
    ("Jon", "Corbet", 3, 11),
    ("George", "Bressler", 4, 11),
    ("Bob", "Builder", 5, NULL),
    ("Steven", "Jones", 6, 16),
    ("Jonathan", "Commings", 6, 16),
    ("Sally", "Bireley", 7, 16),
    ("Paul", "Ebbert", 7, 16),
    ("Edward", "Oberlin", 8, NULL),
    ("Kate", "Gossling", 9, 22),
    ("John", "Netzel", 9, 22),
    ("Sara", "Thompson", 9, 22),
    ("Joseph", "Farmers", 10, 22),
    ("Alex", "Crawford", 10, 22),
    ("Issac", "Ross", 11, NULL);