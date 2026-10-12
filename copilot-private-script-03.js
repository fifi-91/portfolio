/* copilot-private.html — original script block 3; execution order preserved */
document.querySelectorAll('[data-chat]').forEach(e=>e.innerHTML=CP_chat('air',JSON.parse(e.dataset.chat)));
