//---------- Header --------------
let counter = 0;
const MENU = document.getElementById('menu');
//--- Slider. Переключение слайдов-------------
let slider = document.getElementById('slider');
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let isEnabled = true;
//--- Slider. Активация экранов телефонов-------------
let horizontal_btn = 0;
let vertical_btn = 0;
let verticalv2_btn = 0;
//--- Portfolio. Переключение табов------------
const TAG = document.getElementById('tag');

//---- Portfolio. Взаимодействие с картинками---
const IMAGE = document.getElementById('image');

// ----- Get a quote -------------
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

//----------------------------------------------------------------------------------------
//---------- Header --------------
MENU.addEventListener('click', (event) => {
  if (event.target.tagName != 'LI' && event.target.tagName != 'UL') {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('Active'));
    event.target.classList.add('Active');
  }
});

//--- Slider. Переключение слайдов-------------
function changeCurrentSlide(n) { // функция изменяющая текущий слайд "карусель"
  currentSlide = (n + slides.length) % slides.length;
}

function changeSlide(direction, n) { // функция появления следующего элемента
  isEnabled = false;
  slider.classList.add(direction);
  slides[currentSlide].classList.add('current'); //начало анимации на экране два слайда
  console.log(currentSlide);
  changeCurrentSlide(n + 1);
  slides[currentSlide].classList.add('next'); //начало анимации на экране два слайда
  slider.addEventListener('animationend', function () {
    slider.classList.remove(direction); // удаляем класс следующий, т.к. Анимация закончилась
    changeCurrentSlide(n);
    slides[currentSlide].classList.remove('current'); // удаляем класс следующий, т.к. Анимация закончилась
    slides[currentSlide].classList.remove('active_slide'); // удаляем класс следующий, т.к. Анимация закончилась
    changeCurrentSlide(n + 1);
    slides[currentSlide].classList.add('active_slide'); // объявляем след слайд актив
    slides[currentSlide].classList.remove('next'); // объявляем след слайд актив
    isEnabled = true;
  });

}

function nextSlide(n) { //функция смены слайда право
  changeSlide('slider_right', n);
  if (n % 2 == 0) {
    document.querySelector('.main').classList.remove('red_slide');
    document.querySelector('.main').classList.add('blue_slide');
  } else {
    document.querySelector('.main').classList.remove('blue_slide');
    document.querySelector('.main').classList.add('red_slide');
  }
}

function previousSlide(n) { //функция смены слайда право
  changeSlide('slider_left', n);
  if (n % 2 == 0) {
    document.querySelector('.main').classList.remove('red_slide');
    document.querySelector('.main').classList.add('blue_slide');
  } else {
    document.querySelector('.main').classList.remove('blue_slide');
    document.querySelector('.main').classList.add('red_slide');
  }
}

document.querySelector('.slider__prev').addEventListener('click', function () {
  if (isEnabled) {
    previousSlide(currentSlide);
  }
});

document.querySelector('.slider__next').addEventListener('click', function () {
  if (isEnabled) {
    nextSlide(currentSlide);
  }
});

//--- Slider. Активация экранов телефонов------
document.querySelector('.IPhone_vertical_btn').addEventListener('click', function () {
  if (vertical_btn % 2 == 0) {
    document.querySelector('.IPhone_vertical_screen').classList.remove('on');
    document.querySelector('.IPhone_vertical_screen').classList.add('off');
    vertical_btn++;
  } else {
    document.querySelector('.IPhone_vertical_screen').classList.remove('off');
    document.querySelector('.IPhone_vertical_screen').classList.add('on');
    vertical_btn++;
  }
});

document.querySelector('.IPhone_horizontal_btn').addEventListener('click', function () {
  if (horizontal_btn % 2 == 0) {
    document.querySelector('.IPhone_horizontal_screen').classList.remove('on');
    document.querySelector('.IPhone_horizontal_screen').classList.add('off');
    horizontal_btn++;
  } else {
    document.querySelector('.IPhone_horizontal_screen').classList.remove('off');
    document.querySelector('.IPhone_horizontal_screen').classList.add('on');
    horizontal_btn++;
  }
});

document.querySelector('.IPhone_vertical_body').addEventListener('click', function () {
  if (verticalv2_btn % 2 == 0) {
    document.querySelector('.IPhone_vertical_display').classList.remove('on');
    document.querySelector('.IPhone_vertical_display').classList.add('off');
    verticalv2_btn++;
  } else {
    document.querySelector('.IPhone_vertical_display').classList.remove('off');
    document.querySelector('.IPhone_vertical_display').classList.add('on');
    verticalv2_btn++;
  }
});

//--- Portfolio. Переключение табов------------
TAG.addEventListener('click', (event) => {
  if (event.target.id != 'tag') {
    TAG.querySelectorAll('span').forEach(el => el.classList.remove('selected'));
    event.target.classList.add('selected');
    IMAGE.querySelectorAll('img').forEach(el => el.classList.remove('active_img'));
    let IMGS = document.getElementById('image').querySelectorAll('img');
    for (let i = IMGS.length - 2; i >= 0; i--) {
      i = (i ^ 2) % IMGS.length;
      IMAGE.appendChild(IMGS[i]);
    }
  }

});



//---- Portfolio. Взаимодействие с картинками---
IMAGE.addEventListener('click', (event) => {
  IMAGE.querySelectorAll('img').forEach(el => el.classList.remove('active_img'));
  event.target.classList.add('active_img');
});


// ----- Get a quote -------------

BUTTON.addEventListener('click', () => {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let subject = document.getElementById('subject').value;
  let describe = document.getElementById('describe').value;
  if (name.validity.valid && email.validity.valid) {
    document.getElementById('message-block').classList.remove('hidden');
  } else {
    alert("Проверьте введенные данные name и Email");

  }
  if (subject != '') {
    subject = "Тема: " + subject;
  } else {
    subject = "Без темы";
  }
  if (describe != '') {
    describe = "Описание: " + describe;
  } else {
    describe = "Без описания";
  }
  document.getElementById('result').innerText = "\n" + subject + "\n" + describe;
});

CLOSE_BUTTON.addEventListener('click', () => {
  document.getElementById('Form').reset();
  document.getElementById('message-block').classList.add('hidden');
});