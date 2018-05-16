if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').then(function (registration) {
          console.log('service worker registered\nRegisteration Scope: ' + registration.scope);
        }, function (err) {
          console.log('Registeration of Service Worker Failed\n Error: ' + err);
        });
      });
    }