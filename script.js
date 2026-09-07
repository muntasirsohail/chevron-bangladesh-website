const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const search = document.getElementById('deptSearch');
const cards = [...document.querySelectorAll('.dept-card')];
const noResults = document.getElementById('noResults');

search?.addEventListener('input', () => {
  const term = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const match = card.dataset.name.toLowerCase().includes(term);
    card.hidden = !match;
    if (match) visible++;
  });
  noResults.hidden = visible !== 0;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{opacity:0, transform:'translateY(18px)'},{opacity:1, transform:'translateY(0)'}],
        {duration:550, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards'}
      );
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.08});
document.querySelectorAll('.dept-card,.field-card,.metric-row div,.contact-card').forEach(el => observer.observe(el));