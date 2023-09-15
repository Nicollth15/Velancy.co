/*slide- productos grandes*/
console.log("Hello, world!");
var slideDivs=1;
showDivs(slideDivs);

function plusDivs(n) {
    showDivs(slideDivs += n);
  }

function showDivs(n){
    
    var x = document.getElementsByClassName("productos1");
    if(n > x.length) {slideDivs=1}
    if(n < 1) {slideDivs=x.length}
    for(var i=0; i < x.length;i++){
        x[i].style.display ="none";
    }
  
    x[slideDivs-1].style.display="flex";
}

/*slide- productos grandes*/
console.log("Hello, world!");
var slideProductos=1;
showSlides(slideProductos);

function plusSlides(n) {
    showSlides(slideProductos += n);
  }

function showSlides(n){
    
    var x = document.getElementsByClassName("productos");
    if(n > x.length) {slideProductos=1}
    if(n < 1) {slideProductos=x.length}
    for(var i=0; i < x.length;i++){
        x[i].style.display ="none";
    }
  
    x[slideProductos-1].style.display="flex";
}
