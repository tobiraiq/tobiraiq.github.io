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
// ============================================================

const COURSES = [
  {
    id: "120-days-data-engineering",
    title: "120 Days to Advanced Data Engineering",
    subtitle: "A Structured Challenge for Working Data Engineers",
    category: "data-engineering",
    level: "Intermediate → Advanced",
    duration: "120 Days",
    price: "Free",
    originalPrice: null,
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