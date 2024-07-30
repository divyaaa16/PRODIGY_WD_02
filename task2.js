let clock =document.querySelector(".clock");
let reset=document.querySelector(".reset");
let start=document.querySelector(".start");
let Lap=document.querySelector(".Lap");
let reset_symbol=document.querySelector(".reset_symbol");
let Lap_symbol=document.querySelector(".lap_symbol");
let start_symbol=document.querySelector(".start_symbol");
let pause_symbol=document.querySelector(".pause_symbol");
let timing=document.querySelector(".timing");
let lapStore=document.querySelector(".lapStore");

pause_symbol.style.display="none";

let msec=0;
let sec=0;
let min=0;
let hr=0;
let timeInterval;



start_symbol.addEventListener("click",()=>{

timeInterval=setInterval(()=>{
    msec++;
    // console.log(msec);
    if(msec==100){
        sec++;
        msec=0;
    }
    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60){
        hr++;
        min=0;
    }


    timing.innerHTML=`${ZeroPad(hr)}:${ZeroPad(min)}:${ZeroPad(sec)}:${ZeroPad(msec)}`;
    },10);
    // start_symbol.innerHTML=' <i class="fa-solid fa-pause"></i>';
    start.innerText="Stop";

    start_symbol.setAttribute("style","display:none");
    pause_symbol.setAttribute("style","display:block");
    reset_symbol.setAttribute("style","display:block");
   
});
const ZeroPad=(num)=>{
    return String(num).padStart(2,"0");

};
pause_symbol.onclick=()=>{
    clearInterval(timeInterval);
    pause_symbol.setAttribute("style","display:none");
   start_symbol.setAttribute("style","display:block");
start.innerText="resume";
   

}
reset_symbol.addEventListener("click",()=>{

   lapStore.innerHTML="";
   hr=min=sec=msec=count=0;
   clearInterval(timeInterval);
   timing.innerHTML="00:00:00:000";
pause_symbol.setAttribute("style","display:none");
  start_symbol.setAttribute("style","display:block");
  start.innerHTML="start";

    
});
let count=0;

Lap_symbol.onclick=()=>{
count++;
let li=document.createElement("li");
li.innerHTML=`${"# Lap-" +count} - ${ZeroPad(hr)}:${ZeroPad(min)}:${ZeroPad(sec)}:${ZeroPad(msec)}`;
lapStore.appendChild(li);
lapStore.scroll({top:lapStore.scrollHeight,behavior:"smooth"});

};




