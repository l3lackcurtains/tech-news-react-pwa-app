var cacheName = 'base-cache';
var dataCacheName = 'newsData-cache';

var filesToCache = [
  '/',
  '/index.html',
  '/bundle.js',
  '/d07e9f7d34d48d48c062e41997a6bd46.jpg'
];
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) { 
      return cache.addAll(filesToCache);
    }).then(function() {
		console.log('[ServiceWorker] Installed');
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate', e.request.url);
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  var dataUrl = 'https://newsapi.org/v1/';
  if (e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});


