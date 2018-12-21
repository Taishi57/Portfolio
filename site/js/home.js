$('#home').mouseover(function(){
    $(this).attr('src','../../images/home.gif');
}).mouseleave(function(){
    $(this).attr('src','../../images/home.png');
});
$('#about').mouseover(function(){
    $(this).attr('src','../../images/about.gif');
}).mouseleave(function(){
    $(this).attr('src','../../images/about.png');
});
$('#works').mouseover(function(){
    $(this).attr('src','../../images/works.gif');
}).mouseleave(function(){
    $(this).attr('src','../../images/works.png');
});
$('#contact').mouseover(function(){
    $(this).attr('src','../../images/contact.gif');
}).mouseleave(function(){
    $(this).attr('src','../../images/contact.png');
});
$('#submit').mouseover(function(){
    $(this).css('background','url("../../images/send.gif") no-repeat').css('background-size','100%');
}).mouseleave(function(){
    $(this).css('background','url("../../images/send.png") no-repeat').css('background-size','100%');
});
$('#door').mouseover(function(){
    $(this).attr('src','../../images/doorOpen.png');
}).mouseleave(function(){
    $(this).attr('src','../../images/doorClose.png');
});
function sent(){
    $('#sent h1').css('visibility','visible');
}