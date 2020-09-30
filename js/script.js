function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;
   
   if (estrela == 5){ 
    if (s5 == url + "img/star-off.png") {
    document.getElementById("s1").src = "img/star-on.png";
    document.getElementById("s2").src = "img/star-on.png";
    document.getElementById("s3").src = "img/star-on.png";
    document.getElementById("s4").src = "img/star-on.png";
    document.getElementById("s5").src = "img/star-on.png";
    avaliacao = 5;
    } else {
    document.getElementById("s1").src = "img/star-on.png";
    document.getElementById("s2").src = "img/star-on.png";
    document.getElementById("s3").src = "img/star-on.png";
    document.getElementById("s4").src = "img/star-on.png";
    document.getElementById("s5").src = "img/star-off.png";
    avaliacao = 4;
   }}
    
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4 == url + "img/star-off.png") {
    document.getElementById("s1").src = "img/star-on.png";
    document.getElementById("s2").src = "img/star-on.png";
    document.getElementById("s3").src = "img/star-on.png";
    document.getElementById("s4").src = "img/star-on.png";
    document.getElementById("s5").src = "img/star-off.png";
    avaliacao = 4;
    } else {
    document.getElementById("s1").src = "img/star-on.png";
    document.getElementById("s2").src = "img/star-on.png";
    document.getElementById("s3").src = "img/star-on.png";
    document.getElementById("s4").src = "img/star-off.png";
    document.getElementById("s5").src = "img/star-off.png";
    avaliacao = 3;
   }}
   
   //ESTRELA 3
   if (estrela == 3){ 
    if (s3 == url + "img/star-off.png") {
    document.getElementById("s1").src = "img/star-on.png";
    document.getElementById("s2").src = "img/star-on.png";
    document.getElementById("s3").src = "img/star-on.png";
    document.getElementById("s4").src = "img/star-off.png";
    document.getElementById("s5").src = "img/star-off.png";
    avaliacao = 3;
    } else {
    document.getElementById("s1").src = "img/star-on.png";
    document.getElementById("s2").src = "img/star-on.png";
    document.getElementById("s3").src = "img/star-off.png";
    document.getElementById("s4").src = "img/star-off.png";
    document.getElementById("s5").src = "img/star-off.png";
    avaliacao = 2;
   }}
    
   //ESTRELA 2
   if (estrela == 2){ 
    if (s2 == url + "img/star-off.png") {
    document.getElementById("s1").src = "img/star-on.png";
    document.getElementById("s2").src = "img/star-on.png";
    document.getElementById("s3").src = "img/star-off.png";
    document.getElementById("s4").src = "img/star-off.png";
    document.getElementById("s5").src = "img/star-off.png";
    avaliacao = 2;
    } else {
    document.getElementById("s1").src = "img/star-on.png";
    document.getElementById("s2").src = "img/star-off.png";
    document.getElementById("s3").src = "img/star-off.png";
    document.getElementById("s4").src = "img/star-off.png";
    document.getElementById("s5").src = "img/star-off.png";
    avaliacao = 1;
   }}
    
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1 == url + "img/star-off.png") {
    document.getElementById("s1").src = "img/star-on.png";
    document.getElementById("s2").src = "img/star-off.png";
    document.getElementById("s3").src = "img/star-off.png";
    document.getElementById("s4").src = "img/star-off.png";
    document.getElementById("s5").src = "img/star-off.png";
    avaliacao = 1;
    } else {
    document.getElementById("s1").src = "img/star-off.png";
    document.getElementById("s2").src = "img/star-off.png";
    document.getElementById("s3").src = "img/star-off.png";
    document.getElementById("s4").src = "img/star-off.png";
    document.getElementById("s5").src = "img/star-off.png";
    avaliacao = 0;
   }}
    
    document.getElementById('rating').innerHTML = avaliacao;
    
   }

   function descricaoTabs(tabId) {
    var i;
    var x = document.getElementsByClassName("tab-desc");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabId).style.display = "block";

    if (tabId == "desc"){
            document.getElementById("botao1").style.backgroundColor = "black";
            document.getElementById("botao1").style.color = "white";

            document.getElementById("botao2").style.backgroundColor = "#eeeeee";
            document.getElementById("botao2").style.color = "black";

            document.getElementById("botao3").style.backgroundColor = "#eeeeee";
            document.getElementById("botao3").style.color = "black";

    }if (tabId == "incluso"){
            document.getElementById("botao1").style.backgroundColor = "#eeeeee";
            document.getElementById("botao1").style.color = "black";

            document.getElementById("botao2").style.backgroundColor = "black";
            document.getElementById("botao2").style.color = "white";

            document.getElementById("botao3").style.backgroundColor = "#eeeeee";
            document.getElementById("botao3").style.color = "black";
    } if (tabId == "garantia"){
            document.getElementById("botao1").style.backgroundColor = "#eeeeee";
            document.getElementById("botao1").style.color = "black";

            document.getElementById("botao2").style.backgroundColor = "#eeeeee";
            document.getElementById("botao2").style.color = "black";

            document.getElementById("botao3").style.backgroundColor = "black";
            document.getElementById("botao3").style.color = "white";
    }else {    }

  }

  let cartVal = 0
  function Comprar(estrela) {
          cartVal = cartVal + 1
          document.getElementById("quant-cart").innerText = cartVal;
  }

  function AvalieNow(){
        document.getElementById("s1").src = "img/star-on.png";
        document.getElementById("s2").src = "img/star-on.png";
        document.getElementById("s3").src = "img/star-on.png";
        document.getElementById("s4").src = "img/star-on.png";
        document.getElementById("s5").src = "img/star-off.png";

        document.getElementById("comment").innerText = "muito bom o tenis, só pena não ter cor de roza!";
        document.getElementById("name-comment").innerText = "Catielen Ferreira";
  }