// -------- User --------
const resultUser = document.getElementById('resultUser');

const buttonChamar = document.getElementById('chamarTaxi').addEventListener("click", function() { handleClick("buttonChamar"); });
const buttonSairUser = document.getElementById('sair').addEventListener("click", function() { handleClick("buttonSairUser"); });

function handleClick(botaoId) {
    switch (botaoId){
        case 'buttonChamar':
            if (resultUser.innerText !== '') {
                resultUser.innerText = "";
            }
            let formChamar = document.createElement('form');
            formChamar.innerHTML =`
                <label for="localizacaoUser">Digite sua localização: </label>
                <input type="number" name="localizacaoUser" id="localizacaoUser">

                <button type="button" onclick="encontrarTaxi(document.getElementById('localizacaoUser').value, document.getElementById('nameUser').value);">Mandar</button>
            `;
            resultUser.appendChild(formChamar);
            break;

        case 'buttonSairUser':
            resultUser.innerText = "";
            break;
    }
}

const corridas = [];

function encontrarTaxi(localizacaoUser, nameUser) {
    resultUser.innerText = "";

    let listaRecuperada = JSON.parse(localStorage.getItem("ListaTaxis"));
    if (!listaRecuperada) {
        resultUser.innerHTML = "<p>Não há táxis disponíveis no momento.</p>";
        return;
    }

    let taxiMaisProximo = null;
    let distanciaMinima = Infinity;
    listaRecuperada.forEach(taxi => {
        const distancia = Math.abs(taxi.localizacao - localizacaoUser);
        if (distancia < distanciaMinima) {
            distanciaMinima = distancia;
            taxiMaisProximo = taxi;
        }
    });

    let corrida = {
        motorista: taxiMaisProximo.nome,
        cliente: nameUser,
        localizacaoCliente: localizacaoUser,
        localizacaoTaxi: taxiMaisProximo.localizacao
    }
    let corridasAnteriores = JSON.parse(localStorage.getItem("ListaCorridas")) || [];
    corridasAnteriores.push(corrida);
    localStorage.setItem("ListaCorridas", JSON.stringify(corridasAnteriores));

    if (taxiMaisProximo) {
        resultUser.innerHTML = `
            <p>O táxi mais próximo é o motorista ${taxiMaisProximo.nome}, 
            que está localizado em ${taxiMaisProximo.localizacao}.</p>
        `;
    } else {
        resultUser.innerHTML = "<p>Não há táxis disponíveis no momento.</p>";
    }
}


