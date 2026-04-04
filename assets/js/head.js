// favicon
(() => {
  const script = document.currentScript;
  const scriptUrl = script ? new URL(script.getAttribute('src'), document.baseURI) : null;
  const href = scriptUrl ? new URL('../favicon.svg', scriptUrl).toString() : 'assets/favicon.svg';
  let favicon = document.querySelector('link[rel="icon"]');

  if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    document.head.appendChild(favicon);
  }

  favicon.type = 'image/svg+xml';
  favicon.href = href;
})();
