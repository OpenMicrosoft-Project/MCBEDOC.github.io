self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('your-cache-name').then(function(cache) {
        return cache.addAll([
          '/',
          '/assets/css/just-the-docs-head-nav.css',
          '/assets/css/webui/resources/resources/fonts/Minecraft-Seven_v2.woff2',
          '/assets/css/clientlib-site/resources/resources/fonts/Minecraft-Seven_v2.woff2',
          '/assets/js/vendor/lunr.min.js',
          '/assets/js/just-the-docs.js',
          '/assets/images/icons/github_b.webp',
          '/assets/images/icons/discord_b.webp',
          '/assets/images/icons/reddit_b.webp',
          '/assets/images/icons/theme_switch_b.webp',
          '/assets/images/favicon.webp',
          '/assets/css/just-the-docs-dark.css',
          '/assets/images/icons/reddit_w.webp',
          '/assets/images/icons/theme_switch_w.webp',
          '/assets/images/icons/github_w.webp',
          '/assets/images/icons/discord_w.webp',
          '/assets/js/search-data.json',
          '/assets/images/favicon.ico',
          '/assets/images/icons-192.png',
          '/story/',
          '/windows',
          '/credits',
          '/Windows/minecraft-for-windows/',
          '/Windows/minecraft-for-windows/',
          'https://mcbedoc.openm.tech/Windows/minecraft-earth/',
          'https://mcbedoc.openm.tech/Windows/minecraft-education/',
          'https://mcbedoc.openm.tech/Windows/minecraft-china/',
          'https://mcbedoc.openm.tech/Windows/minecraft-legends/',
          'https://mcbedoc.openm.tech/Windows/minecraft-dungeons/',
          'https://mcbedoc.openm.tech/Android',
          'https://mcbedoc.openm.tech/Android/minecraft-for-android/',
          'https://mcbedoc.openm.tech/Android/minecraft-earth/',
          'https://mcbedoc.openm.tech/Android/miscellaneous/',
          'https://mcbedoc.openm.tech/IOS/IOS/',
          'https://mcbedoc.openm.tech/IOS/minecraft/',
          'https://mcbedoc.openm.tech/IOS/minecraft-earth/',
          'https://mcbedoc.openm.tech/console/',
          'https://mcbedoc.openm.tech/miscellaneous/',
          'https://mcbedoc.openm.tech/credits',
          'https://mcbedoc.openm.tech/dmca',
          '/assets/images/icons-512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });