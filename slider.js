var description = new Array
 (" LIVERPOOL |95 POINTS |EPL WINNER 2013-214 |30 WIN |5 DRAW |3 LOST",
 " CHELSEA |92 POINTS |CHL PLACE 2014-215 |30 WIN |2 DRAW |6 LOST",
 " MANCHISTER CITY |90 POINTS |CHL PLACE 2014-215 |30 WIN |0DRAW |8 LOST",
 " ARSENAL |88 POINTS |PLAY OFF. 2014-215 |29 WIN |1 DRAW |7 LOST");
var pictures = new Array(4);
var counter = 0;
function initialize(){
  pictures[0] = new Image();
  pictures[0].src = "1.jpg";
  pictures[1] = new Image();
  pictures[1].src = "2.jpg";
  pictures[2] = new Image();
  pictures[2].src = "3.jpg";
  pictures[3] = new Image();
  pictures[3].src = "4.jpg";
}

function next(){
  counter++;
  if (counter > 3){
    counter = 0;
  } 
  document.imgDisplay.src = pictures[counter].src;
  document.myForm.txtDescription.value = description[counter];
} 
    function prev(){
  counter--;
  if (counter < 0){
    counter = 3;
  } 
  document.imgDisplay.src = pictures[counter].src;
  document.myForm.txtDescription.value = description[counter];
}
     /*Faraidun Hussain*/