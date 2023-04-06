const documentos = [
  { id: 1, nome: "Contrato de Trabalho", status: "concluido" },
  { id: 2, nome: "Fatura de luz", status: "cancelado" },
  { id: 3, nome: "Pedido de compra", status: "em-progresso" },
  { id: 4, nome: "Comprovante de pagamento", status: "concluido" },
  { id: 5, nome: "Relatório de despesas", status: "pendente" },
  { id: 6, nome: "Certidão de nascimento", status: "concluido" },
  { id: 7, nome: "Recibo de aluguel", status: "cancelado" },
  { id: 8, nome: "Declaração de imposto de renda", status: "em-progresso" },
  { id: 9, nome: "Carteira de motorista", status: "pendente" },
  { id: 10, nome: "Extrato bancário", status: "concluido" },
  { id: 11, nome: "Nota fiscal de serviços", status: "concluido" },
  { id: 12, nome: "Boletim escolar", status: "em-progresso" },
  { id: 13, nome: "Atestado médico", status: "pendente" },
  { id: 14, nome: "Licença ambiental", status: "concluido" },
  { id: 15, nome: "Autorização de viagem", status: "cancelado" },
  { id: 16, nome: "Contrato de locação", status: "em-progresso" },
  { id: 17, nome: "Laudo pericial", status: "pendente" },
  { id: 18, nome: "Passaporte", status: "concluido" },
  { id: 19, nome: "Holerite", status: "concluido" },
  { id: 20, nome: "Contrato social", status: "em-progresso" },
];

const list = document.querySelectorAll(".lista");

documentos
  .sort((a, b) => getStatusNumber(a) - getStatusNumber(b))
  .forEach((doc) => {
    list.forEach((element) => {
      const status = element.parentElement.getAttribute("data-status");
      if (!status || status === doc.status) {
        element.insertAdjacentHTML(
          "beforeend",
          `
          <li class="documento expandir" data-status="${doc.status}">
            <div style="padding:10px">
              <span>${doc.nome}</span>
              <div class="documento-detalhe">
                <p>ID: ${doc.id}</p>
                <p>Status: ${doc.status}</p>
              </div>
            </div>
          </li>
        `
        );
      }
    });
  });

list.forEach((element) =>
  element.addEventListener("click", (event) => {
    const botao = event.target.closest(".expandir");
    if (botao) {
      const documento = botao.closest(".documento");
      const detalhe = documento.querySelector(".documento-detalhe");
      detalhe.style.display =
        detalhe.style.display === "none" ? "block" : "none";
    }
  })
);

const elementList = document.querySelectorAll(".documento");
for (const element of elementList) {
  element.addEventListener("click", function () {
    this.classList.toggle("selecionado");
  });
}

function getStatusNumber(a) {
  const statusMap = {
    concluido: 1,
    "em-progresso": 2,
    pendente: 3,
    cancelado: 4,
  };
  return statusMap[a.status] || 0;
}

const gruposDocumentos = document.querySelectorAll(".grupo-documentos");

documentos.forEach((documento) => {
  const status = documento.status;
  const nomeDocumento = documento.nome;

  // adicionar o elemento na div correta
  const divDocumentos = document.querySelector(
    `[data-status='${status}'] .documentos`
  );
  console.log(divDocumentos);
  const elementoDocumento = document.createElement("div");
  elementoDocumento.innerText = nomeDocumento;
  if (elementoDocumento) {
    console.log(elementoDocumento);
    divDocumentos.appendChild(elementoDocumento);
  }
});

// adicionando listeners aos titulos dos grupos para exibir e ocultar sub-divs
gruposDocumentos.forEach((grupoDocumento) => {
  const tituloGrupo = grupoDocumento.querySelector(".titulo-grupo");
  const documentos = grupoDocumento.querySelector(".documentos");

  tituloGrupo.addEventListener("click", () => {
    documentos.style.display =
      documentos.style.display === "none" ? "block" : "none";
  });
});
