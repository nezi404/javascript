function checkbutton(){
    if (document.getElementById("verao").checked){
        document.getElementById("disc").innerHTML+="Summer was picked as your favourite season!!!"
        document.getElementById("disc").innerHTML+=document.getElementById("verao").value + "verao button is checked"
    }

    else if (document.getElementById("inverno").checked){
        document.getElementById("disc").innerHTML+="Winter was picked as your favourite season!!!"
        document.getElementById("disc").innerHTML+=document.getElementById("inverno").value + "inverno button is checked"
    }

    else if (document.getElementById("primavera").checked){
        document.getElementById("disc").innerHTML+="Spring was picked as your favourite season!!!"
        document.getElementById("disc").innerHTML+=document.getElementById("primavera").value + "primavera button is checked"
    }

    else if (document.getElementById("autono").checked){
        document.getElementById("disc").innerHTML+="Fall was picked as your favourite season!!!"
        document.getElementById("disc").innerHTML+=document.getElementById("autono").value + "autono button is checked"
    }

    else{
        document.getElementById("error").innerHTML="None was picked!!! Try again"
    }
}