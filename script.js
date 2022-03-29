const blurDiv = function(){
    let div = document.querySelector('.login__box');
    div.classList.add('blur-in');
}

const unblurDiv = function(){
    let div = document.querySelector('.login__box');
    /* div.classList.remove('blur-in'); */
    div.classList.add('blur-out');
}

const registration = function(){
    let header = document.querySelector('.h1');
    let boxes = document.querySelectorAll('.text__box');
    let buttons = document.querySelectorAll('.btn');

    boxes.forEach(element => {
        element.classList.remove('slit-out-reverse');
    });
    buttons.forEach(element => {
        element.classList.remove('fade-out-reverse');
    });
    header.classList.remove('slit-out-reverse');
    

    const hideBoxes = function(){
        boxes.forEach(element => {
            element.classList.add('slit-out');
        });
        header.classList.add('slit-out');
    }

    const hideButtons = function(){
        buttons.forEach(element => {
            element.classList.add('fade-out');
        });
    }

    const showRegistration = function(){
        let reg = document.querySelector('.registration__wrapper');
        reg.classList.add('fade-out-reverse');
    }

    setTimeout(hideBoxes, 400);
    setTimeout(hideButtons, 800);
    setTimeout(showRegistration, 1200);

}

const signIn = function(){
    let header = document.querySelector('.h1');
    let boxes = document.querySelectorAll('.text__box');
    let buttons = document.querySelectorAll('.btn');

    boxes.forEach(element => {
        element.classList.remove('slit-out-reverse');
    });
    buttons.forEach(element => {
        element.classList.remove('fade-out-reverse');
    });
    header.classList.remove('slit-out-reverse');
    

    const hideBoxes = function(){
        boxes.forEach(element => {
            element.classList.add('slit-out');
        });
        header.classList.add('slit-out');
    }

    const hideButtons = function(){
        buttons.forEach(element => {
            element.classList.add('fade-out');
        });
    }

    const showSigned = function(){
        let signed = document.querySelector('.signedIn');
        signed.classList.add('fade-out-reverse');
    }

    setTimeout(hideBoxes, 400);
    setTimeout(hideButtons, 800);
    setTimeout(showSigned, 1200);

}


