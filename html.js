$(document).ready(function(){
    //----------------text--------------
    $(".btn-text").click(function(){
        alert($(".text-html").text());
    });
    
    //----------------html--------------
    $(".btn-html").click(function(){
        alert($(".text-html").html());
    });
    
    //----------------val--------------
    $(".btn-val").click(function(){
        alert($(".val").val());
    });

    //----------------set text--------------
    $(".btn-set-text").click(function(){
        $(".set-text").text('hello');
    });

    //----------------set html--------------
    $(".btn-set-html").click(function(){
        $(".set-html").html('<h3>hello</h3>');
    });

    //----------------set val--------------
    $(".btn-set-val").click(function(){
        $(".set-val").val('hello');
    });

    //----------------addpend--------------
    $(".btn-append").click(function(){
        $(".append").append("<span> add addpend </span>");
    });

    //----------------prepend--------------
    $(".btn-prepend").click(function(){
        $(".prepend").prepend("<span> add prepend </span>");
    });

    //----------------after--------------
    $(".btn-after").click(function(){
        $(".after").after("<p> add after </p>");
    });

    //----------------before--------------
    $(".btn-before").click(function(){
        $(".before").before("<p> add before </p>");
    });

    //----------------remove--------------
    $(".btn-remove").click(function(){
        $(".remove").remove();
    });

    //----------------empty--------------
    $(".btn-empty").click(function(){
        $(".empty").empty();
    });

    //----------------addClass--------------
    $(".btn-addClass").click(function(){
        $(".addClass-removeClass").addClass("color-red");
    });

    //----------------removeClass--------------
    $(".btn-removeClass").click(function(){
        $(".addClass-removeClass").removeClass("color-red");
    });

    //----------------toggleClass--------------
    $(".btn-toggleClass").click(function(){
        $(".toggleClass").toggleClass("color-red");
    });
}); 