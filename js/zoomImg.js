(function ( $ ) 
{

    $.fn.imgZoom = function( options ) 
    {             
        var settings = $.extend({
            escalaX :               1.4,
            escalaY:                1.4,
            rotacion:               '25deg',
            velAnimacionEntrada:    '1.4s',
            velAnimacionSalida:     '.5s',
            linAnimacion:           'ease-in'
        }, options );            
        
        //Inicializar cada uno de los elementos 
        this.each(function () 
        {            
            $(this).css('border', '1px solid green');
        });                         
            
        this.hover(function()
        {
            
            $(this).css({
                //con concatenacion                            elespacio es un valor
                 'transition': 'all ' + settings.velAnimacionEntrada + ' ' + settings.linAnimacion,
                 //           rotacion                                   sumar escala en Y  
                'transform': 'rotateY(' + settings.rotacion + ') scale(' + settings['escalaX']+ ',' + settings.escalaY + ')'
                /*'transition': 'all 1s ease-in',
                'transform': 'scale(.5,.5)',
                 De esta forma podemos agregar mas transform 
               
                'transform': 'rotateY(45deg)''scale(1.5,1.5)'*/
                
                
        });
        });
            
        this.mouseleave(function()
        {
            $(this).css({
            'transition': 'all ' + settings.velAnimacionSalida + ' ' + settings.linAnimacion,
            'transform': 'rotateY(0deg) scale(1, 1)'
            /* 
            'transform': 'scale(1,1)' 'rotateY(0deg)
            */
        });
         });                   
        
        return this;                                  
    }  
    
}( jQuery ));
