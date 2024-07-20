// refering to service worker with the self keyWork
self.addEventListener("install", (event) => {
  console.log("Installing service Worker", event);
});
self.addEventListener("activate", (event) => {
  console.log("activating the service Worker ...", event);
  self.clients.claim();
  //ensures that service workers are activated correctly
});
self.addEventListener("fetch", (event) => {
  console.log("service worker fetching something", event);
  event.respondWith(fetch(event.request));
});
