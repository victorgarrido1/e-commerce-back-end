INSERT INTO department (name)
VALUES 
('IT'),
('Fiance & Accounting'),
('Sales & Marketing'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Full Stack Web Developer', 70000, 1),
    ('Software Engineer', 12000, 1),
    ('General Account Manager', 50000, 2),
    ('Financial Analyst' 13000, 2),
    ('Marketing Coordinator' 70000, 3),
    ('Sales Representative' 90000, 3),
    ('Project Manager' 10000, 4),
    ('Operations Manager' 95000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Smith', 2, NULL),
('Hannah', 'BerryTail', 1, 1),
('Victor','Garrison', 4, NULL),
('Samantha','Reed', 3, 3),
('Davidson' 'Peterson', 6, NULL),
('Ana',"Underwood",5, 5),
('Tyler','Oakley', 7,, 7);