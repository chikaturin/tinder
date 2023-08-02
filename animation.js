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
const rightbtn=document.querySelector('.fa-chevron-right')
const leftbtn=document.querySelector('.fa-chevron-left')
const imgnumber=document.querySelectorAll('.photoimg img')
let index=0
rightbtn.addEventListener("click",function(){
    index=index+1
    if(index>imgnumber.length-1)
    {
        index=0
    }
    document.querySelector(".photoimg").style.right=index*50+"vh"
})
leftbtn.addEventListener("click", function(){
    index=index-1
    if(index<0)
    {
        index=imgnumber.length-1
    }
    document.querySelector(".photoimg").style.right=index*50+"vh"
})


