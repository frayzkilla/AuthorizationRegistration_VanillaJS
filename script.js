const step1 = function(){
    let regInd = document.querySelector('.registrationIndicator__wrapper');
    let reg = document.querySelector('.registrationForm__wrapper');

    reg.style.opacity = 1;
    regInd.style.opacity = 1;
    reg.classList.remove('fade-out-reverse');
    regInd.classList.remove('fade-out-reverse');

    let r1 = document.querySelector('#first-round');
    let r2 = document.querySelector('#second-round');
    let r3 = document.querySelector('#third-round');
    let l11 = document.querySelector('#firstline1');
    let l12 = document.querySelector('#firstline2');
    let l21 = document.querySelector('#secondline1');
    let l22 = document.querySelector('#secondline2');

    r1.classList.remove('next');
    r1.classList.remove('filled');
    r2.classList.remove('contour');
    r2.classList.remove('filled');
    r3.classList.remove('contour');
    r3.classList.remove('filled');

    l11.classList.remove('filled');
    l12.classList.remove('filled');
    l21.classList.remove('filled');
    l22.classList.remove('filled');

    r1.classList.add('contour');
    r2.classList.add('next');
    r3.classList.add('next');

    l11.classList.add('next');
    l12.classList.add('next');
    l21.classList.add('next');
    l22.classList.add('next');

    let reg1 = document.querySelector('.registration__form1');
    let reg2 = document.querySelector('.registration__form2');
    let reg3 = document.querySelector('.registration__form3');

    reg2.classList.add('hide');
    reg3.classList.add('hide');
    reg3.classList.add('fade-out');
    reg2.classList.add('fade-out');
    reg3.classList.remove('fade-out-reverse');
    reg2.classList.remove('fade-out-reverse');
    reg1.classList.remove('fade-out');
    reg1.classList.add('fade-out-reverse');
    reg1.classList.remove('hide');

}

const step2 = function(){
    let regInd = document.querySelector('.registrationIndicator__wrapper');
    let reg = document.querySelector('.registrationForm__wrapper');

    reg.style.opacity = 1;
    regInd.style.opacity = 1;
    reg.classList.remove('fade-out-reverse');
    regInd.classList.remove('fade-out-reverse');

    let r1 = document.querySelector('#first-round');
    let r2 = document.querySelector('#second-round');
    let r3 = document.querySelector('#third-round');
    let l11 = document.querySelector('#firstline1');
    let l12 = document.querySelector('#firstline2');
    let l21 = document.querySelector('#secondline1');
    let l22 = document.querySelector('#secondline2');

    r1.classList.remove('contour');
    r1.classList.remove('next');
    r2.classList.remove('filled');
    r2.classList.remove('next');
    r3.classList.remove('contour');
    r3.classList.remove('filled');

    l11.classList.remove('next');
    l12.classList.remove('next');
    l21.classList.remove('filled');
    l22.classList.remove('filled');

    r1.classList.add('filled');
    r2.classList.add('contour');
    r3.classList.add('next');

    l11.classList.add('filled');
    l12.classList.add('filled');
    l21.classList.add('next');
    l22.classList.add('next');

    let reg1 = document.querySelector('.registration__form1');
    let reg2 = document.querySelector('.registration__form2');
    let reg3 = document.querySelector('.registration__form3');

    reg1.classList.add('hide');
    reg3.classList.add('hide');
    reg1.classList.add('fade-out');
    reg3.classList.add('fade-out');
    reg1.classList.remove('fade-out-reverse');
    reg3.classList.remove('fade-out-reverse');
    reg2.classList.remove('fade-out');
    reg2.classList.add('fade-out-reverse');
    reg2.classList.remove('hide');

}

const step3 = function(){
    let regInd = document.querySelector('.registrationIndicator__wrapper');
    let reg = document.querySelector('.registrationForm__wrapper');

    reg.style.opacity = 1;
    regInd.style.opacity = 1;
    reg.classList.remove('fade-out-reverse');
    regInd.classList.remove('fade-out-reverse');

    let r1 = document.querySelector('#first-round');
    let r2 = document.querySelector('#second-round');
    let r3 = document.querySelector('#third-round');
    let l11 = document.querySelector('#firstline1');
    let l12 = document.querySelector('#firstline2');
    let l21 = document.querySelector('#secondline1');
    let l22 = document.querySelector('#secondline2');

    r1.classList.remove('contour');
    r1.classList.remove('next');
    r2.classList.remove('contour');
    r2.classList.remove('next');
    r3.classList.remove('next');
    r3.classList.remove('filled');

    l11.classList.remove('next');
    l12.classList.remove('next');
    l21.classList.remove('next');
    l22.classList.remove('next');

    r1.classList.add('filled');
    r2.classList.add('filled');
    r3.classList.add('contour');

    l11.classList.add('filled');
    l12.classList.add('filled');
    l21.classList.add('filled');
    l22.classList.add('filled');

    let reg1 = document.querySelector('.registration__form1');
    let reg2 = document.querySelector('.registration__form2');
    let reg3 = document.querySelector('.registration__form3');

    reg2.classList.add('hide');
    reg1.classList.add('hide');
    reg1.classList.add('fade-out');
    reg2.classList.add('fade-out');
    reg1.classList.remove('fade-out-reverse');
    reg2.classList.remove('fade-out-reverse');
    reg3.classList.remove('fade-out');
    reg3.classList.add('fade-out-reverse');
    reg3.classList.remove('hide');

}

const finish = function(){
    let regInd = document.querySelector('.registrationIndicator__wrapper');
    let reg = document.querySelector('.registrationForm__wrapper');
    regInd.classList.add('fade-out');
    reg.classList.add('fade-out');

    const showSigned = function(){
        let signed = document.querySelector('.signedIn');
        signed.classList.add('fade-out-reverse');
    }

    setTimeout(showSigned, 1000);
}

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
        let regInd = document.querySelector('.registrationIndicator__wrapper');
        let reg = document.querySelector('.registrationForm__wrapper');
        regInd.classList.add('fade-out-reverse');
        const showForm = function(){
            reg.classList.add('fade-out-reverse');
            reg.classList.remove('hide');
        }
        setTimeout(showForm, 100);
        
    }

    setTimeout(hideBoxes, 400);
    setTimeout(hideButtons, 800);
    setTimeout(showRegistration, 1200);

    let r1 = document.querySelector('#first-round');
    let r2 = document.querySelector('#second-round');
    let r3 = document.querySelector('#third-round');

    r1.addEventListener('click', step1);
    r2.addEventListener('click', step2);
    r3.addEventListener('click', step3);



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

document.querySelector('.register').addEventListener('click', registration);


