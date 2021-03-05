function checkDate() {
  let idate = document.getElementById("date").value.split("/");
  let resultDiv = document.getElementById("datewarn");
  let submit = document.getElementById("submit");

  let inpDat = new Date(idate[2] + "/" + idate[1] + "/" + idate[0]).getTime();
  // Adjusting for current time changes
  let curDat = Math.round(new Date().getTime() / 86400000) * 86400000;

  if (inpDat < curDat) {
    submit.disabled = true;
    resultDiv.innerHTML = "Future dates only!";
    resultDiv.style.color = "red";
  } else {
    resultDiv.innerHTML = "";
    submit.disabled = false;
  }
}
