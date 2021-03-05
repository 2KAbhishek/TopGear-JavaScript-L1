let bgColor = "",
  fgColor = "";
while (bgColor.length === 0 && fgColor.length === 0) {
  bgColor = prompt("Enter background color : ");
  fgColor = prompt("Enter foreground color : ");
}

function changeColor() {
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = fgColor;
}
