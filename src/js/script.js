document.getElementById('baixar-cv').addEventListener('click', function () {

    const link = document.createElement('a');
    link.href = './src/Curriculo-Douglas.pdf';
    link.download = 'Douglas_Duarte_CV.pdf';
    link.click();
});

function toggleMenu() {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('active');
}