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
    availableDays: []
    // Add day numbers here as you release content
    // Example when Day 4 is ready: [1, 2, 3, 4]
  },

  "60-days-fresher-interview": {
    totalDays:     60,
    availableDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
    // Add day numbers here as you create quiz content
    // Example when Day 5 is ready: [1, 2, 3, 4, 5]
  },

  "crack-the-campus-interview-80-day": {
    totalDays:     80,
    availableDays: []
    // Add day numbers here as PDFs and quiz content are ready
  },

  // Add new courses below when ready:
  // "your-course-id": {
  //   totalDays:     30,
  //   availableDays: [1]
  // },

};