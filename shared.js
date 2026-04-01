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
      : '') +
    '    <div class="nav-dropdown" id="catDropdown">' +
    '      <button class="nav-dropdown-btn" id="catBtn">' +
    '        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>' +
    '        Categories' +
    '        <svg class="chev" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>' +
    '      </button>' +
    '      <div class="dropdown-menu" id="catMenu">' +
    '        <span class="dropdown-label">Browse by audience</span>' +
    '        <a class="dropdown-item" href="/developers">' +
    '          <span class="di-icon"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>' +
    '          <span class="di-text"><span class="di-name">Developers</span><span class="di-sub">Formatters, converters, testers</span></span>' +
    '          <span class="di-count">13</span>' +
    '        </a>' +
    '        <a class="dropdown-item" href="/freelancers">' +
    '          <span class="di-icon"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/></svg></span>' +
    '          <span class="di-text"><span class="di-name">Freelancers</span><span class="di-sub">Design &amp; creative tools</span></span>' +
    '          <span class="di-count">10</span>' +
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
    '.deep-dive{max-width:900px;margin:2rem auto 0;padding:0 40px}' +
    '.deep-dive-toggle{display:flex;align-items:center;gap:.5rem;background:none;border:none;color:var(--muted,#6b6b80);font-family:"JetBrains Mono",monospace;font-size:.8rem;cursor:pointer;padding:.5rem 0;transition:color .2s;width:100%;text-align:left}' +
    '.deep-dive-toggle:hover{color:var(--accent,#00d4aa)}' +
    '.deep-dive-toggle .dd-arrow{transition:transform .2s;font-size:.7rem}' +
    '.deep-dive-toggle.open .dd-arrow{transform:rotate(90deg)}' +
    '.deep-dive-body{max-height:0;overflow:hidden;transition:max-height .3s ease}' +
    '.deep-dive-body.open{max-height:2000px}' +
    '.deep-dive-content{padding:1rem 0 2rem;font-size:.88rem;color:var(--muted,#6b6b80);line-height:1.75}' +
    '.deep-dive-content p{margin-bottom:1rem}' +
    '.deep-dive-content strong{color:var(--text,#e8e8f0);font-weight:600}' +
    '.deep-dive-content code{font-family:"JetBrains Mono",monospace;background:var(--bg3,#14141e);padding:.1rem .35rem;border-radius:4px;font-size:.82rem;color:var(--text,#e8e8f0)}' +
    '@media(max-width:768px){.deep-dive{padding:0 20px}}' +
    /* Mobile */
    '@media(max-width:600px){nav,.dt-nav{padding:0 1rem;height:52px}.nav-search{width:140px}.nav-search:focus-within{width:170px}.btn-request{font-size:.78rem;padding:.4rem .75rem}}';
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

})();
