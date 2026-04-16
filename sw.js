importScripts("/scram/scramjet.all.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

self.addEventListener("fetch", (event) => {
  event.respondWith(async () => {
    // Check if the request is a Scramjet request
    await scramjet.loadConfig();
    if (scramjet.route(event)) {
      return scramjet.fetch(event);
    }

    // Default fetch for non-proxied requests
    return fetch(event.request);
  });
});
