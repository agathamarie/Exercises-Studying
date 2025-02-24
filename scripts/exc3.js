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

                <button type="button" onclick="javascript:reservarAssento();">Reservar</button>
                `;
            result.appendChild(formReserva);

            break;
        case 'buttonMapa':
            if (result != ''){
                result.innerText = "";
            }
            let formRastrear = document.createElement('p');
            formRastrear.innerHTML =`
                ${mapa}
                `;
            result.appendChild(formRastrear);

            break;
        case 'buttonSair':
            result.innerText = "";
            break;
    }
}

const avioes = {}


function addAviao(){
    let nomeAviao = document.getElementById('nameAviao').value;
    let fileirasAviao = document.getElementById('fileirasAviao').value;
    let assentosAviao = document.getElementById('assentoFileira').value;
    
    let mapaAviao = '';
    let os = '';
    for (let i = 0; i < assentosAviao; i++) {
        os += 'O';
    }
    for (let i = 0; i < fileirasAviao; i++) {
        mapaAviao += os;
        if (i < fileirasAviao - 1) {
            mapaAviao += ' <br> ';
        }
    }
    
    let aviao = {
        nome: nomeAviao,
        fileiras: fileirasAviao,
        assentos: assentosAviao,
        mapa: mapaAviao
    }
    avioes.push(aviao);

    alert('Avião adcionado com sucesso!')
}

function reservarAssento(){
    let nomeAviao = document.getElementById('nameAviao').value;
    let fileiraCliente = document.getElementById('fileiraCliente').value;
    let assentoCliente = document.getElementById('assentoCliente').value;

    // Fazer a validação do aviao escolhido e tals

    mapaList = mapa.split(' <br> ');
    assentoEscolhido = mapaList[fileiraCliente][assentoCliente];

    if(assentoEscolhido == 'X'){
        alert('Assento já reservado, escolha outro!');
    }
    alert('Assento livre e agora reservado!');
    let str = mapaList[fileiraCliente];
    let arr = str.split('');
    arr[assentoCliente] = 'X';
    list[fileiraCliente] = arr.join('');

    let delemiter = '<br>'
    let mapaNovo = delemiter.join(mapaList);

    aviao = {...avioes, mapa: mapaNovo}
}