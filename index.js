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
    }, 2500);

    setInterval(() => {
      this.defenders.forEach((defenderElement) => {
        defenderElement.moveLeft();
        this.detectCollision(defenderElement);
        this.removeDefendersIfOutside(defenderElement); //working fine!!
      });
    }, 60);
  }

  detectCollision(defenderElement) {
    //console.log("in detect collision function");
    // console.log("defenderElement :>> ", defenderElement);

    if (
      defenderElement.positionX < this.player.positionX + this.player.width &&
      defenderElement.positionX + defenderElement.width >
        this.player.positionX &&
      defenderElement.positionY < this.player.positionY + this.player.height &&
      defenderElement.height + defenderElement.positionY > this.player.positionY
    ) {
      console.log("game over my fren");
      location.href = "./gameOver.html";
    }
  }
  removeDefendersIfOutside(defenderElement) {
    if (defenderElement.positionX < 0 - defenderElement.width) {
      //1. remove elm from the dom
      defenderElement.domElement.remove();

      //2. remove from the array of obstacles
      this.defenders.shift();
    }
  }
}

// Detect collision

//    // Detect if obstacle needs to be removed
//     this.removeObstacleIfOutside(defenderElement);
//   });
// }, 60);

class Player {
  constructor() {
    this.width = 10;
    this.height = 20;
    this.positionY = 30;
    this.positionX = 0;

    this.element = document.createElement("div");
    this.element.classList.add("player");
    this.element.style.width = this.width + "vw";
    this.element.style.height = this.height + "vh";
    this.element.style.position = "absolute";
    this.element.style.top = this.positionY + "vh";
    this.element.style.left = this.positionX + "vw";

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
