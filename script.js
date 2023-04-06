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

var list = document.querySelector(".lista");
var elementList = document.querySelectorAll(".documento");

documentos.forEach((doc) => {
  const li = document.createElement("li");
  li.setAttribute("data-status", doc.status);
  li.classList.add("documento");
  li.innerHTML = doc.nome;
  list.appendChild(li);
});

for (const element of elementList) {
  element.addEventListener("click", function () {
    this.classList.toggle("selecionado");
  });
}
