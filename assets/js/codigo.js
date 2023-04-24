const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// $(document).ready(function(){

// $("a").on('click', function(event) {

//     if (this.hash !== "" ){
//         event.preventDefault();
//         var hash = this.hash;

//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//              }, 2000, function() {

//             windows.location.hash = hash; 
//              }); 

//     } // cierre if

// }); // cierre  "a" 

// }); // cierre document

$("#correo").click( function(){
    // $(this).hide();
     //alert("Gracias por enviarnos su opinion. Nuestro equipo le responderá lo más pronto posible.");
     document.querySelector('#oculto').click();
    }
 );