var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes [i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura= tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido){ //if só executa quando a condição for true!
        
        pesoValido = false;
        tdPeso.textContent = "Peso inválido!";
        paciente.classList.add ("dado-invalido");
    }

    if (!alturaValida){
        
        alturaValida = false;
        tdAltura.textContent = "Altura inválida!"
        paciente.classList.add ("dado-invalido");    
    }

    if (pesoValido && alturaValida){
        
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
        } else {
    
        tdImc.textContent = "-"
    }
}

function validaPeso(peso){

    if (peso >= 0 && peso < 1000){
        
        return true;        
    } else{

        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {

        return true;        
    } else{
        return false;
    }    
}

function calculaImc(peso, altura){

    var imc = 0; 

    imc = peso/(altura*altura);

    return imc.toFixed(2);
}