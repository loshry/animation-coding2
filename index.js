const main = document.querySelector(".main");
const button = document.querySelector("button");
console.log(button);
const ball = document.createElement("div");

const b = {
  x: 50,
  y: 30,
  w: 40,
  h: 40,
  dx: 1,
  dy: 1,
  speed: 5,
  ani: {},
  move: false,
};
ball.style.borderRadius = "50%";
ball.style.backgroundColor = "red";
ball.style.width = `${b.w}px`;
ball.style.height = `${b.h}px`;
ball.style.position = "relative";
ball.style.left = `${b.x}px`;
ball.style.top = `${b.y}px`;

main.append(ball);

console.log(ball);

button.addEventListener("click", () => {
  console.log("pressed button");
  if (!b.move) {
    b.ani = requestAnimationFrame(mover);
    b.move = true;
  } else {
    cancelAnimationFrame(b.ani);
  }
});

function mover() {
  if (b.x > 600 - b.w || b.x < 0) {
    b.dx *= -1;
  }
  if (b.y > 400 - b.h || b.y < 0) {
    b.dy *= -1;
  }

  b.x += b.dx * b.speed;
  b.y += b.dy * b.speed;
  ball.style.left = `${b.x}px`;
  ball.style.top = `${b.y}px`;
  ball.style.backgroundColor = "purple";
  if (b.move) {
    b.ani = requestAnimationFrame(mover);
  }
}
