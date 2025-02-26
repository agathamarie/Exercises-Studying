const result = document.getElementById('result');
const avisos = document.getElementById('avisos');

let temperaturas = [];
let limiteCritico = null;

function addLimite(){
    result.innerText = "";

    let inputQtd = document.createElement('form');
    inputQtd.innerHTML += `
        <label for="valuelimite">Digite o limite crítico de temperatura: </label>
        <input type="number" name="valuelimite" id="valuelimite" min="1">
        <button type="button" onclick="saveLimite(document.getElementById('valuelimite').value);">Enviar</button>
    `;
    result.appendChild(inputQtd);
}

function saveLimite(valuelimite){
    limiteCritico = parseFloat(valuelimite); 
    result.innerText = "";
    if (isNaN(limiteCritico)) {
        alert('Por favor, insira um número válido para o limite crítico!');
    } else {
        alert('Limite Crítico adicionado com sucesso!');
    }
}

function addInputs() {
    result.innerText = "";

    let inputQtd = document.createElement('form');
    inputQtd.innerHTML += `
        <label for="qtdInputs">Digite o número de registros de temperatura: </label>
        <input type="number" name="qtdInputs" id="qtdInputs">
        <button type="button" onclick="addTemperaturas(document.getElementById('qtdInputs').value);">Enviar</button>
    `;
    result.appendChild(inputQtd);
}

function addTemperaturas(qtdInputs) {
    result.innerText = "";

    let inputTemperatura = document.createElement('form');
    for (let i = 1; i <= qtdInputs; i++) {
        inputTemperatura.innerHTML += `
            <label for="temperatura${i}">Digite a temperatura ${i}: </label>
            <input type="number" name="temperatura${i}" id="temperatura${i}">
        `;
    }
    inputTemperatura.innerHTML += `
        <button type="button" onclick="saveTemperaturas(${qtdInputs});">Enviar</button>
    `;
    result.appendChild(inputTemperatura);
}

function saveTemperaturas(qtdInputs) {
    if (limiteCritico === null) {
        alert('Por favor, defina o limite crítico primeiro!');
        return;
    }

    temperaturas = [];
    let total = 0;
    
    for (let i = 1; i <= qtdInputs; i++) {
        let temperaturaNum = parseFloat(document.getElementById(`temperatura${i}`).value);
        if (isNaN(temperaturaNum)) {
            alert(`Temperatura ${i} inválida. Insira um número válido.`);
            return;
        }
        let temperatura = {
            numero: i,
            celsius: temperaturaNum
        };
        temperaturas.push(temperatura);
        total += temperaturaNum;
    }

    alert('Temperaturas adicionadas com sucesso!');
    result.innerText = "";

    let media = total / temperaturas.length;

    let maior = temperaturas[0].celsius;
    let menor = temperaturas[0].celsius;
    for (let i = 1; i < temperaturas.length; i++) {
        if (temperaturas[i].celsius > maior) {
            maior = temperaturas[i].celsius;
        }
        if (temperaturas[i].celsius < menor) {
            menor = temperaturas[i].celsius;
        }
    }

    avisos.innerHTML = `
        <p>Maior temperatura: ${maior}ºC</p>
        <p>Menor temperatura: ${menor}ºC</p>
        <p>Média das temperaturas: ${media.toFixed(2)}ºC</p>
    `;

    let string = '';
    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i].celsius > limiteCritico) {
            string += `Temperatura ${temperaturas[i].numero}: ${temperaturas[i].celsius}ºC está acima do limite crítico!\n`;
        }
    }

    if (string) {
        alert(`Alerta! Temperaturas ultrapassaram o limite crítico:\n${string}`);
    }
}

function verTemperatura(){
    let temperaturasElement = document.createElement('p');
    for (let i = 0; i < temperaturas.length; i++){
        temperaturasElement.innerHTML += `
            Temperatura ${i}: ${temperaturas[i].celsius}ºC<br>
        `;
    }
    result.appendChild(temperaturasElement);
}