let Book=[];
function getSeat(){
    text= document.getElementById('seatCount').innerText
   Numbertext=parseInt(text)
   return Numbertext
}

function setSeat(a){
document.getElementById('seatCount').innerText=a;
}
function handleSeatLeft(){
    
   let seatAviableText= document.getElementById("seatLeft")
   seatAviable= parseInt(seatAviableText.innerText)
    seatAviable--
    document.getElementById("seatLeft").innerText=seatAviable;
}

function setBackgroundColor(Id){
    document.getElementById(Id).style.backgroundColor='green';
}

function newElement(Id){
   newTag= document.createElement('tr')
    newTag.innerHTML=`
    <td class="px-4 py-2">${Id}</td>
    <td class="px-4 py-2">Economics</td>
    <td class="px-4 py-2">$550</td>
    `
    document.getElementById("tableBody").appendChild(newTag)
}



function next(){
    if(!Book.length<=0){
        document.getElementById("header").classList.add("hidden")
        document.getElementById("main").classList.add("hidden")
        document.getElementById("success").classList.remove("hidden")
        document.getElementById("success").classList.add("flex")
    }
}



function cupon(){
   let cupon= document.getElementById("cupon").value;
    if(cupon==="NEW15"||cupon==="Couple 20"){
        document.getElementById("cuponHide").classList.add("hidden")
        updateGrandValue(cupon)
    }
    else{
        console.log("madari cupon ",cupon)
    }
}


function updateGrandValue(cupon){
 let currentGAmt = parseInt(document.getElementById("grandAmt").innerText)
    if(cupon=="NEW15"){
        updateAmt=currentGAmt-(currentGAmt*(15/100))
        document.getElementById("grandAmt").innerText=updateAmt;
    }
    else{
        updateAmt=currentGAmt-(currentGAmt*(20/100))
        document.getElementById("grandAmt").innerText=updateAmt;
    }

}



function buyTicket(Id){
    if(!Book.includes(Id)&&Book.length<=3){
    Book.push(Id)
    setBackgroundColor(Id)
    newElement(Id)
   text= document.getElementById('seatCount').innerText
   Numbertext=getSeat();
   Numbertext++
    setSeat(Numbertext++)
    handleSeatLeft();
    Book.length*550
        document.getElementById("generalAmount").innerText=Book.length*550
        document.getElementById("grandAmt").innerText=Book.length*550

    }
else{
    console.log("seat is already selected")
}

}