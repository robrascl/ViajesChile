const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




$("#correo").click( function(){
    
     document.querySelector('#oculto').click();
    }
 );


 $("#XXXX").click(function(){
    alert("Hola");
    document.querySelector('#vimagen').click();
    

 });


 $(document).ready(function() {
   $('a.smooth-scroll').click(function(event) {
       if (this.hash !== "") {
           event.preventDefault();
           var hash = this.hash;

           $('html, body').animate({
               scrollTop: $(hash).offset().top
           }, 800, function(){
               window.location.hash = hash;
           });
       }
   });
});
