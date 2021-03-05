let str = prompt("Enter a string: ");
let count = 0;
let vowels = [];
for (let i = 0; i < str.length; i++) {
  if (["a", "e", "i", "o", "u"].indexOf(str.charAt(i)) !== -1) {
    if (vowels.indexOf(str.charAt(i)) === -1) {
      vowels.push(str.charAt(i));
    }
    count++;
  }
}
document.write("Number of vowels: " + count);
console.log("Number of vowels: " + count);
document.write("<br> Found vowels: [" + vowels + "]");
console.log("Found vowels: [" + vowels + "]");
