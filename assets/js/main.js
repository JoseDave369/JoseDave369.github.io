// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ── Project filter ──
const filterBtns   = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const cats = card.dataset.category || '';
      if (filter === 'all' || cats.split(' ').includes(filter)) {
        card.style.display = '';
        card.style.animation = 'fadeIn .4s ease';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ── Fade-in on scroll ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.project-card, .skill-card, .cert-card, .about-grid, .contact-card, .section-header'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--primary)' : '';
    a.style.borderColor = a.getAttribute('href') === `#${current}` ? 'var(--primary)' : 'transparent';
  });
});

// ── Smooth year counter in stats ──
function animateCounter(el, target) {
  let count = 0;
  const step = Math.ceil(target / 40);
  const interval = setInterval(() => {
    count = Math.min(count + step, target);
    el.textContent = count + (el.dataset.suffix || '');
    if (count >= target) clearInterval(interval);
  }, 40);
}
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const num = parseInt(e.target.textContent);
      if (!isNaN(num)) animateCounter(e.target, num);
      statObserver.unobserve(e.target);
    }
  });
}, { threshold: .5 });
document.querySelectorAll('.stat-number').forEach(el => statObserver.observe(el));
