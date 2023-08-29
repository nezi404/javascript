/*
 Escreva uma função em JavaScript que mostre na tela a mensagem “Bom dia, 
Mundo!!!”.
*/

printar = (a) => a.innerHTML = "Bom dia, Mundo!!!";

cubo = (a) => a.innerHTML = " " + document.getElementById("i2").value**3;

celsius = (a) => a.innerHTML = " " + (document.getElementById("i3").value - 32)*(5/9).toFixed(3);

area = (a) => a.innerHTML += " " + ((document.getElementById("i4_h").value * document.getElementById("i4_b").value)/2).toFixed(2);

circulo = (a) => {
    let area = 3.14 * document.getElementById("i5").value ** 2;
    console.log(area);
    let perimetro = 2 * 3.14 * document.getElementById("i5").value;
    console.log(perimetro);
    a.innerHTML += "\nArea: " + area + " Perimetro: " + perimetro;

}

reverte = (a) => {
    let num_str = (document.getElementById("i6").value).toString();
    console.log(num_str);
    let array_str = num_str.split('');
    console.log(array_str);
    let rev_str = array_str.reverse();
    console.log(rev_str)
    a.innerHTML += " " + rev_str.join('');
    console.log(rev_str.join(''))
}

conta_vogal = (a) => {
    let cont = 0;
    for ( let i = 0; i < (document.getElementById("i7").value).length; i++){
        let letra = (document.getElementById("i7").value).charAt(i);
        letra = letra.toLowerCase();
        if (letra == 'a' || letra == 'e'|| letra == 'i'|| letra == 'o' || letra == 'u' )
            cont += 1;
    }
    
    a.innerHTML = "<br>" + "A palavra " + document.getElementById("i7").value + " tem " + cont + " vogais";
}

montante = (a) => {
    let cap = parseInt(document.getElementById("i8_cap").value);
    let tax = parseFloat(document.getElementById("i8_tax").value);
    let tem = parseInt(document.getElementById("i8_mes").value);
    let mont = cap *((1 + tax)**tem);

    a.innerHTML = "<br> Montante= " + mont;
    console.log(mont);
}

fatorial = (a) => {
    let fat=1;
    let num = document.getElementById("i9").value;
    for (let i = 1; i <= num; i++){
        fat*=i;
    }

    a.innerHTML = "<br>Fatorial de " + num + " é " + fat;
    return fat;
}

conta_caractere = (a) => {
    let frase = document.getElementById("i10_str").value;
    let letra = (document.getElementById("i10_char").value).charAt(0);
    let cont = 0;

    for (let i=0; i < frase.length; i++){
        if(frase.charAt(i)==letra)
            cont++;
    }

    a.innerHTML = "<br> O numero  deste caracter na frase é " + cont;
}

eh_primo = (a, b) => {
    let num = parseInt(document.getElementById(b).value);
    let ele_eh = 1;
    let divisores = [];

    for (i=2; i < num; i++){
        if(num % i == 0){
            ele_eh = 0;
            divisores.push(i);
        }
    }

    eh = (b) => (b == 1) ? "é primo" : "não é primo";  
    a.innerHTML = "O número " + num + " " +  eh(ele_eh);
    console.log(divisores);

    return ele_eh;
}

soma_elem_arr = (a) => {

    let numeros = (document.getElementById("i12").value).split(",");
    let numeros_soma = 0;
    console.log(numeros);

    for (let i = 0; i < numeros.length; i++){
        numeros_soma += parseInt(numeros[i]);
    
    }
    a.innerHTML = "A soma dos números é " + numeros_soma;
}

media_elem_arr = (a) => {

    let numeros = (document.getElementById("i13").value).split(",");
    let numeros_soma = 0;
    console.log(numeros);

    for (let i = 0; i < numeros.length; i++){
        numeros_soma += parseInt(numeros[i]);
    
    }
    a.innerHTML = "A soma dos números é " + (numeros_soma/numeros.length).toFixed(2);
}

posi_elem_arr = (a) => {

    let numeros = (document.getElementById("i14").value).split(",");
    let posi = [];
    console.log(numeros);

    for (let i = 0; i < numeros.length; i++){
        if (parseInt(numeros[i]) > 0) posi.push(parseInt(numeros[i]));
    
    }
    a.innerHTML = "Os números positivos são " + posi;

    return posi;
}

maior_elem_arr = (a) => {

    let numeros = (document.getElementById("i15").value).split(",");
    let maior=0;
    console.log(numeros);

    for (let i = 0; i < numeros.length; i++){
        if (parseInt(numeros[i]) > maior) maior = parseInt(numeros[i]);
    
    }
    a.innerHTML = "O maior numero da lista é " + maior;
}


soma_dos_digitos= (a) => {
    let num_str = (document.getElementById("i16").value).toString();
    console.log(num_str);
    let array_str = num_str.split('');
    console.log(array_str);
    let soma = 0;
    for (let i = 0; i < array_str.length; i++)
        soma+= parseInt(array_str[i])
    
    a.innerHTML = "A soma dos dígitos é " + soma;
}

print_fibonacci = (a) => {
    array_fib = []
    let soma = 0;
    let ult = 1;
    let pen = 1;

    a.innerHTML = "os numeros fibonacci";
    for(let i = 0; i < 10; i++){
        if(i == 0) array_fib.push(i)
        else if (i ==1 || i == 2) array_fib.push(1);
        else{
            soma = ult + pen;
            array_fib.push(soma);
            pen = ult;
            ult = soma;
            
        } 

        console.log(array_fib)
    }
    a.innerHTML += " " + array_fib;
}

bool_primo = (a, b) => (eh_primo(a, b) == 1) ? true : false;

maior_string = (a) => {
    let frases = document.getElementById("i19").value;
    let frases_arr = frases.split("/");
    let maior_str = "";

    for (let i = 0; i < frases_arr.length; i++){
        if (frases_arr[i].length > maior_str.length) maior_str = frases_arr[i];
    }

    a.innerHTML = "A maior frase é " + maior_str;

}

junta_array = (a) => {
    let arr_1 = document.getElementById("i20_1").value
    arr_1 = arr_1.split("/");
    let arr_2 = document.getElementById("i20_2").value
    arr_2 = arr_2.split("/");

    juntar = arr_1.concat(arr_2);
    a.innerHTML = "Arrays juntos " + juntar;
    return juntar;
}

conta_palavras = (a, b) => {
    let arr_1 = document.getElementById(b).value
    arr_1 = arr_1.split(" ");
    let num = arr_1.length;
    a.innerHTML = "A frase possui " + num + " palavras";  
}

reverte_arr = (a, b) => {
    let frase = (document.getElementById(b).value);
    let array_str = frase.split('');
    let rev_str = array_str.reverse();
    console.log(rev_str)
    a.innerHTML = rev_str.join('');
    console.log(rev_str.join(''))
}

mostra_end = (a) => {
    var endereco = {
    rua: "Av do CPA",
    numero: 1293,
    bairro: "Jardim Cuiabá",
    cidade: "Cuiabá",
    uf: "MT"
    };

    let texto = "O usuário mora em " + endereco.cidade + "/" + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + endereco.rua + " N" + endereco.numero + "."; 
    a.innerHTML = texto;
    return texto;
}

pares = (p, i) => {
    let par = [];

    console.log(p, i)

    for(let cont = (1 + parseInt(((p < i) ? p : i))) ; cont < parseInt(((p > i)) ? p : i); cont++ ){
        if (cont % 2 == 0)
           par.push(cont);
    }

    console.log(par);
    return par;
}

mostra_par = (a, b, c) => {
    let com = document.getElementById(a).value;
    let fim = document.getElementById(b).value;
    let frase = document.getElementById(c);

    let arr = pares(com, fim);

    frase.innerHTML = "Os pares foram: " + arr;

}

temHabillidade = (skills) =>{
    skills = skills.split(",");
    for(i = 0; i < skills.length; i++){
        if ((skills[i].toLowerCase())=="javascript") return true;
    }

} 

mostrar_TemHabilidade = (a, b) => (temHabillidade(document.getElementById(a).value) == true) ? document.getElementById(b).innerHTML = "Tem habilidade" : document.getElementById(b).innerHTML = "Nao tem habilidade";

experiencia = (a, b) => {
    let anos = document.getElementById(a).value;
    let frase = document.getElementById(b);
    let xp = "iiii";
    if (anos > 0 && anos <= 1) xp = "Junior";
    if (anos > 1 && anos <= 3) xp = "Pleno";
    if (anos > 3 && anos <= 6) xp = "Senior";
    if (anos > 7) xp = "Grão Mestre Jedi";
    
    frase.innerHTML = "A experiencia é de..." + xp + " !";
}

var usuarios = [{
nome: "Douglas",
habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
nome: "Elton",
habilidades: ["PHP", "Ruby on Rails", "Laravel"]
}];

perfil = (usuario, a) => {
    let frase = document.getElementById(a);
    let perfil = "O " + usuario.nome + " possui as habilidades:" + usuario.habilidades;
    frase.innerHTML = perfil
}

mostrar_perfil = () => {
    perfil(usuarios[0], "q27_1");
    perfil(usuarios[1], "q27_2");
}
