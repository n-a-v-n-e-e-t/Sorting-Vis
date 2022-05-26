const merge = async (bars,low,mid,high) =>{
    console.log("In merge function");
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);
    for(let i = 0; i < n1; i++){
        await sleep(delay);
        bars[low + i].style.background = 'orange';
        left[i] = bars[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await sleep(delay);
        bars[mid + 1 + i].style.background = 'cyan';
        right[i] = bars[mid + 1 + i].style.height;
    }
    await sleep(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        
        await sleep(delay);
        if(parseInt(left[i]) <= parseInt(right[j])){
            if((n1 + n2) === bars.length){
                bars[k].style.background = 'green';
            }
            else{
                bars[k].style.background = 'lightgreen';
            }
            
            bars[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === bars.length){
                bars[k].style.background = 'green';
            }
            else{
                bars[k].style.background = 'lightgreen';
            } 
            bars[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await sleep(delay);
        if((n1 + n2) === bars.length){
            bars[k].style.background = 'green';
        }
        else{
            bars[k].style.background = 'lightgreen';
        }
        bars[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        
        await sleep(delay);
        if((n1 + n2) === bars.length){
            bars[k].style.background = 'green';
        }
        else{
            bars[k].style.background = 'lightgreen';
        }
        bars[k].style.height = right[j];
        j++;
        k++;
    }
}

const mergeSort = async(ele, l, r) => {
    if(l >= r){
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

document.querySelector('#mergeSort').addEventListener('click',()=>{
    const bars = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(bars.length) - 1;
    mergeSort(bars,l,r);
});