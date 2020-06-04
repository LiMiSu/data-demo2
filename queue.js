const divScreen = document.querySelector('#screen');
const btnCreateNumber = document.querySelector('#createNumber');
const btnCallNumber = document.querySelector('#callNumber');
const spanNewNumber = document.querySelector('#newNumber');
const spanQueue = document.querySelector('#queue');

let n = 0;
let queue = [];
btnCreateNumber.onclick = () => {
    n += 1;
    queue.push.call(queue, n);
    spanNewNumber.innerText = n;
    console.log(queue);
    spanQueue.innerText = JSON.stringify(queue);
    // console.log(JSON.stringify(queue));
    //innerText只能显示字符串，JSON.stringify() 方法将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串
}

btnCallNumber.onclick = () => {
    if (queue.length === 0) {
        return
    }
    const m = queue.shift.call(queue);
    divScreen.innerText = `请 ${m} 号就餐`;
    spanQueue.innerText = JSON.stringify(queue);
}