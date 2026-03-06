
(function(){
  const t = document.getElementById('toast');
  window.toast = function(msg){
    if(!t) return;
    t.textContent = msg;
    t.style.display='block';
    clearTimeout(window.__tt);
    window.__tt = setTimeout(()=>t.style.display='none',2200);
  };

  const s = document.getElementById('toolSearch');
  if(s){
    const cards = Array.from(document.querySelectorAll('[data-tool-card]'));
    function filter(){
      const q=(s.value||'').trim().toLowerCase();
      cards.forEach(c=>{
        c.style.display=(c.getAttribute('data-hay')||'').toLowerCase().includes(q)?'':'none';
      });
    }
    s.addEventListener('input',filter);
    window.addEventListener('keydown',e=>{
      if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){
        e.preventDefault(); s.focus();
      }
    });
  }
  window.copyText = async function(v){
    try{ await navigator.clipboard.writeText(v); toast('✅ Copied!'); return true; }
    catch(e){ toast('⚠️ Copy failed'); return false; }
  }
})();
