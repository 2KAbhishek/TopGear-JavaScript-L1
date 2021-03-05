let cd = { CdName: "Best of 2KAbhishek", CdPublisher: "2KTech", CdPrice: 2000 };

function displayAllDetails() {
  let price = cd.CdPrice + (10 * cd.CdPrice) / 100 - (3 * cd.CdPrice) / 100;
  document.write("CD Name : " + cd.CdName + "<br>");
  document.write("CD Publisher : " + cd.CdPublisher + "<br>");
  document.write("CD Price : " + price + "<br>");
  console.log("CD Name : " + cd.CdName);
  console.log("CD Publisher : " + cd.CdPublisher);
  console.log("CD Price : " + price);
}

displayAllDetails();
