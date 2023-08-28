var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

let timer = false;

start=()=>{
    timer = true;
    stopwatch();
}

stop=()=>{
    timer = false;
}

Reset=()=>{
    timer = false;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("Min").innerHTML = "00";
    document.getElementById("Sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}



function stopwatch(){
    if(timer){
        count = count + 1;
        if(count==100){
            sec = sec + 1;
            count = 0;
        }
        if(sec==60){
            min = min + 1;
            sec = 0;
        }
        if(min==60){
            hr = hr + 1;
            min = 0;

        }

    let hrstring = hr;    
    let minstring = min;    
    let secstring = sec;    
    let countstring = count;    
        if(hr<10){
            hrstring = "0" + hr;
        }
        if(min<10){
            minstring = "0" + min;
        }
        if(sec<10){
            secstring = "0" + sec;
        }
        if(count<10){
            countstring = "0" + count;
        }

        document.getElementById("hr").innerHTML = hrstring;
        document.getElementById("Min").innerHTML = minstring;
        document.getElementById("Sec").innerHTML = secstring;
        document.getElementById("count").innerHTML = countstring;
        setTimeout(() => {stopwatch()},10);
    }
}