function highlightNavbar() {
    // Highlight navbar
    $('#tm-planner-nav').addClass('active');
}

function createTooltip(imgDiv, text) {
    imgDiv.data('toggle', 'tooltip');
    imgDiv.data('placement', 'top');
    imgDiv.attr('title', text);
    imgDiv.tooltip();
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam)
            return sParameterName[1] === undefined ? true : sParameterName[1];
    }

    return false;
};

function getBoosters(tmId, server) {
    // Reset
    $('.booster').remove();

    $('#info_1_2x_main').show();
    $('#info_1_2x_alt').hide();

    // Change 2x or 2.25x version
    $('.div_x').hide();
    if (
        server == 'glb' &&
        (
            tmId == 1972 ||
            tmId == 2000 ||
            tmId == 2064
        )
    ) {
        // TM Sabo
        // TM Sanji & Zoro
        // TM Kizaru
        $('#div_2x').show();
        $('#div_1_5x').show();
        $('#div_1_35x').show();
        $('#div_1x').show();
    } else if (server == 'glb' && tmId == 2137) {
        // TM Croc
        $('#div_2_25x').show();
        $('#div_2x').show();
        $('#div_1_5x').show();
        $('#div_1_35x').show();
        $('#div_1x').show();
    } else if (
        server == 'glb' &&
        (
            tmId == 2175 ||
            tmId == 2109 ||
            tmId == 2211 ||
            tmId == 2261 ||
            tmId == 2299 ||
            tmId == 2336 ||
            tmId == 2387
        )
    ) {
        // TM Jack
        // TM Big Mom
        // TM Eneru
        // TM Shanks
        // TM Hancock
        // TM Law
        // TM Kaido
        $('#div_2x').show();
        $('#div_1_75x').show();
        $('#div_1_5x').show();
        $('#div_1_35x').show();
        $('#div_1x').show();
    } else if (server == 'glb' && tmId == 2362) {
        // TM Christmas Nami
        $('#div_2_2x').show();
        $('#div_1_75x').show();
        $('#div_1_5x').show();
        $('#div_1_35x').show();
        $('#div_1_1x').show();
        $('#div_1x').show();
    } else if (server == 'glb' && tmId == 2443) {
        // TM Doffy
        $('#div_2_2x').show();
        $('#div_2x').show();
        $('#div_1_5x').show();
        $('#div_1_35x').show();
        $('#div_1_1x').show();
        $('#div_1x').show();
    } else if (
        server == 'glb' &&
        (
            tmId == 2469 ||
            tmId == 2510 ||
            tmId == 2557 ||
            tmId == 2583 ||
            tmId == 2618 ||
            tmId == 2659 ||
            tmId == 2690 ||
            tmId == 2729 ||
            tmId == 2763 ||
            tmId == 2792
        )
    ) {
        // TM Smoothie & Oven
        // TM Weevil
        // TM Shanks & Beckman
        // TM Lucci
        // TM Sakazuki & Issho
        // TM Smoker
        // TM Blackbeard
        // TM Hawkins
        // TM Halloween Nami
        // TM O-Robi
        $('#div_2_2x').show();
        $('#div_2x').show();
        $('#div_1_75x').show();
        $('#div_1_5x').show();
        $('#div_1_35x').show();
        $('#div_1_1x').show();
        $('#div_1x').show();
    } else if (server == 'jpn' && tmId == 2064) {
        // TM Kizaru
        $('#div_2_25x').show();
        $('#div_1_75x').show();
        $('#div_1_35x').show();
    } else if (server == 'jpn' && tmId == 2109) {
        // TM Big Mom
        $('#div_1_75x').show();
        $('#div_1_35x_v2').show();
        $('#div_1_35x_v3').show();
        $('#div_1_25x').show();
    } else if (server == 'jpn' && tmId == 2137) {
        // TM Croc
        $('#div_2_25x').show();
        $('#div_1_75x').show();
        $('#div_1_5x').show();
        $('#div_1_35x_v4').show();
        $('#div_1_25x').show();
    } else if (
        server == 'jpn' &&
        (
            tmId == 2175 ||
            tmId == 2211
        )
    ) {
        // TM Jack
        // TM Eneru
        $('#div_2x').show();
        $('#div_1_75x').show();
        $('#div_1_5x').show();
        $('#div_1_35x_v4').show();
        $('#div_1_25x').show();
    } else if (server == 'jpn' && tmId == 2261) {
        // TM Shanks
        $('#div_1_5x').show();
        $('#div_1_35x_v2').show();
        $('#div_1_3x').show();
        $('#div_1_25x').show();
    } else if (
        server == 'jpn' &&
        (
            tmId == 2299 ||
            tmId == 2336
        )
    ) {
        // TM Hancock
        // TM Law
        $('#div_1_75x').show();
        $('#div_1_5x').show();
        $('#div_1_35x_v4').show();
        $('#div_1_25x_v2').show();
    } else if (server == 'jpn' && tmId == 2362) {
        // TM Christmas Nami
        $('#div_2_25x').show();
        $('#div_1_85x').show();
        $('#div_1_6x').show();
        $('#div_1_35x_v4').show();
        $('#div_1_3x_v2').show();
    } else if (server == 'jpn' && tmId == 2387) {
        // TM Kaido
        $('#div_1_75x').show();
        $('#div_1_35x_v2').show();
        $('#div_1_3x').show();
        $('#div_1_25x_v2').show();
    } else if (server == 'jpn' && tmId == 2443) {
        // TM Doffy
        $('#div_1_85x').show();
        $('#div_1_75x').show();
        $('#div_1_6x').show();
        $('#div_1_4x').show();
        $('#div_1_3x').show();
        $('#div_1_25x').show();
    } else if (
        server == 'jpn' &&
        (
            tmId == 2469 ||
            tmId == 2510
        )
    ) {
        // TM Smoothie & Oven
        // TM Edward Weevil
        $('#div_1_8x').show();
        $('#div_1_7x').show();
        $('#div_1_5x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_3x').show();
        $('#div_1_25x_v2').show();
    } else if (server == 'jpn' && tmId == 2557) {
        // TM Shanks & Beckman
        $('#div_2x').show();
        $('#div_1_8x').show();
        $('#div_1_6x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_35x_v2').show();
        $('#div_1_3x').show();
        $('#div_1_25x_v2').show();
    } else if (
        server == 'jpn' &&
        (
            tmId == 2583 ||
            tmId == 2618
        )
    ) {
        // TM Lucci
        // TM Sakazuki & Issho
        $('#div_2_25x').show();
        $('#div_1_8x').show();
        $('#div_1_6x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_3x').show();
        $('#div_1_25x_v3').show();
    } else if (server == 'jpn' && tmId == 2659) {
        // TM Smoker
        $('#div_2x').show();
        $('#div_1_8x').show();
        $('#div_1_6x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_35x_v2').show();
        $('#div_1_3x').show();
        $('#div_1_25x_v3').show();
        $('#div_1_25x_v4').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (server == 'jpn' && tmId == 2690) {
        // TM Blackbeard
        $('#div_2_25x').show();
        $('#div_2x').show();
        $('#div_1_6x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_3x_v3').show();
        $('#div_1_25x_v4').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (server == 'jpn' && tmId == 2729) {
        // TM Hawkins
        $('#div_2x').show();
        $('#div_1_8x').show();
        $('#div_1_6x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_3x').show();
        $('#div_1_25x_v3').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (
        server == 'jpn' &&
        (
            tmId == 2763 ||
            tmId == 2823 ||
            tmId == 2850 ||
            tmId == 2879 ||
            tmId == 2913
        )
    ) {
        // TM Halloween Nami
        // TM X Drake
        // TM Rebecca & Viola
        // TM Vivi
        // TM Shirahoshi
        $('#div_2x').show();
        $('#div_1_8x').show();
        $('#div_1_6x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_3x').show();
        $('#div_1_25x_v2').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (server == 'jpn' && tmId == 2792) {
        // TM O-Robi
        $('#div_2_25x').show();
        $('#div_1_8x').show();
        $('#div_1_6x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_3x').show();
        $('#div_1_25x_v2').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else {
        $('#div_2x').show();
        $('#div_1_5x').show();
        $('#div_1_35x').show();
    }

    var boosters = [];
    if (server === 'glb') {
        boosters = tm_boosters[tmId];
        $('#div_1_2x_tm_rr').show();
        $('#div_1_2x_tm').show();
    } else
        boosters = tm_boosters_jpn[tmId];

    if (typeof boosters === 'undefined')
        return false;

    for (var i = 0; i < boosters.length; i++) {
        var b = boosters[i];

        var imgDiv = $('<div></div>');
        imgDiv.append(createImgHtml(getThumb(b.id), 40, false));
        imgDiv.addClass('booster');
        imgDiv.data('id', b.id);
        imgDiv.data('x_pts', b.x_pts);

        // Name in tooltip
        createTooltip(imgDiv, units[b.id - 1][0]);

        // Type and Class
        imgDiv.data('type', units[b.id - 1][1]);

        var unitClass = units[b.id - 1][2];
        if (Array.isArray(unitClass)) {
            var class1;
            var class2;

            if (Array.isArray(unitClass[0])) {
                // Dual Units
                var dualClass = unitClass[2];
                class1 = dualClass[0];
                class2 = dualClass[1];
            } else {
                class1 = unitClass[0];
                class2 = unitClass[1];
            }

            imgDiv.data('class1', class1);
            imgDiv.data('class2', class2);
        } else {
            imgDiv.data('class1', unitClass);
        }

        // Has LB
        var uDetail = details[b.id];
        var hasLb = false;
        if (uDetail.limit || uDetail.potential) {
            if (server === 'jpn' || server === 'glb' && glb_no_lb.indexOf(b.id) == -1)
                hasLb = true;
        }
        imgDiv.data('has_lb', hasLb);

        imgDiv.data('max_lv', units[b.id - 1][7])
        imgDiv.data('team', -1);
        imgDiv.attr('id', 'booster_' + b.id);
        imgDiv.attr('draggable', true);
        imgDiv.css('display', 'inline-block');

        var _x_pts = b.x_pts.toString().replace(".", "_");

        if (b.x_pts === 1.2) {
            imgDiv.data('_type', b.type);
            $('#booster_' + _x_pts + 'x_' + b.type).append(imgDiv);
        } else if (b.x_pts === 1.4 && b.ver)
            $('#booster_' + _x_pts + 'x_v' + b.ver).append(imgDiv);
        else if (b.x_pts === 1.35 && b.ver)
            $('#booster_' + _x_pts + 'x_v' + b.ver).append(imgDiv);
        else if (b.x_pts === 1.3 && b.ver)
            $('#booster_' + _x_pts + 'x_v' + b.ver).append(imgDiv);
        else if (b.x_pts === 1.25 && b.ver)
            $('#booster_' + _x_pts + 'x_v' + b.ver).append(imgDiv);
        else
            $('#booster_' + _x_pts + 'x').append(imgDiv);

        _x_pts += 'x';

        if (b.x_pts === 1.4 && b.ver)
            _x_pts += '_v' + b.ver;
        else if (b.x_pts === 1.35 && b.ver)
            _x_pts += '_v' + b.ver;
        else if (b.x_pts === 1.3 && b.ver)
            _x_pts += '_v' + b.ver;
        else if (b.x_pts === 1.25 && b.ver)
            _x_pts += '_v' + b.ver;

        imgDiv.data('_x_pts', _x_pts);
    }

    return true;
}

function getOpponents(tmId, server) {
    // Reset
    $('#thumb-div').empty();

    var opponents = tm_opponents[tmId];

    // JPN TM Kizaru special case
    if (tmId == 2064 && server == 'jpn')
        opponents = tm_opponents['2064_jpn'];

    if (typeof opponents === 'undefined')
        return false;

    if ((tmId > 1889 && server == 'glb') || (tmId > 2064 && server == 'jpn')) {
        for (var opId in opponents) {
            var op = opponents[opId];
            var opName = op.name;
            var opType = op.type;
            var opPos = op.pos;

            var opPosDiv = $('#op-' + (opPos + 1));
            var opPosTeam = opPosDiv.closest('.team');

            if (Array.isArray(opName) && Array.isArray(opType)) {
                opPosDiv.empty();

                for (var j = 0; j < opName.length && j < opType.length; j++) {
                    var opHtml= $('<span></span>');
                    opHtml.html(opName[j]);
                    opHtml.addClass(opType[j]);

                    opPosDiv.append(opHtml);
                }
            } else {
                var opHtml = $('<span></span>');
                opHtml.html(opName);
                opHtml.addClass(opType);

                opPosDiv.html(opHtml);
            }

            opPosTeam.data('op_id', opId);
        }
    } else {
        for (var i = 0; i < opponents.length; i++) {
            var op = opponents[i];
            var opName = op.name;
            var opType = op.type;

            if (Array.isArray(opName) && Array.isArray(opType)) {
                $('#op-' + (i + 1)).empty();

                for (var j = 0; j < opName.length && j < opType.length; j++) {
                    var opHtml= $('<span></span>');
                    opHtml.html(opName[j]);
                    opHtml.addClass(opType[j]);

                    $('#op-' + (i + 1)).append(opHtml);
                }
            } else {
                var opHtml = $('<span></span>');
                opHtml.html(opName);
                opHtml.addClass(opType);

                $('#op-' + (i + 1)).html(opHtml);
            }
        }
    }

    var imgHtml = createImgHtml(getThumb(tmId), 50, false);
    $('#thumb-div').append(imgHtml);

    return true;
}

function init(tmId, server) {
    $('#tm-select').val(tmId + '_' + server);

    if (!getBoosters(tmId, server)) {
        alert('Invalid TM or Server');
        return false;
    }

    if (!getOpponents(tmId, server)) {
        alert('Invalid TM');
        return false;
    }

    // Display Ambush Team
    if (
        tmId == 2109 ||
        tmId == 2261 ||
        tmId == 2299 ||
        tmId == 2336 ||
        tmId == 2387 ||
        tmId == 2443 ||
        tmId == 2469 ||
        tmId == 2510 ||
        tmId == 2557 ||
        tmId == 2583 ||
        tmId == 2618 ||
        tmId == 2659 ||
        tmId == 2690 ||
        tmId == 2729 ||
        tmId == 2763 ||
        tmId == 2792 ||
        tmId == 2823 ||
        tmId == 2850 ||
        tmId == 2879 ||
        tmId == 2913
    ) {
        $('#ambush-team').show();
        $('#first-team').removeClass('offset-md-1');
    } else {
        $('#ambush-team').hide();
        $('#first-team').addClass('offset-md-1');
    }

    $('.booster-clone').remove();
    updateAllPts();
    $('#export-url-div').hide();

    // Retrieve last save time
    var serverStr = server === 'glb' ? '' : '_jpn';
    if (localStorage.getItem('lastSave_' + tmId + serverStr) !== null)
        $('#last-save').html(localStorage.getItem('lastSave_' + tmId + serverStr));
    else
        $('#last-save').html('N/A');

    return true;
}

function resetPosition(unit) {
    unit.removeClass('assigned');
    unit.removeClass('assigned-dh');
    unit.data('team', -1);

    var unitId = unit.data('id');
    var _x_pts = unit.data('_x_pts');
    var _type = unit.data('_type');

    if (_type)
        $('#booster_' + _x_pts + '_' + _type).append(unit);
    else
        $('#booster_' + _x_pts).append(unit);

    // Remove corresponding Clone
    $('#booster-clone_' + unitId + '_clone').remove();
}

function resetAll() {
    $('.booster').each(function() {
        resetPosition($(this).detach());
    });

    $('.booster-clone').remove();

    updateAllPts();
}

function parseLbStats(unitId) {
    var lbStats = {
        cd: 0,
        cdEx: 0
    };

    var lbs = details[unitId].limit;
    var keyLv = 999;

    if (lbs) {
        for (var l in lbs) {
            var lbDesc = lbs[l].description;

            if (l < keyLv) {
                if (lbDesc.includes('Reduce base Special Cooldown by '))
                    lbStats.cd += parseInt(lbDesc.substring(32, 33), 10);

                if (lbDesc.includes('LOCKED WITH KEY'))
                    keyLv = l;
            } else {
                if (lbDesc.includes('Reduce base Special Cooldown by '))
                    lbStats.cdEx += parseInt(lbDesc.substring(32, 33), 10);
            }
        }
    }

    return lbStats;
}

function decorateStr(str) {
    // Decorate Type strings
    str = str
        .replace(/\[?(STR|DEX|QCK|PSY|INT)\]?/g, '<span class="$1-badge badge">$1</span>')
        .replace(/\[(RCV|TND|BLOCK|BOMB|RAINBOW|G|EMPTY)\]/g, '<span class="$1-div badge">$1</span>');

    // Decorate Class strings
    str = str.replace(/(Fighter|Slasher|Striker|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/g, function(match) {
        var matchClass = match.replace(' ', '-').toLowerCase();
        return '<span class="badge"><div class="' + matchClass  + '-div class-decorate"></div>' + match + '</span>';
    });

    return str;
}

function decorateSpIcon(iconKey, isAction) {
    if (iconKey === 'Clear Buff' || iconKey === 'Blow Away')
        return iconKey;

    if (isAction)
        iconKey = '<div class="guide-action-icon ' + iconKey + '-div"></div>';
    else
        iconKey = iconKey + '-div';

    return iconKey;
}

function createActionCounterBtn(guideActionClone, counter) {
    var guideFilterClone = $('#guide-filter-clone').clone();
    guideFilterClone.attr('id', '');

    guideFilterClone.find('.guide-sp-filter').addClass(decorateSpIcon(counter, false));
    guideFilterClone.find('.guide-sp-filter').data('filter', counter);

    guideActionClone.find('.guide-sp-filter-list').append(guideFilterClone);
}

function populateUnitDetail(unitId) {
    var unitDetail = details[unitId];

    if (unitDetail) {
        $('#db-button').data('id', unitId);
        $('.unit-detail-el').show();

        // Thumb
        $('#unit-detail-thumb').empty();

        var imgHtml = createImgHtml(getThumb(unitId), 40, false);
        $('#unit-detail-thumb').append(imgHtml);

        // Type
        $('#unit-modal-title').html(units[unitId - 1][0]);
        $('#unit-modal-title').removeClass('STR DEX QCK PSY INT');
        $('#unit-modal-title').addClass(units[unitId - 1][1]);

        // Class
        $('#unit-detail-class1, #unit-detail-class2').removeClass(
            'fighter-div slasher-div striker-div shooter-div free-spirit-div cerebral-div powerhouse-div driven-div'
        );

        var unitClass = units[unitId - 1][2];
        if (Array.isArray(unitClass)) {
            var class1;
            var class2;

            if (unitClass[2]) {
                // Dual Units
                var dualClass = unitClass[2];
                class1 = dualClass[0].replace(' ', '-').toLowerCase();
                class2 = dualClass[1].replace(' ', '-').toLowerCase();
            } else {
                class1 = unitClass[0].replace(' ', '-').toLowerCase();
                class2 = unitClass[1].replace(' ', '-').toLowerCase();
            }

            $('#unit-detail-class1').addClass(class1 + '-div');
            $('#unit-detail-class2').addClass(class2 + '-div');
        } else {
            var class1 = unitClass.replace(' ', '-').toLowerCase();
            $('#unit-detail-class1').addClass(class1 + '-div');
        }

        // Captain Ability
        var captain = unitDetail.captain;
        if (captain) {
            if (typeof captain === 'object') {
                if (captain.combined) {
                    // Dual Units
                    $('#unit-detail-captain-ability').empty();

                    var captain1 = captain.character1;
                    captain1 = decorateStr(captain1);
                    $('#unit-detail-captain-ability').append('<b>Character 1:</b> ' + captain1);
                    $('#unit-detail-captain-ability').append('<br />');

                    var captain2 = captain.character2;
                    captain2 = decorateStr(captain2);
                    $('#unit-detail-captain-ability').append('<b>Character 2:</b> ' + captain2);
                    $('#unit-detail-captain-ability').append('<br />');

                    var captainComb = captain.combined;
                    captainComb = decorateStr(captainComb);
                    $('#unit-detail-captain-ability').append('<b>Combined:</b> ' + captainComb);
                } else {
                    // Unit Captain Ability changed by Limit Break
                    var captainLb = captain['level' + (Object.keys(captain).length - 1)];
                    captainLb = decorateStr(captainLb);
                    $('#unit-detail-captain-ability').html('<b>Max LB:</b> ' + captainLb);
                }
            } else {
                captain = decorateStr(captain);
                $('#unit-detail-captain-ability').html(captain);
            }
        } else
            $('#unit-detail-captain-ability').html('None');

        // Swap Effect
        if (captain && captain.combined) {
            var swapEffect = unitDetail.swap;
            swapEffect = decorateStr(swapEffect);
            $('#unit-detail-swap').html(swapEffect);
        } else
            $('.unit-detail-swap-el').hide();

        // Special
        var special = unitDetail.special;
        if (special) {
            $('#unit-detail-special').empty();

            // Parse CD
            var baseCd = cooldowns[unitId - 1][1];
            var lbStats = parseLbStats(unitId);

            $('#unit-detail-sp-cd').html('[Base|LB] <span class="unit-detail-sp-cd-num">' + (baseCd - lbStats.cd) + '</span>');

            if (lbStats.cdEx !== 0)
                $('#unit-detail-sp-cd-ex').html('→ [LB+] <span class="unit-detail-sp-cd-num">' + (baseCd - lbStats.cd - lbStats.cdEx)) + '</span>';
            else
                $('#unit-detail-sp-cd-ex').empty();

            if (Array.isArray(special)) {
                var specialMax = special[special.length - 1].description;
                specialMax = decorateStr(specialMax);
                $('#unit-detail-special').html(specialMax);
            } else if (special.character1) {
                // Dual Units with different special
                var special1 = special.character1;
                special1 = decorateStr(special1);
                $('#unit-detail-special').append('<b>Character 1:</b> ' + special1);
                $('#unit-detail-special').append('<br />');

                var special2 = special.character2;
                special2 = decorateStr(special2);
                $('#unit-detail-special').append('<b>Character 2:</b> ' + special2);
                $('#unit-detail-special').append('<br />');
            } else {
                special = decorateStr(special);
                $('#unit-detail-special').html(special);
            }
        } else
            $('#unit-detail-special').html('None');

        // Sailor
        var sailor = unitDetail.sailor;
        if (sailor) {
            if (typeof sailor === 'object') {
                // Unit Sailor added by Limit Break
                $('#unit-detail-sailor').empty();

                if (sailor.combined) {
                    // Dual Units
                    var sailor1 = sailor.character1;
                    sailor1 = decorateStr(sailor1);
                    $('#unit-detail-sailor').append('<b>Character 1:</b> ' + sailor1);
                    $('#unit-detail-sailor').append('<br />');

                    var sailor2 = sailor.character2;
                    sailor2 = decorateStr(sailor2);
                    $('#unit-detail-sailor').append('<b>Character 2:</b> ' + sailor2);
                    $('#unit-detail-sailor').append('<br />');

                    var sailorComb = sailor.combined;
                    sailorComb = decorateStr(sailorComb);
                    $('#unit-detail-sailor').append('<b>Combined:</b> ' + sailorComb);
                    $('#unit-detail-sailor').append('<br />');
                }

                if (sailor.base) {
                    var sailorBase = sailor.base;
                    sailorBase = decorateStr(sailorBase);
                    $('#unit-detail-sailor').append('<b>Base:</b> ' + sailorBase);
                    $('#unit-detail-sailor').append('<br />');
                }

                var i = 1;
                while (sailor['level' + i]) {
                    var s = sailor['level' + i];
                    s = decorateStr(s);
                    $('#unit-detail-sailor').append('<b>LB Sailor ' + i + ':</b> ' + s);
                    $('#unit-detail-sailor').append('<br />')
                    i++;
                }
            } else {
                sailor = decorateStr(sailor);
                $('#unit-detail-sailor').html(sailor);
            }
        } else
            $('#unit-detail-sailor').html('None');
    }
}

function populateUnitModal(src, selectedId, assigned) {
    // Reset
    $('.remove-button-el').hide();
    $('.available-units-el').hide();
    $('#available-units').empty();
    $('.units-in-team-el').hide();
    $('#units-in-team').empty();
    $('.units-assigned-el').hide();
    $('#units-assigned').empty();
    $('.unit-detail-el').hide();
    $('#unit-modal-title').empty();

    if (selectedId !== 0) {
        if (assigned) {
            $('#remove-button').data('id', selectedId);
            $('.remove-button-el').show();
        }

        populateUnitDetail(parseInt(selectedId));
    }

    if (src) {
        var boosterList = $('.booster').not('.assigned, .assigned-dh, .type-filtered, .class-filtered');

        // Available units
        boosterList.each(function() {
            var b = $(this);
            var unitId = b.data('id');

            var imgDiv = $('<div></div>');
            imgDiv.append(createImgHtml(getThumb(unitId), 40, false));
            imgDiv.data('id', unitId);
            imgDiv.data('src', src);

            // Name in tooltip
            createTooltip(imgDiv, units[unitId - 1][0]);

            imgDiv.addClass('select-modal-unit');
            imgDiv.css('display', 'inline-block');

            $('#available-units').append(imgDiv);
        });

        $('.available-units-el').show();

        // Units in this team
        if ($('#' + src).hasClass('friend-cap')) {
            $('#' + src).closest('.team').find('.team-slot').not('.friend-cap').find('.booster').each(function() {
                var b = $(this);
                var unitId = b.data('id');

                var imgDiv = $('<div></div>');
                imgDiv.append(createImgHtml(getThumb(unitId), 40, false));
                imgDiv.data('id', unitId);
                imgDiv.data('src', src);

                // Name in tooltip
                createTooltip(imgDiv, units[unitId - 1][0]);

                imgDiv.addClass('select-modal-unit');
                imgDiv.addClass('is-clone');
                imgDiv.css('display', 'inline-block');

                $('#units-in-team').append(imgDiv);
            });

            $('.units-in-team-el').show();
        }

        // Show assigned units if picking for Ambush Team
        if ($('#' + src).length > 0 && $('#' + src).closest('.team').attr('id') == 'ambush-team') {
            var assignedList = $('.booster.assigned');

            assignedList.each(function() {
                var ab = $(this);
                var unitId = ab.data('id');

                var imgDiv = $('<div></div>');
                imgDiv.append(createImgHtml(getThumb(unitId), 40, false));
                imgDiv.data('id', unitId);
                imgDiv.data('src', src);

                // Name in tooltip
                createTooltip(imgDiv, units[unitId - 1][0]);

                imgDiv.addClass('select-modal-unit');
                imgDiv.css('display', 'inline-block');

                $('#units-assigned').append(imgDiv);
            });

            $('.units-assigned-el').show();
        }
    }
}

function createCloneInSlot(orig, slot, isAmbush, isAmbushClone) {
    // Replace existing units and put the previous unit back
    if (slot.find('.booster').length > 0)
        resetPosition(slot.find('.booster').detach());

    if (slot.find('.booster-clone').length > 0)
        slot.find('.booster-clone').remove();

    var clone = orig.clone();
    var origId = orig.data('id');

    var cloneType;
    if (isAmbush) {
        if (isAmbushClone) {
            cloneType = 'ambush_clone';
            clone.addClass('booster-ambush-fc');
        } else
            cloneType = 'ambush';
    }
    else
        cloneType = 'clone';

    clone.attr('id', 'booster-clone_' + origId + '_' + cloneType);
    clone.data('id', orig.data('id'));
    clone.data('x_pts', orig.data('x_pts'));
    clone.data('type', orig.data('type'));
    clone.data('class1', orig.data('class1'));
    clone.data('class2', orig.data('class2'));
    clone.removeClass('booster');
    clone.addClass('booster-clone');

    clone.css({
        top: 0,
        left: 0
    }).prependTo(slot);
}

function mirrorToFriendCap(teamDiv, cap, autoFill, isAmbush) {
    var friendCapSlot = teamDiv.find('.friend-cap');
    var validFill = false;

    if (autoFill) {
        if (friendCapSlot.find('.booster').length == 0 &&
            friendCapSlot.find('.booster-clone').length == 0) {
            validFill = true;
        }
    } else
        validFill = true;

    if (validFill) {
        if (isAmbush)
            createCloneInSlot(cap, friendCapSlot, true, true);
        else
            createCloneInSlot(cap, friendCapSlot, false);
    }
}

function getTeamUnits(team) {
    var teamUnits = [0, 0, 0, 0, 0, 0];

    team.find('.team-slot, .ambush-team-slot').each(function() {
        var slot_num = $(this).data('slot');

        if ($(this).find('.booster').length !== 0)
            teamUnits[slot_num] = $(this).find('.booster').data('id');
        else if ($(this).find('.booster-clone').length !== 0)
            teamUnits[slot_num] = Number($(this).find('.booster-clone').data('id')) * -1;
    });

    return teamUnits;
}

function updatePts(btn) {
    var teamDiv = btn.closest('.team');
    var x_pts = 1;

    teamDiv.find('.booster').each(function() {
        var slot_x_pts = Number($(this).data('x_pts'));
        x_pts = x_pts * slot_x_pts;
    });

    // Check for Clones (Friend Captain or Ambush Team)
    teamDiv.find('.booster-clone').each(function() {
        var slot_x_pts = Number($(this).data('x_pts'));
        x_pts = x_pts * slot_x_pts;
    });

    btn.closest('.team').find('.x_pts').html(x_pts.toFixed(2));
}

function updateAllPts() {
    $('.pts-button').each(function() {
        updatePts($(this));
    });
}

function doSave(tmId, server) {
    var teams = {};

    if ((tmId > 1889 && server == 'glb') || (tmId > 2064 && server == 'jpn')) {
        $('.team:visible').each(function() {
            var opId = $(this).data('op_id');
            var team = getTeamUnits($(this));

            teams[opId] = team;
        });
    } else {
        $('.team:visible').each(function() {
            var team_num = $(this).data('team');
            var team = getTeamUnits($(this));

            teams[team_num] = team;
        });
    }

    var serverStr = server === 'glb' ? '' : '_jpn';
    localStorage.setItem('teams_' + tmId + serverStr, JSON.stringify(teams));

    var dontHaves = [];

    $('.booster.assigned-dh').each(function() {
        dontHaves.push($(this).data('id'));
    });

    localStorage.setItem('dontHaves_' + tmId + serverStr, JSON.stringify(dontHaves));

    // Update last save time
    var now = moment().format('lll');
    $('#last-save').html(now);

    localStorage.setItem('lastSave_' + tmId + serverStr, now);
}

function applyClassFilter(classFilters, excludeOtherClasses, excludeSingleClass) {
    if (classFilters.length == 0) {
        // Clear filters if no Class Filters are currently selected
        $('.class-filtered').removeClass('class-filtered');
    } else {
        $('.booster, .booster-clone').each(function() {
            var unitClass1 = $(this).data('class1');
            var unitClass2 = $(this).data('class2');

            if (excludeOtherClasses) {
                if (classFilters.indexOf(unitClass1) === -1 ||
                        (unitClass2 && classFilters.indexOf(unitClass2) === -1))
                    $(this).addClass('class-filtered');
                else
                    $(this).removeClass('class-filtered');
            } else {
                if (classFilters.indexOf(unitClass1) !== -1 ||
                        (unitClass2 && classFilters.indexOf(unitClass2) !== -1))
                    $(this).removeClass('class-filtered');
                else
                    $(this).addClass('class-filtered');
            }

            if (excludeSingleClass && !unitClass2 && classFilters.length > 1)
                $(this).addClass('class-filtered');
        });
    }
}

$(document).ready(function() {
    // Retrieve Settings
    var server = 'glb';
    if (localStorage.getItem('server') !== null) {
        server = localStorage.getItem('server');
        $('#server-' + server).prop('checked', true);

        $('.tm-option').hide();
        $('.' + server + '-tm').show();
    }

    var dontHaveMode = 0;
    if (localStorage.getItem('dontHaveMode') !== null) {
        dontHaveMode = localStorage.getItem('dontHaveMode');
        $('#dont-have-mode').val(dontHaveMode);
        if (dontHaveMode == 1) {
            $('#dont-have-div').css('visibility', 'hidden');
            $('#dont-have-div').css('height', '0');
        }
    }

    var confirmSave = false;
    if (localStorage.getItem('confirmSave') !== null) {
        if (localStorage.getItem('confirmSave') == 'true') {
            confirmSave = true;
            $('#confirm-save-checkbox').prop('checked', true);
        }
    }

    var tmId = 0;

    if (getUrlParameter('transfer')) {
        // Check Transfer link
        tmId = getUrlParameter('tmId');
        var serverTmp = getUrlParameter('server');

        if ((serverTmp == 'glb' || serverTmp == 'jpn') && init(tmId, serverTmp)) {
            if ((tmId > 1889 && server == 'glb') || (tmId > 2064 && server == 'jpn')) {
                var opponents = tm_opponents[tmId];

                for (var opId in opponents) {
                    var teamStr = getUrlParameter('op' + opId);

                    if (teamStr) {
                        var team = teamStr.split(',');

                        var op = opponents[opId];
                        var opPos = op.pos;

                        var opPosDiv = $('#op-' + (opPos + 1));
                        var opPosTeam = opPosDiv.closest('.team');
                        var teamNum = opPosTeam.data('team');

                        if (opPos != 5) {
                            // Regular Teams
                            for (var i = 0; i < team.length; i++) {
                                var unitId = team[i];

                                if (unitId !== 0) {
                                    // Check whether unit is clone and restore unit ID
                                    var isClone = false;
                                    if (unitId < 0) {
                                        isClone = true;
                                        unitId = parseInt(unitId) * -1;
                                    }

                                    var b = $('#booster_' + unitId);
                                    var teamSlot = $('#team-slot-' + teamNum + i);

                                    if (isClone) {
                                        createCloneInSlot(b, teamSlot, false);
                                    } else {
                                        b.addClass('assigned');
                                        b.detach().css({
                                            top: 0,
                                            left: 0
                                        }).prependTo(teamSlot);
                                    }

                                    // Mirror to Friend Cap slot if it is empty
                                    if (i == 1)
                                        mirrorToFriendCap(teamSlot.closest('.team'), b, true);
                                }
                            }
                        } else {
                            // Ambush Team
                            for (var i = 0; i < team.length; i++) {
                                var unitId = team[i];

                                if (unitId !== 0) {
                                    // Restore unit ID
                                    if (unitId < 0)
                                        unitId = parseInt(unitId) * -1;

                                    var b = $('#booster_' + unitId);
                                    var teamSlot = $('#team-slot-' + teamNum + i);

                                    createCloneInSlot(b, teamSlot, true);
                                }
                            }
                        }
                    }
                }
            } else {
                var team0 = getUrlParameter('team0');
                var team1 = getUrlParameter('team1');
                var team2 = getUrlParameter('team2');
                var team3 = getUrlParameter('team3');
                var team4 = getUrlParameter('team4');
                var teams = [team0, team1, team2, team3, team4];

                $.each(teams, function(index, teamStr) {
                    var team = teamStr.split(',');

                    for (var i = 0; i < team.length; i++) {
                        var unitId = team[i];

                        if (unitId !== 0) {
                            // Check whether unit is clone and restore unit ID
                            var isClone = false;
                            if (i == 0 && unitId < 0) {
                                isClone = true;
                                unitId = parseInt(unitId) * -1;
                            }

                            var b = $('#booster_' + unitId);
                            var teamSlot = $('#team-slot-' + index + i);

                            b.addClass('assigned');
                            b.detach().css({
                                top: 0,
                                left: 0
                            }).prependTo(teamSlot);

                            // If Friend Cap slot is a clone
                            if (isClone)
                                mirrorToFriendCap(teamSlot.closest('.team'), b, false);

                            // Mirror to Friend Cap slot if it is empty
                            if (i == 1)
                                mirrorToFriendCap(teamSlot.closest('.team'), b, true);
                        }
                    }
                });
            }

            var dontHaveStr = getUrlParameter('dont-have');

            if (dontHaveStr) {
                var dontHaves = dontHaveStr.split(',');

                for (var i = 0; i < dontHaves.length; i++) {
                    var unitId = dontHaves[i];

                    if (unitId !== 0) {
                        var b = $('#booster_' + unitId);

                        b.addClass('assigned-dh');
                        if (dontHaveMode == 0) {
                            b.detach().css({
                                top: 0,
                                left: 0
                            }).insertBefore($('#add-button'));
                        }
                    }
                }
            }

            updateAllPts();

            // Disable controls
            $('#read-only-button-div').css('display', 'flex');
            $('.not-read-only').prop('disabled', true);
        } else {
            alert('Invalid transfer link');
        }

        // Reset browser url
        history.replaceState('', '', '/tm-planner/');
    } else {
        // Retrieve TM ID
        tmId = getUrlParameter('tmId');

        if (!tmId || !init(tmId, server)) {
            var newestTm = $('#newest-tm-' + server).val();
            var parsedTmId = parseInt(newestTm);

            init(parsedTmId, server);
            tmId = parsedTmId;
        }
    }

    // Set user Server
    $('.server-radio').click(function() {
        localStorage.setItem('server', $(this).val());

        // Refresh page
        location.reload();
    });

    // Set user Server
    $('#dont-have-mode').change(function() {
        localStorage.setItem('dontHaveMode', $(this).val());

        // Refresh page
        location.reload();
    });

    // Set confirm save
    $('#confirm-save-checkbox').click(function() {
        if ($(this).prop('checked')) {
            confirmSave = true;
            localStorage.setItem('confirmSave', true);
        } else {
            confirmSave = false;
            localStorage.setItem('confirmSave', false);
        }
    });

    $(document).on('click', '.booster:not(.assigned)', function() {
        var selectedId = $(this).data('id');
        var inDontHave = false;
        var src = null;

        if ($(this).hasClass('assigned-dh'))
            inDontHave = true;

        populateUnitModal(src, selectedId, inDontHave);
        $('#unit-modal').modal();

        // Hide tooltip on click
        $(this).tooltip('hide');
    });

    $(document).on('contextmenu', '.booster:not(.assigned)', function(event) {
        event.preventDefault();
        if (dontHaveMode == 0) {
            if ($(this).hasClass('assigned-dh'))
                resetPosition($(this));
            else {
                $(this).addClass('assigned-dh').detach().css({
                    top: 0,
                    left: 0
                }).insertBefore($('#add-button'));
            }
        } else
            $(this).toggleClass('assigned-dh');
    });

    $('.stroke-double, .stroke-single').attr('title', function(){
        return $(this).html();
    });

    // Click to add / remove
    $('.team-slot, .ambush-team-slot').click(function() {
        var selectedId = 0;
        var assigned = false;
        var src = $(this).attr('id');

        if ($(this).find('.booster').length > 0) {
            selectedId = $(this).find('.booster').data('id');
            assigned = true;

            // Hide tooltip on click
            $(this).find('.booster').tooltip('hide');
        } else if ($(this).find('.booster-clone').length > 0) {
            selectedId = $(this).find('.booster-clone').data('id') + '_clone';
            assigned = true;

            // Hide tooltip on click
            $(this).find('.booster-clone').tooltip('hide');
        }

        populateUnitModal(src, selectedId, assigned);
        $('#unit-modal').modal();
    });

    $('#add-button').click(function() {
        populateUnitModal('dont-have', 0, false);
        $('#unit-modal').modal();
    });

    $(document).on('click', '.select-modal-unit', function() {
        var unitId = $(this).data('id');
        var src = $(this).data('src');
        var b = $('#booster_' + unitId);

        var srcDiv = $('#' + src);

        if ($(this).hasClass('is-clone')) {
            mirrorToFriendCap(srcDiv.closest('.team'), b, false);
        } else {
            if (src == 'dont-have') {
                b.data('team', -1);
                b.addClass('assigned-dh');

                b.detach().css({
                    top: 0,
                    left: 0
                }).insertBefore('#add-button');
            } else {
                b.data('team', $(this).closest('.team').data('team'));
                b.addClass('assigned');

                if (srcDiv.closest('.team').attr('id') != 'ambush-team') {
                    if (srcDiv.find('.booster').length > 0)
                        resetPosition(srcDiv.find('.booster').detach());

                    b.detach().css({
                        top: 0,
                        left: 0
                    }).prependTo(srcDiv);
                } else
                    createCloneInSlot(b, srcDiv);
            }

            // Mirror to Friend Cap slot if it is empty
            if (srcDiv.data('slot') == 1)
                mirrorToFriendCap(srcDiv.closest('.team'), b, true);
        }

        $('#unit-modal').modal('hide');

        // Hide tooltip on click
        $(this).tooltip('hide');
    });

    $('#remove-button').click(function() {
        var deleteId = $(this).data('id');

        if (deleteId.toString().indexOf('_clone') == -1 && deleteId !== 0)
            resetPosition($('#booster_' + deleteId).detach());
        else if (deleteId.toString().indexOf('_clone') != -1)
            $('#booster-clone_' + deleteId).remove();

        $('#unit-modal').modal('hide');
    });

    // OPTC-DB page
    $('#db-button').click(function() {
        var unitId = $(this).data('id');

        if (unitId) {
            var dbUrl = 'https://optc-db.github.io/characters/#/view/';
            dbUrl += unitId;

            window.open(dbUrl);
        }
    });

    // Mini guide
    $(document).on('click', '.op-name', function() {
        var opId = $(this).closest('.team').data('op_id');
        var op = tm_opponents[tmId][opId];

        if (op) {
            // Reset
            $('#guide-nav-lv').val(1);
            $('#mini-guide-content').empty();
            $('#mini-guide-boss').removeClass();

            // Populate main boss
            $('#mini-guide-boss').text(op.name);
            $('#mini-guide-boss').addClass(op.type);

            if (op.guide) {
                for (var gi in op.guide) {
                    var g = op.guide[gi];

                    var guideStageClone = $('#guide-stage-clone').clone();
                    var guideStageId = 'guide-stage-' + g.stageNum;
                    guideStageClone.attr('id', guideStageId);

                    guideStageClone.find('.guide-stage-num').text(g.stageNum);

                    if (g.boss) {
                        guideStageClone.find('.guide-boss').text(g.boss[0]);
                        guideStageClone.find('.guide-boss').addClass(g.boss[1]);
                        guideStageClone.find('.guide-boss-hp').text(g.hp);
                        guideStageClone.find('.guide-boss-hp-base').val(g.hp);
                        guideStageClone.find('.guide-boss-atk').text(g.atk);
                        guideStageClone.find('.guide-boss-atk-base').val(g.atk);
                    } else {
                        guideStageClone.find('.guide-boss').hide();
                        guideStageClone.find('.guide-boss-hp-div').hide();
                        guideStageClone.find('.guide-boss-atk-div').hide();
                    }

                    for (var di in g.detail) {
                        var d = g.detail[di];

                        var guideStageTypeClone = $('#guide-stage-type-clone').clone();
                        var guideStageTypeId = 'guide-stage-type-' + d.type.replace(' ', '-').toLowerCase();
                        guideStageTypeClone.attr('id', guideStageTypeId);

                        guideStageTypeClone.find('.guide-stage-type').text(d.type);

                        var i = 0;
                        for (var ai in d.action) {
                            var a = d.action[ai];

                            if (d.type === 'Interrupt') {
                                var guideActionClone = $('#guide-interrupt-clone').clone();
                                var guideActionId = guideStageTypeId + '-i' + i;
                                guideActionClone.attr('id', guideActionId);

                                guideActionClone.find('.guide-action-type').html(decorateSpIcon(a, true));
                            } else {
                                var guideActionClone = $('#guide-action-clone').clone();
                                var guideActionId = guideStageTypeId + '-a' + i;
                                guideActionClone.attr('id', guideActionId);

                                guideActionClone.find('.guide-action-type').html(decorateSpIcon(a[0], true));
                                guideActionClone.find('.guide-action-detail').text(a[1]);

                                var aCounter = counters[a[0]];
                                if (aCounter) {
                                    if (Array.isArray(aCounter)) {
                                        for (var ac in aCounter)
                                            createActionCounterBtn(guideActionClone, aCounter[ac]);
                                    } else
                                        createActionCounterBtn(guideActionClone, aCounter);
                                }
                            }

                            guideStageTypeClone.find('.guide-action-list').append(guideActionClone);
                            i++;
                        }

                        guideStageClone.find('.guide-stage-list').append(guideStageTypeClone);
                    }

                    $('#mini-guide-content').append(guideStageClone);
                }
            } else {
                $('#mini-guide-content').append('No guide available.');
            }

            $('#mini-guide-modal').modal();
        }
    });

    // Activate Counter Special Filter after clicking from Mini Guide
    $(document).on('click', '.guide-sp-filter', function() {
        $('#mini-guide-modal').modal('hide');

        // Clear all Special Filters
        $('.sp-filter').removeClass('selected');
        $('.booster, .booster-clone').removeClass(function(i, cName) {
            return (cName.match(/(^|\s)sp-filtered-\S+/g) || []).join(' ');
        });

        // Activate actual Filter
        var filter = $(this).data('filter');
        $('.sp-filter[data-filter=' + filter  + ']').click();
    });

    // Change Boss HP and ATK based on Nav Lv
    $('#guide-nav-lv').change(function() {
        var navLv = parseInt($(this).val());

        $('.guide-boss-hp').each(function() {
            var baseBossHp = parseInt($(this).closest('.guide-boss-hp-div').find('.guide-boss-hp-base').val());
            var cBossHp = baseBossHp + (baseBossHp * (navLv - 1) * 0.1);
            $(this).text(cBossHp);
        });

        $('.guide-boss-atk').each(function() {
            var baseBossAtk = parseInt($(this).closest('.guide-boss-atk-div').find('.guide-boss-atk-base').val());
            var cBossAtk = baseBossAtk + (baseBossAtk * (navLv - 1) * 0.05);
            $(this).text(cBossAtk);
        });
    });

    // Point calculation button
    $('.pts-button').click(function() {
        updatePts($(this));
    });

    $('#pts-all-button').click(function() {
        updateAllPts();
    });

    // DB Calculator button
    $('.cal-button').click(function() {
        var teamDiv = $(this).closest('.team');
        var team = getTeamUnits(teamDiv);

        var calUrl = 'http://optc-db.github.io/damage/#/transfer/D';

        for (var i = 0; i < team.length; i++) {
            if (team[i] == 0)
                calUrl += '!';
            else {
                var unitId = team[i];

                if (unitId < 0)
                    unitId = Number(unitId) * -1;

                var maxLv = $('#booster_' + unitId).data('max_lv');
                calUrl += unitId + ':' + maxLv;
            }

            if (i != team.length - 1)
                calUrl += ',';
        }

        calUrl += 'C33,10B0D';

        // Append TM Map effect
        if (server === 'glb')
            calUrl += '43';
        else
            calUrl += '44';

        calUrl += 'E0Q0L0G0R0S100H';

        window.open(calUrl);
    });

    // Save teams
    $('#save-button').click(function() {
        var serverStr = server === 'glb' ? '' : '_jpn';
        var lastSave = localStorage.getItem('lastSave_' + tmId + serverStr);

        if (confirmSave && lastSave !== null)
            $('#confirm-save-modal').modal();
        else
            doSave(tmId, server);
    });

    // Save teams from confirm save dialog
    $('#confirm-save-button').click(function() {
        doSave(tmId, server);
    });

    // Load teams
    $('#load-button').click(function() {
        var serverStr = server === 'glb' ? '' : '_jpn';

        var lastSave = localStorage.getItem('lastSave_' + tmId + serverStr);

        if (lastSave !== null) {
            resetAll();

            var teams = JSON.parse(localStorage.getItem('teams_' + tmId + serverStr));

            if ((tmId > 1889 && server == 'glb') || (tmId > 2064 && server == 'jpn')) {
                var opponents = tm_opponents[tmId];

                for (var opId in teams) {
                    var team = teams[opId];
                    var op = opponents[opId];

                    if (team && op) {
                        var opPos = op.pos;

                        var opPosDiv = $('#op-' + (opPos + 1));
                        var opPosTeam = opPosDiv.closest('.team');
                        var teamNum = opPosTeam.data('team');

                        if (opPos != 5) {
                            // Regular Teams
                            for (var i = 0; i < team.length; i++) {
                                var unitId = team[i];

                                if (unitId !== 0) {
                                    // Check whether unit is clone and restore unit ID
                                    var isClone = false;
                                    if (unitId < 0) {
                                        isClone = true;
                                        unitId = parseInt(unitId) * -1;
                                    }

                                    var b = $('#booster_' + unitId);
                                    var teamSlot = $('#team-slot-' + teamNum + i);

                                    if (isClone) {
                                        createCloneInSlot(b, teamSlot, false);
                                    } else {
                                        b.addClass('assigned');
                                        b.detach().css({
                                            top: 0,
                                            left: 0
                                        }).prependTo(teamSlot);
                                    }

                                    // Mirror to Friend Cap slot if it is empty
                                    if (i == 1)
                                        mirrorToFriendCap(teamSlot.closest('.team'), b, true);
                                }
                            }
                        } else {
                            // Ambush Team
                            for (var i = 0; i < team.length; i++) {
                                var unitId = team[i];

                                if (unitId !== 0) {
                                    // Restore unit ID
                                    if (unitId < 0)
                                        unitId = parseInt(unitId) * -1;

                                    var b = $('#booster_' + unitId);
                                    var teamSlot = $('#team-slot-' + teamNum + i);

                                    createCloneInSlot(b, teamSlot, true);
                                }
                            }
                        }
                    }
                }
            } else {
                $.each(teams, function(index, team) {
                    for (var i = 0; i < team.length; i++) {
                        var unitId = team[i];

                        if (unitId !== 0) {
                            // Check whether unit is clone and restore unit ID
                            var isClone = false;
                            if (i == 0 && unitId < 0) {
                                isClone = true;
                                unitId = parseInt(unitId) * -1;
                            }

                            var b = $('#booster_' + unitId);
                            var teamSlot = $('#team-slot-' + index + i);

                            b.addClass('assigned');
                            b.detach().css({
                                top: 0,
                                left: 0
                            }).prependTo(teamSlot);

                            // If Friend Cap slot is a clone
                            if (isClone)
                                mirrorToFriendCap(teamSlot.closest('.team'), b, false);

                            // Mirror to Friend Cap slot if it is empty
                            if (i == 1)
                                mirrorToFriendCap(teamSlot.closest('.team'), b, true);
                        }
                    }
                });
            }

            var dontHaveMode = localStorage.getItem('dontHaveMode');
            var dontHaves = JSON.parse(localStorage.getItem('dontHaves_' + tmId + serverStr));

            for (var i = 0; i < dontHaves.length; i++) {
                var unitId = dontHaves[i];

                if (unitId !== 0) {
                    var b = $('#booster_' + unitId);

                    b.addClass('assigned-dh');
                    if (dontHaveMode == null || dontHaveMode == 0) {
                        b.detach().css({
                            top: 0,
                            left: 0
                        }).insertBefore($('#add-button'));
                    }
                }
            }

            updateAllPts();
        }
    });

    // Reset teams
    $('#reset-button').click(function() {
        resetAll();
    });

    // Export url
    $('#export-url-button').click(function() {
        var url = 'https://' + window.location.hostname + window.location.pathname;
        url += '?transfer=true';
        url += '&tmId=' + tmId;
        url += '&server=' + server;

        if ((tmId > 1889 && server == 'glb') || (tmId > 2064 && server == 'jpn')) {
            $('.team:visible').each(function() {
                var opId = $(this).data('op_id');
                var team = getTeamUnits($(this));

                url += '&op' + opId + '=' + team.join();
            });
        } else {
            $('.team:visible').each(function() {
                var team_num = $(this).data('team');
                var team = getTeamUnits($(this));

                url += '&team' + team_num + '=' + team.join();
            });
        }

        var dontHaves = [];

        $('#dont-have').find('.booster').each(function() {
            dontHaves.push($(this).data('id'));
        });

        if (dontHaves.length > 0)
            url += '&dont-have=' + dontHaves.join();

        $('#export-url-link').val(url);
        $('#export-url-div').show();
    });

    // Copy export url
    $('#copy-url-button').click(function() {
        $('#export-url-link').select();
        document.execCommand('copy');
    });

    // Disable Read-only Mode
    $('#read-only-button').click(function() {
        $('#read-only-button-div').hide();
        $('.not-read-only').prop('disabled', false);
    });

    // Type filter
    var typeFilters = [];
    $('.type-filter').click(function() {
        var filter = $(this).data('filter');

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            typeFilters.splice(typeFilters.indexOf(filter), 1);
        } else {
            $(this).addClass('selected');
            typeFilters.push(filter);
        }

        if (typeFilters.length == 0) {
            // Clear filters if no Type Filters are currently selected
            $('.type-filtered').removeClass('type-filtered');
        } else {
            $('.booster, .booster-clone').each(function() {
                var unitType = $(this).data('type');

                if (Array.isArray(unitType)) {
                    if (typeFilters.indexOf(unitType[0]) !== -1 ||
                            typeFilters.indexOf(unitType[1]) !== -1)
                        $(this).removeClass('type-filtered');
                    else
                        $(this).addClass('type-filtered');
                } else {
                    if (typeFilters.indexOf(unitType) !== -1)
                        $(this).removeClass('type-filtered');
                    else
                        $(this).addClass('type-filtered');
                }
            });
        }
    });

    // Class filter
    var classFilters = [];
    var excludeOtherClasses = false;

    // Exclude other Classes
    $('#exclude-other-checkbox').click(function() {
        if ($('#preset-filters').val() != -1) {
            $('#preset-filters').val(-1);
            classFilters = [];
        }

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            excludeOtherClasses = false;
        } else {
            $(this).addClass('selected');
            excludeOtherClasses = true;
        }

        applyClassFilter(classFilters, excludeOtherClasses, false);
    });

    // Preset filters
    $('#preset-filters').change(function() {
        if ($(this).val() == -1) {
            $('#exclude-other-checkbox').removeClass('selected');
            excludeOtherClasses = false;
        } else {
            $('#exclude-other-checkbox').addClass('selected');
            excludeOtherClasses = true;
        }

        classFilters = [];
        $('.class-filter').removeClass('selected');

        if ($(this).val() == 2113) // Katakuri
            classFilters.push('Fighter', 'Striker', 'Shooter', 'Cerebral', 'Powerhouse');
        else if ($(this).val() == 2739) // Katakuri 6+
            classFilters.push('Slasher', 'Striker', 'Driven', 'Cerebral', 'Powerhouse');
        else if ($(this).val() == 2365) // Katakuri v2
            classFilters.push('Fighter', 'Slasher', 'Shooter', 'Driven', 'Powerhouse');
        else if ($(this).val() == 2338) // Carrot
            classFilters.push('Fighter', 'Slasher', 'Striker', 'Shooter', 'Cerebral');
        else if ($(this).val() == 2336) // TM Law
            classFilters.push('Fighter', 'Slasher', 'Cerebral', 'Free Spirit',);

        applyClassFilter(classFilters, excludeOtherClasses, true);
    });

    $('.class-filter').click(function() {
        if ($('#preset-filters').val() != -1) {
            $('#preset-filters').val(-1);
            $('#exclude-other-checkbox').prop('checked', false);
            excludeOtherClasses = false;
            classFilters = [];
        }

        var filter = $(this).data('filter');

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            classFilters.splice(classFilters.indexOf(filter), 1);
        } else {
            $(this).addClass('selected');
            classFilters.push(filter);
        }

        applyClassFilter(classFilters, excludeOtherClasses, false);
    });

    // Special Filter
    $('.sp-filter').click(function() {
        var filter = $(this).data('filter');
        var filterClass = 'sp-filtered-' + filter;
        var filterRegex = filter_map[filter];

        if ($(this).hasClass('selected')) {
            // Clear filters of units filtered by this special
            $(this).removeClass('selected');
            $('.' + filterClass).removeClass(filterClass);
        } else {
            $(this).addClass('selected');

            $('.booster, .booster-clone').each(function() {
                var unitId = $(this).data('id');
                var unitDetail = details[unitId];
                var spDesc = unitDetail.special;

                var special;
                if (Array.isArray(spDesc))
                    special = spDesc[spDesc.length - 1].description;
                else if (spDesc.character1)
                    special = spDesc.character1;
                else
                    special = spDesc;

                if (!filterRegex.test(special))
                    $(this).addClass(filterClass);
            });
        }
    });

    // LB Filter
    $('.lb-filter').click(function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $('.lb-filtered').removeClass('lb-filtered');
        } else {
            $(this).addClass('selected');

            $('.booster, .booster-clone').each(function() {
                var hasLb = $(this).data('has_lb');
                if (!hasLb)
                    $(this).addClass('lb-filtered');
                else
                    $(this).removeClass('lb-filtered');
            });
        }
    });

    // Help button
    $('#help-button').click(function() {
        $('#help-modal').modal();
    });

    // TM selection dropdown
    $('#tm-select').change(function() {
        var parsedTmId = parseInt($(this).val());

        init(parsedTmId, server);
        tmId = parsedTmId;
    });

    // Press Esc to close modal
    $(document).keyup(function(e) {
        if (e.keyCode == 27)
            $('.modal').modal('hide');
    });

    var elemTop;

    $(window).resize(function() {
        elemTop = $("#dont-have").offset().top + 200;
    });

    $(window).scroll(function() {
        var scrHeight = $(window).scrollTop();
        var win = $(window).height() + scrHeight;

        elemTop = $("#dont-have").offset().top + 200;

        if (win <= elemTop) {
            $(".expand-button-div").show();
            $("#tm-team-container:not(.fixed-teams)").addClass("fixed-teams");
            $(".filter-button-div").removeClass("fixed-filter-button");

            if ($("#expand-icon").data("status") == "up")
                $("#tm-team-sets").hide();
        } else {
            $("#tm-team-container.fixed-teams").removeClass("fixed-teams");
            $(".expand-button-div").hide();
            $(".filter-button-div").addClass("fixed-filter-button");

            $("#tm-team-sets").show();
        }
    });

    $("#expand-icon").click(function() {
        if($(this).data("status") == "down") {
            $("#tm-team-sets").hide();
            $("#team-hints").hide();
            $(this).data("status", "up");
            $(this).attr("src", "assets/img/details_up.png");
        } else {
            $("#tm-team-sets").show();
            $("#team-hints").show();
            $(this).data("status", "down");
            $(this).attr("src", "assets/img/details_down.png");
        }
    });

    // Set up drag and drop for each booster section
    var ids = ["booster_2_25x", "booster_2_2x", "booster_2x", "booster_1_85x", "booster_1_8x", "booster_1_75x",
                "booster_1_7x", "booster_1_6x", "booster_1_5x", "booster_1_4x", "booster_1_4x_v2", "booster_1_35x",
                "booster_1_35x_v2", "booster_1_35x_v3", "booster_1_35x_v4", "booster_1_3x", "booster_1_3x_v2",
                "booster_1_3x_v3", "booster_1_25x", "booster_1_25x_v2", "booster_1_25x_v3", "booster_1_25x_v4",
                "booster_1_2x_legend", "booster_1_2x_rr", "booster_1_2x_tm_rr", "booster_1_2x_tm_rr",
                "booster_1_2x_coliseum", "booster_1_2x_raid", "booster_1_2x_fortnight", "booster_1_2x_tm",
                "booster_1_2x_tm", "booster_1_2x_other", "booster_1_1x", "booster_1x"];

    for (var id of ids) {
        var boosterEl = document.getElementById(id);
        new Sortable(boosterEl, {
            group: {
                name: 'booster-group',
                pull: true,
                put: false // Do not allow items to be put into this list
            },
            draggable: ".booster:not(.assigned-dh)",
            animation: 150,
            revertOnSpill: true,
            delay: 60, // time in milliseconds to define when the sorting should start
            delayOnTouchOnly: true
        });
    }

    // Set up drag and drop for dont have section
    var dontHaveEl = document.getElementById("dont-have");
    new Sortable(dontHaveEl, {
        group: {
            name: 'booster-group',
            pull: true,
            put: true
        },
        onAdd: function(evt) {
            var item = $("#" + evt.item.id);
            item.data('team', -1);
            item.addClass('assigned-dh');
            item.insertBefore('#add-button');

            // Remove corresponding Clone
            $('#booster-clone_' + item.data('id') + '_clone').remove();
        },
        onRemove: function(evt) {
            var item = $("#" + evt.item.id);
            item.removeClass('assigned-dh');
        },
        resetPositionOnSpill: true,
        animation: 150,
        sort: false // To disable sorting: set sort to false
    });

    // Set up drag and drop for each team section
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 6; j++) {
            var team = "team-slot-" + i + j;
            var teamEl = document.getElementById(team);
            new Sortable(teamEl, {
                group: {
                    name: 'booster-group',
                    pull: true,
                    put: true
                },
                draggable: ".booster",
                animation: 150,
                delay: 60, // time in milliseconds to define when the sorting should start
                delayOnTouchOnly: true,
                resetPositionOnSpill: true, // Reset booster to original position it is spilled
                onStart: function (/**Event*/evt) {
                    var item = $("#" + evt.item.id);
                    item.tooltip('hide');
                },
                onAdd: function(evt) {
                    var item = $("#" + evt.item.id);

                    var assigned = item.hasClass("assigned");
                    var to_list = $("#" + evt.to.id);
                    var from_list = $("#" + evt.from.id);

                    to_list.find( ".booster-clone" ).remove();
                    to_list.find( ".booster" ).each(function() {
                        if ($(this).attr("id") != item.attr("id")) {
                            if (assigned)
                                from_list.append($(this));
                            else
                                resetPosition($(this));
                        }
                    });

                    var assignedTeam = to_list.closest('.team').data('team');

                    // Remove corresponding Clone if moved to another Team
                    if (item.data('team') !== assignedTeam)
                        $('#booster-clone_' + item.data('id') + '_clone').remove();

                    item.data('team', assignedTeam);
                    item.addClass('assigned');

                    // Mirror to Friend Cap slot if it is empty
                    if (to_list.data('slot') == 1 && !item.hasClass("booster-clone"))
                        mirrorToFriendCap(to_list.closest('.team'), item, true);
                }
            });
        }
    }

    // Set up drag and drop for Ambush team section
    for (var j = 0; j < 6; j++) {
        var team = "team-slot-5" + j;
        var teamEl = document.getElementById(team);
        new Sortable(teamEl, {
            group: {
                name: 'booster-group',
                pull: true,
                put: true
            },
            draggable: ".booster-clone:not(.booster-ambush-fc)",
            animation: 150,
            delay: 60, // time in milliseconds to define when the sorting should start
            delayOnTouchOnly: true,
            resetPositionOnSpill: true, // Reset booster to original position it is spilled
            onAdd: function(evt) {
                var item = $("#" + evt.item.id);
                var to_list = $("#" + evt.to.id);
                var from_list = $("#" + evt.from.id);

                if (evt.to.id.charAt(11) == '0')
                    $(".booster-ambush-fc").remove();

                if (item.hasClass('booster-clone')) {
                    to_list.find( ".booster-clone" ).each(function() {
                        if ($(this).attr("id") != item.attr("id"))
                            from_list.append($(this));
                    });
                } else
                    createCloneInSlot(item, to_list, true);

                // Mirror to Friend Cap slot if it is empty
                if (to_list.data('slot') == 1)
                    mirrorToFriendCap(to_list.closest('.team'), item, true, true);
            }
        });
    }

    // Filter button events
    $(".filter-button").click(function() {
        if ($(this).hasClass("active")) {
            $("#tm-team-container").show();
            $(".fixed-filters").fadeOut("slow");
        } else {
            $("#tm-team-container.fixed-teams").hide();
            $(".fixed-filters").fadeIn("slow");
        }
    });
});
