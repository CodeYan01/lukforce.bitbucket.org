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

function getIconTooltip(iconKey) {
    if (icon_tooltips[iconKey])
        return icon_tooltips[iconKey];

    return '';
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
    $('#incomplete-notice').hide();

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
        // TM Valentine Sabo
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
    } else if (
        server == 'glb' &&
        (
            tmId == 2443 ||
            tmId == 3060
        )
    ) {
        // TM Doffy
        // TM Nami & Sanji
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
            tmId == 2792 ||
            tmId == 2823 ||
            tmId == 2850 ||
            tmId == 2879 ||
            tmId == 2913 ||
            tmId == 2977 ||
            tmId == 2995 ||
            tmId == 3022 ||
            tmId == 3094 ||
            tmId == 3115 ||
            tmId == 3150 ||
            tmId == 3197
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
        // TM X Drake
        // TM Rebecca & Viola
        // TM Vivi
        // TM Shirahoshi
        // TM Anni Luffy
        // TM Zorojuro
        // TM Reiju
        // TM Jinbe
        // TM Pudding
        // TM Kid
        // TM Garp
        $('#div_2_2x').show();
        $('#div_2x').show();
        $('#div_1_75x').show();
        $('#div_1_5x').show();
        $('#div_1_35x').show();
        $('#div_1_1x').show();
        $('#div_1x').show();
    } else if (server == 'glb' && tmId == 3239) {
        // TM Queen
        $('#div_2_2x').show();
        $('#div_2x').show();
        $('#div_1_75x').show();
        $('#div_1_5x').show();
        $('#div_1_35x_valt').show();
        $('#div_1_1x').show();
        $('#div_1x').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (
        server == 'glb' &&
        (
            tmId == 3273 ||
            tmId == 3297
        )
    ) {
        // TM Luffy & Ace
        // TM Shiryu
        $('#div_2_2x').show();
        $('#div_2x').show();
        $('#div_1_75x').show();
        $('#div_1_5x').show();
        $('#div_1_35x_valt').show();
        $('#div_1_1x').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
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
    } else if (server == 'jpn' && tmId == 2977) {
        // TM Anni Luffy
        $('#div_2x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_35x_v4').show();
        $('#div_1_25x_v2').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (
        server == 'jpn' &&
        (
            tmId == 2995 ||
            tmId == 3022 ||
            tmId == 3094 ||
            tmId == 3115 ||
            tmId == 3150 ||
            tmId == 3197 ||
            tmId == 3217 ||
            tmId == 3239 ||
            tmId == 3273 ||
            tmId == 3297 ||
            tmId == 3506
        )
    ) {
        // TM Zorojuro
        // TM Reiju
        // TM Jinbe
        // TM Pudding
        // TM Kid
        // TM Garp
        // TM Komurasaki
        // TM Queen
        // TM Luffy & Ace
        // TM Shiryu
        // TM Hyogoro
        $('#div_2x').show();
        $('#div_1_8x').show();
        $('#div_1_6x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_35x_v4').show();
        $('#div_1_25x_v2').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (server == 'jpn' && tmId == 3060) {
        // TM Nami & Sanji
        $('#div_2_3x').show();
        $('#div_1_8x_v2').show();
        $('#div_1_4x_v2').show();
        $('#div_1_35x_v4').show();
        $('#div_1_25x_v2').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (tmId == 3339) {
        // TM Koala
        $('#div_1_6x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_35x_v4').show();
        $('#div_1_25x_v2').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (tmId == 3368) {
        // TM MUGIWARA 56 Zoro
        $('#div_2x').show();
        $('#div_1_6x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_35x_v4').show();
        $('#div_1_25x_v2').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (
        tmId == 3389 ||
        tmId == 3416 ||
        tmId == 3588 ||
        tmId == 3663 ||
        tmId == 3689
    ) {
        // TM Dragon Kaido
        // TM Stussy
        // TM Ulti
        // TM Franky
        // TM RED Sanji
        $('#div_2x').show();
        $('#div_1_8x').show();
        $('#div_1_6x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_35x_v4').show();
        $('#div_1_25x_v2').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (tmId == 3621) {
        // TM Sabo
        $('#div_1_8x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_35x_v4').show();
        $('#div_1_25x_v2').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (server == 'jpn' && tmId == 3443) {
        // TM Beast Pirates Luffy
        $('#div_1_85x').show();
        $('#div_1_75x').show();
        $('#div_1_6x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_35x_v4').show();
        $('#div_1_25x_v2').show();

        $('#info_1_2x_main').hide();
        $('#info_1_2x_alt').show();
    } else if (
        tmId == 3467 ||
        tmId == 3491 ||
        tmId == 3527 ||
        tmId == 3547 ||
        tmId == 3567 ||
        tmId == 3645
    ) {
        // TM Halloween Robin
        // TM Moria
        // TM Tashigi
        // TM Perospero
        // TM Kanjuro
        // TM Moria v2
        $('#div_2x').show();
        $('#div_1_7x').show();
        $('#div_1_4x_v2').show();
        $('#div_1_35x_v4').show();
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

        if (tmId < 3339) {
            $('#div_1_2x_tm_rr').show();
            $('#div_1_2x_tm').show();
        } else {
            $('#div_1_2x_tm_rr').hide();
            $('#div_1_2x_tm').hide();
        }
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

        var unitId = b.id;
        if (b.id > 9000)
            unitId = parseVsUnitId(b.id);

        // Name in tooltip
        createTooltip(imgDiv, units[unitId - 1][0]);

        // Type and Class
        imgDiv.data('type', units[unitId - 1][1]);

        var unitClass = units[unitId - 1][2];
        if (Array.isArray(unitClass)) {
            var class1;
            var class2;

            if (Array.isArray(unitClass[0])) {
                if (unitClass.length === 2) {
                    // VS Units
                    var vsClass;
                    if (b.id % 2 === 1)
                        vsClass = unitClass[0];
                    else
                        vsClass = unitClass[1];

                    class1 = vsClass[0];
                    class2 = vsClass[1];
                } else {
                    // Dual Units
                    var dualClass = unitClass[2];
                    class1 = dualClass[0];
                    class2 = dualClass[1];
                }
            } else {
                class1 = unitClass[0];
                class2 = unitClass[1];
            }

            imgDiv.data('class1', class1);
            imgDiv.data('class2', class2);
        } else {
            imgDiv.data('class1', unitClass);
        }

        imgDiv.data('max_lv', units[unitId - 1][7])
        imgDiv.data('team', -1);
        imgDiv.attr('id', 'booster_' + b.id);
        imgDiv.attr('draggable', true);
        imgDiv.css('display', 'inline-block');

        var _x_pts = b.x_pts.toString().replace(".", "_");

        if (b.x_pts === 1.2) {
            imgDiv.data('_type', b.type);
            $('#booster_' + _x_pts + 'x_' + b.type).append(imgDiv);
        } else if (b.x_pts === 1.8 && b.ver)
            $('#booster_' + _x_pts + 'x_v' + b.ver).append(imgDiv);
        else if (b.x_pts === 1.4 && b.ver)
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
    $('.thumb-div').empty();

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
                $('.team-note-div[data-team=' + opPos + ']').find('.team-note-boss').empty();

                for (var j = 0; j < opName.length && j < opType.length; j++) {
                    var opHtml= $('<span></span>');
                    opHtml.html(opName[j]);
                    opHtml.addClass(opType[j]);

                    opPosDiv.append(opHtml);
                    $('.team-note-div[data-team=' + opPos + ']').find('.team-note-boss').append(opHtml.clone());
                }
            } else {
                var opHtml = $('<span></span>');
                opHtml.html(opName);
                opHtml.addClass(opType);

                opPosDiv.html(opHtml);
                $('.team-note-div[data-team=' + opPos + ']').find('.team-note-boss').append(opHtml.clone());
            }

            opPosTeam.data('op_id', opId);
            opPosTeam.data('op_name', opName);
            opPosTeam.data('op_type', opType);
        }
    } else {
        for (var i = 0; i < opponents.length; i++) {
            var op = opponents[i];
            var opName = op.name;
            var opType = op.type;

            if (Array.isArray(opName) && Array.isArray(opType)) {
                $('#op-' + (i + 1)).empty();
                $('.team-note-div[data-team=' + i + ']').find('.team-note-boss').empty();

                for (var j = 0; j < opName.length && j < opType.length; j++) {
                    var opHtml= $('<span></span>');
                    opHtml.html(opName[j]);
                    opHtml.addClass(opType[j]);

                    $('#op-' + (i + 1)).append(opHtml);
                    $('.team-note-div[data-team=' + i + ']').find('.team-note-boss').append(opHtml.clone());
                }
            } else {
                var opHtml = $('<span></span>');
                opHtml.html(opName);
                opHtml.addClass(opType);

                $('#op-' + (i + 1)).html(opHtml);
                $('.team-note-div[data-team=' + i + ']').find('.team-note-boss').append(opHtml.clone());
            }
        }
    }

    var imgHtml = createImgHtml(getThumb(tmId), 50, false);
    $('.thumb-div').append(imgHtml);

    return true;
}

// Save drag(from) and drop(to) position
var from_list = "";
var to_list = "";
var tmId = 0;
function init(tmId, server, isTransfer) {
    clearTeamNotes();
    $('#tm-select').val(tmId + '_' + server);
    $('.tm-select').text($("#tm-select option:selected").text());

    if (!getBoosters(tmId, server)) {
        alert('Invalid TM');
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
        tmId >= 2387
    ) {
        $('#ambush-team').show();
        $('#first-team').removeClass('offset-md-1');
    } else {
        $('#ambush-team').hide();
        $('#first-team').addClass('offset-md-1');
    }

    resetAll();

    if (!isTransfer)
        doLoad(tmId);

    $('#export-url-div').hide();

    // Retrieve last save time
    var serverStr = server === 'glb' ? '' : '_jpn';
    if (localStorage.getItem('lastSave_' + tmId + serverStr) !== null)
        $('#last-save').html(localStorage.getItem('lastSave_' + tmId + serverStr));
    else
        $('#last-save').html('N/A');

    for (var teamId = 0; teamId < 6; teamId++)
        doTeamBuildCheck(teamId);

    return true;
}

function resetPosition(unit) {
    if (to_list != "" && to_list.hasClass("ambush-team-slot")) {
        from_list.append(unit);
    } else {
        // Remove unit support
        var id = unit.closest(".team-slot, .ambush-team-slot").attr("id");
        if (id)
            removeSupport(id.slice(-2));

        unit.removeClass('assigned');
        unit.removeClass('assigned-dh');
        unit.data('team', -1);
        unit.find('img.highlight').removeClass('highlight');

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
}

function resetAll() {
    from_list = "";
    to_list = "";

    $('.booster.assigned').each(function() {
        resetPosition($(this).detach());
    });

    $('.support-slot').each(function() {
        $(this).empty();
        $(this).addClass("empty");
    });

    $('.booster-clone').remove();

    // Reset Team status notes
    for (var teamId = 0; teamId < 6; teamId++)
        doTeamBuildCheck(teamId);

    updateAllInfo();
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

function decorateStr(str, isGuide) {
    // Decorate Type strings
    str = str
        .replace(/\[?(STR|DEX|QCK|PSY|INT)\]?/g, '<span class="$1-badge badge">$1</span>')
        .replace(/\[(RCV|TND|BLOCK|BOMB|RAINBOW|G|EMPTY)\]/g, '<span class="$1-div badge">$1</span>');

    // Decorate Class strings
    str = str.replace(/(Fighter|Slasher|Striker|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/g, function(match) {
        var matchClass = match.replace(' ', '-').toLowerCase();
        return '<span class="badge"><div class="' + matchClass  + '-div class-decorate"></div>' + (isGuide ? '' : match) + '</span>';
    });

    if (!isGuide) {
        // highlight all numbers
        str = str.replace(/\d+(\,\d+)?(\.\d+)?(%|x| turns| turn| hp)/g, '<span class="highlight-numbers">$&</span>');
    }

    return str;
}

function decorateSpIcon(iconKey, isAction) {
    if (iconKey === 'No Heal' ||
        iconKey === 'Swap Captain' ||
        iconKey === 'Ship Bind' ||
        iconKey === 'CD Lock' ||
        iconKey === 'Fear' ||
        iconKey === 'Harder P'
    )
        return iconKey;

    if (isAction)
        iconKey = '<div class="guide-action-icon ' + iconKey + '-div"></div>';
    else
        iconKey = iconKey + '-div';

    return iconKey;
}

function parseVsUnitId(vsId) {
    // Kaido VS Big Mom
    if (vsId === 9001 || vsId === 9002)
        return 3135;
    // Ace VS Akainu
    if (vsId === 9003 || vsId === 9004)
        return 3253;
    // Whitebeard VS Shanks
    if (vsId === 9005 || vsId === 9006)
        return 3355;

    return vsId;
}

function parseVsUnitIdForCalc(vsId) {
    // Kaido VS Big Mom
    if (vsId === 9001)
        return 5274;
    if (vsId === 9002)
        return 5275;

    // Ace VS Akainu
    if (vsId === 9003)
        return 5302;
    if (vsId === 9004)
        return 5303;

    // Whitebeard VS Shanks
    if (vsId === 9005)
        return 5339;
    if (vsId === 9006)
        return 5340;

    return vsId;
}

function createActionCounterBtn(guideActionClone, counter) {
    var guideFilterClone;
    var guideFilterClass;
    if (counter.indexOf('s_') !== -1) {
        guideFilterClone = $('#guide-sl-filter-clone').clone();
        guideFilterClass = 'guide-sl-filter';
        counter = counter.substring(2);
    } else if (counter.indexOf('c_') !== -1) {
        guideFilterClone = $('#guide-ca-filter-clone').clone();
        guideFilterClass = 'guide-ca-filter';
        counter = counter.substring(2);
    } else {
        guideFilterClone = $('#guide-sp-filter-clone').clone();
        guideFilterClass = 'guide-sp-filter';
    }

    guideFilterClone.attr('id', '');

    guideFilterClone.find('.' + guideFilterClass).addClass(decorateSpIcon(counter, false));
    guideFilterClone.find('.' + guideFilterClass).data('filter', counter);

    var tooltip = getIconTooltip(counter);
    if (guideFilterClass === 'guide-sl-filter')
        tooltip = "Sailor: " + tooltip;
    else if (guideFilterClass === 'guide-ca-filter')
        tooltip = "Captain: " + tooltip;
    createTooltip(guideFilterClone.find('.' + guideFilterClass), tooltip);

    guideActionClone.find('.guide-filter-list').append(guideFilterClone);
}

function populateUnitDetail(unitId) {
    var origId = unitId;

    if (unitId > 9000)
        unitId = parseVsUnitId(origId);

    var unitDetail = details[unitId];

    if (unitDetail) {
        $('#db-button').data('id', unitId);
        $('.unit-detail-el').show();

        // Thumb
        $('#unit-detail-thumb').empty();

        var imgHtml = createImgHtml(getThumb(origId), 40, false);
        $('#unit-detail-thumb').append(imgHtml);

        // Type
        $('#unit-modal-title').html(units[unitId - 1][0]);
        $('#unit-modal-title').removeClass('STR DEX QCK PSY INT');
        $('#unit-modal-title').addClass(units[unitId - 1][1]);

        // Class
        $('#unit-detail-class1, #unit-detail-class2').removeClass(
            'fighter-div slasher-div striker-div shooter-div free-spirit-div cerebral-div powerhouse-div driven-div'
        );

        // Cost
        $('#unit-cost').text(units[unitId - 1][4]);

        // Check for Dual Unit / VS Unit
        var isDual = unitDetail.swap != null;
        var isVS = unitDetail.VSSpecial != null;

        var unitClass = units[unitId - 1][2];
        if (Array.isArray(unitClass)) {
            var class1;
            var class2;

            if (isDual || isVS) {
                if (isVS) {
                    // VS Units
                    var vsClass;
                    if (origId % 2 === 1)
                        vsClass = unitClass[0];
                    else
                        vsClass = unitClass[1];

                    class1 = vsClass[0].replace(' ', '-').toLowerCase();
                    class2 = vsClass[1].replace(' ', '-').toLowerCase();
                } else {
                    // Dual Units
                    var dualClass = unitClass[2];
                    class1 = dualClass[0].replace(' ', '-').toLowerCase();
                    class2 = dualClass[1].replace(' ', '-').toLowerCase();
                }
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
            $('#unit-detail-captain-ability').empty();

            if (typeof captain === 'object') {
                if (isDual || isVS) {
                    // Dual Units & VS Units
                    $('#unit-detail-captain-ability').empty();

                    if (isDual) {
                        // Dual Units
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
                        // VS Units
                        var captainVs;
                        if (origId % 2 === 1)
                            captainVs = captain.character1;
                        else
                            captainVs = captain.character2;

                        captainVs = decorateStr(captainVs);
                        $('#unit-detail-captain-ability').html(captainVs);
                    }
                }

                if (captain.base) {
                    var captainBase = captain.base;
                    captainBase = decorateStr(captainBase);
                    $('#unit-detail-captain-ability').append('<b>Base:</b> ' + captainBase);
                    $('#unit-detail-captain-ability').append('<br />');

                    // LB+ Captain
                    var lblv = 2;
                    var captainLb = captain.level1;
                    while (captain['level' + lblv]) {
                        captainLb = captain['level' + lblv];
                        lblv++;
                    }

                    captainLb = decorateStr(captainLb);
                    $('#unit-detail-captain-ability').append('<b>LB+:</b> ' + captainLb);
                    $('#unit-detail-captain-ability').append('<br />');
                }

                if (captain.llbbase) {
                    var captainLlbBase = captain.llbbase;
                    captainLlbBase = decorateStr(captainLlbBase);
                    $('#unit-detail-captain-ability').append('<b>LLB Base:</b> ' + captainLlbBase);
                    $('#unit-detail-captain-ability').append('<br />');

                    // LLB LB+ Captain
                    var captainLlb = captain.llblevel1;
                    captainLlb = decorateStr(captainLlb);
                    $('#unit-detail-captain-ability').append('<b>LLB LB+:</b> ' + captainLlb);
                    $('#unit-detail-captain-ability').append('<br />');
                }
            } else {
                captain = decorateStr(captain);
                $('#unit-detail-captain-ability').html(captain);
            }
        } else
            $('#unit-detail-captain-ability').html('None');

        // Swap Effect
        if (isDual) {
            var swapEffect = unitDetail.swap;
            $('#unit-detail-swap').empty();

            if (swapEffect.base) {
                // Has Super Swap
                var swapBase = swapEffect.base;
                swapBase = decorateStr(swapBase);
                $('#unit-detail-swap').append('<b>Base:</b> ' + swapBase);
                $('#unit-detail-swap').append('<br />');

                var swapSuper = swapEffect.super;
                swapSuper = decorateStr(swapSuper);
                $('#unit-detail-swap').append('<b>Super:</b> ' + swapSuper);
                $('#unit-detail-swap').append('<br />');
            } else {
                swapEffect = decorateStr(swapEffect);
                $('#unit-detail-swap').html(swapEffect);
            }
        } else
            $('.unit-detail-swap-el').hide();

        // Special
        var special = unitDetail.special;
        if (special) {
            $('#unit-detail-special').empty();

            // Parse CD
            var baseCd = 'N/A';
            if (cooldowns[unitId - 1])
                baseCd = cooldowns[unitId - 1][1];
            var lbStats = parseLbStats(unitId);

            var baseLbCd = 'N/A';
            if (baseCd !== 'N/A')
                baseLbCd = baseCd - lbStats.cd;
            $('#unit-detail-sp-cd').html('[Base|LB] <span class="unit-detail-sp-cd-num">' + baseLbCd + '</span>');

            if (lbStats.cdEx !== 0) {
                var baseLbExCd = 'N/A';
                if (baseCd !== 'N/A')
                    baseLbExCd = baseLbCd - lbStats.cdEx;
                $('#unit-detail-sp-cd-ex').html('→ [LB+] <span class="unit-detail-sp-cd-num">' + baseLbExCd + '</span>');
            } else
                $('#unit-detail-sp-cd-ex').empty();

            if (Array.isArray(special)) {
                var specialMax = special[special.length - 1].description;
                specialMax = decorateStr(specialMax);
                $('#unit-detail-special').html(specialMax);
            } else if (special.character1 && (isDual || isVS)) {
                if (isVS) {
                    // VS Units
                    var specialVs;
                    if (origId % 2 === 1)
                        specialVs = special.character1;
                    else
                        specialVs = special.character2;

                    specialVs = decorateStr(specialVs);
                    $('#unit-detail-special').html(specialVs);
                } else {
                    // Dual Units with different special
                    var special1 = special.character1;
                    special1 = decorateStr(special1);
                    $('#unit-detail-special').append('<b>Character 1:</b> ' + special1);
                    $('#unit-detail-special').append('<br />');

                    var special2 = special.character2;
                    special2 = decorateStr(special2);
                    $('#unit-detail-special').append('<b>Character 2:</b> ' + special2);
                    $('#unit-detail-special').append('<br />');
                }
            } else if (special.japan) {
                // Special case where JPN version special is different
                special = decorateStr(special.japan);
                $('#unit-detail-special').html(special);
            } else if (special.base) {
                var spBase = special.base;
                spBase = decorateStr(spBase);
                $('#unit-detail-special').append('<b>Base:</b> ' + spBase);
                $('#unit-detail-special').append('<br />');

                // LLB Special
                var spLlb = special.llbbase;
                spLlb = decorateStr(spLlb);
                $('#unit-detail-special').append('<b>LLB:</b> ' + spLlb);
                $('#unit-detail-special').append('<br />');
            } else {
                special = decorateStr(special);
                $('#unit-detail-special').html(special);
            }

            var spNote = unitDetail.specialNotes;
            if (spNote && !spNote.startsWith("#{")) {
                $('#unit-detail-special').append('<br />');
                $('#unit-detail-special').append('<i><b>NOTE:</b> ' + spNote + '</i>');
            }
        } else
            $('#unit-detail-special').html('None');

        // Super Type
        var st = unitDetail.superSpecial;
        if (st) {
            $('#unit-detail-st').empty();

            var stSp = decorateStr(st);
            $('#unit-detail-st').append('<b>Special:</b><br />' + stSp);
            $('#unit-detail-st').append('<br />');

            var stCriteria = unitDetail.superSpecialCriteria;
            stCriteria = decorateStr(stCriteria);
            $('#unit-detail-st').append('<b>Criteria:</b><br />' + stCriteria);
            $('#unit-detail-st').append('<br />');
        } else
            $('.unit-detail-st-el').hide();

        // VS Ability
        if (isVS) {
            var vs = unitDetail.VSSpecial;
            $('#unit-detail-vs').empty();

            var vsSp;
            if (origId % 2 === 1)
                vsSp = decorateStr(vs.character1);
            else
                vsSp = decorateStr(vs.character2);

            $('#unit-detail-vs').append('<b>Special:</b><br />' + vsSp);
            $('#unit-detail-vs').append('<br />');

            var vsCondition = unitDetail.VSCondition;
            vsCondition = decorateStr(vsCondition);
            $('#unit-detail-vs').append('<b>Condition:</b><br />' + vsCondition);
            $('#unit-detail-vs').append('<br />');
        } else
            $('.unit-detail-vs-el').hide();

        // Sailor
        var sailor = unitDetail.sailor;
        if (sailor) {
            if (typeof sailor === 'object') {
                // Unit Sailor added by Limit Break
                $('#unit-detail-sailor').empty();

                if (isDual && sailor.combined) {
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
                } else if (isVS) {
                    // VS Units
                    var sailorVs;
                    if (origId % 2 === 1)
                        sailorVs = sailor.character1;
                    else
                        sailorVs = sailor.character2;

                    sailorVs = decorateStr(sailorVs);
                    $('#unit-detail-sailor').append('<b>Base:</b> ' + sailorVs);
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

                i = 1;
                while (sailor['llblevel' + i]) {
                    var s = sailor['llblevel' + i];
                    s = decorateStr(s);
                    $('#unit-detail-sailor').append('<b>LLB Sailor ' + i + ':</b> ' + s);
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
    $('#non-booster-div').hide();
    $("#non-booster-unit").val("");

    if (selectedId !== 0) {
        if (assigned) {
            $('#remove-button').data('id', selectedId);
            $("#remove-button").data('src', src);
            $('.remove-button-el').show();
        }

        populateUnitDetail(parseInt(selectedId));
    }

    if (src) {
        $('#non-booster-div').css('display', 'flex');
        $("#non-booster-unit").data('src', src);

        var boosterList = $('.booster').not('.assigned, .assigned-dh, .type-filtered, .class-filtered');

        // Available units
        boosterList.each(function() {
            var b = $(this);
            var origId = b.data('id');

            var unitId = origId;
            if (origId > 9000)
                unitId = parseVsUnitId(origId);

            var imgDiv = $('<div></div>');
            imgDiv.append(createImgHtml(getThumb(origId), 40, false));
            imgDiv.data('id', origId);
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
                var origId = b.data('id');

                var unitId = origId;
                if (origId > 9000)
                    unitId = parseVsUnitId(origId);

                var imgDiv = $('<div></div>');
                imgDiv.append(createImgHtml(getThumb(origId), 40, false));
                imgDiv.data('id', origId);
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
                var origId = ab.data('id');

                var unitId = origId;
                if (origId > 9000)
                    unitId = parseVsUnitId(origId);

                var imgDiv = $('<div></div>');
                imgDiv.append(createImgHtml(getThumb(origId), 40, false));
                imgDiv.data('id', origId);
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

function getNonBoosterImg(origId, team) {
    var imgDiv = $('<div></div>');
    imgDiv.append(createImgHtml(getThumb(origId), 40, false));
    imgDiv.addClass('booster-clone');
    imgDiv.addClass('non-booster');
    imgDiv.addClass("assigned")
    imgDiv.data('id', origId);
    imgDiv.data('x_pts', 1);

    unitId = origId;
    if (unitId > 9000)
        unitId = parseVsUnitId(unitId);

    // Name in tooltip
    createTooltip(imgDiv, units[unitId - 1][0]);

    // Type and Class
    imgDiv.data('type', units[unitId - 1][1]);

    var unitClass = units[unitId - 1][2];
    if (Array.isArray(unitClass)) {
        var class1;
        var class2;

        if (Array.isArray(unitClass[0])) {
            if (unitClass.length === 2) {
                // VS Units
                var vsClass;
                if (origId % 2 === 1)
                    vsClass = unitClass[0];
                else
                    vsClass = unitClass[1];

                class1 = vsClass[0];
                class2 = vsClass[1];
            } else {
                // Dual Units
                var dualClass = unitClass[2];
                class1 = dualClass[0];
                class2 = dualClass[1];
            }
        } else {
            class1 = unitClass[0];
            class2 = unitClass[1];
        }

        imgDiv.data('class1', class1);
        imgDiv.data('class2', class2);
    } else {
        imgDiv.data('class1', unitClass);
    }

    imgDiv.data('max_lv', units[unitId - 1][7]);
    imgDiv.data('team', team);
    imgDiv.attr('id', 'booster-clone_' + unitId);
    imgDiv.attr('draggable', false);
    imgDiv.css('display', 'inline-block');
    return imgDiv;
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
        } else {
            cloneType = 'ambush';
            clone.addClass('booster-ambush');
        }
    } else {
        cloneType = 'clone';
        clone.addClass('booster-fc');
    }

    clone.attr('id', 'booster-clone_' + origId + '_' + cloneType);
    clone.data('id', orig.data('id'));
    clone.data('x_pts', orig.data('x_pts'));
    clone.data('type', orig.data('type'));
    clone.data('class1', orig.data('class1'));
    clone.data('class2', orig.data('class2'));
    clone.data('max_lv', orig.data('max_lv'));
    clone.removeClass('booster');
    clone.addClass('booster-clone');

    createTooltip(clone, units[origId - 1][0]);

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

function swapHandler(swapped, dest) {
    var assignedTeam = dest.closest('.team').data('team');

    // Remove corresponding Clone if moved to another Team
    if (swapped.data('team') !== assignedTeam) {
        $('#booster-clone_' + swapped.data('id') + '_clone').remove();

        // Remove swapped support if not the same team
        removeSupport(to_list.attr("id").slice(-2));
    }

    swapped.data('team', assignedTeam);
    swapped.addClass('assigned');

    // Mirror to Friend Cap slot if it is empty
    if (dest.data('slot') == 1)
        mirrorToFriendCap(dest.closest('.team'), swapped, true);
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

function updatePts(teamDiv) {
    var x_pts = 1;

    teamDiv.find('.booster').each(function() {
        var slot_x_pts = Number($(this).data('x_pts'));
        x_pts = x_pts * slot_x_pts;

        // Ver 12.1 Friend Cap Boost
        if (tmId >= 3689 && $(this).closest('.team-slot').data('slot') == '0')
            x_pts = x_pts * 1.1;
    });

    // Check for Clones (Friend Captain or Ambush Team)
    teamDiv.find('.booster-clone').each(function() {
        var slot_x_pts = Number($(this).data('x_pts'));
        x_pts = x_pts * slot_x_pts;

        // Ver 12.1 Friend Cap Boost
        if (tmId >= 3689 && $(this).closest('.team-slot').data('slot') == '0')
            x_pts = x_pts * 1.1;
    });

    teamDiv.find('.x_pts').html(x_pts.toFixed(2));
}

function updateAllPts() {
    $('.team').each(function() {
        updatePts($(this));
    });
}

function calculateTargetPts() {
    var targetPts = Number($('#target-pts').val());
    const baseMain = 4000;
    const growthMain = 200;
    const baseMini = 1000;
    const growthMini = 50;

    var navLv = 0;
    var totalPts = 0;

    while (totalPts < targetPts) {
        $('.team').each(function() {
            var multiplier = Number($(this).find('.x_pts').text());

            if (Number($(this).data('team')) < 4)
                totalPts += multiplier * (baseMini + growthMini * navLv) * 1.5
            else
                totalPts += multiplier * (baseMain + growthMain * navLv) * 1.5
        });

        navLv++;
    }

    $('#target-pts-lv').val(navLv);
}

function calculateNavLv() {
    var navLv = Number($('#nav-lv').val());
    const baseMain = 4000;
    const growthMain = 200;
    const baseMini = 1000;
    const growthMini = 50;

    var totalPts = 0;

    for (var i = 0; i < navLv; i++) {
        $('.team').each(function() {
            var multiplier = Number($(this).find('.x_pts').text());

            if (Number($(this).data('team')) < 4)
                totalPts += multiplier * (baseMini + growthMini * i) * 1.5
            else
                totalPts += multiplier * (baseMain + growthMain * i) * 1.5
        });
    }

    $('#total-pts').val(new Intl.NumberFormat().format(totalPts.toFixed(0)));
}

function updateAllInfo() {
    updateAllPts();
    calculateTargetPts();
    calculateNavLv();
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

    // Save supports
    var supports = [];
    $('.support-slot').not('.hidden').each(function() {
        if ($(this).hasClass("empty"))
            supports.push(-1);
        else
            supports.push($(this).find("div").data("id"));
    });

    localStorage.setItem('supports_' + tmId + serverStr, JSON.stringify(supports));
}

function doLoad(tmId) {
    var lastSave = localStorage.getItem('lastSave_' + tmId);

    if (lastSave !== null) {
        resetAll();

        var teams = JSON.parse(localStorage.getItem('teams_' + tmId));
        if ((tmId > 1889)) {
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

                            if (unitId != 0) {
                                // Check whether unit is clone and restore unit ID
                                var isClone = false;
                                if (unitId < 0) {
                                    isClone = true;
                                    unitId = parseInt(unitId) * -1;
                                }

                                var b = $('#booster_' + unitId);
                                var teamSlot = $('#team-slot-' + teamNum + i);

                                if (isClone) {
                                    if (b.length != 0) // is Booster
                                        createCloneInSlot(b, teamSlot, false);
                                    else { // Non-Booster
                                        imgDiv = getNonBoosterImg(unitId, teamSlot.closest('.team').data('team'));
                                        teamSlot.append(imgDiv);
                                        // Mirror to Friend Cap slot if it is empty
                                        if (teamSlot.data("slot") == 1)
                                            mirrorToFriendCap(teamSlot.closest('.team'), imgDiv, true);
                                    }
                                } else {
                                    b.addClass('assigned');
                                    b.data('team', teamNum);
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

                            if (unitId != 0) {
                                // Restore unit ID
                                if (unitId < 0)
                                    unitId = parseInt(unitId) * -1;

                                var b = $('#booster_' + unitId);
                                var teamSlot = $('#team-slot-' + teamNum + i);

                                if (b.length != 0) // is Booster
                                    createCloneInSlot(b, teamSlot, true);
                                else { // Non-Booster
                                    imgDiv = getNonBoosterImg(unitId, teamSlot.closest('.team').data('team'));
                                    teamSlot.append(imgDiv);
                                    // Mirror to Friend Cap slot if it is empty
                                    if (teamSlot.data("slot") == 1)
                                        mirrorToFriendCap(teamSlot.closest('.team'), imgDiv, true);
                                }
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
                        b.data('team', index);
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
        var dontHaves = JSON.parse(localStorage.getItem('dontHaves_' + tmId));

        for (var i = 0; i < dontHaves.length; i++) {
            var unitId = dontHaves[i];

            if (unitId !== 0) {
                var b = $('#booster_' + unitId);

                b.addClass('assigned-dh');
                b.data('team', -1);
                if (dontHaveMode == null || dontHaveMode == 0) {
                    b.detach().css({
                        top: 0,
                        left: 0
                    }).insertBefore($('#add-button'));
                }
            }
        }

        var supports = JSON.parse(localStorage.getItem('supports_' + tmId));
        if (supports) {
            for (var i = 0; i < supports.length; i++) {
                var unitId = supports[i];

                if (unitId !== -1) {
                    var supSlot = $(".support-slot[data-index=" + i + "]");
                    var imgDiv = $('<div></div>');
                    imgDiv.data("id", unitId);
                    imgDiv.append(createImgHtml(getThumb(unitId), 25, false));
                    supSlot.empty().append(imgDiv);
                    supSlot.removeClass("empty");
                }
            }
        }

        updateAllInfo();

        // Init Team guide specials not met
        for (var teamId = 0; teamId < 6; teamId++)
            doTeamBuildCheck(teamId);
    }
}

function applyTypeFilter(typeFilters) {
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

function clearTypeFilters() {
    $('.type-filter').removeClass('selected');
    $('.booster, .booster-clone').removeClass('type-filtered');
}

function clearNameFilter() {
    $('#name-filter').val('');
    $('.booster, .booster-clone').removeClass('name-filtered');
}

function clearClassFilters() {
    $('.class-filter').removeClass('selected');
    $('.booster, .booster-clone').removeClass('class-filtered');

    $('#exclude-other-checkbox').removeClass('selected');
    excludeOtherClasses = false;

    $('#preset-filters').val(-1);
}

function clearSpecialFilters() {
    $('.sp-filter').removeClass('selected');
    $('.booster, .booster-clone').removeClass(function(i, cName) {
        return (cName.match(/(^|\s)sp-filtered-\S+/g) || []).join(' ');
    });
}

function clearSailorFilters() {
    $('.sl-filter').removeClass('selected');
    $('.booster, .booster-clone').removeClass(function(i, cName) {
        return (cName.match(/(^|\s)sl-filtered-\S+/g) || []).join(' ');
    });
}

function clearCaptainFilters() {
    $('.ca-filter').removeClass('selected');
    $('.booster, .booster-clone').removeClass(function(i, cName) {
        return (cName.match(/(^|\s)ca-filtered-\S+/g) || []).join(' ');
    });
}

function modifyCharStyle(chars) {
    chars = chars.replace(/\[/g, "");
    chars = chars.replace(/\]/g, "");

    if (chars.indexOf("character") != -1 || chars.indexOf("Character") != -1) {
        chars = "[" + chars;

        chars = chars.replace(/character\b/ig, "characters");
        chars = chars.replace(/\, /g, " characters, [");
        chars = chars.replace(/and /g, "characters and [");

        chars = chars.replace(/characters/ig, "characters]");
    }

    return chars;
}

function getClassesForUnit(origId) {
    if (origId > 9000)
        unitId = parseVsUnitId(origId);
    else
        unitId = origId;

    // Search for class
    var uniqueClasses = new Set();
    var unitClass = units[unitId - 1][2];

    if (Array.isArray(unitClass)) {
        if (Array.isArray(unitClass[0])) {
            if (unitClass.length === 2) {
                // VS Units
                var vsClass;
                if (origId % 2 === 1)
                    vsClass = unitClass[0];
                else
                    vsClass = unitClass[1];

                uniqueClasses.add(vsClass[0]);
                uniqueClasses.add(vsClass[1]);
            } else {
                // Dual Units
                for (i = 0; i < 3; i++) {
                    uniqueClasses.add(unitClass[i][0]);
                    uniqueClasses.add(unitClass[i][1]);
                }
            }
        } else {
            uniqueClasses.add(unitClass[0]);
            uniqueClasses.add(unitClass[1]);
        }
    } else {
        uniqueClasses.add(unitClass);
    }

    return uniqueClasses;
}

function getTypesForUnit(origId, types) {
    if (origId > 9000) {
        if (origId % 2 === 1)
            types = types[0];
        else
            types = types[1];
    }

    return types;
}

function getFamiliesForUnit(unitId) {
    if (unitId == 9001)
        family = [ "Kaido" ];
    else if (unitId == 9002)
        family = [ "Charlotte Linlin", "Big Mom" ];
    else if (unitId == 9003)
        family = [ "Portgas D. Ace" ];
    else if (unitId == 9004)
        family = [ "Sakazuki", "Akainu" ];
    else if (unitId == 9005)
        family = [ "Edward Newgate", "Whitebeard" ];
    else if (unitId == 9006)
        family = [ "Shanks" ];
    else
        family = families[unitId];
    return family;
}

function getSupportList() {
    var supportList = {};
    var count = 0;
    for (i in details) {
        if (details[i].support) {
            supportList[count] = {};
            supportList[count].id = i;
            supportList[count].supportChar = modifyCharStyle(details[i].support[0].Characters);
            supportList[count].supportDescription = decorateStr(details[i].support[0].description[4]);
            supportList[count].name = families[i];
            count++;
        }
    }
    // Convert to array
    var arr = $.map(supportList, function(value, index) {
        return [value];
    });
    return arr;
}

function removeSupport(id) {
    var supSlot = $(".support-slot[data-slot=" + id + "]");
    var teamId = supSlot.closest(".team").data("team");
    supSlot.empty();
    supSlot.addClass("empty");

    // Check Team composition
    doTeamBuildCheck(teamId);
}

function swapSupport() {
    from_sup = $(".support-slot[data-slot=" + from_list.attr("id").slice(-2) + "]");
    from_unit = from_sup.find("div").detach();
    to_sup = $(".support-slot[data-slot=" + to_list.attr("id").slice(-2) + "]");
    to_unit = to_sup.find("div").detach();

    if (to_sup.hasClass("empty") && !from_sup.hasClass("empty")) {
        to_sup.removeClass("empty");
        from_sup.addClass("empty");
    } else if (from_sup.hasClass("empty") && !to_sup.hasClass("empty")) {
        to_sup.addClass("empty");
        from_sup.removeClass("empty");
    }

    from_sup.append(to_unit);
    to_sup.append(from_unit);
}

function getWholeTeamFamilyName(teamId, isCheckDupe) {
    var teamFamilyNames = [];
    var dupeNames = [];
    var currentTeam = $(".team[data-team=" + teamId +"]");

    currentTeam.find(".team-slot:not(.friend-cap), .ambush-team-slot:not(.friend-cap), .support-slot:not(.empty)").each(function() {
        var unit = $(this).find("div");

        if (unit.length > 0) {
            var familyNames = families[parseVsUnitId(unit.data("id"))];
            $.each(familyNames, function(i, e) {
                if (!teamFamilyNames.includes(e))
                    teamFamilyNames.push(e);
                else if (isCheckDupe) {
                    if (!dupeNames.includes(e))
                        dupeNames.push(e);
                }
            });
        }
    });

    if (isCheckDupe) {
        for (name of dupeNames)
            putDupeCharacterMsg(teamId, name);
    }

    return teamFamilyNames;
}

function doTeamBuildCheck(teamId) {
    removeTeamBuildMsg(teamId);
    getWholeTeamFamilyName(teamId, true);
    checkSuperSpecialCriteria(teamId);
    checkTeamMiniGuideSpecialMet(teamId);
    checkNoteStatus();
}

function removeTeamBuildMsg(teamId) {
    $(".team-note-div[data-team=" + teamId + "]").find(".team-build-msg").remove();
    $(".team[data-team=" + teamId +"]").find("img.highlight").removeClass("highlight");
}

function putDupeCharacterMsg(teamId, name) {
    team = $(".team[data-team=" + teamId +"]");
    msgStr = ("&nbspDuplicate character: [<mark>" + name + "</mark>]");
    msgDiv = ('<li class="team-build-msg error">' + msgStr + '</li>');
    $(".team-note-div[data-team=" + teamId + "]").find(".team-note-list").append(msgDiv);

    // Highlight all units with that name
    team.find(".team-slot:not(.friend-cap), .ambush-team-slot:not(.friend-cap), .support-slot:not(.empty)").each(function() {
        var unit = $(this).find("div");

        if (unit.length > 0) {
            var familyNames = families[parseVsUnitId(unit.data("id"))];
            if (familyNames.includes(name))
                unit.find('img').addClass('highlight');
        }
    });
}

function checkNoteStatus() {
    if ($("#tm-team-build-note-container").find(".error").length > 0)
        $(".fixed-note-button").addClass("error");
    else
        $(".fixed-note-button").removeClass("error");

    if ($("#tm-team-build-note-container").find(".warning").length > 0)
        $(".fixed-note-button").addClass("warning");
    else
        $(".fixed-note-button").removeClass("warning");

    $(".team-note-div").each(function() {
        $(this).show();

        if ($(this).find(".error").length > 0)
            $("#op-" + ($(this).data("team") + 1)).closest(".op-guide-btn").addClass("error");
        else if ($(this).find(".warning").length > 0) {
            $("#op-" + ($(this).data("team") + 1)).closest(".op-guide-btn").removeClass("error");
            $("#op-" + ($(this).data("team") + 1)).closest(".op-guide-btn").addClass("warning");
        } else {
            $("#op-" + ($(this).data("team") + 1)).closest(".op-guide-btn").removeClass("error");
            $("#op-" + ($(this).data("team") + 1)).closest(".op-guide-btn").removeClass("warning");
            $(this).hide();
        }
    });
}

function checkSuperSpecialCriteriaIsMet(teamId, capId, isFriend) {
    if (capId > 9000)
        capId = parseVsUnitId(capId);

    var superCriteria = details[capId].superSpecialCriteria;
    if (superCriteria) {
        var slotIds = [];
        if (isFriend)
            slotIds = [1,2,3,4,5];
        else
            slotIds = [0,2,3,4,5];

        if (superCriteria.indexOf('must consist of') != -1) {
            var numStr = superCriteria.substring(superCriteria.indexOf('must consist of ') + 16, superCriteria.indexOf('must consist of ') + 18);
            var numClasses = parseInt(numStr, 10);

            if (!isNaN(numClasses)) {
                // Case 1: specific classes crew
                var numMatched = 1;
                var singleClass = superCriteria.substring(superCriteria.indexOf(numStr) + 2, superCriteria.indexOf(' characters'));
                var class1 = superCriteria.substring(superCriteria.indexOf(numStr) + 2, superCriteria.indexOf(' or'));
                var class2 = superCriteria.substring(superCriteria.indexOf('or ') + 3, superCriteria.indexOf(' characters'));

                for (slotId of slotIds) {
                    var unit = $('#team-slot-' + teamId + slotId).find('div');

                    if (unit.length > 0) {
                        var uniqueClasses = getClassesForUnit(unit.data('id'));
                        for (c of uniqueClasses) {
                            if (c == singleClass || c == class1 || c == class2) {
                                numMatched++;
                                break;
                            }
                        }
                    }
                }

                if (numClasses > numMatched) {
                    putSuperNotMetMsg(teamId, superCriteria.substring(superCriteria.indexOf('must consist of')), isFriend, capId);
                    return false;
                }

                return true;
            } else {
                // Case 2: specific crew
                var names = superCriteria.substring(superCriteria.indexOf('must consist of ') + 16);

                for (slotId of slotIds) {
                    var unit = $('#team-slot-' + teamId + slotId).find('div');

                    if (unit.length > 0) {
                        unitId = unit.data('id');
                        var family = getFamiliesForUnit(unitId);
                        var found = false;

                        $.each(family, function(i, e) {
                            if (names.indexOf(e) >= 0) {
                                found = true;
                                return true;
                            }
                        });

                        if (found)
                            return true;
                    }
                }

                putSuperNotMetMsg(teamId, superCriteria.substring(superCriteria.indexOf('must consist of')), isFriend, capId);
            }
        }

        // Case 3: specific specials
        if (superCriteria.indexOf('ATK UP') != -1) {
            if (checkTeamSpecialMet(teamId, filter_map_sp["atk-boost"]) > 0)
                putSuperNotMetMsg(teamId, superCriteria.substring(superCriteria.indexOf('your crew')), isFriend, capId);
        }

        if (superCriteria.indexOf('Orb amplification') != -1) {
            if (checkTeamSpecialMet(teamId, filter_map_sp["orb-boost"]) > 0)
                putSuperNotMetMsg(teamId, superCriteria.substring(superCriteria.indexOf('your crew')), isFriend, capId);
        }
    }

    return true;
}

function checkTeamMiniGuideSpecialMet(teamId) {
    var team = $(".team[data-team=" + teamId +"]");
    var opId = team.data('op_id');
    var op = tm_opponents[tmId][opId];

    var valuableSpecials = ['atk-down-red', 'bind-red', 'blind-red', 'burn-red',
    'cd-red', 'chain-down-red', 'chain-lock-red', 'def-red-e', 'def-perc-red-e',
    'def-thres-red-e', 'def-null-red-e', 'desp-red', 'dmg-up-red', 'para-red',
    'resil-red-e', 'silence-red',];

    var valuableSpecialsWithoutTurns = ['chain-lock', 'chain-bound', 'def-down',
    'dmg-eot', 'poison', 'slot-change', 'slot-change-block'];

    var specialsNeeded = {};

    if (op && op.guide) {
        for (var gi in op.guide) {
            var g = op.guide[gi];

            for (var di in g.detail) {
                var d = g.detail[di];
                var i = 0;

                if (d.type === 'Preemp') {
                    // Gather Immnuity types
                    var immuTypes = [];
                    for (var ai in d.action) {
                        var a = d.action[ai];
                        if (
                            a[0] === 'immu-all' ||
                            a[0] === 'immu-def' ||
                            a[0] === 'immu-poison'
                        )
                            immuTypes.push(a[0]);
                    }

                    for (var ai in d.action) {
                        var a = d.action[ai];
                        var aCounter = counters[a[0]];

                        // For specials with turns
                        var turns = a[1].match(/([0-9])+T/i);
                        var aPos = a[1].match(/Row +([1-3])/i);
                        if (turns && turns[1] != "99") {
                            var numOfTurns = turns[1];
                            var isCaptainRow = (aPos == null || aPos[1] == '1');

                            // Assume max Bind and Despair sockets
                            if (a[0] === 'bind' || a[0] === 'desp') {
                                numOfTurns -= 3;

                                if (numOfTurns <= 0)
                                    continue;
                            }

                            if (aCounter) {
                                if (Array.isArray(aCounter)) {
                                    for (var ac in aCounter) {
                                        if (valuableSpecials.includes(aCounter[ac])) {
                                            var newNumOfTurns = checkTeamSpecialMet(teamId, filter_map_sp[aCounter[ac]], numOfTurns, isCaptainRow);

                                            if (newNumOfTurns < numOfTurns)
                                                numOfTurns = newNumOfTurns;
                                        } else if (valuableSpecialsWithoutTurns.includes(aCounter[ac])) {
                                            if (checkTeamSpecialMet(teamId, filter_map_sp[aCounter[ac]], null, false, immuTypes) == 0)
                                                numOfTurns = 0;
                                        }
                                    }
                                } else {
                                    numOfTurns = checkTeamSpecialMet(teamId, filter_map_sp[aCounter], numOfTurns, isCaptainRow);
                                }

                                // Special not met
                                if (numOfTurns > 0)
                                    specialsNeeded[a[0]] = numOfTurns + (numOfTurns == 1 ? ' turn' : ' turns');
                            }
                        } else if (aCounter && valuableSpecialsWithoutTurns.includes(aCounter)) { // For specials slot-change / slot-block
                            if (checkTeamSpecialMet(teamId, filter_map_sp[aCounter]) != 0)
                                specialsNeeded["Change Orbs"] = a[1];
                        }
                    }
                }
            }
        }
    }

    if (Object.keys(specialsNeeded).length !== 0 && specialsNeeded.constructor === Object)
        putGuideSpecialNotMetMsg(teamId, specialsNeeded);
}

function putGuideSpecialNotMetMsg(teamId, specialsNeeded) {
    var team = $(".team[data-team=" + teamId +"]");
    var msgStr = "&nbspCounter to Boss actions from Preemp may not be met (assuming max Bind and Despair sockets, and max Double Special; currently not including CA, Super SP, Swap Effect, Sailor, and Support):<br>";
    var specialStr = "";

    for (var special in specialsNeeded) {
        var detail = specialsNeeded[special];

        if (special != 'Change Orbs')
            special = icon_tooltips[special];
        specialStr += "[<mark>" + special + ": " + detail + "</mark>]&nbsp&nbsp&nbsp";
    }

    var msgDiv = ('<li class="team-build-msg warning">' + msgStr + specialStr + '</li>');
    $(".team-note-div[data-team=" + teamId + "]").find(".team-note-list").append(msgDiv);
}

function checkTeamSpecialMet(teamId, specialRegex, requiredTurns, isCaptainRow, immuTypes) {
    var team = $(".team[data-team=" + teamId +"]");
    var turnsNeeded = requiredTurns;

    team.find(".booster, .booster-clone").each(function() {
        var unitId = $(this).data('id');
        var origId = unitId;

        if (unitId > 9000)
            unitId = parseVsUnitId(unitId);

        var unitDetail = details[unitId];
        if (unitDetail) {
            var spDesc = unitDetail.special;
            var special;

            if (origId > 9000) {
                // VS Units
                if (origId % 2 === 1)
                    special = spDesc.character1;
                else
                    special = spDesc.character2;
            } else if (Array.isArray(spDesc))
                special = spDesc[spDesc.length - 1].description;
            else if (spDesc.character1)
                special = spDesc.character1;
            else
                special = spDesc;

            if (specialRegex.test(special)) {
                if (turnsNeeded) {
                    // Special Case for Silence and CD Rewind
                    var teamSlot = $(this).closest('.team-slot').data('slot');
                    if (teamSlot == '0' || teamSlot == '1') {
                        if (specialRegex === filter_map_sp['silence-red'] ||
                            specialRegex === filter_map_sp['cd-red']) {
                            // Unit is unable to negate the action as Captain
                            if (isCaptainRow)
                                return;
                        }
                    } else {
                        // TODO: Check if sailor is sufficient
                    }

                    var result = special.match(specialRegex);
                    var resultGroup = [];

                    if (
                        specialRegex === filter_map_sp['atk-down-red'] ||
                        specialRegex === filter_map_sp['bar-red-e'] ||
                        specialRegex === filter_map_sp['blind-red'] ||
                        specialRegex === filter_map_sp['burn-red'] ||
                        specialRegex === filter_map_sp['chain-down-red'] ||
                        specialRegex === filter_map_sp['chain-lock-red'] ||
                        specialRegex === filter_map_sp['def-red-e'] ||
                        specialRegex === filter_map_sp['def-null-red-e'] ||
                        specialRegex === filter_map_sp['def-perc-red-e'] ||
                        specialRegex === filter_map_sp['def-thres-red-e'] ||
                        specialRegex === filter_map_sp['dmg-up-red'] ||
                        specialRegex === filter_map_sp['resil-red-e']
                    )
                        resultGroup = [1, 2, 3, 4, 5];
                    else if (specialRegex === filter_map_sp['cd-red'])
                        resultGroup = [2, 3, 4, 5, 6, 7];
                    else if (
                        specialRegex === filter_map_sp['bind-red'] ||
                        specialRegex === filter_map_sp['desp-red'] ||
                        specialRegex === filter_map_sp['para-red'] ||
                        specialRegex === filter_map_sp['silence-red']
                    )
                        resultGroup = [1, 2, 3, 5, 6];

                    // Loop through regex groups to find the matched # of turns
                    for (var i = 0; i < resultGroup.length; i++) {
                        var numOfTurns = result[resultGroup[i]];

                        if (typeof numOfTurns !== 'undefined' && numOfTurns != null) {
                            if (numOfTurns == 'completely') {
                                turnsNeeded = 0;
                                return;
                            } else {
                                // Check for Double Special
                                var hasDoubleSpecial = false;
                                if (unitDetail.potential) {
                                    var unitLbAbility = unitDetail.potential;

                                    for (var lba in unitLbAbility) {
                                        if (unitLbAbility[lba].Name === 'Double Special Activation') {
                                            hasDoubleSpecial = true;
                                            break;
                                        }
                                    }
                                }

                                if (hasDoubleSpecial)
                                    numOfTurns = numOfTurns * 2;

                                if (numOfTurns >= turnsNeeded) {
                                    turnsNeeded = 0;
                                    return;
                                } else
                                    turnsNeeded -= numOfTurns;
                            }

                            // Exit loop after finding match
                            break;
                        }
                    }
                } else {
                    // Special Case for counters blocked by immunity
                    if (typeof immuTypes !== 'undefined' && immuTypes.length > 0) {
                        if (specialRegex === filter_map_sp['def-down'] && (immuTypes.includes('immu-all') || immuTypes.includes('immu-def')))
                            turnsNeeded = 1;
                        else if (specialRegex === filter_map_sp['poison'] && (immuTypes.includes('immu-all') || immuTypes.includes('immu-def')))
                            turnsNeeded = 1;
                        else
                            turnsNeeded = 0;
                    } else
                        turnsNeeded = 0;

                    return;
                }
            }
        }
    });

    return typeof turnsNeeded === "undefined" ? 1 : turnsNeeded;
}

function checkSuperSpecialCriteria(teamId) {
    var teamCap = $("#team-slot-" + teamId + "1");
    var friendCap = $("#team-slot-" + teamId + "0");

    // Own caption super special criteria not met
    if (!teamCap.is(':empty') && !teamCap.find('div').hasClass("sortable-chosen"))
        checkSuperSpecialCriteriaIsMet(teamId, teamCap.find('div').data('id'), false);

    // Friend caption super special criteria not met
    if (!friendCap.is(':empty') && !friendCap.find('div').hasClass("sortable-chosen"))
        checkSuperSpecialCriteriaIsMet(teamId, friendCap.find('div').data('id'), true);
}

function putSuperNotMetMsg(teamId, msg, isFriend, capId) {
    team = $(".team[data-team=" + teamId +"]");

    if (!isFriend)
        msgStr = "&nbsp(Own caption) ";
    else
        msgStr = "&nbsp(Friend caption) ";

    if (capId == 3472 || capId == 3474 || capId == 3483)
        msgStr = msgStr + "Super special criteria potentially not met (can be met by another option): [<mark>" + msg + "</mark>]";
    else
        msgStr = msgStr + "Super special criteria not met: [<mark>" + msg + "</mark>]";

    msgDiv = ('<li class="team-build-msg warning">' + msgStr + '</li>');
    $(".team-note-div[data-team=" + teamId + "]").find(".team-note-list").append(msgDiv);
}

function clearTeamNotes() {
    $(".team-note-boss").find("span").remove();
    $(".team-note-div").find(".team-build-msg").remove();
    $(".team-note-div").hide();
    $(".fixed-note-button").removeClass("error");
    $(".fixed-note-button").removeClass("warning");
    $(".op-guide-btn").removeClass("error");
    $(".op-guide-btn").removeClass("warning");
    $("img.highlight").removeClass("highlight");
}

$(document).ready(function() {
    // Retrieve Settings
    var server = 'glb'; // Used after content merge

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

    $('.sp-filter').each(function() {
        var filter = $(this).data('filter');
        createTooltip($(this), getIconTooltip(filter));
    });

    $('.sl-filter').each(function() {
        var filter = $(this).data('filter');
        createTooltip($(this), getIconTooltip(filter));
    });

    $('.ca-filter').each(function() {
        var filter = $(this).data('filter');
        createTooltip($(this), getIconTooltip(filter));
    });

    $('.sup-filter').each(function() {
        var filter = $(this).data('filter');
        createTooltip($(this), getIconTooltip(filter));
    });

    if (getUrlParameter('transfer')) {
        // Check Transfer link
        tmId = getUrlParameter('tmId');
        var serverTmp = 'glb'; // Used after content merge

        if ((serverTmp == 'glb' || serverTmp == 'jpn') && init(tmId, serverTmp, true)) {
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

                                if (unitId != 0) {
                                    // Check whether unit is clone and restore unit ID
                                    var isClone = false;
                                    if (unitId < 0) {
                                        isClone = true;
                                        unitId = parseInt(unitId) * -1;
                                    }

                                    var b = $('#booster_' + unitId);
                                    var teamSlot = $('#team-slot-' + teamNum + i);

                                    if (isClone) {
                                        if (b.length != 0) // is Booster
                                            createCloneInSlot(b, teamSlot, false);
                                        else { // Non-Booster
                                            imgDiv = getNonBoosterImg(unitId, teamSlot.closest('.team').data('team'));
                                            teamSlot.append(imgDiv);

                                            // Mirror to Friend Cap slot if it is empty
                                            if (teamSlot.data("slot") == 1)
                                                mirrorToFriendCap(teamSlot.closest('.team'), imgDiv, true);
                                        }
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

                                if (unitId != 0) {
                                    // Restore unit ID
                                    if (unitId < 0)
                                        unitId = parseInt(unitId) * -1;

                                    var b = $('#booster_' + unitId);
                                    var teamSlot = $('#team-slot-' + teamNum + i);

                                    if (b.length != 0) // is Booster
                                        createCloneInSlot(b, teamSlot, true);
                                    else { // Non-Booster
                                        imgDiv = getNonBoosterImg(unitId, teamSlot.closest('.team').data('team'));
                                        teamSlot.append(imgDiv);
                                        // Mirror to Friend Cap slot if it is empty
                                        if (teamSlot.data("slot") == 1)
                                            mirrorToFriendCap(teamSlot.closest('.team'), imgDiv, true);
                                    }
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

            var supportsStr = getUrlParameter('supports');
            var supports = supportsStr.split(',');

            for (var i = 0; i < supports.length; i++) {
                var unitId = supports[i];

                if (unitId !== '-1') {
                    var supSlot = $(".support-slot[data-index=" + i + "]");
                    var imgDiv = $('<div></div>');
                    imgDiv.data("id", unitId);
                    imgDiv.append(createImgHtml(getThumb(unitId), 25, false));
                    supSlot.empty().append(imgDiv);
                    supSlot.removeClass("empty");
                }
            }

            updateAllInfo();

            // Init Team guide specials not met
            for (var teamId = 0; teamId < 6; teamId++)
                doTeamBuildCheck(teamId);

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

            tmId = parsedTmId;
            init(parsedTmId, server);
        }
    }

    // Set Don't Have Mode
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
        to_list = srcDiv;
        from_list = "";

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
                b.data('team', srcDiv.closest('.team').data('team'));
                removeSupport(srcDiv.attr("id").slice(-2));
                if (srcDiv.closest('.team').attr('id') != 'ambush-team') {
                    b.addClass('assigned');
                    if (srcDiv.find('.booster, .booster-clone').length > 0)
                        resetPosition(srcDiv.find('.booster, .booster-clone').detach());

                    b.detach().css({
                        top: 0,
                        left: 0
                    }).prependTo(srcDiv);
                } else
                    createCloneInSlot(b, srcDiv, true);
            }

            // Mirror to Friend Cap slot if it is empty
            if (srcDiv.data('slot') == 1)
                mirrorToFriendCap(srcDiv.closest('.team'), b, true);
        }
        doTeamBuildCheck(to_list.closest('.team').data('team'));

        updateAllInfo();
        $('#unit-modal').modal('hide');

        // Hide tooltip on click
        $(this).tooltip('hide');
    });

    $('#remove-button').click(function() {
        var deleteId = $(this).data('id');
        var teamId = $(this).data("src");

        if (deleteId.toString().indexOf('_clone') == -1 && deleteId !== 0)
            resetPosition($('#booster_' + deleteId).detach());
        else if (deleteId.toString().indexOf('_clone') != -1)
            $("#" + teamId).find(".booster-clone").remove();

        if (teamId != null) {
            removeSupport(teamId.slice(-2));
            doTeamBuildCheck(teamId.slice(-2)[0]);
        }

        $('#unit-modal').modal('hide');
    });

    // OPTC-DB page
    $('#db-button').click(function() {
        var unitId = $(this).data('id');

        if (unitId > 9000)
            unitId = parseVsUnitId(unitId);

        if (unitId) {
            var dbUrl = 'https://optc-db.github.io/characters/#/view/';
            dbUrl += unitId;

            window.open(dbUrl);
        }
    });

    // Mini guide
    $(document).on('click', '.op-guide-btn', function() {
        clearSpecialFilters();
        clearSailorFilters();
        clearCaptainFilters();

        var opId = $(this).closest('.team').data('op_id');
        var op = tm_opponents[tmId][opId];

        if (op) {
            // Reset
            $('#guide-nav-lv').val(1);
            $('#mini-guide-content').empty();
            $('#mini-guide-boss').empty();

            // Populate main boss
            var opName = op.name;
            var opType = op.type;
            if (Array.isArray(opName) && Array.isArray(opType)) {
                for (var i = 0; i < opName.length && i < opType.length; i++) {
                    var opHtml= $('<span></span>');
                    opHtml.html(opName[i]);
                    opHtml.addClass(opType[i]);

                    $('#mini-guide-boss').append(opHtml);
                }
            } else {
                var opHtml = $('<span></span>');
                opHtml.html(opName);
                opHtml.addClass(opType);

                $('#mini-guide-boss').html(opHtml);
            }

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

                        var bossHp = g.hp;
                        var bossAtk = g.atk;

                        if (bossHp == 0) {
                            bossHp = g.hp_;
                            guideStageClone.find('#boss-hp-unconfirmed').css('display', 'flex');
                        } else {
                            guideStageClone.find('#boss-hp-unconfirmed').hide();
                        }

                        if (bossAtk == 0) {
                            bossAtk = g.atk_;
                            guideStageClone.find('#boss-atk-unconfirmed').css('display', 'flex');
                        } else {
                            guideStageClone.find('#boss-atk-unconfirmed').hide();
                        }

                        guideStageClone.find('.guide-boss-hp').text(new Intl.NumberFormat().format(bossHp));
                        guideStageClone.find('.guide-boss-hp-base').val(bossHp);
                        guideStageClone.find('.guide-boss-atk').text(new Intl.NumberFormat().format(bossAtk));
                        guideStageClone.find('.guide-boss-atk-base').val(bossAtk);
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
                                createTooltip(guideActionClone.find('.guide-action-type'), getIconTooltip(a));
                            } else {
                                var guideActionClone = $('#guide-action-clone').clone();
                                var guideActionId = guideStageTypeId + '-a' + i;
                                guideActionClone.attr('id', guideActionId);

                                guideActionClone.find('.guide-action-type').html(decorateSpIcon(a[0], true));
                                createTooltip(guideActionClone.find('.guide-action-type'), getIconTooltip(a[0]));
                                guideActionClone.find('.guide-action-detail').html(decorateStr(a[1], true));

                                var aCounter = counters[a[0]];
                                if (aCounter) {
                                    if (Array.isArray(aCounter)) {
                                        for (var ac in aCounter)
                                            createActionCounterBtn(guideActionClone, aCounter[ac]);
                                    } else
                                        createActionCounterBtn(guideActionClone, aCounter);
                                } else if (a[0] === 'cd-red') {
                                    var tcFilterClone = $('#guide-tc-filter-clone').clone();
                                    tcFilterClone.attr('id', '');

                                    var tcFilterBtn = tcFilterClone.find('.guide-tc-filter');
                                    createTooltip(tcFilterBtn, "Filter these Units");

                                    var tcStr = a[1].substring(a[1].indexOf(', ') + 2);
                                    tcFilterBtn.data('tc', tcStr);

                                    guideActionClone.find('.guide-filter-list').append(tcFilterClone);
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

    // Activate Type Class Filter after clicking from Mini Guide
    $(document).on('click', '.guide-tc-filter', function() {
        clearTypeFilters();
        clearClassFilters();

        $(this).toggleClass('selected');

        // Activate actual Filter
        if ($(this).hasClass('selected')) {
            var tcStr = $(this).data('tc');

            if ("All" != tcStr) {
                var tcMatch = tcStr.match(/(STR|DEX|QCK|PSY|INT|Fighter|Slasher|Striker|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/g);
                var tcTypes = [];
                var tcClasses = [];
                for (var i in tcMatch) {
                    var tc = tcMatch[i];

                    if (tc.match(/(STR|DEX|QCK|PSY|INT)/g)) {
                        tcTypes.push(tc);
                        $('.type-filter.' + tc + '-div').addClass('selected');
                    } else {
                        tcClasses.push(tc);
                        var c = tc.replace(' ', '-').toLowerCase();
                        $('.class-filter.' + c + '-div').addClass('selected');
                    }
                }

                applyTypeFilter(tcTypes);
                applyClassFilter(tcClasses, false, false);
            }
        }
    });

    // Activate Counter Special Filter after clicking from Mini Guide
    $(document).on('click', '.guide-sp-filter', function() {
        $(this).toggleClass('selected');

        // Activate actual Filter
        var filter = $(this).data('filter');
        $('.sp-filter[data-filter=' + filter  + ']').click();
    });

    // Activate Counter Sailor Filter after clicking from Mini Guide
    $(document).on('click', '.guide-sl-filter', function() {
        $(this).toggleClass('selected');

        // Activate actual Filter
        var filter = $(this).data('filter');
        $('.sl-filter[data-filter=' + filter  + ']').click();
    });

    // Activate Counter Captain Filter after clicking from Mini Guide
    $(document).on('click', '.guide-ca-filter', function() {
        $(this).toggleClass('selected');

        // Activate actual Filter
        var filter = $(this).data('filter');
        $('.ca-filter[data-filter=' + filter  + ']').click();
    });

    // Change Boss HP and ATK based on Nav Lv
    $('#guide-nav-lv').change(function() {
        var navLv = parseInt($(this).val());
        var hpMultiplier = 0.1;
        var atkMultiplier = 0.05;

        if (tmId >= 3621) {
            hpMultiplier = 0.2;
            atkMultiplier = 0.075;
        } else if (tmId >= 3094) {
            hpMultiplier = 0.15;
            atkMultiplier = 0.075;
        }

        $('.guide-boss-hp').each(function() {
            var baseBossHp = parseInt($(this).closest('.guide-boss-hp-div').find('.guide-boss-hp-base').val());
            var cBossHp = baseBossHp + (baseBossHp * (navLv - 1) * hpMultiplier);
            $(this).text(new Intl.NumberFormat().format(cBossHp));
        });

        $('.guide-boss-atk').each(function() {
            var baseBossAtk = parseInt($(this).closest('.guide-boss-atk-div').find('.guide-boss-atk-base').val());
            var cBossAtk = baseBossAtk + (baseBossAtk * (navLv - 1) * atkMultiplier);
            $(this).text(new Intl.NumberFormat().format(cBossAtk));
        });
    });

    // Point calculation button
    $('.pts-button').click(function() {
        updatePts($(this));
    });

    $('#pts-all-button').click(updateAllPts);

    // DB Calculator button
    $('.cal-button').click(function() {
        var teamDiv = $(this).closest('.team');
        var team = getTeamUnits(teamDiv);

        var calUrl = 'https://optc-db.github.io/damage/#/transfer/D';

        for (var i = 0; i < team.length; i++) {
            if (team[i] == 0)
                calUrl += '!';
            else {
                var unitId = team[i];

                if (unitId < 0)
                    unitId = Number(unitId) * -1;

                var maxLv = $('#booster_' + unitId).data('max_lv');
                if (!maxLv)
                    maxLv = $('#booster-clone_' + unitId).data('max_lv');
                if (!maxLv)
                    maxLv = $('#booster-clone_' + unitId + '_clone').data('max_lv');

                if (unitId > 9000)
                    unitId = parseVsUnitIdForCalc(unitId);

                calUrl += unitId + ':' + maxLv;

                // Assume Max LB and 300 CC
                calUrl += ':100:100:100:50:0:0';
            }

            if (i != team.length - 1)
                calUrl += ',';
        }

        calUrl += 'C45,10B0D';

        // Append TM Map effect
        if (server === 'glb')
            calUrl += '43';
        else
            calUrl += '44';

        calUrl += 'E1365Q0L0G0R0S100H';
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
        doLoad(tmId);
    });

    // Reset teams
    $('#reset-button').click(function() {
        resetAll();
    });

    function exportImage(windowWidth) {
        $("#tm-team-sets").find(".empty").addClass("hidden");
        $("#tm-team-sets").find(".cal-button").hide();
        $("#tm-team-sets").find(".export-image-info").show();

        var option;
        if (localStorage.getItem('night-mode') == "true")
            option = { windowWidth: windowWidth, allowTaint: true, backgroundColor: '#191919' };
        else
            option = { windowWidth: windowWidth, allowTaint: true };

        html2canvas($("#tm-team-sets")[0], option).then(function(canvas) {
            $("#export-image-modal-body").empty().append(canvas);
        });

        $("#tm-team-sets").find(".cal-button").show();
        $("#tm-team-sets").find(".empty").not(".friend").removeClass("hidden");
        $("#tm-team-sets").find(".export-image-info").hide();
    }

    // Export image
    $('#export-image-button').click(function() {
        if ($(window).width() < 680)
            exportImage(350);
        else
            exportImage(650);
        $("#export-image-modal").modal();
    });

    // Set export image size
    $('.export-image-size').click(function() {
        var windowWidth;
        if ($(this).val() == "3x2")
            windowWidth = 650;
        else
            windowWidth = 350;

        exportImage(windowWidth);
    });

    // Export url
    $('#export-url-button').click(function() {
        var url = 'https://' + window.location.hostname + window.location.pathname;
        url += '?transfer=true';
        url += '&tmId=' + tmId;

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

        // Save supports
        var supports = [];
        $('.support-slot').not('.hidden').each(function() {
            if ($(this).hasClass("empty"))
                supports.push(-1);
            else
                supports.push($(this).find("div").data("id"));
        });

        url += '&supports=' + supports.join();

        $('#export-url-link').val(url);
        $('#export-url-div').show();
    });

    // Copy export url
    $('#copy-url-button').click(function() {
        navigator.clipboard.writeText($('#export-url-link').val());
    });

    // Copy export image
    $('#copy-img-button').click(function() {
        var canvas = $('#export-image-modal-body > canvas').get(0);
        canvas.toBlob(blob => navigator.clipboard.write([
            new ClipboardItem({
                'image/png': blob
            })
        ]));
    });

    // Disable Read-only Mode
    $('#read-only-button').click(function() {
        $('#read-only-button-div').hide();
        $('.not-read-only').prop('disabled', false);
    });

    // Target Pts / Nav Lv Calculation
    $('#target-pts-dd').change(function() {
        $('#target-pts').val($(this).val());
        calculateTargetPts();
    });

    $('#nav-lv').change(calculateNavLv);

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

        applyTypeFilter(typeFilters);
    });

    // Name filter
    $('#name-filter').on('keyup', function() {
        var name = $(this).val().toLowerCase();

        if (name.length == 0) {
            // Clear filters if input is empty
            $('.name-filtered').removeClass('name-filtered');
        } else {
            $('.booster, .booster-clone').each(function() {
                var unit = $(this);
                var unitId = unit.data('id');

                if (unitId > 9000)
                    unitId = parseVsUnitId(unitId);

                var family = families[unitId];

                $.each(family, function(i, e) {
                    if (e.toLowerCase().includes(name)) {
                        unit.removeClass('name-filtered');
                        return false;
                    }

                    unit.addClass('name-filtered');
                });
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
        else if ($(this).val() == 3543) // Carrot & Wanda
            classFilters.push('Fighter', 'Slasher', 'Striker', 'Cerebral', 'Powerhouse');
        else if ($(this).val() == 2336) // TM Law
            classFilters.push('Fighter', 'Slasher', 'Cerebral', 'Free Spirit',);

        for (var i in classFilters) {
            var cf = classFilters[i];
            cf = cf.replace(' ', '-').toLowerCase();
            $('.class-filter.' + cf + '-div').addClass('selected');
        }

        $('#exclude-other-checkbox').addClass('selected');
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
        var filterRegex = filter_map_sp[filter];

        if ($(this).hasClass('selected')) {
            // Clear filters of units filtered by this special
            $(this).removeClass('selected');
            $('.' + filterClass).removeClass(filterClass);
        } else {
            $(this).addClass('selected');

            $('.booster, .booster-clone').each(function() {
                var unitId = $(this).data('id');
                var origId = unitId;

                if (unitId > 9000)
                    unitId = parseVsUnitId(unitId);

                var unitDetail = details[unitId];

                if (unitDetail) {
                    var spDesc = unitDetail.special;

                    var special;
                    if (origId > 9000) {
                        // VS Units
                        if (origId % 2 === 1)
                            special = spDesc.character1;
                        else
                            special = spDesc.character2;
                    } else if (Array.isArray(spDesc))
                        special = spDesc[spDesc.length - 1].description;
                    else if (spDesc.character1)
                        special = spDesc.character1;
                    else if (spDesc.llbbase)
                        special = spDesc.llbbase;
                    else
                        special = spDesc;

                    if (!filterRegex.test(special))
                        $(this).addClass(filterClass);
                }
            });
        }
    });

    // Sailor Filter
    $('.sl-filter').click(function() {
        var filter = $(this).data('filter');
        var filterClass = 'sl-filtered-' + filter;
        var filterRegex = filter_map_sl[filter];

        if ($(this).hasClass('selected')) {
            // Clear filters of units filtered by this special
            $(this).removeClass('selected');
            $('.' + filterClass).removeClass(filterClass);
        } else {
            $(this).addClass('selected');

            $('.booster, .booster-clone').each(function() {
                var unitId = $(this).data('id');

                if (unitId > 9000)
                    unitId = parseVsUnitId(unitId);

                var unitDetail = details[unitId];

                if (unitDetail) {
                    var sailor = unitDetail.sailor;

                    if (typeof sailor === 'object') {
                        var filtered = false;
                        for (var sl in sailor) {
                            if (filterRegex.test(sailor[sl])) {
                                filtered = false;
                                break;
                            } else
                                filtered = true;
                        }

                        if (filtered)
                            $(this).addClass(filterClass);
                    } else {
                        if (!filterRegex.test(sailor))
                            $(this).addClass(filterClass);
                    }
                }
            });
        }
    });

    // Captain Filter
    $('.ca-filter').click(function() {
        var filter = $(this).data('filter');
        var filterClass = 'ca-filtered-' + filter;
        var filterRegex = filter_map_ca[filter];

        if ($(this).hasClass('selected')) {
            // Clear filters of units filtered by this special
            $(this).removeClass('selected');
            $('.' + filterClass).removeClass(filterClass);
        } else {
            $(this).addClass('selected');

            $('.booster, .booster-clone').each(function() {
                var unitId = $(this).data('id');
                var origId = unitId;

                if (unitId > 9000)
                    unitId = parseVsUnitId(unitId);

                var unitDetail = details[unitId];

                if (unitDetail) {
                    var caDesc = unitDetail.captain;

                    var ca;
                    if (origId > 9000) {
                        // VS Units
                        if (origId % 2 === 1)
                            ca = caDesc.character1;
                        else
                            ca = caDesc.character2;
                    } else if (caDesc.combined) {
                        ca = caDesc.combined;
                    } else if (caDesc.base) {
                        if (caDesc.llblevel1)
                            ca = caDesc.llblevel1;
                        else if (caDesc.llbbase)
                            ca = caDesc.llbbase;
                        else if (caDesc.level1) {
                            var lblv = 2;
                            ca = caDesc.level1;
                            while (caDesc['level' + lblv]) {
                                ca = caDesc['level' + lblv];
                                lblv++;
                            }
                        }
                    } else
                        ca = caDesc;

                    if (!filterRegex.test(ca))
                        $(this).addClass(filterClass);
                }
            });
        }
    });

    // Support filter
    var supportFilters = [];
    $('.sup-filter').click(function() {
        var filter = $(this).data('filter');

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            supportFilters.splice(supportFilters.indexOf(filter), 1);
        } else {
            $(this).addClass('selected');
            supportFilters.push(filter);
        }

        if (supportFilters.length == 0) {
            // Clear filters if no Support Filters are currently selected
            supportTable.column(2).search("").draw();
        } else {
            var filtersStr = "";

            for (f of supportFilters) {
                var filterRegex = filter_map_sp[f];
                if (
                    'bind-red' === f
                    || 'slot-change' === f
                    || 'slot-change-block' === f
                )
                    filterRegex = filter_map_sup[f];

                filterRegexStr = String(filterRegex);
                filterRegexStr = filterRegexStr.substring(1, filterRegexStr.length - 2);

                filtersStr = filtersStr + "(?=.*" + filterRegexStr + ")";
            }

            supportTable.column(2).search(filtersStr, true, false).draw();
        }
    });

    // Clear Filters
    $('.filter-clear-btn').click(function() {
        var target = $(this).data('target');

        if ('type' === target) {
            clearTypeFilters();
            typeFilters = [];
        } else if ('name' === target) {
            clearNameFilter();
        } else if ('class' === target) {
            clearClassFilters();
            classFilters = [];
        } else if ('special' === target) {
            clearSpecialFilters();
        } else if ('sailor' === target) {
            clearSailorFilters();
        } else if ('captain' === target) {
            clearCaptainFilters();
        }
    });

    $('.filter-clear-all-btn').click(function() {
        clearTypeFilters();
        typeFilters = [];

        clearNameFilter();

        clearClassFilters();
        classFilters = [];

        clearSpecialFilters();

        clearSailorFilters();

        clearCaptainFilters();
    });

    $('.sup-filter-clear-all-btn').click(function() {
        $('.sup-filter.selected').each(function() {
            $(this).removeClass('selected');
        });

        // Clear filters
        supportFilters = [];
        supportTable.column(2).search("").draw();
    });

    // Help button
    $('#help-button').click(function() {
        $('#help-modal').modal();
    });

    // TM selection dropdown
    $('#tm-select').change(function() {
        var parsedTmId = parseInt($(this).val());

        tmId = parsedTmId;
        init(parsedTmId, server);
        $('.tm-select').text($("#tm-select option:selected").text());
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
        if ($(this).data("status") == "down") {
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
    var ids = ["booster_2_3x", "booster_2_25x", "booster_2_2x", "booster_2x", "booster_1_85x", "booster_1_8x", "booster_1_8x_v2", "booster_1_75x",
                "booster_1_7x", "booster_1_6x", "booster_1_5x", "booster_1_4x", "booster_1_4x_v2", "booster_1_35x", "booster_1_35x_valt",
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
            name: 'dont-have-group',
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
                    put: 'booster-group'
                },
                draggable: ".booster, .non-booster",
                animation: 150,
                delay: 60, // time in milliseconds to define when the sorting should start
                delayOnTouchOnly: true,
                resetPositionOnSpill: true, // Reset booster to original position it is spilled
                onStart: function (/**Event*/evt) {
                    var item = $("#" + evt.item.id);
                    from_list = item.closest('.team-slot, .ambush-team-slot');
                    item.tooltip('hide');
                },
                onAdd: function(evt) {
                    var item = $("#" + evt.item.id);

                    var assigned = item.hasClass("assigned");
                    to_list = $("#" + evt.to.id);
                    from_list = $("#" + evt.from.id);

                    if (evt.to.id.charAt(11) == '0')
                        item.closest('.team').find('.booster-fc').remove();

                    to_list.find('.booster-ambush').remove();
                    to_list.find('.booster, .non-booster').each(function() {
                        if ($(this).attr("id") != item.attr("id")) {
                            if (assigned) {
                                from_list.append($(this));
                                swapHandler($(this), from_list);
                            } else {
                                if ($(this).hasClass("non-booster"))
                                    $(this).remove();
                                else
                                    resetPosition($(this));
                            }
                        }
                    });

                    var assignedTeam = to_list.closest('.team').data('team');

                    // Remove corresponding Clone and support if moved to another Team
                    if (item.data('team') !== -1 && item.data('team') !== assignedTeam) {
                        $('#booster-clone_' + item.data('id') + '_clone').remove();
                        removeSupport(from_list.attr("id").slice(-2));
                    } else if (to_list.data('slot') == 0) {
                        removeSupport(to_list.attr("id").slice(-2));
                        removeSupport(from_list.attr("id").slice(-2));
                    } else {
                        // Move unit support to current place
                        swapSupport();
                    }

                    item.data('team', assignedTeam);
                    item.addClass('assigned');

                    // Mirror to Friend Cap slot if it is empty
                    if (to_list.data('slot') == 1 && !item.hasClass("booster-clone"))
                        mirrorToFriendCap(to_list.closest('.team'), item, true);

                    updateAllInfo();

                    if (from_list.hasClass('team-slot'))
                        doTeamBuildCheck(from_list.closest('.team').data('team'));

                    doTeamBuildCheck(to_list.closest('.team').data('team'));
                },
                onEnd: function(evt) {
                    updateAllInfo();
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
                put: 'booster-group'
            },
            draggable: ".booster-clone:not(.booster-ambush-fc), .non-booster",
            animation: 150,
            delay: 60, // time in milliseconds to define when the sorting should start
            delayOnTouchOnly: true,
            resetPositionOnSpill: true, // Reset booster to original position it is spilled
            onStart: function (/**Event*/evt) {
                var item = $("#" + evt.item.id);
                from_list = item.closest('.team-slot, .ambush-team-slot');
                item.tooltip('hide');
            },
            onAdd: function(evt) {
                var item = $("#" + evt.item.id);
                to_list = $("#" + evt.to.id);
                from_list = $("#" + evt.from.id);

                if (evt.to.id.charAt(11) == '0')
                    $(".booster-ambush-fc").remove();

                if (item.hasClass('booster-clone')) {
                    to_list.find( ".booster-clone" ).each(function() {
                        if ($(this).attr("id") != item.attr("id"))
                            from_list.append($(this));
                    });

                    if (to_list.data('slot') == 0) {
                        removeSupport(to_list.attr("id").slice(-2));
                        removeSupport(from_list.attr("id").slice(-2));
                    } else // Swap support inside Ambush team
                        swapSupport();
                } else {
                    createCloneInSlot(item, to_list, true);

                    // Reset current support
                    removeSupport(to_list.attr("id").slice(-2));
                }

                // Mirror to Friend Cap slot if it is empty
                if (to_list.data('slot') == 1)
                    mirrorToFriendCap(to_list.closest('.team'), item, true, true);

                updateAllInfo();

                if (from_list.hasClass('ambush-team-slot'))
                    doTeamBuildCheck(from_list.closest('.team').data('team'));

                doTeamBuildCheck(to_list.closest('.team').data('team'));
            },
            onEnd: function() {
                updateAllInfo();
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

    // Note button events
    $(".fixed-note-button").click(function() {
        if ($(this).hasClass("active")) {
            $(".fixed-note-button").removeClass("active");
            $("#tm-team-build-note-container").fadeOut("slow");
        } else {
            $(".fixed-note-button").addClass("active");
            $("#tm-team-build-note-container").fadeIn("slow");
        }
    });

    // Support Filter button events
    $(".sup-filter-button").click(function() {
        if ($(this).hasClass("active")) {
            $("#support-filters").hide();
            $(this).removeClass("active");
        } else {
            $("#support-filters").show();
            $(this).addClass("active");
        }
    });

    var supportUnits = getSupportList();
    var supportTable = $('#support-table').DataTable({
        "data": supportUnits,
        "columns": [
            { "data": "id" },
            { "data": "supportChar" },
            { "data": "supportDescription" },
            { "data": "name" }
        ],
        "columnDefs": [
            {
                "targets": [ 1,3 ],
                "visible": false
            }
        ],
        "ordering":  false,
        "autoWidth": false,
        "search": {
            "regex": true
        },
        "rowCallback": function(row, data, index) {
            var imageDiv = $("<div></div>");
            imageDiv.append(createImgHtml(getThumb(data.id), 40, false));
            $('td:eq(0)', row).html(imageDiv);
        }
    });

    var currentSupportSlotId;
    $(".support-slot").click(function() {
        currentSupportSlotId = $(this).data("slot");
        teamSlot = $("#team-slot-" + $(this).data("slot") + "");
        var unit = teamSlot.find(".booster, .booster-clone");

        if (unit.length > 0) {
            var searchStr = "\\[All characters\\]";
            var origId = unit.data("id");
            var uniqueClasses = getClassesForUnit(origId);

            uniqueClasses.forEach(function(value) {
                searchStr = searchStr + "|\\[" + value + " characters\\]";
            });

            // Search for type
            types = getTypesForUnit(origId, unit.data('type'));
            if (Array.isArray(types)) {
                for (type of types) {
                    searchStr = searchStr + "|\\[" + type + " characters\\]";

                    uniqueClasses.forEach(function(value) {
                        searchStr = searchStr + "|\\[" + type + " " + value + " characters\\]";
                    });
                }
            } else {
                searchStr = searchStr + "|\\[" + types + " characters\\]";

                uniqueClasses.forEach(function(value) {
                    searchStr = searchStr + "|\\[" + types + " " + value + " characters\\]";
                });
            }

            // Search for name
            var family = getFamiliesForUnit(origId);
            $.each(family, function(i, e) {
                searchStr = searchStr + "|" + e;
            });

            // Search for cost
            var cost = units[parseVsUnitId(origId)-1][4];
            if (cost <= 29)
                searchStr = searchStr + "|cost 29 or less|cost 40 or less";
            else if (cost <= 40)
                searchStr = searchStr + "|cost 40 or less";

            supportTable.column(0).search("").draw();
            supportTable.column(1).search(searchStr, true, false).draw();
        } else {
            supportTable.column(0).search("No Results").draw();
        }

        // Get whole team's family name
        var names = getWholeTeamFamilyName($(this).closest('.team').data('team'));
        var nameStr = "^";

        for (name of names)
            nameStr = nameStr + "(?!.*(^|,)" + name + "($|,))";

        nameStr += ".*$";
        supportTable.column(3).search(nameStr, true, false).draw();
        $("#support-character-modal").modal();
    });

    // Add Support
    $('#support-table tbody').on('click', 'tr', function () {
        var unitId = supportTable.row( this ).data().id;
        var supSlot = $(".support-slot[data-slot=" + currentSupportSlotId + "]");
        var imgDiv = $('<div></div>');
        imgDiv.data("id", unitId);
        imgDiv.append(createImgHtml(getThumb(unitId), 25, false));
        supSlot.empty().append(imgDiv);
        supSlot.removeClass("empty");

        // Check Team composition
        var teamId = supSlot.closest(".team").data("team");
        doTeamBuildCheck(teamId);

        $('#support-character-modal').modal('hide');
    });

    $(".sup-filter-remove-btn").click(function() {
        removeSupport(currentSupportSlotId);
        $('#support-character-modal').modal('hide');
    });

    $("#non-booster-form").submit(function(evt) {
        evt.preventDefault();

        var unitId = parseInt($("#non-booster-unit").val());
        var teamSlot = $("#non-booster-unit").data('src');
        var teamSlotDiv = $('#' + teamSlot);

        if (teamSlotDiv.find('.booster').length > 0)
            resetPosition(teamSlotDiv.find('.booster').detach());

        if (teamSlotDiv.find('.booster-clone').length > 0)
            teamSlotDiv.find('.booster-clone').remove();

        from_list = "";
        to_list = teamSlotDiv;
        removeSupport(to_list.attr("id").slice(-2));

        // Is booster
        if ($("#booster_" + unitId).length > 0) {
            b = $("#booster_" + unitId);
            from_list = b.parent();
            removeSupport(from_list.attr("id").slice(-2));

            if (teamSlotDiv.hasClass("ambush-team-slot")) {
                createCloneInSlot(b, teamSlotDiv, true);

                // Mirror to Friend Cap slot if it is empty
                if (teamSlotDiv.data("slot") == 1)
                    mirrorToFriendCap(teamSlotDiv.closest('.team'), b, true, true);
            } else {
                $('#booster-clone_' + unitId + '_clone').remove();
                b.addClass('assigned');
                b.data('team', teamSlotDiv.closest(".team").data("team"));

                b.detach().css({
                    top: 0,
                    left: 0
                }).prependTo(teamSlotDiv);

                // Mirror to Friend Cap slot if it is empty
                if (teamSlotDiv.data("slot") == 1)
                    mirrorToFriendCap(teamSlotDiv.closest('.team'), b, true);
            }
        } else { // Non-Boost unit
            imgDiv = getNonBoosterImg(unitId, teamSlotDiv.closest('.team').data('team'));
            teamSlotDiv.append(imgDiv);

            // Mirror to Friend Cap slot if it is empty
            if (teamSlotDiv.data("slot") == 1)
                mirrorToFriendCap(teamSlotDiv.closest('.team'), imgDiv, true);
        }

        doTeamBuildCheck(to_list.closest('.team').data('team'));
        $('#unit-modal').modal('hide');
    });
});
