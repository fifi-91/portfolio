/* index.html — original script block 2; execution order preserved */
document.addEventListener('DOMContentLoaded',function(){
 const wrap=document.querySelector('.youtube-video-link');
 const trigger=wrap?.querySelector('.youtube-activate');
 if(!trigger)return;
 trigger.addEventListener('click',function(event){
  event.preventDefault(); event.stopPropagation();
  const frame=document.createElement('iframe');
  frame.className='youtube-player-frame';
  frame.title='Being a valuable designer in 2027';
  frame.src='https://www.youtube.com/embed/GvJyKsR9K4c?autoplay=1&rel=0&playsinline=1';
  frame.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  frame.setAttribute('allowfullscreen','');
  frame.referrerPolicy='strict-origin-when-cross-origin';
  wrap.appendChild(frame);
  wrap.classList.add('is-playing');
 });
});
