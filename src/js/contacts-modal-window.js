const contactsButtons = document.getElementById('contactsModalBbtnWrapper');
const contactsBtnArr = document.querySelectorAll('.contacts__modal-btn');
const contactsContentArr = document.querySelectorAll('.modal-maps__content-item');
const modalLocation = document.getElementById('location-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const contactsCloseBtn = document.getElementById('contactsCloseBtn');

const changeClass = el => {
    for (o = 0; o < contactsBtnArr.length; o++)  {
        contactsBtnArr[o].classList.remove('active');
    };
    el.classList.add('active');
};

modalLocation.addEventListener('click', ()=> {
    modalOverlay.classList.add('active');
});
contactsCloseBtn.addEventListener('click', ()=> {
    modalOverlay.classList.remove('active');
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