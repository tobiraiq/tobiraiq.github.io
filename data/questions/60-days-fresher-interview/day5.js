// ============================================================
// TOBIRAIQ — 60 Days Fresher Interview — Day 5 Quiz
// Topic: Decision Making with if / elif / else
// Questions: 15
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 5 — if / elif / else",
  questions: [
    {
      q: "What happens if an if condition evaluates to False and there is no else block?",
      options: [
        "Python raises an error",
        "The if block is simply skipped, and the program continues",
        "The program stops running entirely",
        "Python automatically creates an else block"
      ],
      answer: 1,
      explanation: "If the condition is False and there's no else, the if block is just skipped — the program moves on to whatever comes after it."
    },
    {
      q: "What is the purpose of elif?",
      options: [
        "It always runs regardless of conditions",
        "It checks an additional condition, but only if the earlier if/elif conditions were False",
        "It replaces the need for an if statement entirely",
        "It runs at the same time as the if block"
      ],
      answer: 1,
      explanation: "elif is checked only when previous conditions were False, and Python stops at the first True condition in the chain."
    },
    {
      q: "Why is the colon (:) required after if, elif, and else?",
      options: [
        "It's just decorative and optional",
        "It marks the start of the code block that belongs to that condition; omitting it causes a SyntaxError",
        "It separates two different if statements",
        "It's only required when using elif, not if"
      ],
      answer: 1,
      explanation: "The colon signals where the indented block begins. Leaving it out causes a SyntaxError every time."
    },
    {
      q: "What does 'nested condition' mean?",
      options: [
        "Two unrelated if statements placed one after another",
        "An if statement written inside the block of another if/elif/else",
        "A condition that checks two values using and",
        "A loop inside an if statement"
      ],
      answer: 1,
      explanation: "A nested condition places an if inside another if's block, so the inner condition is only checked after the outer condition is already True."
    },
    {
      q: "In an if/elif/elif/else chain, how many blocks execute even if multiple conditions are technically True?",
      options: [
        "All matching blocks run",
        "Only one — the first condition (top to bottom) that evaluates True",
        "Exactly two blocks always run",
        "None, unless else is reached"
      ],
      answer: 1,
      explanation: "Python stops checking after the first True condition and runs only that block, skipping every remaining elif/else even if they'd also be True."
    },
    {
      q: "What does this code print?\n\nx = 8\nif x > 10:\n    print('A')\nelif x > 5:\n    print('B')\nelse:\n    print('C')",
      options: [
        "A",
        "B",
        "C",
        "Nothing prints"
      ],
      answer: 1,
      explanation: "x > 10 is False (8 is not > 10), so Python checks the elif: x > 5 is True (8 > 5), so 'B' prints and else is skipped."
    },
    {
      q: "What is wrong with this code?\n\nage = 20\nif age >= 18\n    print('Adult')",
      options: [
        "Nothing, it runs fine",
        "There's a missing colon after the if condition, causing a SyntaxError",
        "age should be a string",
        ">= is not a valid operator"
      ],
      answer: 1,
      explanation: "The colon after 'if age >= 18' is missing. The fix is: if age >= 18: (with the colon at the end)."
    },
    {
      q: "What does this code print?\n\nnum = 12\nif num % 3 == 0 and num % 4 == 0:\n    print('Divisible by both')\nelse:\n    print('Not divisible by both')",
      options: [
        "Divisible by both",
        "Not divisible by both",
        "An error",
        "12"
      ],
      answer: 0,
      explanation: "12 % 3 is 0 and 12 % 4 is 0, so both sides of 'and' are True, making the whole condition True."
    },
    {
      q: "What does this code print?\n\nscore = 45\nif score >= 90:\n    print('A')\nelif score >= 60:\n    print('C')\nelif score >= 40:\n    print('D')\nelse:\n    print('F')",
      options: [
        "A",
        "C",
        "D",
        "F"
      ],
      answer: 2,
      explanation: "90 and 60 checks both fail, but score >= 40 is True (45 >= 40), so 'D' prints and the else block never runs."
    },
    {
      q: "What is wrong with this nested code?\n\nage = 20\nif age >= 18:\nprint('Adult')",
      options: [
        "Nothing, it runs fine",
        "The print statement is not indented, causing an IndentationError",
        "age should not be an integer",
        "There should be an elif instead of print"
      ],
      answer: 1,
      explanation: "Python expects an indented block right after a colon. Without indentation on print('Adult'), it raises an IndentationError."
    },
    {
      q: "Predict the output:\n\nx = 5\ny = 10\nif x > y:\n    print('x bigger')\nelse:\n    if y > x:\n        print('y bigger')\n    else:\n        print('equal')",
      options: [
        "x bigger",
        "y bigger",
        "equal",
        "An error"
      ],
      answer: 1,
      explanation: "x > y is False, so Python enters the else block. There, the nested if checks y > x, which is True (10 > 5), printing 'y bigger'."
    },
    {
      q: "True or False: an elif block can exist without a preceding if.",
      options: [
        "True, elif works fine on its own",
        "False — elif must always follow an if (or another elif) in the same chain, or it causes a SyntaxError",
        "True, but only inside functions",
        "False, but only when using nested conditions"
      ],
      answer: 1,
      explanation: "elif has no meaning on its own — it must always come after an if (or another elif) it's chained to."
    },
    {
      q: "Why might a developer choose to write 'if age >= 18 and has_license:' instead of nesting two separate if statements?",
      options: [
        "Nesting is always required and 'and' cannot replace it",
        "Using 'and' is more compact and works well when no separate else messages are needed for each condition",
        "'and' only works with numbers, never booleans",
        "There's no functional difference — both styles execute differently"
      ],
      answer: 1,
      explanation: "Combining conditions with 'and' is more compact and readable when you don't need a unique else message at each level; nesting is preferable when each condition needs its own separate fallback."
    },
    {
      q: "What does the chained comparison '20 <= temperature <= 30' check?",
      options: [
        "Only whether temperature is greater than or equal to 20",
        "Only whether temperature is less than or equal to 30",
        "Whether temperature falls between 20 and 30, inclusive, in a single readable expression",
        "It is invalid Python syntax"
      ],
      answer: 2,
      explanation: "Python uniquely supports chained comparisons, so this checks both bounds — temperature >= 20 and temperature <= 30 — in one expression."
    },
    {
      q: "Why is the 4-space indentation rule strictly enforced in Python's if/elif/else blocks?",
      options: [
        "It's purely a style suggestion with no functional effect",
        "Python uses indentation itself to define which lines belong to which block; inconsistent indentation causes a real IndentationError",
        "4 spaces is required only for elif, not if or else",
        "Tabs and spaces can always be freely mixed without consequence"
      ],
      answer: 1,
      explanation: "Unlike languages that use curly braces, Python relies on consistent indentation to define code blocks — getting it wrong causes the program to fail with an IndentationError."
    }
  ]
};
