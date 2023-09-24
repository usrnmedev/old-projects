 alert("happy grad")

let gubr = new Audio("./sounds/tom-1.mp3")
gubr.play()


let bu = new Audio("./sounds/tom-2.mp3")
bu.play()
    

let du = new Audio("./sounds/tom-3.mp3")
du.play()


let fu = new Audio("./sounds/tom-4.mp3")
fu.play()


let pu = new Audio("./sounds/snare.mp3")
pu.play()


let eu = new Audio("./sounds/crash.mp3")
eu.play()


let uu = new Audio("./sounds/kick-bass.mp3")
uu.play()
document.getElementById("gf").style.color="red"
document.getElementById('ji').addEventListener("click",function(){
    document.getElementById("gf").style.color="red"
})
document.getElementById("hg").addEventListener("click",function(){
    document.getElementById("gf").style.color="blue"
})
document.getElementById("jh").addEventListener("click",function(){
    document.getElementById("gf").style.color="yellow"
})
document.getElementById("yt").addEventListener("click",function(){
    document.getElementById("gf").style.color="green"
})
document.getElementById("yu").addEventListener("click",function(){
    document.getElementById("gf").style.color="black"
})
document.getElementById("hg").addEventListener("click",function(){
    alert("just kidding!!")
})
