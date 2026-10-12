/* copilot-public.html — original script block 3; execution order preserved */
(function(){const t=document.getElementById('menuToggle'),m=document.getElementById('mobileMenu'),c=document.getElementById('menuClose');t&&t.addEventListener('click',()=>m.classList.add('active'));c&&c.addEventListener('click',()=>m.classList.remove('active'));})();
(function(){const i=document.getElementById('password-input'),b=document.getElementById('submit-btn'),e=document.getElementById('error-message');
i.addEventListener('input',()=>{b.disabled=!i.value;e.textContent='';});
function go(){if(i.value==="agileakrofi21")location.href="copilot-private.html";else e.textContent="Incorrect password";}
b.addEventListener('click',go);i.addEventListener('keypress',x=>{if(x.key==='Enter')go();});})();
