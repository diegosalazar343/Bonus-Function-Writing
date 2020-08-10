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



}
function reverseFirstAndLast(sentance){
  let x = sentance[0];
  let y = sentance[1];
  return y + x;

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
