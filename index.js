let screen = document.getElementById("sreen");
buttons = document.querySelectorAll("button");
alerts = document.getElementsByClassName("alert");
let screenValue = "";

// function myFunction() {
//   var x = event.which || event.keyCode;
//   var res = String.fromCharCode(x);
//   screen.value += res;
// }

//  alert("please read instructions before use Thank you");
function loaded() {
  setTimeout(function () {
    alerts[0].style.display = "none";
  }, 5000);
}

for (item of buttons) {
  item.addEventListener("click", (t) => {
    buttonText = t.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText; //Value of input in local storage (FOR DEVELOPER)
      screen.value = screenValue; // show value in input box (FOR USER)
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.value = screenValue; //clear screen and memory also
    } else if (buttonText == "=") {
      screen.value = eval(screenValue); //to show Result
    } else {
      screenValue += buttonText; // get all clicked values
      screen.value = screenValue;
    }
  });
}
