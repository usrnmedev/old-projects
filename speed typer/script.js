var Time=10
var score=0
var text=["hello","be","better","yuck","duck","kick","no","him","toe","me","world","the"]
var f;

function word(){
    var nr =Math.random()*text.length;
    nr = Math.floor(nr)
    console.log(nr)
    f=text[nr]
    var e=document.getElementById('text').innerHTML = f;
}

function time(){
    Time--
    document.getElementById("te").innerHTML=Time+"s"
    if(Time===0){
        document.getElementById("text").innerHTML = ""
        document.getElementById("se").innerHTML = ""
        document.getElementById("te").innerHTML = ""
        document.getElementById("be").innerHTML = "you lose please press the button below to restart and keep playing"
        document.getElementById("h").innerHTML = ""
        Time++
    }
};

word()
setInterval(time,1000)

document.getElementById("id").addEventListener("input",function(tea){
    if (tea.target.value ===f){
        word()
        score++
        document.getElementById("se").innerHTML = score

        Time=10
        time()
        tea.target.value=""


    }
})

//document.getElementById("ne").addEventListener("click",function(){
//    score=0
//})
