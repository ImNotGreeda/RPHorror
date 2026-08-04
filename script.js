const heroCopy = document.querySelector('.hero-copy');
const character = document.querySelector('.character-wrap');

window.addEventListener('pointermove', ({ clientX, clientY }) => {
  if (window.innerWidth < 800) return;
  const x = (clientX / window.innerWidth - .5) * 8;
  const y = (clientY / window.innerHeight - .5) * 5;
  heroCopy.style.transform = `translate(${-x * .35}px, calc(-50% + ${-y * .35}px))`;
  character.style.transform = window.innerWidth >= 1440 ? 'none' : `translate(${x}px, ${y}px)`;
});

const fadeTargets = document.querySelectorAll('.articles-list .article-card, .archive-list .article-card, #article, .cta > *:not(.sigil)');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('shown');
  });
}, { threshold: .15 });

fadeTargets.forEach(target => {
  target.style.opacity = '0';
  target.style.transform = 'translateY(24px)';
  target.style.transition = 'opacity .8s ease, transform .8s ease';
  observer.observe(target);
});

document.head.insertAdjacentHTML('beforeend', '<style>.shown{opacity:1!important;transform:none!important}</style>');

Cusdis?.setTheme?.("dark");