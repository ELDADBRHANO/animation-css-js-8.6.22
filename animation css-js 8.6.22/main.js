// 1
// var distance = 0;
// var stopper = 0;
// function createHeight() {
//   stopper = setInterval(() => {
//     div_id.style.height = distance++ + "px";
//   }, 10);
// }
// // 2
// function btnStart() {
//   createHeight();
// }

// // 3
// function btnStop() {
//   clearInterval(stopper);
// }

// // 4
// function enterShutGame(event) {
//   if (event.key == "Enter") {
//     clearInterval(stopper);
//   }
// }

// 5
// var colorr;
// function btnStart(){
//   setInterval(()=>{
//     var catchh=Math.floor(Math.random()*5588);
//   colorr= Math.floor(Math.random(div_id.style.backgroundColor  = "#FF"+catchh+"6"))
//   },1000)
// }

// 6
// var counter=0;
// var stopGame;
// function someFunc() {
//   stopGame = setInterval(()=>{
//     if(counter < input_id.value){
//       div_id.style.width = counter++ +'px';
//     }
//     else if(counter < input_id2.value){
//       div_id.style.height = counter++ +'px';
//     }
//   },100)
// }

// function shutGamePress(event){
//   if(event.key == " "){
//     clearInterval(stopGame)
//   }
// }



// 7
var text;
var arrayColor=[]
var stopper;
function putColorAsText() {
  if(arrayColor.length  < 5){
    alert("you enter a color")
    arrayColor.push(colorPick.value); 
  }
}

function someFunc() {
 text = input_text.value;
}


function printSome() {
  my_p.innerText = text;
 stopper = setInterval(()=>{
    var rndColor= Math.floor(Math.random()*arrayColor.length)

    document.getElementById("my_p").style.color = arrayColor[rndColor]
  },10)
}

function stopIt() {
  clearInterval(stopper)
}