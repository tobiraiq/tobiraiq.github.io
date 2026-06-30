// ============================================================
// TOBIRAIQ — 60 Days Fresher Interview — Day 1 Quiz
// Topic: Programming Basics & Python Installation
// Questions: 15
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 1 — Programming Basics & Python Installation",
  questions: [
    {
      q: "What is a programming language?",
      options: [
        "A set of rules and vocabulary used to write instructions a computer can carry out",
        "A type of computer hardware",
        "A website used to browse the internet",
        "An operating system"
      ],
      answer: 0,
      explanation: "A programming language (like Python) gives you a defined set of rules and vocabulary to write instructions. The computer follows those instructions exactly as written."
    },
    {
      q: "What does the Python interpreter do when you run a .py file?",
      options: [
        "It compiles the entire file into a single executable before running anything",
        "It reads and executes your code line by line, from top to bottom",
        "It converts Python into HTML",
        "It only checks for spelling mistakes"
      ],
      answer: 1,
      explanation: "Python is an interpreted language — the interpreter reads each line and runs it immediately, rather than compiling the whole program first."
    },
    {
      q: "Which command checks whether Python is installed correctly from the terminal?",
      options: [
        "python --version",
        "python --check",
        "install python",
        "run python"
      ],
      answer: 0,
      explanation: "python --version (or python3 --version on Mac/Linux) prints the installed Python version, confirming the installation worked."
    },
    {
      q: "On Windows, which checkbox is critical to tick during Python installation so the python command works in any terminal?",
      options: [
        "Install launcher for all users",
        "Add Python to PATH",
        "Install pip",
        "Associate files with Python"
      ],
      answer: 1,
      explanation: "Adding Python to PATH lets your operating system find the python command from any folder in the terminal. Skipping this is the most common beginner installation mistake."
    },
    {
      q: "What does this code print?\n\nprint('Hello, World!')",
      options: [
        "Hello, World",
        "Hello, World!",
        "'Hello, World!'",
        "Nothing — it causes an error"
      ],
      answer: 1,
      explanation: "print() displays exactly what is inside the quotes, including the exclamation mark, since it's part of the string."
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
      explanation: "Variable names cannot start with a number, cannot contain spaces, and cannot be reserved words like print. first_name follows correct snake_case style."
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
      explanation: "Any number containing a decimal point is a float in Python. Without the decimal point, it would be an int."
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
      explanation: "22 is an integer usable in arithmetic. \"22\" is a string — text that looks like a number but can't be used in math without converting it first."
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
      explanation: "Reassigning a variable replaces its old value. The second assignment sets score to 25, so print(score) outputs 25."
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
      explanation: "# starts a comment. Python ignores everything after # on that line — comments exist purely to help humans understand the code."
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
      explanation: "type() returns a value's data type. For example, type(22) returns <class 'int'> and type('Asha') returns <class 'str'>."
    },
    {
      q: "What are the only two possible values for a bool in Python?",
      options: [
        "0 and 1",
        "yes and no",
        "True and False",
        "on and off"
      ],
      answer: 2,
      explanation: "Boolean values are True and False, capitalized exactly this way. They represent on/off or yes/no logic used in conditions."
    },
    {
      q: "What will type('25') return in Python?",
      options: [
        "<class 'int'>",
        "<class 'str'>",
        "<class 'float'>",
        "<class 'bool'>"
      ],
      answer: 1,
      explanation: "Even though '25' looks numeric, wrapping it in quotes makes it a string, so type('25') returns <class 'str'>."
    },
    {
      q: "Why does Python show an IndentationError for unexpected blank spaces at the start of a line that shouldn't be indented?",
      options: [
        "Python ignores all indentation completely",
        "Python uses indentation to define blocks of code, so inconsistent spacing breaks the structure",
        "Indentation only matters inside print statements",
        "It's just a style warning, not a real error"
      ],
      answer: 1,
      explanation: "Unlike many languages that use curly braces, Python relies on indentation to define code blocks. Inconsistent or unexpected indentation causes a real IndentationError that stops the program."
    },
    {
      q: "A beginner runs 'python hello.py' on Mac and gets 'command not found: python'. What is the most likely fix?",
      options: [
        "Reinstall the operating system",
        "Use python3 hello.py instead, since Mac maps the python command differently",
        "Rename the file to hello.python",
        "Restart the computer and try the exact same command again"
      ],
      answer: 1,
      explanation: "On Mac and most Linux systems, Python 3 is typically invoked with python3 rather than python. This is one of the most common beginner installation confusions."
    }
  ]
};
