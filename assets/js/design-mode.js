let designMode = document.querySelector('.js-design-mode');

designMode.addEventListener('change', (event) => {
  document.designMode = designMode.checked ? 'on' : 'off';
});
