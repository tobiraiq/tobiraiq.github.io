// ============================================================
// TOBIRAIQ — 60 Days Fresher Interview — Day 9 Quiz
// Topic: Advanced Filtering — AND, OR, NOT, BETWEEN, IN, LIKE
// Questions: 15
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 9 — Advanced Filtering",
  questions: [
    {
      q: "What is the difference between AND and OR in a WHERE clause?",
      options: [
        "They behave identically",
        "AND requires both conditions to be true; OR requires only one of them to be true",
        "AND requires only one condition; OR requires both",
        "OR can only be used with numbers, AND only with text"
      ],
      answer: 1,
      explanation: "AND narrows results since both sides must be true. OR widens results since only one side needs to be true."
    },
    {
      q: "What does the BETWEEN operator do, and is it inclusive of its endpoints?",
      options: [
        "It checks a range and excludes both endpoints",
        "It checks a range and includes both endpoints",
        "It checks a range and includes only the lower endpoint",
        "It has nothing to do with ranges"
      ],
      answer: 1,
      explanation: "BETWEEN is inclusive on both ends — age BETWEEN 20 AND 22 includes ages exactly 20 and exactly 22, not just values strictly between them."
    },
    {
      q: "Why is IN often preferred over writing multiple OR conditions?",
      options: [
        "IN runs faster in every single case",
        "IN is more concise and readable, especially as the list of values grows",
        "OR is not valid SQL syntax",
        "IN can only be used with numbers"
      ],
      answer: 1,
      explanation: "IN lets you list multiple values once instead of repeating the column name with OR for each one, making the query far more readable."
    },
    {
      q: "What do the % and _ wildcards mean inside a LIKE pattern?",
      options: [
        "% matches exactly one character; _ matches any number of characters",
        "% matches any number of characters; _ matches exactly one character",
        "Both match exactly one character",
        "Both match any number of characters"
      ],
      answer: 1,
      explanation: "% is a wildcard for any number of characters (including zero), while _ matches exactly one single character."
    },
    {
      q: "What does the pattern 'A%' match when used with LIKE?",
      options: [
        "Text that ends with A",
        "Text that starts with A, followed by any number of additional characters",
        "Text that contains A anywhere",
        "Only the single letter A"
      ],
      answer: 1,
      explanation: "'A%' matches anything beginning with A — the % wildcard after it allows any characters (or none) to follow."
    },
    {
      q: "What is the effect of combining NOT with IN, as in NOT IN (...)?",
      options: [
        "It returns rows matching any value in the list",
        "It returns rows where the value does not match any value in the given list",
        "It causes a syntax error",
        "It only works with numeric lists, not text"
      ],
      answer: 1,
      explanation: "NOT IN reverses the IN check — it returns rows whose value is absent from the entire list."
    },
    {
      q: "What does this query return?\n\nSELECT full_name FROM students WHERE course = 'Data Science' AND age > 21;",
      options: [
        "Every student in Data Science, regardless of age",
        "Only students whose course is exactly 'Data Science' AND whose age is greater than 21",
        "Every student older than 21, regardless of course",
        "Students in either Data Science or older than 21"
      ],
      answer: 1,
      explanation: "AND requires both conditions to hold simultaneously — course must equal Data Science and age must exceed 21."
    },
    {
      q: "What is the equivalent of WHERE age BETWEEN 20 AND 22 written using AND instead?",
      options: [
        "WHERE age = 20 AND age = 22",
        "WHERE age >= 20 AND age <= 22",
        "WHERE age > 20 AND age < 22",
        "WHERE age >= 20 OR age <= 22"
      ],
      answer: 1,
      explanation: "BETWEEN is shorthand for an inclusive range check, exactly equivalent to age >= 20 AND age <= 22."
    },
    {
      q: "On a students table where the name 'Noor Khan' is the only name containing the substring 'an', what does this return?\n\nSELECT full_name FROM students WHERE full_name LIKE '%an%';",
      options: [
        "Every student's name",
        "Only 'Noor Khan', since 'an' appears inside 'Khan'",
        "Zero rows",
        "An error, since % cannot appear twice in one pattern"
      ],
      answer: 1,
      explanation: "The %an% pattern matches any name containing 'an' anywhere within it — here, only 'Khan' contains that substring."
    },
    {
      q: "Which query correctly finds every student whose country is NOT in the list ('India', 'Italy')?",
      options: [
        "SELECT * FROM students WHERE country IN ('India', 'Italy');",
        "SELECT * FROM students WHERE country NOT IN ('India', 'Italy');",
        "SELECT * FROM students WHERE NOT country = 'India', 'Italy';",
        "SELECT * FROM students WHERE country != ('India', 'Italy');"
      ],
      answer: 1,
      explanation: "NOT IN (...) is the correct syntax to exclude rows whose value matches anything in the given list."
    },
    {
      q: "What does this query return?\n\nSELECT full_name FROM students WHERE age BETWEEN 22 AND 20;",
      options: [
        "Students aged between 20 and 22",
        "Zero rows, since BETWEEN requires the lower value first and the higher value second",
        "Every student in the table",
        "An error that stops the query from running"
      ],
      answer: 1,
      explanation: "Writing BETWEEN backwards (high value first) means no value can ever satisfy the condition, resulting in zero matching rows."
    },
    {
      q: "True or False: LIKE '_oor' would match a name like 'Noor'.",
      options: [
        "True — the underscore matches exactly one character, and 'N' fills that slot before 'oor'",
        "False — underscore can only match digits, not letters",
        "True, but only if the name is in all lowercase",
        "False — _ requires zero characters, not one"
      ],
      answer: 0,
      explanation: "The underscore (_) matches exactly one character. 'N' takes that one-character slot, followed by 'oor', making 'Noor' a match."
    },
    {
      q: "Which query correctly finds students whose course is 'Data Science' OR whose age is under 20?",
      options: [
        "SELECT * FROM students WHERE course = 'Data Science' AND age < 20;",
        "SELECT * FROM students WHERE course = 'Data Science' OR age < 20;",
        "SELECT * FROM students WHERE course = 'Data Science', age < 20;",
        "SELECT * FROM students WHERE course OR age < 20 = 'Data Science';"
      ],
      answer: 1,
      explanation: "OR is correct here since the question asks for either condition to match, not both simultaneously."
    },
    {
      q: "Is LIKE case-sensitive or case-insensitive by default in most standard MySQL configurations?",
      options: [
        "Case-sensitive — 'a%' would never match 'Asha'",
        "Case-insensitive — 'a%' would match both 'Asha' and 'asha' by default",
        "It depends only on whether quotes are used",
        "LIKE ignores the first letter entirely"
      ],
      answer: 1,
      explanation: "In most default MySQL configurations, LIKE comparisons are case-insensitive, so lowercase and uppercase letters are treated the same."
    },
    {
      q: "What combination of keywords would you use to find students whose age is NOT between 20 and 22?",
      options: [
        "WHERE age NOT BETWEEN 20 AND 22",
        "WHERE NOT age IN 20 AND 22",
        "WHERE age != BETWEEN 20, 22",
        "WHERE age NOT IN BETWEEN 20 AND 22"
      ],
      answer: 0,
      explanation: "NOT BETWEEN reverses the inclusive range check, returning rows whose value falls outside the given range entirely."
    }
  ]
};
