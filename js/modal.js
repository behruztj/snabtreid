document.addEventListener('DOMContentLoaded', function() {
  // Получение элементов DOM
  const openButton = document.querySelector('.hero__btn');
  const modal = document.querySelector('.modal');
  const closeButton = document.querySelector('.modal__btn-cross');
  const modalSocialLinks = document.querySelectorAll('.modal-social__link');
  const productsButtons = document.querySelectorAll('.card__button');

  // Контроллер прокрутки
  const scrollController = {
      disableScroll() {
          document.body.style.overflow = 'hidden';
      },
      enableScroll() {
          document.body.style.overflow = '';
      },
  };

  // Функция для открытия модального окна
  function openModal() {
      if (!modal.classList.contains('open')) {
          modal.classList.add('open');
          modal.setAttribute('aria-hidden', 'false');
          scrollController.disableScroll();
      }
  }

  // Функция для закрытия модального окна
  function closeModal() {
      if (modal.classList.contains('open')) {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
          scrollController.enableScroll();
      }
  }

  // Обработчики событий
  if (openButton) {
      openButton.addEventListener('click', openModal);
  }
  if (closeButton) {
      closeButton.addEventListener('click', closeModal);
  }

  modalSocialLinks.forEach(link => {
      link.addEventListener('click', closeModal);
  });

  productsButtons.forEach(button => {
      button.addEventListener('click', openModal);
  });

  // Закрытие модального окна при клике вне его области
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          closeModal();
      }
  });

  // Закрытие модального окна при нажатии на клавишу Esc
  window.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          closeModal();
      }
  });
});
