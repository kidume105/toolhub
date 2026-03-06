
(function(){
  const nav = document.getElementById('navMount');
  if(nav){
    nav.innerHTML = `<div class="nav">
      <a class="brand" href="/index.html">
        <div class="logo"></div>
        <div><b>QuickTools</b><span>Fast browser tools for creators & devs</span></div>
      </a>
      <div class="navlinks">
        <a class="pill" href="/index.html">Tools</a>
        <a class="pill" href="/about.html">About</a>
        <a class="pill" href="/privacy.html">Privacy</a>
        <a class="pill" href="/contact.html">Contact</a>
      </div>
    </div>`;
  }
  const foot = document.getElementById('footerMount');
  if(foot){
    foot.innerHTML = `<footer>
      <span>© <span id="yy"></span> QuickTools</span>
      <span><a href="/privacy.html">Privacy</a> · <a href="/about.html">About</a> · <a href="/contact.html">Contact</a></span>
    </footer>`;
    foot.querySelector('#yy').textContent = new Date().getFullYear();
  }
})();
