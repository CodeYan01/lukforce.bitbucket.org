var x = setInterval(function() {
    var units = countdown.HOURS | countdown.MINUTES | countdown.SECONDS;

    // Main timer
    var mainStart = new Date(Date.UTC(2017, 9, 25, 3, 0, 0));
    var mainEnd = new Date(Date.UTC(2017, 9, 27, 3, 0, 0));

    var mainStartCd = countdown(null, mainStart, units);
    var mainEndCd = countdown(null, mainEnd, units);
    if (mainStartCd.value > 0) {
        $('#main-begin-end').html('begins');
        $('#main-cd').html(mainStartCd.toString());
    } else if (mainEndCd.value > 0) {
        $('#main-begin-end').html('ends');
        $('#main-cd').html(mainEndCd.toString());
    }

    // Akainu timer
    var akainuStart = new Date(Date.UTC(2017, 9, 26, 20, 0, 0));
    var akainuEnd = new Date(Date.UTC(2017, 9, 27, 3, 0, 0));

    var akainuStartCd = countdown(null, akainuStart, units);
    var akainuEndCd = countdown(null, akainuEnd, units);
    if (akainuStartCd.value > 0) {
        $('#akainu-begin-end').html('begins');
        $('#akainu-cd').html(akainuStartCd.toString());
    } else if (akainuEndCd.value > 0) {
        $('#akainu-begin-end').html('ends');
        $('#akainu-cd').html(akainuEndCd.toString());
        $('#akainu-half-sta').css('display', '');
    } else
        $('#akainu-txt').html('has ended');

    // Kizaru timer
    var kizaruStart = new Date(Date.UTC(2017, 9, 26, 3, 0, 0));
    var kizaruEnd = new Date(Date.UTC(2017, 9, 26, 10, 0, 0));

    var kizaruStartCd = countdown(null, kizaruStart, units);
    var kizaruEndCd = countdown(null, kizaruEnd, units);
    if (kizaruStartCd.value > 0) {
        $('#kizaru-begin-end').html('begins');
        $('#kizaru-cd').html(kizaruStartCd.toString());
    } else if (kizaruEndCd.value > 0) {
        $('#kizaru-begin-end').html('ends');
        $('#kizaru-cd').html(kizaruEndCd.toString());
        $('#kizaru-half-sta').css('display', '');
    } else
        $('#kizaru-txt').html('has ended');

    // Aokiji timer
    var aokijiStart = new Date(Date.UTC(2017, 9, 25, 20, 0, 0));
    var aokijiEnd = new Date(Date.UTC(2017, 9, 26, 3, 0, 0));

    var aokijiStartCd = countdown(null, aokijiStart, units);
    var aokijiEndCd = countdown(null, aokijiEnd, units);
    if (aokijiStartCd.value > 0) {
        $('#aokiji-begin-end').html('begins');
        $('#aokiji-cd').html(aokijiStartCd.toString());
    } else if (aokijiEndCd.value > 0) {
        $('#aokiji-begin-end').html('ends');
        $('#aokiji-cd').html(aokijiEndCd.toString());
        $('#aokiji-half-sta').css('display', '');
    } else
        $('#aokiji-txt').html('has ended');

    // Clear interval after event ends
    if (mainEndCd.value < 0) {
        clearInterval(x);
        $('#main-txt').html('has ended');
    }
}, 1000);
