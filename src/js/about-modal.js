(() => {
  const refs = {
    openAboutModalBtn: document.querySelector('[data-aboutmodal-open]'),
    closeAboutModalBtn: document.querySelector('[data-aboutmodal-close]'),
    aboutmodal: document.querySelector('[data-aboutmodal]'),
  };

  refs.openAboutModalBtn.addEventListener('click', toggleAboutModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleAboutModal);

  function toggleAboutModal() {
    refs.aboutmodal.classList.toggle('is-hidden');
  }
})();