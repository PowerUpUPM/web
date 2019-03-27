setTimeout(()=>{seleccionarMenu(document.querySelector("header .menu a:nth-child(1)"));
                document.querySelector("main").style.overflowY="scroll";
              },7000);

setTimeout(()=>{document.querySelector(".tercer-bloque").style.display="block"},6100);
document.querySelector("main").scrollTop=0;

function seleccionarMenu(elemento){
  for(var i=1;i<=4;i++)
    elemento.parentNode.querySelector("a:nth-child("+i+")").setAttribute("checked","false");
  elemento.setAttribute("checked","true");
  switch (elemento.getAttribute("posicion")) {
    case "1":
      scrollTo(0);
      break;
    case "2":
      scrollTo(620);
    break;
    case "3":
      scrollTo(1220);
    break;
    case "4":
      scrollTo(1300);
  }
}

function scrollTo(distancia){
  var duracion = 1000/(Math.abs(document.querySelector("main").scrollTop-distancia));
  scrollToAux(distancia,duracion);
}
function scrollToAux(distancia,duracion){
  var diferencia=document.querySelector("main").scrollTop-distancia;
  if(diferencia>0){
    setTimeout(()=>{
      if(diferencia<10)
        document.querySelector("main").scrollTop=(document.querySelector("main").scrollTop)-1;
      else
        document.querySelector("main").scrollTop=(document.querySelector("main").scrollTop)-10;
      checkScroll(document.querySelector("main"));
      scrollToAux(distancia,duracion);
    },duracion);
  }
  else if(diferencia<0){
    setTimeout(()=>{
      if(diferencia>10)
        document.querySelector("main").scrollTop=(document.querySelector("main").scrollTop)+1;
      else
        document.querySelector("main").scrollTop=(document.querySelector("main").scrollTop)+10;
      checkScroll(document.querySelector("main"));
      scrollToAux(distancia,duracion);
    },duracion);
  }
}

function siguienteCarrusel(){
  var puesto;
  for(var i=2;i<=9;i++)
  {
    puesto=document.querySelector("main .junta .integrante:nth-child("+i+")").getAttribute("puesto");
    puesto--;
    if(puesto<1)
      puesto=8;
    document.querySelector("main .junta .integrante:nth-child("+i+")").setAttribute("puesto",puesto);
  }
}
var intervaloCarrusel;
setTimeout(()=>{intervaloCarrusel=setInterval(siguienteCarrusel,5000);},4000);


function checkScroll(elemento)
{
  console.log(elemento.scrollTop);
  if(elemento.scrollTop>0 && elemento.scrollTop<200)
  {
    elemento.parentNode.querySelector("header").style.background="rgba(255,255,255,"+(elemento.scrollTop/200)+")"
  }
  if(elemento.scrollTop>200 && elemento.scrollTop<620)
  {
    elemento.parentNode.querySelector(".tercer-bloque").style.width=(45+((64-45)/420)*(620-elemento.scrollTop))+"%";
    elemento.parentNode.querySelector(".tercer-bloque").style.background="rgb("+(100+((240-100)/420)*(620-elemento.scrollTop))+","+(100+((240-100)/420)*(620-elemento.scrollTop))+","+(100+((240-100)/420)*(620-elemento.scrollTop))+")";
  }
  if(elemento.scrollTop>620 && elemento.scrollTop<1200){
    elemento.parentNode.querySelector(".tercer-bloque").style.width=((45)/580)*(1200-elemento.scrollTop)+"%";
  }
}
