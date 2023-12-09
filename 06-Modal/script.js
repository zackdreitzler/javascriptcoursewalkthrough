'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openOverlay = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let mod of btnsOpenModal) {
  mod.addEventListener('click', openOverlay);
}

const closeOverlay = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeOverlay);
overlay.addEventListener('click', closeOverlay);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeOverlay();
  }
});
