$('#submit').mouseover(function(){
    $(this).css('background','url("../../images/send.gif") no-repeat').css('background-size','100%');
}).mouseleave(function(){
    $(this).css('background','url("../../images/send.png") no-repeat').css('background-size','100%');
});

//works door
$('#door').mouseover(function(){
    $(this).attr('src','../../images/doorOpen2.gif');
}).mouseleave(function(){
    $(this).attr('src','../../images/doorClose2.png');
});

//email
function sent(){
    $('#sent h1').css('visibility','visible');
}
$('.collapse').on("click", "a:not([data-toggle])", null, function () {
    $('.collapse').collapse('hide');
});

//contacts
$('#envelope img').mouseover(function(){
    $(this).attr('src','../../images/envelope-open.png');
}).mouseleave(function(){
    $(this).attr('src','../../images/envelope-close.png');
});
$('#comment img').mouseover(function(){
    $(this).attr('src','../../images/comment-open.png');
}).mouseleave(function(){
    $(this).attr('src','../../images/comment-close.png');
});