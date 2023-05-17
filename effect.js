$(document).ready(function(){
    //-------------hide/show--------------
    //-- hide(), show(). cách 1 dùng nhiều event cho 1 element
    // $(".btn-hide-show").click(function(){
    //     $(".h1-hide-show").hide();
    // });
    // $(".btn-hide-show").dblclick(function(){
    //     $(".h1-hide-show").show();
    // });

    //-- hide(), show(). cách 2 dùng nhiều event cho 1 element, dùng on()
    // $(".btn-hide-show").on({
    //     click: function() {
    //         $(".h1-hide-show").hide()
    //     },
    //     dblclick: function() {
    //         $(".h1-hide-show").show()
    //     }
    // })

    // -- this là áp dụng cho chính element selector 
    $(".h1-hide-show").click(function(){
        $(this).hide();
    });

    //-- toggle() = show() + hide(), text() là để thay đổi text của thẻ
    $(".btn-hide-show").text("toggle").click(function(){
        // $(".h1-hide-show").toggle(); // dùng bình thường không có tham số       
        $(".h1-hide-show").toggle(500); // có tham số tốc độ mili giây, hoặc "slow" , "fast"
    });

    //-------------fade--------------
    $(".btn-fade").click(function(){
        $(".h1-fade").fadeToggle();
    });

    //-------------slide--------------
    $(".btn-slide").click(function(){
        $(".h1-slide").slideToggle();
    });

    //-------------animate--------------
    $(".btn-animate").click(function(){
        $(".div-animate").animate({
            left: '200px',
            opacity: '0.5',
            height: '200px',
            width: '200px',
        });
    });
   
    //-------------slide with callback paramater--------------
    $(".btn-slide-callback").click(function(){
        $(".h1-slide-callback").slideToggle(500, function(){
            alert("callback is called after executed effect")
        });
    });
   
    //-------------chaining--------------
    $(".btn-chaining").click(function(){
        $(".h1-chaining")
        .css("color", "red")
        .slideUp(500)
        .slideDown(500)
    });
});