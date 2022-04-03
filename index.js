import "./styles.css";

let container = document.querySelector(".container");
let fadingCount = 1;
let myScore = 0;
let highScore = 0;
let arr = [];

for (let i = 0; i < 5; i++) {
  let block = document.createElement("div");
  block.classList.add("block__box");
  // block.className = "block__box";
  block.id = i;
  container.appendChild(block);
}

const startFading = () => {
  for (let i = 0; i < fadingCount; i++) {
    setTimeout(() => {
      let id = Math.floor(Math.random() * 5);
      arr.push(id);
      document.getElementById(id).classList.add("elementToFadeInAndOut");
      setTimeout(() => {
        document.getElementById(id).classList.remove("elementToFadeInAndOut");
      }, 990);
      console.log("I am himanshu");
      document.querySelector(".hi_score_val").innerHTML = 0;
    }, (i + 1) * 1000);
  }
};

document.querySelector(".container").addEventListener("click", (event) => {
  let id = event.target.id;
  if (!id) return;
  if (arr[0] == id) {
    arr.shift();
    if (!arr.length) {
      ++fadingCount;
      document.querySelector(".my_score_val").innerHTML = ++myScore;
      document.querySelector(".hi_score_val").innerHTML =
        highScore > myScore ? highScore : myScore;

      startFading();
    }
  } else {
    document.getElementById(id).classList.add("elementToFadeInAndOutDanger");
    document.querySelector(".container").classList.add("shake");
    highScore = myScore;
    // document.querySelector(".hi_score_val").innerHTML = highScore;
    myScore = 0;
    document.querySelector(".my_score_val").innerHTML = myScore;
    arr = [];
    fadingCount = 1;

    setTimeout(() => {
      document
        .getElementById(id)
        .classList.remove("elementToFadeInAndOutDanger");
      document.querySelector(".container").classList.remove("shake");
    }, 990);
    document.querySelector(".start_btn").disabled = false;
  }
});

document.querySelector(".start_btn").addEventListener("click", () => {
  console.log("start button pressed");
  document.querySelector(".start_btn").disabled = true;

  startFading();
});
