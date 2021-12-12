const cache_name = 'iot-home-automation-v1';
const dynamicCacheName = 'site-dynamic-v3';
const web_assets = [
  '/',
  '/assets/app_icon/engineering.png',
  'assets/icon_png/cooling.png',
  'assets/icon_png/eco-bulb.png',
  'assets/icon_png/fan.png',
  'assets/icon_png/fire.png',
  'assets/icon_png/gas-tank.png',
  'assets/icon_png/water-tap.png',
  '/assets/icons/menu.svg',
  '/assets/icons/person_white_24dp.svg',
  '/assets/icons/settings_white_24dp.svg',
  '/assets/icons/toggle_off_white_24dp.svg',
  '/assets/icons/toggle_on_white_24dp.svg',
  '/designs/styles.css',
  '/scripts/register_scripts.js',
  '/index.html',
  '/manifest.json',
  '/service_worker.js'
];



// self.addEventListener('install', function(event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(cache_name)
//       .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(web_assets);
//       })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       }
//     )
//   );
// }); 
