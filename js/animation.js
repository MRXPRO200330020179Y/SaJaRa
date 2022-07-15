

// ----------------------------------------------------------

$(window).on('load',function(){
    $(".loading-area").fadeOut();
    $("#loading").delay(200).fadeOut("slow");
});

//-----------------------------------------------------------

// ----------------------------------------------------------

$(function(){
    let Catalog_max__pro__link = document.querySelectorAll('.news__pagination__link');
  
    for(let i = 0; i<Catalog_max__pro__link.length; i++){
        Catalog_max__pro__link[i].addEventListener('click',function(){
            for(let j = 0; j<Catalog_max__pro__link.length;j++){
                Catalog_max__pro__link[j].classList.remove('active');
            }
            this.classList.add('active');
  
        })
    }
  });


  $(function(){
    let Catalog_max__pro__link = document.querySelectorAll('.Photo__mrx2__img');
  
    for(let i = 0; i<Catalog_max__pro__link.length; i++){
        Catalog_max__pro__link[i].addEventListener('click',function(){
            for(let j = 0; j<Catalog_max__pro__link.length;j++){
                Catalog_max__pro__link[j].classList.remove('active');
            }
            this.classList.add('active');
  
        })
    }
  });

// ----------------------------------------------------------