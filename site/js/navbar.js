var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

//open and close nav window
menu.addEventListener('click',function(e){
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});
exit.addEventListener('click',function(e){
    nav.classList.add('hide-mobile');
    e.preventDefault();
});

//Hover actions for the navigation bar
$('#icon-home').mouseover(function(){
    $(this).attr('src','../../images/home.gif');
}).mouseleave(function(){
    $(this).attr('src','../../images/home.png');
});
$('#icon-about').mouseover(function(){
    $(this).attr('src','../../images/about.gif');
}).mouseleave(function(){
    $(this).attr('src','../../images/about.png');
});
$('#icon-works').mouseover(function(){
    $(this).attr('src','../../images/works.gif');
}).mouseleave(function(){
    $(this).attr('src','../../images/works.png');
});
$('#icon-contact').mouseover(function(){
    $(this).attr('src','../../images/contact.gif');
}).mouseleave(function(){
    $(this).attr('src','../../images/contact.png');
});

//close nav window when selected
$('.navItem a').click(function(){
    nav.classList.add('hide-mobile');
    e.preventDefault();
});

$('.navItem a').mouseover(function(){
    $(this).siblings('img').css('display','block');
}).mouseleave(function(){
    $(this).siblings('img').css('display','none');
})