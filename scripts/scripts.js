setTimeout(()=>{seleccionarMenu(document.querySelector("header .menu a:nth-child(1)"));
                document.querySelector("main").style.overflowY="scroll";
              },7000);

setTimeout(()=>{document.querySelector(".tercer-bloque").style.display="block"},6100);
document.querySelector("main").scrollTop=0;

function seleccionarMenu(elemento){
  if(elemento.getAttribute("checked")!=true)
  {
    for(var i=1;i<=4;i++)
      elemento.parentNode.querySelector("a:nth-child("+i+")").setAttribute("checked","false");
    elemento.setAttribute("checked","true");
  }
}

function siguienteCarrusel(){
  var puesto;
  for(var i=2;i<=10;i++)
  {
    puesto=document.querySelector("main .junta .integrante:nth-child("+i+")").getAttribute("puesto");
    puesto--;
    if(puesto<1)
      puesto=9;
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
  if(elemento.scrollTop < 500){
    seleccionarMenu(document.querySelector("header .menu a:nth-child(1)"));
  }
  if(elemento.scrollTop > 500 && elemento.scrollTop < 1000){
    seleccionarMenu(document.querySelector("header .menu a:nth-child(2)"));
  }
  if(elemento.scrollTop > 1000 && elemento.scrollTop < 1500){
    seleccionarMenu(document.querySelector("header .menu a:nth-child(3)"));
  }
  if(elemento.scrollTop > 1500){
    seleccionarMenu(document.querySelector("header .menu a:nth-child(4)"));
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
