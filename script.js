(function () {

  let bgimage = document.getElementById('wrapper');
  const right = document.getElementById('right');
  const left = document.getElementById('left');
  let arr = ["url(\"img/1.png\")", "url(\"img/2.jpg\")",
    "url(\"img/3.jpg\")", "url(\"img/4.jpg\")",
    "url(\"img/5.png\")"];

  right.addEventListener("click", function(){
    arr.push(arr.shift());
    bgimage.style.backgroundImage = arr[0];
  });

  left.addEventListener("click", function(){
    arr.unshift(arr.pop());
    bgimage.style.backgroundImage = arr[0];
  });
 }());
