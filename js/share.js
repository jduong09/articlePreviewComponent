document.addEventListener('DOMContentLoaded', () => {
  const btnIconShare = document.getElementById('btn-icon-share');
  const divShare = document.querySelector('.div-share');

  btnIconShare.addEventListener('click', (e) => {
    e.preventDefault();

    if (divShare.classList.contains('hide')) {
      divShare.classList.remove('hide');
      btnIconShare.classList.add('active');
    } else {
      divShare.classList.add('hide');
      btnIconShare.classList.remove('active');
    }
  });
});