class Game {}

class Player {
  constructor() {
    this.width = 10;
    this.height = 20;
    this.positionY = 30;

    this.element = document.createElement("div");
    this.element.classList.add("player");
    this.element.style.width = this.width + "vw";
    this.element.style.height = this.height + "vh";
    this.element.style.position = "absolute";
    this.element.style.top = this.positionY + "vh";

    this.board = document.querySelector("#game-pitch");
    console.log(this.element);
    this.board.appendChild(this.element);
  }

  moveUp() {
    if (this.positionY > 0 && this.positionY <= 100) {
      this.positionY = this.positionY - 10;
      this.element.style.top = this.positionY + "vh";
    } else {
      this.positionY = 0;
      console.log(this.positionY);
    }
  }
  moveDown() {
    if (this.positionY >= 0 && this.positionY < 50) {
      this.positionY = this.positionY + 10;
      this.element.style.top = this.positionY + "vh";
    } else {
      this.positionY = 50;
    }
  }
}
const player1 = new Player();

class Defenders {
  constructor() {
    this.width = 10;
    this.height = 20;
    this.positionX = 90;
    this.positionY = 50; //math random Math.floor(Math.random() * (100 - this.height + 1)) ?

    this.element = document.createElement("div");
    this.element.classList.add("defenders");
    this.element.style.width = this.width + "vw";
    this.element.style.height = this.height + "vh";
    this.element.style.position = "absolute";
    this.element.style.top = this.positionY + "vh";
    this.element.style.left = this.positionX + "vw";

    this.board = document.querySelector("#game-pitch");
    this.board.appendChild(this.element);
  }
  moveLeft() {
    this.positionX -= 20;
    this.element.style.left = this.positionX + "vw";
  }
}

// createDefenders(){
//   this.domElement = document.createElement("div")
//   this.domElement.className = "defenders";

// }
setInterval(() => {
  const newDefender = new Defenders();
}, 4000);

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  switch (e.key) {
    case "ArrowUp":
      player1.moveUp();
      break;
    case "ArrowDown":
      player1.moveDown();
      break;
  }
});

// class Balls {
//   constructor() {
//     this.positionX = this.positionX;
//     this.positionY = this.positionY;
//     this.element = document.createElement("div");
//     this.element.classList.add("balls");
//     this.element.style.position = "absolute";
//     this.element.style.top = this.positionY + "vh";
//     this.element.style.left = this.positionX + "vw";

//     this.board = document.querySelector("#game-pitch");
//     this.board.appendChild(this.element);
//   }
//   moveLeft() {
//     this.positionX -= 20;
//     this.element.style.left = this.positionX + "vw";
//   }
// }
// const newBall = new Balls();
