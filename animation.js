const openmenu=document.getElementById('open')
const closemenu=document.getElementById('close')
const offmenu=document.getElementById('left-belowc')
const offstatus=document.getElementById('chat')
openmenu.addEventListener("click", function() {
    if (closemenu.style.display === "none") {
      closemenu.style.display = "block";
      offmenu.style.display = "none";
      closefind.style.display="none";
      offstatus.style.display="none";
      closechatbox1.style.display="none";
      closechatbox2.style.display="none";
      offchatbox.style.display="block";
    } else {
      closemenu.style.display = "none";
      offmenu.style.display = "block";
      closechat.style.display="none";
      offstatus.style.display="flex";
      closechatbox1.style.display="none";
      closechatbox2.style.display="none";
      offchatbox.style.display="block";
    }
  });
//   find
const openfind=document.getElementById('open-find')
const closefind=document.getElementById('close-find')
openfind.addEventListener("click", function() {
    if (closefind.style.display === "none") {
      closefind.style.display = "block";
      offmenu.style.display = "none";
      offstatus.style.display = "none";
      closemenu.style.display="none";
      closechatbox1.style.display="none";
      closechatbox2.style.display="none";
      offchatbox.style.display="block";
    } else {
      closefind.style.display ="none";
      offmenu.style.display = "block";
      closechat.style.display="none";
      closemenu.style.display="none";
      offstatus.style.display="flex";
      closechatbox1.style.display="none";
      closechatbox2.style.display="none";
      offchatbox.style.display="block";
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
          closechatbox1.style.display="none";
          closechatbox2.style.display='none';
          offchatbox.style.display="block";
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
const logochatbox1=document.getElementById('closechatbox-pc1')
const offchatbox=document.getElementById('centerc')

const opentroll=document.getElementById('openchatbox_pc3')
const closetroll=document.getElementById('troll')
const offtroll=document.getElementById('closetroll')

const opentroll1=document.getElementById('openchatbox_pc4')
const closetroll1=document.getElementById('troll2')
const offtroll1=document.getElementById('closetroll2')

const opentroll2=document.getElementById('openchatbox_pc5')
const closetroll2=document.getElementById('troll3')
const offtroll2=document.getElementById('closetroll3')

opentroll.addEventListener("click", function() {

      closetroll.style.display = "block";
      closetroll1.style.display="none";
      closetroll2.style.display="none";
      offchatbox.style.display = "none";
  });
  offtroll.addEventListener("click", function() {
    closetroll.style.display="none";
    offchatbox.style.display = "block";
    closechatbox1.style.display="none";
    closechatbox2.style.display="none";
});

opentroll1.addEventListener("click", function() {

      closetroll1.style.display = "block";
      closetroll2.style.display = "none";
      closetroll.style.display = "none";
      offchatbox.style.display = "none";
  });
  offtroll1.addEventListener("click", function() {
    closetroll1.style.display="none";
    offchatbox.style.display = "block";
    closechatbox1.style.display="none";
    closechatbox2.style.display="none";
});

opentroll2.addEventListener("click", function() {

      closetroll2.style.display = "block";
      closetroll1.style.display="none"
      offchatbox.style.display = "none";
  });
  offtroll2.addEventListener("click", function() {
    closetroll2.style.display="none";
    offchatbox.style.display = "block";
    closechatbox1.style.display="none";
    closechatbox2.style.display="none";
});

openchatbox1.addEventListener("click", function() {

      closechatbox1.style.display = "block";
      closetroll1.style.display = "none";
      closetroll2.style.display = "none";
      closetroll.style.display = "none";
      closefind.style.display = "none";
      closemenu.style.display = "none";
      offchatbox.style.display = "none";
  });

openchatbox2.addEventListener("click", function() {    
    if(closechatbox1.style.display==="block"){ closechatbox1.style.display="none"}
      closechatbox2.style.display = "block";
      closefind.style.display = "none";
      closetroll.style.display="none";
      closemenu.style.display = "none";
      closetroll1.style.display = "none";
      closetroll2.style.display = "none";
      closetroll.style.display = "none";
      offchatbox.style.display = "none";
  });

logochatbox.addEventListener("click", function() {
      closechatbox1.style.display = "none";
      closefind.style.display = "none";
      closechatbox2.style.display = "none";
      offchatbox.style.display = "block";
  });

logochatbox1.addEventListener("click", function() {
      closechatbox2.style.display = "none";
      closefind.style.display = "none";
      closechatbox1.style.display = "none";
      offchatbox.style.display = "block";
  });
