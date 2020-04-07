var numSquares = 6;
var colors = generateRandomColor(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var message = document.querySelector("#message");
var resetGame = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click" , function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    //generate 3 random color
    colors = generateRandomColor(numSquares);
    //picked a color out of 3
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //loop to change the color
    for(var i =0 ; i< squares.length ; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click" , function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    //generate 3 random color
    colors = generateRandomColor(numSquares);
    //picked a color out of 3
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //loop to change the color
    for(var i =0 ; i< squares.length ; i++){
       squares[i].style.backgroundColor = colors[i];
       squares[i].style.display = "block";
    }
});

resetGame.addEventListener("click", function(){
    //generate random color
    colors = generateRandomColor(numSquares);
    //pick the color
    pickedColor = pickColor();
    //change each square according to color
    for(var i= 0; i < squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    //change the color display
    colorDisplay.textContent = pickedColor;
    //reset the background color of h1
    h1.style.backgroundColor = "steelblue";
    //change the message also
    message.textContent = "";
    //change the content of button
    resetGame.textContent = "New Color";
})

for(var i = 0;i < squares.length; i++){
    //initialize all the color
    squares[i].style.backgroundColor = colors[i];
    //figure out which color is that
    squares[i].addEventListener("click" , function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare the clicked color with a picked color
        if(clickedColor === pickedColor){
            message.textContent = "Correct!!";
            colorChange(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetGame.textContent = "Play Again?";
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent = "wrong!!";
        }
    });

}

function colorChange(color){
    //loop through all the colors
    for(var i = 0; i< squares.length ;i++){
        //change all color to pickedColor
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    //empty array
    var arr = [];
    //make random color and push into array
    for(var i=0 ; i< num ; i++){
        arr.push(randomColor());
    }
    
    //return array
    return arr;
}

function randomColor(){
    //pick "red" form 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick "blue" form 0 - 255 
    var g = Math.floor(Math.random() * 256);
    //pick "green" form 0 - 255  
    var b = Math.floor(Math.random() * 256);
    //return string rgb(r, g, b)
    return "rgb(" + r + ", "+ g + ", "+b + ")";
}