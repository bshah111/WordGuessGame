var game = ["Cheetah","Parrot","Tiger","Bear","Monkey","Jungle"];
var choice = Math.floor(Math.random()*6);
var answer = game[choice];
var rightGuess = [];
var wrongGuess = [];
var underScore = [];

console.log(answer)

var generateUnderScore = () => {
    for ( var i=0; i<answer.length; i++){
        underScore.push('_')
        
    }
    return underScore;
    
}
console.log(generateUnderScore());

document.addEventListener('keypress',(event)=>{
    var keyword = String.fromCharCode(event.keyCode);

    if(answer.indexOf(keyword) > -1){
        
        rightGuess.push(keyword);
        console.log(rightGuess)

    }else{
        wrongGuess.push(keyword)
        console.log(wrongGuess)
    }
})



