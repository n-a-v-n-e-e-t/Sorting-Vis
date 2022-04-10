let speed =1000; 
const bubble = async () => {
    let bars = document.querySelectorAll('.bar');
    console.log(bars.length);
    console.log('bubble-called');
    const totalBars = bars.length;
    for(let i=0;i<totalBars-1;i++){
        for(let j=0;j<totalBars-i-1;j++){
            // highlight the selected bars
            bars[j].style.background = 'red';
            bars[j+1].style.background = 'red';
            if(parseInt(bars[j].style.height) > parseInt(bars[j+1].style.height)){
                await sleep(speed);
                let temp = bars[j+1].style.height;
                bars[j+1].style.height = bars[j].style.height;
                bars[j].style.height =  temp;
            }
            bars[j].style.background = '#458cff';
            bars[j+1].style.background = '#458cff';
        }
        bars[totalBars-i-1].style.background = 'green';
    }
    bars[0].style.background = 'green';
    sleep(speed);
}

document.querySelector('#bubbleSort').addEventListener('click',bubble);
