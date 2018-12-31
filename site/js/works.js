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
        name:'Lemon',
        src:'../../artworks/lemon.jpg',
        description:''},
    {
        name:'Tomato',
        src:'../../artworks/tomato.jpg',
        description:'Digital artworks'},
    {
        name:'Seattle',
        src:'../../artworks/seattle.png',
        description:'Lorem ipsum dolor sit amet, nam te malis minim verterem, vix hinc eros at, omnesque pertinacia eum id. Eu ipsum virtute pro, cum in dicunt accusamus definiebas, in nibh dolorem sed. His case veri dissentiunt ne, vim elitr accusamus ea. Doming phaedrum ne eam'},
    {   
        name:'Light in Dark',
        src:'../../artworks/lightInDark.jpg',
        description:'Self-portrait charcoal drawing'},
    {
        name:'Desk',
        src:'../../artworks/desk.jpg',
        description:'Graphite pencil'},
    {
        name:'Pepper',
        src:'../../artworks/pepper.jpg',
        description:''},
    {
        name:'Untied',
        src:'../../artworks/shoe.jpg',
        description:'Graphite pencil'},
    {
        name:'Seesaw',
        src:'../../artworks/seesaw.gif',
        description:''}
];
var order = [2,3,4,6,1]
for(i = 0; i < order.length; i++){
    $('.artworks').append('<div class="rows"><div class="thumbnail"><img src="'+ artworks[order[i]].src +'"></img></div><div class="description"><h1>'+ artworks[order[i]].name +'</h1><hr><p>'+ artworks[order[i]].description +'</p></div></div>');
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
$('.zoom').click(function(){
    $('.zoom').css('display','none');
})