// retrieves the button element and id bulb
const bulb = document.getElementById("bulb");
const btn = document.querySelector("button");

let flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "salmon";
    console.log("Cliocked");
    flag = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    console.log("Again Clicked");
    flag = 0;
  }
});
