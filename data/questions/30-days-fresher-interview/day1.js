// ============================================================
// TOBIRAIQ — 30 Days Fresher Interview — Day 1 Quiz
// Topic: Python Basics + SQL Foundations (Part 1 + Part 2)
// Questions: 15 (mix of both parts)
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 1 — Python Basics & SQL Foundations",
  questions: [
    // ── Python Questions (Part 1) ─────────────────────
    {
      q: "What does this Python code print?\n\nprint('Hello, World!')",
      options: [
        "Hello, World",
        "Hello, World!",
        "'Hello, World!'",
        "Nothing — it causes an error"
      ],
      answer: 1,
      explanation: "print() displays exactly what is inside the quotes. The exclamation mark is part of the string so it prints too — Hello, World!"
    },
    {
      q: "Which of the following is a valid Python variable name?",
      options: [
        "1name",
        "first name",
        "first_name",
        "print"
      ],
      answer: 2,
      explanation: "Variable names cannot start with a number, cannot contain spaces, and cannot be Python reserved words like print. first_name follows the correct snake_case convention."
    },
    {
      q: "What data type is the value 19.99 in Python?",
      options: [
        "int",
        "str",
        "bool",
        "float"
      ],
      answer: 3,
      explanation: "Any number with a decimal point is a float in Python. Without a decimal point (like 20), it would be an int."
    },
    {
      q: "What is the difference between 22 and \"22\" in Python?",
      options: [
        "No difference — they are exactly the same",
        "22 is a number you can do math with; \"22\" is text that happens to contain digits",
        "\"22\" is a number; 22 is a boolean",
        "22 is a float; \"22\" is an integer"
      ],
      answer: 1,
      explanation: "22 is an integer — you can add, subtract or multiply with it. \"22\" is a string — it is text that looks like a number but cannot be used in arithmetic without converting it first."
    },
    {
      q: "What will this code print?\n\nscore = 10\nscore = 25\nprint(score)",
      options: [
        "10",
        "25",
        "10 and 25 on separate lines",
        "An error — you cannot reassign a variable"
      ],
      answer: 1,
      explanation: "Python replaces the old value with the new one when a variable is reassigned. The second assignment sets score to 25, so print(score) outputs 25."
    },
    {
      q: "What does the # symbol do in Python?",
      options: [
        "Multiplies two values",
        "Marks the rest of the line as a comment that Python ignores",
        "Prints text to the screen",
        "Creates a new variable"
      ],
      answer: 1,
      explanation: "# starts a comment. Python completely ignores everything after # on that line when running the code. Comments exist to help humans understand the code."
    },
    {
      q: "Which Python function tells you the data type of a value?",
      options: [
        "print()",
        "input()",
        "type()",
        "data()"
      ],
      answer: 2,
      explanation: "type() returns the data type of a value. For example, type(22) returns <class 'int'> and type('Asha') returns <class 'str'>."
    },
    {
      q: "What are the only two possible values for a bool data type in Python?",
      options: [
        "0 and 1",
        "yes and no",
        "True and False",
        "on and off"
      ],
      answer: 2,
      explanation: "Boolean values in Python are True and False — capitalized exactly this way. They represent yes/no or on/off logic and are used in conditions and comparisons."
    },
    // ── SQL Questions (Part 2) ────────────────────────
    {
      q: "What does SQL stand for?",
      options: [
        "Standard Query Language",
        "Structured Query Language",
        "Simple Question Language",
        "Sequential Query Logic"
      ],
      answer: 1,
      explanation: "SQL stands for Structured Query Language. It is the language used to communicate with relational databases — to retrieve, add or update data."
    },
    {
      q: "In a database table, what is a row also called?",
      options: [
        "A column",
        "A field",
        "A record",
        "A query"
      ],
      answer: 2,
      explanation: "A row is also called a record. It represents one complete entry in the table. In the students table from Day 1, each student is one row (one record)."
    },
    {
      q: "What does the following SQL query return?\n\nSELECT * FROM students;",
      options: [
        "Only the first row of the students table",
        "Only the column names, no data",
        "Every column and every row from the students table",
        "An error — * is not valid SQL"
      ],
      answer: 2,
      explanation: "The asterisk * is a wildcard that means 'all columns'. SELECT * FROM students returns the entire table — every column and every row, exactly as stored."
    },
    {
      q: "Which SQL keyword specifies which table to retrieve data from?",
      options: [
        "SELECT",
        "FROM",
        "GET",
        "TABLE"
      ],
      answer: 1,
      explanation: "FROM specifies which table the database should look in. SELECT specifies which columns you want. A basic query always has both: SELECT column FROM table."
    },
    {
      q: "What is wrong with this SQL query?\n\nSELECT full_name age FROM students;",
      options: [
        "FROM should come before SELECT",
        "full_name is not a valid column name",
        "There is a missing comma between full_name and age",
        "The semicolon is missing"
      ],
      answer: 2,
      explanation: "When selecting multiple columns you must separate them with commas. Without the comma, the database cannot tell where one column name ends and the next begins. The fix: SELECT full_name, age FROM students;"
    },
    {
      q: "How do you write a comment in SQL?",
      options: [
        "// This is a comment",
        "# This is a comment",
        "/* This is a comment",
        "-- This is a comment"
      ],
      answer: 3,
      explanation: "SQL comments start with two dashes --. Everything after -- on that line is completely ignored when the query runs. This is different from Python, which uses # for comments."
    },
    {
      q: "True or False: In a SQL query, FROM must always be written before SELECT.",
      options: [
        "True — FROM always comes first",
        "False — SELECT always comes first, followed by FROM",
        "True — the order does not matter at all",
        "False — both can be written in any order"
      ],
      answer: 1,
      explanation: "SELECT always comes first, followed by FROM. Writing FROM before SELECT causes a syntax error. The correct order is: SELECT column FROM table;"
    }
  ]
};