var userSentence = copySentence = prompt("Enter your sentence:")

$(document).ready(function(){
  $("#left-button").click(function() {
    cipher(userSentence)
  });
  $("#right-button").click(function() {
    decipher(userSentence)
  });
  printSentence(userSentence)
})

function cipher(string) {
  console.log("ciphering " + string);
  pasteOn()
  halfIndexLetter()

};
function decipher(string) {
  console.log("deciphering " + string);
  printSentence(userSentence)
};
function printSentence(string) {
  $("#sentence-display").html(string);
}

// business logic
function firstLast() {
  var firstLetter = copySentence[0].toUpperCase();
  var lastLetter = copySentence[copySentence.length-1].toUpperCase();
  copySentence = (firstLetter+lastLetter)
  console.log("got first last: " + copySentence)
  return copySentence
}

function reverseOrder() {
  var splitArray = copySentence.split("");
  console.log("split to " + splitArray);
  var reverseArray = splitArray.reverse();
  console.log("reversed to " + reverseArray);
  var joined = reverseArray.join("");
  console.log("joined to " + joined);
  copySentence = joined;
  return copySentence;
}

function pasteOn() {
  var addendum = reverseOrder(firstLast());
  copySentence = (userSentence + addendum);
  console.log("ended with " + copySentence)
  return copySentence
}

function halfIndexLetter() {
  var halfSentenceIndex = Math.floor(userSentence.length/2);
  var indexLetter = userSentence[halfSentenceIndex]
  copySentence = (indexLetter + copySentence)
  console.log(copySentence)
  return copySentence
}
