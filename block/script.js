alert("dyyagfwquhjfdsiaouihxfdisaopdjfsdhwhqejfghjeowhjksfadlhkbsashbdfanlhdesjnfwkehgurwjhetwjhwfeh")
alert("gtycutyrtvuyftcr")
var pos_x = 0;
var pos_y = 400
if(pos_y<400){
  pos_y--
}

document.addEventListener('keypress', function(p) {
  var elem = document.getElementById("animate");  


  if(p.key ==="w"){
    pos_y -= 10; 
    elem.style.top = pos_y + "px"; 
  }

  if(p.key ==="s"){
    pos_y += 10;  

    elem.style.top = pos_y + " px"; 
  }

  if(p.key ==="a"){
    pos_x -= 10; 
    elem.style.left = pos_x + "px"; 
  }

  if(p.key ==="d"){  pos_x += 10;   elem.style.left = pos_x + "px";  }


  if(pos_x===0){
    pos_x+10
  }
 if(p.key==="k"){
   pos_x++
   pos_y++
 }
 if(pos_y===-400){
   pos_y=0
 }

 })   ;
