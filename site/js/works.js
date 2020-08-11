// var artworks = [
//     {
//         name: 'Tomato',
//         src: '../../artworks/tomato.jpg',
//         low: '../../artworks/low/tomatoLow.jpg',
//         description: 'This was drawn with an iPad Pro using digital colored pencil. My though process of this was very simple, I wanted to draw fruits and vegetables realistically, but that is way too cliche, so I decided to crush the fruits. This not only avoids the common fruits drawings, but it adds to the challenge of drawing the juice of the interior. This drawing really tested my observation use of colors to be able to successfully draw the fruit realistically.'
//     },
//     {
//         name: 'Seattle',
//         src: '../../artworks/seattle.jpg',
//         low: '../../artworks/low/seattleLow.jpg',
//         description: 'I wanted to learn how to use Adobe Illustrator, so I asked some friends if they wanted any lock/home screen made by me. One of my friend requested me to make a lockscreen of seattle, which was exactly what I did. My friend was happy with the results of the locksceen, and I was able to learn more on how to use Illustrator, so it was a Win-Win! Before giving the lock screen to my friend, I removed some of the raindrops in the middle so that it will be easier to see the displayed time.'
//     },
//     {
//         name: 'Light in Dark',
//         src: '../../artworks/lightInDark.jpg',
//         low: '../../artworks/low/lightInDarkLow.jpg',
//         description: 'The medium of this drawing is charcoal. I wanted to create a piece that has a large contrast, the initial source of this picture is me in the dark with one bright light source spotted towards me. The hood is for the aesthetic feel. It somewhat represents that I am insecure in the dark, and I am drawn towards the light, possibly meaning freedom or confort.'
//     },
//     {
//         name: 'Desk',
//         src: '../../artworks/desk.jpg',
//         low: '../../artworks/low/deskLow.jpg',
//         description: 'This drawing was drawn with graphite pencils.'
//     },
//     {
//         name: 'Untied',
//         src: '../../artworks/shoe.jpg',
//         low: '../../artworks/low/shoeLow.jpg',
//         description: 'This piece was very fun to draw, the multiple textures of the shoe such as the leather and the rubber made me use different techniques to be able to accurately represent the surface. This also gave me an opportunity to try out the different degrees of the pencil (6H-6B) and see how the different hardness affects how my drawing looks.'
//     },
//     {
//         name: 'Totally Realistic Soccer',
//         src: '../../artworks/soccer.gif',
//         low: '../../artworks/low/soccerLow.png',
//         description: 'This gif animation was created with an app called <i>Folioscope</i> which lets to drawn flipnote animation on your smartphone/tablet. They are all drawn frame by frame, unlike latest animating programs that automatically generates the movement for you. This animation\'s theme is soccer, I tried to make a humorous scene of characters doing ridiculous "soccer". You can see more of my GIF animations <a class="learn-more" href="https://folioscope.co/taishi1999">here</a>'
//     }
// ];
//var order = [0, 1, 2, 4, 5] //order of the featured artworks
// for (i = 0; i < order.length; i++) {
//     $('.artlist').append('<div class="row"><div class="col-12 title"><h2>' + artworks[order[i]].name + '</h2></div></div> <div class="row"><div class="col-md-6 col-lg-4 artwork"><img class="low" src="' + artworks[order[i]].low + '"></img><img class="high" src="' + artworks[order[i]].src + '"></img></div><div class="col-md-6 col-lg-8 description"><p>' + artworks[order[i]].description + '</p></div></div>');
// }

var works = [
    'Expedition1.png',
    'Expedition2.png',
    'TokyoThrowdown1.png',
    'TokyoThrowdown2.png',
    'supernova.png',
    'RS-20win.png',
    'RS-match.png',
    'RisingSun.png',
    'RS-twitter.png',
    'RS-banner.png',
    'RS-lockscreen.png',
    '50kills.gif',
    'Uwajimaya.jpg',
    'filmScreen.png',
    'lightInDark.jpg',
    'seattle.jpg',
    'show.jpg',
    'soccer.gif',
    'tomato.jpg',
    'blueberry.jpg',
    'cyborg.jpg',
    'forte.jpg',
    'lemon.jpg',
    'penny.jpg',
    'stationary.jpg',
    'toast.jpg',
    'battlefield.jpg',
    'uw.jpg',
    'desk.jpg',
    'leo.jpg',
    'musicalBattle.gif'];

for (i = 0; i < works.length; i++) {
    $('.masonry').append(
        '<div class="brick">'+
            '<img src="../../artworks/'+works[i]+'" alt="" title="">'+
        '</div>'
    );
}




// //load
// $('.high').on("load", function () {
//     $(this).siblings().css("display", "none");
//     $(this).css("display", "initial");
// });

//zoom
$('.masonry img').click(function () {
    var $imgsrc = $(this).attr('src');
    $('.zoom').css('display', 'flex');
    $('.zoom img').attr('src', $imgsrc);
});
$('.zoom').click(function () {
    $(this).css('display', 'none');
});
