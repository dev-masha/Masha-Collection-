window.onload = function() {
if(!localStorage.getItem("welcomeShown")){
document.getElementById("welcome").style.display = "block";
localStorage.setItem("welcomeShown", "yes");
}
}

document.getElementById("closeBtn").onclick = function() {
document.getElementById("welcome").style.display = "none";
}
