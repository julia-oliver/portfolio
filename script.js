const tabMap = {
  'tab-about':    'overlay-about',
  'tab-projects': 'overlay-projects',
  'tab-certs':    'overlay-certs',
  'tab-socials':  'overlay-socials'
};

function closeOverlay() {
  document.querySelectorAll('.overlay').forEach(o => o.classList.remove('visible'));
  document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
}

document.querySelectorAll('.tab-item').forEach(tab => {
  tab.addEventListener('click', () => {
    const tabClass = Array.from(tab.classList).find(c => tabMap[c]);
    const overlayId = tabMap[tabClass];
    const overlay = document.getElementById(overlayId);
    const isAlreadyOpen = overlay.classList.contains('visible');

    closeOverlay();

    if (!isAlreadyOpen) {
      overlay.classList.add('visible');
      tab.classList.add('active');
    }
  });
});

document.querySelectorAll('.overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeOverlay();
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOverlay();
});