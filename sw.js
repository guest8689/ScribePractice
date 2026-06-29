self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Phải có phản hồi mạng (cho dù là lấy trực tiếp từ internet) thì trình duyệt mới chịu nhận là PWA
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});