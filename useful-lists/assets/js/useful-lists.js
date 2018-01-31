function getThumb(thumbId) {
    // Zero pad IDs to get correct thumb
    var paddedThumbId = thumbId.padStart(4, "0");

    // Special case for Aokiji 575 with extra 0
    if (thumbId === '575')
        paddedThumbId = "0" + paddedThumbId;

    return 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + paddedThumbId + '.png';
}

function createImgHtml(imgSrc, size, floatLeft) {
    var imgHtml = $('<img></img>');
    imgHtml.attr('src', imgSrc);
    imgHtml.attr('height', size);
    imgHtml.attr('width', size);

    if (floatLeft)
        imgHtml.css('float', 'left');

    return imgHtml;
}

function getFinalForms() {
    var allUnits = Object.keys(details);
    var baseForms = Object.keys(evolutions);

    var finalForms = allUnits.filter(function(el) {
        return !baseForms.includes(el);
    });

    return finalForms;
}

function processUnitData(regex, rawData, unit) {
    var data = {};
    data.name = unit[0];
    data.type = unit[1];
    data.rcv = unit[14];
    data.rawData = rawData;

    var rcvSubStr = rawData.match(regex);
    data.multiplier = rcvSubStr[1];

    return data;
}
