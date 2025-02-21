const divForm = document.getElementById('divForm'); 
const initial = document.getElementById('initial');
const resultGame = document.getElementById('resultGame');
// const nameUser = document.getElementById('nameUser').value;
let rodada = 1;

let newElement = document.createElement('p');

function startGame(){
    divForm.style.display = 'block';
    initial.style.display = 'none';
}
function playGame(){
    if(rodada > 1){
        let formAgain = document.createElement('form');
        formAgain.innerHTML += `
            <label for="inputGame">Digite sua opção</label>
            <input id="inputGame" type="text" placeholder="Pedra, Papel ou Tesoura: "><br>
        `;
        resultGame.appendChild(formAgain);
    }

    let inputGame = document.getElementById('inputGame').value;
    const options = ['pedra', 'papel', 'tesoura'];

    if (!options.includes(inputGame.toLowerCase())) {
        alert('Por favor, escreva: pedra, papel ou tesoura!');
        return; 
    }

    
    let choice = Math.floor(Math.random() * 3);
    let choiceComputer = options[choice];

    let person = 0;
    let computer = 0;
    let ganhador = '';

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

    if (choiceComputer == inputGame){
        ganhador = 'Vocês empataram esta rodada!' ;
    } else {
        ganhador = computer > person ? 'Computador ganhou esta rodada!' : 'Você ganhou esta rodada!'
    } 

    newElement.innerHTML += `
        ${rodada} Rodada!<br><br>
        Você escolheu: ${inputGame}<br>
        Computador escolheu: ${choiceComputer}<br><br>
        ${ganhador}<br>
        <button onclick="javascript:continueGame();">continuar</button><br><br>
    `;
    resultGame.appendChild(newElement);
    rodada +=1;
}

function continueGame(rodada){
    if(rodada <= 3){
        resultGame.innerText = "";
        playGame()
    }
    if(rodada == 3 && person != computer){
        ganhador = computer > person ? 'Computador!' : 'Você!'
        newElement.innerHTML += `
            O ganhador foi:<br>
            ${ganhador}
        `;
    } else {
        newElement.innerHTML += `
            Rodada para desempate!<br>
        `;
        playGame()
    }

}
