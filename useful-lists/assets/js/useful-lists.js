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

function processUnitData(regex, id, rawData, unit) {
    var data = {};
    data.id = id;
    data.name = unit[0];
    data.type = unit[1];
    data.clazz = unit[2];
    data.rcv = unit[14] + 100;

    var rcvSubStr = rawData.match(regex);
    data.multiplier = rcvSubStr[1];

    data.total = data.rcv * data.multiplier;

    return data;
}

$.fn.dataTable.ext.search.push(
    function(settings, rowData, index, data) {
        var typeFilter = filters.type;
        var classFilter = filters.clazz;

        if (typeFilter.length == 0 && classFilter.length == 0)
            return true;

        // Filter by Type
        if (typeFilter.length != 0 && data.type !== typeFilter[0])
            return false;

        // Filter by Class
        if (classFilter.length != 0) {
            var singleClassFilter = classFilter.length == 1;
            var singleClassUnit = data.clazz.length == 1;

            if (singleClassFilter) {
                if (singleClassUnit) {
                    if (data.clazz !== classFilter[0])
                        return false;
                } else {
                    if (data.clazz.indexOf(classFilter[0]) == -1)
                        return false;
                }
            } else {
                if (singleClassUnit) {
                    return false;
                } else {
                    for (cf in classFilter) {
                        if (data.clazz.indexOf(classFilter[cf]) == -1)
                            return false;
                    }
                }
            }
        }

        return true;
    }
);

var filters = {
    type: [],
    clazz: [],
};

$(document).ready(function() {
    $('.type-filter').click(function() {
        var filter = $(this).data('filter');

        if (filters.type.indexOf(filter) == -1) {
            // Remove previously selected filter
            var removedFilter = filters.type.splice(0, 1);

            if (removedFilter.length > 0)
                $('.' + removedFilter[0] + '-div').removeClass('selected');

            // Add selected filter
            filters.type.push(filter);
            $(this).addClass('selected');
        } else {
            // De-select filter
            filters.type.splice(0, 1);
            $(this).removeClass('selected');
        }
    });

    $('.class-filter').click(function() {
        var filter = $(this).data('filter');

        if (filters.clazz.indexOf(filter) == -1) {
            // Remove previously selected filter
            var removedFilter = [];
            if (filters.clazz.length > 1)
                removedFilter = filters.clazz.splice(0, 1);

            if (removedFilter.length > 0)
                $('.' + removedFilter[0].replace(' ', '-').toLowerCase() + '-div').removeClass('selected');

            // Add selected filter
            filters.clazz.push(filter);
            $(this).addClass('selected');
        } else {
            // De-select filter
            filters.clazz.splice(filters.clazz.indexOf(filter), 1);
            $(this).removeClass('selected');
        }
    });
});
