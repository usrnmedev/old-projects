document.getElementById("but").addEventListener("click",function(){
    var nr =Math.random()*6+1;
    nr = Math.floor(nr)
    var dc= "dice"+nr+".png";
    document.getElementById("dice1").setAttribute("src",dc);
    var nr1 =Math.random()*6+1;
    nr1 = Math.floor(nr1)
    var cd= "dice"+nr1+".png";
    document.getElementById("dice2").setAttribute("src",cd);

});