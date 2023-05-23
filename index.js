class Game {
  constructor() {
    this.player = new Player();
    this.defenders = [];
    this.startGame();
  }
  startGame() {
    setInterval(() => {
      const newDefender = new Defenders();
      this.defenders.push(newDefender);
    }, 4000);

    setInterval(() => {
      this.defenders.forEach((defenderElement) => {
        defenderElement.moveLeft();
      });
    }, 60);
  }
}

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

    this.movePlayer();
  }
  movePlayer() {
    document.addEventListener("keydown", (e) => {
      console.log(e.key);
      switch (e.key) {
        case "ArrowUp":
          this.moveUp();
          break;
        case "ArrowDown":
          this.moveDown();
          break;
      }
    });
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
    if (this.positionY >= 0 && this.positionY < 40) {
      this.positionY = this.positionY + 10;
      this.element.style.top = this.positionY + "vh";
    } else {
      this.positionY = 40;
    }
  }
}

class Defenders {
  constructor() {
    this.width = 10;
    this.height = 20;
    this.positionX = 80;
    this.positionY = Math.floor(Math.random() * (80 - this.height));

    this.domElement = document.createElement("div");
    this.domElement.classList.add("defenders");
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.position = "absolute";
    this.domElement.style.top = this.positionY + "vh";
    this.domElement.style.left = this.positionX + "vw";

    this.board = document.querySelector("#game-pitch");
    this.board.appendChild(this.domElement);
  }
  createDefenders() {
    const parentElm = document.getElementById("game-pitch");
    this.domElement.className = "defenders";
  }

  moveLeft() {
    this.positionX--;
    this.domElement.style.left = this.positionX + "vw";
  }
}

const newGame = new Game();

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
