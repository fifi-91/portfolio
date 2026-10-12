/* index.html — original script block 1; execution order preserved */
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.links').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false')}));
