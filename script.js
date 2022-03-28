

const signIn = function(){
    header = document.querySelector('.h1');
    boxes = document.querySelectorAll('.text__box');
    buttons = document.querySelectorAll('.btn');

    const hideBoxes = function(){
        boxes.forEach(element => {
            element.classList.add('slit-out');
        });
    }

    const hideButtons = function(){
        buttons.forEach(element => {
            element.classList.add('fade-out');
        });
    }

    header.classList.add('slit-out');
    setTimeout(hideBoxes, 400);
    setTimeout(hideButtons, 800);

}

