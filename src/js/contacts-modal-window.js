const contactsButtons = document.getElementById('contactsModalBbtnWrapper');
const contactsBtnArr = document.querySelectorAll('.contacts__modal-btn');
const contactsContentArr = document.querySelectorAll('.modal-maps__content-item');
const modalLocationBtn = document.getElementById('location-btn');
const modalShopsBtn = document.getElementById('franchise-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalMaps = document.querySelector('.modal-maps');
const modalFranchise = document.querySelector('.modal-franchise');

const contactsMapsCloseBtn = document.getElementById('contactsMapsCloseBtn');
const contactsFranchiseCloseBtn = document.getElementById('contactsFranchiseCloseBtn');



// табы
const changeClass = el => {
    for (o = 0; o < contactsBtnArr.length; o++)  {
        contactsBtnArr[o].classList.remove('active');
    };
    el.classList.add('active');
};

modalLocationBtn.addEventListener('click', ()=> {
    modalOverlay.classList.add('active');
    modalMaps.classList.add('active');

});
modalShopsBtn.addEventListener('click', ()=> {
    modalOverlay.classList.add('active');
    modalFranchise.classList.add('active');

});
contactsMapsCloseBtn.addEventListener('click', ()=> {
    modalOverlay.classList.remove('active');
    modalMaps.classList.remove('active');   
});
contactsFranchiseCloseBtn.addEventListener('click', ()=> {
    modalOverlay.classList.remove('active');
    modalFranchise.classList.remove('active');   
});


contactsButtons.addEventListener('click', qui => {

    currTab = qui.target.dataset.contactsmodalbtn;
    
    changeClass(qui.target);  
    for (i = 0; i < contactsContentArr.length; i++) {
        contactsContentArr[i].classList.remove('active');  
        if (contactsContentArr[i].dataset.contactsmodalcontent === currTab) {
            contactsContentArr[i].classList.add('active'); 
           

        };
    };
});

// Слайдер

const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;
const activeSlide = n => {
for(slide of slides) {
    slide.classList.remove('active');
}
slides[n].classList.add('active');
}
const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
    }


const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeDot(index);
    }   else {
            index++;
            activeSlide(index);
            activeDot(index);
        }

}
const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    }   else {
            index--;
            activeSlide(index);
            activeDot(index);
        }

}
dots.forEach((item, indexDot)=> {
item.addEventListener('click', () => {
    index = indexDot;
    activeSlide(index);
    activeDot(index);
})
})
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

