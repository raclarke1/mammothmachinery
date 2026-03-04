/* ===== MAMMOTH MACHINERY — SCRIPTS ===== */

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger the animation slightly for grid items
      const delay = entry.target.closest('.stats-grid, .equipment-grid, .why-grid, .locations-grid')
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
    
    // Ease out cubic
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

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsCounted) {
      statsCounted = true;
      statNumbers.forEach(num => animateCounter(num));
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = navbar.offsetHeight;
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
  
  // Simulate form submission (replace with actual endpoint)
  setTimeout(() => {
    btn.textContent = '✓ REQUEST SENT';
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

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + navbar.offsetHeight + 100;
  
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    
    if (link && scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach(a => a.style.color = '');
      link.style.color = '#F59E0B';
    }
  });
});
