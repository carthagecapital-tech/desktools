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
    '          <span class="di-count">4</span>' +
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
  // Inject fav CSS (for pages that don't load styles.css)
  if (!document.querySelector('link[href="styles.css"], link[href="/styles.css"]')) {
    var favStyle = document.createElement('style');
    favStyle.textContent =
      '.fav-btn{position:absolute;top:12px;right:12px;background:none;border:none;color:var(--muted,#6b6b80);cursor:pointer;padding:4px;border-radius:6px;transition:color .2s,transform .15s;z-index:2;line-height:1}' +
      '.fav-btn:hover{color:var(--accent,#00d4aa);transform:scale(1.15)}' +
      '.fav-btn.active{color:#ff6b8a}.fav-btn.active:hover{color:#ff4d73}' +
      '.fav-btn-page{display:inline-flex;align-items:center;gap:6px;background:none;border:1px solid var(--border,rgba(255,255,255,0.07));color:var(--muted,#6b6b80);cursor:pointer;padding:6px 14px;border-radius:8px;font-family:"Outfit",sans-serif;font-size:.82rem;font-weight:500;transition:all .2s;margin-top:12px}' +
      '.fav-btn-page:hover{border-color:#ff6b8a;color:#ff6b8a}' +
      '.fav-btn-page.active{border-color:#ff6b8a;color:#ff6b8a}';
    document.head.appendChild(favStyle);
  }

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
