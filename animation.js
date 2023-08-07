const openmenu=document.getElementById('open')
const closemenu=document.getElementById('close')
const offmenu=document.getElementById('left-belowc')
const offstatus=document.getElementById('chat')
openmenu.addEventListener("click", function() {
    if (closemenu.style.display === "none" && offmenu.style.display === "block") {
      closemenu.style.display = "block";
      offmenu.style.display = "none";
      offstatus.style.display = "none";
      closechatbox.style.display = "none";
    } else {
        offstatus.style.display = "flex";
      closemenu.style.display = "none";
      offmenu.style.display = "block";
    }
  });
//   find
const openfind=document.getElementById('open-find')
const closefind=document.getElementById('close-find')
openfind.addEventListener("click", function() {
    if (closefind.style.display === "none" && offmenu.style.display === "block") {
      closefind.style.display = "block";
      offmenu.style.display = "none";
      offstatus.style.display = "none";
      closechatbox.style.display = "none";
    } else {
        offstatus.style.display = "flex";
      closefind.style.display = "none";
      offmenu.style.display = "block";
    }
  });
//   chat
  const openchat=document.getElementById('openchat')
  const closechat=document.getElementById('closechat')
  openchat.addEventListener("click",function(){
    if (closechat.style.display === "none" && offmenu.style.display === "block") {
        closechat.style.display = "block";
        offmenu.style.display = "none";
      } else {
        closechat.style.display = "none";
        offmenu.style.display = "block";
      }
    });
// chatbox
    const openbox=document.getElementById('openbox')
    openbox.addEventListener("click",function(){
      if (offmenu.style.display === "none" && closechat.style.display === "block") {
          closechat.style.display = "none";
          offmenu.style.display = "block";
          closechatbox.style.display="none"
          offchatbox.style.display="block"
        }
      });
// next slide
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
});
// chatbox center
const openchatbox1=document.getElementById('openchatbox_pc1')
const closechatbox1=document.getElementById('center-box1')
const openchatbox2=document.getElementById('openchatbox_pc2')
const closechatbox2=document.getElementById('center-box2')
const logochatbox=document.getElementById('closechatbox-pc')
const offchatbox=document.getElementById('centerc')


openchatbox1.addEventListener("click", function() {

      closechatbox1.style.display = "block";
      closemenu.style.display = "none";
      offchatbox.style.display = "none";
  });
openchatbox2.addEventListener("click", function() {    
    if(closechatbox1.style.display==="block"){ closechatbox1.style.display="none"}
      closechatbox2.style.display = "block";
      closemenu.style.display = "none";
      offchatbox.style.display = "none";
  });
logochatbox.addEventListener("click", function() {
      closechatbox1.style.display = "none";
      offchatbox.style.display = "block";
  });
logochatbox.addEventListener("click", function() {
      closechatbox2.style.display = "none";
      offchatbox.style.display = "block";
  });
