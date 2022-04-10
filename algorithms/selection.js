
const selection = async () => {
    let bars = document.querySelectorAll('.bar');
    console.log('selection called');
    console.log(bars.length);
    const totalBars = bars.length;
    for(let i=0;i<totalBars-1;i++){
        let min_idx_bar = bars[i];
        //min_idx_bar.style.background = 'red';
        await sleep(speed)
        for(let j=i+1;j<totalBars;j++){
            bars[j].style.background = 'orange';
            await sleep(speed);
            if(parseInt(bars[j].style.height) < parseInt(min_idx_bar.style.height)){
                min_idx_bar = bars[j];
            }
            bars[j].style.background = 'blue';
            min_idx_bar.style.background = 'red';
        }
        // swapping
        let temp = bars[i].style.height;
        bars[i].style.height = min_idx_bar.style.height;
        min_idx_bar.style.height = temp;
        bars[i].style.background = 'green';
        //min_idx_bar.style.background = 'green';
    }
}

document.querySelector('#selectionSort').addEventListener('click',selection);


// original -> blue
// sorted   -> green
// progress -> orange
// mini -> red