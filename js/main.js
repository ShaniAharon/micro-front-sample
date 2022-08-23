var currApp = 'http://127.0.0.1:8080/'

window.onmessage = function (ev) {
    console.log('Got from MicroApp', ev.data)
    document.querySelector('h1').style.backgroundColor = ev.data
    document.querySelector('footer pre').innerHTML += JSON.stringify(ev.data, null, 2) + '\n'
}

function sendToMicroApp() {
    const elHost = document.querySelector('#iframe1');
    elHost.contentWindow.postMessage('hello', '*');
}
function switchMicroApp() {
    const elHost = document.querySelector('#iframe1');
    if (currApp === 'http://127.0.0.1:8080/') {
        currApp = 'http://127.0.0.1:53046/'
    } else if (currApp === 'http://127.0.0.1:53046/') {
        currApp = 'http://127.0.0.1:53059/'
    } else {
        currApp = 'http://127.0.0.1:8080/'
    }
    // currApp = (currApp === 'http://127.0.0.1:8080/') ? 'http://127.0.0.1:53046/' : 'http://127.0.0.1:8080/'
    elHost.src = currApp
}

