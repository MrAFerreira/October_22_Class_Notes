class Enemy {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = Math.floor(Math.random() * 500) - 100;
    this.y = 0;
    this.w = Math.floor(Math.random() * (350 - 50 + 1) + 50);
    this.h = 50;
    this.color = `rgb(${this.y % 255}, 0, 0)`;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
}
