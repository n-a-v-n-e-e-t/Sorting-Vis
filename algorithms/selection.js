
const selection = async () => {
    disableBtns();
    enableStopbtn();
    let bars = document.querySelectorAll('.bar');
    console.log('selection called');
    console.log(bars.length);
    const totalBars = bars.length;
    for(let i=0;i<totalBars-1;i++){
        let min_idx = i;
        let min_idx_bar = bars[i];
        min_idx_bar.style.background = minColor;
        await sleep(speed)
        for(let j=i+1;j<totalBars;j++){
            bars[j].style.background = inProcessColor;
            await sleep(delay);
            if(parseInt(bars[j].style.height) < parseInt(min_idx_bar.style.height)){
                
                min_idx_bar.style.background = defaultColor;
                min_idx = j;
                min_idx_bar = bars[j];
                min_idx_bar.style.background = minColor;
            }else{
            bars[j].style.background = defaultColor;
            }
        }
        // swapping
        await sleep(delay);
        let temp = bars[i].style.height;
        bars[i].style.height = min_idx_bar.style.height;
        min_idx_bar.style.height = temp;
        min_idx_bar.style.background = defaultColor;
        bars[i].style.background = finalColor;
        //min_idx_bar.style.background = 'green';
    }
    bars[totalBars-1].style.background = finalColor;
    enableBtns();
}

document.querySelector('#selectionSort').addEventListener('click',selection);

