// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/review-js-fundamentals-by-building-a-gradebook-app

// Calculate the average of the class scores
function getAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

// Convert a student's score to a letter grade
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Determine if the student passed (not an "F")
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// Build the message using the correct formatting and logic
function studentMsg(totalScores, studentScore) {
  // Get the class average
  var average = getAverage(totalScores)

  // Get the student's letter grade
  var grade = getGrade(studentScore);

  // Check if the student passed using the helper function
  var passed = hasPassingGrade(studentScore);

  // String concatenation 
  var message = "Class average: " + average + ". Your grade: " + grade + ". You ";

  // Message depending on pass/fail
  if (passed) {
    message += "passed the course.";
  } else {
    message += "failed the course.";
  }

  return message;
}

// Test case
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// Output: "Class average: 71.7. Your grade: F. You failed the course."
