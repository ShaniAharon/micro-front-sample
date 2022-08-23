// App2

// not same localStorage
// BACK?


window.onmessage = async (ev) => {
    // console.log('App1 Data:', data);
    console.log('MicroApp2 Got from parent', ev.data)
    const res = await fetch('https://yesno.wtf/api')
    const ans = await res.json()
    console.log('MicroApp2 Got AJAX response', ans);
}


function sendToShell() {
    const data = {fullname: 'bobo ba'}
    window.top.postMessage(data, '*')
    // window.top.postMessage(data, 'http://127.0.0.1:5501/')
}


/*
REPOS

common
app1
app2


*/