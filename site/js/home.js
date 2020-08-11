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

//contacts
$('#envelope').mouseover(function(){
    $(this).find('> img').attr('src','../../images/envelope-open.png');
}).mouseleave(function(){
    $(this).find('> img').attr('src','../../images/envelope-close.png');
});
$('#comment').mouseover(function(){
    $(this).find('> img').attr('src','../../images/comment-open.png');
}).mouseleave(function(){
    $(this).find('> img').attr('src','../../images/comment-close.png');
});
$('.navbar').on('hide.bs.collapse', function () {
    $('nav').css('background','');
  });
$('.navbar').on('show.bs.collapse', function () {
    $('nav').css('background','rgba(0, 0, 0, 50%)');
});

$(document).click(function () {
    $('.navbar-collapse').collapse('hide');
});


var projects = [
    {
        name: 'Echo Thoughts',
        thumbnail: '../../images/echo-thumbnail.png',
        description: 'Echo Thoughts is an app that provides resources such as reminder daily task, cognitive games, and studying tools/tips for college students who are struggling with their academic task. This is the first project created in my major IMD and we created this app as a goal to help young people who has trouble remembering things.',
        link: 'echo.html',
    },
    {
        name: 'Pocotoon',
        thumbnail: '../../images/pocotoon.png',
        description: 'Pocotoon is a game created with a group of three people for our CSS 101 class assignment. The objective of this game is to claim the most territory in the given time. Pocotoon was built without any game-making software, but with a program called Processing that required us to code the game from scratch.',
        link: 'pocotoon.html',
    },
    {
        name: 'Connection with Me and Technology',
        thumbnail: '../../images/tech-thumbnail.jpg',
        description: 'Here I will document what I have expirenced when I took the course BISIA 240. I had a chance to work on multiple projects, mostly centered around modern technology. This process lead me to a journey to search my connection of myself and digital technology and how it has changed my life.',
        link: 'technology.html',
    },
    {
        name: 'Art Gallery',
        thumbnail: '../../images/gallery.png',
        description: 'This is my collection of my past works. I have a variety of artstyles to experiment with my creativity.',
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
            '</div>'+
        '</div>'
    );
}
