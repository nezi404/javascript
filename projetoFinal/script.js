    function saveTextAsFile() {
      var nameToSave = document.getElementById("inputSaveFile").value;
      var ageToSave = document.getElementById("inputAgeToSave").value;
      var descToSave = document.getElementById("inputTextToSave").value;
      var nome = document.getElementById("inputNameToSave").value
      var modelo = document.getElementById("modelos").value;
      var marca = document.getElementById("marca").value;
      var data = document.getElementById("inputDataDevolucao").value;
      var textToSave = "Nome: " + nome + "\n" + "Idade: " + ageToSave + "\n" + "Descrição:" + "\n" + descToSave + "\n" + "Marca:" + marca + "\n" + "Modelo:" + modelo + "\n" + "Data de devoluçaõ: " + data;
      var nameToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});

      var textToSaveAsURL = window.URL.createObjectURL(nameToSaveAsBlob);

      var downloadLink = document.createElement("a");
      downloadLink.download = nameToSave;
      downloadLink.innerHTML = "Download File";
      downloadLink.href = textToSaveAsURL;
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);

      downloadLink.click();
    }

    function destroyClickedElement(event) {
      document.body.removeChild(event.target);
    }

    function loadFileAsText() {
      var fileToLoad = document.getElementById("fileToLoad").files[0];

      var fileReader = new FileReader();
      fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
      };
      fileReader.readAsText(fileToLoad, "UTF-8");
    }

    var openFile = function (event) {
      var input = event.target;

      var reader = new FileReader();
      reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById('output');
        output.src = dataURL;
        output.width = 40;
      };
      reader.readAsDataURL(input.files[0]);
    };