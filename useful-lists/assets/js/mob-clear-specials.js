(function() {
    function getMobClearSpecials(unitIds) {
        var regex = /Deals (\d+\.*\d*)x (the )*(character'*s )*.*ATK.+to all enemies/i;
        var mobClearSpecials = {};

        for (u in unitIds) {
            var uid = unitIds[u];
            var unit = units[uid - 1];
            var unitDetail = details[uid];

            if (unitDetail.special) {
                if (regex.test(unitDetail.special)) {
                    mobClearSpecials[uid] = processUnitData(uid, unit, unitDetail.special, 'mob-clear-specials');
                } else if (Array.isArray(unitDetail.special)) {
                    // For Specials with multiple stages
                    for (s in unitDetail.special) {
                        if (regex.test(unitDetail.special[s].description))
                            mobClearSpecials[uid] = processUnitData(uid, unit, unitDetail.special[s].description, 'mob-clear-specials');
                    }
                }
            }
        }

        // Convert to array
        var arr = $.map(mobClearSpecials, function(value, index) {
            return [value];
        });

        return arr;
    }

    function getMobClearFixedDmgSpecials(unitIds) {
        var regex = /Deals (\d+\,*\d*) fixed damage.+to all enemies/i;
        var mobClearSpecials = {};

        for (u in unitIds) {
            var uid = unitIds[u];
            var unit = units[uid - 1];
            var unitDetail = details[uid];

            if (unitDetail.special) {
                if (regex.test(unitDetail.special)) {
                    mobClearSpecials[uid] = processUnitData(uid, unit, unitDetail.special, 'mob-clear-fixed-specials');
                } else if (Array.isArray(unitDetail.special)) {
                    // For Specials with multiple stages
                    for (s in unitDetail.special) {
                        if (regex.test(unitDetail.special[s].description))
                            mobClearSpecials[uid] = processUnitData(uid, unit, unitDetail.special[s].description, 'mob-clear-fixed-specials');
                    }
                }
            }
        }

        // Convert to array
        var arr = $.map(mobClearSpecials, function(value, index) {
            return [value];
        });

        return arr;
    }

    $(document).ready(function() {
        var finalForms = getFinalForms();

        var mobClearSpecials = getMobClearSpecials(finalForms);
        mobClearSpecials = mobClearSpecials.concat(getMobClearFixedDmgSpecials(finalForms));

        var table = $('.data-table').DataTable({
            'data': mobClearSpecials,
            'columns' : [
                {'data': 'id'},
                {'data': 'name'},
                {'data': 'total'},
                {'data': 'atk'},
                {'data': 'atkMultiplier'},
                {'data': 'note'}
            ],
            'rowCallback': function(row, data, index) {
                // ID linked to OPTC-DB
                var idLink = $('<a></a>');
                idLink.attr('href', 'https://optc-db.github.io/characters/#/view/' + data.id);
                idLink.attr('target', '_blank');
                idLink.text(data.id);
                $('td:eq(0)', row).html(idLink);

                // Unit thumb
                $('td:eq(1)', row).html(createImgHtml(getThumb(data.id), 30, true));

                // Unit name color coded with type
                var nameSpan = $('<span></span>');
                nameSpan.addClass('name-span');
                nameSpan.addClass(data.type);
                nameSpan.text(data.name);
                $('td:eq(1)', row).append(nameSpan);
            },
            'order': [[2, 'desc']]
        });

        $('.filter').click(function() {
            table.draw();
        });
    });
}) ();
