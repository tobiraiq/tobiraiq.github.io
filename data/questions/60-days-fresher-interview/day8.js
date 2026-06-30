// ============================================================
// TOBIRAIQ — 60 Days Fresher Interview — Day 8 Quiz
// Topic: INSERT, UPDATE & DELETE
// Questions: 15
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 8 — INSERT, UPDATE & DELETE",
  questions: [
    {
      q: "What is the purpose of the INSERT statement?",
      options: [
        "It modifies an existing row",
        "It adds a new row to a table, with values supplied for each specified column",
        "It removes a row from a table",
        "It creates a new table"
      ],
      answer: 1,
      explanation: "INSERT INTO adds a brand new row to a table, with the values matching the order of the columns listed."
    },
    {
      q: "What must match between the column list and the VALUES list in an INSERT statement?",
      options: [
        "Nothing, they're independent",
        "The order and count — values must line up exactly with the columns listed",
        "Only the data types need to match, not the order",
        "Only the count matters, order is irrelevant"
      ],
      answer: 1,
      explanation: "Values are matched positionally to columns — both the count and order must align, or data goes into the wrong columns or causes an error."
    },
    {
      q: "What two clauses does UPDATE always require to safely target specific rows?",
      options: [
        "SELECT and FROM",
        "SET and WHERE",
        "INSERT and INTO",
        "ORDER BY and LIMIT"
      ],
      answer: 1,
      explanation: "SET specifies what value(s) to change, and WHERE specifies which rows the change should apply to."
    },
    {
      q: "What happens if you run an UPDATE statement without a WHERE clause?",
      options: [
        "MySQL throws an error and refuses to run it",
        "Every single row in the table gets updated with the same new value",
        "Only the first row gets updated",
        "Nothing happens at all"
      ],
      answer: 1,
      explanation: "Without WHERE, MySQL has no way to know which specific rows to target, so it applies the change to every row in the table."
    },
    {
      q: "What happens if you run DELETE FROM students; with no WHERE clause?",
      options: [
        "Only duplicate rows are removed",
        "Every row in the students table is permanently removed, leaving an empty table",
        "The entire table, including its structure, is deleted",
        "MySQL asks for confirmation before deleting anything"
      ],
      answer: 1,
      explanation: "Without WHERE, every row matches, so all of them are removed — leaving the table structure intact but completely empty."
    },
    {
      q: "Why is it good practice to run a SELECT with the same WHERE condition before an UPDATE or DELETE?",
      options: [
        "It's required by MySQL syntax",
        "It lets you preview exactly which rows will be affected before making an irreversible change",
        "It automatically backs up the table",
        "It makes the UPDATE or DELETE run faster"
      ],
      answer: 1,
      explanation: "Testing the WHERE condition with SELECT first confirms exactly which rows match, preventing accidental changes to the wrong data."
    },
    {
      q: "What is the difference between DELETE FROM table WHERE condition; and DROP TABLE table;?",
      options: [
        "They are exactly the same",
        "DELETE with WHERE removes only matching rows, keeping the table; DROP TABLE removes the entire table structure",
        "DROP TABLE only removes rows, never the structure",
        "DELETE always removes the entire table regardless of WHERE"
      ],
      answer: 1,
      explanation: "DELETE removes data but keeps the table itself intact. DROP TABLE removes the table entirely, including its structure and all its data."
    },
    {
      q: "What is wrong with this query?\n\nINSERT INTO students (student_id, full_name, age)\nVALUES (7, 'Omar Said', 24, 'Cybersecurity');",
      options: [
        "Nothing, it's correct",
        "3 columns are listed but 4 values are provided, causing a column count mismatch error",
        "Text values cannot use quotes in INSERT",
        "INSERT cannot be used with more than 3 columns"
      ],
      answer: 1,
      explanation: "There's a mismatch: 3 columns listed (student_id, full_name, age) but 4 values provided, including the course value with no matching column."
    },
    {
      q: "What does this query do, and why is it dangerous?\n\nUPDATE students SET course = 'Unassigned';",
      options: [
        "It safely updates only one student",
        "It sets every student's course to 'Unassigned' since there is no WHERE clause",
        "It deletes the course column entirely",
        "It does nothing because course already has a value"
      ],
      answer: 1,
      explanation: "With no WHERE clause, MySQL applies the SET change to all rows, silently overwriting every student's course value."
    },
    {
      q: "What does this query return after running it on the students table?\n\nDELETE FROM students WHERE age > 100;\nSELECT COUNT(*) FROM students;",
      options: [
        "Zero, since DELETE always removes all rows",
        "The same total row count as before, since no student is older than 100",
        "An error, since age cannot be compared to 100",
        "It returns the deleted rows"
      ],
      answer: 1,
      explanation: "Since no student is older than 100, the DELETE condition matches zero rows, so the table is unaffected and the count stays the same."
    },
    {
      q: "Which query correctly updates only student_id 3's age to 21?",
      options: [
        "UPDATE students SET age = 21;",
        "UPDATE students SET age = 21 WHERE student_id = 3;",
        "UPDATE students WHERE student_id = 3 SET age = 21;",
        "SET students age = 21 WHERE student_id = 3;"
      ],
      answer: 1,
      explanation: "The correct syntax order is UPDATE table SET column = value WHERE condition; — option B follows this exactly."
    },
    {
      q: "True or False: numeric values like age are written without quotes, but text values like full_name always require quotes.",
      options: [
        "True, this rule applies regardless of which statement (INSERT, UPDATE, WHERE) they're used in",
        "False, all values always require quotes regardless of type",
        "False, numbers always need quotes but text never does",
        "True, but only inside WHERE clauses, not INSERT or UPDATE"
      ],
      answer: 0,
      explanation: "Numbers are written plainly (e.g. 21), while text must always be wrapped in single quotes (e.g. 'Asha Verma'), consistently across INSERT, UPDATE, and WHERE."
    },
    {
      q: "A developer wants to change the course only for students younger than 20. What is the safest first step before running the UPDATE?",
      options: [
        "Run the UPDATE immediately without checking anything first",
        "Run a SELECT with the same WHERE condition first, to confirm which rows will be affected",
        "Delete the table and recreate it",
        "Run the UPDATE twice to be sure"
      ],
      answer: 1,
      explanation: "Running SELECT * FROM students WHERE age < 20; first confirms exactly which rows match before committing to the irreversible UPDATE."
    },
    {
      q: "Can INSERT technically omit the column list if you provide values for every column in the table's exact defined order?",
      options: [
        "No, the column list is always mandatory",
        "Yes, but explicitly writing the column list is still considered best practice for readability and safety",
        "Yes, and omitting it is always the preferred professional approach",
        "No, omitting the column list always causes an error"
      ],
      answer: 1,
      explanation: "MySQL allows omitting the column list if all values are provided in the table's defined order, but writing them out explicitly is safer and more readable."
    },
    {
      q: "Write the correct query to delete only the student named 'Mateo Rossi'.",
      options: [
        "DELETE FROM students;",
        "DELETE FROM students WHERE full_name = 'Mateo Rossi';",
        "DELETE students WHERE full_name = Mateo Rossi;",
        "REMOVE FROM students WHERE full_name = 'Mateo Rossi';"
      ],
      answer: 1,
      explanation: "The correct syntax is DELETE FROM table WHERE condition; — with the text value properly quoted, as in option B."
    }
  ]
};
