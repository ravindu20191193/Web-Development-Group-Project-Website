var fontSize = 1;
function increase() {
  fontSize += 1;
  document.body.style.fontSize = fontSize + "em";
}



function decrease() {
  fontSize -= 1;
  document.body.style.fontSize = fontSize + "em";

}


function decreaseFontSize(objId) {
  obj = document.getElementById(objId);
  //get current font size of obj
  currentSize = parseFloat(obj.style.fontSize);
  obj.style.fontSize = (currentSize - .1) + "em";
}
  