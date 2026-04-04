// favicon
(() => {
  const href = '/assets/favicon.svg';
  let favicon = document.querySelector('link[rel="icon"]');

  if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    document.head.appendChild(favicon);
  }

  favicon.type = 'image/svg+xml';
  favicon.href = href;
})();
