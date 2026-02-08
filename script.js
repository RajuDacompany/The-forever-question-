const storyText = `
Hiii babeee 🥺🧿  
From day 1 to today we have came so far babe 🥺🧿  

Etohta somoe kete geche babe j bujhteo parini  
amra sudhu jokhon ghure takiyechi tokhon janteh perechi  
j amra kotohta somoe eksathe theke elam 🧿  

Onek fights onek nights onek days  
onek rag onek kanna  

bt tar majhe tar baire actually  
onek bhalobasha onek kissie  
onek hashi onek hugs onek prem 🥺🧿❤️  

tai aj gigesh korchi babe
`;

let i = 0;
let noClicked = false;
let yesClicked = false;
let heartInterval = null;

function goToHeart() {
  document.getElementById("s1").classList.add("hidden");
  document.getElementById("s2").classList.remove("hidden");
}

function goToStory() {
  document.getElementById("s2").classList.add("hidden");
  document.getElementById("s3").classList.remove("hidden");
  typeStory();
}

function typeStory() {
  const el = document.getElementById("story");
  if (i < storyText.length) {
    el.innerHTML += storyText.charAt(i) === "\n" ? "<br>" : storyText.charAt(i);
    i++;
    setTimeout(typeStory, 35);
  }
}

function goToQuestion() {
  document.getElementById("s3").classList.add("hidden");
  document.getElementById("s4").classList.remove("hidden");
}

// ❤️ YES
function yesAnswer() {
  if (yesClicked) return;
  yesClicked = true;

  document.getElementById("s4").classList.add("hidden");
  document.getElementById("s5").classList.remove("hidden");

  document.getElementById("pageBody").className =
    "h-screen bg-gradient-to-br from-rose-400 to-pink-600 overflow-hidden flex items-center justify-center transition-all duration-700";

  startHeartRainTimed();
}

// 😭 NO
function noAnswer() {
  if (noClicked) return;
  noClicked = true;

  document.getElementById("whyMsg").classList.remove("hidden");
  document.getElementById("noBtn").disabled = true;
  document.getElementById("noBtn").classList.add("opacity-50");

  startCryRainOnce();
}

// ❤️ HEART RAIN (8 seconds)
function startHeartRainTimed() {
  heartInterval = setInterval(() => {
    for (let j = 0; j < 10; j++) {
      const heart = document.createElement("div");
      heart.innerText = "❤️";
      heart.className = "fixed top-[-40px] text-3xl pointer-events-none";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animation = "fall 3.5s linear";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 3500);
    }
  }, 200);

  setTimeout(() => {
    clearInterval(heartInterval);
  }, 8000); // stops automatically
}

// 😭 CRY RAIN (ONCE)
function startCryRainOnce() {
  for (let j = 0; j < 15; j++) {
    const cry = document.createElement("div");
    cry.innerText = "😭";
    cry.className = "fixed top-[-40px] text-3xl pointer-events-none";
    cry.style.left = Math.random() * 100 + "vw";
    cry.style.animation = "fall 6s linear";
    document.body.appendChild(cry);
    setTimeout(() => cry.remove(), 6000);
  }
}

// animations
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh); opacity: 0; }
}
.heartbeat {
  animation: beat 1.2s infinite;
}
@keyframes beat {
  0%,100%{transform:scale(1)}
  50%{transform:scale(1.2)}
}
`;
document.head.appendChild(style);
