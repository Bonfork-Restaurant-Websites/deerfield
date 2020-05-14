// Menu Behavior
$(document).ready(function () {
    $('.nav-button').click(function () {
        $('body').toggleClass('nav-open');
    });
});

$(document).ready(function () {
    $('.btn-reserve').click(function () {
        $('body').addClass('reservation-open');
    });
});

$(document).ready(function () {
    $('#close-reservation').click(function () {
        $('body').removeClass('reservation-open');
    });
});


// Slider Behavior
function moveToSelected(element) {

    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(next).nextAll().removeClass().addClass('hideRight');
    $(prev).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function () {
    moveToSelected($(this));
});

$('#prev').click(function () {
    moveToSelected('prev');
});

$('#next').click(function () {
    moveToSelected('next');
});



// Carousel Indicators
let carouselLength = $('.banner .carousel-item').length;
let aboutCarouselLength = $('.testimonials .carousel-item').length;

if (carouselLength < 10) {
    $(".nr-img-header").text("0" + carouselLength);
}
else {
    $(".nr-img-header").text(carouselLength);
}

if (aboutCarouselLength < 10) {
    $(".nr-img-about").text("0" + aboutCarouselLength);
}
else {
    $(".nr-img-about").text(aboutCarouselLength);
}

$(".banner .carousel").on('slid.bs.carousel', function () {
    $('.banner .carousel-inner').children('.carousel-item').each(function () {
        if ($(this).hasClass('active')) {
            let heightBar = 80 / carouselLength * ($(this).index() + 1);
            $('.vr-fill').css('height', heightBar + 'px');
        }
    });
});

$(".services .carousel").on('slid.bs.carousel', function () {
    $('.services .carousel-inner').children('.carousel-item').each(function () {
        if ($(this).hasClass('active')) {
            let widthBar = 100 / carouselLength * ($(this).index() + 1);
            $('.hr-fill').css('width', widthBar + 'px');
        }
    });
});

$(".testimonials .carousel").on('slid.bs.carousel', function () {
    $('.testimonials .carousel-inner').children('.carousel-item').each(function () {
        if ($(this).hasClass('active')) {
            let widthBar = 100 / aboutCarouselLength * ($(this).index() + 1);
            $('.hr-fill').css('width', widthBar + 'px');
        }
    });
});


// Ajax Forms
function getFormDataString(formEl) {
    var formData = new FormData(formEl),
        data = [];

    for (var keyValue of formData) {
        data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
    }

    return data.join("&");
}


$(function () {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var minDate = year + '-' + month + '-' + day;

    $('#date').attr('min', minDate);
});


// Format phone number input
var cleave = new Cleave('#phone', {
    numericOnly: true,
    blocks: [0, 3, 3, 4],
    delimiters: ['(', ') ', '-']
});

// Check opening days
var today = new Date();
if (today.getDay() !== 1) {
    document.getElementById('open-text').textContent = 'Open Today';
} else {
    document.getElementById('open-text').textContent = 'Close Today';
}

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        stagePadding: 0,
        loop: true,
        center: true,
        margin: 0,
        nav: true,
        navText: ["Prev", "Next"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
                stagePadding: 100
            },
            1100: {
                items: 1,
                stagePadding: 200
            },
            1800: {
                items: 1,
                stagePadding: 450
            }
        }
    })
});


// Date/time picker
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('safari') != -1) {
        document.getElementById('date').type = 'date';
        document.getElementById('time').type = 'time';
    } else {
        if (ua.match(/iPad/i) || ua.match(/iPhone/i)) {
            document.getElementById('time').type = 'time';
        }
        else {
            console.log('safari');
        }
    }
}