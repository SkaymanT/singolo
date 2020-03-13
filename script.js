let counter = 0;
const MENU = document.getElementById('menu');
MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el =>el.classList.remove('Active'));
  event.target.classList.add('Active');
});