// ============================================================
// TOBIRAIQ — CORE ENGINE
// Handles: cursor, particles, scroll, reveal, toast, nav
// DO NOT MODIFY
// ============================================================

// ── Cursor ───────────────────────────────────────────────
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');

if (cursor && cursorRing) {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animateRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    cursorRing.style.left = rx + 'px';
    cursorRing.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  document.addEventListener('mouseover', e => {
    if (e.target.matches('a,button,[data-hover]')) {
      cursor.classList.add('grow');
      cursorRing.classList.add('grow');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.matches('a,button,[data-hover]')) {
      cursor.classList.remove('grow');
      cursorRing.classList.remove('grow');
    }
  });
}

// ── Particles ────────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); });

  function Particle() {
    this.reset = function() {
      this.x     = Math.random() * W;
      this.y     = Math.random() * H;
      this.r     = Math.random() * 1.8 + 0.3;
      this.vx    = (Math.random() - 0.5) * 0.35;
      this.vy    = (Math.random() - 0.5) * 0.35;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '#F9A8D4' : '#831843';
    };
    this.reset();
  }

  for (let i = 0; i < 100; i++) {
    const p = new Particle(); particles.push(p);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const len = particles.length;

    for (let i = 0; i < len; i++) {
      const p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }

    // Draw connections
    ctx.globalAlpha = 1;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          ctx.beginPath();
          ctx.strokeStyle  = '#831843';
          ctx.globalAlpha  = (1 - dist / 90) * 0.12;
          ctx.lineWidth    = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── Scroll Progress ──────────────────────────────────────
(function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

// ── Navbar Scroll ────────────────────────────────────────
(function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile hamburger
  const hamburger = document.getElementById('hamburger');
  const menu      = document.getElementById('nav-menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.remove('open'));
    });
  }
})();

// ── Reveal on Scroll ─────────────────────────────────────
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => observer.observe(el));
})();

// ── Toast ─────────────────────────────────────────────────
function showToast(message, duration = 3000) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ── Render Navigation ─────────────────────────────────────
function renderNav() {
  const menu = document.getElementById('nav-menu');
  if (!menu || typeof SITE_CONFIG === 'undefined') return;

  const links = [
    { label: 'Courses',   href: 'courses.html'   },
    { label: 'Resources', href: 'resources.html'  },
    { label: 'About',     href: 'about.html'      },
    { label: 'Contact',   href: 'contact.html'    },
  ];

  menu.innerHTML = links.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('') +
  `<a href="${SITE_CONFIG.beehiiv}" class="nav-cta" target="_blank">Join Newsletter</a>`;
}

// ── Render Footer ─────────────────────────────────────────
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer || typeof SITE_CONFIG === 'undefined') return;

  footer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo">
          ${toriiSVG(28)}
          <span class="nav-logo-text">Tobira<em>IQ</em></span>
        </a>
        <p>${SITE_CONFIG.tagline}.<br>Premium resources for every learner worldwide.</p>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="courses.html">All Courses</a></li>
          <li><a href="resources.html">Free Resources</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="${SITE_CONFIG.instagram}" target="_blank">Instagram</a></li>
          <li><a href="${SITE_CONFIG.youtube}" target="_blank">YouTube</a></li>
          <li><a href="${SITE_CONFIG.pinterest}" target="_blank">Pinterest</a></li>
          <li><a href="${SITE_CONFIG.linkedin}" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="${SITE_CONFIG.beehiiv}" target="_blank">Newsletter</a></li>
          <li><a href="${SITE_CONFIG.gumroad}" target="_blank">Gumroad Store</a></li>
          <li><a href="${SITE_CONFIG.linktree}" target="_blank">Linktree</a></li>
          <li><a href="mailto:${SITE_CONFIG.email}">Email Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} TobiraIQ. All rights reserved.</span>
      <span>Your gateway to smart learning 🚪</span>
    </div>
  `;
}

// ── Torii SVG Helper ──────────────────────────────────────
function toriiSVG(size = 34) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 38 38" fill="none">
    <rect x="3" y="5" width="32" height="7" rx="3.5" fill="#F9A8D4"/>
    <rect x="7" y="12" width="24" height="5" rx="2.5" fill="#F9A8D4" opacity="0.55"/>
    <rect x="8"  y="17" width="8" height="18" rx="4" fill="#F9A8D4"/>
    <rect x="22" y="17" width="8" height="18" rx="4" fill="#F9A8D4"/>
    <rect x="9"  y="26" width="20" height="3" rx="1.5" fill="#F9A8D4" opacity="0.4"/>
    <circle cx="12" cy="17" r="2.5" fill="#F9A8D4" opacity="0.6"/>
    <circle cx="26" cy="17" r="2.5" fill="#F9A8D4" opacity="0.6"/>
  </svg>`;
}

// ── Badge Helper ──────────────────────────────────────────
function getBadge(badge) {
  const map = {
    'free':         ['badge-free',    'FREE'],
    'new':          ['badge-new',     'NEW'],
    'popular':      ['badge-popular', 'POPULAR'],
    'coming-soon':  ['badge-soon',    'COMING SOON'],
    'paid':         ['badge-paid',    'PREMIUM'],
  };
  if (!badge || !map[badge]) return '';
  const [cls, label] = map[badge];
  return `<span class="badge ${cls}">${label}</span>`;
}

// ── Price Display Helper ──────────────────────────────────
function priceDisplay(price, originalPrice) {
  if (price === 'Free' || price === '0') {
    return `<span class="price-free">Free</span>`;
  }
  let html = `<span class="price-current">${price}</span>`;
  if (originalPrice) {
    html += ` <span class="price-original">${originalPrice}</span>`;
  }
  return html;
}

// ── Init on DOM Ready ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});