// ============================================================
// TOBIRAIQ — 60 Days Fresher Interview — Day 10 Quiz
// Topic: Loops — for, while, break & continue
// Questions: 15
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 10 — Loops: for, while, break & continue",
  questions: [
    {
      q: "What values does range(5) produce?",
      options: [
        "1, 2, 3, 4, 5",
        "0, 1, 2, 3, 4",
        "0, 1, 2, 3, 4, 5",
        "1, 2, 3, 4"
      ],
      answer: 1,
      explanation: "range(5) starts at 0 and stops before reaching 5, producing exactly 5 numbers: 0, 1, 2, 3, 4."
    },
    {
      q: "What is the key difference between a for loop and a while loop?",
      options: [
        "There is no real difference, they are interchangeable in every case",
        "for is typically used when you know how many times to repeat; while repeats as long as a condition stays True",
        "while can only be used with numbers, for can only be used with lists",
        "for loops can never use break or continue"
      ],
      answer: 1,
      explanation: "for loops are ideal for a known number of repetitions (like over a list or range). while loops depend on a condition that may take an unknown number of cycles to become False."
    },
    {
      q: "What does enumerate() provide when used in a for loop?",
      options: [
        "Only the value of each item",
        "Both the index (position) and the value of each item",
        "Only the index, never the value",
        "The total length of the list only"
      ],
      answer: 1,
      explanation: "enumerate() returns pairs of (index, value) during iteration, removing the need for a manually tracked counter."
    },
    {
      q: "What causes an infinite loop in a while loop?",
      options: [
        "Using break inside the loop",
        "The loop variable never being updated, so the condition never becomes False",
        "Using a for loop instead of a while loop",
        "Printing too many values"
      ],
      answer: 1,
      explanation: "If nothing inside the loop changes the condition, it stays True forever, and the loop never stops on its own."
    },
    {
      q: "What is the difference between break and continue?",
      options: [
        "They do exactly the same thing",
        "break stops the loop entirely; continue only skips the rest of the current cycle and keeps looping",
        "continue stops the loop entirely; break only skips the current cycle",
        "break only works in while loops, continue only works in for loops"
      ],
      answer: 1,
      explanation: "break exits the loop immediately and completely. continue skips just the current iteration and the loop proceeds to the next one."
    },
    {
      q: "Why might a developer use break inside a search loop?",
      options: [
        "To make the loop run forever",
        "To stop the loop as soon as the target is found, avoiding unnecessary further checks",
        "To skip every other item in the list",
        "break cannot be used in search loops"
      ],
      answer: 1,
      explanation: "Once the desired item is found, there's no need to keep checking the rest — break exits immediately, saving unnecessary work."
    },
    {
      q: "What does this code print?\n\nfor i in range(3):\n    print(i)",
      options: [
        "1, 2, 3",
        "0, 1, 2",
        "0, 1, 2, 3",
        "3, 2, 1"
      ],
      answer: 1,
      explanation: "range(3) produces 0, 1, 2 — three values starting from 0 and stopping before 3."
    },
    {
      q: "What does this code print?\n\nfor num in range(1, 10):\n    if num == 5:\n        break\n    print(num)",
      options: [
        "1, 2, 3, 4, 5",
        "1, 2, 3, 4",
        "1, 2, 3, 4, 5, 6, 7, 8, 9",
        "5, 6, 7, 8, 9"
      ],
      answer: 1,
      explanation: "When num reaches 5, break exits the loop before printing it, so only 1 through 4 are printed."
    },
    {
      q: "What does this code print?\n\nfor num in range(1, 6):\n    if num == 3:\n        continue\n    print(num)",
      options: [
        "1, 2, 3, 4, 5",
        "1, 2, 4, 5",
        "1, 2",
        "3, 4, 5"
      ],
      answer: 1,
      explanation: "continue skips only the print for num == 3, but the loop keeps running through 4 and 5, so 3 is the only number missing."
    },
    {
      q: "What is wrong with this code, and what will happen if it runs?\n\ncount = 0\nwhile count < 5:\n    print(count)",
      options: [
        "Nothing is wrong, it prints 0 through 4 and stops",
        "count is never updated inside the loop, causing an infinite loop",
        "while loops cannot use the < operator",
        "It causes a SyntaxError"
      ],
      answer: 1,
      explanation: "Since count is never incremented, the condition count < 5 is always True, so the loop runs forever, printing 0 endlessly."
    },
    {
      q: "What does this code print?\n\nfruits = ['apple', 'banana']\nfor index, fruit in enumerate(fruits):\n    print(index, fruit)",
      options: [
        "apple, banana (no index shown)",
        "0 apple, then 1 banana on the next line",
        "1 apple, then 2 banana",
        "An error, since enumerate() needs an extra argument"
      ],
      answer: 1,
      explanation: "enumerate() starts indexing at 0 by default, pairing index 0 with 'apple' and index 1 with 'banana'."
    },
    {
      q: "What values does range(2, 10, 3) produce?",
      options: [
        "2, 3, 4, ..., 9",
        "2, 5, 8",
        "2, 10",
        "3, 6, 9"
      ],
      answer: 1,
      explanation: "Starting at 2, increasing by the step of 3 each time, and stopping before reaching 10, gives 2, 5, 8."
    },
    {
      q: "Predict the output:\n\nfor i in range(5):\n    if i == 2:\n        continue\n    if i == 4:\n        break\n    print(i)",
      options: [
        "0, 1, 2, 3",
        "0, 1, 3",
        "0, 1, 2, 3, 4",
        "0, 1, 3, 4"
      ],
      answer: 1,
      explanation: "i=0 and i=1 print normally. i=2 is skipped by continue. i=3 prints. When i=4, break stops the loop before it can print, so the final output is 0, 1, 3."
    },
    {
      q: "What does range(5, 0, -1) produce?",
      options: [
        "0, 1, 2, 3, 4, 5",
        "5, 4, 3, 2, 1",
        "1, 2, 3, 4, 5",
        "0, -1, -2, -3, -4"
      ],
      answer: 1,
      explanation: "A negative step counts downward, starting at 5 and stopping before reaching 0, producing 5, 4, 3, 2, 1."
    },
    {
      q: "True or False: a for loop can iterate directly over the characters of a string without using range().",
      options: [
        "False, for loops can only iterate over lists",
        "True — for letter in 'Hi': loops directly over each character, printing H then i",
        "True, but only if range() is used together with it",
        "False, strings require a special string loop keyword"
      ],
      answer: 1,
      explanation: "for loops can iterate directly over any iterable, including strings — each cycle gives you the next character without needing range() or indexing."
    }
  ]
};
