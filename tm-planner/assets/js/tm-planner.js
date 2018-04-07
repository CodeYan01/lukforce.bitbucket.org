function highlightNavbar() {
    // Highlight navbar
    $('#tm-planner-nav').addClass('active');
}

function getThumb(thumbId) {
    if (thumbId === -1 || thumbId === 2201)
        return 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';

    // Zero pad IDs to get correct thumb
    var paddedThumbId = ('0000' + thumbId).slice(-4);

    // Special case for Aokiji 575 with extra 0
    if (thumbId === '575')
        paddedThumbId = "0" + paddedThumbId;

    return 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + paddedThumbId + '.png';
}

function createImgHtml(imgSrc, size) {
    var imgHtml = $('<img></img>');
    imgHtml.attr('src', imgSrc);
    imgHtml.attr('height', size);
    imgHtml.attr('width', size);

    return imgHtml;
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam)
            return sParameterName[1] === undefined ? true : sParameterName[1];
    }
};

function getBoosters(tmId) {
    var boosters = tm_boosters[tmId];

    for (var i = 0; i < boosters.length; i++) {
        var b = boosters[i];

        var imgDiv = $('<div></div>');
        imgDiv.append(createImgHtml(getThumb(b.id), 40));
        imgDiv.addClass('booster');
        imgDiv.data('id', b.id);
        imgDiv.data('x_pts', b.x_pts);
        imgDiv.data('type', units[b.id - 1][1]);

        var unitClass = units[b.id - 1][2];
        if (Array.isArray(unitClass)) {
            imgDiv.data('class1', unitClass[0]);
            imgDiv.data('class2', unitClass[1]);
        } else {
            imgDiv.data('class1', unitClass);
        }

        imgDiv.attr('id', 'booster_' + b.id);
        imgDiv.attr('draggable', true);
        imgDiv.css('display', 'inline-block');

        var _x_pts = b.x_pts.toString().replace(".", "_");
        imgDiv.data('_x_pts', _x_pts);

        if (b.x_pts !== 1.2)
            $('#booster_' + _x_pts + 'x').append(imgDiv);
        else {
            imgDiv.data('_type', b.type);
            $('#booster_' + _x_pts + 'x_' + b.type).append(imgDiv);
        }

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
                    var _x_pts = $(this).data('_x_pts');
                    var _type = $(this).data('_type');

                    if (_type)
                        $('#booster_' + _x_pts + 'x_' + _type).append($(this));
                    else
                        $('#booster_' + _x_pts + 'x').append($(this));

                    return true;
                }
            },
        });
    }
}

function getOpponents(tmId) {
    var opponents = tm_opponents[tmId];

    for (var i = 0; i < opponents.length; i++)
        $('#op-' + (i + 1)).text(opponents[i]);

    var imgHtml = createImgHtml(getThumb(tmId), 60);
    $('#thumb-div').append(imgHtml);
}

function init(tmId) {
    $('#tm-select').val(tmId);
    getBoosters(tmId);
    getOpponents(tmId);
    $('.sl-btn').attr('disabled', false);

    // Retrieve last save time
    if (localStorage.getItem('lastSave_' + tmId) !== null)
        $('#last-save').text(localStorage.getItem('lastSave_' + tmId));
}

function resetPosition(unit) {
    var _x_pts = unit.data('_x_pts');
    var _type = unit.data('_type');

    if (_type)
        $('#booster_' + _x_pts + 'x_' + _type).append(unit);
    else
        $('#booster_' + _x_pts + 'x').append(unit);
}

function resetAll() {
    $('.team-slot').each(function() {
        if ($(this).find('.booster').length > 0)
            resetPosition($(this).find('.booster').detach());
    });

    $('#dont-have').find('.booster').each(function() {
        resetPosition($(this).detach());
    });
}

function getTeamUnits(team) {
    var teamUnits = [0, 0, 0, 0, 0, 0];

    team.find('.team-slot').each(function() {
        var slot_num = $(this).data('slot');

        if ($(this).find('.booster').length !== 0)
            teamUnits[slot_num] = $(this).find('.booster').data('id');
    });

    return teamUnits;
}

function updatePts(btn) {
    var x_pts = 1;
    var fcap_x_pts = 0;
    var cap_x_pts = 0;

    btn.closest('.team').find('.team-slot').each(function() {
        var slot_num = $(this).data('slot');

        if ($(this).find('.booster').length !== 0) {
            var slot_x_pts = Number($(this).find('.booster').data('x_pts'));
            x_pts = x_pts * slot_x_pts;

            if (slot_num == 0)
                fcap_x_pts = slot_x_pts;
            else if (slot_num == 1)
                cap_x_pts = slot_x_pts;
        }
    });

    // Assuming same Friend Captain and add the multiplier one more time
    if (fcap_x_pts == 0 && cap_x_pts != 0)
        x_pts = x_pts * cap_x_pts;

    btn.closest('.team').find('.x_pts').text(x_pts.toFixed(2));
}

function updateAllPts() {
    $('.pts-button').each(function() {
        updatePts($(this));
    });
}

$(document).ready(function() {
    var tmId = getUrlParameter('tmId');

    if (tmId)
        init(tmId);

    $('.team-slot').droppable({
        accept: '.booster',
        activeClass: 'ui-state-hover',
        drop: function(event, ui) {
            ui.draggable.position({
                of: $(this),
                my: 'left top',
                at: 'left top'
            });

            // Replace existing units and put the previous unit back
            if ($(this).find('.booster').length > 0)
                resetPosition($(this).find('.booster').detach());

            // Put new unit in place
            $(ui.draggable).detach().css({
                top: 0,
                left: 0
            }).prependTo($(this));

            /* Mirror to Friend Cap slot
            if ($(this).data('slot') == 1) {
                var friendCapSlot = $(this).closest('.team').find('.friend-cap');
                friendCapSlot.find('.booster-clone').remove();

                var clone = $(ui.draggable).clone();
                var origId = $(ui.draggalbe).attr('id');

                clone.attr('id', origId + '_clone');
                clone.removeClass('booster');
                clone.addClass('booster-clone');
                clone.css('z-index', 0);
                clone.css('position', 'absolute');

                clone.css({
                    top: 0,
                    left: 0
                }).prependTo(friendCapSlot);
            }*/
        }
    });

    $('#dont-have').droppable({
        accept: '.booster',
        activeClass: 'ui-state-hover',
        drop: function(event, ui) {
            $(ui.draggable).detach().css({
                top: 0,
                left: 0
            }).appendTo($(this));
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
        var team = getTeamUnits($(this).closest('.team'));

        // Assign same Captain if Friend Captain is not picked
        if (team[0] == 0)
            team[0] = team[1];

        var calUrl = 'http://optc-db.github.io/damage/#/transfer/D';

        for (var i = 0; i < team.length; i++) {
            if (team[i] == 0)
                calUrl += '!';
            else
                calUrl += team[i] + ':99';

            if (i != team.length - 1)
                calUrl += ',';
        }

        calUrl += 'C33,10B0D0E0Q0L0G0R0S100H';

        window.open(calUrl);
    });

    // Save teams
    $('#save-button').click(function() {
        var teams = {};

        $('.team').each(function() {
            var team_num = $(this).data('team');
            var team = getTeamUnits($(this));
            teams[team_num] = team;
        });

        localStorage.setItem('teams_' + tmId, JSON.stringify(teams));

        var dontHaves = [];

        $('#dont-have').find('.booster').each(function() {
            dontHaves.push($(this).data('id'));
        });

        localStorage.setItem('dontHaves_' + tmId, JSON.stringify(dontHaves));

        // Update last save time
        var now = moment().format('lll');
        $('#last-save').text(now);
        localStorage.setItem('lastSave_' + tmId, now);
    });

    // Load teams
    $('#load-button').click(function() {
        if (localStorage.getItem('lastSave_' + tmId) !== null) {
            resetAll();

            var teams = JSON.parse(localStorage.getItem('teams_' + tmId));

            $.each(teams, function(index, team) {
                for (var i = 0; i < team.length; i++) {
                    var unitId = team[i];

                    if (unitId !== 0) {
                        var teamSlot = $('#team-slot-' + index + i);

                        $('#booster_' + unitId).detach().css({
                            top: 0,
                            left: 0
                        }).prependTo(teamSlot);
                    }
                }
            });

            var dontHaves = JSON.parse(localStorage.getItem('dontHaves_' + tmId));

            for (var i = 0; i < dontHaves.length; i++) {
                var unitId = dontHaves[i];

                if (unitId !== 0) {
                    $('#booster_' + unitId).detach().css({
                        top: 0,
                        left: 0
                    }).prependTo($('#dont-have'));
                }
            }

            updateAllPts();
        }
    });

    // Reset teams
    $('#reset-button').click(function() {
        resetAll();
    });

    // Type filter
    $('.type-filter').click(function() {
        var filter = $(this).data('filter');
        $('.booster').removeClass('filtered');

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $('.filter').removeClass('selected');
            $(this).addClass('selected');

            $('.booster').each(function() {
                if ($(this).data('type') !== filter)
                    $(this).addClass('filtered');
            });
        }
    });

    // Class filter
    $('.class-filter').click(function() {
        var filter = $(this).data('filter');
        $('.booster').removeClass('filtered');

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $('.filter').removeClass('selected');
            $(this).addClass('selected');

            $('.booster').each(function() {
                if ($(this).data('class2')) {
                    if ($(this).data('class1') !== filter && $(this).data('class2') !== filter)
                        $(this).addClass('filtered');
                } else {
                    if ($(this).data('class1') !== filter)
                        $(this).addClass('filtered');
                }
            });
        }
    });

    // TM selection dropdown
    $('#tm-select').change(function() {
        init($(this).val());
        tmId = $(this).val();
    });
});
