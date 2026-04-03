const CACHE_NAME = 'desktools-v1';

// Core files to cache on install
const CORE_FILES = [
  '/',
  '/shared.js',
  '/styles.css',
  '/favicon.svg',
  '/manifest.json'
];

// Install: cache core files
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CORE_FILES);
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(
        names.filter(function (n) { return n !== CACHE_NAME; })
             .map(function (n) { return caches.delete(n); })
      );
    })
  );
  self.clients.claim();
});

// Fetch: network-first with cache fallback
self.addEventListener('fetch', function (e) {
  // Skip non-GET requests
  if (e.request.method !== 'GET') return;

  // Skip external requests (fonts, analytics, etc.)
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    fetch(e.request)
      .then(function (response) {
        // Cache successful responses
        if (response.ok) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(e.request, clone);
          });
        }
        return response;
      })
      .catch(function () {
        // Network failed — serve from cache
        return caches.match(e.request).then(function (cached) {
          return cached || new Response('Offline — this page hasn\'t been cached yet.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain' }
          });
        });
      })
  );
});
