// Ultra-fast smooth scroll helper
// - Respects user prefers-reduced-motion
// - Intercepts in-page anchor clicks and performs a short-duration smooth scroll (150ms)
// - Also exposes scrollToTop for other UI hooks if needed

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animateScrollTo(targetY, duration = 150) {
  const startY = window.scrollY || window.pageYOffset;
  const diff = targetY - startY;
  if (!diff || duration <= 0) {
    window.scrollTo(0, targetY);
    return;
  }

  let start;
  function step(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(t);
    window.scrollTo(0, Math.round(startY + diff * eased));
    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

function handleAnchorClick(e) {
  // Only handle in-page links
  const link = e.currentTarget;
  const href = link.getAttribute('href');
  if (!href || !href.startsWith('#')) return;

  const targetId = href === '#' ? 'top' : href.slice(1);
  let targetY = 0;
  if (targetId !== 'top') {
    const el = document.getElementById(targetId);
    if (!el) return; // let default behavior if target not found
    const rect = el.getBoundingClientRect();
    targetY = window.scrollY + rect.top;
  }

  e.preventDefault();
  // Don't animate for reduced-motion users
  if (prefersReducedMotion()) {
    window.scrollTo(0, targetY);
    history.pushState(null, '', href);
    return;
  }

  animateScrollTo(targetY, 150);
  // update URL hash without jumping
  try {
    history.pushState(null, '', href);
  } catch {
    // ignore
  }
}

export function installUltraFastSmoothScroll() {
  if (typeof window === 'undefined') return;
  if (prefersReducedMotion()) return; // respect user settings

  // Disable CSS smooth behavior to avoid conflicts; we'll animate in JS
  document.documentElement.style.scrollBehavior = 'auto';

  // Attach handler to all in-page anchor links
  function attach() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((a) => {
      // Avoid attaching multiple times
      if (a.__ufs_attached) return;
      a.addEventListener('click', handleAnchorClick);
      a.__ufs_attached = true;
    });
  }

  // Initial attach
  attach();
  // Re-attach on DOM changes (e.g., client-side navigation)
  const observer = new MutationObserver(() => attach());
  observer.observe(document.body, { childList: true, subtree: true });

  // Optional helper: expose a scrollToTop function
  window.ultraSmooth = {
    scrollToTop: (duration = 150) => animateScrollTo(0, duration),
  };
}

export default installUltraFastSmoothScroll;
