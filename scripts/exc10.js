const result = document.getElementById('result');

function apostarTigrinho() {
    let escolha = document.getElementById('mySelect').value;

    let resultado = '';
    
    let areas = ['1', '2', '3', '4', '5', '6'];
    let choice = Math.floor(Math.random() * 6);
    let choiceTigrinho = areas[choice];

    if (escolha === choiceTigrinho) {
        resultado = 'Parabéns! Você ganhou o prêmio!';
    } else {
        resultado = 'Que pena, você não ganhou dessa vez.';
    }

    switch(choiceTigrinho){
        case '1':
            premio = 100;
            break;
        case '2':
            premio = 500;
            break;
        case '3':
            premio = 1000;
            break;
        case '4':
            premio = 10;
            break;
        case '5':
            premio = 100000;
            break;
        case '6':
            premio = 50000;
            break;
    }

    result.innerHTML =`
    <p>A roleta girou... e caiu na Área ${choiceTigrinho} - Prêmio: R$${premio}</p>
    <p>${resultado}</p>

    <br><br>
    <p>Deseja jogar novamente?</p>
    <button onclick="javascript:sim();">Sim</button>
    <button onclick="javascript:sair();">Não</button>
    `;
}

function sim(){
    window.location.reload()
}
function sair(){
    window.location.href = '/main.html'
}