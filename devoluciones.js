        
  let item = "";

  let listado_array = [];
  function add(x){
        
        item = " • " + x + " ";
        
  
        listado_array.push(item);
        // vaciar la lista
        document.getElementById("lista-compras").innerHTML = "";
  
  
         for(var i = 0; i < listado_array.length;i++ ){
           
             document.getElementById("lista-compras").innerHTML += listado_array[i];
             document.getElementById("lista-compras").innerHTML += "<br>";
         }
        //MSM AGREGADO
        alert("producto " + x + " agregado al carrito exitosamente");
       
    }
  
     //MSM ENCABEZADO Y NUMERO DE WASA
  let wame = "https://wa.me/573144502265?text=¡Hola! Estoy interesado en los siguientes productos: ";
  
 function openVentana(){
       let mensaje =  document.getElementById("lista-compras").textContent;
       wame+= mensaje;
        // alert(wame);
        window.open(wame);
   }
  
  
  
       
            
  /*ventana compra*/
          
  function openWindow(){
    document.querySelector(".offcanvas").style.display="flex";
  }
    
    function closeWindow(){
    document.querySelector(".offcanvas").style.display="none";            
  }

  function openWindowG(){
    document.querySelector("#uno").style.display="flex";
  }

  function closeWindowG(){
    document.querySelector("#uno").style.display="none";            
  }
          
          

/*navegador pequeño*/

function openNav(){
  document.getElementById("sidenav").style.width="30%"
}
  
  function closeNav(){
  document.getElementById("sidenav").style.width="0%"
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}