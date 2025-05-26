const pandaFace = document.querySelector('.face');
const pandaHands = document.querySelectorAll('.hand');
const eyes = document.querySelectorAll('.eye');

// Track mouse movement
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100 - 50;
  const y = (e.clientY / window.innerHeight) * 100 - 50;

  // Move face
  pandaFace.style.transform = `translate(${x / 10}px, ${y / 10}px)`;

  // Move eyes
  eyes.forEach((eye) => {
    eye.style.transform = `translate(${x / 20}px, ${y / 20}px)`;
  });

  // Move hands
  pandaHands.forEach((hand) => {
    hand.style.transform = `translate(${x / 15}px, ${y / 15}px)`;
  });
});

// Hand animation on login button hover
const loginButton = document.getElementById('login-btn');
loginButton.addEventListener('mouseover', () => {
  pandaHands[0].style.transform = 'translateY(-20px)';
  pandaHands[1].style.transform = 'translateY(-20px)';
});

loginButton.addEventListener('mouseleave', () => {
  pandaHands[0].style.transform = 'translateY(0)';
  pandaHands[1].style.transform = 'translateY(0)';
});
