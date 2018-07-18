$(document).ready( function(){
    
    //Ejercicio 1
    $(".article").eq(3).find("li>a").eq(3).text("Pinterest").attr("href", "http://www.pinterest.com");

    //Ejercicio2
    $("[href='#']").click(function(e){
        e.preventDefault();

    });

    //Ejercicio3
    $(".header__main > h2").css("font-size", "3em");
    
});