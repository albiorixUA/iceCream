(() => {
  const refs = {
    openHowItsModalBtn: document.querySelector('[data-howitsmodal-open]'),
    closeHowItsModalBtn: document.querySelector('[data-howitsmodal-close]'),
    howitsmodal: document.querySelector('[data-howitsmodal]'),
  };

  refs.openHowItsModalBtn.addEventListener('click', toggleHowItsModal);
  refs.closeHowItsModalBtn.addEventListener('click', toggleHowItsModal);

  function toggleHowItsModal() {
    refs.howitsmodal.classList.toggle('is-hidden');
  }
})();