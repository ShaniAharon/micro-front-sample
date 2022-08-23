// App1 

// not same localStorage
// BACK?

var gCount = 0
const data = {}


function getData() {
    data.count = ++gCount
    data.nums = [4, 8]
    return data;
}

window.onmessage = function (ev) {
    // console.log('App1 Data:', data);
    console.log('Got from parent', ev.data)
}


function sendToShell() {
    const data = getData()
    window.top.postMessage(data, '*')
    // window.top.postMessage(data, 'http://127.0.0.1:5501/')
}