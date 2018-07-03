var dataCacheName = 'PricePerLiter-v1';
var cacheName = 'PricePerLiter-final-1';
var filesToCache = [
  '/beer',
  '/beer/index.html',
  '/beer/static/css/bootstrap.min.css',
  '/beer/static/js/beer.js',
  '/beer/static/js/jquery.min.js'
];

self.addEventListener('install', function(event) {
  console.log('Service worker installing...');
  // TODO 3.4: Skip waiting
});

self.addEventListener('activate', function(event) {
  console.log('Service worker activating...');
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  });

