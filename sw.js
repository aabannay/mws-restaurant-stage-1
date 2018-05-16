const urlsToBeCached = [
  '/',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
  './data/restaurants.json'
];

const cacheName = 'restaurants-cache-v1';
self.addEventListener('install', function(event) {
  event.waitUntil(
      caches.open(cacheName)
      .then(function(cache) {
        console.log('adding caches to ' + cacheName);
        return cache.addAll(urlsToBeCached);
      }).catch(function(err) {
        console.log(err);
      })
    );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      }).catch(err => {
        console.log('Error fetching response ' + err);
      })
    );
});