var introLink = document.querySelector('.intro-link');

var ducksLink = document.querySelector('.ducks-link');

var tulipsLink = document.querySelector('.tulips-link')
var birthdayLink = document.querySelector('.birthday-link');
var loveLink = document.querySelector('.love-link')

var theme = document.querySelector('.theme-one')



theme.addEventListener('click', function (event) {
    document.querySelector('body').style.backgroundColor = '#CBC3E3'
    document.querySelector('.header-title').style.color = '#ffd1dc'
    document.querySelector('.theme-one').style.backgroundColor = '#ffd1dc'

});

introLink.addEventListener('click', function (event) {
    event.preventDefault();

    var introImage = document.querySelector('.intro-image')
    var introParagraph = document.querySelector('.intro-paragraph')

    introImage.classList.toggle('hidden')
    introParagraph.classList.toggle('hidden')



});

ducksLink.addEventListener('click', function (event) {
    event.preventDefault();

    var ducksParagraph = document.querySelector('.ducks-paragraph')
    var ducksImage = document.querySelector('.duck-image')

    ducksImage.classList.toggle('hidden')
    ducksParagraph.classList.toggle('hidden')

});

tulipsLink.addEventListener('click', function (event) {
    event.preventDefault();

    var tulipsImage = document.querySelector('.tulips-image')
    var tulipsParagraph = document.querySelector('.tulips-paragraph')

    tulipsImage.classList.toggle('hidden')
    tulipsParagraph.classList.toggle('hidden')

});

loveLink.addEventListener('click', function (event) {
    event.preventDefault();

    var loveImage = document.querySelector('.love-image')
    var loveParagraph = document.querySelector('.love-paragraph')

    loveImage.classList.toggle('hidden')
    loveParagraph.classList.toggle('hidden')

});