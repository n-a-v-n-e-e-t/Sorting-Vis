
const insertion = async () => {
    disableBtns();
    enableStopbtn();
    let bars = document.querySelectorAll('.bar');
    console.log('Insertion called');
    console.log(bars.length);
    const totalBars = bars.length;
    bars[0].style.background = 'green';
    //await sleep(speed);
    for(let i=1;i<totalBars;i++){
        let j = i-1;
        let key = bars[i].style.height;
        bars[i].style.background = 'blue';
        await sleep(150);
        while(j>=0 && (parseInt(bars[j].style.height) > parseInt(key))){
            bars[j].style.background = 'blue';
            bars[j+1].style.height = bars[j].style.height;
            j--;
            await sleep(150);
            for(let k = i;k >=0; k--){
                bars[k].style.background = 'green';
            }
        }

        bars[j+1].style.height = key;
        bars[i].style.background = 'green';
    }
    enableBtns();
}

document.querySelector('#insertionSort').addEventListener('click',insertion);

/*
 
        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }
}
const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await insertion();
    if(hasPressedStop==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});
*/