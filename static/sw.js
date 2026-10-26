/* global self, caches */
// This site used to register a service worker (gatsby-plugin-offline), which
// was removed. Browsers that installed it still check this URL for updates, so
// this file replaces the old worker with one that clears its caches and
// unregisters itself. It can be deleted once returning visitors have updated.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: "window" }))
      .then((windowClients) =>
        windowClients.forEach((client) => client.navigate(client.url))
      )
  );
});
