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
var artworks = [
    {
        name:'Tomato',
        src:'../../artworks/tomato.jpg',
        description:'This was drawn with an iPad Pro using digital colored pencil. My though process of this was very simple, I wanted to draw fruits and vegtables realistically, but that is way too cliche, so I decided to crush the fruits. This not only avoids the common fruits drawings, but it adds to the challenge of drawing the juice of the interior. This drawing really tested my observation use of colors to be able to successfully draw the fruit realistically.'},
    {
        name:'Seattle',
        src:'../../artworks/seattle.jpg',
        description:'I wanted to learn how to use Adobe Illustrator, so I asked some friends if they wanted any lock/home screen made by me. One of my friend requested me to make a lockscreen of seattle, which was exactly what I did. My friend was happy with the results of the locksceen, and I was able to learn more on how to use Illustrator, so it was a Win-Win! Before giving the lockscreen to my friend, I removed some of the raindrops in the middle so that it will be easier to see the displayed time'},
    {   
        name:'Light in Dark',
        src:'../../artworks/lightInDark.jpg',
        description:'Self-portrait charcoal drawing'},
    {
        name:'Desk',
        src:'../../artworks/desk.jpg',
        description:'Graphite pencil'},
    {
        name:'Untied',
        src:'../../artworks/shoe.jpg',
        description:'Graphite pencil'},
    {
        name:'Totally Realistic Soccer',
        src:'../../artworks/soccer.gif',
        description:''}
];
var order = [0,1,2,4,5]
for(i = 0; i < order.length; i++){
    $('.artworks').append('<div class="rows"><div class="thumbnail"><img src="'+ artworks[order[i]].src +'"></img></div><div class="description"><h1>'+ artworks[order[i]].name +'</h1><hr><p>'+ artworks[order[i]].description +'</p></div></div>');
}
var other = ['battlefield','blueberry','cyborg','forte','lemon','penny','stationary','toast','uw'];
for(i=0; i < other.length; i++){
    $('.other').append('<div class="col-3 col-md-2"><div class="otherThumbnail"><img src="../../artworks/other/'+other[i]+'.jpg"></div></div>');
}
//loading screen
window.addEventListener("load",function(){
    $('.loading').remove('.loading');
    $('body').css('overflow','visible');
    $('body').css('position','static');
});
//zoom
$('.thumbnail img').click(function(){
    var $imgsrc = $(this).attr('src');
    $('.zoom').css('display','flex');
    $('.zoom img').attr('src',$imgsrc);
});
$('.otherThumbnail img').click(function(){
    var $imgsrc = $(this).attr('src');
    $('.zoom').css('display','flex');
    $('.zoom img').attr('src',$imgsrc);
});
$('.zoom').click(function(){
    $('.zoom').css('display','none');
})