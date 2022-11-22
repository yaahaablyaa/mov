/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) ---

2) Изменить жанр фильма, поменять "комедия" на "драма" ---

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. ---
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


let imgg = document.querySelectorAll('.promo__adv img')
imgg.forEach(img => {
    img.style.display = "none"
})

let prm = document.querySelector(".promo__genre");
prm.innerHTML = 'ДРАМА'

let backImage = document.querySelector('.promo__bg')
backImage.style.background = `url("./img/bg.jpg")  no-repeat `, 
backImage.style.width = "100%"
backImage.style.height = "55%"
backImage.style.backgroundSize = "contain"

