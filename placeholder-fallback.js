/* preview-only fallback: swaps any 404 image to the placeholder.
   Harmless in production — only fires on error events. */
(function(){
  const placeholder = './images/placeholder.svg';
  document.addEventListener('error', function(e){
    const t = e.target;
    if (!t || t.tagName !== 'IMG') return;
    if (t.dataset.placeholdered) return;
    t.dataset.placeholdered = '1';
    t.src = placeholder;
  }, true);
})();
