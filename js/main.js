/* ============================================================
   CETEC — JavaScript principal
   js/main.js
   ============================================================ */


/* ============================================================
   SLIDER / BANNER  (solo se ejecuta en index.html)
   ============================================================ */

const slides = [
  { id: 's0', eyebrow: 'Programación a medida'  },
  { id: 's1', eyebrow: 'Reparación de equipos'  },
  { id: 's2', eyebrow: 'Infraestructura de red'  },
  { id: 's3', eyebrow: 'Soporte técnico IT'      },
];

let currentSlide = 0;
let sliderTimer;

function goToSlide(index) {
  const prev = document.getElementById(slides[currentSlide].id);
  if (!prev) return;

  prev.classList.remove('active');
  document.querySelectorAll('.sdot').forEach((dot, i) =>
    dot.classList.toggle('on', i === index)
  );

  currentSlide = index;
  const el = document.getElementById(slides[currentSlide].id);
  el.classList.add('active');
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = 'kz 12s ease both';

  const eyeTxt = document.getElementById('ey-txt');
  const scCur  = document.getElementById('sc-cur');
  if (eyeTxt) eyeTxt.textContent = slides[currentSlide].eyebrow;
  if (scCur)  scCur.textContent  = currentSlide + 1;

  clearInterval(sliderTimer);
  sliderTimer = setInterval(nextSlide, 6000);
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

/* Iniciar slider solo si existe el banner en la página */
if (document.getElementById('s0')) {
  sliderTimer = setInterval(nextSlide, 6000);
}
