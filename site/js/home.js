$('#submit').mouseover(function(){
    $(this).css('background','url("../../images/send.gif") no-repeat').css('background-size','100%');
}).mouseleave(function(){
    $(this).css('background','url("../../images/send.png") no-repeat').css('background-size','100%');
});
$('#door').mouseover(function(){
    $(this).attr('src','../../images/doorOpen2.gif');
}).mouseleave(function(){
    $(this).attr('src','../../images/doorClose2.png');
});
function sent(){
    $('#sent h1').css('visibility','visible');
}
$('.collapse').on("click", "a:not([data-toggle])", null, function () {
    $('.collapse').collapse('hide');
});