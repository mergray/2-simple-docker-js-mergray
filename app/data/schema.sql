SHOW DATABASES;
CREATE DATABASE IF NOT EXISTS msisdb;

USE msisdb;

DROP TABLE IF EXISTS student;

CREATE TABLE student (
	id int PRIMARY KEY AUTO_INCREMENT ,
    username varchar(24) UNIQUE NOT NULL,
    name varchar(48)
);

INSERT INTO student (id, username, name) VALUES 
(1, 'tomgreg', 'Tom Gregory'),
(2, 'beth1', 'Beth Barnhart'),
(3, 'bipin', 'Prof. Prabhakar');

-- SELECT * FROM students;

DROP TABLE IF EXISTS offer;
CREATE TABLE offer (
	id int PRIMARY KEY AUTO_INCREMENT,
    studentId int NOT NULL REFERENCES student(id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
	companyName VARCHAR(24) NOT NULL DEFAULT '',
    salary int NOT NULL DEFAULT 0,
    bonus int NOT NULL DEFAULT 0,
	offerDate date NOT NULL DEFAULT(CURRENT_DATE)
);


-- Student 1 has no offers, Student 2 has 3 offers, Student 3 has one offer
INSERT INTO offer(id, studentId, companyName, salary, bonus, offerDate) VALUES
  (1, 2, 'KPMG', 95000, 7000, '2021-09-30'),
  (2, 2, 'Deloitte Digital', 94000, 12000, '2021-10-03'),
  (3, 2, 'IU, ISGP', 54000, 0, '2021-10-05'),
  (4, 3, 'Amazon', 122000, 11000, '2021-10-15')
;

DROP TABLE IF EXISTS books;

CREATE TABLE books(
	title VARCHAR(24) NOT NULL DEFAULT '',
    author VARCHAR(24) NOT NULL DEFAULT '',
    yearPublished int NOT NULL DEFAULT 0,
	publisher VARCHAR(24) NOT NULL DEFAULT '',
	pageCount int NOT NULL DEFAULT 0,
	MSRP int NOT NULL DEFAULT 0
    );

INSERT INTO books(title, author, yearPublished, publisher, pageCount, MSRP) VALUES
  ('All the Light We Cannot See',  'Anthony Doerr', 2014, 'Scribner', 531, 19.99),
  ('The Nightingale', 'Kristin Hannah', 2012, 'St. Martins Press', 564, 19.99),
  ('The Hunger Games', 'Suzanne Collins', 2008, 'Scholastic', 450, 12.99),
  ('Unbroken', 'Laura Hillenbrand', 2010, 'Scholastic', 450, 12.99),
  ('Becoming', 'Michele Obama', 2018, 'Scholastic', 450, 14.99),
  ('Harry Potter', 'J.K. Rowlind', 2012, 'St Martins Press', 400, 21.99)
;
