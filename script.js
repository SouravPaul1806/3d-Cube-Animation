const cube = document.getElementById('cube');
let rotateX = 0;
let rotateY = 0;

cube.addEventListener('click', () => {
  rotateX += 90;
  rotateY += 90;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
