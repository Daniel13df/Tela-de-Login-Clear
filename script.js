const btnLogar = document.getElementById("logar");

btnLogar.addEventListener("click", function() {
  const nome = document.getElementById("username").value;
  const senha = document.getElementById("senha").value;

  if (nome === "Daniel Coelho" && senha === "1234") {
    window.open("https://github.com/Daniel13df", "_blank");
  } else {
    alert("Infelizmente você não é o usuário correto! Tente novamente!");
  }
});