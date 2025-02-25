const result = document.getElementById('results');

const buttonAdd = document.getElementById('addAviao').addEventListener("click", function() { handleClick("buttonAdd"); });
const buttonReserva = document.getElementById('reservarAssento').addEventListener("click", function() { handleClick("buttonReserva"); });
const buttonMapa = document.getElementById('mapaAssentos').addEventListener("click", function() { handleClick("buttonMapa"); });
const buttonSair = document.getElementById('sair').addEventListener("click", function() { handleClick("buttonSair"); });


function handleClick(botaoId) {
    switch (botaoId){
        case 'buttonAdd':
            if (result != ''){
                result.innerText = "";
            }
            let formAdd = document.createElement('form');
            formAdd.innerHTML =`
                <label for="nameAviao">Nome do Avião: </label>
                <input type="text" name="nameAviao" id="nameAviao">

                <label for="fileirasAviao">Digite o número de fileiras: </label>
                <input type="text" name="fileirasAviao" id="fileirasAviao">

                <label for="assentoFileira">Digite o número de assentos por fileira: </label>
                <input type="text" name="assentoFileira" id="assentoFileira">

                <button type="button" onclick="javascript:addAviao();">Adcionar</button>
                `;
            result.appendChild(formAdd);

            break;
        case 'buttonReserva':
            if (result != ''){
                result.innerText = "";
            }
            let formReserva = document.createElement('form');
            formReserva.innerHTML =`
                <label for="nameAviao">Nome do Avião: </label>
                <input type="text" name="nameAviao" id="nameAviao">

                <label for="fileiraCliente">Digite o número da fileira: </label>
                <input type="text" name="fileiraCliente" id="fileiraCliente">

                <label for="assentoCliente">Digite o número do assento: </label>
                <input type="text" name="assentoCliente" id="assentoCliente">

                <button type="button" onclick="reservarAssento(document.getElementById('nameAviao').value, document.getElementById('fileiraCliente').value, document.getElementById('assentoCliente').value);">Reservar</button>
                `;
            result.appendChild(formReserva);

            break;
        case 'buttonMapa':
            if (result != ''){
                result.innerText = "";
            }
            let formRMapa = document.createElement('form');
            formRMapa.innerHTML =`
                <label for="nameAviao">Nome do Avião: </label>
                <input type="text" name="nameAviao" id="nameAviao">
                <button type="button" onclick="javascript:mostrarMapa(document.getElementById('nameAviao').value);">Ver Mapa</button>
                `;
            result.appendChild(formRMapa);

            break;
        case 'buttonSair':
            result.innerText = "";
            break;
    }
}

const avioes = [];

function addAviao(){
    let nomeAviao = document.getElementById('nameAviao').value;
    let fileirasAviao = document.getElementById('fileirasAviao').value;
    let assentosAviao = document.getElementById('assentoFileira').value;
    
    let mapaAviao = [];
    for (let i = 0; i < fileirasAviao; i++) {
        let fileira = [];
        for (let j = 0; j < assentosAviao; j++) {
            fileira.push('O');
        }
        mapaAviao.push(fileira);
    }
    
    let aviao = {
        nome: nomeAviao,
        fileiras: fileirasAviao,
        assentos: assentosAviao,
        mapa: mapaAviao
    }
    avioes.push(aviao);

    alert('Avião adicionado com sucesso!');
    console.log(avioes);
}

function reservarAssento(nomeAviao, fileiraCliente, assentoCliente) {
    let aviaoExistente = avioes.find(aviao => aviao.nome === nomeAviao);
    
    if (!aviaoExistente) {
        alert('Avião não encontrado!');
        return;
    }
    fileiraCliente = parseInt(fileiraCliente);
    assentoCliente = parseInt(assentoCliente);
    
    if (fileiraCliente < 1 || fileiraCliente > aviaoExistente.fileiras || assentoCliente < 1 || assentoCliente > aviaoExistente.assentos) {
        alert('Fileira ou assento inválido!');
        return;
    }

    let mapa = aviaoExistente.mapa;

    if (mapa[(fileiraCliente-1)][(assentoCliente-1)] === 'X') {
        alert('Assento já reservado!');
        return;
    }

    mapa[(fileiraCliente-1)][(assentoCliente-1)] = 'X';
    alert('Assento reservado com sucesso!');
    console.log(avioes);
}

function mostrarMapa(nomeAviao){
    let aviaoExistente = avioes.find(aviao => aviao.nome === nomeAviao);
    if (!aviaoExistente) {
        alert('Avião não encontrado!');
        return;
    }

    let mapa = aviaoExistente.mapa;
    let mapaString = mapa.map(sublista => sublista.join(" ")).join("<br>");
    let elementMapa = document.createElement('p');
    elementMapa.innerHTML = `${mapaString}`;
    result.appendChild(elementMapa);
}