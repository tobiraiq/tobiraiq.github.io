// ============================================================
// TOBIRAIQ — COURSES DATA FILE
// ============================================================
// HOW TO ADD A NEW COURSE:
// 1. Copy one course block below
// 2. Paste it at the top of the array
// 3. Fill in your details
// 4. Save the file
// 5. Your course appears everywhere automatically ✅
//
// IMPORTANT: Only add courses that are READY for students.
// Do not add placeholder or coming soon entries here.
//
// journeyTitle GUIDE — set this for every course:
//   "30 Days to Fresher"    → "Your 30-Day Roadmap"
//   "Web Designer Course"   → "Your Web Design Journey"
//   "Become Advanced Coder" → "Your Coding Roadmap"
//   "120 Days Data Eng."    → "Your 120-Day Roadmap"
//   If not set → defaults to "Course Roadmap"
//
// PRICING GUIDE (always use ₹ for INR):
//   price: "Free"            → completely free
//   price: "Phase 1 Free"    → phase 1 free, rest paid
//   price: "₹999"            → fully paid
//   price: "Coming Soon"     → not launched yet
//   paidPrice: "₹999"        → actual price shown
//   originalPrice: "₹1,999"  → crossed out price
//   discountPercent: 50       → yellow % OFF badge
// ============================================================

const COURSES = [

  // ── 30 Day Fresher Course ─────────────────────────────
  {
    id: "30-days-fresher-interview",
    title: "30 Days to Fresher Interview Success",
    subtitle: "From Zero to Interview-Ready for Tech Companies",
    category: "careers",
    level: "Beginner",
    duration: "30 Days",
    price: "Coming Soon",
    originalPrice: "₹1,999",
    discountedPrice: "₹999",
    discountPercent: 50,
    discountDeadline: null,
    journeyTitle: "Your 30-Day Roadmap",
    badge: "new",
    featured: true,
    topSelling: true,
    salesCount: 0,
    thumbnail: null,
    availableDays: 0,
    description: "A structured 30-day program designed for final-year students with zero technical background. 4 hours a day, split into two focused parts — covering Python, SQL, Git, project explanation and HR preparation. Everything you need to crack mass hiring tech assessments.",

    phases: [
      {
        number: 1,
        name: "Foundations",
        days: "Days 1–7",
        duration: "7 days · 28 hours total",
        color: "#00C6A7",
        overview: "Build your very first technical foundation from scratch. Week 1 introduces Python programming, SQL databases and Git version control — all starting from absolute zero. No prior experience needed. Every concept is explained simply with hands-on practice from Day 1.",
        deliverable: "By Day 7 you will have Python installed and running, your first SQL queries working on a local database, and a Git repository set up on GitHub — all ready to build on.",
        skills: ["Python Basics", "SQL SELECT", "Git Init", "Variables", "Data Types", "WHERE Clause"]
      },
      {
        number: 2,
        name: "Core Skills",
        days: "Days 8–14",
        duration: "7 days · 28 hours total",
        color: "#4A9EFF",
        overview: "Move from basics to building real capability. Week 2 covers SQL aggregate functions and joins, Python data structures and functions, and Git branching workflows. These are the exact skills tested in mass hiring assessments.",
        deliverable: "By Day 14 you will be comfortable writing SQL JOIN queries, building Python functions with parameters, and managing code using Git branches — all assessed in Week 2 review.",
        skills: ["SQL JOINs", "GROUP BY", "Python Functions", "Lists & Dicts", "Git Branching", "HAVING Clause"]
      },
      {
        number: 3,
        name: "Interview-Level Concepts",
        days: "Days 15–21",
        duration: "7 days · 28 hours total",
        color: "#9C7FFF",
        overview: "Elevate your skills to interview level. Week 3 introduces exception handling, subqueries, window functions, file handling, OOP basics and pull requests on GitHub. These concepts separate shortlisted candidates from the rest.",
        deliverable: "By Day 21 you will understand OOP fundamentals, write subqueries confidently, handle exceptions in Python, and have completed your first pull request on GitHub.",
        skills: ["OOP Basics", "Subqueries", "Window Functions", "Exception Handling", "Pull Requests", "CASE WHEN"]
      },
      {
        number: 4,
        name: "Interview Pattern Mastery",
        days: "Days 22–25",
        duration: "4 days · 16 hours total",
        color: "#FF7043",
        overview: "Tackle the exact question patterns that appear in mass hiring assessments. Days 22–24 solve the most commonly asked SQL, Python and Git interview questions with full explanations. Day 25 is a timed mock test simulating real assessment conditions.",
        deliverable: "By Day 25 you will have solved 30+ interview questions across SQL, Python and Git, and completed one full timed mock test under real assessment conditions.",
        skills: ["SQL Interview Q&A", "Python Interview Q&A", "Git Interview Q&A", "Mock Test", "Time Management"]
      },
      {
        number: 5,
        name: "Project & HR Sprint",
        days: "Days 26–30",
        duration: "5 days · 20 hours total",
        color: "#FFB300",
        overview: "The final phase prepares you for the human side of interviews. Learn to explain your final year project confidently, craft your 60-second self-introduction, handle tricky HR questions and walk into interview day with a clear, calm strategy.",
        deliverable: "By Day 30 you will have a polished project explanation, prepared answers for all common HR questions, completed a full mock interview round, and a mental game plan for interview day.",
        skills: ["Project Explanation", "Tell Me About Yourself", "HR Questions", "Mock Interview", "Company Research"]
      }
    ],

    whatYouLearn: [
      "Python fundamentals — variables, loops, functions, OOP and file handling",
      "SQL from scratch — SELECT to JOINs, subqueries and window functions",
      "Git and GitHub — version control, branching and pull requests",
      "How to explain your final year project clearly to any interviewer",
      "Answers to the most common SQL, Python and Git interview questions",
      "HR round preparation — tell me about yourself, strengths, tricky questions",
      "How to handle mass hiring assessment question patterns with confidence",
      "Time management strategies for technical aptitude tests"
    ],

    faqs: [
      {
        q: "Who is this course for?",
        a: "This course is for final-year engineering and bachelor's students who are preparing for campus placements and mass hiring drives at tech companies. No prior programming experience is required."
      },
      {
        q: "How much time do I need every day?",
        a: "4 hours per day — split into two 2-hour parts. Part 1 and Part 2 cover different topics each day so you never get fatigued by one subject."
      },
      {
        q: "Is this course available now?",
        a: "This course is coming soon. Subscribe to our free newsletter at tobiraiq.beehiiv.com to get notified the moment it launches."
      },
      {
        q: "What tools do I need?",
        a: "Python (free), MySQL (free), Git (free) and a GitHub account (free). Total setup cost is zero — full installation guides are included in the course."
      },
      {
        q: "Does this cover aptitude and logical reasoning?",
        a: "This course focuses on technical skills — Python, SQL and Git. Aptitude and logical reasoning will be covered in a separate dedicated module coming soon."
      }
    ],

    gumroadLink: "https://tobiraiq.gumroad.com",
    whatsappText: "Hi TobiraIQ! I am interested in the 30 Days Fresher Interview course. Can you share more details?",
    reviews: [],
    createdAt: "2025-01-01"
  },

  // ── 120 Days Data Engineering ─────────────────────────
  {
    id: "120-days-data-engineering",
    title: "120 Days to Advanced Data Engineering",
    subtitle: "A Structured Challenge for Working Data Engineers",
    category: "data-engineering",
    level: "Intermediate → Advanced",
    duration: "120 Days",
    price: "Phase 1 Free",
    paidPrice: "₹999",
    originalPrice: "₹1,999",
    discountedPrice: "₹999",
    discountPercent: 50,
    discountDeadline: null,
    journeyTitle: "Your 120-Day Roadmap",
    badge: "new",
    featured: true,
    topSelling: true,      // shows in homepage carousel
    salesCount: 0,         // update as sales grow — used for ordering
    thumbnail: null,
    availableDays: 3,    // Only Day 1-3 PDF available currently — update this as more days are added
    description: "A structured 120-day challenge designed to take you from an intermediate data engineer to an industry-ready senior professional. Every single day has a clear task — no confusion, no overwhelm. Work at your own pace and build skills that make a real difference to your career. Currently Day 1–3 study material is available. New days are added every week.",

    // ── PHASE OVERVIEW (shown on course page) ──────────
    // Deliberately high-level — full day-by-day detail
    // is reserved for enrolled students only.
    phases: [
      {
        number: 1,
        name: "SQL & Python Foundation",
        days: "Days 1–24",
        duration: "24 sessions · 24 hours total",
        color: "#00C6A7",
        overview: "SQL gets you through 60% of data engineering interviews. Python is the glue that holds your pipelines together. Phase 1 builds an unshakeable foundation in both — covering real interview-level SQL, production-grade Python patterns, API ingestion, error handling and automated testing. Every concept is learned by doing, not just reading.",
        deliverable: "By Day 24 you will have a GitHub repository with 30+ solved SQL problems, a Python ETL class built with OOP principles and pytest tests, and an API ingestion module with retry logic — all ready to show in interviews.",
        skills: ["Advanced SQL", "Python OOP", "ETL Patterns", "API Ingestion", "pytest", "GitHub"]
      },
      {
        number: 2,
        name: "Azure & Snowflake",
        days: "Days 25–48",
        duration: "24 sessions · 24 hours total",
        color: "#4A9EFF",
        overview: "Cloud platforms and data warehouses are no longer optional — they are the job. Phase 2 takes you deep into Microsoft Azure and Snowflake from scratch. You will build real pipelines, not just watch tutorials. Each service gets dedicated time so nothing is rushed or surface-level. By the end you will be comfortable discussing architecture decisions that senior engineers make daily.",
        deliverable: "By Day 48 you will have a complete Project 1 on GitHub: a batch ELT pipeline that pulls data from an API, loads it into Azure Data Lake, transforms it through Snowflake and runs automated dbt tests with full lineage — a portfolio piece that stands out immediately.",
        skills: ["Azure Data Factory", "ADLS Gen2", "Snowflake", "dbt", "ELT Architecture", "Cloud IAM"]
      },
      {
        number: 3,
        name: "PySpark, Airflow & Kafka",
        days: "Days 49–78",
        duration: "30 sessions · 30 hours total",
        color: "#9C7FFF",
        overview: "This is the phase that separates good engineers from great ones. Phase 3 goes deep into distributed computing with PySpark, real-time streaming with Kafka and Azure Event Hubs, and orchestration with Airflow. Linux command line and Git workflow are also solidified here because interviews test these more than candidates expect.",
        deliverable: "By Day 78 you will have Project 2 live on GitHub: a real-time streaming pipeline from Event Hubs through PySpark into Delta Lake with a Bronze-Silver-Gold medallion architecture, connected to Snowflake, orchestrated by Airflow and deployed with CI/CD via GitHub Actions.",
        skills: ["PySpark", "Apache Kafka", "Azure Event Hubs", "Airflow DAGs", "Delta Lake", "CI/CD", "Linux", "Git"]
      },
      {
        number: 4,
        name: "System Design & Portfolio Polish",
        days: "Days 79–96",
        duration: "18 sessions · 18 hours total",
        color: "#FF7043",
        overview: "Technical skills alone do not get you shortlisted — how you present them does. Phase 4 covers system design for data engineering (the round most candidates fail), polishes your GitHub portfolio into something that gets attention, prepares your resume and LinkedIn for maximum visibility, and drills take-home assignments so you never get caught off guard.",
        deliverable: "By Day 96 you will have 3 polished GitHub projects, a fully updated resume and LinkedIn profile, at least 3 cloud certifications earned, and 5 behavioural interview stories prepared using the SOAR framework — with measurable results in every story.",
        skills: ["System Design", "Portfolio Building", "Resume Writing", "LinkedIn Optimization", "Cloud Badges", "Behavioural Prep"]
      },
      {
        number: 5,
        name: "Interview Sprint & Offers",
        days: "Days 97–120",
        duration: "24 sessions · 24 hours total",
        color: "#FFB300",
        overview: "The final phase is pure execution. You apply to 30+ targeted roles at GCCs, fintechs and product companies. You run mock interviews weekly, close every technical gap identified in practice, and research each company's specific interview structure before walking in. This phase also covers salary negotiation with real data — so you never accept the first number you hear.",
        deliverable: "By Day 120 you will have 30+ targeted applications sent, competing offers evaluated, all technical and behavioural gaps closed, and the confidence to negotiate your worth using real market data.",
        skills: ["Mock Interviews", "Gap Analysis", "Job Applications", "Negotiation", "Company Research", "Offer Evaluation"]
      }
    ],

    whatYouLearn: [
      "Advanced SQL optimization and window functions used in real interviews",
      "Production-grade Python ETL patterns with OOP and automated testing",
      "End-to-end Azure pipelines using ADF, ADLS Gen2 and Databricks",
      "Snowflake architecture, performance tuning and dbt transformations",
      "PySpark for large-scale distributed data processing",
      "Real-time streaming with Kafka and Azure Event Hubs",
      "Airflow orchestration with production DAG patterns",
      "System design for data-intensive applications",
      "Building a portfolio that gets shortlisted — not skipped",
      "Salary negotiation strategies to maximise your offer",
    ],

    faqs: [
      {
        q: "Who exactly is this course for?",
        a: "This course is for data engineers with 1–3 years of experience who feel stuck at their current salary and want to break into senior roles at product companies, GCCs or fintechs in India."
      },
      {
        q: "How much time do I need every day?",
        a: "Between 1 to 2 hours per day depending on the concept. Some days are lighter, some go deeper. The plan is structured for working professionals so you can fit it around your job without burnout."
      },
      {
        q: "Is the full day-by-day plan available?",
        a: "The detailed daily plan is shared exclusively with enrolled students. The phase overview on this page gives you a clear picture of the journey — the daily specifics are part of what makes this course valuable."
      },
      {
        q: "Is this really free?",
        a: "Phase 1 of the course is completely free — no sign-up required. The remaining phases are available at a paid tier. This lets you experience the quality and structure before committing."
      },
      {
        q: "What tools and platforms will I use?",
        a: "Azure (free tier), Snowflake (30-day trial), dbt Core (free), Apache Airflow (free), PySpark (free), Kafka (free), GitHub (free). Total out-of-pocket cost is zero."
      }
    ],

    gumroadLink: "https://tobiraiq.gumroad.com",
    whatsappText: "Hi TobiraIQ! I am interested in the 120 Days Data Engineering course. Can you share more details?",
    reviews: [],
    createdAt: "2025-01-01"
  },

  // ============================================================
  // ADD NEW COURSES BELOW THIS LINE — COPY THE BLOCK ABOVE
  // Only add courses that are READY. No placeholders.
  // ============================================================

];