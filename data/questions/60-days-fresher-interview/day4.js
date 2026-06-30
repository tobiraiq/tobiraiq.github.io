// ============================================================
// TOBIRAIQ — 60 Days Fresher Interview — Day 4 Quiz
// Topic: Python Operators & input()
// Questions: 15
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 4 — Python Operators & input()",
  questions: [
    {
      q: "What is the difference between / and // in Python?",
      options: [
        "They are exactly the same",
        "/ always returns a float (true division); // rounds down to a whole number (floor division)",
        "/ is for integers only; // is for decimals only",
        "// is not valid Python syntax"
      ],
      answer: 1,
      explanation: "5 / 2 returns 2.5 (true division, always a float). 5 // 2 returns 2 (floor division, rounds down)."
    },
    {
      q: "What does the % operator return?",
      options: [
        "A percentage of the first number",
        "The remainder after dividing the first number by the second",
        "The result rounded to the nearest whole number",
        "Always returns 0 or 1"
      ],
      answer: 1,
      explanation: "% (modulus) returns the remainder after division. It's most commonly used to check if a number is even or odd."
    },
    {
      q: "What does print(17 % 5) output?",
      options: [
        "3.4",
        "3",
        "2",
        "12"
      ],
      answer: 2,
      explanation: "17 divided by 5 is 3 with a remainder of 2, so 17 % 5 returns 2."
    },
    {
      q: "What is the difference between = and == in Python?",
      options: [
        "No difference, they can be used interchangeably",
        "= assigns a value to a variable; == compares two values for equality",
        "= compares values; == assigns values",
        "== is only used in Python 2, not Python 3"
      ],
      answer: 1,
      explanation: "= is the assignment operator (stores a value). == is the comparison operator (checks equality, returns True or False)."
    },
    {
      q: "What does input() always return, regardless of what the user types?",
      options: [
        "An integer",
        "A float",
        "A string",
        "A boolean"
      ],
      answer: 2,
      explanation: "input() always returns a string, even if the user types digits — it must be converted with int() or float() before use in math."
    },
    {
      q: "What is wrong with this code?\n\nage = input('Enter age: ')\nprint(age + 1)",
      options: [
        "Nothing, it works correctly",
        "It raises a TypeError because you can't add an int to a string returned by input()",
        "input() should be called twice",
        "print() cannot accept variables"
      ],
      answer: 1,
      explanation: "input() returns a string, and Python cannot add an integer (1) directly to a string. Fix: age = int(input('Enter age: '))."
    },
    {
      q: "When does 'and' evaluate to True?",
      options: [
        "When at least one side is True",
        "Only when both sides are True",
        "When both sides are False",
        "'and' always evaluates to True"
      ],
      answer: 1,
      explanation: "'and' requires both conditions to be True for the overall result to be True."
    },
    {
      q: "When does 'or' evaluate to True?",
      options: [
        "Only when both sides are True",
        "When at least one side is True",
        "Only when both sides are False",
        "'or' always evaluates to False"
      ],
      answer: 1,
      explanation: "'or' only needs one of the two conditions to be True for the overall result to be True."
    },
    {
      q: "What does the 'not' operator do?",
      options: [
        "Combines two conditions",
        "Reverses a boolean value (True becomes False, and vice versa)",
        "Checks if a value is missing",
        "Converts a string to a number"
      ],
      answer: 1,
      explanation: "'not' flips a boolean value: not True is False, and not False is True."
    },
    {
      q: "What does print(2 ** 4) output?",
      options: [
        "8",
        "6",
        "16",
        "24"
      ],
      answer: 2,
      explanation: "** is the exponent operator. 2 ** 4 means 2 raised to the power of 4, which is 16."
    },
    {
      q: "What does this code print?\n\nx = 10\ny = 3\nprint(x > 5 and y > 5)",
      options: [
        "True",
        "False",
        "10",
        "An error"
      ],
      answer: 1,
      explanation: "x > 5 is True, but y > 5 is False. Since 'and' requires both sides to be True, the overall result is False."
    },
    {
      q: "What does this code print?\n\nx = 10\ny = 3\nprint(x > 5 or y > 5)",
      options: [
        "True",
        "False",
        "3",
        "An error"
      ],
      answer: 0,
      explanation: "x > 5 is True. Since 'or' only needs one side to be True, the overall result is True regardless of y > 5."
    },
    {
      q: "What is the output of this code?\n\nscore = 85\nprint(score == 85)",
      options: [
        "85",
        "True",
        "False",
        "An error"
      ],
      answer: 1,
      explanation: "== compares score to 85. Since score is indeed 85, this comparison evaluates to True."
    },
    {
      q: "A user types 7 in response to this code. What gets printed?\n\nnum = int(input('Enter: '))\nprint(num % 2 == 0)",
      options: [
        "True",
        "False",
        "7",
        "An error"
      ],
      answer: 1,
      explanation: "7 % 2 equals 1 (the remainder), and 1 == 0 is False — correctly identifying 7 as an odd number."
    },
    {
      q: "Why does mixing up = and == count as one of the most common beginner mistakes?",
      options: [
        "Because Python doesn't allow either symbol to be used at all",
        "Because using = where == is needed (or vice versa) either causes a SyntaxError or silently does something unintended, like accidental assignment",
        "Because they both always produce the exact same result",
        "Because only experienced programmers are allowed to use =="
      ],
      answer: 1,
      explanation: "Writing print(score = 85) instead of print(score == 85) causes a SyntaxError, since = cannot be used for comparison inside an expression like that — this is a very common 'spot the bug' interview question."
    }
  ]
};
