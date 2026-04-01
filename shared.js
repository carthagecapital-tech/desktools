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
