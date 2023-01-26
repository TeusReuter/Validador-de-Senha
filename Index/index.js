let alterarVisibilidade = document.querySelector("#verSenha");
let inputSenha = document.querySelector("#senha");
let inputConfirmarSenha = document.querySelector("#confirmarSenha");
let barraProgresso = document.querySelector("#barraProgresso");
let nivelSeguranca = document.querySelector("#nivelSeguranca");

const ToggleSenha = () => {
  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
};

const ToggleConfirmarSenha = () => {
  if (inputConfirmarSenha.getAttribute("type") == "password") {
    inputConfirmarSenha.setAttribute("type", "text");
  } else {
    inputConfirmarSenha.setAttribute("type", "password");
  }
};

const NivelBarraProgresso = () => {
  VerificarTamanhoDaSenha();
  LimparBarra();
};

const VerificarTamanhoDaSenha = () => {

  let regex = ""; 
  regex = new RegExp("[A-Z]");
  if (regex.test(inputSenha.value)) {
    barraProgresso.classList.add("umQuarto");
    nivelSeguranca.textContent = "Fraca";
    nivelSeguranca.classList.add("fraca");
  }
  if (inputSenha.value.length > 4) {
    barraProgresso.classList.add("doisQuartos");
    nivelSeguranca.classList.add("razoavel");
    nivelSeguranca.textContent = "Razoável";
  }
  if (inputSenha.value.length > 6) {
    barraProgresso.classList.add("tresQuartos");
    nivelSeguranca.classList.add("boa");
    nivelSeguranca.textContent = "Boa";
  }
  if (inputSenha.value.length > 8) {
    barraProgresso.classList.add("completa");
    nivelSeguranca.classList.add("excelente");
    nivelSeguranca.textContent = "Excelente";
  }
  if (inputSenha.value.length < 1) {
    LimparBarraDeProgresso();
  }

  let str = "ASUOPDFH";

  if(regex.test(str)){
    console.log('toma')
  }
};

const LimparBarra = () => {
  inputSenha.addEventListener("keydown", (event) => {
    if (event.keyCode === 8 || event.keyCode === 46) {
      LimparBarraDeProgresso();
      VerificarTamanhoDaSenha();
    }
  });
};

const LimparBarraDeProgresso = () => {
  barraProgresso.classList.remove("umQuarto");
  barraProgresso.classList.remove("doisQuartos");
  barraProgresso.classList.remove("tresQuartos");
  barraProgresso.classList.remove("completa");
  nivelSeguranca.classList.remove("fraca");
  nivelSeguranca.classList.remove("razoavel");
  nivelSeguranca.classList.remove("boa");
  nivelSeguranca.classList.remove("excelente");
  nivelSeguranca.textContent = "";
};
