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
            tmId == 2690
        )
    ) {
        // TM Smoothie & Oven
        // TM Weevil
        // TM Shanks & Beckman
        // TM Lucci
        // TM Sakazuki & Issho
        // TM Smoker
        // TM Blackbeard
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
            tmId == 2850
        )
    ) {
        // TM Halloween Nami
        // TM X Drake
        // TM Rebecca & Viola
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

        imgDiv.draggable({
            cursor: 'move',
            stack: '#container',
            revert: function(event, ui) {
                if (event &&
                        (event[0].className.indexOf('team-slot') != -1 ||
                        event[0].id.indexOf('dont-have') != -1)
                )
                    return false;
                else {
                    resetPosition($(this));
                    return true;
                }
            },
        });
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
            var opName = op[0];
            var opType = op[1];
            var opPos = op[2];

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
            var opName = op[0];
            var opType = op[1];

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

    if (tmId != 9999)
        $('.sl-btn').attr('disabled', false);
    else
        $('.sl-btn').attr('disabled', true);

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
        tmId == 2850
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

function decorateStr(str) {
    // Decorate Type strings
    str = str
        .replace(/\[?(STR|DEX|QCK|PSY|INT)\]?/g, '<span class="$1-div badge">$1</span>')
        .replace(/\[(RCV|TND|BLOCK|BOMB|RAINBOW|G|EMPTY)\]/g, '<span class="$1-div badge">$1</span>');

    // Decorate Class strings
    str = str.replace(/(Fighter|Slasher|Striker|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/g, function(match) {
        var matchClass = match.replace(' ', '-').toLowerCase();
        return '<span class="badge"><div class="' + matchClass  + '-div class-decorate"></div>' + match + '</span>';
    });

    return str;
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

function createCloneInSlot(orig, slot, isAmbush) {
    // Replace existing units and put the previous unit back
    if (slot.find('.booster').length > 0)
        resetPosition(slot.find('.booster').detach());
    else if (slot.find('.booster-clone').length > 0)
        slot.find('.booster-clone').remove();

    var clone = orig.clone();
    var origId = orig.data('id');

    var cloneType;
    if (isAmbush)
        cloneType = 'ambush';
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

function mirrorToFriendCap(teamDiv, cap, autoFill) {
    var friendCapSlot = teamDiv.find('.friend-cap');
    var validFill = false;

    if (autoFill) {
        if (friendCapSlot.find('.booster').length == 0 &&
            friendCapSlot.find('.booster-clone').length == 0)
            validFill = true;
    } else
        validFill = true;

    if (validFill)
        createCloneInSlot(cap, friendCapSlot, false);
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

    $('#dont-have').find('.booster').each(function() {
        dontHaves.push($(this).data('id'));
    });

    localStorage.setItem('dontHaves_' + tmId + serverStr, JSON.stringify(dontHaves));

    // Update last save time
    var now = moment().format('lll');
    $('#last-save').html(now);

    localStorage.setItem('lastSave_' + tmId + serverStr, now);
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
                        var opPos = op[2];

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
                        b.detach().css({
                            top: 0,
                            left: 0
                        }).insertBefore($('#add-button'));
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

    $('.team-slot').droppable({
        accept: '.booster',
        activeClass: 'ui-state-hover',
        drop: function(event, ui) {
            // Replace existing units and put the previous unit back
            if ($(this).find('.booster').length > 0)
                resetPosition($(this).find('.booster').detach());
            else if ($(this).find('.booster-clone').length > 0)
                $(this).find('.booster-clone').remove();

            // Put new unit in place
            $(ui.draggable).detach().css({
                top: 0,
                left: 0
            }).prependTo($(this));

            var assignedTeam = $(this).closest('.team').data('team');

            // Remove corresponding Clone if moved to another Team
            if ($(ui.draggable).data('team') !== assignedTeam)
                $('#booster-clone_' + $(ui.draggable).data('id') + '_clone').remove();

            $(ui.draggable).data('team', assignedTeam);
            $(ui.draggable).addClass('assigned');

            // Mirror to Friend Cap slot if it is empty
            if ($(this).data('slot') == 1)
                mirrorToFriendCap($(this).closest('.team'), $(ui.draggable), true);
        }
    });

    $('#dont-have').droppable({
        accept: '.booster',
        activeClass: 'ui-state-hover',
        drop: function(event, ui) {
            $(ui.draggable).detach().css({
                top: 0,
                left: 0
            }).insertBefore($('#add-button'));

            $(ui.draggable).data('team', -1);
            $(ui.draggable).addClass('assigned-dh');

            // Remove corresponding Clone
            $('#booster-clone_' + $(ui.draggable).data('id') + '_clone').remove();
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
                        var opPos = op[2];

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

            var dontHaves = JSON.parse(localStorage.getItem('dontHaves_' + tmId + serverStr));

            for (var i = 0; i < dontHaves.length; i++) {
                var unitId = dontHaves[i];

                if (unitId !== 0) {
                    var b = $('#booster_' + unitId);

                    b.addClass('assigned-dh');
                    b.detach().css({
                        top: 0,
                        left: 0
                    }).insertBefore($('#add-button'));
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
    $('.type-filter').click(function() {
        var filter = $(this).data('filter');

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $('.type-filtered').removeClass('type-filtered');
        } else {
            $('.type-filter').removeClass('selected');
            $(this).addClass('selected');

            $('.booster, .booster-clone').each(function() {
                var unitType = $(this).data('type');
                if (Array.isArray(unitType)) {
                    if (unitType.indexOf(filter) == -1)
                        $(this).addClass('type-filtered');
                    else
                        $(this).removeClass('type-filtered');
                } else {
                    if ($(this).data('type') !== filter)
                        $(this).addClass('type-filtered');
                    else
                        $(this).removeClass('type-filtered');
                }
            });
        }
    });

    // Class filter
    var classFilters = [];
    var multiClassMode = false;

    // Multi Class mode
    createTooltip($('#multi-class-mode-label'),
        "Select units for Captain Abilities benefiting from multiple classes, e.g. Katakuri, Carrot (Disables 2 Classes restriction)");

    $('#multi-class-mode-checkbox').click(function() {
        if ($(this).prop('checked'))
            multiClassMode = true;
        else
            multiClassMode = false;

        // Clear existing Class Filters
        classFilters = [];
        $('.class-filter').removeClass('selected');
        $('.class-filtered').removeClass('class-filtered');
    });

    $('.class-filter').click(function() {
        var filter = $(this).data('filter');

        if (multiClassMode) {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                classFilters.splice(classFilters.indexOf(filter), 1);
            } else {
                $(this).addClass('selected');
                classFilters.push(filter);
            }
        } else {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                classFilters.splice(classFilters.indexOf(filter), 1);
            } else {
                var removedFilter = [];
                if (classFilters.length > 1)
                    removedFilter = classFilters.splice(0, 1);

                if (removedFilter.length > 0)
                    $('.' + removedFilter[0].replace(' ', '-').toLowerCase() + '-div').removeClass('selected');

                $(this).addClass('selected');
                classFilters.push(filter);
            }
        }

        if (classFilters.length == 0) {
            // Clear filters if no Class Filters are currently selected
            $('.class-filtered').removeClass('class-filtered');
        } else {
            $('.booster, .booster-clone').each(function() {
                var unitClass1 = $(this).data('class1');
                var unitClass2 = $(this).data('class2');

                if (unitClass2) {
                    // Units with 2 Classes
                    if (classFilters.length > 1) {
                        if (classFilters.indexOf(unitClass1) == -1 || classFilters.indexOf(unitClass2) == -1)
                            $(this).addClass('class-filtered');
                        else
                            $(this).removeClass('class-filtered');
                    } else {
                        if (unitClass1 !== classFilters[0] && unitClass2 !== classFilters[0])
                            $(this).addClass('class-filtered');
                        else
                            $(this).removeClass('class-filtered');
                    }
                } else {
                    // Units with only 1 Class
                    if (classFilters.length > 1) {
                        // Disqualify units with 1 Class if 2 Class Filters are selected
                        $(this).addClass('class-filtered');
                    } else {
                        if (unitClass1 !== classFilters[0])
                            $(this).addClass('class-filtered');
                        else
                            $(this).removeClass('class-filtered');
                    }
                }
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
});
