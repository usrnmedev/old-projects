function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      document.addEventListener("keypress",function(p){
        if(p.key ==="w"){
          pos++; 
          elem.style.top = pos + "px"; 
        }
        if(p.key ==="a"){
          pos++; 
          elem.style.bottom = pos + "px"; 
            }
        if(p.key ==="d"){
          pos++; 
          elem.style.right = pos + "px"; 
        }
        if(p.key ==="s"){
          pos++; 
          elem.style.bottom = pos + "px"; 
        } 
    })
    }
  }
}
myMove()