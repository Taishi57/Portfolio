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
        src:'../../artworks/tomato.jpg',
        description:'This was drawn with an iPad Pro using digital colored pencil. My though process of this was very simple, I wanted to draw fruits and vegetables realistically, but that is way too cliche, so I decided to crush the fruits. This not only avoids the common fruits drawings, but it adds to the challenge of drawing the juice of the interior. This drawing really tested my observation use of colors to be able to successfully draw the fruit realistically.'},
    {
        name:'Seattle',
        src:'../../artworks/seattle.jpg',
        description:'I wanted to learn how to use Adobe Illustrator, so I asked some friends if they wanted any lock/home screen made by me. One of my friend requested me to make a lockscreen of seattle, which was exactly what I did. My friend was happy with the results of the locksceen, and I was able to learn more on how to use Illustrator, so it was a Win-Win! Before giving the lock screen to my friend, I removed some of the raindrops in the middle so that it will be easier to see the displayed time.'},
    {   
        name:'Light in Dark',
        src:'../../artworks/lightInDark.jpg',
        description:'The medium of this drawing is charcoal. I wanted to create a piece that has a large contrast, the initial source of this picture is me in the dark with one bright light source spotted towards me. The hood is for the aesthetic feel. It somewhat represents that I am insecure in the dark, and I am drawn towards the light, possibly meaning freedom or confort.'},
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