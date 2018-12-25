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
        src:'../../artworks/tomato.jpg'},
    {
        name:'Seattle',
        src:'../../artworks/seattle.png'},
    {   
        name:'Light in Dark',
        src:'../../artworks/lightInDark.jpg'},
    {
        name:'Desk',
        src:'../../artworks/desk.jpg'},
    {
        name:'Pepper',
        src:'../../artworks/pepper.jpg'},
    {
        name:'Untied',
        src:'../../artworks/shoe.jpg'},
    {
        name:'Seesaw',
        src:'../../artworks/seesaw.gif'}
];
var order = [3,6,2,0,4,5,1,7]
for(i = 0; i < artworks.length; i++){
    $('.artworks').append('<div class="rows"><div class="thumbnail"><img src="'+ artworks[order[i]].src +'"></img></div><div class="description"><h1>'+ artworks[order[i]].name +'</h1><hr><p>'+ artworks[order[i]].description +'</p></div></div>');
}
window.addEventListener("load",function(){
    $('.loading').remove('.loading');
    $('body').css('overflow','visible');
    $('body').css('position','static');
})