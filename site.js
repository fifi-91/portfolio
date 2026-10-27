(function(){
  var root=document.documentElement;
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  try{var saved=localStorage.getItem('theme');if(saved)root.setAttribute('data-theme',saved);}catch(e){}
  document.getElementById('theme').addEventListener('click',function(){
    var cur=root.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    var next=cur==='dark'?'light':'dark';root.setAttribute('data-theme',next);
    try{localStorage.setItem('theme',next);}catch(e){}
  });

  // Mobile menu
  var navwrap=document.getElementById('navwrap'),menu=document.getElementById('menu');
  menu.addEventListener('click',function(){var o=navwrap.classList.toggle('is-open');menu.setAttribute('aria-expanded',o);});
  navwrap.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',function(){navwrap.classList.remove('is-open');menu.setAttribute('aria-expanded','false');});});

  // Highlight the section in view
  var navLinks=[].slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  if('IntersectionObserver' in window){
    var spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){navLinks.forEach(function(a){if(a.getAttribute('href')==='#'+e.target.id)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});}});},{rootMargin:'-45% 0px -50% 0px'});
    navLinks.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(s)spy.observe(s);});
  }

  // Drawer: opens under the clicked card's row in Selected work
  var drawer=null,activeCard=null;
  function rowEnd(card){
    var top=card.offsetTop,last=card;
    [].forEach.call(grid.children,function(c){if(c.classList.contains('card')&&!c.hidden&&c.offsetTop===top)last=c;});
    return last;
  }
  function closeDrawer(instant){
    if(!drawer)return;
    var d=drawer,c=activeCard;drawer=null;activeCard=null;
    c.classList.remove('is-active');c.querySelector('.card-hit').setAttribute('aria-expanded','false');
    if(instant){d.remove();return;}
    d.classList.remove('is-open');setTimeout(function(){d.remove();},620);
  }
  function setupGallery(g,count,prev,next){
    var figs=[].slice.call(g.querySelectorAll('figure'));
    var cur=0;
    function update(){var best=1e9;figs.forEach(function(f,k){var d=Math.abs(f.offsetLeft-figs[0].offsetLeft-g.scrollLeft);if(d<best){best=d;cur=k;}});count.textContent=String(cur+1).padStart(2,'0')+' / '+String(figs.length).padStart(2,'0');}
    function go(k){k=Math.max(0,Math.min(figs.length-1,k));g.scrollTo({left:figs[k].offsetLeft-figs[0].offsetLeft,behavior:reduce?'auto':'smooth'});}
    g.addEventListener('scroll',function(){requestAnimationFrame(update);},{passive:true});
    prev.addEventListener('click',function(){go(cur-1);});
    next.addEventListener('click',function(){go(cur+1);});
    g.addEventListener('keydown',function(e){if(e.key==='ArrowRight')next.click();if(e.key==='ArrowLeft')prev.click();});
    var down=null;
    g.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down={x:e.clientX,s:g.scrollLeft};g.setPointerCapture(e.pointerId);g.classList.add('is-dragging');});
    g.addEventListener('pointermove',function(e){if(down)g.scrollLeft=down.s-(e.clientX-down.x);});
    function up(){if(!down)return;down=null;g.classList.remove('is-dragging');}
    g.addEventListener('pointerup',up);g.addEventListener('pointercancel',up);
  }
  function openDrawer(card){
    var tpl=document.getElementById(card.dataset.drawer);if(!tpl)return;
    closeDrawer(true);
    var d=document.createElement('div');d.className='drawer';d.setAttribute('role','region');
    d.innerHTML='<div class="drawer-inner"><div class="dr"></div></div>';
    var dr=d.querySelector('.dr');dr.appendChild(tpl.content.cloneNode(true));
    d.setAttribute('aria-label',dr.querySelector('h3').textContent);
    rowEnd(card).after(d);
    drawer=d;activeCard=card;card.classList.add('is-active');card.querySelector('.card-hit').setAttribute('aria-expanded','true');
    dr.querySelector('.dr-close').addEventListener('click',function(){var c=activeCard;closeDrawer();c.querySelector('.card-hit').focus();});
    setupGallery(dr.querySelector('.dr-gallery'),dr.querySelector('.dr-count'),dr.querySelector('.dr-prev'),dr.querySelector('.dr-next'));
    d.offsetHeight;d.classList.add('is-open');
    setTimeout(function(){d.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});},180);
  }
  [].forEach.call(document.querySelectorAll('.has-drawer'),function(card){
    card.querySelector('.card-hit').addEventListener('click',function(){if(activeCard===card)closeDrawer();else openDrawer(card);});
  });
  addEventListener('keydown',function(e){if(e.key==='Escape'&&drawer){var c=activeCard;closeDrawer();c.querySelector('.card-hit').focus();}});
  addEventListener('resize',function(){if(drawer){var end=rowEnd(activeCard);if(end.nextElementSibling!==drawer)end.after(drawer);}});

  // Work filter
  var grid=document.getElementById('grid'),filters=[].slice.call(document.querySelectorAll('.filter'));
  filters.forEach(function(b){b.addEventListener('click',function(){
    var f=b.dataset.filter;
    closeDrawer(true);
    filters.forEach(function(x){x.setAttribute('aria-pressed',x===b);});
    [].forEach.call(grid.children,function(c){c.hidden=f!=='all'&&c.dataset.cat!==f;});
  });});

  // Play videos only while on screen
  var vids=[].slice.call(document.querySelectorAll('video[data-autoplay]'));
  if(!reduce&&'IntersectionObserver' in window){
    var vo=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(e.isIntersecting){var p=v.play();if(p&&p.catch)p.catch(function(){});}else v.pause();});},{threshold:.25});
    vids.forEach(function(v){vo.observe(v);});
  }

  // Sound toggle on the property film
  var film=document.getElementById('film'),sound=document.getElementById('sound');
  if(film&&sound)sound.addEventListener('click',function(){
    film.muted=!film.muted;sound.setAttribute('aria-pressed',!film.muted);sound.textContent=film.muted?'Sound on':'Sound off';
    if(!film.muted){film.currentTime=0;var p=film.play();if(p&&p.catch)p.catch(function(){});}
  });

  // Testimonials: drifts on its own; drag, flick or use the arrows to move quickly
  var vp=document.getElementById('quotes'),track=document.getElementById('track');
  if(track){
  [].slice.call(track.querySelectorAll('.quote')).forEach(function(c){var d=c.cloneNode(true);d.setAttribute('aria-hidden','true');track.appendChild(d);});
  var x=0,v=0,half=1,drag=null,hover=false,last=performance.now(),SPEED=70;
  function measure(){half=track.scrollWidth/2+8;}
  measure();addEventListener('resize',measure);addEventListener('load',measure);
  function tick(t){
    var dt=Math.min((t-last)/1000,.05);last=t;
    if(!drag){
      if(Math.abs(v)>8){x+=v*dt;v*=Math.pow(.03,dt);}
      else{v=0;if(!hover&&!reduce)x-=SPEED*dt;}
    }
    x=x%half;if(x>0)x-=half;
    track.style.transform='translate3d('+x+'px,0,0)';
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  vp.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')hover=true;});
  vp.addEventListener('pointerleave',function(){hover=false;});
  vp.addEventListener('pointerdown',function(e){drag={x:e.clientX,t:performance.now()};v=0;vp.setPointerCapture(e.pointerId);vp.classList.add('is-dragging');});
  vp.addEventListener('pointermove',function(e){if(!drag)return;var now=performance.now(),dx=e.clientX-drag.x;x+=dx;v=dx/Math.max((now-drag.t)/1000,.008);drag={x:e.clientX,t:now};});
  function end(){if(!drag)return;if(performance.now()-drag.t>80)v=0;drag=null;vp.classList.remove('is-dragging');}
  vp.addEventListener('pointerup',end);vp.addEventListener('pointercancel',end);
  vp.addEventListener('wheel',function(e){if(Math.abs(e.deltaX)>Math.abs(e.deltaY)){e.preventDefault();x-=e.deltaX;}},{passive:false});
  document.getElementById('qprev').addEventListener('click',function(){v=1400;});
  document.getElementById('qnext').addEventListener('click',function(){v=-1400;});
  }

  // Forms: send to Web3Forms in the background and confirm on the page
  [].forEach.call(document.querySelectorAll('form[data-ajax]'),function(form){
    var status=form.querySelector('.form-status'),btn=form.querySelector('button[type=submit]');
    form.addEventListener('submit',function(e){
      e.preventDefault();
      if(window.PORTFOLIO_PREVIEW){status.textContent='Preview only: this form sends on the live site.';return;}
      btn.disabled=true;status.textContent='Sending…';
      fetch(form.action,{method:'POST',headers:{Accept:'application/json'},body:new FormData(form)})
        .then(function(r){return r.json();})
        .then(function(d){if(d.success){form.reset();status.textContent=form.dataset.success;}else throw 0;})
        .catch(function(){status.textContent='That didn’t send. Please try again, or message me on LinkedIn.';})
        .then(function(){btn.disabled=false;});
    });
  });
})();
