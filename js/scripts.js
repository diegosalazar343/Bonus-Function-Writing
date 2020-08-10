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
  return sentance//.charAt(0).toUpperCase() + sentance.slice(1);
//0123    slice(1,3)
//TheY
//YheT


}
function reverseFirstAndLast(sentance){
  let x = sentance[0];
  sentance = sentance[sentance.length -1] + sentance.slice(1);
  sentance = sentance.slice(0, sentance.length - 1) + x;
  //alert(sentance);
  return sentance;
}


let y = capFirstAndLast(sentance);
reverseFirstAndLast(y);


});
