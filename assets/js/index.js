function imageLoaded(e){let t=e.previousElementSibling;t&&(t.style.display="none"),e.style.display="block"}error_img="assets/error-img.png",document.addEventListener("contextmenu",e=>{e.preventDefault()}),window.addEventListener("load",()=>{setTimeout(()=>{let e=document.querySelector(".loader"),t=document.querySelector(".content");e&&t&&(e.style.display="none",t.style.display="block")},700)});const errorMessage="<p id='text-erro-json'>خطا در بارگیری داده‌ها (404)</p>",JsonArtic="assets/data/singer.json",JsonSong="assets/data/song.json",JsonRemix="assets/data/remix.json";document.addEventListener("keydown",function(e){"INPUT"!==e.target.tagName&&"TEXTAREA"!==e.target.tagName&&e.preventDefault()})