function highlightNavbar() {
    // Highlight navbar
    $('#tm-planner-nav').addClass('active');
}

function imgError(img) {
    img.onerror = '';
    img.src = 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';

    return true;
}

function getThumb(thumbId) {
    // Zero pad IDs to get correct thumb
    var paddedThumbId = ('0000' + thumbId).slice(-4);

    // Special case for Aokiji 575 with extra 0
    if (thumbId === 575)
        paddedThumbId = "0" + paddedThumbId;

    return 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + paddedThumbId + '.png';
}

function createImgHtml(imgSrc, size) {
    var imgHtml = $('<img></img>');
    imgHtml.attr('src', imgSrc);
    imgHtml.attr('height', size);
    imgHtml.attr('width', size);
    imgHtml.attr('onerror', 'imgError(this)');

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

function getBoosters(tmId, server) {
    // Reset
    $('.booster').remove();

    // Change 2x or 2.25x version
    if (tmId >= 2064) {
        $('.ver_2x').hide();
        $('.ver_2_25x').show();
    } else {
        $('.ver_2x').show();
        $('.ver_2_25x').hide();
    }

    var boosters = [];
    if (server === 'glb')
        boosters = tm_boosters[tmId];
    else
        boosters = tm_boosters_jpn[tmId];

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

        imgDiv.data('max_lv', units[b.id - 1][7])
        imgDiv.data('team', -1);
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
    // Reset
    $('#thumb-div').empty();

    var opponents = tm_opponents[tmId];

    for (var i = 0; i < opponents.length; i++)
        $('#op-' + (i + 1)).text(opponents[i]);

    var imgHtml = createImgHtml(getThumb(tmId), 50);
    $('#thumb-div').append(imgHtml);
}

function init(tmId, server) {
    $('#tm-select').val(tmId + '_' + server);
    getBoosters(tmId, server);
    getOpponents(tmId);
    $('.sl-btn').attr('disabled', false);

    $('.booster-clone').remove();
    updateAllPts();

    // Retrieve last save time
    var serverStr = server === 'glb' ? '' : '_jpn';
    if (localStorage.getItem('lastSave_' + tmId + serverStr) !== null)
        $('#last-save').text(localStorage.getItem('lastSave_' + tmId + serverStr));
    else
        $('#last-save').text('N/A');
}

function resetPosition(unit) {
    unit.removeClass('assigned');
    unit.removeClass('assigned-dh');
    unit.data('team', -1);

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
    $('.booster').each(function() {
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
        $('#db-button').data('id', deleteId);
        $('.remove-button-el').show();
    }

    if (src) {
        // Available units
        $('.booster').not('.assigned, .assigned-dh, .type-filtered, .class-filtered').each(function() {
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

function viewOnDb(unitId) {
    if (unitId) {
        var dbUrl = 'https://optc-db.github.io/characters/#/view/';
        dbUrl += unitId;

        window.open(dbUrl);
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
    // Retrieve TM ID
    var tmId = getUrlParameter('tmId');

    // Retrieve Server
    var server = 'glb';
    if (localStorage.getItem('server') !== null) {
        server = localStorage.getItem('server');
        $('#server-' + server).prop('checked', true);

        $('.tm-option').hide();
        $('.' + server + '-tm').show();
    }

    // Set user Server
    $('.server-radio').click(function() {
        localStorage.setItem('server', $(this).val());

        // Refresh page
        location.reload();
    });

    if (tmId)
        init(tmId, server);

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

        var srcDiv = $('#' + src);
        if (src == 'dont-have') {
            b.data('team', -1);
            b.addClass('assigned-dh');
        } else {
            b.data('team', $(this).closest('.team').data('team'));
            b.addClass('assigned');
        }

        if ($(this).hasClass('is-clone')) {
            mirrorToFriendCap(srcDiv.closest('.team'), b, false);
        } else {
            if (src == 'dont-have') {
                b.detach().css({
                    top: 0,
                    left: 0
                }).insertBefore('#add-button');
            } else {
                if (srcDiv.find('.booster').length > 0)
                    resetPosition(srcDiv.find('.booster').detach());

                b.detach().css({
                    top: 0,
                    left: 0
                }).prependTo(srcDiv);
            }

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

    // Click to DB
    $(document).on('click', '.booster', function() {
        if (!$(this).hasClass('assigned') && !$(this).hasClass('assigned-dh'))
            viewOnDb($(this).data('id'));
    });

    $('#db-button').click(function() {
        viewOnDb($(this).data('id'));
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
            else {
                var maxLv = $('#booster_' + team[i]).data('max_lv');
                calUrl += team[i] + ':' + maxLv;
            }

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

            // Check for clone if Friend Captain is not picked
            if (team[0] == 0 && $(this).find('.booster-clone').length > 0) {
                var friendCapClone = $(this).find('.booster-clone');

                // Make unit ID negative to identify as clone
                team[0] = parseInt(friendCapClone.data('id')) * -1;
            }

            teams[team_num] = team;
        });

        var serverStr = server === 'glb' ? '' : '_jpn';
        localStorage.setItem('teams_' + tmId + serverStr, JSON.stringify(teams));

        var dontHaves = [];

        $('#dont-have').find('.booster').each(function() {
            dontHaves.push($(this).data('id'));
        });

        localStorage.setItem('dontHaves_' + tmId + serverStr, JSON.stringify(dontHaves));

        // Update last save time
        var now = moment().format('lll');
        $('#last-save').text(now);

        localStorage.setItem('lastSave_' + tmId + serverStr, now);
    });

    // Load teams
    $('#load-button').click(function() {
        var serverStr = server === 'glb' ? '' : '_jpn';

        var lastSave = localStorage.getItem('lastSave_' + tmId + serverStr);

        if (lastSave !== null) {
            resetAll();

            var teams = JSON.parse(localStorage.getItem('teams_' + tmId + serverStr));

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

    // Type filter
    $('.type-filter').click(function() {
        var filter = $(this).data('filter');
        $('.booster, .booster-clone').removeClass('type-filtered');

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $('.type-filter').removeClass('selected');
            $(this).addClass('selected');

            $('.booster, .booster-clone').each(function() {
                var unitType = $(this).data('type');
                if (Array.isArray(unitType)) {
                    if (unitType.indexOf(filter) == -1)
                        $(this).addClass('type-filtered');
                } else {
                    if ($(this).data('type') !== filter)
                        $(this).addClass('type-filtered');
                }
            });
        }
    });

    // Class filter
    $('.class-filter').click(function() {
        var filter = $(this).data('filter');
        $('.booster, .booster-clone').removeClass('class-filtered');

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $('.class-filter').removeClass('selected');
            $(this).addClass('selected');

            $('.booster, .booster-clone').each(function() {
                if ($(this).data('class2')) {
                    if ($(this).data('class1') !== filter && $(this).data('class2') !== filter)
                        $(this).addClass('class-filtered');
                } else {
                    if ($(this).data('class1') !== filter)
                        $(this).addClass('class-filtered');
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
        var parsedTmId = parseInt($(this).val());

        init(parsedTmId, server);
        tmId = parsedTmId;
    });
});
