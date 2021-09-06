    var botaoAdicionar = document.querySelector("#adicionar-paciente");

    botaoAdicionar.addEventListener("click", function(event){
    
        event.preventDefault();  //previne o comportamento padrão do formulário (reiniciar sem adicionar as alterações)

        var form = document.querySelector("#form-adiciona"); // tras para o JS toda informação trazida pelo input do formulário
    
        var paciente = obtemPacienteDoFormulario(form);
            
        
        
        var erros = validaPaciente(paciente);

        if(erros.length > 0){
           
            exibeMensagensDeErro(erros);
            return; //impede imprimir elementos inválidos na tabela
        }
    
        adicionaPacienteNaTabela(paciente);
               
        form.reset();
        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = "";

    });

    function adicionaPacienteNaTabela(paciente) {

        var pacienteTr = montaTr(paciente);
        var tabela = document.querySelector("#tabela-pacientes"); // adiciona paciente na tabela
        tabela.appendChild(pacienteTr); 
    }

    function exibeMensagensDeErro(erros){

        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";

        erros.forEach(function(erro){

            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
    }

    function obtemPacienteDoFormulario(form){
        
        var paciente = { //objeto paciente
            
            nome: form.nome.value, //parâmetros do objeto
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc (form.peso.value,form.altura.value)
        }
    
        return paciente;
    }

    function montaTr(paciente){ //cria linha da tabela  
    
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
       
        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); 
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
        
        return pacienteTr;
    }
    
    function montaTd(dado,classe){ // cria célula da tabela
        
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);

        return td;
    }

    function validaPaciente(paciente){

        var erros = [];

        if (paciente.nome.length == 0){

            erros.push("Adicione um nome válido!");
        }

        if (!validaPeso(paciente.peso)){
    
            erros.push("O peso é inválido!");
        }  
        
        if (!validaAltura(paciente.altura)){

            erros.push("A altura é inválida!");
        }

        
        if (paciente.peso.length == 0){
            
            erros.push("Adicione o peso do paciente.");
        }
        
        if (paciente.altura.length == 0){
            
            erros.push("Adicione a altura do paciente.");
        }
        
        if (paciente.gordura.length == 0){

            erros.push("Adicione a gordura corporal!");
        }
        return erros;
    }