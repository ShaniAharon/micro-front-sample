
window.onmessage = async (ev) => {
    // console.log('App1 Data:', data);
    console.log('MicroApp2 Got from parent', ev.data)
    document.querySelector('pre').innerText = ev.data

}

function sendToShell() {
    const data = generateRandColor()
    window.top.postMessage(data, '*')
    // window.top.postMessage(data, 'http://127.0.0.1:5501/')
}

const generateRandColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}

/*
REPOS

common
app1
app2


*/