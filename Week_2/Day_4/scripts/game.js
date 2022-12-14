class Game {
  constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.intervalId = null;
    this.obstacles = [];
    this.frames = 0;
  }

  start() {
    this.intervalId = setInterval(this.update, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  score() {
    const points = Math.floor(this.frames / 5);
    this.ctx.font = '22px monospace';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Score: ${points}`, 1000, 50);
  }

  update = () => {
    this.score();
    this.frames++;
    this.clear();
    this.player.newPos();
    this.player.draw();
    this.updateObstacles();
    this.checkGameOver();
  };

  stop() {
    clearInterval(this.intervalId);
  }

  checkGameOver() {
    const crashed = this.obstacles.some((obstacle) => {
      return this.player.crashWith(obstacle);
    });

    if (crashed) {
      this.stop();
    }
  }

  updateObstacles() {
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].x -= 1;
      this.obstacles[i].draw();
    }

    if (this.frames % 180 === 0) {
      let x = 1200;

      //calculate the height of the columns/obstacles
      let minHeight = 20;
      let maxHeight = 400;

      let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);

      //these variables control the size of the gap between obstacles
      let minGap = 75;
      let maxGap = 200;

      //this creates the gap
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

      //add the obstacles to the array
      //top obstacle
      this.obstacles.push(new Component(x, 0, 50, height, 'green', this.ctx));

      //bottom obstacle
      this.obstacles.push(new Component(x, height + gap, 50, x - height - gap, 'blue', this.ctx));
    }
  }
}

// What is your game idea?
// What's the game logic?
// How does the game end?
// What is your MVP ?
// How are you going to implement the logic?
// Your biggest difficulties
// Bonus
