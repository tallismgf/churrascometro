var homemCarne = 600;
var mulherCarne = 480
var criancaCarne = 300


function Calcular() {
    var homem = document.getElementById("homem");
    var mulher = document.getElementById("mulher");
    var crianca = document.getElementById("crianca");
    var totalCarne = homem * homemCarne + mulher * mulherCarne + crianca * criancaCarne;
    var qtdCarnes = 0
    var alcatra = document.getElementById("alcatra").checked;
    if alcatra == true {
        qtdCarnes += 1;
    }

    document.getElementById("resultado").innerHTML = totalCarne;
}