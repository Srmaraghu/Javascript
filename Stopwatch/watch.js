var hr = 0, min = 0, sec = 0;
var count = 0;//denotes the 100th part of second

var timer = false; // false means timer is not running. true indicateds timer is running

function start() {
    timer = true;
    stopwatch();

}

function stop() {
    timer = false;
}


function reset() {
    timer= false;
    
    document.getElementById('hr').innerHTML="00";
        document.getElementById('min').innerHTML="00";

        document.getElementById('sec').innerHTML="00";

        document.getElementById('count').innerHTML="00";

}

function stopwatch() {
    if (timer == true) {
        count+=1; //in every 10 milsecond count is incremented by 1

        if(count== 100)
        {
            sec= sec+1;
            count=0;
        }

        if(sec==60)
        {
            sec=0;
            min=min+1;
        }
        if(min==60){
            min=0;
            hr=hr+1;
            sec=0;
        }

        var hrString=hr;
        var minString=min;
        var secString=sec;
        var countString=count;

        if(hr<10)
        {
            hrString="0" + hrString;
        }
        if(min<10){
            minString="0" +minString;
        }
        if(sec<10){
            secString="0" +secString;
        }
        if(count<10){
             countString="0" + countString;
        }


        document.getElementById('hr').innerHTML=hrString;
        document.getElementById('min').innerHTML=minString;

        document.getElementById('sec').innerHTML=secString;

        document.getElementById('count').innerHTML=countString;

        setTimeout("stopwatch()", 10);
    }
}
