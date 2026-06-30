// ============================================================
// TOBIRAIQ — 60 Days Fresher Interview — Day 7 Quiz
// Topic: git add, git commit, .gitignore & History
// Questions: 15
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 7 — git add, git commit & History",
  questions: [
    {
      q: "What is the purpose of git add?",
      options: [
        "It permanently saves changes",
        "It stages changes, marking exactly what should be included in the next commit",
        "It deletes a file from the project",
        "It uploads the project to GitHub"
      ],
      answer: 1,
      explanation: "git add stages files, telling Git which changes to include in the next commit, without yet permanently saving them."
    },
    {
      q: "What does git commit -m \"message\" do?",
      options: [
        "It stages files for the next save",
        "It permanently saves everything currently staged, along with a description of the change",
        "It deletes the staged files",
        "It checks the current status of the repository"
      ],
      answer: 1,
      explanation: "git commit creates a permanent snapshot of staged changes in the project's history, attached to the message you provide."
    },
    {
      q: "What is the difference between git add filename and git add . ?",
      options: [
        "They do exactly the same thing",
        "git add filename stages one specific file; git add . stages every changed file in the folder and subfolders",
        "git add . only works on the first file alphabetically",
        "git add filename stages everything; git add . stages nothing"
      ],
      answer: 1,
      explanation: "git add filename targets one file specifically, while git add . (the dot) stages everything changed in the current directory and all its subfolders."
    },
    {
      q: "What is the purpose of a .gitignore file?",
      options: [
        "It deletes files permanently from the computer",
        "It tells Git which files or patterns to never track",
        "It uploads ignored files to GitHub automatically",
        "It renames files automatically"
      ],
      answer: 1,
      explanation: ".gitignore lists files and patterns (like temp files or secrets) that Git should never track, keeping the repository clean."
    },
    {
      q: "If a file was already committed before being added to .gitignore, what happens?",
      options: [
        "Git immediately stops tracking it",
        "Git continues tracking it as before — .gitignore only prevents files from being tracked in the first place",
        "The file is automatically deleted",
        "Git throws an error every time you run a command"
      ],
      answer: 1,
      explanation: ".gitignore has no retroactive effect on files already being tracked; it only prevents new, untracked files matching its patterns from being tracked."
    },
    {
      q: "What does the pattern *.pyc mean inside a .gitignore file?",
      options: [
        "Ignore one specific file named *.pyc",
        "Ignore every file ending in .pyc, regardless of its name",
        "Ignore an entire folder called pyc",
        "This pattern is invalid in .gitignore"
      ],
      answer: 1,
      explanation: "The asterisk (*) is a wildcard, so *.pyc matches any file ending in .pyc, no matter what comes before the extension."
    },
    {
      q: "What does git log show?",
      options: [
        "Only the most recent commit",
        "The complete history of every commit in the repository, newest first, including author, date, and message",
        "A list of all untracked files",
        "The contents of .gitignore"
      ],
      answer: 1,
      explanation: "git log displays the full commit history, showing the hash, author, date, and message for each commit, starting with the most recent."
    },
    {
      q: "What is the difference between git log and git log --oneline?",
      options: [
        "There is no difference",
        "git log shows full detail per commit; git log --oneline shows a compact single line per commit",
        "git log --oneline only shows the very first commit ever made",
        "git log only works after pushing to GitHub"
      ],
      answer: 1,
      explanation: "git log --oneline condenses each commit into a single line with a short hash and the message, useful for a quick overview."
    },
    {
      q: "A developer edits 3 files but only runs git add on 2 of them, then runs git commit. What happens to the third file?",
      options: [
        "It gets committed along with the other two automatically",
        "It remains unstaged and is not included in the commit",
        "Git throws an error and refuses to commit anything",
        "The third file is automatically deleted"
      ],
      answer: 1,
      explanation: "Only staged changes get committed. The third, unstaged file is simply left out of this particular commit."
    },
    {
      q: "What would git status show right after running git add hello.py, before committing?",
      options: [
        "hello.py listed as untracked",
        "hello.py listed under 'Changes to be committed'",
        "Nothing — git status doesn't track individual files",
        "An error, since the file hasn't been committed yet"
      ],
      answer: 1,
      explanation: "Once staged with git add, a file moves from 'untracked' to 'Changes to be committed' in git status output."
    },
    {
      q: "What is wrong with running git commit without using -m or providing any message?",
      options: [
        "Nothing, Git assigns a default message automatically",
        "Git either refuses or opens a text editor forcing you to write one — every commit requires a message",
        "It silently commits with a blank message",
        "It deletes all staged files instead"
      ],
      answer: 1,
      explanation: "A commit message is mandatory. Without -m, Git typically opens a text editor and requires you to enter one before the commit can complete."
    },
    {
      q: "Write the correct .gitignore pattern that ignores an entire folder named build.",
      options: [
        "build.gitignore",
        "build/",
        "*.build",
        "ignore(build)"
      ],
      answer: 1,
      explanation: "Adding a trailing slash (build/) tells Git that this pattern refers specifically to a folder, ignoring everything inside it."
    },
    {
      q: "What does git log --oneline display for a repository with exactly 2 commits?",
      options: [
        "Just one line showing the latest commit only",
        "Two lines, each with a short hash followed by that commit's message, most recent first",
        "A single combined summary of both commits",
        "Nothing, since --oneline requires at least 3 commits"
      ],
      answer: 1,
      explanation: "Each commit gets exactly one line in --oneline mode, listed with the most recent commit at the top."
    },
    {
      q: "True or False: running git add . stages files inside subfolders too, not just the current folder.",
      options: [
        "True — the dot refers to the current directory and everything inside it, including subfolders",
        "False — git add . only stages files directly in the current folder, ignoring subfolders",
        "True, but only for .py files specifically",
        "False, subfolders must always be added separately with their own command"
      ],
      answer: 0,
      explanation: "The dot (.) represents the current directory recursively, so git add . stages all changes in that directory and every subfolder within it."
    },
    {
      q: "What is the correct, complete core Git workflow used to save progress, in order?",
      options: [
        "git commit, then git add, then git status",
        "git status, then git add ., then git commit -m \"message\"",
        "git log, then git init, then git add",
        "git add, then git init, then git log"
      ],
      answer: 1,
      explanation: "The standard workflow is: check the current state with git status, stage changes with git add, then permanently save with git commit -m, ideally checking git status again after."
    }
  ]
};
