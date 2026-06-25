// ============================================================
// TOBIRAIQ — 120 Days Data Engineering — Day 1 Quiz
// Topic: SQL Foundations
// Questions: 15
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 1 — SQL Foundations",
  questions: [
    {
      q: "What does SQL stand for?",
      options: [
        "Standard Query Language",
        "Structured Query Language",
        "Simple Query Language",
        "Sequential Query Language"
      ],
      answer: 1,
      explanation: "SQL stands for Structured Query Language — a language designed for managing and querying relational databases."
    },
    {
      q: "Which SQL statement is used to retrieve data from a table?",
      options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
      answer: 2,
      explanation: "SELECT is used to retrieve data from one or more tables in a database."
    },
    {
      q: "Which clause is used to filter rows in a SQL query?",
      options: ["ORDER BY", "GROUP BY", "HAVING", "WHERE"],
      answer: 3,
      explanation: "WHERE is used to filter rows based on a condition before any grouping happens."
    },
    {
      q: "What does the asterisk (*) mean in SELECT * FROM table?",
      options: [
        "Select the first column only",
        "Select all columns",
        "Select all rows",
        "Multiply all values"
      ],
      answer: 1,
      explanation: "SELECT * retrieves all columns from the specified table."
    },
    {
      q: "Which SQL keyword removes duplicate values from results?",
      options: ["UNIQUE", "DISTINCT", "DIFFERENT", "FILTER"],
      answer: 1,
      explanation: "DISTINCT eliminates duplicate rows from the result set of a SELECT query."
    },
    {
      q: "What is the correct order of SQL clauses?",
      options: [
        "WHERE → SELECT → FROM → ORDER BY",
        "SELECT → WHERE → FROM → ORDER BY",
        "SELECT → FROM → WHERE → ORDER BY",
        "FROM → SELECT → WHERE → ORDER BY"
      ],
      answer: 2,
      explanation: "The standard SQL clause order is SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT."
    },
    {
      q: "Which data type stores whole numbers in SQL?",
      options: ["VARCHAR", "FLOAT", "INT", "BOOLEAN"],
      answer: 2,
      explanation: "INT (Integer) stores whole numbers without decimal points."
    },
    {
      q: "What does NULL mean in SQL?",
      options: [
        "Zero",
        "Empty string",
        "Missing or unknown value",
        "False"
      ],
      answer: 2,
      explanation: "NULL represents a missing, unknown, or inapplicable value. It is not the same as zero or an empty string."
    },
    {
      q: "Which operator checks for NULL values in SQL?",
      options: ["= NULL", "== NULL", "IS NULL", "EQUALS NULL"],
      answer: 2,
      explanation: "IS NULL is the correct operator. You cannot use = NULL because NULL is not equal to anything, including itself."
    },
    {
      q: "What does ORDER BY do in a SQL query?",
      options: [
        "Groups rows by a column",
        "Filters rows by a condition",
        "Sorts the result set",
        "Joins two tables"
      ],
      answer: 2,
      explanation: "ORDER BY sorts the result set by one or more columns in ascending (ASC) or descending (DESC) order."
    },
    {
      q: "Which SQL keyword sorts results in descending order?",
      options: ["DOWN", "DESCENDING", "DESC", "REVERSE"],
      answer: 2,
      explanation: "DESC is the keyword for descending order. ASC is the default and sorts in ascending order."
    },
    {
      q: "What is a primary key in a database table?",
      options: [
        "The first column in any table",
        "A column that uniquely identifies each row",
        "A column that can contain NULL values",
        "The most important data column"
      ],
      answer: 1,
      explanation: "A primary key uniquely identifies each row in a table. It cannot be NULL and must be unique for every row."
    },
    {
      q: "Which SQL command is used to add new rows to a table?",
      options: ["ADD", "INSERT INTO", "APPEND", "CREATE ROW"],
      answer: 1,
      explanation: "INSERT INTO is used to add new rows of data into a table."
    },
    {
      q: "What does the LIMIT clause do in SQL?",
      options: [
        "Limits the number of columns returned",
        "Limits the number of rows returned",
        "Limits the size of the database",
        "Limits query execution time"
      ],
      answer: 1,
      explanation: "LIMIT restricts the number of rows returned by a query. Useful for previewing data or pagination."
    },
    {
      q: "Which of these is a valid SQL comment?",
      options: [
        "// This is a comment",
        "/* This is a comment */",
        "# This is a comment",
        "Both B and C are valid"
      ],
      answer: 3,
      explanation: "SQL supports -- for single-line comments and /* */ for multi-line comments. In MySQL, # also works for single-line comments."
    }
  ]
};