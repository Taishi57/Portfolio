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
        name:'lemon',
        src:'../../artworks/lemon.jpg'},
    {
        name:'tomato',
        src:'../../artworks/tomato.jpg'},
    {
        name:'seattle',
        src:'../../artworks/seattle.png'},
    {   
        name:'Light in Dark',
        src:'../../artworks/lightInDark.jpg'},
    {
        name:'Desk',
        src:'../../artworks/desk.jpg'},
    {
        name:'pepper',
        src:'../../artworks/pepper.jpg'},
    {
        name:'Shoe',
        src:'../../artworks/shoe.jpg'},
    {
        name:'Seesaw',
        src:'../../artworks/seesaw.gif'}
];
var order = [1,6,2,0,4,5,3,7]
for(i = 0; i < artworks.length; i++){
    $('.artworks').append('<img class="thumbnail" src="'+ artworks[order[i]].src +'"></img>');

}