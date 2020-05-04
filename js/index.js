function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../sw.js')
            .then(() => { console.log('service worker is registerd') })
            .catch(error => console.log('error with register service'))
    }
}

registerServiceWorker()