// ============================================================
// TOBIRAIQ — QUIZ INDEX
// ============================================================
// This file is tiny — it only stores metadata, NOT questions.
// Questions are in separate files per day (loaded on demand).
//
// HOW TO ADD A NEW COURSE:
// 1. Create folder: data/questions/your-course-id/
// 2. Create day files: day1.js, day2.js etc.
// 3. Add entry below with availableDays list
//
// HOW TO UNLOCK A NEW DAY:
// 1. Create the day file in the course folder
// 2. Add that day number to availableDays below
// 3. Save → quiz unlocks automatically ✅
// ============================================================

window.QUIZ_INDEX = {

  "120-days-data-engineering": {
    totalDays:     120,
    availableDays: [1, 2]
    // Add day numbers here as you release content
    // Example when Day 4 is ready: [1, 2, 3, 4]
  },

  "30-days-fresher-interview": {
    totalDays:     30,
    availableDays: []
    // All days locked until quiz content is added
    // Add day numbers here as you create questions
    // Example when Day 1 is ready: [1]
  },

  // Add new courses below when ready:
  // "your-course-id": {
  //   totalDays:     30,
  //   availableDays: [1]
  // },

};