// ============================================================
// TOBIRAIQ — 60 Days Fresher Interview — Day 6 Quiz
// Topic: Introduction to Git & Version Control
// Questions: 15
// ============================================================

window.QUIZ_DAY_DATA = {
  title: "Day 6 — Introduction to Git & Version Control",
  questions: [
    {
      q: "What is version control?",
      options: [
        "A way to compress files to save space",
        "A system that tracks every change made to a project's files over time, with the ability to revert to earlier versions",
        "A tool only used for writing documentation",
        "A type of programming language"
      ],
      answer: 1,
      explanation: "Version control tracks who changed what and when, replacing manual backup copies with a clean, searchable history."
    },
    {
      q: "What is the difference between Git and GitHub?",
      options: [
        "They are exactly the same thing",
        "Git is version control software on your computer; GitHub is a website that hosts Git repositories online",
        "GitHub is software on your computer; Git is a website",
        "Git only works on Windows, GitHub only works on Mac"
      ],
      answer: 1,
      explanation: "Git runs locally and tracks changes. GitHub is a separate online platform for hosting and collaborating on Git repositories."
    },
    {
      q: "Which command checks that Git is installed correctly?",
      options: [
        "git check",
        "git --version",
        "git install",
        "git verify"
      ],
      answer: 1,
      explanation: "git --version prints the installed Git version, confirming the installation worked."
    },
    {
      q: "On Windows, which option is important to keep selected during Git installation so git commands work from any terminal?",
      options: [
        "Use Git from the command line (the recommended PATH option)",
        "Install Git Desktop only",
        "Disable line ending conversion",
        "Use Notepad as the only editor"
      ],
      answer: 0,
      explanation: "Keeping the recommended 'Git from the command line' PATH option selected lets you run git commands from any terminal window."
    },
    {
      q: "What does the --global flag do in this command?\n\ngit config --global user.name \"Your Name\"",
      options: [
        "It only applies the name to the current project folder",
        "It applies the name to every Git repository on this computer, not just one project",
        "It uploads your name to GitHub automatically",
        "It has no real effect"
      ],
      answer: 1,
      explanation: "--global sets the identity at the computer level, so it applies across every Git project, not just the current one."
    },
    {
      q: "What does git init do?",
      options: [
        "Deletes a Git repository",
        "Turns the current folder into a Git repository by creating a hidden .git folder",
        "Uploads the current folder to GitHub",
        "Installs Git on the computer"
      ],
      answer: 1,
      explanation: "git init starts tracking the current folder by creating a hidden .git folder that stores the project's history."
    },
    {
      q: "How often do you need to run git init for a single project?",
      options: [
        "Once per computer, ever",
        "Once per project folder, when you first start tracking it",
        "Every single day you work on the project",
        "Every time you create a new file"
      ],
      answer: 1,
      explanation: "Unlike git config --global, git init is run once per project folder to start tracking it — not once per computer."
    },
    {
      q: "What does git status do?",
      options: [
        "Deletes all untracked files",
        "Shows the current state of your project's files — what's new, changed, or untracked",
        "Uploads your code to GitHub",
        "Permanently saves your changes"
      ],
      answer: 1,
      explanation: "git status reports exactly what Git currently sees in your project folder, without changing anything."
    },
    {
      q: "What would git status print immediately after a fresh git init, with no files created yet?",
      options: [
        "An error saying the repository is empty",
        "Something like 'On branch main', 'No commits yet', and 'nothing to commit, working tree clean'",
        "A list of every file on the computer",
        "It would automatically create a commit"
      ],
      answer: 1,
      explanation: "A freshly initialized repository with no files reports a clean working tree and no commits yet."
    },
    {
      q: "What does it mean when git status reports a file as 'untracked'?",
      options: [
        "The file has been permanently deleted",
        "Git sees the file exists but is not yet recording any history for it",
        "The file has already been uploaded to GitHub",
        "The file contains a syntax error"
      ],
      answer: 1,
      explanation: "'Untracked' means Git notices the file but hasn't been told to start tracking its changes — that requires git add."
    },
    {
      q: "A developer runs these commands. What does the final git status report?\n\nmkdir project\ncd project\ngit init\necho 'data' > file.txt\ngit status",
      options: [
        "file.txt is shown as already committed",
        "file.txt is shown as an untracked file",
        "An error, since echo cannot be used before git init",
        "Nothing — git status only works after the first commit"
      ],
      answer: 1,
      explanation: "After git init, a newly created file shows up as untracked, since it hasn't been added or committed yet."
    },
    {
      q: "What is wrong with running 'git status' before running 'git init' in a brand-new folder?",
      options: [
        "Nothing is wrong, it works the same either way",
        "It produces an error like 'fatal: not a git repository', since the folder isn't tracked by Git yet",
        "It automatically runs git init for you",
        "It deletes the folder"
      ],
      answer: 1,
      explanation: "git status only works inside a folder already initialized with git init — otherwise Git has nothing to report on."
    },
    {
      q: "If you delete the hidden .git folder inside a project, what happens?",
      options: [
        "Nothing changes at all",
        "The entire tracked history is permanently lost, though the actual project files remain untouched",
        "GitHub automatically restores it",
        "The project folder itself gets deleted"
      ],
      answer: 1,
      explanation: "The .git folder is the only place Git stores history. Deleting it removes all tracked history, but your actual files stay intact."
    },
    {
      q: "True or False: git config --global user.email needs to be re-run every time you start a new project.",
      options: [
        "True, it must be set per-project",
        "False — since it's global, it only needs to be set once per computer, applying to all future projects",
        "True, but only on Windows",
        "False, because email is never required by Git"
      ],
      answer: 1,
      explanation: "Because --global applies the setting machine-wide, you only need to configure it once, not separately for each new repository."
    },
    {
      q: "What is the correct sequence of terminal commands to create a folder called 'app', move into it, and initialize it as a Git repository?",
      options: [
        "git init, then mkdir app, then cd app",
        "mkdir app, then cd app, then git init",
        "cd app, then mkdir app, then git init",
        "mkdir app, then git init, then cd app"
      ],
      answer: 1,
      explanation: "You must create the folder first (mkdir app), move into it (cd app), and only then initialize it as a Git repository (git init)."
    }
  ]
};
