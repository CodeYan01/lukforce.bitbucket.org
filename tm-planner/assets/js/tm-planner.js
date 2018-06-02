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

    // Change 2x or 2.25x version
    $('.div_x').hide();
    if (tmId == 2064) {
        // TM Kizaru
        $('#div_2_25x').show();
        $('#div_1_75x').show();
        $('#div_1_35x').show();
    } else if (tmId == 2109) {
        // TM Big Mom
        $('#div_1_75x').show();
        $('#div_1_35x_v2').show();
        $('#div_1_35x_v3').show();
        $('#div_1_25x').show();
    } else {
        $('#div_2x').show();
        $('#div_1_5x').show();
        $('#div_1_35x').show();
    }

    var boosters = [];
    if (server === 'glb')
        boosters = tm_boosters[tmId];
    else
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

        if (b.x_pts === 1.2) {
            imgDiv.data('_type', b.type);
            $('#booster_' + _x_pts + 'x_' + b.type).append(imgDiv);
        } else if (b.x_pts === 1.35 && b.ver)
            $('#booster_' + _x_pts + 'x_v' + b.ver).append(imgDiv);
        else
            $('#booster_' + _x_pts + 'x').append(imgDiv);

        _x_pts += 'x';

        if (b.x_pts === 1.35 && b.ver)
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
            var class1 = unitClass[0].replace(' ', '-').toLowerCase();
            $('#unit-detail-class1').addClass(class1 + '-div');

            var class2 = unitClass[1].replace(' ', '-').toLowerCase();
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

        // Special
        var special = unitDetail.special;
        if (special) {
            if (Array.isArray(special)) {
                var specialMax = special[special.length - 1].description;
                specialMax = decorateStr(specialMax);
                $('#unit-detail-special').html(specialMax);
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

        $('#db-button').data('id', unitId);
        $('.unit-detail-el').show();
    }
}

function populateUnitModal(src, selectedId, assigned) {
    // Reset
    $('.remove-button-el').hide();
    $('.available-units-el').hide();
    $('#available-units').empty();
    $('.units-in-team-el').hide();
    $('#units-in-team').empty();
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
        // Available units
        $('.booster').not('.assigned, .assigned-dh, .type-filtered, .class-filtered').each(function() {
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

    btn.closest('.team').find('.x_pts').html(x_pts.toFixed(2));
}

function updateAllPts() {
    $('.pts-button').each(function() {
        updatePts($(this));
    });
}

$(document).ready(function() {
    // Retrieve Server
    var server = 'glb';
    if (localStorage.getItem('server') !== null) {
        server = localStorage.getItem('server');
        $('#server-' + server).prop('checked', true);

        $('.tm-option').hide();
        $('.' + server + '-tm').show();
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
                    var team = teamStr.split(',');

                    var op = opponents[opId];
                    var opPos = op[2];

                    var opPosDiv = $('#op-' + (opPos + 1));
                    var opPosTeam = opPosDiv.closest('.team');
                    var teamNum = opPosTeam.data('team');

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
                            var teamSlot = $('#team-slot-' + teamNum + i);

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
            $('#read-only-button-div').show();
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
    $('.team-slot').click(function() {
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

        if ((tmId > 1889 && server == 'glb') || (tmId > 2064 && server == 'jpn')) {
            $('.team').each(function() {
                var opId = $(this).data('op_id');
                var team = getTeamUnits($(this));

                // Check for clone if Friend Captain is not picked
                if (team[0] == 0 && $(this).find('.booster-clone').length > 0) {
                    var friendCapClone = $(this).find('.booster-clone');

                    // Make unit ID negative to identify as clone
                    team[0] = parseInt(friendCapClone.data('id')) * -1;
                }

                teams[opId] = team;
            });
        } else {
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
                    var opPos = op[2];

                    var opPosDiv = $('#op-' + (opPos + 1));
                    var opPosTeam = opPosDiv.closest('.team');
                    var teamNum = opPosTeam.data('team');

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
                            var teamSlot = $('#team-slot-' + teamNum + i);

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
            $('.team').each(function() {
                var opId = $(this).data('op_id');
                var team = getTeamUnits($(this));

                // Check for clone if Friend Captain is not picked
                if (team[0] == 0 && $(this).find('.booster-clone').length > 0) {
                    var friendCapClone = $(this).find('.booster-clone');

                    // Make unit ID negative to identify as clone
                    team[0] = parseInt(friendCapClone.data('id')) * -1;
                }

                url += '&op' + opId + '=' + team.join();
            });
        } else {
            $('.team').each(function() {
                var team_num = $(this).data('team');
                var team = getTeamUnits($(this));

                // Check for clone if Friend Captain is not picked
                if (team[0] == 0 && $(this).find('.booster-clone').length > 0) {
                    var friendCapClone = $(this).find('.booster-clone');

                    // Make unit ID negative to identify as clone
                    team[0] = parseInt(friendCapClone.data('id')) * -1;
                }

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
