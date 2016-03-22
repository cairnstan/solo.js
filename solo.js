var stringList = ["March", "April", "May"];
var numList = [13, 78, 34];
var boolList = [false, true, false];

var newList = [];
for (var i = 0; i < stringList.length; i++) {
  newList += stringList[i] + ", ";
}
console.log("Months listed are " + newList + ".");

var lastNum = numList.length-1;
console.log(numList[lastNum]);

var newNumList = [];
for (var j = 0; j < numList.length; j++) {
  newNumList += numList[j];
}
console.log(newNumList.toString());

var total = 0;
for (var k = 0; k < numList.length; k++) {
  total += numList[k];
}
console.log(total);

var answer = 0;
if (boolList[1] == true) {
  answer = numList[0] + numList[2]
} else{
  answer = numList[1] * numList[1];
}
console.log(answer);

for (var l = 0; l < boolList.length; l++) {
  if (boolList[l] == true){
   numList.push(l)
  }
}
console.log(numList);
