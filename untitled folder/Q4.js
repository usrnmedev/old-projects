var nr =Math.random()*100+1;
nr = Math.floor(nr)
var mr =Math.random()*100+1;
mr = Math.floor(mr)
var tr =Math.random()*100+1;
tr = Math.floor(tr)
console.log(nr)
console.log(tr)
console.log(mr)

if(nr*mr<tr){
    console.log("true")
}
if(nr*mr>tr){
    console.log("false")
}
