'use strict'

window.onload = function() {

    var startValue = "Start"
    var stopValue = "Stop"

    var image11 = document.getElementById("image11")
    var image12 = document.getElementById("image12")
    var image21 = document.getElementById("image21")
    var image22 = document.getElementById("image22")
    var image31 = document.getElementById("image31")
    var image32 = document.getElementById("image32")

    var button11 = document.getElementById("button11")
    var button12 = document.getElementById("button12")
    var button21 = document.getElementById("button21")
    var button22 = document.getElementById("button22")
    var button31 = document.getElementById("button31")
    var button32 = document.getElementById("button32")

    tap(button11);
    tap(button12);
    tap(button21);
    tap(button22);
    tap(button31);
    tap(button32);

    function tap(sampleButton) {
        sampleButton.onclick = function(){
            if(sampleButton.value == startValue)
                sampleButton.value = stopValue
            else
                document.getElementById("button21").value = "hh";
                sampleButton.value = startValue
        }
    }

    var images = [
        "1.jpeg",
        "2.jpeg",
        "3.jpg",
        "4.jpeg"
    ]

    var imgList = images.map(function(src){
        var img = new image()
        img.src = src
        return img
    })

    function updatePic(imageID, flag){
        var idx = 0;
        var max = 4;
        var autoTimer;
        var randomTime;
        var image = document.getElementById(imageID);
        if(flag == true)    
            image.src = imgList[idx]
            randomTime = Math.floor(Math.random()*2000+1000);
            autoTimer = setInterval(function(){
                idx++;
                if(idx >= max){
                    idx = 0;
                }
            }, randomTime)
        if(flag == false)
            clearInterval(autoTimer);
            clearInterval(timer);
    }

    updatePic("image11", true);
}