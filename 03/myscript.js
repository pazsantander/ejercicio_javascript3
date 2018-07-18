$(document).ready( function(){
    //Ejercicio 1
    $("li").eq(3).append('<ul><li><a href="#">link 4.a</a></li></ul>');

    //Ejercicio 2   
    $("li").eq(3).before('<li><a href="#">link 3.5</a></li>');

    //Ejercicio 3
    $("li").eq(7).prepend('😎 ');

    //Ejercicio 4
    $("li").eq(7).after('🙂');
    
});