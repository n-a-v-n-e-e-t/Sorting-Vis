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
