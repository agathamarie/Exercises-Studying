const result = document.getElementById('results');

const buttonAdd = document.getElementById('addPacote').addEventListener("click", function() { handleClick("buttonAdd"); });
const buttonUpdate = document.getElementById('updatePacote').addEventListener("click", function() { handleClick("buttonUpdate"); });
const buttonRastrear = document.getElementById('rastrearPacote').addEventListener("click", function() { handleClick("buttonRastrear"); });
const buttonSair = document.getElementById('sair').addEventListener("click", function() { handleClick("buttonSair"); });


function handleClick(botaoId) {
    switch (botaoId){
        case 'buttonAdd':
            if (result != ''){
                result.innerText = "";
            }
            let formAdd = document.createElement('form');
            formAdd.innerHTML =`
                <label for="codRastre">Digite o número de rastreamento: </label>
                <input type="number" name="codRastre" id="codRastre">
                <label for="namePacote">Digite o nome do pacote: </label>
                <input type="text" name="namePacote" id="namePacote">
                <label for="optionStatus">selecione o novo status: </label>
                <select id="optionStatus">
                    <option>Preparando</option>
                    <option>Enviado</option>
                    <option>Chegou ao destino</option>
                    <option>Cancelado</option>
                </select>
                <button type="button" onclick="javascript:addPacote();">Adicionar</button>
                `;
            result.appendChild(formAdd);

            break;
        case 'buttonUpdate':
            if (result != ''){
                result.innerText = "";
            }
            let formUpdate = document.createElement('form');
            formUpdate.innerHTML =`
                <label for="codRastre">Digite o número de rastreamento: </label>
                <input type="number" name="codRastre" id="codRastre">
                <label for="optionStatus">selecione o novo status: </label>
                <select id="optionStatus">
                    <option value="Preparando">Preparando</option>
                    <option value="Enviado">Enviado</option>
                    <option value="Chegou ao destino">Chegou ao destino</option>
                    <option value="Cancelado">Cancelado</option>
                </select>
                <button type="button" onclick="javascript:updatePacote();">Salvar</button>
                `;
            result.appendChild(formUpdate);

            break;
        case 'buttonRastrear':
            if (result != ''){
                result.innerText = "";
            }
            let formRastrear = document.createElement('form');
            formRastrear.innerHTML =`
                <label for="codRastre">Digite o número de rastreamento: </label>
                <input type="number" name="codRastre" id="codRastre">
                <button type="button" onclick="javascript:rastrearPacote();">Rastrear</button>
                `;
            result.appendChild(formRastrear);

            break;
        case 'buttonSair':
            result.innerText = "";
            break;
    }
}

const pacotes = [];
console.log(pacotes);

function addPacote(){
    let nomePacote = document.getElementById('namePacote').value;
    let optionStatus = document.getElementById('optionStatus').value;
    let codRastreamento = document.getElementById('codRastre').value;
    
    if (nomePacote == '' || optionStatus == '' || codRastreamento == '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    for (let cods of pacotes){
        if (cods.codRastreio == codRastreamento) { 
            alert('Pacote já existe!');
            return; 
        }
    }
    let pacote = {
        name: nomePacote,
        codRastreio: codRastreamento,
        status: optionStatus
    }
    pacotes.push(pacote);

    alert('Pacote adicionado com sucesso!');
    console.log(pacotes);
}

function updatePacote(){
    let codRastreamento = document.getElementById('codRastre').value;

    if (codRastreamento == '') {
        alert('Digite o número de rastreamento!');
        return;
    }

    let pacoteExistente = pacotes.find(p => p.codRastreio == codRastreamento);
    if (!pacoteExistente) { 
        alert('Pacote não existente! Crie ele primeiro :)');
        return;
    }

    let optionStatus = document.getElementById('optionStatus').value;
    
    if (optionStatus == '') {
        alert('Por favor, selecione o novo status!');
        return;
    }

    pacoteExistente.status = optionStatus;

    alert('Status atualizado com sucesso!');
    console.log(pacotes);
}


function rastrearPacote(){
    let codRastreamento = document.getElementById('codRastre').value;

    if (codRastreamento == '') {
        alert('Digite o número de rastreamento!');
        return;
    }

    let pacoteExistente = pacotes.find(p => p.codRastreio == codRastreamento);
    if (!pacoteExistente) { 
        alert('Pacote não existente!');
        return;
    }

    let status = pacoteExistente ? pacoteExistente.status : 'não definido';
    
    let formRastrear = document.createElement('form');
    formRastrear.innerHTML =`
        <p>Status do pacote: ${status}</p>
    `;
    result.appendChild(formRastrear);

    console.log(pacotes);
}