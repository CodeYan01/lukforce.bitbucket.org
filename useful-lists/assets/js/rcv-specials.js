(function() {
    function getRcvSpecials(unitIds) {
        var regex = /Recovers (\d+\.*\d*)x character'*s RCV/i;
        var rcvSpecials = {};

        for (u in unitIds) {
            var uid = unitIds[u];
            var unit = units[uid - 1];
            var unitDetail = details[uid];

            if (unitDetail.special) {
                if (regex.test(unitDetail.special)) {
                    rcvSpecials[uid] = processUnitData(uid, unit, unitDetail.special);
                } else if (Array.isArray(unitDetail.special)) {
                    // For Specials with multiple stages
                    for (s in unitDetail.special) {
                        if (regex.test(unitDetail.special[s].description))
                            rcvSpecials[uid] = processUnitData(uid, unit, unitDetail.special[s].description);
                    }
                }
            }
        }

        // Convert to array
        var arr = $.map(rcvSpecials, function(value, index) {
            return [value];
        });

        return arr;
    }

    $(document).ready(function() {
        var rcvSpecials = getRcvSpecials(getFinalForms());

        var table = $('.data-table').DataTable({
            'data': rcvSpecials,
            'columns' : [
                {'data': 'id'},
                {'data': 'name'},
                {'data': 'total'},
                {'data': 'rcv'},
                {'data': 'rcvMultiplier'},
                {'data': 'numTurns'}
            ],
            'rowCallback': function(row, data, index) {
                // ID linked to OPTC-DB
                var idLink = $('<a></a>');
                idLink.attr('href', 'http://optc-db.github.io/characters/#/view/' + data.id);
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
