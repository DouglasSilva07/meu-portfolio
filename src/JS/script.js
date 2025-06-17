document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '☰';
  toggleBtn.style.fontSize = '1.5em';
  toggleBtn.style.background = 'none';
  toggleBtn.style.border = 'none';
  toggleBtn.style.color = 'white';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.display = 'none';

  nav.prepend(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    const ul = nav.querySelector('ul');
    if (ul.style.display === 'flex' || ul.style.display === '') {
      ul.style.display = 'none';
    } else {
      ul.style.display = 'flex';
      ul.style.flexDirection = 'column';
      ul.style.gap = '0.5em';
    }
  });

  // Mostrar botão em telas pequenas
  function checkWidth() {
    if (window.innerWidth <= 600) {
      toggleBtn.style.display = 'block';
      nav.querySelector('ul').style.display = 'none';
    } else {
      toggleBtn.style.display = 'none';
      nav.querySelector('ul').style.display = 'flex';
      nav.querySelector('ul').style.flexDirection = 'row';
      nav.querySelector('ul').style.gap = '1em';
    }
  }

  window.addEventListener('resize', checkWidth);
  checkWidth();
});
