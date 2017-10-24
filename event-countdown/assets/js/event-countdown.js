var x = setInterval(function() {
    var mainStart = moment.utc('2017-10-25 03:00');
    var mainEnd = moment.utc('2017-10-27 03:00');

    var akainuStart = moment.utc('2017-10-26 20:00');
    var akainuEnd = moment.utc('2017-10-27 03:00');

    var kizaruStart = moment.utc('2017-10-26 03:00');
    var kizaruEnd = moment.utc('2017-10-26 10:00');

    var aokijiStart = moment.utc('2017-10-25 20:00');
    var aokijiEnd = moment.utc('2017-10-26 03:00');

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

    // Akainu timer
    var akainuStartCd = countdown(null, akainuStart, units);
    var akainuEndCd = countdown(null, akainuEnd, units);
    if (akainuStartCd.value > 0) {
        $('#akainu-begin-end').html('begins');
        $('#akainu-cd').html(akainuStartCd.toString());
        $('#akainu-local').html(akainuStart.local().format('llll'));
    } else if (akainuEndCd.value > 0) {
        $('#akainu-begin-end').html('ends');
        $('#akainu-cd').html(akainuEndCd.toString());
        $('#akainu-local').html(akainuEnd.local().format('llll'));
        $('#akainu-half-sta').show();
    } else {
        $('#akainu-txt').html('has ended');
        $('#akainu-half-sta').hide();
    }

    // Kizaru timer
    var kizaruStartCd = countdown(null, kizaruStart, units);
    var kizaruEndCd = countdown(null, kizaruEnd, units);
    if (kizaruStartCd.value > 0) {
        $('#kizaru-begin-end').html('begins');
        $('#kizaru-cd').html(kizaruStartCd.toString());
        $('#kizaru-local').html(kizaruStart.local().format('llll'));
    } else if (kizaruEndCd.value > 0) {
        $('#kizaru-begin-end').html('ends');
        $('#kizaru-cd').html(kizaruEndCd.toString());
        $('#kizaru-local').html(kizaruEnd.local().format('llll'));
        $('#kizaru-half-sta').show();
    } else {
        $('#kizaru-txt').html('has ended');
        $('#kizaru-half-sta').hide();
    }

    // Aokiji timer
    var aokijiStartCd = countdown(null, aokijiStart, units);
    var aokijiEndCd = countdown(null, aokijiEnd, units);
    if (aokijiStartCd.value > 0) {
        $('#aokiji-begin-end').html('begins');
        $('#aokiji-cd').html(aokijiStartCd.toString());
        $('#aokiji-local').html(aokijiStart.local().format('llll'));
    } else if (aokijiEndCd.value > 0) {
        $('#aokiji-begin-end').html('ends');
        $('#aokiji-cd').html(aokijiEndCd.toString());
        $('#aokiji-local').html(aokijiEnd.local().format('llll'));
        $('#aokiji-half-sta').show();
    } else {
        $('#aokiji-txt').html('has ended');
        $('#aokiji-half-sta').hide();
    }

    // Clear interval after event ends
    if (mainEndCd.value < 0) {
        clearInterval(x);

        $('#main-txt').html('has ended');
        $('.event-row').hide();
        $('.end-event-row').show();
    }
}, 1000);
