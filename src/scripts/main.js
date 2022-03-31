'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const slider = () => {
  let offSet = 0;
  const slides = document.querySelectorAll('.carousel__slide');
  const left = document.querySelector('.carousel__button--left');
  const right = document.querySelector('.carousel__button--right');

  left.addEventListener('click', function() {
    remove();
    offSet - 1 < 0 ? offSet = 2 : offSet--;
    add();
  });

  right.addEventListener('click', function() {
    remove();
    offSet + 1 > 2 ? offSet = 0 : offSet++;
    add();
  });

  const add = () => (
    slides[offSet].classList.add('carousel__slide--active')
  );

  const remove = () => (
    slides[offSet].classList.remove('carousel__slide--active')
  );
};

const select = () => {
  const mainSelect = document.querySelectorAll('.form__input--select');
  const selectBody = document.querySelector('.select__body');
  const selectText = document.querySelector('.select__text');
  const selectItem = document.querySelectorAll('.select__item');

  mainSelect.forEach(item => {
    // eslint-disable-next-line no-console
    // console.log(item);

    item.addEventListener('click', function() {
      selectBody.classList.toggle('select__body--active');
    });
  });

  selectItem.forEach(item => {
    item.addEventListener('click', function() {
      selectBody.classList.remove('.select__body--active');
      selectText.innerText = this.innerText;
    });
  });
};

const selectEye = () => {
  const mainSelect = document.querySelectorAll('.features__main > div');
  const descrSelect = document.querySelectorAll('.features__main > aside');
  // don't ever do that

  mainSelect.forEach((item, i) => {
    item.addEventListener('click', function() {
      descrSelect.forEach((descr, index) => {
        if (index !== i) {
          descr.classList.remove('features__description--active');
        }
      });

      descrSelect[i].classList.add('features__description--active');
    });
  });
};

selectEye();
select();
slider();
