// ============================================================
// TOBIRAIQ — 120 Days Data Engineering — Day 2 Quiz
// Topic: SQL Filtering & Sorting
// Questions: 15
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 2 — SQL Filtering & Sorting",
  questions: [
    {
      q: "Which operator is used to search for a pattern in SQL?",
      options: ["FIND", "SEARCH", "LIKE", "MATCH"],
      answer: 2,
      explanation: "LIKE is used with WHERE to search for a pattern. Use % for multiple characters and _ for a single character."
    },
    {
      q: "What does % mean in a LIKE pattern?",
      options: [
        "Exactly one character",
        "Zero or more characters",
        "A number only",
        "End of string"
      ],
      answer: 1,
      explanation: "% matches zero or more characters. For example, LIKE 'A%' matches any value starting with A."
    },
    {
      q: "Which operator checks if a value is within a range?",
      options: ["IN", "BETWEEN", "RANGE", "FROM TO"],
      answer: 1,
      explanation: "BETWEEN checks if a value falls within a range (inclusive). Example: WHERE age BETWEEN 20 AND 30."
    },
    {
      q: "What does the IN operator do?",
      options: [
        "Checks if a value is inside a string",
        "Checks if a value matches any value in a list",
        "Checks if a table exists",
        "Checks if a column is indexed"
      ],
      answer: 1,
      explanation: "IN checks if a value matches any value in a specified list. Example: WHERE city IN ('London', 'Paris', 'Tokyo')."
    },
    {
      q: "Which logical operator returns true only when both conditions are true?",
      options: ["OR", "NOT", "AND", "XOR"],
      answer: 2,
      explanation: "AND returns true only when all conditions are true. OR returns true when at least one condition is true."
    },
    {
      q: "What does NOT do in a SQL WHERE clause?",
      options: [
        "Excludes a column from results",
        "Reverses a condition",
        "Skips a row",
        "Removes duplicate values"
      ],
      answer: 1,
      explanation: "NOT negates (reverses) a condition. Example: WHERE NOT city = 'London' returns all rows except London."
    },
    {
      q: "What is the default sort order of ORDER BY?",
      options: [
        "Descending (Z to A, 9 to 0)",
        "Ascending (A to Z, 0 to 9)",
        "Random",
        "Insertion order"
      ],
      answer: 1,
      explanation: "ORDER BY sorts in ascending order (ASC) by default. You must explicitly use DESC for descending order."
    },
    {
      q: "How do you sort by multiple columns in SQL?",
      options: [
        "ORDER BY col1 AND col2",
        "ORDER BY col1, col2",
        "SORT BY col1 THEN col2",
        "ORDER BY (col1, col2)"
      ],
      answer: 1,
      explanation: "Separate multiple columns with commas in ORDER BY. The result sorts by the first column first, then by the second for ties."
    },
    {
      q: "Which clause filters groups after GROUP BY?",
      options: ["WHERE", "FILTER", "HAVING", "GROUPFILTER"],
      answer: 2,
      explanation: "HAVING filters groups after GROUP BY has been applied. WHERE filters individual rows before grouping."
    },
    {
      q: "What does WHERE city IS NOT NULL do?",
      options: [
        "Returns rows where city equals zero",
        "Returns rows where city has any value",
        "Returns rows where city is empty",
        "Returns rows where city is the text NULL"
      ],
      answer: 1,
      explanation: "IS NOT NULL returns only rows where the column has an actual value — it excludes rows where city is missing."
    },
    {
      q: "Which correctly finds names starting with S?",
      options: [
        "WHERE name = 'S%'",
        "WHERE name LIKE 'S%'",
        "WHERE name STARTS WITH 'S'",
        "WHERE name BEGINS 'S'"
      ],
      answer: 1,
      explanation: "LIKE 'S%' matches any value starting with S followed by zero or more characters."
    },
    {
      q: "What does OFFSET do in SQL?",
      options: [
        "Skips a number of rows before returning results",
        "Offsets a column value by a number",
        "Starts counting from a specific number",
        "Moves data to another table"
      ],
      answer: 0,
      explanation: "OFFSET skips a specified number of rows. Used with LIMIT for pagination. Example: LIMIT 10 OFFSET 20 skips first 20 rows."
    },
    {
      q: "Which SQL clause groups rows with the same values?",
      options: ["ORDER BY", "HAVING", "DISTINCT", "GROUP BY"],
      answer: 3,
      explanation: "GROUP BY groups rows with the same values in specified columns, often used with aggregate functions like COUNT, SUM, AVG."
    },
    {
      q: "What is the difference between WHERE and HAVING?",
      options: [
        "No difference — they are interchangeable",
        "WHERE filters rows; HAVING filters groups",
        "HAVING filters rows; WHERE filters groups",
        "WHERE works with JOINs; HAVING does not"
      ],
      answer: 1,
      explanation: "WHERE filters individual rows before grouping. HAVING filters groups after GROUP BY. Aggregate functions cannot be used in WHERE."
    },
    {
      q: "Which SQL keyword negates the IN operator?",
      options: ["EXCLUDE IN", "NOT IN", "OUT OF", "MINUS"],
      answer: 1,
      explanation: "NOT IN excludes rows where the value matches any value in the list. Example: WHERE city NOT IN ('London', 'Paris')."
    }
  ]
};