const hour=document.getElementById("hour");
const min=document.getElementById("min");
const sec=document.getElementById("sec");
const day=document.getElementById("day");
const month=document.getElementById("month");
const year=document.getElementById("year");
const week=document.getElementById("week");

let hours=0;
let mins=0;
let secs=0;
let days=0;
let months=0;
let years=0;
let weeks=0;

setInterval(()=>{
let time=new Date();
hours=String(time.getHours()).padStart(2,"0");
mins=String(time.getMinutes()).padStart(2,"0");
secs=String(time.getSeconds()).padStart(2,"0");
days=String(time.getDate()).padStart(2,"0");
months=String(time.getMonth()+1).padStart(2,"0");
years=time.getFullYear();
weeks=time.getDay();
hour.innerHTML=`${hours}`;
min.innerHTML=`${mins}`;
sec.innerHTML=`${secs}`;
day.innerHTML=`${days}`;
month.innerHTML=`${months}`;
year.innerHTML=`${years}`;
switch(weeks){
    case 0:week.innerHTML="Sunday";
        break;
    case 1:week.innerHTML="Monday";
        break;
    case 2:week.innerHTML="Tuesday";
        break;
    case 3:week.innerHTML="Wednesday";
        break;
    case 4:week.innerHTML="Thursday";
            break;
    case 5:week.innerHTML="Friday";
            break;
    case 6:week.innerHTML="Saturday";
            break;
}
},1000);

const lock=document.getElementById("ls");

function add(input){
    if(lock.value=="Try Again"||lock.value=="Unlocked"){
        lock.value=""
        lock.value +=input;;
    }else{
    lock.value +=input;
    }
}
function dlt(){
    if(lock.value=="Try Again"||lock.value=="Unlocked"){
        lock.value="";
    }else{
    lock.value=lock.value.slice(0,(lock.value.length)-1);}
}
let password="9901";
function check(){
    if(lock.value=="9901"){
        lock.value="Unlocked";
    }else{
        lock.value="Try Again";
    }
}
const btn=document.getElementById("pass");
const lockscreen=document.getElementById("lock");
const bar1=document.getElementById("bar1");
const bar2=document.getElementById("bar2");
const back=document.getElementById("back");

let lc=false;

lockscreen.addEventListener("click",()=>{
    if(lc==false){
        btn.style.opacity="1";
        btn.style.pointerEvents="auto";
        lock.style.opacity="1";
        btn.style.transition="1.5s";
        lock.style.transition="1.5s";
        bar1.style.opacity="0";
        back.style.opacity="1";
        bar2.style.opacity="0";
        bar1.style.transition="1s";
        bar2.style.transition="1s";
        back.style.transition="1.5s";
        lc=true;
    }
});
back.addEventListener("click",()=>{
    if(lc==true){
        btn.style.opacity="0";
        btn.style.pointerEvents="none";
        lock.style.opacity="0";
        btn.style.transition="1s";
        lock.style.transition="1s";
        bar1.style.opacity="1";
        back.style.opacity="0";
        bar2.style.opacity="1";
        bar1.style.transition=".5s";
        bar2.style.transition=".5s";
        back.style.transition="1s";
        lc=false;
    }
});
