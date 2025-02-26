const result = document.getElementById('result');

let chamados = [];

function registrarChamado(){
    result.innerText = "";
    let inputAdd = document.createElement('form');
    inputAdd.innerHTML += `
        <label for="problema">Descreva o problema: </label>
        <input type="text" name="problema" id="problema">
        <button type="button" onclick="saveChamado(document.getElementById('problema').value);">Enviar</button>
    `;
    result.appendChild(inputAdd);
}
function saveChamado(problema){
    let idChamado;
    if(chamados.length === 0){
        idChamado = 1;
    } else {
        idChamado = chamados[chamados.length - 1].id + 1;
    }
    let chamado = {
        id: idChamado,
        descrição: problema,
        status: 'Aberto'
    };
    chamados.push(chamado);
    alert(`Chamado registrado com sucesso! ID: ${idChamado}`)
    result.innerText = "";
    console.log(chamados)
}

function listarChamado(){
    result.innerText = "";
    let elementChamado = document.createElement('p')
    for (let i = 0; i < chamados.length; i++){
        elementChamado.innerHTML +=`
            ID: ${chamados[i].id} | Problema: ${chamados[i].descrição} | Status: ${chamados[i].status}<br>
        `;
    }
    result.appendChild(elementChamado);
}

function resolverChamado(){
    result.innerText = "";
    let inputID = document.createElement('form')
    inputID.innerHTML +=`
        <label for="idChamado">Digite o ID do chamado que deseja resolver: </label>
        <input type="number" name="idChamado" id="idChamado">
        <button type="button" onclick="saveResolver(document.getElementById('idChamado').value);">Enviar</button>
    `;
    result.appendChild(inputID);   
}
function saveResolver(idChamado){
    chamados[(idChamado-1)].status = 'Resolvido';
    alert(`Chamado ${idChamado} foi resolvido!`)
    result.innerText = "";
}

function sair(){
    window.location.href = '/main.html'
}