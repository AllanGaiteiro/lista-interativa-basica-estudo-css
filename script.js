var lista = document.querySelectorAll(".lista li");

for (var i = 0; i < lista.length; i++) {
  lista[i].addEventListener("click", function () {
    this.classList.toggle("selecionado");
  });
}
