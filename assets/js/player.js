const audio=new Audio();let isPlaying=!1;let progressAnimation;let currentPlayButton=null;const player_img=document.getElementById("player-img");const player=document.getElementById("player");const error_modal=document.getElementById("error-modal");const progressRange=document.getElementById("progress-range");function playMusic(file,title,artist,image,playButton){const pauseButton=playButton.closest('.item').querySelector('.pause-btn');if(currentPlayButton&&currentPlayButton!==playButton){resetPlayer(currentPlayButton)}
togglePlayPauseButtons(playButton,pauseButton);player_img.src=image;document.getElementById("player-title").textContent=title;document.getElementById("player-singer").textContent=artist;player.classList.add("showplayer");audio.src=file;audio.oncanplaythrough=()=>playAudio(playButton);audio.onerror=()=>handleAudioError(playButton);s.style.display="none";p.style.display="block"}
function playAudio(playButton){audio.play().then(()=>{isPlaying=!0;updateProgress();currentPlayButton=playButton}).catch((error)=>{console.error("Error playing audio:",error);handleAudioError(playButton)});player_img.classList.add("rotate")}
function pauseMusic(pauseButton){const playButton=pauseButton.closest('.item').querySelector('.play-btn');togglePlayPauseButtons(playButton,pauseButton);resetPlayer(playButton);audio.pause();isPlaying=!1;cancelAnimationFrame(progressAnimation)}
function togglePlayPauseButtons(playButton,pauseButton){playButton.style.display=playButton.style.display==="none"?"block":"none";pauseButton.style.display=pauseButton.style.display==="none"?"block":"none"}
function resetPlayer(playButton){const prevPlayButton=playButton.closest('.item').querySelector('.play-btn');const prevPauseButton=playButton.closest('.item').querySelector('.pause-btn');prevPlayButton.style.display="block";prevPauseButton.style.display="none";audio.pause();isPlaying=!1;player.classList.remove("showplayer");player_img.classList.remove("rotate")}
function updateProgress(){const currentTimeDisplay=document.getElementById("current-time");const totalTimeDisplay=document.getElementById("total-time");if(audio.duration){const currentTime=Math.floor(audio.currentTime);const duration=Math.floor(audio.duration);progressRange.value=(audio.currentTime/audio.duration)*100;currentTimeDisplay.textContent=formatTime(currentTime);totalTimeDisplay.textContent=formatTime(duration)}
if(isPlaying){progressAnimation=requestAnimationFrame(updateProgress)}}
function formatTime(seconds){const minutes=Math.floor(seconds/60);const remainingSeconds=seconds%60;return `${minutes}:${remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}`}
progressRange.addEventListener("input",function(){audio.currentTime=(this.value/100)*audio.duration;p.style.display="block";s.style.display="none"});function downloadMusic(file){fetch(file).then((response)=>{if(response.ok){const link=document.createElement("a");link.href=file;link.download=file.split("/").pop();document.body.appendChild(link);link.click();document.body.removeChild(link)}else{showErrorModal("آهنگی برای دانلود وجود ندارد!")}})}
function showErrorModal(message){document.getElementById("error-message").textContent=message;error_modal.style.display="block";setTimeout(closeModal,1000)}
function closeModal(){error_modal.style.display="none"}
function handleAudioError(playButton){showErrorModal("این آهنگ وجود ندارد!");resetPlayer(playButton);const playButtonParent=playButton.closest('.item').querySelector('.play-btn');playButtonParent.style.display="block";playButton.closest('.item').querySelector('.pause-btn').style.display="none"}
const p=document.querySelector(".play-player");const s=document.querySelector(".stop-player");p.addEventListener("click",function(){p.style.display="none";s.style.display="block";audio.pause();player_img.classList.remove("rotate")});s.addEventListener("click",function(){audio.play();s.style.display="none";p.style.display="block";player_img.classList.add("rotate")});audio.addEventListener("ended",function(){setTimeout(()=>{audio.play()},2000)})