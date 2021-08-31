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

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000){
        
        pesoValido = false;
        tdPeso.textContent = "Peso inválido!";
        paciente.classList.add ("dado-invalido");
    }

    if (altura <= 0 || altura >= 3.00){
        
        alturaValida = false;
        tdAltura.textContent = "Altura inválida!"
        paciente.classList.add ("dado-invalido");    
    }

    if (pesoValido && alturaValida){
        
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
        } else {
    
        tdImc.textContent = "Peso e/ou altura inválido(s)!"
    }
}

function calculaImc(peso, altura){

    var imc = 0; 

    imc = peso/ (altura*altura);

    return imc.toFixed(2);

}