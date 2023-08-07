const h1 = document.querySelectorAll("h1");

h1.forEach((e) => {
  e.style.cursor = "pointer";
  let flag = 0;
  e.addEventListener("click", function () {
    if(flag == 0) {
      e.style.color = "red";
      flag = 1;
    } else {
      e.style.color = "black";
      flag = 0;
    }
  });
});
