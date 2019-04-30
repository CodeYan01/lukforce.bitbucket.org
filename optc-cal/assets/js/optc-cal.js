// Highlight navbar
function highlightNavbar() {
    $('#optc-cal-nav').addClass('active');
}

// Show footer
function showFooter() {
    $('#cal-footer').show();
}

(function() {
    const fnColorNew = 'rgba(250, 128, 114, 0.6)';
    const fnColorRep = 'rgba(250, 128, 114, 0.3)';
    const raidColor = 'rgba(102, 205, 170, 0.6)';
    const coliColorNew = 'rgba(30, 144, 255, 0.6)';
    const coliColorRep = 'rgba(30, 144, 255, 0.3)';
    const tmColor = 'rgba(255, 165, 0, 0.6)';
    const spColor = 'rgba(70, 130, 180, 0.6)';

    function createFortnightEvent(eventArray, isPST) {
        fortnightEvents.forEach(function(e) {
            var res = {};

            var eId = e['id'];

            if (Array.isArray(eId)) {
                res['id'] = eId.slice();
                res['thumb'] = [];

                for (var i = 0; i < eId.length; i++) {
                    var eFn = fortnights[eId[i]];
                    res['thumb'].push(eFn['thumb']);
                }
            } else {
                var fn = fortnights[eId];
                res['id'] = eId;
                res['title'] = '『Fortnight』\n' + fn['name'];
                res['thumb'] = fn['thumb'];
            }

            if (e['ranking']) {
                res['ranking'] = [];

                if (Array.isArray(e['ranking'])) {
                    for (var i = 0; i < e['ranking'].length; i++)
                        res['ranking'].push(fortnights[e['ranking'][i]]['thumb']);
                } else
                    res['ranking'].push(fortnights[e['ranking']]['thumb']);
            }

            res['type'] = 'fortnight';
            res['is_replay'] = e['is_replay'];

            // Add one day for 19:00 events for GMT mode
            var start = e['start'];
            var end = e['end'];

            if (!isPST && !e['pst_0']) {
                var startDate = moment(start);
                startDate.add(1, 'd');
                start = startDate.format('YYYY-MM-DD');

                if (end) {
                    var endDate = moment(end);
                    endDate.add(1, 'd');
                    end = endDate.format('YYYY-MM-DD');
                }
            }

            if (e['is_replay'])
                start += ' 01:30';
            else
                start += ' 01:00';
            res['start'] = start;
            res['end'] = end;

            var color = e['is_replay'] ? fnColorRep : fnColorNew;
            res['color'] = color;
            res['textColor'] = 'black';

            eventArray.push(res);
        });
    }

    function createRaidEvent(eventArray, isPST) {
        raidEvents.forEach(function(e) {
            var res = {};

            var eId = e['id'];

            if (Array.isArray(eId)) {
                res['id'] = eId.slice();
                res['thumb'] = [];

                for (var i = 0; i < eId.length; i++) {
                    var eRd = raids[eId[i]];
                    res['thumb'].push(eRd['thumb']);
                }
            } else {
                var rd = raids[eId];
                res['id'] = eId;
                res['title'] = '『Raid』\n' + rd['name'];
                res['thumb'] = rd['thumb'];
            }

            if (e['ambush']) {
                res['ambush'] = e['ambush'];
                createAmbushEvent(eventArray, e['ambush'], e['start'], e['end'], 'raid', isPST);
            }

            res['type'] = 'raid';

            // Add one day for 19:00 events for GMT mode
            var start = e['start'];
            var end = e['end'];

            if (!isPST && !e['pst_0']) {
                var startDate = moment(start);
                startDate.add(1, 'd');
                start = startDate.format('YYYY-MM-DD');

                if (end) {
                    var endDate = moment(end);
                    endDate.add(1, 'd');
                    end = endDate.format('YYYY-MM-DD');
                }
            }

            start += ' 05:00';
            res['start'] = start;
            if (end)
                res['end'] = end;

            res['color'] = raidColor;
            res['textColor'] = 'black';

            eventArray.push(res);
        });
    }

    function createColiseumEvent(eventArray, isPST) {
        coliseumEvents.forEach(function(e) {
            var res = {};

            var newId = e['newId'];
            var repId = e['repId'];
            if (Array.isArray(newId)) {
                res['thumb'] = [];

                for (var i = 0; i < newId.length; i++) {
                    var newColi = coliseums[newId[i]];
                    res['thumb'].push(newColi['thumb']);
                }

                for (var i = 0; i < repId.length; i++) {
                    var repColi = coliseums[repId[i]];
                    res['thumb'].push(repColi['thumb']);
                }

                res['id'] = newId.concat(repId);
            } else {
                var coli = coliseums[newId];
                res['id'] = newId;
                res['title'] = '『Coliseum』\n' + coli['name'];
                res['thumb'] = coli['thumb'];
            }

            if (e['ambush']) {
                res['ambush'] = e['ambush'];
                createAmbushEvent(eventArray, e['ambush'], e['start'], e['end'], 'coliseum', isPST);
            }

            res['type'] = 'coliseum';

            // Add one day for 19:00 events for GMT mode
            var start = e['start'];
            var end = e['end'];

            if (!isPST && !e['pst_0']) {
                var startDate = moment(start);
                startDate.add(1, 'd');
                start = startDate.format('YYYY-MM-DD');

                if (end) {
                    var endDate = moment(end);
                    endDate.add(1, 'd');
                    end = endDate.format('YYYY-MM-DD');
                }
            }

            start += ' 03:00';
            res['start'] = start;
            if (end)
                res['end'] = end;

            var color = e['new_batch'] ? coliColorNew : coliColorRep;
            res['color'] = color;
            res['textColor'] = 'black';

            eventArray.push(res);
        });
    }

    function createAmbushEvent(eventArray, id, start, end, src, isPST) {
        var res = {};

        var ambush = ambushes[id];

        res['id'] = id;
        res['title'] = ambush['name'];
        res['thumb'] = ambush['thumb'];

        // Add one day for 19:00 events for GMT mode
        if (!isPST) {
            var startDate = moment(start);
            startDate.add(1, 'd');
            start = startDate.format('YYYY-MM-DD');

            if (end) {
                var endDate = moment(end);
                endDate.add(1, 'd');
                end = endDate.format('YYYY-MM-DD');
            }
        }

        if (end)
            res['end'] = end;

        if ('raid' === src) {
            res['type'] = 'raidAmbush';
            res['color'] = raidColor;

            start += ' 06:00';
            res['start'] = start;
        } else {
            res['type'] = 'coliAmbush';
            res['color'] = coliColorNew;

            start += ' 04:00';
            res['start'] = start;
        }

        res['textColor'] = 'black';

        eventArray.push(res);
    }

    function createTmEvent(eventArray, isPST) {
        tmEvents.forEach(function(e) {
            var res = {};

            var eId = e['id'];

            var tm = tms[eId];
            res['id'] = eId;
            res['title'] = '『TM』\n' + tm['name'];
            res['thumb'] = tm['thumb'];

            res['type'] = 'tm';

            // Add one day for 19:00 events for GMT mode
            var start = e['start'];
            var end = e['end'];

            if (!isPST && e['pst_19']) {
                var startDate = moment(start);
                startDate.add(1, 'd');
                start = startDate.format('YYYY-MM-DD');

                if (end) {
                    var endDate = moment(end);
                    endDate.add(1, 'd');
                    end = endDate.format('YYYY-MM-DD');
                }
            }

            start += ' 02:00';
            res['start'] = start;
            res['end'] = end;

            res['color'] = tmColor;
            res['textColor'] = 'black';

            eventArray.push(res);
        });
    }

    function createSpecialEvent(eventArray, isPST) {
        specialEvents.forEach(function(e) {
            var res = {};

            var eId = e['id'];
            var spName; // For Blitz

            if ('dummy' === eId) {
                res['id'] = eId;
                res['color'] = 'rgba(255, 255, 255, 0)';
                res['textColor'] = 'rgba(255, 255, 255, 0)';
            } else {
                if (Array.isArray(eId)) {
                    res['id'] = eId.slice();
                    res['thumb'] = [];

                    for (var i = 0; i < eId.length; i++) {
                        var eSp = specials[eId[i]];
                        res['thumb'].push(eSp['thumb']);
                        res['subType'] = eSp['type'];
                    }
                } else {
                    res['id'] = eId;
                    var sp = specials[eId];

                    var title = '『' + sp['type'] + '』';
                    title += '\n' + sp['name'];
                    spName = sp['name'];

                    res['title'] = title;

                    res['thumb'] = sp['thumb'];
                    res['subType'] = sp['type'];
                }

                res['color'] = spColor;
                res['textColor'] = 'black';
            }

            res['type'] = 'special';

            // Add one day for 19:00 events for GMT mode
            var start = e['start'];
            var end = e['end'];

            if (!isPST
                && !e['pst_0']
                && !(res['subType'] === 'Blitz Battle' && spName === 'Straw Hat Pirates')
                && !(res['subType'] === 'Blitz Battle' && spName === 'Donquixote Family')
                && res['subType'] !== 'Socket Book'
                && res['subType'] !== 'Tea Party'
                && res['subType'] !== 'Past Memory'
            ) {
                var startDate = moment(start);
                startDate.add(1, 'd');
                start = startDate.format('YYYY-MM-DD');

                if (end) {
                    var endDate = moment(end);
                    endDate.add(1, 'd');
                    end = endDate.format('YYYY-MM-DD');
                }
            }

            start += ' 01:45';
            res['start'] = start;
            if (end)
                res['end'] = end;

            eventArray.push(res);
        });
    }

    function createSpecialBgEvent(eventArray, isPST) {
        specialBgEvents.forEach(function(e) {
            var res = {};

            var id = e['id'];
            var sbge = specials_bg[id];

            res['id'] = id;
            res['thumb'] = sbge['thumb'];
            res['type'] = 'event';

            // Add one day for 19:00 events for GMT mode
            var start = e['start'];
            var end = e['end'];

            if (!isPST
                && (
                    id === 'sugo'
                    || id === 'free_pull'
                    || e['pst_19']
                )
            ) {
                var startDate = moment(start);
                startDate.add(1, 'd');
                start = startDate.format('YYYY-MM-DD');

                if (end) {
                    var endDate = moment(end);
                    endDate.add(1, 'd');
                    end = endDate.format('YYYY-MM-DD');
                }
            }

            res['start'] = start;
            res['end'] = end;

            res['color'] = 'rgba(0, 0, 0, 0)';
            res['rendering'] = 'background';

            eventArray.push(res);
        });
    }

    function createUrlHtml(url, text) {
        var urlHtml = $('<a></a>');
        urlHtml.attr('href', url);
        urlHtml.attr('target', '_blank');
        urlHtml.text(text);

        return urlHtml;
    }

    function createListItem(ed, liClass, url, liId, urlText) {
        var li = ed.find(liClass);
        var liUrl = url + liId;

        // Special case for Nakama Network
        if (liClass === '.nakama')
            liUrl += '/details';

        li.find('.url').html(createUrlHtml(liUrl, urlText));
        li.show();
    }

    function highlightTmBoosters(isChecked) {
        if (isChecked) {
            $('.unit-img').each(function() {
                if (tm_boosters.indexOf($(this).data('id')) == -1)
                    $(this).addClass('filtered');
            });
        } else
            $('.filtered').removeClass('filtered');
    }

    function getEventDetail(e) {
        var ids = [];

        if (Array.isArray(e['id']))
            ids = e['id'].slice();
        else
            ids.push(e['id']);

        if (e['ambush'])
            ids.push(e['ambush']);

        if (e['type'] === 'special' && e['subType'] === 'Champion Challenge') {
            // Special case for Champion Challenge
            var ed = $('#eventDetailClone').clone();
            ed.attr('id', 'eventDetail_cc');
            ed.find('.eventTitle').text('Champion Challenge');

            createListItem(ed, '.dropList', 'http://optc-db.github.io/drops/?', 'Champion%20Challenge!', 'Drop List');
            createListItem(ed, '.gamewith', 'https://トレクル.gamewith.jp/article/show/', '56742', 'Gamewith Stage Guide');

            $('#eventDetail').append(ed);
            ed.show();
        } else {
            for (var i = 0; i < ids.length; i++) {
                var ed = $('#eventDetailClone').clone();
                var id = ids[i];
                ed.attr('id', 'eventDetail_' + id);

                var data;
                if (e['type'] === 'fortnight')
                    data = fortnights[id];
                else if (e['type'] === 'raid')
                    data = raids[id];
                else if (e['type'] === 'coliseum')
                    data = coliseums[id];
                else if (e['type'] === 'tm')
                    data = tms[id];
                else if (e['type'] === 'special')
                    data = specials[id];

                if (e['ambush'] && !data)
                    data = ambushes[id];

                // Special case for Blitz Battle
                if (e['type'] === 'special' && e['subType'] === 'Blitz Battle')
                    ed.find('.countdown').show();

                ed.find('.eventThumb').html(createImgHtml(getThumb(data['thumb']), 50, false));
                ed.find('.eventTitle').text(data['name']);

                if (e['type'] === 'raid' ||
                    e['type'] === 'coliseum' ||
                    e['type'] === 'ambush' ||
                    e['type'] === 'tm')
                    createListItem(ed, '.db', 'http://optc-db.github.io/characters/#/view/', id, 'OPTC-DB Character Page');

                if (drops[id])
                    createListItem(ed, '.dropList', 'http://optc-db.github.io/drops/?', drops[id], 'Drop List');

                if (gw[id])
                    createListItem(ed, '.gamewith', 'https://トレクル.gamewith.jp/article/show/', gw[id], 'Gamewith Stage Guide');

                if (nakama[id])
                    createListItem(ed, '.nakama', 'https://www.nakama.network/stages/', nakama[id], 'Nakama Network');

                if (wiki[id])
                    createListItem(ed, '.redditWiki', 'https://www.reddit.com/r/OnePieceTC/', wiki[id], 'Reddit Stage Guide Wiki');

                if (videoWiki[id])
                    createListItem(ed, '.redditVideoWiki', 'https://www.reddit.com/r/OnePieceTC/wiki/video/', videoWiki[id], 'Reddit Video Wiki');

                if (sd[id])
                    createListItem(ed, '.sevenDays', 'https://youtu.be/', sd[id], '7 Days YouTube Stage Guide');

                if (e['type'] === 'tm') {
                    if (data.info != '')
                        createListItem(ed, '.tmInfo', 'https://', data.info, 'TM Info Graphic');

                    createListItem(ed, '.tmPlanner', '/tm-planner/?tmId=', id, 'TM Team Planner');
                }

                $('#eventDetail').append(ed);
                ed.show();
            }
        }

        var modalCloseButton = $('#modalCloseButton').clone();
        $('#eventDetail').append(modalCloseButton);
        $(modalCloseButton).show();
    }

    function eventTypeToOrder(eProps) {
        var order = -1;

        switch (eProps.type) {
            case 'fortnight':
                if (eProps.is_replay)
                    order = 7;
                else
                    order = 8;

                break;
            case 'raid':
                order = 2;
                break;
            case 'raidAmbush':
                order = 1;
                break;
            case 'coliseum':
                order = 4;
                break;
            case 'coliAmbush':
                order = 3;
                break;
            case 'tm':
                order = 6;
                break;
            case 'special':
                order = 5;
                break;
            default:
                order = -1;
        }

        return order;
    }

    $(document).ready(function() {
        // Retrieve User Time Mode
        var timeMode = "PST";
        if (localStorage.getItem('timeMode') !== null)
            timeMode = localStorage.getItem('timeMode');

        var isPST = timeMode === "PST";
        var tzString;
        if (isPST) {
            $('#ctime-mode').text('PST');
            $('#time-mode-link').text('GMT Mode');
            tzString = 'Etc/GMT+8';
        } else {
            $('#ctime-mode').text('GMT');
            $('#time-mode-link').text('PST Mode');
            tzString = 'Etc/UTC';
        }

        // Set User Time Mode
        $('#time-mode-link').click(function() {
            if (isPST)
                localStorage.setItem('timeMode', "GMT");
            else
                localStorage.setItem('timeMode', "PST");

            // Refresh page
            location.reload();
        });

        // Highlight future TM Boosters setting
        $('#highlight-tm-boosters').click(function() {
            highlightTmBoosters($('#highlight-tm-boosters').prop('checked'));
        });

        // Calendar events
        var eventArray = [];

        createFortnightEvent(eventArray, isPST);
        createRaidEvent(eventArray, isPST);
        createColiseumEvent(eventArray, isPST);
        createTmEvent(eventArray, isPST);
        createSpecialEvent(eventArray, isPST);
        createSpecialBgEvent(eventArray, isPST);

        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek'
            },
            viewRender: function(view, element) {
                if (view.name === 'basicWeek')
                    $('#calendar').fullCalendar('option', 'contentHeight', 400);
                else
                    $('#calendar').fullCalendar('option', 'contentHeight', null);

                if (screen.width < 768) {
                    if (view.name === 'basicWeek') {
                        $('#vp').attr('content', 'width=device-width, initial-scale=1.0');
                        $('#calendar').width('100%');
                        $('.fc-view-container .fc-view').css('overflow-x', 'scroll');
                        $('.fc-view-container .fc-view > table').width('1052.1px');

                        // Scroll to today
                        var todayPos = $('.fc-today').offset();
                        if (todayPos)
                            $('.fc-view-container .fc-view').scrollLeft(todayPos.left - 100);
                    } else {
                        var deviceWidth = window.screen.width;
                        var ratio = deviceWidth / 1052.1;

                        $('#vp').attr('content', 'width=1052.1px, initial-scale=' + ratio);
                        $('#calendar').width('1052.1px');
                    }
                }
            },
            aspectRatio: 0.55,
            events: eventArray,
            eventRender: function(event, element) {
                if (event['type'] === 'fortnight'
                    || event['type'] === 'raid'
                    || event['type'] === 'tm'
                    || (event['type'] === 'special' && event['id'] !== 'dummy')
                ) {
                    var thumbArray = [];
                    if (Array.isArray(event['thumb']))
                        thumbArray = event['thumb'].slice();
                    else
                        thumbArray.push(event['thumb']);

                    for (var i = 0; i < thumbArray.length; i++) {
                        var unitImg = createImgHtml(getThumb(thumbArray[i]), 28, true);
                        unitImg.addClass('unit-img');
                        unitImg.data('id', parseInt(thumbArray[i]), 10);
                        element.find('.fc-title').before(unitImg);
                    }

                    if (event['type'] === 'fortnight' && event['ranking']) {
                        for (var i = 0; i < event['ranking'].length; i++) {
                            var rankImg = createImgHtml(getThumb(event['ranking'][i]), 20, false);
                            rankImg.addClass('unit-img');
                            rankImg.data('id', parseInt(event['ranking'][i]), 10);
                            element.find('.fc-title').append(rankImg);
                        }

                        element.find('.fc-title').after('<i class="fas fa-trophy"></i>');
                    }

                    element.css('min-height', '32px');
                } else if (event['type'] === 'coliseum') {
                    var thumbArray = [];
                    if (Array.isArray(event['thumb']))
                        thumbArray = event['thumb'].slice();
                    else
                        thumbArray.push(event['thumb']);

                    for (var i = 0; i < thumbArray.length; i++) {
                        var unitImg;

                        if (Array.isArray(event['id'])) {
                            if (coliseums[event['id'][i]].chaos_only)
                                unitImg = createImgHtml(getThumb(thumbArray[i]), 28, true);
                            else
                                unitImg = createImgHtml(getThumb(thumbArray[i]), 20, true);
                        } else
                            unitImg = createImgHtml(getThumb(thumbArray[i]), 28, true);

                        unitImg.addClass('unit-img');
                        unitImg.data('id', parseInt(thumbArray[i]), 10);
                        element.find('.fc-title').before(unitImg);
                    }

                    element.css('min-height', '32px');
                } else if (event['type'] === 'raidAmbush' || event['type'] === 'coliAmbush') {
                    var unitImg = createImgHtml(getThumb(event['thumb']), 15, true);
                    unitImg.addClass('unit-img');
                    unitImg.data('id', parseInt(event['thumb']), 10);
                    element.find('.fc-title').before(unitImg);
                } else {
                    element.closest('.fc-bgevent').css('background-image', 'url("/optc-cal/assets/img/' + event['thumb'] + '.png")');

                    if (event.id == 'sugo')
                        element.closest('.fc-bgevent').addClass('sugo');
                }
            },
            eventClick: function(event) {
                if (event['type'] === 'fortnight'
                    || event['type'] === 'raid'
                    || event['type'] === 'coliseum'
                    || event['type'] === 'tm'
                    || (event['type'] === 'special' && event['subType'] === 'Blitz Battle')
                    || (event['type'] === 'special' && event['subType'] === 'World Clash')
                    || (event['type'] === 'special' && event['subType'] === '20th Anni SH')
                    || (event['type'] === 'special' && event['subType'] === 'Champion Challenge' && event['id'] !== 'cc_2113')
                    || (event['type'] === 'special' && event['subType'] === 'Socket Book')
                    || (event['type'] === 'special' && event['subType'] === 'Tea Party')
                    || (event['type'] === 'special' && event['subType'] === 'Past Memory')
                    || (event['type'] === 'special' && event['subType'] === '1 Turn Dmg Ranking')
                    || (event['type'] === 'special' && event['subType'] === 'Super Evolve')
                ) {
                    $('#eventDetail').empty();
                    getEventDetail(event);
                    $('#eventDetailModal').modal();
                }
            },
            eventOrder: function(a, b) {
                var idA;
                var idB;

                if (Array.isArray(a.rawId))
                    idA = a.rawId[0];
                else
                    idA = a.rawId;

                if (Array.isArray(b.rawId))
                    idB = b.rawId[0];
                else
                    idB = b.rawId;

                var orderA = eventTypeToOrder(a.miscProps);
                var orderB = eventTypeToOrder(b.miscProps);

                if (orderA !== orderB)
                    return orderA > orderB ? -1 : 1;

                return idA > idB ? -1 : 1;
            },
            displayEventTime: false,
            firstDay: isPST ? 0 : 1,
            eventAfterAllRender: function(view) {
                highlightTmBoosters($('#highlight-tm-boosters').prop('checked'));
            }
        });

        // Auto change to week view when on mobile
        if (screen.width < 768)
            $('#calendar').fullCalendar('changeView', 'basicWeek');

        // Display current time
        moment.tz.add('Etc/GMT+8|-08|80|0|');
        moment.tz.add('Etc/UTC|UTC|0|0|');
        setInterval(function() {
            $('#ctime').html(moment().tz(tzString).format('HH:mm:ss'));
        }, 1000);
    });
}) ();
