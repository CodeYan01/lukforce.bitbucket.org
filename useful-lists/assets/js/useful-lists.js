function highlightNavbar() {
    // Highlight navbar
    $('#useful-lists-nav').addClass('active');
}

function getFinalForms() {
    var allUnits = Object.keys(details);
    var baseForms = Object.keys(evolutions);

    var finalForms = allUnits.filter(function(el) {
        return baseForms.indexOf(el) === -1 && el < 5000;
    });

    return finalForms;
}

function processUnitData(id, unit, rawData, type) {
    var data = {};
    data.id = id;
    data.name = unit[0];
    data.type = unit[1];
    data.clazz = unit[2];
    data.global = flags[id] && flags[id].global ? 1 : 0;

    if (type === 'rcv-captains' || type === 'rcv-specials') {
        // RCV Multiplier regex
        var rcvRegex = /Recovers (\d+\.*\d*)x character'*s RCV/i;

        // Captain Ability: ATK Multiplier regex
        var atkRegex = /Boosts ATK.+characters by (\d+\.*\d*)x/i;

        // Captain Ability: Chain Multiplier regex
        var chainRegex = /Boosts chain multiplier by (\d+\.*\d*)x/i;

        // Special: Multiple Turn Special regex
        var turnRegex = /RCV.+at the end of.+turn for (\d+\.*\d*) turns/i;

        data.rcv = unit[14] + 100;

        // Parse Captain Ability / Special with Regex
        var rcvRegexResult = rcvRegex.exec(rawData);
        data.rcvMultiplier = rcvRegexResult ? rcvRegexResult[1] : '';

        if (type === 'rcv-captains') {
            var atkRegexResult = atkRegex.exec(rawData);
            data.atkMultiplier = atkRegexResult ? atkRegexResult[1] : '';

            if (!atkRegexResult) {
                var chainRegexResult = chainRegex.exec(rawData);
                data.atkMultiplier = chainRegexResult ? (chainRegexResult[1] + ' (chain)') : '';
            }
        } else {
            var turnRegexResult = turnRegex.exec(rawData);
            data.numTurns = turnRegexResult ? turnRegexResult[1] : '';
        }

        // Calculate total recovered HP
        data.total = data.rcv * data.rcvMultiplier;
    } else if (type === 'mob-clear-specials') {
        // Special: ATK Multiplier regex
        var spAtkRegex = /Deals (\d+\.*\d*)x (the )*(character'*s )*.*ATK.+to all enemies/i;

        // Special: Typeless damage regex
        var typelessRegex = /typeless damage/i;

        // Special: Ignore barrier regex
        var ignoreBarrierRegex = /ignore damage negating abilities and barriers/i;

        // Special: Fixed damage regex
        var fixedRegex = /fixed.+damage/i;

        data.atk = unit[13];

        // Parse Special with Regex
        var spAtkRegexResult = spAtkRegex.exec(rawData);
        data.atkMultiplier = spAtkRegexResult ? spAtkRegexResult[1] : '';

        data.total = data.atk * data.atkMultiplier;

        data.note = [];
        if (typelessRegex.exec(rawData))
            data.note.push('Typeless');
        if (ignoreBarrierRegex.exec(rawData))
            data.note.push('Ignore Barrier');
        if (fixedRegex.exec(rawData))
            data.note.push('Fixed');

        // Neptune special case
        if (id == 1475)
            data.note.push('Enemy < 50%');
    } else if (type === 'mob-clear-fixed-specials') {
        // Special: Damage amount regex
        var dmgRegex = /Deals (\d+\,*\d*) fixed damage.+to all enemies/i;

        // Special: Ignore barrier regex
        var ignoreBarrierRegex = /ignore damage negating abilities and barriers/i;

        data.atk = unit[13];

        // Parse Special with Regex
        data.atkMultiplier = 'N/A';

        var dmgRegexResult = dmgRegex.exec(rawData);
        data.total = dmgRegexResult ? dmgRegexResult[1] : '';
        data.total = data.total.replace(',', '');

        data.note = [];
        if (ignoreBarrierRegex.exec(rawData))
            data.note.push('Ignore Barrier');

        data.note.push('Fixed');
    }

    return data;
}

$.fn.dataTable.ext.search.push(
    function(settings, rowData, index, data) {
        var typeFilter = filters.type;
        var classFilter = filters.clazz;
        var globalFilter = filters.global;

        if (typeFilter.length == 0
            && classFilter.length == 0
            && globalFilter === 0)
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

        // Filter Global units
        if (globalFilter === 1 && data.global === 0)
            return false;

        return true;
    }
);

var filters = {
    type: [],
    clazz: [],
    global: 0
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

    $('.global-filter').click(function() {
        if (filters.global === 0) {
            // Select filter if not already selected
            filters.global = 1;
            $(this).addClass('selected');
        } else {
            // De-select filter
            filters.global = 0;
            $(this).removeClass('selected');
        }
    });
});
