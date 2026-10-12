/* property-tech-public.html — original script block 3; execution order preserved */
document.addEventListener('DOMContentLoaded',function(){
const header=document.querySelector('.site-header'),button=header?.querySelector('.menu-toggle'),links=header?.querySelector('.nav-links');
if(!button||!links)return;
button.addEventListener('click',function(){const open=links.classList.toggle('open');header.classList.toggle('menu-open',open);button.setAttribute('aria-expanded',String(open));});
});
