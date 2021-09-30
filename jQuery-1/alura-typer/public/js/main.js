var campo = $(".campo-digitacao");
var tempoInicial = $("#tempo-digitacao").text();

$(document).ready(function(){

    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    atualizaPlacar();
    $("#botao-reiniciar").click(reiniciaJogo);
    $("#usuarios").selectize({
            create: true,
            sortField: 'text'
        });
    $(".tooltip").tooltipster({
        trigger: "custom"
    });
});

function atualizaTempoInicial(tempo){

    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campo.on("input", function() {
        var conteudo = campo.val();

        var quantidadePalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(quantidadePalavras);

        var quantidadeCaracteres = conteudo.length;
        $("#contador-caracteres").text(quantidadeCaracteres);
    });
}

function inicializaCronometro(){
    campo.one("focus", function() {
        var tempoRestante = $("#tempo-digitacao").text();
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante < 1) {
            clearInterval(cronometroID);
            $("#botao-reiniciar").attr("disabled", false);
            finalizaJogo();   
        }
    }, 1000);
});
}

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

function inicializaMarcadores() {
    
    campo.on("input", function() {
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0 , digitado.length);

        if(digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function reiniciaJogo() {
    
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0"); 
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
}