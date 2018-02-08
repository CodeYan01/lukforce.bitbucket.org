(function() {
    function getRcvCaptains(unitIds) {
        var regex = /Recovers (\d+\.*\d*)x character'*s RCV/i;
        var rcvCaptains = {};

        for (u in unitIds) {
            var uid = unitIds[u];
            var unit = units[uid - 1];
            var unitDetail = details[uid];

            if (unitDetail.captain) {
                if (regex.test(unitDetail.captain)) {
                    rcvCaptains[uid] = processUnitData(uid, unit, unitDetail.captain, 'rcv-captains');
                } else if (typeof(unitDetail.captain) === 'object') {
                    // For Captain Abilities with limit break
                    for (c in unitDetail.captain) {
                        if (regex.test(unitDetail.captain[c]))
                            rcvCaptains[uid] = processUnitData(uid, unit, unitDetail.captain[c], 'rcv-captains');
                    }
                }
            }
        }

        // Convert to array
        var arr = $.map(rcvCaptains, function(value, index) {
            return [value];
        });

        return arr;
    }

    $(document).ready(function() {
        var rcvCaptains = getRcvCaptains(getFinalForms());

        var table = $('.data-table').DataTable({
            'data': rcvCaptains,
            'columns' : [
                {'data': 'id'},
                {'data': 'name'},
                {'data': 'total'},
                {'data': 'rcv'},
                {'data': 'rcvMultiplier'},
                {'data': 'atkMultiplier'}
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
