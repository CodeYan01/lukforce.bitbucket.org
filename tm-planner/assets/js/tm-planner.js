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
                    resetPosition($(this));
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
    unit.removeClass('assigned');
    unit.removeClass('assigned-dh');

    var unitId = unit.data('id');
    var _x_pts = unit.data('_x_pts');
    var _type = unit.data('_type');

    if (_type)
        $('#booster_' + _x_pts + 'x_' + _type).append(unit);
    else
        $('#booster_' + _x_pts + 'x').append(unit);

    // Remove corresponding Clone
    $('#booster-clone_' + unitId + '_clone').remove();
}

function resetAll() {
    $('.team-slot').each(function() {
        if ($(this).find('.booster').length > 0)
            resetPosition($(this).find('.booster').detach());
    });

    $('#dont-have').find('.booster').each(function() {
        resetPosition($(this).detach());
    });

    $('.booster-clone').remove();

    updateAllPts();
}

function populateUnitSelectModal(src, deleteId) {
    // Reset
    $('.remove-button-el').hide();
    $('.available-units-el').hide();
    $('#available-units').empty();
    $('.units-in-team-el').hide();
    $('#units-in-team').empty();

    if (deleteId !== 0) {
        $('#remove-button').data('id', deleteId);
        $('.remove-button-el').show();
    }

    if (src) {
        // Available units
        $('.booster').not('.assigned, .assigned-dh, .filtered').each(function() {
            var b = $(this);
            var unitId = b.data('id');

            var imgDiv = $('<div></div>');
            imgDiv.append(createImgHtml(getThumb(unitId), 40));
            imgDiv.data('id', unitId);
            imgDiv.data('src', src);
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
                imgDiv.append(createImgHtml(getThumb(unitId), 40));
                imgDiv.data('id', unitId);
                imgDiv.data('src', src);
                imgDiv.addClass('select-modal-unit');
                imgDiv.addClass('is-clone');
                imgDiv.css('display', 'inline-block');

                $('#units-in-team').append(imgDiv);
            });

            $('.units-in-team-el').show();
        }
    }
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

    if (validFill) {
        if (friendCapSlot.find('.booster').length > 0)
            resetPosition(friendCapSlot.find('.booster').detach());

        var clone = cap.clone();
        var origId = cap.data('id');

        clone.attr('id', 'booster-clone_' + origId + '_clone');
        clone.data('id', cap.data('id'));
        clone.data('x_pts', cap.data('x_pts'));
        clone.data('type', cap.data('type'));
        clone.data('class1', cap.data('class1'));
        clone.data('class2', cap.data('class2'));
        clone.removeClass('booster');
        clone.addClass('booster-clone');

        clone.css({
            top: 0,
            left: 0
        }).prependTo(friendCapSlot);
    }
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
    var teamDiv = btn.closest('.team');
    var x_pts = 1;
    var fcap_x_pts = 0;
    var cap_x_pts = 0;

    teamDiv.find('.team-slot').each(function() {
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

    // Check for clone if Friend Captain is not picked
    if (fcap_x_pts == 0 && teamDiv.find('.booster-clone').length > 0) {
        var friendCapClone = teamDiv.find('.booster-clone');
        x_pts = x_pts * friendCapClone.data('x_pts');
    }

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
            $(ui.draggable).addClass('assigned');

            ui.draggable.position({
                of: $(this),
                my: 'left top',
                at: 'left top'
            });

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

            // Mirror to Friend Cap slot if it is empty
            if ($(this).data('slot') == 1)
                mirrorToFriendCap($(this).closest('.team'), $(ui.draggable), true);
        }
    });

    $('#dont-have').droppable({
        accept: '.booster',
        activeClass: 'ui-state-hover',
        drop: function(event, ui) {
            $(ui.draggable).addClass('assigned-dh');

            $(ui.draggable).detach().css({
                top: 0,
                left: 0
            }).insertBefore($('#add-button'));
        }
    });

    // Click to add / remove
    $('.team-slot').click(function() {
        var deleteId = 0;
        var src = $(this).attr('id');

        if ($(this).find('.booster').length > 0)
            deleteId = $(this).find('.booster').data('id');

        populateUnitSelectModal(src, deleteId);
        $('#unit-select-modal').modal();
    });

    $('#add-button').click(function() {
        var deleteId = 0;
        var src = 'dont-have';

        populateUnitSelectModal(src, deleteId);
        $('#unit-select-modal').modal();
    });

    $(document).on('click', '.assigned-dh, .booster-clone', function() {
        var deleteId = $(this).data('id');
        var src = null;

        if ($(this).hasClass('booster-clone'))
            deleteId = deleteId + '_clone';

        populateUnitSelectModal(src, deleteId);
        $('#unit-select-modal').modal();
    });

    $(document).on('click', '.select-modal-unit', function() {
        var unitId = $(this).data('id');
        var src = $(this).data('src');
        var b = $('#booster_' + unitId);

        var srcDiv;
        if (src == 'add-button') {
            srcDiv = $('#dont-have');
            b.addClass('assigned-dh');
        } else {
            srcDiv = $('#' + src);
            b.addClass('assigned');
        }

        if ($(this).hasClass('is-clone')) {
            mirrorToFriendCap(srcDiv.closest('.team'), b, false);
        } else {
            if (srcDiv.find('.booster').length > 0)
                resetPosition(srcDiv.find('.booster').detach());

            b.detach().css({
                top: 0,
                left: 0
            }).prependTo(srcDiv);

            // Mirror to Friend Cap slot if it is empty
            if (srcDiv.data('slot') == 1)
                mirrorToFriendCap(srcDiv.closest('.team'), b, true);
        }

        $('#unit-select-modal').modal('hide');
    });

    $('#remove-button').click(function() {
        var deleteId = $(this).data('id');

        if (deleteId.toString().indexOf('_clone') == -1 && deleteId !== 0)
            resetPosition($('#booster_' + deleteId).detach());
        else if (deleteId.toString().indexOf('_clone') != -1)
            $('#booster-clone_' + deleteId).remove();

        $('#unit-select-modal').modal('hide');
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

        // Check for clone if Friend Captain is not picked
        if (team[0] == 0 && teamDiv.find('.booster-clone').length > 0) {
            var friendCapClone = teamDiv.find('.booster-clone');
            team[0] = friendCapClone.data('id');
        }

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
                        var b = $('#booster_' + unitId);
                        var teamSlot = $('#team-slot-' + index + i);

                        b.addClass('assigned');
                        b.detach().css({
                            top: 0,
                            left: 0
                        }).prependTo(teamSlot);

                        // Mirror to Friend Cap slot if it is empty
                        if (i == 1)
                            mirrorToFriendCap(teamSlot.closest('.team'), b, true);
                    }
                }
            });

            var dontHaves = JSON.parse(localStorage.getItem('dontHaves_' + tmId));

            for (var i = 0; i < dontHaves.length; i++) {
                var unitId = dontHaves[i];

                if (unitId !== 0) {
                    var b = $('#booster_' + unitId);

                    b.addClass('assigned-dh');
                    b.detach().css({
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
        $('.booster, .booster-clone').removeClass('filtered');

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $('.filter').removeClass('selected');
            $(this).addClass('selected');

            $('.booster, .booster-clone').each(function() {
                if ($(this).data('type') !== filter)
                    $(this).addClass('filtered');
            });
        }
    });

    // Class filter
    $('.class-filter').click(function() {
        var filter = $(this).data('filter');
        $('.booster, .booster-clone').removeClass('filtered');

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $('.filter').removeClass('selected');
            $(this).addClass('selected');

            $('.booster, .booster-clone').each(function() {
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

    // Help button
    $('#help-button').click(function() {
        $('#help-modal').modal();
    });

    // TM selection dropdown
    $('#tm-select').change(function() {
        init($(this).val());
        tmId = $(this).val();
    });
});
