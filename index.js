const textEl=document.getElementById("textarea");

const totalCounterEl=document.getElementById("total-counter");

const remainingCounterEl=document.getElementById("remaining-counter");

textEl.addEventListener("keyup",()=>{
    UpDateCounter();
});

function UpDateCounter(){
 totalCounterEl.innerText=  textEl.value.length;
 remainingCounterEl.innerText=textEl.getAttribute("maxLength")-textEl.value.length;
}