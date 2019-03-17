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
var projects = [
    {
        name:'Connection with Me and Technology',
        src:'../../images/art240thumbnail.jpg',
        description:'Here I will document what I have expirenced when I took the course BISIA 240. I had a chance to work on multiple projects, mostly centered around modern technology. This process lead me to a journey to search my connection of myself and digital technology and how it has changed my life. <a href="technology.html">Learn More</a>'},
    {
        name:'Pocotoon',
        src:'../../images/pocotoon.png',
        description:'Pocotoon is a game with a group of three people for our CSS 111 class assignment. The objective of this game is to claim the most territory in the given time. Pocotoon was built without any game-making software, but with a program called Processing that required us to code the game from scratch <a href="pocotoon.html">Learn More</a>'},
    ];
for(i = 0; i < projects.length; i++){
    $('.projects').append('<div class="rows"><div class="thumbnail"><img src="'+ projects[i].src +'"></img></div><div class="description"><h1>'+ projects[i].name +'</h1><p>'+ projects[i].description +'</p></div></div>');
}
//loading screen
window.addEventListener("load",function(){
    $('.loading').remove('.loading');
    $('body').css('overflow','visible');
    $('body').css('position','static');
});