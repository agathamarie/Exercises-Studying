const result = document.getElementById('result');

function gerarSenha(){
    result.innerHTML = '';

    let formGerarsenha = document.createElement('form');
    formGerarsenha.innerHTML = `
        <h2>Gerar senha</h2>
        <label for="nomePaciente">Nome do Paciente: </label>
        <input type="text" name="nomePaciente" id="nomePaciente">
        <label for="nomeMedico">Nome do Médico: </label>
        <input type="text" name="nomeMedico" id="nomeMedico">

        <button type="button" onclick="saveSenha(document.getElementById('nomePaciente').value, document.getElementById('nomeMedico').value)">Adicionar</button>
    `;
    result.appendChild(formGerarsenha);
}
    let senhas = [];
    function saveSenha(nomePaciente, nomeMedico){
        let numeroSenha;
        if(senhas.length === 0){
            numeroSenha = 1;
        } else {
            numeroSenha = senhas[senhas.length - 1].senhaNum + 1;
        }
        
        let senha = {
            paciente: nomePaciente,
            medico: nomeMedico,
            senhaNum: numeroSenha,
            status: 'Pendente'
        };
        senhas.push(senha);
        alert(`Senha ${numeroSenha} gerada com sucesso!`);
        result.innerText = "";
    }

function chamarPaciente(){
    result.innerHTML = '';

    let formChamarPaciente = document.createElement('form');
    formChamarPaciente.innerHTML = `
        <br><br>
        <p>Chamar paciente por: </p>
        <select id="mySelect">
            
            <option value="nomePaciente">Nome</option>
            <option value="senhaPaciente">Senha</option>
        </select>
        <input type="text" id="inputSelect" placeholder="Digite aqui: ">
        <br><br>
        <button type="button" onclick="pacienteChamar()">Chamar</button>
    `;
    result.appendChild(formChamarPaciente);
}
    function pacienteChamar() {
        let selectElement = document.getElementById('mySelect');
        let inputElement = document.getElementById('inputSelect');

        console.log(selectElement, inputElement);

        if (selectElement && inputElement) {
            let inputValue = inputElement.value;
            let escolha = selectElement.value;

            if (escolha === "nomePaciente") {
                let namePaciente = inputValue;
                let encontrado = false;
                senhas.forEach(senha => {
                    if (senha.paciente === namePaciente) {
                        let numSenha = senha.senhaNum;
                        encontrado = true;
                        alert(`Paciente com a senha ${numSenha} chamado para atendimento.`);
                        senha.status = 'Chamado';
                    }
                });

                if (!encontrado) {
                    alert(`A senha do paciente ${namePaciente} não foi gerada ainda!`);
                }
            } else if (escolha === "senhaPaciente") {
                let numPaciente = Number(inputValue);
                if (isNaN(numPaciente)) {
                    alert('Caso tenha escolhido senha, digite um número!');
                    return;
                }

                let encontrado = false;
                senhas.forEach(senha => {
                    if (senha.senhaNum === numPaciente) {
                        encontrado = true;
                        alert(`Paciente com a senha ${numPaciente} chamado para atendimento.`);
                        senha.status = 'Chamado';
                    }
                });

                if (!encontrado) {
                    alert(`A senha número ${numPaciente} não foi gerada ainda!`);
                }
            }
        } else {
            alert("Erro: Alguma coisa deu ruim :(");
        }

        result.innerHTML = ''; 
    }



function senhasPendentes(){
    result.innerHTML = '';
    let senhasPendentes = [];

    senhas.forEach(senha =>{
        if (senha.status == 'Pendente'){
            senhasPendentes.push(senha);
        }
    });

    let listaPendentes = document.createElement('p')
    for (let i = 0; i < senhasPendentes.length; i++){
        listaPendentes.innerHTML +=`
            Senha número ${senhasPendentes[i].senhaNum} | Paciente: ${senhasPendentes[i].paciente} | Médico: ${senhasPendentes[i].medico}<br>
        `;
    }
    result.appendChild(listaPendentes);
}

function sair(){
    window.location.href = '/main.html'
}