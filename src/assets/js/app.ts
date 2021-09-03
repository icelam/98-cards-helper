import dialogPolyfill from 'dialog-polyfill';

const init = () => {
  const aboutButton = document.querySelector<HTMLButtonElement>('#about-button');
  const aboutModal = document.querySelector<HTMLDialogElement>('#about-modal');
  const aboutModalCloseButton = document.querySelector<HTMLDialogElement>('#about-modal-close-button');

  if (!(aboutModal && aboutButton && aboutModalCloseButton)) {
    console.error('One or more Element ID is invalid. This is possibly a bug.');
    return;
  }

  dialogPolyfill.registerDialog(aboutModal);
  aboutButton?.addEventListener('click', () => {
    aboutModal?.showModal();
  });

  aboutModalCloseButton?.addEventListener('click', () => {
    aboutModal?.close();
  });
};

init();
