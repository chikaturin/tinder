const openmenu=document.getElementById('open')
const closemenu=document.getElementById('close')
const offmenu=document.getElementById('left-belowc')
openmenu.addEventListener("click", function() {
    if (closemenu.style.display === "none" && offmenu.style.display === "block") {
      closemenu.style.display = "block";
      offmenu.style.display = "none";
    } else {
      closemenu.style.display = "none";
      offmenu.style.display = "block";
    }
  });
const openfind=document.getElementById('open-find')
const closefind=document.getElementById('close-find')
openfind.addEventListener("click", function() {
    if (closefind.style.display === "none" && offmenu.style.display === "block") {
      closefind.style.display = "block";
      offmenu.style.display = "none";
    } else {
      closefind.style.display = "none";
      offmenu.style.display = "block";
    }
  });
const openshield=document.getElementById('open-shield')
const closeshield=document.getElementById('close-shield')
const closeshield1=document.getElementById('close-shield')
openshield.addEventListener("click", function() {
      closeshield.style.display = "block";
  });
closeshield1.addEventListener("click", function() {
      closeshield.style.display = "none";
  });



