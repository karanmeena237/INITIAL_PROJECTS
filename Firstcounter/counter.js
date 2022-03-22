var current = document.querySelector('current');
var next = document.querySelector('.next');

var counter;

function startCounter(){
    var number = parseInt(document.getElementById("number").value);
    if(isNaN(number)){
        alert("Enter the number first, BAAKA");
        clearInterval(counter);
        return;
    }
    if(number<1 || number>9){
        alert("It is a single digit counter, baakayaru");
        clearInterval(counter);
        return;
    }
    var currentNum = document.querySelector(".current");
    var nextNo = document.querySelector(".next");
    var count = 0;

    //if user click start counter again then resets the counter again starting me to reset hoga to itna change nahi dikhega

    resetNumbers(currentNum, nextNo);

    counter = setInterval(function(){
        if(count==number){
            clearInterval(counter);
            alert("Times up biro");
            return;
        }
        increaseCount(currentNum, nextNo);
        count++;
    },1000);
}

function resetNumbers(currentNum, nextNo){
    currentNum.innerText = 0;
    nextNo.innerText = 1;
}

function increaseCount(currentNo, nextNo){
    nextNo.classList.add("animate");
    setTimeout(function(){
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText)+1;
    }, 500)
}

