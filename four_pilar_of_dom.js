// 4 Pillar of DOM :

// 1. Selection of an Element
      let h1 = document.querySelector("h1");
// 2. Changing HTML
      h1.innerHTML = "his learning spirit";
// 3. Changing CSS
      h1.style.color = "red";
      h1.style.cursor = "pointer";
// 4. Event Listener
      h1.addEventListener("click", function () {
          h1.innerHTML = "h1 element changed successfully";
          h1.style.backgroundColor = "black";
          h1.style.color = "white";
      });
      
