/* ===== MAMMOTH MACHINERY — SCRIPTS v3 ===== */

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navbar && !navbar.classList.contains('scrolled')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile menu toggle
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navToggle) navToggle.classList.remove('active');
    if (navLinks) navLinks.classList.remove('active');
  });
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = entry.target.closest('.stats-grid, .equipment-grid, .why-grid, .locations-grid, .pricing-grid, .service-grid')
        ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100
        : 0;

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);

      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// Animated stat counters
const statNumbers = document.querySelectorAll('.stat-number');
let statsCounted = false;

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    if (target >= 1000) {
      el.textContent = current.toLocaleString();
    } else {
      el.textContent = current;
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const statsSection = document.getElementById('stats');
if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsCounted) {
        statsCounted = true;
        statNumbers.forEach(num => animateCounter(num));
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statsObserver.observe(statsSection);
}

// Smooth scroll for anchor links (only for same-page #anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Contact form handler
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;

  btn.textContent = 'SENDING...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'REQUEST SENT';
    btn.style.background = '#10B981';
    btn.style.borderColor = '#10B981';

    setTimeout(() => {
      form.reset();
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
    }, 3000);
  }, 1000);

  return false;
}

// Active nav link highlight on scroll (home page only)
const sections = document.querySelectorAll('section[id]');

if (sections.length > 0 && navbar) {
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + (navbar ? navbar.offsetHeight : 0) + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (link && scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-links a:not(.nav-cta):not(.nav-phone)').forEach(a => a.style.color = '');
        link.style.color = '#A53D2A';
      }
    });
  });
}

// Category nav active state for equipment list page
const categoryNav = document.querySelector('.category-nav');
if (categoryNav) {
  const categoryLinks = categoryNav.querySelectorAll('a');
  const categories = document.querySelectorAll('.equipment-category');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 160;

    categories.forEach(cat => {
      const top = cat.offsetTop;
      const height = cat.offsetHeight;
      const id = cat.getAttribute('id');
      const link = categoryNav.querySelector(`a[href="#${id}"]`);

      if (link) {
        if (scrollPos >= top && scrollPos < top + height) {
          categoryLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });
}
