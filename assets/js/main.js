const emojis = [
  "😮‍💨","😮‍💨",
  "😆","😆",
  "❤️","❤️",
  "🖥️","🖥️",
  "👍","👍",
  "💎","💎",
  "🐨","🐨",
  "🌎","🌎"
];
const game = document.querySelector(".game");
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {window.location.reload()} );
function boxHandler() {
  this.classList.add("boxOpen");
  const boxOpen =document.querySelectorAll(".boxOpen");
  setTimeout(function() {
    if(boxOpen.length > 1) {
      if (boxOpen[0].innerHTML == boxOpen[1].innerHTML ) {
        boxOpen[0].classList.add("boxMatch");
        boxOpen[1].classList.add("boxMatch");
        const boxMatch=document.querySelectorAll(".boxMatch");
        boxOpen[1].classList.remove("boxOpen");
        boxOpen[0].classList.remove("boxOpen");
        if(boxMatch.length == emojis.length) {
          alert("WIN!!")
        }
      } else {
        boxOpen[1].classList.remove("boxOpen")
        boxOpen[0].classList.remove("boxOpen")
      }
    }
  },500)
}
const shuffle_emojis= emojis.sort(() => (Math.random() > .5 ? 2 : -1));
for (i=0; i < emojis.length; i++) {
  const box = document.createElement("div");
  box.className= "item";
  box.innerHTML=emojis[i];
  game.appendChild(box);
  box.addEventListener("click", boxHandler);
};