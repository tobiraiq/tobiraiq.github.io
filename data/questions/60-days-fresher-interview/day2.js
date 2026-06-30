// ============================================================
// TOBIRAIQ — 60 Days Fresher Interview — Day 2 Quiz
// Topic: Databases, MySQL Installation & SELECT Basics
// Questions: 15
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 2 — Databases, MySQL Installation & SELECT Basics",
  questions: [
    {
      q: "What is a database?",
      options: [
        "A type of programming language",
        "An organized collection of data stored so it can be easily accessed, managed, and updated",
        "A single Excel file",
        "A website hosting service"
      ],
      answer: 1,
      explanation: "A database is an organized, structured collection of data designed for reliable storage, retrieval, and updating — much more robust than a single spreadsheet file."
    },
    {
      q: "What does SQL stand for?",
      options: [
        "Standard Query Language",
        "Structured Query Language",
        "Simple Question Language",
        "Sequential Query Logic"
      ],
      answer: 1,
      explanation: "SQL stands for Structured Query Language — the language used to communicate with relational databases to retrieve, add, or update data."
    },
    {
      q: "Why does this course teach MySQL installed locally instead of an online SQL editor?",
      options: [
        "Online editors don't support the SELECT keyword",
        "Local MySQL mirrors the real database setup used in jobs and assessments, building habits that transfer directly",
        "Local installs are always faster than the internet",
        "Online editors are illegal to use"
      ],
      answer: 1,
      explanation: "Working with a real local database installation builds the same skills and habits expected in actual mass-hiring assessments and real jobs, rather than relying on a simplified online sandbox."
    },
    {
      q: "Which two components does this course install together for MySQL?",
      options: [
        "MySQL Server and MySQL Workbench",
        "MySQL Server and Python",
        "MySQL Workbench and Git",
        "Just MySQL Workbench, nothing else"
      ],
      answer: 0,
      explanation: "MySQL Server is the actual database engine that stores and processes data. MySQL Workbench is the visual tool used to write and run queries against it."
    },
    {
      q: "During MySQL Server setup, what is the root password used for?",
      options: [
        "It encrypts your hard drive",
        "It is the administrator password used to connect to and manage your MySQL Server",
        "It is only needed if you forget your Windows password",
        "It has no real purpose and can be skipped"
      ],
      answer: 1,
      explanation: "The root password is the administrator credential for your MySQL Server. You'll need it every time you connect via MySQL Workbench, so it should be remembered or written down safely."
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
      explanation: "A row is also called a record — it represents one complete entry in the table, such as one student in a students table."
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
      explanation: "The asterisk * is a wildcard meaning 'all columns'. SELECT * FROM students returns the entire table — every column and every row."
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
      explanation: "FROM specifies which table to look in. A basic query always has both: SELECT column FROM table."
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
      explanation: "When selecting multiple columns, they must be separated with commas. The fix is: SELECT full_name, age FROM students;"
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
      explanation: "SQL comments start with two dashes --. Everything after -- on that line is ignored. This differs from Python, which uses # for comments."
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
      explanation: "SELECT always comes first, followed by FROM. Writing FROM before SELECT causes a syntax error."
    },
    {
      q: "Which query correctly selects only the full_name and age columns from a students table?",
      options: [
        "SELECT full_name age FROM students;",
        "SELECT full_name, age FROM students;",
        "SELECT students FROM full_name, age;",
        "GET full_name, age FROM students;"
      ],
      answer: 1,
      explanation: "Multiple columns are separated by commas after SELECT, and the table name follows FROM: SELECT full_name, age FROM students;"
    },
    {
      q: "What does it mean for a relational database to organize data into 'tables'?",
      options: [
        "Data is stored as random unstructured text files",
        "Data is organized into rows and columns, similar to a spreadsheet, with each table representing one type of entity",
        "Tables are just decorative formatting with no real function",
        "Each table can only ever hold one single value"
      ],
      answer: 1,
      explanation: "A relational database organizes data into tables made of rows (records) and columns (fields), with each table typically representing one entity type, like students or orders."
    },
    {
      q: "A query runs but returns 'Unknown database' in MySQL Workbench. What is the most likely cause?",
      options: [
        "MySQL Workbench is broken and needs reinstalling",
        "No database/schema has been selected or created yet for the connection to use",
        "The SELECT keyword was typed in lowercase",
        "The computer needs to restart"
      ],
      answer: 1,
      explanation: "This error usually means you haven't created or selected a schema (database) yet. You need to create a database first, then select it as the active schema before running queries against tables in it."
    },
    {
      q: "Why is it important to always end a SQL statement with a semicolon ( ; )?",
      options: [
        "It is purely optional styling with no functional effect",
        "It tells MySQL where one statement ends, which matters especially when running multiple statements together",
        "It makes the query run faster",
        "It is only required for SELECT statements, never for others"
      ],
      answer: 1,
      explanation: "The semicolon marks the end of a SQL statement. While some tools tolerate a missing semicolon for a single query, it becomes essential once you run multiple statements together, so it's best to build the habit early."
    }
  ]
};
