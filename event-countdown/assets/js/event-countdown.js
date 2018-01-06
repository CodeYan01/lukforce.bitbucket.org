var x = setInterval(function() {
    var mainStart = moment.utc('2018-01-12 08:00');
    var mainEnd = moment.utc('2018-01-14 08:00');

    var halfSta1Start = moment.utc('2018-01-12 22:00');
    var halfSta1End = moment.utc('2018-01-13 01:00');

    var halfSta2Start = moment.utc('2018-01-13 06:00');
    var halfSta2End = moment.utc('2018-01-13 09:00');

    var halfSta3Start = moment.utc('2018-01-14 05:00');
    var halfSta3End = moment.utc('2018-01-14 08:00');

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
        $('#halfSta1-begin-end').html('begins');
        $('#halfSta1-cd').html(halfSta1StartCd.toString());
        $('#halfSta1-local').html(halfSta1Start.local().format('llll'));
    } else if (halfSta1EndCd.value > 0) {
        $('#halfSta1-begin-end').html('ends');
        $('#halfSta1-cd').html(halfSta1EndCd.toString());
        $('#halfSta1-local').html(halfSta1End.local().format('llll'));
        $('#halfSta1-active').show();
        $('#halfSta1-col').addClass('active-bg');
    } else {
        $('#halfSta1-txt').html('has ended');
        $('#halfSta1-active').hide();
        $('#halfSta1-col').removeClass('active-bg');
    }

    // Half Stamina 2 timer
    var halfSta2StartCd = countdown(null, halfSta2Start, units);
    var halfSta2EndCd = countdown(null, halfSta2End, units);
    if (halfSta2StartCd.value > 0) {
        $('#halfSta2-begin-end').html('begins');
        $('#halfSta2-cd').html(halfSta2StartCd.toString());
        $('#halfSta2-local').html(halfSta2Start.local().format('llll'));
    } else if (halfSta2EndCd.value > 0) {
        $('#halfSta2-begin-end').html('ends');
        $('#halfSta2-cd').html(halfSta2EndCd.toString());
        $('#halfSta2-local').html(halfSta2End.local().format('llll'));
        $('#halfSta2-active').show();
        $('#halfSta2-col').addClass('active-bg');
    } else {
        $('#halfSta2-txt').html('has ended');
        $('#halfSta2-active').hide();
        $('#halfSta2-col').removeClass('active-bg');
    }

    // Half Stamina 3 timer
    var halfSta3StartCd = countdown(null, halfSta3Start, units);
    var halfSta3EndCd = countdown(null, halfSta3End, units);
    if (halfSta3StartCd.value > 0) {
        $('#halfSta3-begin-end').html('begins');
        $('#halfSta3-cd').html(halfSta3StartCd.toString());
        $('#halfSta3-local').html(halfSta3Start.local().format('llll'));
    } else if (halfSta3EndCd.value > 0) {
        $('#halfSta3-begin-end').html('ends');
        $('#halfSta3-cd').html(halfSta3EndCd.toString());
        $('#halfSta3-local').html(halfSta3End.local().format('llll'));
        $('#halfSta3-active').show();
        $('#halfSta3-col').addClass('active-bg');
    } else {
        $('#halfSta3-txt').html('has ended');
        $('#halfSta3-active').hide();
        $('#halfSta3-col').removeClass('active-bg');
    }

    // Clear interval after event ends
    if (mainEndCd.value < 0) {
        clearInterval(x);

        $('#main-txt').html('has ended');
        $('.event-row').hide();
        $('.end-event-row').show();
    }
}, 1000);
