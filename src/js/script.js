// BAIXAR CURRÍCULO

document.getElementById('baixar-cv').addEventListener('click', function () {

  const link = document.createElement('a');
  link.href = './src/Curriculo-Douglas.pdf';
  link.download = 'Douglas_Duarte_CV.pdf';
  link.click();
});

//MENU RESPONSIVO

function toggleMenu() {
  const menu = document.querySelector('nav ul');
  const menuHamburguerIcon = document.querySelector('.menu-hamburguer');

  menu.classList.toggle('active');


  if (menuHamburguerIcon) {
    menuHamburguerIcon.classList.toggle('open');
  }
}


//TEXTO SOBRE MIM, MÁQUINA DE ESCREVER
const typingTextElement = document.querySelector('.text');
const textToType =
  "Oi, sou o Douglas Silva! Sou Desenvolvedor Front-End e estudante de Análise e Desenvolvimento de Sistemas. Tenho paixão por criar interfaces modernas, funcionais e acessíveis, sempre com foco na melhor experiência para o usuário. Minhas principais habilidades incluem HTML, CSS, JavaScript, TypeScript e Tailwind CSS, além de experiência com APIs REST, Git/GitHub e Scrum. No momento, estou em busca da minha primeira oportunidade como Front-End Júnior, para colocar meu conhecimento em prática, aprender com o time e evoluir junto com o projeto.";

let charIndex = 0;
const typingSpeed = 45;

function typeWriter() {
  if (charIndex < textToType.length) {
    typingTextElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  }
}

typeWriter();


// VARIAR O TEMA
const themeToggle = document.getElementById('trocar-tema');
const themeIcon = themeToggle.querySelector('img');
const body = document.body;
const themeKey = 'user-theme';

//ADICIONANDO CLASSE LIGHT-THEME
const LIGHT_THEME_CLASS = 'light-theme';


function applyTheme(theme) {
  if (theme === 'light') {
    body.classList.add(LIGHT_THEME_CLASS);
    localStorage.setItem(themeKey, 'light');

    if (themeIcon) {
      themeIcon.src = 'src/imagens/moon.svg';
    }
  } else {
    body.classList.remove(LIGHT_THEME_CLASS);
    localStorage.setItem(themeKey, 'dark');

    if (themeIcon) {
      themeIcon.src = 'src/imagens/sun-icon.svg';
    }
  }

  switchSkillImages(theme);
}


function toggleTheme() {

  const isCurrentlyLight = body.classList.contains(LIGHT_THEME_CLASS);

  const newTheme = isCurrentlyLight ? 'dark' : 'light';

  applyTheme(newTheme);
}

//SALVAR NO LOCALSTORAGE

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem(themeKey);
  const systemPref = window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
  const initialTheme = savedTheme || systemPref;

  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});


//TROCA SVG DAS HARDS SKILLS


function switchSkillImages(theme) {

  const skillImagesToSwitch = document.querySelectorAll('img[data-skill-name]');


  const suffix = theme;

  const folderPath = 'src/imagens/hard-skills/';
  const filePrefix = 'skill-icons--';

  skillImagesToSwitch.forEach(img => {

    const skillName = img.getAttribute('data-skill-name');

    const skillsToSwitch = ['react', 'tailwindcss', 'github'];

    if (skillsToSwitch.includes(skillName)) {
      img.src = `${folderPath}${filePrefix}${skillName}-${suffix}.svg`;
    }
  });
}