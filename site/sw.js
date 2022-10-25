const cacheVersionName = ['staticCache-v1']



let staticUrlsToCache = [];

self.addEventListener('install', event => {
    console.log("installing...");
    // @ts-ignore

    //caching the event
    event.waitUntil(
        caches.open(cacheVersionName[0]).then(cache => cache.addAll(staticUrlsToCache))
        
    );
});

self.addEventListener('fetch', (event) => {

    return;
})