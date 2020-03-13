let counter = 0;
const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('Active'));
  event.target.classList.add('Active');
});

BUTTON.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const describe = document.getElementById('describe').value;

  document.getElementById('result').innerText = name + email + subject + describe;

  document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', () => {
  document.getElementById('Form').reset();
  document.getElementById('message-block').classList.add('hidden');
});