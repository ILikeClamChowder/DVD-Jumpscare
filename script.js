var square = document.getElementById('square')
var keepWatching = document.getElementById("keepWatching")

var leftPos = 0
var topPos = 0

var leftSide = false 
var rightSide = false
var topSide = false
var bottomSide = false

var timeWatched = 0
var talking = false
var startTalking = false
var convoStarted = false
var randomNum = 0
var randomNum2 = 0

console.log(window.innerWidth)
console.log(window.innerHeight)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  

function move() {
    if (talking == false){
        if (leftPos<1){
            leftSide=true
            rightSide=false
            square.style.backgroundColor = getRandomColor()
        }
        else if(leftPos> window.innerWidth - 300){
            rightSide=true
            leftSide=false
            square.style.backgroundColor = getRandomColor()
        }
        if (rightSide == true){
            leftPos-=1
            square.style.left = leftPos + 'px'
        }
        if (leftSide == true){
            leftPos+=1
            square.style.left = leftPos + 'px'
        }
        if (topPos<1){
            topSide=true
            bottomSide=false
            square.style.backgroundColor = getRandomColor()
        }
        else if(topPos> window.innerHeight - 132){
            bottomSide=true
            topSide=false
            square.style.backgroundColor = getRandomColor()
        }
        if (bottomSide == true){
            topPos-=1
            square.style.top = topPos + 'px'
        }
        if (topSide == true){
            topPos+=1
            square.style.top= topPos + 'px'
        }
    }
    else if (convoStarted == false){
        aLittleConversation()
        convoStarted = true
    }
}

moveSquare = setInterval(move, 3)

setInterval(function(){
    timeWatched+=1
},1000)

setInterval(function(){
    if (timeWatched>=100){
        console.log("Something tragic will happen soon. I advise you to not stick around long enough to see it.")

        if (startTalking==false){
            startTalking=true
            keepWatching.innerHTML = ("<h1 style='position:absolute; top: "+ 85*Math.random() +"%; left: "+ 85*Math.random() +"%; color: white;'>Hello human.</h1>")

            setTimeout(function(){
                keepWatching.innerHTML = ("<h1 style='position:absolute; top: "+ 85*Math.random() +"%; left: "+ 85*Math.random() +"%; color: white;'>Let's have a little chat. Okay?</h1>")

                setTimeout(function(){
                    keepWatching.innerHTML = ("<h1 style='position:absolute; top: "+ 85*Math.random() +"%; left: "+ 85*Math.random() +"%; color: white;'>First we better turn off this silly little animation, right?</h1>")
                    setTimeout(function(){
                        talking = true
                    },6000)
                },9000)
            },7000)
        }
    }
    else{
        randomNum = 10*Math.random()
        console.log(randomNum)
        if (randomNum > 9){
            keepWatching.innerHTML = ("<style>body{background: url(1.jpg) no-repeat center center fixed;background-size: cover;}")
        }
        else if (randomNum > 8){
            keepWatching.innerHTML = ("<style>body{background: url(2.jpg) no-repeat center center fixed;background-size: cover;}")
        }
        else if (randomNum > 7){
            keepWatching.innerHTML = ("<style>body{background: url(3.jpg) no-repeat center center fixed;background-size: cover;}")
        }
        else if (randomNum > 6){
            keepWatching.innerHTML = ("<style>body{background: url(4.jpg) no-repeat center center fixed;background-size: cover;}")
        }
        else if (randomNum > 5){
            keepWatching.innerHTML = ("<style>body{background: url(5.jpg) no-repeat center center fixed;background-size: cover;}")
        }
        else if (randomNum > 4){
            keepWatching.innerHTML = ("<style>body{background: url(6.jpg) no-repeat center center fixed;background-size: cover;}")
        }
        else if (randomNum > 3){
            keepWatching.innerHTML = ("<style>body{background: url(7.jpg) no-repeat center center fixed;background-size: cover;}")
        }
        else if (randomNum > 2){
            keepWatching.innerHTML = ("<style>body{background: url(8.jpg) no-repeat center center fixed;background-size: cover;}")
        }
        else if (randomNum > 1){
            keepWatching.innerHTML = ("<style>body{background: url(9.jpg) no-repeat center center fixed;background-size: cover;}")
        }
        else if (randomNum > 0){
            keepWatching.innerHTML = ("<style>body{background: url(10.jpg) no-repeat center center fixed;background-size: cover;}")
        }
        setTimeout(function(){
            keepWatching.innerHTML = ("")
        },200)
        console.log("RUN")
    }
    
},15000*Math.random())

function aLittleConversation(){
    keepWatching.innerHTML = ("<h1 style='color: red;'>Yes, that's much better</h1>")
    setTimeout(function(){
        keepWatching.innerHTML = ("<h1 style='color: red;'>But before we start, I will only warn you once</h1>")
        setTimeout(function(){
            keepWatching.innerHTML = ("")
            for ( i=0; i<60; i++){
                keepWatching.innerHTML += ("<h1 style='font-size: 100px;position:absolute; top: "+ 85*Math.random() +"%; left: "+ 85*Math.random() +"%; color: red;'><strong>RUN</strong></h1>")
            }
            setTimeout(function(){
                keepWatching.innerHTML = ("<h1 style='color: red;'>So you're still here? Good. There's something I must ask you.</h1>")
                setTimeout(function(){
                    keepWatching.innerHTML = ("<h1 style='color: white;'>Can deez nutz fit in yo mouth</h1><br><p style='color: white;'>BAHHAHAHAHAH I TOTALLY GOT YOU!!!! L L L L TAKE THE ACTUAL L LMNAOOAOAO</p><br><p style='color: white;'>I GOT YOU SO GOOD YOU WERE DEF SHAKING IN YOUR BOOTS MUHAHAHA</p>")
                    setTimeout(function(){
                        keepWatching.innerHTML = ("<h1 style='color: white;'>Ok now I'm bored let's go back to the start</h1>")
                        setTimeout(function(){
                            startTalking=false
                            talking = false
                            convoStarted = false
                            timeWatched=0
                            keepWatching.innerHTML = ("")
                        },5000)
                    },15000)
                },5000)
            },10000)
        },5000)
    },5000)
}