$(window).on('scroll',function () {
    if ($(window).scrollTop()){
        $('nav').addClass('white');
    }
    else {
        $('nav').removeClass('white');
    }
});
$('button i').click(function () {
    $(this).toggleClass('fa-bars fa-times');
});
$('#uinav1').click(function () {
   $('#uinav1 span').addClass('hidden');
});

$('#content-hide').click(function () {
         $('#para1').toggle();
     });

$('#hide2').click(function () {
     $('#para2').toggle();
 });

 $('#hide3').click(function () {
     $('#para3').toggle();
 });
function showProducts(minPrice, maxPrice) {
    $('#products li').hide().filter(function () {
        let price = $(this).data('price',2300);
        return price >= minPrice && price <= maxPrice;

    }).show();

}

$(function() {
    let options = {
        range: true,
        min: 2300,
        max: 90000,
        values: [2300, 90000],
        slide: function(event, ui) {
            let min = ui.values[0],
                max = ui.values[1];

            $("#amount").val(`${min}`);
            $("#amount1").val(`${max}`);
            showProducts(min, max);
        }
    }, min, max;

    $("#slider").slider(options);

    min = $("#slider").slider("values", 0);
    max = $("#slider").slider("values", 1);

    $("#amount").val(`${min}`);
    $("#amount1").val(`${max}`);

    showProducts(min, max);
});
//Awesome Hide Element
$('.btn-click2').click(function () {
    event.preventDefault();
    $('.hide-item2').hide();
    $('.hide-item3').hide();
    $('.hide-item5').hide();
    $('.hide-item6').hide();
    $('.hide-item7').hide();
    $('.hide-item1').show();
    $('.hide-item4').show();
    $('.hide-item8').show();
});

$('.btn-click3').click(function () {
    event.preventDefault();
    $('.hide-item1').hide();
    $('.hide-item3').hide();
    $('.hide-item4').hide();
    $('.hide-item5').hide();
    $('.hide-item6').hide();
    $('.hide-item7').hide();
    $('.hide-item8').hide();
    $('.hide-item2').show();

});
$('.btn-click4').click(function () {
    event.preventDefault();
    $('.hide-item1').hide();
    $('.hide-item2').hide();
    $('.hide-item4').hide();
    $('.hide-item5').hide();
    $('.hide-item7').hide();
    $('.hide-item8').hide();
    $('.hide-item3').show();
    $('.hide-item6').show();

});
$('.btn-click5').click(function () {
    event.preventDefault();
    $('.hide-item1').hide();
    $('.hide-item2').hide();
    $('.hide-item3').hide();
    $('.hide-item4').hide();
    $('.hide-item6').hide();
    $('.hide-item7').hide();
    $('.hide-item8').hide();
    $('.hide-item5').show();
});
$('.btn-click6').click(function () {
    event.preventDefault();
    $('.hide-item1').hide();
    $('.hide-item2').hide();
    $('.hide-item3').hide();
    $('.hide-item4').hide();
    $('.hide-item5').hide();
    $('.hide-item6').hide();
    $('.hide-item8').hide();
    $('.hide-item7').show();
});
$('.btn-click1').click(function () {
    event.preventDefault();
    $('.hide-item1').show();
    $('.hide-item2').show();
    $('.hide-item3').show();
    $('.hide-item4').show();
    $('.hide-item5').show();
    $('.hide-item6').show();
    $('.hide-item7').show();
    $('.hide-item8').show();


});
$(document).ready(function() {
    $(".anchors").click(function () {
        $(this).addClass("active");
        $(".anchors").not(this).removeClass("active");
    });

});

$('.anchor-link1').click(function () {
   event.preventDefault();
   $('.hide-item9').show();
   $('.hide-item10').hide();
   $('.hide-item11').hide();
   $('.hide-item12').hide();


});
$('.anchor-link2').click(function () {
    event.preventDefault();
    $('.hide-item10').show();
    $('.hide-item9').hide();
    $('.hide-item11').hide();
    $('.hide-item12').hide();


});
$('.anchor-link3').click(function () {
    event.preventDefault();
    $('.hide-item11').show();
    $('.hide-item10').hide();
    $('.hide-item9').hide();
    $('.hide-item12').hide();
});
$('.anchor-link4').click(function () {
    event.preventDefault();
    $('.hide-item12').show();
    $('.hide-item11').hide();
    $('.hide-item9').hide();
    $('.hide-item10').hide();

});
$('.anchor-1').click(function () {
    $(this).addClass("active");
    $('.anchor-1').not(this).removeClass("active");
});

function makeTimer() {

    //		let endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
    let endTime = new Date("31 December 2019 11:55:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    let now = new Date();
    now = (Date.parse(now) / 1000);

    let timeLeft = endTime - now;

    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $(".days").html(days);
    $(".hours").html(hours);
    $(".minutes").html(minutes);
    $(".seconds").html(seconds);

}

setInterval(function() { makeTimer(); }, 1000);


