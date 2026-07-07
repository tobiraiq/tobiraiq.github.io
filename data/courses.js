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
//   "60 Days to Fresher"    → "Your 60-Day Roadmap"
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

  // ── 60 Day Fresher Course ─────────────────────────────
  {
    id: "60-days-fresher-interview",
    title: "60 Days to Fresher Interview Success",
    subtitle: "From Zero to Interview-Ready for Tech Companies",
    category: "careers",
    level: "Beginner",
    duration: "60 Days",
    price: "₹199",
    originalPrice: "₹499",
    discountedPrice: "₹199",
    discountPercent: 60,
    discountDeadline: null,
    journeyTitle: "Your 60-Day Roadmap",
    badge: "new",
    featured: true,
    topSelling: true,
    salesCount: 0,
    thumbnail: null,
    availableDays: 60,
    description: "A structured 60-day program designed for final-year students with zero technical background. 2 focused hours a day, one topic at a time — covering Python, SQL, Git, project explanation and HR preparation. Everything you need start the mass hiring tech assessments, at a pace that's easy to sustain every single day.",

    phases: [
      {
        number: 1,
        name: "Foundations",
        days: "Days 1–14",
        duration: "14 days · 28 hours total",
        color: "#00C6A7",
        overview: "Build your very first technical foundation from scratch. Weeks 1–2 introduce Python programming, SQL databases and Git version control — all starting from absolute zero, one topic per day. No prior experience needed. Every concept is explained simply with hands-on practice from Day 1, followed by two full review days to lock it all in.",
        deliverable: "By Day 14 you will have Python installed and running, your first SQL queries working on a local database, a Git repository set up on GitHub, and two review days behind you to reinforce everything — all ready to build on.",
        skills: ["Python Basics", "SQL SELECT", "Git Init", "Variables", "Data Types", "WHERE Clause"]
      },
      {
        number: 2,
        name: "Core Skills",
        days: "Days 15–28",
        duration: "14 days · 28 hours total",
        color: "#4A9EFF",
        overview: "Move from basics to building real capability. Weeks 3–4 cover SQL aggregate functions and joins, Python data structures and functions, and Git branching workflows — one topic per day, followed by review days for SQL JOINs and Python functions. These are the exact skills tested in mass hiring assessments.",
        deliverable: "By Day 28 you will be comfortable writing SQL JOIN queries, building Python functions with parameters, and managing code using Git branches — all reinforced across two dedicated review days.",
        skills: ["SQL JOINs", "GROUP BY", "Python Functions", "Lists & Dicts", "Git Branching", "HAVING Clause"]
      },
      {
        number: 3,
        name: "Interview-Level Concepts",
        days: "Days 29–42",
        duration: "14 days · 28 hours total",
        color: "#9C7FFF",
        overview: "Elevate your skills to interview level. Weeks 5–6 introduce exception handling, subqueries, window functions, file handling, OOP basics and pull requests on GitHub — one topic per day, followed by mixed SQL and Python OOP review days. These concepts separate shortlisted candidates from the rest.",
        deliverable: "By Day 42 you will understand OOP fundamentals, write subqueries confidently, handle exceptions in Python, and have completed your first pull request on GitHub — all reinforced across two review days.",
        skills: ["OOP Basics", "Subqueries", "Window Functions", "Exception Handling", "Pull Requests", "CASE WHEN"]
      },
      {
        number: 4,
        name: "Interview Pattern Mastery",
        days: "Days 43–50",
        duration: "8 days · 16 hours total",
        color: "#FF7043",
        overview: "Tackle the exact question patterns that appear in mass hiring assessments. Days 43–48 solve the most commonly asked SQL, Python and Git interview questions with full explanations, one topic per day. Days 49–50 are full timed mock tests simulating real assessment conditions — one for SQL, one for Python.",
        deliverable: "By Day 50 you will have solved 30+ interview questions across SQL, Python and Git, and completed two full timed mock tests under real assessment conditions.",
        skills: ["SQL Interview Q&A", "Python Interview Q&A", "Git Interview Q&A", "Mock Test", "Time Management"]
      },
      {
        number: 5,
        name: "Project & HR Sprint",
        days: "Days 51–60",
        duration: "10 days · 20 hours total",
        color: "#FFB300",
        overview: "The final phase prepares you for the human side of interviews. Learn to explain your final year project confidently, craft your 60-second self-introduction, handle tricky HR questions, research companies properly, and walk into interview day with a clear, calm strategy after a full mock interview.",
        deliverable: "By Day 60 you will have a polished project explanation, prepared answers for all common HR questions, completed a full mock interview round, and a mental game plan for interview day.",
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
        a: "This course is for final-year students and bachelor's students who are preparing for campus placements and mass hiring drives at tech companies. No prior programming experience is required."
      },
      {
        q: "How much time do I need every day?",
        a: "Just 2 hours a day, one topic at a time. Each day is fully self-contained, so you can keep a steady, sustainable pace without ever feeling overwhelmed."
      },
      {
        q: "Is this course available now?",
        a: "Yes — this course is available now at a special launch price of ₹199 (original price ₹499). Grab it at this price before it goes back to full price."
      },
      {
        q: "What tools do I need?",
        a: "Python (free), MySQL (free), Git (free) and a GitHub account (free). Total setup cost is zero — full installation guides are included in the course."
      },
      {
        q: "Does this cover aptitude and logical reasoning?",
        a: "This course focuses on technical skills — Python, SQL and Git. Aptitude and logical reasoning will be covered in a separate dedicated module coming soon."
      },
      {
        q: "Can I buy this course without any prior coding knowledge",
        a: "Yes, the course is designed in such a way that anyone without coding knowledge can start this course. We have focused on starting everything from basics."
      }
    ],

    gumroadLink: "https://tobiraiq.gumroad.com/l/60-days-fresher-interview",
    whatsappText: "Hi TobiraIQ! I am interested in the 60 Days Fresher Interview course. Can you share more details?",
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
    price: "Coming Soon",
    originalPrice: null,
    discountedPrice: null,
    discountPercent: null,
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

  // ── 80 Day Crack the Campus Interview ────────────────
  {
    id: "crack-the-campus-interview-80-day",
    title: "Crack the Campus Interview: 80-Day Hiring Blueprint",
    subtitle: "From Aptitude Screening to Final Offer — The Complete Campus Hiring System",
    category: "careers",
    level: "Beginner",
    duration: "80 Days",
    price: "Coming Soon",
    originalPrice: null,
    discountedPrice: null,
    discountPercent: null,
    discountDeadline: null,
    journeyTitle: "Your 80-Day Hiring Blueprint",
    badge: "new",
    featured: true,
    topSelling: true,
    salesCount: 0,
    thumbnail: null,
    availableDays: 0,
    description: "The complete campus hiring system for final-year students. 80 days, 2 hours a day — covering aptitude and reasoning, DSA fundamentals, cloud concepts, core CS theory, and everything you need for resume, group discussion and online assessment strategy. The perfect companion to Foundation to Interview.",

    phases: [
      {
        number: 1,
        name: "Aptitude & Reasoning",
        days: "Days 1–22",
        duration: "22 days · 44 hours total",
        color: "#00C6A7",
        overview: "Pass the aptitude screening round that eliminates 70–80% of applicants before the technical interview. Covers quantitative aptitude (percentages, profit/loss, ratios, time-speed, averages, interest, number series), logical reasoning (seating, blood relations, directions, syllogisms, coding-decoding, clocks) and verbal ability (reading comprehension, sentence correction, para jumbles, vocabulary). Every topic comes with the core trick that solves 80–90% of questions, followed by 2 timed test days.",
        deliverable: "By Day 22 you will have completed 2 full timed aptitude tests and identified your green/yellow/red topics — with a clear revision plan for each weak area.",
        skills: ["Percentages", "Profit & Loss", "Time & Work", "Logical Reasoning", "Seating Arrangements", "Verbal Ability"]
      },
      {
        number: 2,
        name: "DSA Fundamentals",
        days: "Days 23–54",
        duration: "32 days · 64 hours total",
        color: "#4A9EFF",
        overview: "Build the algorithmic thinking and coding problem-solving skills needed to pass the online coding round. Covers arrays, strings, sorting, binary search, stack, queue, recursion, hashing and greedy algorithms — all in Python. Every concept includes a visual trace, a worked solution, and LeetCode easy problems. Includes 2 mock coding tests with full review sessions and 2 timed test days.",
        deliverable: "By Day 54 you will have solved 50+ coding problems across all major topic areas, completed 2 mock coding tests, and mastered the 5 patterns that solve 80% of easy-level coding rounds.",
        skills: ["Arrays", "Strings", "Binary Search", "Stack & Queue", "Recursion", "Hashing"]
      },
      {
        number: 3,
        name: "Cloud Fundamentals",
        days: "Days 55–60",
        duration: "6 days · 12 hours total",
        color: "#9C7FFF",
        overview: "Build awareness-level cloud knowledge for the cloud questions that appear in fresher technical interviews. Covers cloud computing concepts, IaaS/PaaS/SaaS, AWS/Azure/GCP, virtual machines vs containers, scalability, load balancing and serverless — all conceptual, no hands-on setup required. Includes the 10 most commonly asked cloud interview questions with model answers and a timed test day.",
        deliverable: "By Day 60 you will be able to answer any cloud fundamentals question that appears in a fresher technical interview round.",
        skills: ["Cloud Computing", "IaaS/PaaS/SaaS", "AWS/Azure/GCP", "VM vs Container", "Scalability", "Serverless"]
      },
      {
        number: 4,
        name: "Core CS Theory",
        days: "Days 61–74",
        duration: "14 days · 28 hours total",
        color: "#FF7043",
        overview: "Cover the CS theory questions that appear in fresher technical interviews — operating systems (processes, threads, deadlock), computer networks (HTTP/HTTPS, APIs, REST, client-server) and DBMS theory (ACID, normalisation, keys, indexing, SQL vs NoSQL). Every concept includes a model interview answer — not just the concept, but the 2–3 sentence version to say out loud. Includes 2 timed test days.",
        deliverable: "By Day 74 you will have model answers for all major OS, networking and database theory questions asked in fresher technical rounds.",
        skills: ["Operating Systems", "HTTP & APIs", "ACID Properties", "Normalisation", "Database Keys", "SQL vs NoSQL"]
      },
      {
        number: 5,
        name: "Resume, GD & OA Strategy",
        days: "Days 75–80",
        duration: "6 days · 12 hours total",
        color: "#FFB300",
        overview: "The final phase covers everything outside the interview room. Resume writing with ATS rules, result-first bullet structure and a full before/after rewrite. Group discussion — what evaluators actually score, how to open, how to enter, and 20 ready-to-use topics with speaking structures. Online assessment strategy across HackerRank, HackerEarth, AMCAT and Cocubes platforms.",
        deliverable: "By Day 80 you will have an updated interview-ready resume, spoken practice on 4 GD topics, and a clear strategy for every major online assessment platform used in campus hiring.",
        skills: ["Resume Writing", "ATS Rules", "Group Discussion", "HackerRank", "AMCAT Strategy", "OA Mindset"]
      }
    ],

    whatYouLearn: [
      "Aptitude tricks that solve 80–90% of quantitative and logical reasoning questions",
      "DSA fundamentals — arrays, strings, sorting, binary search, stack, queue, recursion and hashing",
      "The 5 coding patterns that solve 80% of easy-level online assessment problems",
      "Cloud computing concepts for fresher technical interviews — IaaS, PaaS, SaaS, AWS, Azure, GCP",
      "OS theory — processes, threads, deadlock — with ready-to-say interview answers",
      "DBMS theory — ACID, normalisation, keys, indexing, SQL vs NoSQL",
      "How to write an ATS-friendly resume with result-first project bullets",
      "Group discussion strategy — how to open, contribute and close any topic confidently"
    ],

    faqs: [
      {
        q: "Who is this course for?",
        a: "Final-year engineering and bachelor's students preparing for mass campus hiring drives. This course covers everything outside the core technical coding interview — aptitude, DSA, CS theory, resume, group discussion and online assessment strategy."
      },
      {
        q: "Do I need to complete the 60-day Foundation course first?",
        a: "The DSA module assumes you know basic Python syntax. If you are taking this course alone, you can follow along with basic Python knowledge from any source. Taking Foundation to Interview first is recommended but not strictly required."
      },
      {
        q: "How does this course pair with Foundation to Interview?",
        a: "Foundation to Interview covers Python, SQL, Git, project explanation and HR answers — what to do inside the interview room. This course covers aptitude, DSA, CS theory, resume and GD strategy — what to do before you reach the interview room. Together they form a complete 140-day campus hiring system."
      },
      {
        q: "What tools do I need?",
        a: "Python (free), a LeetCode account (free), and pen and paper for aptitude practice. No paid tools or subscriptions are required at any point."
      },
      {
        q: "Is this course available now?",
        a: "This course is coming soon. Subscribe to the newsletter at tobiraiq.beehiiv.com to be notified the moment it launches."
      }
    ],

    gumroadLink: "https://tobiraiq.gumroad.com",
    whatsappText: "Hi TobiraIQ! I am interested in the 80-Day Crack the Campus Interview course. Can you share more details?",
    reviews: [],
    createdAt: "2025-01-01"
  },

];

// ============================================================
// COURSE BUNDLES
// ============================================================
// Bundles let you promote 2–3 courses sold together.
// Each bundle shows on the homepage and courses page as a
// special "Best Together" card linking to Gumroad.
//
// Fields:
//   id           → unique bundle identifier
//   title        → short bundle name shown on card
//   tagline      → one-line pitch (e.g. "Complete campus hiring system")
//   courseIds    → array of course IDs in this bundle (must match courses above)
//   price        → bundle price string
//   originalPrice→ crossed-out original price (sum of individual prices)
//   discountPercent → % OFF badge
//   gumroadLink  → bundle Gumroad product link
//   badge        → "bestseller" | "popular" | "new" | null
//   active       → true = show on site, false = hide
// ============================================================

const BUNDLES = [

  {
    id: "campus-complete",
    title: "The Complete Campus Interview Pack",
    tagline: "60 days Foundation to Interview + 80 Days Crack the Campus Interview — zero to offer in 140 days.",
    courseIds: ["60-days-fresher-interview", "crack-the-campus-interview-80-day"],
    price: "Coming Soon",
    originalPrice: null,
    discountPercent: null,
    savingsText: null,
    gumroadLink: "https://tobiraiq.gumroad.com",
    badge: "bestseller",
    active: true   // shows as "Coming Soon" teaser — update price when both courses are live
  },

  // Add more bundles below when ready:
  // {
  //   id: "your-bundle-id",
  //   title: "Bundle Name",
  //   tagline: "Short pitch line",
  //   courseIds: ["course-id-1", "course-id-2"],
  //   price: "₹299",
  //   originalPrice: "₹548",
  //   discountPercent: 45,
  //   savingsText: "Save ₹249",
  //   gumroadLink: "https://tobiraiq.gumroad.com/l/your-bundle",
  //   badge: "popular",
  //   active: true
  // },

];