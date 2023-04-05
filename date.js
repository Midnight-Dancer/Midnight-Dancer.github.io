setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("date").innerHTML = date.toLocaleDateString();
}
