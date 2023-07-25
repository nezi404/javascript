function contagem(){
    let cont=0;
    let num = Number(document.getElementById('fnum').value);
    let saida = document.getElementById('saida');

    while (cont <= num){
        saida.innerHTML += `<p>&#x1F449;${cont}</p>`
        cont ++
        console.log(cont)
    }
}