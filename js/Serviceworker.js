self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('local-data').then(cache => cache.addAll([
        '/',
        './index.html',
        './restaurant.html',
        './data/restaurants.json',
        './css/styles.css',
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
        './js/dbhelper.js',
        './js/main.js',
        './js/restaurant_info.js'
    ]))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request);
    }).catch(err => console.log(err))
  );
});