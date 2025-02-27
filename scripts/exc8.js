const result = document.getElementById('result');

function temperaturaConverter() {
    result.innerHTML = '';

    let temperaturaChoice = document.createElement('form');
    temperaturaChoice.innerHTML = `
        <h2>Conversão de Temperatura</h2>
        <h3>Escolha a unidade de origem: </h3>
        <select id="mySelect">
            <option value="CtoF">Celsius para Fahrenheit</option>
            <option value="FtoC">Fahrenheit para Celsius</option>
        </select>
        <br><br>
        <input type="number" id="temperatureInput" placeholder="Digite a temperatura: ">
        <br><br>
        <button type="button" onclick="temperaturaConvertor()">Converter</button>
    `;
    
    result.appendChild(temperaturaChoice);
}
    function temperaturaConvertor() {
        let selectElement = document.getElementById('mySelect');
        let temperaturaValue = parseFloat(document.getElementById('temperatureInput').value);
        let conversaoTipo = selectElement.value;
        
        if (isNaN(temperaturaValue)) {
            alert("Insira um número válido para a temperatura.");
            return;
        }

        let temperaturaConvertida;
        if (conversaoTipo === "CtoF") {
            temperaturaConvertida = (temperaturaValue * 9/5) + 32;
            result.innerHTML = `${temperaturaValue}°C é igual a ${temperaturaConvertida.toFixed(2)}°F`;
        } else if (conversaoTipo === "FtoC") {
            temperaturaConvertida = (temperaturaValue - 32) * 5/9;
            result.innerHTML = `${temperaturaValue}°F é igual a ${temperaturaConvertida.toFixed(2)}°C`;
        }
    }

function pesoConverter(){
    let pesoChoice = document.createElement('form');
    pesoChoice.innerHTML =`
        <h2>Conversão de Peso</h2>
        <h3>Escolha a unidade de origem: </h3>
        <select id="mySelect">
            <option value="QtoL">Quilogramas para Libras</option>
            <option value="LtoQ">Libras para Quilogramas</option>
        </select>
        <br><br>
        <input type="number" id="pesoInput" placeholder="Digite o peso: ">
        <br><br>
        <button type="button" onclick="pesoConvertor()">Converter</button>
    `;
    result.appendChild(pesoChoice);
}
    function pesoConvertor() {
        let selectElement = document.getElementById('mySelect');
        let pesoValue = parseFloat(document.getElementById('pesoInput').value);
        let conversaoTipo = selectElement.value;
        
        if (isNaN(pesoValue)) {
            alert("Insira um número válido para o peso.");
            return;
        }

        let pesoConvertido;
        if (conversaoTipo === "QtoL") {
            pesoConvertido = pesoValue * 2.20463;
            result.innerHTML = `${pesoValue}kg é igual a ${pesoConvertido.toFixed(2)}lb`;
        } else if (conversaoTipo === "LtoQ") {
            pesoConvertido = pesoValue / 2.20463;
            result.innerHTML = `${pesoValue}lb é igual a ${pesoConvertido.toFixed(2)}kg`;
        }
    }

function distanciaConverter(){
    let distanciaChoice = document.createElement('form');
    distanciaChoice.innerHTML =`
        <h2>Conversão de Distância</h2>
        <h3>Escolha a unidade de origem: </h3>
        <select id="mySelect">
            <option value="MtoQ">Metros para Quilômetros</option>
            <option value="QtoM">Quilômetros para Metros</option>
        </select>
        <br><br>
        <input type="number" id="distanciaInput" placeholder="Digite a distância: "
        <br><br>
        <button type="button" onclick="distanciaConvertor()">Converter</button>
    `;
    result.appendChild(distanciaChoice);
}
    function distanciaConvertor(){
        let selectElement = document.getElementById('mySelect');
        let distanciaValue = parseFloat(document.getElementById('distanciaInput').value);
        let conversaoTipo = selectElement.value;

        if (isNaN(distanciaValue)){
            alert("Insira um número válido para a distância.");
            return;
        }

        let distanciaConvertida;
        if (conversaoTipo === "MtoQ"){
            distanciaConvertida = distanciaValue / 1000
            result.innerHTML = `${distanciaValue}m é igual a ${distanciaConvertida.toFixed(2)}km`;
        } else if (conversaoTipo === "QtoM"){
            distanciaConvertida = distanciaValue * 1000
            result.innerHTML = `${distanciaValue}km é igual a ${distanciaConvertida.toFixed(2)}m`;
        }
    }
