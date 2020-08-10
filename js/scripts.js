$(document).ready(function(){
  const sentance =  prompt("Enter A Sentence: ");
    //alert(sentance);

function capFirstAndLast(sentance){
  sentance[0] = sentance[0].toUpperCase();
  alert(sentance);
}


function capFirstAndLast(sentance) {
  sentance = sentance[0].toUpperCase() + sentance.slice(1);
  sentance = sentance.slice(0,sentance.length - 1) + sentance[sentance.length - 1].toUpperCase();
  //alert(sentance);
  return sentance[0] + sentance[sentance.length - 1];
  //return sentance//.charAt(0).toUpperCase() + sentance.slice(1);
//0123    slice(1,3)
//TheY
//YheT


}
function reverseFirstAndLast(sentance){
  let x = sentance[0];
  let y = sentance[1];
  return y + x;
  //sentance = sentance[sentance.length -1] + sentance.slice(1);
  //sentance = sentance.slice(0, sentance.length - 1) + x;
  //alert(sentance);
  //return sentance;
  //the dog jumped
  //01234567890123
}
function combination(sentance){
  sentance = capFirstAndLast(sentance);
  sentance = reverseFirstAndLast(sentance);
  return sentance;
}
function halfPosition(sentance){

  return sentance[Math.floor(sentance.length / 2)];
}
function reverseSentence(str){
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}
$("#normal").click(function() {document.getElementById("sentance").innerHTML = sentance;});
$("#reversed").click(function(){document.getElementById("sentance").innerHTML = finalSentance;});
let y = combination(sentance);
let finalSentance = halfPosition(sentance) + sentance + y;
finalSentance = reverseSentence(finalSentance);


});
