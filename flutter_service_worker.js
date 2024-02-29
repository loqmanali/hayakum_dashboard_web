'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "12dde2d6341c7ea4e665dc8eaacdf44a",
"index.html": "f78ad834c7b06b45ac8bb348b0515430",
"/": "f78ad834c7b06b45ac8bb348b0515430",
"main.dart.js": "23a3cf83b0b33df614c5a30df94f3f18",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "75a226d06d08d7b7df5f0807e00903a5",
"icons/Icon-192.png": "022db2075a47a1e6f116a8a8f255105b",
"icons/Icon-maskable-192.png": "022db2075a47a1e6f116a8a8f255105b",
"icons/Icon-maskable-512.png": "8ec2f71ac5db33987386edf9a6d45594",
"icons/Icon-512.png": "8ec2f71ac5db33987386edf9a6d45594",
"manifest.json": "bded277c9271b52f5696e32b423a29b1",
"assets/AssetManifest.json": "ad9292d7d877b2bfea7105b17283acfa",
"assets/NOTICES": "81faecef2d8020c1888a2819606a70cd",
"assets/FontManifest.json": "70bae433ce9747d1bf776ff49836f24b",
"assets/AssetManifest.bin.json": "c3b1d0955eb6320c291f5ca6334c8900",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "ed6b5b362751f530df880e92b5c25e9e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "f280e3a5e701123e658153c65d4ef11d",
"assets/fonts/MaterialIcons-Regular.otf": "586df53e572d4aacddd71d77f9fedf5c",
"assets/assets/images/services.svg": "d089049754df6e2b0937ccd344d702d2",
"assets/assets/images/price_list.svg": "522454dcefd999184a45934aa7db54ab",
"assets/assets/images/b2b.svg": "e63b7e71a7a73ad35af4ffa9fde76ca3",
"assets/assets/images/key.svg": "2513453d68e49802ae955f25db5fd271",
"assets/assets/images/time.svg": "9de3eec8b54f6fefa86ea0cd265b9166",
"assets/assets/images/dashboard.svg": "4450ebfc67ad346a5ca1cca216dcdb07",
"assets/assets/images/flights.svg": "2bfdba03e8fc0aa6c07354c8fa5c3f34",
"assets/assets/images/flag_en.png": "57cafbe71df52e973b4dcf332a8146b1",
"assets/assets/images/notification.svg": "fd732dd436100ebf440b2c8f8a5b4386",
"assets/assets/images/logo_color_bg.png": "a78ed9621d650e5725f4887921b63f8f",
"assets/assets/images/trash.svg": "679b1d62c09deedccabad41014090cfc",
"assets/assets/images/edit.svg": "012ec42c27c49e7a86c4af1e948993a4",
"assets/assets/images/pdf.svg": "1180e2e1e166f94ad592ad9fc0a0954f",
"assets/assets/images/flag_ar.svg": "58f19c01bfda9b51602ae36a8ed58bfe",
"assets/assets/images/flag_ar.png": "c8f4354b169f4a200ba73fafa033c68d",
"assets/assets/images/eye.svg": "07b0c3c9ba4846983a8ec03c45bec290",
"assets/assets/images/date_range.svg": "68dc2586ebfa716c822dff19588900ef",
"assets/assets/images/logo.svg": "f14ad34a86f265167500995a62efa32b",
"assets/assets/images/airport.svg": "6284d36bb5b415baf2d68583d38f365e",
"assets/assets/images/accounts.svg": "a039f70b7a5911f8a3e3a7e9acff03c6",
"assets/assets/images/manage_staff.svg": "34341ffce625caf21f83972fafef30b5",
"assets/assets/images/flight_fill.svg": "19dc2a2154cdcb085085b54766435ffb",
"assets/assets/images/request.svg": "252c5b2a997f512f8b83f68dbc8de840",
"assets/assets/images/flag_en.svg": "a9af6351d6c3c606bc41fcf595cc8061",
"assets/assets/font/Gotham-XLight.otf": "3f6969ada534de188f1956dd87359296",
"assets/assets/font/Gotham-Thin.otf": "4ac7dbb4f9f9f467db596e759b8bf7db",
"assets/assets/font/Gotham-Black.otf": "14b3a355f612d6181e891efd2c798b5f",
"assets/assets/font/Gotham-XLightItalic.otf": "0830b44514e791c7cc43f0a194b38564",
"assets/assets/font/GothamLight.ttf": "8566e2336952927984495865df90963c",
"assets/assets/font/Gotham-UltraItalic.otf": "cbd7e9b2b7b173041a114ce35698b0df",
"assets/assets/font/Gotham-Bold.otf": "9c35bf87f23c8cca614720126fe0baa0",
"assets/assets/font/GothamMediumItalic.ttf": "b1951be38b528a44704a217b9c44ab55",
"assets/assets/font/GothamBookItalic.ttf": "0281e72bd039997947cb7c2d00ae4b94",
"assets/assets/font/Gotham-ThinItalic.otf": "c7d88301cb82859d635349081ea87638",
"assets/assets/font/GothamMedium_1.ttf": "77171d8f5b5283f9d47a3434704bf944",
"assets/assets/font/Gotham-Light.otf": "f76e3adf545b3299f643fd7642800351",
"assets/assets/font/GothamBold.ttf": "db33e70bc9dee9fa9ae9737ad83d77ba",
"assets/assets/font/Gotham-BookItalic.otf": "da84a99701996b4ba80f723c2412ab99",
"assets/assets/font/GothamBoldItalic.ttf": "9b92f7fc1500a19b09dc9053fbe46b0c",
"assets/assets/font/GothamBook.ttf": "b54724f54d4dd3f6796e3c4cc422f998",
"assets/assets/font/GothamLightItalic.ttf": "0f0e43f48efb679501feff0240c3eb55",
"assets/assets/font/GothamMedium.ttf": "77171d8f5b5283f9d47a3434704bf944",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
