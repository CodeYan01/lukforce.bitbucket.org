// Highlight navbar
function highlightNavbar() {
    $('#event-countdown-nav').addClass('active');
}

var x = setInterval(function() {
    var mainStart = moment.utc('2019-09-07 03:00');
    var mainEnd = moment.utc('2019-09-10 03:00');

    var halfSta1Start = moment.utc('2019-09-07 03:00');
    var halfSta1End = moment.utc('2019-09-07 06:00');

    var halfSta2Start = moment.utc('2019-09-08 03:00');
    var halfSta2End = moment.utc('2019-09-08 06:00');

    var halfSta3Start = moment.utc('2019-09-09 03:00');
    var halfSta3End = moment.utc('2019-09-09 06:00');

    var halfSta4Start = moment.utc('2019-09-10 00:00');
    var halfSta4End = moment.utc('2019-09-10 03:00');

    countdown.setLabels(
        '|s|m|h|d',
        '|s|m|h|d',
        ' ',
        ' '
    );

    var units = countdown.HOURS | countdown.MINUTES | countdown.SECONDS;

    // Main timer
    var mainStartCd = countdown(null, mainStart, units);
    var mainEndCd = countdown(null, mainEnd, units);
    if (mainStartCd.value > 0) {
        $('#main-begin-end').html('begins');
        $('#main-cd').html(mainStartCd.toString());
        $('#main-local').html(mainStart.local().format('llll'));
    } else if (mainEndCd.value > 0) {
        $('#main-begin-end').html('ends');
        $('#main-cd').html(mainEndCd.toString());
        $('#main-local').html(mainEnd.local().format('llll'));
    }

    // Half Stamina 1 timer
    var halfSta1StartCd = countdown(null, halfSta1Start, units);
    var halfSta1EndCd = countdown(null, halfSta1End, units);
    if (halfSta1StartCd.value > 0) {
        $('#half-sta1-begin-end').html('begins');
        $('#half-sta1-cd').html(halfSta1StartCd.toString());
        $('#half-sta1-local').html(halfSta1Start.local().format('llll'));
    } else if (halfSta1EndCd.value > 0) {
        $('#half-sta1-begin-end').html('ends');
        $('#half-sta1-cd').html(halfSta1EndCd.toString());
        $('#half-sta1-local').html(halfSta1End.local().format('llll'));
        $('#half-sta1-active').show();
        $('#half-sta1-col').addClass('active-bg');
    } else {
        $('#half-sta1-txt').html('has ended');
        $('#half-sta1-active').hide();
        $('#half-sta1-col').removeClass('active-bg');
    }

    // Half Stamina 2 timer
    var halfSta2StartCd = countdown(null, halfSta2Start, units);
    var halfSta2EndCd = countdown(null, halfSta2End, units);
    if (halfSta2StartCd.value > 0) {
        $('#half-sta2-begin-end').html('begins');
        $('#half-sta2-cd').html(halfSta2StartCd.toString());
        $('#half-sta2-local').html(halfSta2Start.local().format('llll'));
    } else if (halfSta2EndCd.value > 0) {
        $('#half-sta2-begin-end').html('ends');
        $('#half-sta2-cd').html(halfSta2EndCd.toString());
        $('#half-sta2-local').html(halfSta2End.local().format('llll'));
        $('#half-sta2-active').show();
        $('#half-sta2-col').addClass('active-bg');
    } else {
        $('#half-sta2-txt').html('has ended');
        $('#half-sta2-active').hide();
        $('#half-sta2-col').removeClass('active-bg');
    }

    // Half Stamina 3 timer
    var halfSta3StartCd = countdown(null, halfSta3Start, units);
    var halfSta3EndCd = countdown(null, halfSta3End, units);
    if (halfSta3StartCd.value > 0) {
        $('#half-sta3-begin-end').html('begins');
        $('#half-sta3-cd').html(halfSta3StartCd.toString());
        $('#half-sta3-local').html(halfSta3Start.local().format('llll'));
    } else if (halfSta3EndCd.value > 0) {
        $('#half-sta3-begin-end').html('ends');
        $('#half-sta3-cd').html(halfSta3EndCd.toString());
        $('#half-sta3-local').html(halfSta3End.local().format('llll'));
        $('#half-sta3-active').show();
        $('#half-sta3-col').addClass('active-bg');
    } else {
        $('#half-sta3-txt').html('has ended');
        $('#half-sta3-active').hide();
        $('#half-sta3-col').removeClass('active-bg');
    }

    // Half Stamina 4 timer
    var halfSta4StartCd = countdown(null, halfSta4Start, units);
    var halfSta4EndCd = countdown(null, halfSta4End, units);
    if (halfSta4StartCd.value > 0) {
        $('#half-sta4-begin-end').html('begins');
        $('#half-sta4-cd').html(halfSta4StartCd.toString());
        $('#half-sta4-local').html(halfSta4Start.local().format('llll'));
    } else if (halfSta4EndCd.value > 0) {
        $('#half-sta4-begin-end').html('ends');
        $('#half-sta4-cd').html(halfSta4EndCd.toString());
        $('#half-sta4-local').html(halfSta4End.local().format('llll'));
        $('#half-sta4-active').show();
        $('#half-sta4-col').addClass('active-bg');
    } else {
        $('#half-sta4-txt').html('has ended');
        $('#half-sta4-active').hide();
        $('#half-sta4-col').removeClass('active-bg');
    }

    // Clear interval after event ends
    if (mainEndCd.value < 0) {
        clearInterval(x);

        $('#main-txt').html('has ended');
        $('.event-row').hide();
        $('.end-event-row').css('display', 'flex');
    }
}, 1000);
