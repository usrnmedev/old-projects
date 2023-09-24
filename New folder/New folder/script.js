var text=["hello","be","better","yuck","duck","kick","no"]
var nr =Math.random()*6+1;
    nr = Math.floor(nr)
console.log(nr)
var f=text[nr]
document.getElementById('text').innerHTML = f;