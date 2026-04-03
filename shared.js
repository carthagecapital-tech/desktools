/* ============================================
   DeskTools — shared.js
   Injects: nav, footer, modal, toast, dropdown
   ============================================ */

(function () {
  var isHome = location.pathname === '/' || location.pathname === '/index.html';

  /* ---------- NAV ---------- */
  var navHTML =
    '<nav class="dt-nav">' +
    '  <a href="/" class="nav-logo">desk<span>tools</span>.dev</a>' +
    '  <div class="nav-right">' +
    (isHome
      ? '    <div class="nav-search" id="navSearch">' +
        '      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>' +
        '      <input id="searchInput" type="text" placeholder="Search tools..." autocomplete="off"/>' +
        '    </div>'
      : '    <button class="nav-search-btn" onclick="openPalette()" title="Search all tools">' +
        '      <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>' +
        '      <span class="search-btn-text">Search tools</span>' +
        '      <kbd class="search-btn-kbd">/</kbd>' +
        '    </button>') +
    '    <div class="nav-dropdown" id="catDropdown">' +
    '      <button class="nav-dropdown-btn" id="catBtn">' +
    '        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>' +
    '        Categories' +
    '        <svg class="chev" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>' +
    '      </button>' +
    '      <div class="dropdown-menu" id="catMenu">' +
    '        <a class="dropdown-item" href="/all-tools" style="margin-bottom:.25rem">' +
    '          <span class="di-icon"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg></span>' +
    '          <span class="di-text"><span class="di-name">All Tools</span><span class="di-sub">Browse the full collection</span></span>' +
    '          <span class="di-count">53</span>' +
    '        </a>' +
    '        <div class="dropdown-divider"></div>' +
    '        <span class="dropdown-label">Browse by audience</span>' +
    '        <a class="dropdown-item" href="/developers">' +
    '          <span class="di-icon"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>' +
    '          <span class="di-text"><span class="di-name">Developers</span><span class="di-sub">Formatters, converters, testers</span></span>' +
    '          <span class="di-count">25</span>' +
    '        </a>' +
    '        <a class="dropdown-item" href="/freelancers">' +
    '          <span class="di-icon"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/></svg></span>' +
    '          <span class="di-text"><span class="di-name">Freelancers</span><span class="di-sub">Design &amp; creative tools</span></span>' +
    '          <span class="di-count">16</span>' +
    '        </a>' +
    '        <a class="dropdown-item" href="/business">' +
    '          <span class="di-icon"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg></span>' +
    '          <span class="di-text"><span class="di-name">Business</span><span class="di-sub">Productivity &amp; comms</span></span>' +
    '          <span class="di-count">10</span>' +
    '        </a>' +
    '        <div class="dropdown-divider"></div>' +
    '        <a class="dropdown-item" href="/security">' +
    '          <span class="di-icon"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>' +
    '          <span class="di-text"><span class="di-name">Security &amp; Privacy</span><span class="di-sub">100% client-side</span></span>' +
    '          <span class="di-count">8</span>' +
    '        </a>' +
    '      </div>' +
    '    </div>' +
    '    <button class="btn-request" onclick="openModal()">Request a Tool</button>' +
    '  </div>' +
    '</nav>';

  /* ---------- FOOTER ---------- */
  var footerHTML = '<footer>DeskTools &mdash; built for people who ship. &nbsp;&middot;&nbsp; <a href="https://desktools.dev">desktools.dev</a></footer>';

  /* ---------- MODAL ---------- */
  var modalHTML =
    '<div class="modal-overlay" id="modalOverlay" onclick="if(event.target===this)closeModal()">' +
    '  <div class="modal">' +
    '    <button class="modal-close" onclick="closeModal()">&#x2715;</button>' +
    '    <div id="modalForm">' +
    '      <h2>Request a Tool</h2>' +
    '      <p>What tool would save you time? We build the most-requested ones first.</p>' +
    '      <div class="modal-field"><label>Tool idea</label><textarea id="toolIdea" rows="3" placeholder="e.g. SVG optimizer, cron expression builder..."></textarea></div>' +
    '      <div class="modal-field"><label>Your email <span style="opacity:.5">(optional)</span></label><input type="email" id="userEmail" placeholder="you@example.com"/></div>' +
    '      <button class="modal-submit" onclick="submitRequest()">Submit Request</button>' +
    '    </div>' +
    '    <div class="modal-success" id="modalSuccess">' +
    '      <div class="check">&#x2705;</div><h3>Request received!</h3>' +
    '      <p>We\'ll prioritize the most-requested tools.</p>' +
    '    </div>' +
    '  </div>' +
    '</div>';

  /* ---------- TOAST ---------- */
  var toastHTML = '<div class="toast" id="toast">Copied!</div>';

  /* ---------- INJECT ---------- */
  // Always inject shared CSS for nav, dropdown, modal, footer, favorites
  var sharedStyle = document.createElement('style');
  sharedStyle.textContent =
    /* Nav */
    'nav,.dt-nav{position:sticky;top:0;z-index:100;background:rgba(10,10,15,0.92);backdrop-filter:blur(14px);border-bottom:1px solid var(--border,rgba(255,255,255,0.07));padding:0 2rem;display:flex;align-items:center;justify-content:space-between;height:58px}' +
    '.nav-logo{font-family:"JetBrains Mono",monospace;font-weight:700;font-size:1.05rem;color:var(--text,#e8e8f0);text-decoration:none;letter-spacing:-0.02em}' +
    '.nav-logo span{color:var(--accent,#00d4aa)}' +
    '.nav-right{display:flex;align-items:center;gap:.75rem}' +
    '.btn-request{background:var(--accent,#00d4aa);color:#0a0a0f;font-family:"Outfit",sans-serif;font-weight:600;font-size:.85rem;border:none;border-radius:8px;padding:.45rem 1rem;cursor:pointer;transition:background .2s;white-space:nowrap}' +
    '.btn-request:hover{background:#00b894}' +
    /* Search */
    '.nav-search{display:flex;align-items:center;gap:.5rem;background:var(--bg3,#14141e);border:1px solid var(--border,rgba(255,255,255,0.07));border-radius:8px;padding:.4rem .75rem;width:190px;transition:border-color .2s,width .3s}' +
    '.nav-search:focus-within{border-color:var(--accent,#00d4aa);width:230px}' +
    '.nav-search svg{color:var(--muted,#6b6b80);flex-shrink:0}' +
    '.nav-search input{background:none;border:none;outline:none;color:var(--text,#e8e8f0);font-family:"Outfit",sans-serif;font-size:.85rem;width:100%}' +
    '.nav-search input::placeholder{color:var(--muted,#6b6b80)}' +
    /* Dropdown */
    '.nav-dropdown{position:relative}' +
    '.nav-dropdown-btn{display:flex;align-items:center;gap:.5rem;background:var(--bg3,#14141e);border:1px solid var(--border,rgba(255,255,255,0.07));border-radius:8px;color:var(--text,#e8e8f0);font-family:"Outfit",sans-serif;font-size:.85rem;font-weight:500;cursor:pointer;padding:.45rem .9rem;transition:border-color .2s,background .2s;white-space:nowrap}' +
    '.nav-dropdown-btn:hover{border-color:rgba(0,212,170,0.3)}' +
    '.nav-dropdown-btn.open{border-color:var(--accent,#00d4aa);background:rgba(0,212,170,0.06)}' +
    '.nav-dropdown-btn .chev{transition:transform .2s;color:var(--muted,#6b6b80)}' +
    '.nav-dropdown-btn.open .chev{transform:rotate(180deg)}' +
    '.dropdown-menu{position:absolute;top:calc(100% + 10px);right:0;background:var(--bg2,#0f0f16);border:1px solid var(--border,rgba(255,255,255,0.07));border-radius:12px;padding:.5rem;min-width:230px;opacity:0;pointer-events:none;transform:translateY(-8px) scale(.98);transform-origin:top right;transition:opacity .18s,transform .18s;z-index:200;box-shadow:0 20px 60px rgba(0,0,0,.5)}' +
    '.dropdown-menu.open{opacity:1;pointer-events:all;transform:translateY(0) scale(1)}' +
    '.dropdown-label{font-size:.68rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--muted,#6b6b80);padding:.4rem .75rem .2rem;display:block}' +
    '.dropdown-item{display:flex;align-items:center;gap:.7rem;padding:.6rem .75rem;border-radius:8px;text-decoration:none;color:var(--text,#e8e8f0);font-size:.88rem;font-weight:500;transition:background .15s}' +
    '.dropdown-item:hover{background:var(--bg3,#14141e)}' +
    '.dropdown-item:hover .di-icon{border-color:rgba(0,212,170,0.4);background:rgba(0,212,170,0.12)}' +
    '.di-icon{width:30px;height:30px;background:rgba(0,212,170,0.07);border:1px solid rgba(0,212,170,0.12);border-radius:7px;display:flex;align-items:center;justify-content:center;color:var(--accent,#00d4aa);flex-shrink:0;transition:background .15s,border-color .15s}' +
    '.di-text{flex:1}.di-name{display:block;line-height:1.2}.di-sub{display:block;font-size:.72rem;color:var(--muted,#6b6b80);font-weight:400}' +
    '.di-count{font-family:"JetBrains Mono",monospace;font-size:.7rem;background:rgba(0,212,170,0.1);color:var(--accent,#00d4aa);padding:.1rem .4rem;border-radius:4px;white-space:nowrap}' +
    '.dropdown-divider{height:1px;background:var(--border,rgba(255,255,255,0.07));margin:.3rem .5rem}' +
    /* Modal */
    '.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(4px);z-index:300;display:none;align-items:center;justify-content:center;padding:1rem}' +
    '.modal-overlay.open{display:flex}' +
    '.modal{background:var(--bg2,#0f0f16);border:1px solid var(--border,rgba(255,255,255,0.07));border-radius:16px;padding:2rem;width:100%;max-width:420px;position:relative;animation:dtModalIn .2s ease}' +
    '@keyframes dtModalIn{from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:none}}' +
    '.modal-close{position:absolute;top:1rem;right:1rem;background:none;border:none;color:var(--muted,#6b6b80);cursor:pointer;font-size:1.2rem}' +
    '.modal h2{font-size:1.2rem;font-weight:600;margin-bottom:.4rem}' +
    '.modal p{font-size:.85rem;color:var(--muted,#6b6b80);margin-bottom:1.5rem}' +
    '.modal-field{margin-bottom:1rem}' +
    '.modal-field label{font-size:.8rem;font-weight:500;color:var(--muted,#6b6b80);display:block;margin-bottom:.4rem}' +
    '.modal-field input,.modal-field textarea{width:100%;background:var(--bg3,#14141e);border:1px solid var(--border,rgba(255,255,255,0.07));border-radius:8px;color:var(--text,#e8e8f0);font-family:"Outfit",sans-serif;font-size:.9rem;padding:.6rem .85rem;outline:none;transition:border-color .2s;resize:vertical}' +
    '.modal-field input:focus,.modal-field textarea:focus{border-color:var(--accent,#00d4aa)}' +
    '.modal-submit{width:100%;background:var(--accent,#00d4aa);color:#0a0a0f;font-family:"Outfit",sans-serif;font-weight:600;font-size:.95rem;border:none;border-radius:8px;padding:.7rem;cursor:pointer;transition:background .2s;margin-top:.5rem}' +
    '.modal-submit:hover{background:#00b894}' +
    '.modal-success{text-align:center;padding:1rem 0;display:none}' +
    '.modal-success.show{display:block}' +
    '.modal-success .check{font-size:2rem;margin-bottom:.5rem}' +
    /* Footer */
    'footer{text-align:center;padding:2rem;border-top:1px solid var(--border,rgba(255,255,255,0.07));font-size:.8rem;color:var(--muted,#6b6b80)}' +
    'footer a{color:var(--accent,#00d4aa);text-decoration:none}' +
    /* Toast */
    '.toast{position:fixed;bottom:24px;right:24px;background:var(--card-bg,#111118);border:1px solid var(--accent,#00d4aa);color:var(--accent,#00d4aa);padding:12px 20px;border-radius:8px;font-family:"JetBrains Mono",monospace;font-size:.8rem;transform:translateY(100px);opacity:0;transition:all .3s ease;z-index:1000}' +
    '.toast.show{transform:translateY(0);opacity:1}' +
    /* Favorites */
    '.fav-btn{position:absolute;top:12px;right:12px;background:none;border:none;color:var(--muted,#6b6b80);cursor:pointer;padding:4px;border-radius:6px;transition:color .2s,transform .15s;z-index:2;line-height:1}' +
    '.fav-btn:hover{color:var(--accent,#00d4aa);transform:scale(1.15)}' +
    '.fav-btn.active{color:#ff6b8a}.fav-btn.active:hover{color:#ff4d73}' +
    '.fav-btn-page{display:inline-flex;align-items:center;gap:6px;background:none;border:1px solid var(--border,rgba(255,255,255,0.07));color:var(--muted,#6b6b80);cursor:pointer;padding:6px 14px;border-radius:8px;font-family:"Outfit",sans-serif;font-size:.82rem;font-weight:500;transition:all .2s;margin-top:12px}' +
    '.fav-btn-page:hover{border-color:#ff6b8a;color:#ff6b8a}' +
    '.fav-btn-page.active{border-color:#ff6b8a;color:#ff6b8a}' +
    /* Deep dive accordion */
    '.deep-dive{max-width:900px;margin:2.5rem auto 0;padding:0 40px}' +
    '.deep-dive-toggle{display:flex;align-items:center;gap:.6rem;background:none;border:none;border-top:1px solid var(--border,rgba(255,255,255,0.07));color:var(--text,#e8e8f0);font-family:"Outfit",sans-serif;font-size:.95rem;font-weight:500;cursor:pointer;padding:1.25rem 0 .75rem;transition:color .2s;width:100%;text-align:left}' +
    '.deep-dive-toggle:hover{color:var(--accent,#00d4aa)}' +
    '.deep-dive-toggle .dd-arrow{transition:transform .2s;font-size:.75rem;color:var(--accent,#00d4aa)}' +
    '.deep-dive-toggle.open .dd-arrow{transform:rotate(90deg)}' +
    '.deep-dive-body{max-height:0;overflow:hidden;transition:max-height .3s ease}' +
    '.deep-dive-body.open{max-height:2000px}' +
    '.deep-dive-content{padding:1rem 0 2rem;font-size:.88rem;color:var(--muted,#6b6b80);line-height:1.75}' +
    '.deep-dive-content p{margin-bottom:1rem}' +
    '.deep-dive-content strong{color:var(--text,#e8e8f0);font-weight:600}' +
    '.deep-dive-content code{font-family:"JetBrains Mono",monospace;background:var(--bg3,#14141e);padding:.1rem .35rem;border-radius:4px;font-size:.82rem;color:var(--text,#e8e8f0)}' +
    '@media(max-width:768px){.deep-dive{padding:0 20px}}' +
    /* Cmd+K Palette */
    '.tool-breadcrumb{display:flex;align-items:center;gap:.4rem;padding:.75rem 2rem;font-size:.82rem;flex-wrap:wrap}' +
    '.tool-breadcrumb a{color:var(--muted,#6b6b80);text-decoration:none;transition:color .2s}' +
    '.tool-breadcrumb a:hover{color:var(--accent,#00d4aa)}' +
    '.bc-sep{color:var(--muted,#6b6b80);opacity:.4;font-size:.7rem}' +
    '.bc-current{color:var(--text,#e8e8f0);font-weight:500}' +
    '.nav-search-btn{display:flex;align-items:center;gap:.5rem;background:var(--bg3,#14141e);border:1px solid var(--border,rgba(255,255,255,0.07));border-radius:8px;color:var(--muted,#6b6b80);font-family:"Outfit",sans-serif;font-size:.85rem;padding:.4rem .85rem;cursor:pointer;transition:border-color .2s,color .2s;white-space:nowrap}' +
    '.nav-search-btn:hover{border-color:var(--accent,#00d4aa);color:var(--text,#e8e8f0)}' +
    '.nav-search-btn svg{flex-shrink:0}' +
    '.search-btn-text{font-weight:500}' +
    '.search-btn-kbd{font-family:"JetBrains Mono",monospace;font-size:.65rem;background:rgba(255,255,255,0.06);border:1px solid var(--border,rgba(255,255,255,0.07));padding:.1rem .35rem;border-radius:4px;color:var(--muted,#6b6b80);line-height:1}' +
    '.cmdk-overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(6px);z-index:500;display:none;align-items:flex-start;justify-content:center;padding:15vh 1rem 2rem}' +
    '.cmdk-overlay.open{display:flex}' +
    '.cmdk-box{background:var(--bg2,#0f0f16);border:1px solid var(--border,rgba(255,255,255,0.07));border-radius:14px;width:100%;max-width:520px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.6);animation:cmdkIn .15s ease}' +
    '@keyframes cmdkIn{from{opacity:0;transform:translateY(-8px) scale(.98)}to{opacity:1;transform:none}}' +
    '.cmdk-input-wrap{display:flex;align-items:center;gap:.6rem;padding:.85rem 1.1rem;border-bottom:1px solid var(--border,rgba(255,255,255,0.07))}' +
    '.cmdk-input-wrap svg{color:var(--muted,#6b6b80);flex-shrink:0}' +
    '.cmdk-input{background:none;border:none;outline:none;color:var(--text,#e8e8f0);font-family:"Outfit",sans-serif;font-size:1rem;width:100%}' +
    '.cmdk-input::placeholder{color:var(--muted,#6b6b80)}' +
    '.cmdk-hint{font-family:"JetBrains Mono",monospace;font-size:.65rem;color:var(--muted,#6b6b80);background:var(--bg3,#14141e);padding:.15rem .4rem;border-radius:4px;white-space:nowrap}' +
    '.cmdk-list{max-height:340px;overflow-y:auto;padding:.4rem}' +
    '.cmdk-list::-webkit-scrollbar{width:4px}.cmdk-list::-webkit-scrollbar-thumb{background:var(--border,rgba(255,255,255,0.07));border-radius:2px}' +
    '.cmdk-item{display:flex;align-items:center;gap:.75rem;padding:.65rem .85rem;border-radius:8px;text-decoration:none;color:var(--text,#e8e8f0);transition:background .1s;cursor:pointer}' +
    '.cmdk-item:hover,.cmdk-item.active{background:var(--bg3,#14141e)}' +
    '.cmdk-item-icon{font-family:"JetBrains Mono",monospace;font-size:.75rem;font-weight:700;color:var(--accent,#00d4aa);background:rgba(0,212,170,0.08);border:1px solid rgba(0,212,170,0.15);padding:.25rem .45rem;border-radius:6px;min-width:36px;text-align:center;flex-shrink:0}' +
    '.cmdk-item-text{flex:1;min-width:0}' +
    '.cmdk-item-name{font-size:.9rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
    '.cmdk-item-desc{font-size:.75rem;color:var(--muted,#6b6b80);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
    '.cmdk-item-tag{font-family:"JetBrains Mono",monospace;font-size:.62rem;text-transform:uppercase;letter-spacing:.04em;color:var(--muted,#6b6b80);border:1px solid var(--border,rgba(255,255,255,0.07));padding:.1rem .35rem;border-radius:3px;flex-shrink:0}' +
    '.cmdk-empty{text-align:center;padding:2rem 1rem;color:var(--muted,#6b6b80);font-size:.88rem}' +
    '.cmdk-footer{display:flex;align-items:center;gap:1rem;padding:.6rem 1.1rem;border-top:1px solid var(--border,rgba(255,255,255,0.07));font-size:.7rem;color:var(--muted,#6b6b80)}' +
    '.cmdk-footer kbd{font-family:"JetBrains Mono",monospace;background:var(--bg3,#14141e);padding:.1rem .35rem;border-radius:3px;font-size:.65rem;border:1px solid var(--border,rgba(255,255,255,0.07))}' +
    /* Mobile */
    '@media(max-width:600px){nav,.dt-nav{padding:0 1rem;height:52px}.nav-search{width:140px}.nav-search:focus-within{width:170px}.btn-request{font-size:.78rem;padding:.4rem .75rem}.search-btn-text{display:none}.nav-search-btn{padding:.4rem .6rem}.search-btn-kbd{display:none}}';
  document.head.appendChild(sharedStyle);

  // Remove existing nav
  var oldNav = document.querySelector('nav');
  if (oldNav) oldNav.remove();

  // Inject nav at top of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Replace existing footer or append
  var oldFooter = document.querySelector('footer');
  if (oldFooter) {
    oldFooter.outerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // Replace existing modal or append
  var oldModal = document.querySelector('.modal-overlay');
  if (oldModal) {
    oldModal.outerHTML = modalHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  // Inject toast if missing
  if (!document.getElementById('toast')) {
    document.body.insertAdjacentHTML('beforeend', toastHTML);
  }

  /* ---------- DROPDOWN LOGIC ---------- */
  var catBtn = document.getElementById('catBtn');
  var catMenu = document.getElementById('catMenu');

  if (catBtn && catMenu) {
    catBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = catMenu.classList.contains('open');
      catMenu.classList.toggle('open', !isOpen);
      catBtn.classList.toggle('open', !isOpen);
    });

    document.addEventListener('click', function (e) {
      if (!catBtn.contains(e.target) && !catMenu.contains(e.target)) {
        catMenu.classList.remove('open');
        catBtn.classList.remove('open');
      }
    });
  }

  /* ---------- MODAL LOGIC ---------- */
  window.openModal = function () {
    document.getElementById('modalOverlay').classList.add('open');
  };

  window.closeModal = function () {
    var overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('open');
    document.getElementById('modalForm').style.display = '';
    document.getElementById('modalSuccess').classList.remove('show');
    var idea = document.getElementById('toolIdea');
    var email = document.getElementById('userEmail');
    if (idea) idea.value = '';
    if (email) email.value = '';
  };

  window.submitRequest = async function () {
    var idea = document.getElementById('toolIdea').value.trim();
    if (!idea) { document.getElementById('toolIdea').focus(); return; }
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '07e32825-a0a6-4e25-850a-693ee7512388',
          subject: 'DeskTools Tool Request',
          tool_idea: idea,
          email: document.getElementById('userEmail').value || 'Not provided'
        })
      });
    } catch (e) { }
    document.getElementById('modalForm').style.display = 'none';
    document.getElementById('modalSuccess').classList.add('show');
  };

  /* ---------- SMART BACK LINK ---------- */
  // Use browser history instead of always going to /
  document.querySelectorAll('.back-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.history.length > 1) {
        e.preventDefault();
        window.history.back();
      }
      // If no history (direct landing), the href="/" fallback works naturally
    });
  });

  /* ---------- CATEGORY BREADCRUMB ---------- */
  var TAG_TO_CAT = {
    'Dev': { name: 'Developers', url: '/developers' },
    'Design': { name: 'Freelancers & Designers', url: '/freelancers' },
    'Text': { name: 'Freelancers & Designers', url: '/freelancers' },
    'Biz': { name: 'Business & Teams', url: '/business' },
    'Prod': { name: 'Business & Teams', url: '/business' },
    'Util': { name: 'Business & Teams', url: '/business' },
    'Sec': { name: 'Security & Privacy', url: '/security' },
  };

  if (!isHome) {
    var pageSlug = location.pathname.replace(/^\//, '').replace(/\.html$/, '');
    var catPages = ['developers', 'freelancers', 'business', 'security', 'all-tools'];
    if (catPages.indexOf(pageSlug) === -1 && pageSlug) {
      // Find this tool in TOOLS_DATA
      var toolData = null;
      for (var ti = 0; ti < TOOLS_DATA.length; ti++) {
        if (TOOLS_DATA[ti].url === '/' + pageSlug) { toolData = TOOLS_DATA[ti]; break; }
      }
      if (toolData && TAG_TO_CAT[toolData.tag]) {
        var cat = TAG_TO_CAT[toolData.tag];
        var backLink = document.querySelector('.back-link');
        if (backLink) {
          var breadcrumb = document.createElement('div');
          breadcrumb.className = 'tool-breadcrumb';
          breadcrumb.innerHTML = '<a href="/">Tools</a> <span class="bc-sep">/</span> <a href="' + cat.url + '">' + cat.name + '</a> <span class="bc-sep">/</span> <span class="bc-current">' + toolData.name + '</span>';
          backLink.parentNode.insertBefore(breadcrumb, backLink);
          backLink.style.display = 'none';
        }
      }
    }
  }

  /* ---------- FAVORITES SYSTEM ---------- */
  var FAVS_KEY = 'desktools_favs';

  function getFavs() {
    try { return JSON.parse(localStorage.getItem(FAVS_KEY)) || []; }
    catch (e) { return []; }
  }

  function saveFavs(favs) {
    localStorage.setItem(FAVS_KEY, JSON.stringify(favs));
  }

  function isFav(slug) {
    return getFavs().indexOf(slug) !== -1;
  }

  function toggleFav(slug) {
    var favs = getFavs();
    var idx = favs.indexOf(slug);
    if (idx === -1) { favs.push(slug); } else { favs.splice(idx, 1); }
    saveFavs(favs);
    return idx === -1; // returns true if just added
  }

  // Heart SVG
  var heartEmpty = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
  var heartFull = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';

  // Add fav buttons to tool cards (homepage + category pages)
  document.querySelectorAll('.tool-card[href]').forEach(function (card) {
    var href = card.getAttribute('href');
    var slug = href.replace(/^\//, '');
    if (!slug) return;

    var btn = document.createElement('button');
    btn.className = 'fav-btn' + (isFav(slug) ? ' active' : '');
    btn.innerHTML = isFav(slug) ? heartFull : heartEmpty;
    btn.title = isFav(slug) ? 'Remove from favorites' : 'Add to favorites';
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var added = toggleFav(slug);
      btn.className = 'fav-btn' + (added ? ' active' : '');
      btn.innerHTML = added ? heartFull : heartEmpty;
      btn.title = added ? 'Remove from favorites' : 'Add to favorites';
      showToast(added ? 'Added to favorites' : 'Removed from favorites');
      // Update favorites section on homepage
      if (isHome && typeof renderFavoritesSection === 'function') renderFavoritesSection();
    });
    card.style.position = 'relative';
    card.appendChild(btn);
  });

  // Add fav button to tool page header
  var toolHeader = document.querySelector('.tool-page-header h1') || document.querySelector('.page h1');
  if (toolHeader && !isHome) {
    var pageSlug = location.pathname.replace(/^\//, '').replace(/\.html$/, '');
    var catPages = ['developers', 'freelancers', 'business', 'security'];
    if (catPages.indexOf(pageSlug) === -1 && pageSlug) {
      var pageFavBtn = document.createElement('button');
      pageFavBtn.className = 'fav-btn-page' + (isFav(pageSlug) ? ' active' : '');
      pageFavBtn.innerHTML = (isFav(pageSlug) ? heartFull : heartEmpty) + '<span>' + (isFav(pageSlug) ? 'Favorited' : 'Favorite') + '</span>';
      pageFavBtn.addEventListener('click', function () {
        var added = toggleFav(pageSlug);
        pageFavBtn.className = 'fav-btn-page' + (added ? ' active' : '');
        pageFavBtn.innerHTML = (added ? heartFull : heartEmpty) + '<span>' + (added ? 'Favorited' : 'Favorite') + '</span>';
        showToast(added ? 'Added to favorites' : 'Removed from favorites');
      });
      toolHeader.parentNode.insertBefore(pageFavBtn, toolHeader.nextSibling);
    }
  }

  // Render favorites section on homepage
  if (isHome) {
    window.renderFavoritesSection = function () {
      var existing = document.getElementById('fav-section');
      if (existing) existing.remove();

      var favs = getFavs();
      if (favs.length === 0) return;

      // Get tool data from existing cards
      var allCards = document.querySelectorAll('.tool-card[href]');
      var favCards = [];
      var seen = {};
      allCards.forEach(function (card) {
        var slug = card.getAttribute('href').replace(/^\//, '');
        if (favs.indexOf(slug) !== -1 && !seen[slug]) {
          seen[slug] = true;
          favCards.push(card.cloneNode(true));
        }
      });

      if (favCards.length === 0) return;

      var section = document.createElement('div');
      section.className = 'section';
      section.id = 'fav-section';
      section.innerHTML =
        '<div class="section-header">' +
        '  <div class="section-left">' +
        '    <div class="section-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>' +
        '    <div><div class="section-title">Your Favorites</div><div class="section-desc">Tools you use all the time</div></div>' +
        '  </div>' +
        '</div>';

      var grid = document.createElement('div');
      grid.className = 'tool-grid';
      favCards.forEach(function (card) {
        // Re-attach fav button event listeners on cloned cards
        var slug = card.getAttribute('href').replace(/^\//, '');
        var oldBtn = card.querySelector('.fav-btn');
        if (oldBtn) oldBtn.remove();

        var btn = document.createElement('button');
        btn.className = 'fav-btn active';
        btn.innerHTML = heartFull;
        btn.title = 'Remove from favorites';
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          toggleFav(slug);
          showToast('Removed from favorites');
          renderFavoritesSection();
          // Also update the card in the main grid
          document.querySelectorAll('.tool-card[href="/' + slug + '"] .fav-btn').forEach(function (b) {
            b.className = 'fav-btn';
            b.innerHTML = heartEmpty;
            b.title = 'Add to favorites';
          });
        });
        card.style.position = 'relative';
        card.appendChild(btn);
        grid.appendChild(card);
      });

      section.appendChild(grid);

      var main = document.querySelector('.main');
      var noResults = document.getElementById('noResults');
      if (main && noResults) {
        main.insertBefore(section, noResults.nextSibling);
      } else if (main) {
        main.insertBefore(section, main.firstChild);
      }
    };

    renderFavoritesSection();
  }

  /* ---------- TOAST / COPY HELPERS ---------- */
  window.showToast = function (msg) {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg || 'Copied!';
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 2000);
  };

  window.copyText = function (text) {
    navigator.clipboard.writeText(text);
    showToast('Copied!');
  };

  window.copyOutput = function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    var text = el.value || el.textContent;
    navigator.clipboard.writeText(text);
    showToast('Copied to clipboard');
  };

  /* ---------- PWA ---------- */
  // Inject manifest link if missing
  if (!document.querySelector('link[rel="manifest"]')) {
    var manifestLink = document.createElement('link');
    manifestLink.rel = 'manifest';
    manifestLink.href = '/manifest.json';
    document.head.appendChild(manifestLink);
  }
  // Inject theme-color meta if missing
  if (!document.querySelector('meta[name="theme-color"]')) {
    var themeMeta = document.createElement('meta');
    themeMeta.name = 'theme-color';
    themeMeta.content = '#00d4aa';
    document.head.appendChild(themeMeta);
  }
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(function () {});
  }

  /* ---------- CMD+K COMMAND PALETTE ---------- */
  var TOOLS_DATA = [
    {name:'JSON Formatter',desc:'Format, validate, and minify JSON',icon:'{}',tag:'Dev',url:'/json-formatter'},
    {name:'Regex Tester',desc:'Test regular expressions with live matching',icon:'.*',tag:'Dev',url:'/regex-tester'},
    {name:'Base64 Encoder',desc:'Encode and decode Base64 text',icon:'B64',tag:'Dev',url:'/base64-encoder'},
    {name:'Markdown Preview',desc:'Write markdown, preview live',icon:'M↓',tag:'Dev',url:'/markdown-preview'},
    {name:'URL Encoder',desc:'Encode/decode URL strings',icon:'%',tag:'Dev',url:'/url-encoder'},
    {name:'Diff Checker',desc:'Compare two texts side by side',icon:'≠',tag:'Dev',url:'/diff-checker'},
    {name:'UUID Generator',desc:'Generate cryptographically secure UUIDs',icon:'UID',tag:'Dev',url:'/uuid-generator'},
    {name:'JSON to Table',desc:'Convert JSON arrays to readable tables',icon:'♣',tag:'Dev',url:'/json-to-table'},
    {name:'Timestamp Converter',desc:'Unix timestamp to human date',icon:'≈',tag:'Dev',url:'/timestamp-converter'},
    {name:'CSS Minifier',desc:'Compress CSS by removing whitespace',icon:'.{}',tag:'Dev',url:'/css-minifier'},
    {name:'HTML Entity Encoder',desc:'Convert special chars to entities',icon:'&',tag:'Dev',url:'/html-entity-encoder'},
    {name:'Number Base Converter',desc:'Binary, decimal, hex, octal',icon:'0x',tag:'Dev',url:'/number-base-converter'},
    {name:'Image to Base64',desc:'Upload image, get Base64 string',icon:'IMG',tag:'Dev',url:'/image-to-base64'},
    {name:'Cron Builder',desc:'Build cron expressions visually',icon:'⏰',tag:'Dev',url:'/cron-builder'},
    {name:'API Request Builder',desc:'Send HTTP requests from browser',icon:'API',tag:'Dev',url:'/api-tester'},
    {name:'SQL Formatter',desc:'Format and highlight SQL queries',icon:'SQL',tag:'Dev',url:'/sql-formatter'},
    {name:'JSON Schema Validator',desc:'Validate JSON against a schema',icon:'{✓}',tag:'Dev',url:'/json-schema-validator'},
    {name:'Env File Generator',desc:'Build .env files with templates',icon:'.env',tag:'Dev',url:'/env-generator'},
    {name:'Color Picker',desc:'Pick colors, convert HEX/RGB/HSL',icon:'⦿',tag:'Design',url:'/color-picker'},
    {name:'QR Code Generator',desc:'Generate QR codes for URLs and text',icon:'QR',tag:'Design',url:'/qr-code-generator'},
    {name:'Aspect Ratio Calculator',desc:'Calculate ratios and resize',icon:'16:9',tag:'Design',url:'/aspect-ratio-calculator'},
    {name:'Lorem Ipsum Generator',desc:'Generate placeholder text',icon:'¶',tag:'Text',url:'/lorem-ipsum-generator'},
    {name:'Text Transformer',desc:'Case conversion, sort, deduplicate',icon:'Aa',tag:'Text',url:'/text-transformer'},
    {name:'Gradient Generator',desc:'Build CSS gradients visually',icon:'▴',tag:'Design',url:'/gradient-generator'},
    {name:'SVG Optimizer',desc:'Clean and minify SVG markup',icon:'SVG',tag:'Design',url:'/svg-optimizer'},
    {name:'Font Pairer',desc:'Pair Google Fonts, preview live',icon:'Tt',tag:'Design',url:'/font-pairer'},
    {name:'Favicon Generator',desc:'Upload image, get all favicon sizes',icon:'🖼',tag:'Design',url:'/favicon-generator'},
    {name:'OG Image Previewer',desc:'Preview social media share cards',icon:'OG',tag:'Design',url:'/og-previewer'},
    {name:'Box Shadow Generator',desc:'Visual multi-layer shadow builder',icon:'▣',tag:'Design',url:'/box-shadow-generator'},
    {name:'Word Counter',desc:'Count words, chars, reading time',icon:'W#',tag:'Text',url:'/word-counter'},
    {name:'Invoice Calculator',desc:'Calculate totals, tax, discounts',icon:'$',tag:'Biz',url:'/invoice-calculator'},
    {name:'Pomodoro Timer',desc:'Focus timer with work/break intervals',icon:'⊗',tag:'Prod',url:'/pomodoro-timer'},
    {name:'Unit Converter',desc:'Length, weight, temp, area, speed',icon:'⇔',tag:'Util',url:'/unit-converter'},
    {name:'Meeting Cost Calculator',desc:'See the real cost of meetings',icon:'∑',tag:'Biz',url:'/meeting-cost'},
    {name:'Email Subject Tester',desc:'Score subject lines for open rates',icon:'@',tag:'Biz',url:'/email-subject-tester'},
    {name:'Password Generator',desc:'Generate strong random passwords',icon:'†',tag:'Sec',url:'/password-generator'},
    {name:'Hash Generator',desc:'MD5, SHA-1, SHA-256, SHA-512',icon:'#',tag:'Sec',url:'/hash-generator'},
    {name:'JWT Decoder',desc:'Decode JSON Web Tokens',icon:'JWT',tag:'Sec',url:'/jwt-decoder'},
    {name:'Password Strength',desc:'Test entropy, crack time, patterns',icon:'••',tag:'Sec',url:'/password-strength'},
    {name:'TOTP Generator',desc:'Generate 2FA codes for testing',icon:'2FA',tag:'Sec',url:'/totp-generator'},
    {name:'Text Encryptor',desc:'AES-256 encrypt and decrypt text',icon:'🔒',tag:'Sec',url:'/text-encryptor'},
    {name:'CSP Header Generator',desc:'Build Content-Security-Policy visually',icon:'CSP',tag:'Sec',url:'/csp-generator'},
    {name:'Security.txt Generator',desc:'Generate security.txt and robots.txt',icon:'.txt',tag:'Sec',url:'/security-txt-generator'},
    {name:'Color Contrast Checker',desc:'WCAG AA/AAA accessibility checker',icon:'AA',tag:'Design',url:'/contrast-checker'},
    {name:'Markdown to HTML',desc:'Convert Markdown to clean HTML',icon:'M→',tag:'Dev',url:'/markdown-to-html'},
    {name:'JSON to CSV',desc:'Convert JSON arrays to CSV format',icon:'J→C',tag:'Dev',url:'/json-to-csv'},
    {name:'CSV to JSON',desc:'Convert CSV data to JSON arrays',icon:'C→J',tag:'Dev',url:'/csv-to-json'},
    {name:'Slug Generator',desc:'URL slug from any text',icon:'/-/',tag:'Dev',url:'/slug-generator'},
    {name:'Meta Tag Generator',desc:'SEO meta tags, OG, Twitter Cards',icon:'<>',tag:'Dev',url:'/meta-tag-generator'},
    {name:'Chmod Calculator',desc:'Unix file permissions calculator',icon:'755',tag:'Dev',url:'/chmod-calculator'},
    {name:'HTTP Status Codes',desc:'Complete status code reference',icon:'4xx',tag:'Dev',url:'/http-status-codes'},
    {name:'Tailwind Colors',desc:'Full Tailwind CSS color palette',icon:'TW',tag:'Design',url:'/tailwind-colors'},
    {name:'Regex Cheat Sheet',desc:'Interactive regex reference',icon:'/./',tag:'Dev',url:'/regex-cheat-sheet'},
  ];

  // Inject palette HTML
  var paletteHTML =
    '<div class="cmdk-overlay" id="cmdkOverlay" onclick="if(event.target===this)closePalette()">' +
    '<div class="cmdk-box">' +
    '<div class="cmdk-input-wrap">' +
    '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>' +
    '<input class="cmdk-input" id="cmdkInput" type="text" placeholder="Search tools..." autocomplete="off"/>' +
    '<span class="cmdk-hint">ESC</span>' +
    '</div>' +
    '<div class="cmdk-list" id="cmdkList"></div>' +
    '<div class="cmdk-footer">' +
    '<span><kbd>↑</kbd> <kbd>↓</kbd> navigate</span>' +
    '<span><kbd>↵</kbd> open</span>' +
    '<span><kbd>esc</kbd> close</span>' +
    '</div>' +
    '</div></div>';
  document.body.insertAdjacentHTML('beforeend', paletteHTML);

  var cmdkActive = -1;

  window.openPalette = function () {
    document.getElementById('cmdkOverlay').classList.add('open');
    var input = document.getElementById('cmdkInput');
    input.value = '';
    input.focus();
    cmdkActive = -1;
    renderPaletteList('');
  };

  window.closePalette = function () {
    document.getElementById('cmdkOverlay').classList.remove('open');
  };

  function renderPaletteList(query) {
    var list = document.getElementById('cmdkList');
    var q = query.toLowerCase();
    var filtered = TOOLS_DATA.filter(function (t) {
      return !q || t.name.toLowerCase().indexOf(q) !== -1 || t.desc.toLowerCase().indexOf(q) !== -1 || t.tag.toLowerCase().indexOf(q) !== -1;
    });
    if (filtered.length === 0) {
      list.innerHTML = '<div class="cmdk-empty">No tools found for &ldquo;' + query + '&rdquo;</div>';
      return;
    }
    list.innerHTML = filtered.map(function (t, i) {
      return '<a class="cmdk-item' + (i === cmdkActive ? ' active' : '') + '" href="' + t.url + '" data-idx="' + i + '">' +
        '<span class="cmdk-item-icon">' + t.icon + '</span>' +
        '<span class="cmdk-item-text"><span class="cmdk-item-name">' + t.name + '</span><span class="cmdk-item-desc">' + t.desc + '</span></span>' +
        '<span class="cmdk-item-tag">' + t.tag + '</span></a>';
    }).join('');
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', function (e) {
    var overlay = document.getElementById('cmdkOverlay');
    var isOpen = overlay && overlay.classList.contains('open');

    // Cmd+K or Ctrl+K to open
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (isOpen) closePalette(); else openPalette();
      return;
    }

    // / key to open (only when not typing in an input/textarea)
    if (e.key === '/' && !isOpen) {
      var tag = document.activeElement.tagName;
      if (tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT' && !document.activeElement.isContentEditable) {
        e.preventDefault();
        openPalette();
        return;
      }
    }

    if (!isOpen) return;

    if (e.key === 'Escape') {
      closePalette();
      return;
    }

    var items = document.querySelectorAll('#cmdkList .cmdk-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      cmdkActive = Math.min(cmdkActive + 1, items.length - 1);
      items.forEach(function (el, i) { el.classList.toggle('active', i === cmdkActive); });
      items[cmdkActive].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      cmdkActive = Math.max(cmdkActive - 1, 0);
      items.forEach(function (el, i) { el.classList.toggle('active', i === cmdkActive); });
      items[cmdkActive].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (cmdkActive >= 0 && items[cmdkActive]) {
        window.location.href = items[cmdkActive].getAttribute('href');
      } else if (items.length > 0) {
        window.location.href = items[0].getAttribute('href');
      }
    }
  });

  // Search input handler
  var cmdkInput = document.getElementById('cmdkInput');
  if (cmdkInput) {
    cmdkInput.addEventListener('input', function () {
      cmdkActive = -1;
      renderPaletteList(this.value);
    });
  }

})();
