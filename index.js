class Game {}

class Player {
  constructor() {
    this.positionY = 45;

    this.element = document.createElement("div");
    this.element.classList.add("player");
    this.element.style.position = "relative";
    this.element.style.top = this.positionY + "vh";

    this.board = document.querySelector("#game-pitch");
    console.log(this.element);
    this.board.appendChild(this.element);
  }

  moveUp() {
    this.positionY = this.positionY - 10;
    this.element.style.top = this.positionY + "vh";
  }
  moveDown() {
    this.positionY = this.positionY + 10;
    this.element.style.top = this.positionY + "vh";
  }
}
const player1 = new Player();

class Defenders {
  constructor() {
    this.positionX = -80;
    this.positionY = 5;
    this.element = document.createElement("div");
    this.element.classList.add("defenders");
    this.element.style.position = "relative";
    this.element.style.right = this.positionX + "vw";
    this.element.style.top = this.positionY + "vh";

    this.board = document.querySelector("#game-pitch");
    this.board.appendChild(this.element);
  }
}
const newDefender = new Defenders();

class Balls {
  constructor() {
    this.positionX = -30;
    this.positionY = 15;
    this.element = document.createElement("div");
    this.element.classList.add("balls");
    this.element.style.position = "relative";
    this.element.style.right = this.positionX + "vw";
    this.element.style.top = this.positionY + "vh";

    this.board = document.querySelector("#game-pitch");
    this.board.appendChild(this.element);
  }
}
const newBall = new Balls();

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
