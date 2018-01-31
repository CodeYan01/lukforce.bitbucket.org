(function() {
    function getRcvCaptains(unitIds) {
        var regex = /Recovers (\d+\.*\d*)x.+RCV/i;
        var rcvCaptains = {};

        for (u in unitIds) {
            var uid = unitIds[u];
            var unit = units[uid - 1];
            var unitDetail = details[uid];

            if (unitDetail.captain) {
                if (regex.test(unitDetail.captain)) {
                    rcvCaptains[uid] = processUnitData(regex, unitDetail.captain, unit);
                } else if (typeof(unitDetail.captain) === 'object') {
                    // For Captain Abilities with limit break
                    for (c in unitDetail.captain) {
                        if (regex.test(unitDetail.captain[c]))
                            rcvCaptains[uid] = processUnitData(regex, unitDetail.captain[c], unit);
                    }
                }
            }
        }

        return rcvCaptains;
    }

    $(document).ready(function() {
        var finalForms = getFinalForms();

        var rcvCaptains = getRcvCaptains(finalForms);
        for (rcv_c in rcvCaptains) {
            var data = rcvCaptains[rcv_c];

            var dataRow = $('<tr></tr>');

            var idLink = $('<a></a>');
            idLink.attr('href', 'http://optc-db.github.io/characters/#/view/' + rcv_c);
            idLink.attr('target', '_blank');
            idLink.text(rcv_c);
            dataRow.append($('<td></td>').append(idLink));

            var nameTd = $('<td></td>');
            nameTd.append(createImgHtml(getThumb(rcv_c), 30, true));

            var nameSpan = $('<span></span>');
            nameSpan.addClass('name-span');
            nameSpan.addClass(data.type);
            nameSpan.text(data.name);

            nameTd.append(nameSpan);
            dataRow.append(nameTd);

            dataRow.append($('<td></td>').text((data.rcv + 100) * data.multiplier));
            dataRow.append($('<td></td>').text(data.rcv));
            dataRow.append($('<td></td>').text(data.rcv + 100));
            dataRow.append($('<td></td>').text(data.multiplier));

            $('#rcv-captains').append(dataRow);
        }

        $('.data-table').dataTable({
            'searching': false,
            'order': [[2, 'desc']]
        });
    });
}) ();
