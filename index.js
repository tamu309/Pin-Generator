function generate(){
    let pin = Math.round(Math.random()*10000) ;
    return pin ;
}

function checker(){
    let pin = generate() ;
let pinTxt = pin + "" ;
if(pinTxt.length === 4){
    return pin ;
}
else{
    return checker() ;
}
}

let generatePin = document.getElementById("generatePin") ;
generatePin.addEventListener("click" , function(){
    let pinInp = document.getElementById("pinInp") ;
    pinInp.value = checker() ;
})

document.getElementById("btn1").addEventListener("click",function(){
    let applyPin = document.getElementById("applyPin")
    applyPin.value = applyPin.value + 1
})

document.getElementById("btn2").addEventListener("click",function(){
    let applyPin = document.getElementById("applyPin")
    applyPin.value = applyPin.value + 2
})
document.getElementById("btn3").addEventListener("click",function(){
    let applyPin = document.getElementById("applyPin")
    applyPin.value = applyPin.value + 3
})
document.getElementById("btn4").addEventListener("click",function(){
    let applyPin = document.getElementById("applyPin")
    applyPin.value = applyPin.value + 4
})
document.getElementById("btn5").addEventListener("click",function(){
    let applyPin = document.getElementById("applyPin")
    applyPin.value = applyPin.value + 5
})
document.getElementById("btn6").addEventListener("click",function(){
    let applyPin = document.getElementById("applyPin")
    applyPin.value = applyPin.value + 6
})
document.getElementById("btn7").addEventListener("click",function(){
    let applyPin = document.getElementById("applyPin")
    applyPin.value = applyPin.value + 7
})
document.getElementById("btn8").addEventListener("click",function(){
    let applyPin = document.getElementById("applyPin")
    applyPin.value = applyPin.value + 8
})
document.getElementById("btn9").addEventListener("click",function(){
    let applyPin = document.getElementById("applyPin")
    applyPin.value = applyPin.value + 9
})
// document.getElementById("btn>").addEventListener("click",function(){
//     let applyPin = document.getElementById("applyPin")
//     applyPin.value = applyPin.value 
// })
document.getElementById("btn0").addEventListener("click",function(){
    let applyPin = document.getElementById("applyPin")
    applyPin.value = applyPin.value + 0
})
document.getElementById("btnC").addEventListener("click",function(){
    let applyPin = document.getElementById("applyPin")
    applyPin.value = ""
})

let submitBtn =document.getElementById("submitBtn") ;
submitBtn.addEventListener("click" , function(){
if(applyPin.value == pinInp.value ){
    applyPin.value = "Congratulation!!!" ;
    document.getElementById("pinMatched").classList.remove("d-none")
}
else{
    applyPin.value = "Sorry!!!" ;
    document.getElementById("pinUnmatched").classList.remove("d-none")
}
})







