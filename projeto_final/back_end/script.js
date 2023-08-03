var openFile = function(event){
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
        var dataURL = reader.result;
        var output = document.getElementById("output");
        output.src = dataURL;
        output.width = 250;
    };

    reader.readAsDataURL(input.files[0]);
}

function salvarTexto(){
    var descricao = document.getElementById("descricaoDoEquipamento").value;
    var idade = document.getElementById("idade").value;
    var modelo = document.getElementById("modelo").value;
    var marca = document.getElementById("marca").value;
    var nome = document.getElementById("nomeDaPessoa").value;
    var data = document.getElementById("dataParaDevolucao").value;
    var textToSave = "Nome: " + nome  + "\n" + "Idade: "+ idade + "\n" + "Modelo: " + modelo + "\n" + "Marca: " + marca + "\n" + "Descrição:\n" + descricao + "\n" + "Data para devolução:\n" + data;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("nomeDoArquivo").value;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    
    downloadLink.click();
}

function destroyClickedElement(event){
    document.body.removeChild(event.target);

}

function lerArquivoTexto(){
    var fileToLoad = document.getElementById("arquivoPraLeitura").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent)
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("descricaoDoEquipamento").value = textFromFileLoaded;

    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}
  