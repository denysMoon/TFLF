$(function (){


});


function movePhoto(){
    anime({
        targets: '.photo', // селектор твоего элемента
        translateX: function() {
          return anime.random(0, 15); // аnime.js сам сгенерит случайное число от 0 до 50
        },
        translateY: function() {
          return anime.random(0, 15); // аnime.js сам сгенерит случайное число от 0 до 50
        }
    })
}

let photoBlock = document.querySelector('.photo')

function changePhoto () {
    photoBlock.classList.toggle('photo2')
}