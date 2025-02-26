const result = document.getElementById('result');
const menu = document.getElementById('menu');
const buttonPedido = document.getElementById('buttonPedido');

function fazerPedido(){
    menu.style.display = 'none';
    buttonPedido.style.display = 'none';

    let formPedido = document.createElement('form');
    formPedido.innerHTML =`
        <div class="divinput">
            <input id="chocolate" type="checkbox" value="12"> Chocolate Cremoso<br>
        </div>
        <div class="divinput">
            <input id="morango" type="checkbox" value="14"> Morango com Chantilly
        </div>
        <div class="divinput">
            <input id="baunilha" type="checkbox" value="12"> Baunilha Clássica
        </div>
        <div class="divinput">
            <input id="menta" type="checkbox" value="13"> Menta com Chiclete
        </div>
        <div class="divinput">
            <input id="ninho" type="checkbox" value="16"> Ninho com Nutella
        </div>
        <button onclick="fecharPedido();" type="button">Fechar Pedido</button>
    `;
    formPedido.id = 'formPedido'
    result.appendChild(formPedido);
}

function fecharPedido(){
    let total = 0;
    let totalNovo = 0;
    let itemsChecked = false;

    const checkboxes = document.querySelectorAll('#formPedido input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseFloat(checkbox.value);
            itemsChecked = true;  
        }
    });

    if (!itemsChecked) {
        alert('Você não escolheu nada :(');
    } else {
        let totalConta = document.createElement('p');
        totalConta.innerHTML =`
            Total da conta: R$ ${total.toFixed(2)} <br>
        `;
        if (total > 10) {
            totalNovo = total - (total * (10 / 100));
            totalConta.innerHTML +=`<br>
                Você recebeu um desconto de 10%.<br>
                Total com desconto: R$ ${totalNovo.toFixed(2)}
            `;
        }
        result.appendChild(totalConta);
    }   
}