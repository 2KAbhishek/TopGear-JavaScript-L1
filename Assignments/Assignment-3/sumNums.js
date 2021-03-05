let inp1 = parseInt(prompt("Enter 1st number: "));
let inp2 = parseInt(prompt("Enter 2nd number: "));

if (Number.isInteger(inp1) && Number.isInteger(inp2)) {
  document.write("<h2>" + (inp1 + inp2) + "</h2>");
} else {
  document.write("Sorry, Only numbers can be added");
}
