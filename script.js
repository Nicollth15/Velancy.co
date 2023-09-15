/*filtro categorias*/
$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.categorias-product .item[category="all"]').addClass('ct_item-active');

    $('.item').click(function(event){
          
            var catProduct = $(this).attr('category');
            console.log(catProduct);

        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

        $('.producto-item').hide();

        $('.producto-item[category="'+catProduct+'"]').show();
        event.preventDefault();
    });

       $('.item[category="all"]').click(function(){
        $('.producto-item').show();
    });


         
         
  });  
       

/*navegador pequeño*/

  function openNav(){
    document.getElementById("sidenav").style.width="30%"
  }
    
    function closeNav(){
    document.getElementById("sidenav").style.width="0%"
  }
    
 
      

   /*boton scroll*/


addEventListener('DOMContentLoaded' , ()=>{
    const boton_ir_arriba = document.querySelector('#ir_arriba_boton')


    const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop

    const irArriba = () => {
        if (obtener_pixeles_inicio() > 0){
            requestAnimationFrame(irArriba)
            scrollTo (0, obtener_pixeles_inicio() - (obtener_pixeles_inicio()/20))
        }
    }

    const indicarScroll = () =>{
        if (obtener_pixeles_inicio() > 80){
            boton_ir_arriba.className = 'mostrar'
        }
        else{
            boton_ir_arriba.className='ocultar'
        }
    }
    boton_ir_arriba.addEventListener('click', irArriba)
    window.addEventListener('scroll' , indicarScroll)
})

  /*fotter menu*/

let acc = document.getElementsByClassName("accordion");
    let i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        
        this.classList.toggle("active");
    
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
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
     