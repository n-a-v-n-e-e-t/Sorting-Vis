const newBtn = document.getElementById('gen-new-array');
const defaultColor = '#292E6C';
const finalColor = '#5CC09D';
const inProcessColor = '#4664AF';
const minColor = '#18A5AC'
let present_arr = []
const genarray = () =>{
    let min = 10;
    let max = 200;
    let arr = [];
    const size = document.getElementById('size_input').value;
    console.log(size);
    for(let i=0;i<size;i++){
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    present_arr = arr;
    createdivs(arr);
}

// function to stop for ms time
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const createdivs = (arr) =>{
    // clear existing divs if any
    deletebars();
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


newBtn.addEventListener('click',genarray);
genarray();