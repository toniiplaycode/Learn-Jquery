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
}); 