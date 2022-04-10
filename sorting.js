const newBtn = document.getElementById('gen-new-array');
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
    const bars = document.querySelector('#sorting-wrapper');
    for(let i=0;i<arr.length;i++){
        const bar = document.createElement("div");
        bar.style.height = `${arr[i]*2}px`;
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