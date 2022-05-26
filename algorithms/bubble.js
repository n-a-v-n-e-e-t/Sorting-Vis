const bubble = async () => {
    disableBtns();
    enableStopbtn();
    let bars = document.querySelectorAll('.bar');
    const totalBars = bars.length;
    for(let i=0;i<totalBars-1;i++){
        for(let j=0;j<totalBars-i-1;j++){
            // highlight the selected bars
            bars[j].style.background = inProcessColor;
            bars[j+1].style.background = inProcessColor;
            await sleep(delay);
            if(parseInt(bars[j].style.height) > parseInt(bars[j+1].style.height)){
                let temp = bars[j+1].style.height;
                bars[j+1].style.height = bars[j].style.height;
                bars[j].style.height =  temp;
                bars[j].style.background = minColor;
                bars[j+1].style.background = minColor;
                await sleep(delay);
            }
            bars[j].style.background = defaultColor;
            bars[j+1].style.background = defaultColor;
        }
        bars[totalBars-i-1].style.background = finalColor;
    }
    bars[0].style.background = finalColor;
    sleep(delay);
    enableBtns();
}

document.querySelector('#bubbleSort').addEventListener('click',bubble);
