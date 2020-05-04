self.addEventListener('install', event => {
    console.log(self)
    console.log(event)
    console.log('SW installed at :', new Date().toLocaleTimeString())
});

self.addEventListener('activate', event => {
    console.log(self)
    console.log(event)
    console.log('SW activated at :', new Date().toLocaleTimeString())
});

self.addEventListener('fetch', event => {

    if (!navigator.onLine) {
        event.respondWith(new Response('<h1>you dont  have internet connection<h1>', { headers: { 'Content-Type': 'text/html' } }))
    } else {
        console.log('Online')
    }
    // console.log(self)
    // console.log(event.request.ur)
});