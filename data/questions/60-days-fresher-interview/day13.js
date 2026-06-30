window.QUIZ_DAY_DATA = {
  title: "Day 13 — Review: Python",
  questions: [
    { q: "What does this print?\n\nx = 7\ny = 2\nprint(x // y, x % y)", options: ["3 1","3.5 0","3 0","2 1"], answer: 0, explanation: "7 // 2 (floor division) is 3, and 7 % 2 (remainder) is 1." },
    { q: "What does this print?\n\nage = 17\nprint(age >= 18 or age < 0)", options: ["True","False","17","Error"], answer: 1, explanation: "Both conditions are False, and 'or' needs at least one True, so the result is False." },
    { q: "What does this print?\n\nn = 6\nif n % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')", options: ["Even","Odd","6","Error"], answer: 0, explanation: "6 % 2 equals 0, so the condition is True and 'Even' prints." },
    { q: "What does this print?\n\ntotal = 0\nfor i in range(1, 5):\n    total += i\nprint(total)", options: ["10","15","4","9"], answer: 0, explanation: "range(1,5) gives 1,2,3,4, summing to 10." },
    { q: "What does this print?\n\nnums = [5, 10, 15]\nprint(nums[1:])", options: ["[5, 10]","[10, 15]","[5]","[15]"], answer: 1, explanation: "The slice starts at index 1 and goes to the end, giving [10, 15]." },
    { q: "What does this print?\n\ncount = 3\nwhile count > 0:\n    print(count)\n    count -= 1", options: ["1 2 3","3 2 1","3 2 1 0","Infinite loop"], answer: 1, explanation: "count decreases from 3 to 1, printing each before stopping when it reaches 0." },
    { q: "What does this print?\n\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)", options: ["0 1 2","0 1 2 3","0 1 2 3 4","3 4"], answer: 0, explanation: "break exits the loop as soon as i equals 3, before printing it." },
    { q: "What is wrong with this code?\n\nage = input('Enter age: ')\nif age >= 18:\n    print('Adult')", options: ["Nothing is wrong","input() returns a string; comparing it to an int raises a TypeError","age should be a list","18 must be in quotes"], answer: 1, explanation: "input() always returns a string, so comparing it directly with an integer fails. It needs int(input(...))." },
    { q: "What does this print?\n\nfruits = ['apple', 'banana', 'cherry']\nfruits.append('mango')\nprint(fruits[-1])", options: ["apple","cherry","mango","banana"], answer: 2, explanation: "append adds 'mango' to the end, and index -1 refers to the last item." },
    { q: "What does range(5) produce?", options: ["1,2,3,4,5","0,1,2,3,4","0,1,2,3,4,5","1,2,3,4"], answer: 1, explanation: "range(5) starts at 0 and stops before 5, producing 0,1,2,3,4." },
    { q: "What is the difference between break and continue?", options: ["They are identical","break exits the loop entirely; continue skips only the current cycle","continue exits the loop; break skips one cycle","Both exit the loop"], answer: 1, explanation: "break stops the loop completely; continue moves to the next iteration without stopping." },
    { q: "What does this print?\n\nnums = [1, 2, 3]\nnums.append(4)\nprint(len(nums))", options: ["3","4","5","Error"], answer: 1, explanation: "append adds a 4th item, making the list length 4." },
    { q: "What does == do, compared to =, in Python?", options: ["They are the same","== compares values; = assigns a value","= compares; == assigns","== is only for strings"], answer: 1, explanation: "= assigns a value to a variable, while == checks for equality and returns True or False." },
    { q: "What value does input() always return, before any conversion?", options: ["An integer","A float","A string","A boolean"], answer: 2, explanation: "input() always returns a string, regardless of what the user types." },
    { q: "Write the logic: print numbers 1 to 10, skipping multiples of 3 using continue.", options: ["for n in range(1,11):\\n  if n % 3 == 0: continue\\n  print(n)","for n in range(1,11):\\n  if n % 3 == 0: break\\n  print(n)","for n in range(10):\\n  print(n)","while n < 10: print(n)"], answer: 0, explanation: "continue skips only multiples of 3 while the loop keeps running through every other number." }
  ]
};
