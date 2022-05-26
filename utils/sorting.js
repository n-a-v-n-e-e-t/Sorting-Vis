const defaultColor = '#292E6C';
const finalColor = '#228b22';
const inProcessColor = '#e1ad01';
const minColor = '#18A5AC'
let delay = 260;

// function to stop for ms time
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const genarray = () =>{
    let min = 10;
    let max = 200;
    let arr = [];
    const size = document.getElementById('size_input').value;
    console.log(size);
    for(let i=0;i<size;i++){
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    createdivs(arr);
}

const createdivs = (arr) =>{
    // clear existing divs if any
    deletebars();
    enableBtns();
    const bars = document.querySelector('#sorting-wrapper');
    for(let i=0;i<arr.length;i++){
        const bar = document.createElement("div");
        bar.style.height = `${arr[i]*2}px`;
        bar.style.background = defaultColor;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        //console.log(bar);
        bars.appendChild(bar);
        document.querySelector('#current-size').innerHTML=arr.length;
    }
 }

 const displaySize = (size)=>{
        document.querySelector('#current-size').innerHTML=size;
 }

const deletebars = () => {
    const bars = document.querySelector('#sorting-wrapper');
    bars.innerHTML='';
}

const disableBtns = () =>{
    const sortingbtns = document.querySelectorAll('.algo-btns .btn');
    sortingbtns.forEach(element => {
            element.disabled = true;
    });
}

const enableBtns = () => {
    const sortingbtns = document.querySelectorAll('.algo-btns .btn');
    sortingbtns.forEach(btn =>{
        btn.disabled = false;
    })
}

const enableStopbtn = () =>{
    document.querySelector('#stop-sorting').disabled = false;
}
const disableStopbtn = () =>{
    document.querySelector('#stop-sorting').disabled = true;
}
const stopSort = () => {
    genarray();
    enableBtns();
    disableStopbtn();
}
let delayElement = document.querySelector('#speed_input');
document.querySelector('#stop-sorting').addEventListener('click',stopSort);
document.getElementById('gen-new-array').addEventListener('click',genarray);
document.querySelector('#speed_input').addEventListener('input', function(){

    delay = 320 - parseInt(delayElement.value);
});
genarray();