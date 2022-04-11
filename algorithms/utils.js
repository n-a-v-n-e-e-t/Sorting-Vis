const disableBtns = () =>{
    const sortingbtns = document.querySelectorAll('.algo-btns .btn');
    sortingbtns.forEach(element => {
            element.disabled = true;
    });
    //console.log(sortingbtns);
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

document.querySelector('#stop-sorting').addEventListener('click',stopSort);