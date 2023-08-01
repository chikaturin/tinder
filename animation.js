const openmenu=document.getElementById('open')
const closemenu=document.getElementById('close')
openmenu.addEventListener("click", function() {
    if (closemenu.style.display === "none") {
      closemenu.style.display = "block";
    } else {
      closemenu.style.display = "none";
    }
  });