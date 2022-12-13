const timeDisplay = document.querySelector(".clock__watch");

const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#reset");

let hrs = 0;
let mins = 0;
let secs = 0;
let int = null;

startBtn.addEventListener("click", () => {

   if(int !== null){
      clearInterval(int);
   }
   int = setInterval(updateTime, 1000);

});

pauseBtn.addEventListener("click", () => {
   clearInterval(int);
});

resetBtn.addEventListener("click", () => {
   clearInterval(int);
   hrs = 0;
   mins = 0;
   secs = 0;
   timeDisplay.textContent = "00:00:00";
});

function updateTime() {

   secs += 1;
   if(secs == 60){
      secs = 0;
      mins++;

      if(mins == 60){
          mins = 0;
          hrs++;
      }
   }

   let s = secs < 10 ? "0" + secs : secs;
   let m = mins < 10 ? "0" + mins : mins;
   let h = hrs < 10 ? "0" + hrs : hrs;

   timeDisplay.textContent = `${h}:${m}:${s}`;
}