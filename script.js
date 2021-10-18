var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function(){
  document.querySelector(".container").classList.toggle("show-menu");
} );

qtde = document.querySelector("#qtde").addEventListener("change", atualizarPreco);
qtde = document.querySelector("#js").addEventListener("change", atualizarPreco);
qtde = document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
qtde = document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);
qtde = document.querySelector("#prazo").addEventListener("change", ()=>{
  const prazo = document.querySelector("#prazo").value;
  document.querySelector("label[for = prazo]").innerHTML = `Prazo: ${prazo} semanas.`;
  atualizarPreco();
});

function atualizarPreco(){
  const qtde = document.querySelector("#qtde").value;
  const temJS = document.querySelector("#js").checked;
  const incluiLayout = document.querySelector("#layout-sim").checked;
  const prazo = document.querySelector("#prazo").value;
  let preco = qtde*100;
  let taxaDeUrgencia = 1 - prazo*0.1;
  preco *= 1+taxaDeUrgencia;
  if(temJS) preco *= 1.1;
  if(incluiLayout) preco += 500;
  if(prazo == 1){
    document.querySelector("label[for = prazo]").innerHTML = `Prazo: ${prazo} semana.`;
  }
  document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
  
}