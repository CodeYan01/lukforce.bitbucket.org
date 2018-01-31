(function() {
    function getRcvSpecials(unitIds) {
        var regex = /Recovers (\d+\.*\d*)x.+RCV/i;
        var rcvSpecials = {};

        for (u in unitIds) {
            var uid = unitIds[u];
            var unit = units[uid - 1];
            var unitDetail = details[uid];

            if (unitDetail.special) {
                if (regex.test(unitDetail.special)) {
                    rcvSpecials[uid] = processUnitData(regex, unitDetail.special, unit);
                } else if (Array.isArray(unitDetail.special)) {
                    // For Specials with multiple stages
                    for (s in unitDetail.special) {
                        if (regex.test(unitDetail.special[s].description))
                            rcvSpecials[uid] = processUnitData(regex, unitDetail.special[s].description, unit);
                    }
                }
            }
        }

        return rcvSpecials;
    }

    $(document).ready(function() {
        var finalForms = getFinalForms();

        var rcvSpecials = getRcvSpecials(finalForms);
        for (rcv_s in rcvSpecials) {
            var data = rcvSpecials[rcv_s];

            var dataRow = $('<tr></tr>');

            var idLink = $('<a></a>');
            idLink.attr('href', 'http://optc-db.github.io/characters/#/view/' + rcv_s);
            idLink.attr('target', '_blank');
            idLink.text(rcv_s);
            dataRow.append($('<td></td>').append(idLink));

            var nameTd = $('<td></td>');
            nameTd.append(createImgHtml(getThumb(rcv_s), 30, true));

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

            $('#rcv-specials').append(dataRow);
        }

        $('.data-table').dataTable({
            'searching': false,
            'order': [[2, 'desc']]
        });
    });
}) ();
