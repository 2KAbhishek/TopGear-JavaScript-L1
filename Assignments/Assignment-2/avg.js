let assessmentMarks = [];
let n = 10;
let s = 0;
for (let i = 0; i < n; i++) {
  assessmentMarks[i] = parseInt(prompt("Enter Num " + (i + 1) + ":"));
  s = s + assessmentMarks[i];
}

document.write("Averaging: " + s / n);
console.log(s / n);
