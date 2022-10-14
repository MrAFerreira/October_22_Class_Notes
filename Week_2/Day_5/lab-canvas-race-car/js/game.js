class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.car = null;
    this.obstacles = [];
    this.intervalId = null;
    this.frames = 0;
    this.width = 500;
    this.height = 700;
    this.background = new Image();
    this.controls = null;
  }

  drawBackground() {
    this.background.src = '../images/road.png';
    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
  }

  start() {
    this.car = new Player(220, 600, 50, 75, this.ctx);
    this.controls = new Controls(this.car);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(this.update, 1000 / 60);
  }

  update = () => {
    this.frames++;
    this.drawBackground();
    this.car.draw();
    this.updateObstacles();
    this.checkGameOver();
    this.score();
  };

  updateObstacles() {
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].y += 1;
      this.obstacles[i].draw();
    }

    if (this.frames % 120 === 0) {
      this.obstacles.push(new Enemy(this.ctx));
    }
  }

  checkGameOver() {
    const crashed = this.obstacles.some((obstacle) => {
      return this.car.crashWith(obstacle);
    });

    if (crashed) {
      this.stop();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  score() {
    this.ctx.font = '18px monospace';
    this.ctx.fillStyle = 'black';
    const score = Math.floor(this.frames / 5);
    this.ctx.fillText(`Score: ${score}`, 100, 50);
  }
}
