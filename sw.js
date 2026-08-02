// Простейший Service Worker для работы PWA
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Просто пропускает сетевые запросы
    event.respondWith(fetch(event.request));
});
