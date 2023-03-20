// ---- Trending ----

var carouselWidth = $('#carousel-1 .carousel-inner')[0].scrollWidth;
var imageWidth = $('#carousel-1 .carousel-item').width();
// console.log(imageWidth);

var scrollPosition = 0;

$('#carousel-1 .carousel-control-next').on('click', function(){
    if(scrollPosition < (carouselWidth - (imageWidth*5))){
        scrollPosition = scrollPosition + imageWidth + 26;
        $('#carousel-1 .carousel-inner').animate({scrollLeft:scrollPosition},500)
    }
});

$('#carousel-1 .carousel-control-prev').on('click', function(){
    if(scrollPosition > 0){
        scrollPosition = scrollPosition - imageWidth - 26;
        $('#carousel-1 .carousel-inner').animate({scrollLeft:scrollPosition},500)
    }
});

// ---- Action ----

var carouselWidthAction= $('#carousel-2 .carousel-inner')[0].scrollWidth;
var imageWidthAction = $('#carousel-2 .carousel-item').width();

var scrollPositionAction = 0;

$('#carousel-2 .carousel-control-next').on('click', function(){
    if(scrollPositionAction < (carouselWidthAction - (imageWidthAction*5))){
        scrollPositionAction = scrollPositionAction + imageWidthAction + 26;
        $('#carousel-2 .carousel-inner').animate({scrollLeft:scrollPositionAction},500)
    }
});

$('#carousel-2 .carousel-control-prev').on('click', function(){
    if(scrollPositionAction > 0){
        scrollPositionAction = scrollPositionAction - imageWidthAction - 26;
        $('#carousel-2 .carousel-inner').animate({scrollLeft:scrollPositionAction},500)
    }
});


// ---- Movies ----

var carouselWidthMovies = $('#carousel-3 .carousel-inner')[0].scrollWidth;
var imageWidthMovies = $('#carousel-3 .carousel-item').width();

var scrollPositionMovies = 0;

$('#carousel-3 .carousel-control-next').on('click', function(){
    if(scrollPositionMovies < (carouselWidthMovies - (imageWidthMovies*5))){
        scrollPositionMovies = scrollPositionMovies + imageWidthMovies + 26;
        $('#carousel-3 .carousel-inner').animate({scrollLeft:scrollPositionMovies},500)
    }
});

$('#carousel-3 .carousel-control-prev').on('click', function(){
    if(scrollPositionMovies > 0){
        scrollPositionMovies = scrollPositionMovies - imageWidthMovies - 26;
        $('#carousel-3 .carousel-inner').animate({scrollLeft:scrollPositionMovies},500)
    }
});


// ---- TV Shows ----

var carouselWidthTVShows = $('#carousel-4 .carousel-inner')[0].scrollWidth;
var imageWidthTVShows = $('#carousel-4 .carousel-item').width();

var scrollPositionTVShows = 0;

$('#carousel-4 .carousel-control-next').on('click', function(){
    if(scrollPositionTVShows < (carouselWidthTVShows - (imageWidthTVShows*5))){
        scrollPositionTVShows = scrollPositionTVShows + imageWidthTVShows +16;
        $('#carousel-4 .carousel-inner').animate({scrollLeft:scrollPositionTVShows},500)
    }
});

$('#carousel-4 .carousel-control-prev').on('click', function(){
    if(scrollPositionTVShows > 0){
        scrollPositionTVShows = scrollPositionTVShows - imageWidthTVShows -26;
        $('#carousel-4 .carousel-inner').animate({scrollLeft:scrollPositionTVShows},500)
    }
});
