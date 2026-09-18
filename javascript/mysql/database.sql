CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE IF NOT EXISTS students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  marks INT CHECK (marks BETWEEN 0 AND 100)
);

INSERT INTO students (name, email, marks)
VALUES ('Asha Rao', 'asha@example.com', 88)
ON DUPLICATE KEY UPDATE marks = VALUES(marks);

SELECT id, name, email, marks
FROM students
WHERE marks >= 40
ORDER BY marks DESC;
