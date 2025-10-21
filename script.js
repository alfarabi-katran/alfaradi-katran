// 1) Мобильное меню (бургер)
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
}

// 2) Текущий год в подвале
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// 3) Плавный скролл по якорям
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // закрыть меню на мобильном после клика
        menu?.classList.remove('open');
        toggle?.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// 4) Демонстрационная отправка формы (без сервера)
const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  alert(`Спасибо, ${data.name}! Я отвечу на ${data.email}.`);
  form.reset();
});
