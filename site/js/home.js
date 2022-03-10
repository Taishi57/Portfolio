$('#submit').mouseover(function(){
    $(this).css('background','url("../../images/send.gif") no-repeat').css('background-size','100%');
}).mouseleave(function(){
    $(this).css('background','url("../../images/send.png") no-repeat').css('background-size','100%');
});

//email
function sent(){
    $('#sent h1').css('visibility','visible');
}
$('.collapse').on("click", "a:not([data-toggle])", null, function () {
    $('.collapse').collapse('hide');
});

// //contacts
// $('#envelope').mouseover(function(){
//     $(this).find('> img').attr('src','../../images/envelope-open.png');
// }).mouseleave(function(){
//     $(this).find('> img').attr('src','../../images/envelope-close.png');
// });
// $('#comment').mouseover(function(){
//     $(this).find('> img').attr('src','../../images/comment-open.png');
// }).mouseleave(function(){
//     $(this).find('> img').attr('src','../../images/comment-close.png');
// });
// $('.navbar').on('hide.bs.collapse', function () {
//     $('nav').css('background','');
//   });
// $('.navbar').on('show.bs.collapse', function () {
//     $('nav').css('background','rgba(0, 0, 0, 50%)');
// });

// $(document).click(function () {
//     $('.navbar-collapse').collapse('hide');
// });


var projects = [
    {
        name:'Rising Sun Esports',
        thumbnail:'images/rs-thumbnail.png',
        description:'I am a co-founder of a japanese esports team, and I was also in change of all the main graphic line, including the logo',
        link:'risingsun.html',
    },
    {
        name: 'Echo Thoughts',
        thumbnail: 'images/echo-thumbnail.png',
        description: 'Echo Thoughts is an app that provides resources such as reminder daily task, cognitive games, and studying tools/tips for college students who are struggling with their academic task. ',
        link: 'echo.html',
    },
    {
        name: 'Pocotoon',
        thumbnail: 'images/pocotoon.png',
        description: 'Pocotoon is a game developed by a group of three. The objective of this game is to claim the most territory in the given time. Pocotoon was built using program called Processing.',
        link: 'pocotoon.html',
    },
    // {
    //     name: 'Connection with Me and Technology',
    //     thumbnail: 'images/tech-thumbnail.jpg',
    //     description: 'During college I had a chance to work on multiple art projects mostly centered around modern technology. This process lead me to a journey to search my connection of myself to digital technology and how it has changed my life.',
    //     link: 'technology.html',
    // },
    {
        name: 'Art Gallery',
        thumbnail: 'images/gallery.png',
        description: 'This is my collection of my past works. I tested various artstyles to explore my creativity.',
        link: 'works.html',
    },
];
for (i = 0; i < projects.length; i++) {
    $('.projects').append(
        '<div class="row">'+
            '<div class="col-12"><h2 class="title">' + projects[i].name + '</h2></div>'+
            '</div>'+
                '<div class="row">'+
                    '<div class="col-md-7 thumbnail"><a href="' + projects[i].link + '"><img src="' + projects[i].thumbnail + '"></img></a></div>'+
                '<div class="col-md-5 description">'+
                '<p>' + projects[i].description + '</p>'+
                '<a href="' + projects[i].link + '"><button>Learn More</button></a>'+
            '</div>'+
        '</div>'
    );
}
