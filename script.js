const clienteInput = document.getElementById("cliente");
const bebidaSelect = document.getElementById("bebida");
const observacaoInput = document.getElementById("observacao");
const botao = document.getElementById("add-pedido");
const listaPedidos = document.getElementById("lista-pedidos");
const totalPedidos = document.getElementById("total-pedidos");

let quantidade = 0;

botao.addEventListener("click", adicionarPedido);

function adicionarPedido() {

    const cliente = clienteInput.value;
    const bebida = bebidaSelect.value;
    const observacao = observacaoInput.value;

    if (cliente === "" || bebida === "") {
        alert("Preencha o nome do cliente e escolha a bebida!");
        return;
    }

    const pedido = document.createElement("div");

    pedido.classList.add("pedido");

    pedido.innerHTML = `
        <h3>${cliente}</h3>
        <p>☕ ${bebida}</p>
        <p class="obs">${observacao}</p>
        <button class="botao-pronto">✅ Pronto</button>
    `;

    listaPedidos.appendChild(pedido);

    quantidade = quantidade + 1;
    totalPedidos.textContent = quantidade;

    const botaoPronto = pedido.querySelector(".botao-pronto");

    botaoPronto.addEventListener("click", function () {
        pedido.remove();
        quantidade = quantidade - 1;
        totalPedidos.textContent = quantidade;
    });

    clienteInput.value = "";
    bebidaSelect.value = "";
    observacaoInput.value = "";
}