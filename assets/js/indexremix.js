document.addEventListener("DOMContentLoaded",async()=>{let e=document.getElementById("remixes-list"),t=document.getElementById("pagination-controls"),n=document.getElementById("prev-button"),i=document.getElementById("next-button"),l=document.getElementById("page-info"),d=1,a=[],r=t=>{d=t;let r=a.slice((t-1)*10,10*t);e.innerHTML=r.length?r.map(createRemixCardTemplate).join(""):errorMessage,l.innerHTML=`صفحه ${t} از ${Math.ceil(a.length/10)}`,n.disabled=1===t,i.disabled=t===Math.ceil(a.length/10)};try{let s=await (await fetch(JsonRemix)).json();if(!(a=s.remixes).length)throw Error("No remixes found");a.length>10&&(t.style.display="flex"),r(d)}catch(o){console.error(o),e.innerHTML=errorMessage,t.innerHTML=""}n.addEventListener("click",()=>d>1&&r(d-1)),i.addEventListener("click",()=>d<Math.ceil(a.length/10)&&r(d+1))});