document.addEventListener("DOMContentLoaded",async ()=>{const container=document.getElementById("remixes-list");try{const remixData=await (await fetch(JsonRemix)).json();const selectedRemixIds=[1,3,5,2];const filteredRemixes=selectedRemixIds .map(id=>remixData.remixes.find(item=>item.id===id)) .filter(Boolean);container.innerHTML=filteredRemixes.map(createRemixCardTemplate).join("")}catch (error){container.innerHTML=errorMessage}});