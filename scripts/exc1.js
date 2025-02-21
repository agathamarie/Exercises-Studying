const initial = document.getElementById('initial'); // pegando a div do botãp jogar
const divForm = document.getElementById('divForm'); // pegando a div do form
const resultGame = document.getElementById('resultGame'); // pegando a div onde acontecera os resultados

const formInput = document.createElement('form'); // criando um form para ser reutilizado
formInput.innerHTML =`
    <label for="inputGame">Digite sua opção</label>
    <select id="inputGame">
        <option>pedra</option>
        <option>papel</option>
        <option>tesoura</option>
    </select>
    <input type="button" onclick="javascript:playGame();" value="Jogar">
    `;
    // <input id="inputGame" type="text" placeholder="Pedra, Papel ou Tesoura: ">
const newElement = document.createElement('p');


let rodada = 1; // defini a rodada como 1, primeira rodada
let person = 0; // pontuação do usuario
let computer = 0; // pontuação do computador

function startGame(){ // função de começar o jogo, escondo o botão de jogar e mostro o form
    initial.style.display = 'none';
    divForm.appendChild(formInput);
}
function playGame(){ // função que fara o jogo começar e continuar

    if(rodada > 1){ // se já não for a primeira rodada:
        resultGame.innerText = ""; // apaga a div dos resultados
        divForm.style.display = 'none'; // Escondo o primeiro input inicial

        resultGame.appendChild(formInput);
    }
    let inputGame = document.getElementById('inputGame').value; // pegando o valor do input do form
    const options = ['pedra', 'papel', 'tesoura']; // as opções possiveis
    // tratamento de excessão:
    if (!options.includes(inputGame.toLowerCase())) { 
        alert('Por favor, escreva: pedra, papel ou tesoura!');
        return; 
    }

    // escolha do computador:
    let choice = Math.floor(Math.random() * 3);
    let choiceComputer = options[choice];

    let ganhador = ''; // ganhador da rodada

    // grande if else para as pontuações
    if (choiceComputer == 'pedra' && inputGame == 'papel') { // Pedra x Papel
        person += 1;
    } else if (choiceComputer == 'papel' && inputGame == 'pedra') { // Papel x Pedra
        computer += 1;
    } else if (choiceComputer == 'tesoura' && inputGame == 'papel') { // Tesoura x Papel
        computer += 1;
    } else if (choiceComputer == 'papel' && inputGame == 'tesoura') { // Papel x Tesoura
        person += 1;
    } else if (choiceComputer == 'tesoura' && inputGame == 'pedra') { // Tesoura x Pedra
        person += 1;
    } else if (choiceComputer == 'pedra' && inputGame == 'tesoura') { // Pedra x Tesoura
        computer += 1;
    } else {
        computer += 0;
        person += 0;
    }

    // if else para o ganhador da rodada
    if (choiceComputer == inputGame){
        ganhador = 'Vocês empataram esta rodada!' ;
    } else {
        ganhador = computer > person ? 'Computador ganhou esta rodada!' : 'Você ganhou esta rodada!'
    } 

    // se a rodada ainda não for a ultima, continua o jogo
    if (rodada < 3){
        newElement.innerHTML = `
            ${rodada} Rodada!<br><br>
            Você escolheu: ${inputGame}<br>
            Computador escolheu: ${choiceComputer}<br><br>
            ${ganhador}<br>
        `;
        resultGame.appendChild(newElement);
        rodada +=1;
    } else if (rodada == 3 || rodada == 3 && inputGame == choiceComputer){
        newElement.innerHTML = `
        ${rodada} Rodada! Decisão Final<br><br>
        Você escolheu: ${inputGame}<br>
        Computador escolheu: ${choiceComputer}<br><br>
        ${ganhador}<br><br><br>

        O vencedor foi: ${computer > person ? 'Computador !' : 'Você!'}
        `;
        resultGame.appendChild(newElement);
    }
}