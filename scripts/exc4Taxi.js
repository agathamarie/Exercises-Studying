// -------- Taxista --------
const resultTaxi = document.getElementById('resultTaxi');
const corridas = document.getElementById('corridas');


const buttonAdd = document.getElementById('addTaxis').addEventListener("click", function() { handleClick("buttonAdd"); });
const buttonStatus = document.getElementById('statusTaxis').addEventListener("click", function() { handleClick("buttonStatus"); });
const buttonDelete = document.getElementById('apagarTaxis').addEventListener("click", function() { handleClick("buttonDelete"); });
const buttonSairTaxi = document.getElementById('sair').addEventListener("click", function() { handleClick("buttonSairTaxi"); });

function handleClick(botaoId) {
    switch (botaoId){
        case 'buttonAdd':
            if (resultTaxi.innerText !== '') {
                resultTaxi.innerText = "";
            }
            let formAdd = document.createElement('form');
            formAdd.innerHTML =`
                <label for="qtdTaxi">Digite o número de táxis disponíveis hoje: </label>
                <input type="number" name="qtdTaxi" id="qtdTaxi">

                <button type="button" onclick="addTaxis(document.getElementById('qtdTaxi').value);">Mandar</button>
            `;
            resultTaxi.appendChild(formAdd);
            break;

        case 'buttonStatus':
            if (resultTaxi.innerText !== '') {
                resultTaxi.innerText = "";
            }

            if (taxis.length === 0) {
                resultTaxi.innerText = "Nenhum táxi cadastrado.";
                return;
            }

            taxis.forEach((taxi, i) => {
                let status = document.createElement('p');
                status.innerHTML = `Taxi ${i + 1} - ${taxi.nome} : Localização ${taxi.localizacao}`;
                resultTaxi.appendChild(status);
            });
            break;

        case 'buttonDelete':
            var resultado = confirm('Tem certeza que quer apagar hisótico e motoristas de hoje?');

            if(resultado){
                localStorage.removeItem('ListaTaxis');
                localStorage.removeItem('ListaCorridas');
                taxis.shift(0, taxis.length);
                corridas.innerHTML += '';
                alert('Motoristas e histórico de hoje apagados!')
            } else{
                alert('Nenhum motorista apagado :)')
            }

            break;

        case 'buttonSairTaxi':
            window.location.href = '/main.html'
            break;
    }
}

const taxis = [];


function addTaxis(qtdTaxi) {
    resultTaxi.innerText = "";

    let inputTaxi = document.createElement('form');

    for (let i = 1; i <= qtdTaxi; i++) {
        inputTaxi.innerHTML += `
            <label for="taxi${i}">Nome do Motorista Taxi${i}: </label>
            <input type="text" name="taxi${i}" id="taxi${i}">

            <label for="localTaxi${i}">Digite a localização inicial do Táxi${i}: </label>
            <input type="number" name="localTaxi${i}" id="localTaxi${i}">
        `;
    }

    inputTaxi.innerHTML += `
        <button type="button" onclick="salvarTaxis(${qtdTaxi});">Enviar</button>
    `;
    resultTaxi.appendChild(inputTaxi);
}

function salvarTaxis(qtdTaxi) {
    for (let i = 1; i <= qtdTaxi; i++) {
        let taxiNome = document.getElementById(`taxi${i}`).value;
        let localTaxi = document.getElementById(`localTaxi${i}`).value;

        let taxi = {
            nome: taxiNome,
            numero: i,
            localizacao: localTaxi
        };

        taxis.push(taxi);
    }

    alert('Taxistas adicionados com sucesso!');
    resultTaxi.innerText = "";
    console.log(taxis);

    localStorage.setItem("ListaTaxis", JSON.stringify(taxis));
    console.log("Lista salva:", localStorage.getItem("ListaTaxis"));
}

let corridasRecuperada = JSON.parse(localStorage.getItem("ListaCorridas"));
if(!corridasRecuperada){
    corridas.innerHTML = "<p>Nenhuma corrida ainda!</p>";
} else{
    corridasRecuperada.forEach(corrida => {
        corridas.innerHTML += `
            <p>${corrida.cliente} solicitou uma corrida, ${corrida.motorista} é o motorista mais próximo. 
            ${corrida.cliente} está na localização: ${corrida.localizacaoCliente} & ${corrida.motorista} está na localização: ${corrida.localizacaoTaxi}.</p> <br>
        `;
    });
}