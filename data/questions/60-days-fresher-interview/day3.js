// ============================================================
// TOBIRAIQ — 60 Days Fresher Interview — Day 3 Quiz
// Topic: Filtering & Sorting Data with SQL (WHERE, ORDER BY, LIMIT)
// Questions: 15
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 3 — Filtering & Sorting Data with SQL",
  questions: [
    {
      q: "What is the purpose of the WHERE clause in SQL?",
      options: [
        "It sorts the rows in a result",
        "It filters rows so a query only returns rows matching a condition",
        "It limits how many columns are shown",
        "It creates a new table"
      ],
      answer: 1,
      explanation: "WHERE filters rows based on a condition, returning only the rows that satisfy it, instead of every row in the table."
    },
    {
      q: "What does this query return?\n\nSELECT full_name FROM students WHERE age > 20;",
      options: [
        "Every student's name, regardless of age",
        "Only the names of students whose age is greater than 20",
        "Only the column headers, no data",
        "An error, since WHERE needs ORDER BY"
      ],
      answer: 1,
      explanation: "WHERE age > 20 filters out any row where age is 20 or less, returning only matching students' names."
    },
    {
      q: "What happens if you write WHERE course = Data Science; without quotes around the text?",
      options: [
        "It works exactly the same as with quotes",
        "MySQL throws an error because it tries to interpret the words as column/table names",
        "It returns every row in the table",
        "It automatically adds the quotes for you"
      ],
      answer: 1,
      explanation: "Text values must be quoted. Without quotes, MySQL tries to interpret Data and Science as identifiers, causing an error."
    },
    {
      q: "Which operator checks for 'not equal to' in SQL?",
      options: [
        "<>",
        "=!",
        "!==",
        "NOT="
      ],
      answer: 0,
      explanation: "<> (or != in MySQL) means not equal to. Both are valid in MySQL, but <> is the standard SQL form."
    },
    {
      q: "What is the default sort order used by ORDER BY when DESC is not written?",
      options: [
        "Descending — largest to smallest",
        "Random order",
        "Ascending — smallest to largest, A to Z",
        "The order rows were originally inserted"
      ],
      answer: 2,
      explanation: "ORDER BY sorts ascending by default. Adding DESC reverses it to descending order."
    },
    {
      q: "What does LIMIT do in a SQL query?",
      options: [
        "Restricts how many rows the query returns",
        "Restricts how many columns the query returns",
        "Sets a maximum value for a column",
        "Deletes rows beyond a certain number"
      ],
      answer: 0,
      explanation: "LIMIT n restricts the result to at most n rows — commonly paired with ORDER BY to find 'top N' results."
    },
    {
      q: "In what logical order does MySQL apply WHERE, ORDER BY, and LIMIT?",
      options: [
        "LIMIT, then ORDER BY, then WHERE",
        "ORDER BY, then WHERE, then LIMIT",
        "WHERE, then ORDER BY, then LIMIT",
        "All three happen at exactly the same time, order doesn't matter"
      ],
      answer: 2,
      explanation: "MySQL filters rows with WHERE first, then sorts the remaining rows with ORDER BY, and finally caps the result with LIMIT."
    },
    {
      q: "What does this query return?\n\nSELECT full_name FROM students ORDER BY full_name DESC LIMIT 1;",
      options: [
        "The student whose name comes first alphabetically",
        "The student whose name comes last alphabetically",
        "All students, sorted alphabetically",
        "An error, since DESC and LIMIT can't be used together"
      ],
      answer: 1,
      explanation: "DESC sorts names Z to A, and LIMIT 1 keeps only the first row after sorting — meaning the alphabetically last name."
    },
    {
      q: "What is wrong with this query?\n\nSELECT * FROM students ORDER BY age WHERE age > 20;",
      options: [
        "Nothing — it's perfectly valid",
        "WHERE is written after ORDER BY, which is invalid; WHERE must come before ORDER BY",
        "ORDER BY cannot be used with age",
        "The asterisk (*) cannot be combined with WHERE"
      ],
      answer: 1,
      explanation: "WHERE must always be written before ORDER BY. The correct order is: SELECT * FROM students WHERE age > 20 ORDER BY age;"
    },
    {
      q: "What does this query return on a table where no student is exactly 25 years old?\n\nSELECT * FROM students WHERE age = 25;",
      options: [
        "An error",
        "Every row in the table",
        "An empty result with zero rows, but correct column headers",
        "A result of NULL"
      ],
      answer: 2,
      explanation: "A WHERE condition that matches nothing simply returns zero rows — this is not an error, just an empty result set."
    },
    {
      q: "Which query correctly finds the 2 oldest students, showing only name and age?",
      options: [
        "SELECT full_name, age FROM students ORDER BY age DESC LIMIT 2;",
        "SELECT full_name, age FROM students LIMIT 2 ORDER BY age DESC;",
        "SELECT full_name, age FROM students WHERE age DESC LIMIT 2;",
        "SELECT full_name, age FROM students ORDER BY age LIMIT DESC 2;"
      ],
      answer: 0,
      explanation: "The correct order is SELECT ... FROM ... ORDER BY age DESC LIMIT 2; — sorting oldest first, then keeping only the top 2 rows."
    },
    {
      q: "True or False: LIMIT can technically be used without ORDER BY.",
      options: [
        "False — LIMIT requires ORDER BY to function at all",
        "True, but the rows returned are in an unpredictable order since the database returns them however it happens to store them",
        "True, and the result is always sorted automatically by the first column",
        "False — using LIMIT without ORDER BY causes a syntax error"
      ],
      answer: 1,
      explanation: "LIMIT works without ORDER BY, but without sorting first, which rows you get back is unpredictable — so LIMIT is almost always paired with ORDER BY in practice."
    },
    {
      q: "Which comparison operator would correctly find all students NOT studying 'Data Science'?",
      options: [
        "WHERE course = 'Data Science'",
        "WHERE course != 'Data Science'",
        "WHERE course <= 'Data Science'",
        "WHERE NOT course"
      ],
      answer: 1,
      explanation: "!= (or <>) means not equal to, correctly filtering out rows where course equals 'Data Science'."
    },
    {
      q: "What is the correct full structure of a basic SQL query using all of today's keywords, in order?",
      options: [
        "SELECT ... WHERE ... FROM ... LIMIT ... ORDER BY ...",
        "FROM ... SELECT ... WHERE ... ORDER BY ... LIMIT ...",
        "SELECT ... FROM ... WHERE ... ORDER BY ... LIMIT ...",
        "SELECT ... FROM ... ORDER BY ... WHERE ... LIMIT ..."
      ],
      answer: 2,
      explanation: "The correct, required order is: SELECT columns FROM table WHERE condition ORDER BY column LIMIT n;"
    },
    {
      q: "What does this query return?\n\nSELECT full_name, age, course FROM students WHERE course = 'Computer Science' ORDER BY age LIMIT 1;",
      options: [
        "The oldest Computer Science student",
        "The youngest Computer Science student",
        "Every Computer Science student, sorted by age",
        "An error, since you cannot filter and sort in the same query"
      ],
      answer: 1,
      explanation: "WHERE filters to only Computer Science students, ORDER BY age sorts youngest first (ascending is default), and LIMIT 1 keeps only that first, youngest row."
    }
  ]
};
