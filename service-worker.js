importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');
import 'regenerator-runtime';
import CacheHelper from './';

// Caching the listed asset below
const assetsToCache = [
  './',
  './OneSignalSDKWorker.js',
  './index.html',
  './styles.css',
  './icon.png',
  './manifest.json',
  './service-worker.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
