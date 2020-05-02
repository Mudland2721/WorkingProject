$(document).ready(function () {
  $("#lyftButton").click(function () {
    window.open("https://www.lyft.com/rider");
    console.log("clicked");
  });

  // $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).then(function(response) {
  //     console.log(response);
  //   });
});
