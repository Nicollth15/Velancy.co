
// Select all INPUTS with type NUMBER
const inputNumber = document.querySelectorAll("input[type='number']");
inputNumber.forEach(function(item){
  // create wrapper container
  let wrapper = document.createElement('div');
  // add class to wrapper div
  wrapper.classList.add("quantity-buttons")
  // insert wrapper before item in the DOM tree
  item.parentNode.insertBefore(wrapper, item);
  // move item into wrapper
  wrapper.appendChild(item);
  
  // Inser plus and minus buttons
  item.insertAdjacentHTML('beforebegin', '<button type="button" class="minus-button">-</button>');
  item.insertAdjacentHTML('afterend', '<button type="button" class="plus-button">+</button>');
});

// Minus Button
const plusButton = document.querySelectorAll(".plus-button");
plusButton.forEach(function(btn) {
  btn.addEventListener('click', function(element){
    let inputNumber = this.previousElementSibling;
		inputNumber.stepUp();
		// trigger change event
    let change = new Event("change");
    inputNumber.dispatchEvent(change);
  })
})

// Minus Button
const minusButton = document.querySelectorAll(".minus-button");
minusButton.forEach(function(btn) {
  btn.addEventListener('click', function(element){
    let inputNumber = this.nextElementSibling;
		inputNumber.stepDown();
		// trigger change event
    let change = new Event("change");
    inputNumber.dispatchEvent(change);
  })
})



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


function myFunction(smallImg){
  var fullImg=document.getElementById ("imageBox");
  fullImg.src=smallImg.src;
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



 function openNav(){
        document.getElementById("sidenav").style.width="30%"
      }
        
        function closeNav(){
        document.getElementById("sidenav").style.width="0%"
      }


         /*funcion carrito de compras*/

     let item = "";
    
     let listado_array = [];
     function add(x){
             
             item = " • " + x + " ";
             
     
             listado_array.push(item);
             // vaciar la lista

     
     
              for(var i = 0; i < listado_array.length;i++ ){
                
                  document.getElementById("lista-compras").innerHTML += listado_array[i];
                  document.getElementById("lista-compras").innerHTML += "<br>";
              }
             //MSM AGREGADO
             alert("producto " + x + " agregado al carrito exitosamente");
             event.preventDefault();
            
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


  