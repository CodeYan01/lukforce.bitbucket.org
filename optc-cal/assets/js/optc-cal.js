(function() {
    const fnColorNew = 'rgba(250, 128, 114, 0.6)';
    const fnColorRep = 'rgba(250, 128, 114, 0.3)';
    const raidColor = 'rgba(102, 205, 170, 0.6)';
    const coliColorNew = 'rgba(30, 144, 255, 0.6)';
    const coliColorRep = 'rgba(30, 144, 255, 0.3)';
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
                res['title'] = '『FN』\n' + fn['name'];
                res['thumb'] = fn['thumb'];
            }

            if (e['ranking'])
                res['ranking'] = fortnights[e['ranking']]['thumb'];

            res['type'] = 'fortnight';

            // Add one day for 19:00 events for GMT mode
            var start = e['start'];
            var end = e['end'];

            if (!isPST) {
                var startDate = moment(start);
                startDate.add(1, 'd');
                start = startDate.format('YYYY-MM-DD');

                var endDate = moment(end);
                endDate.add(1, 'd');
                end = endDate.format('YYYY-MM-DD');
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
                res['title'] = '『RD』\n' + rd['name'];
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

            res['thumb'] = [];

            var newId = e['newId'];
            for (var i = 0; i < newId.length; i++) {
                var newColi = coliseums[newId[i]];
                res['thumb'].push(newColi['thumb']);
            }

            var repId = e['repId'];
            for (var i = 0; i < repId.length; i++) {
                var repColi = coliseums[repId[i]];
                res['thumb'].push(repColi['thumb']);
            }

            if (e['ambush']) {
                res['ambush'] = e['ambush'];
                createAmbushEvent(eventArray, e['ambush'], e['start'], e['end'], 'coliseum', isPST);
            }


            res['id'] = newId.concat(repId);

            res['type'] = 'coliseum';

            // Add one day for 19:00 events for GMT mode
            var start = e['start'];
            var end = e['end'];

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

            start += ' 03:00';
            res['start'] = start;
            if (end)
                res['end'] = end;

            var color = e['new_batch'] ? coliColorNew : coliColorRep;
            res['color'] = color;

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

            if (!isPST && (res['subType'] !== 'Blitz Battle' && spName !== 'Straw Hat Pirates')) {
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

            res['thumb'] = sbge['thumb'];
            res['type'] = 'event';

            // Add one day for 19:00 events for GMT mode
            var start = e['start'];
            var end = e['end'];

            if (!isPST && (id === 'sugo' || id === 'free_pull')) {
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

    function getThumb(thumbId) {
        // Special case for Raid Rayleigh
        if (thumbId === '5010')
            return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5010.png';

        return 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + thumbId + '.png';
    }

    function createUrlHtml(url, text) {
        var urlHtml = $('<a></a>');
        urlHtml.attr('href', url);
        urlHtml.attr('target', '_blank');
        urlHtml.text(text);

        return urlHtml;
    }

    function createImgHtml(imgSrc, size, floatLeft) {
        var imgHtml = $('<img></img>');
        imgHtml.attr('src', imgSrc);
        imgHtml.attr('height', size);
        imgHtml.attr('width', size);

        if (floatLeft)
            imgHtml.css('float', 'left');

        return imgHtml;
    }

    function createListItem(ed, liClass, url, liId, urlText) {
        var li = ed.find(liClass);
        var liUrl = url + liId;

        li.find('.url').html(createUrlHtml(liUrl, urlText));
        li.show();
    }

    function getEventDetail(e) {
        var ids = [];

        if (Array.isArray(e['id']))
            ids = e['id'].slice();
        else
            ids.push(e['id']);

        if (e['ambush'])
            ids.push(e['ambush']);

        for (var i = 0; i < ids.length; i++) {
            var ed = $('#eventDetailClone').clone();
            var id = ids[i];
            ed.attr('id', "eventDetail_" + id);

            var data;
            if (e['type'] === 'fortnight')
                data = fortnights[id];
            else if (e['type'] === 'raid')
                data = raids[id];
            else if (e['type'] === 'coliseum')
                data = coliseums[id];
            else if (e['type'] === 'special')
                data = specials[id];

            if (e['ambush'] && !data)
                data = ambushes[id];

            // Special case for Blitz Battle
            if (e['type'] === 'special' && e['subType'] === 'Blitz Battle')
                ed.find('.countdown').show();

            ed.find('.eventThumb').html(createImgHtml(getThumb(data['thumb']), 50, false));
            ed.find('.eventTitle').text(data['name']);

            if (drops[id])
                createListItem(ed, '.dropList', 'http://optc-db.github.io/drops/?', drops[id], 'Drop List');

            if (gw[id])
                createListItem(ed, '.gamewith', 'https://トレクル.gamewith.jp/article/show/', gw[id], 'Gamewith Stage Guide');

            if (sd[id])
                createListItem(ed, '.sevenDays', 'https://youtu.be/', sd[id], '7 Days YouTube Stage Guide');

            if (wiki[id])
                createListItem(ed, '.redditWiki', 'https://www.reddit.com/r/OnePieceTC/', wiki[id], 'Reddit Stage Guide Wiki');

            if (videoWiki[id])
                createListItem(ed, '.redditVideoWiki', 'https://www.reddit.com/r/OnePieceTC/wiki/video/', videoWiki[id], 'Reddit Video Wiki');

            $('#eventDetail').append(ed);
            ed.show();
        }

        var modalCloseButton = $('#modalCloseButton').clone();
        $('#eventDetail').append(modalCloseButton);
        $(modalCloseButton).show();
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

        // Calendar events
        var eventArray = [];

        createFortnightEvent(eventArray, isPST);
        createRaidEvent(eventArray, isPST);
        createColiseumEvent(eventArray, isPST);
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
                        $('#vp').attr('content', '');
                        $('#calendar').width('1052.1px');
                    }
                }
            },
            aspectRatio: 0.55,
            events: eventArray,
            eventRender: function(event, element) {
                if (event['type'] === 'fortnight' || event['type'] === 'raid' || (event['type'] === 'special' && event['id'] !== 'dummy')) {
                    var thumbArray = [];
                    if (Array.isArray(event['thumb']))
                        thumbArray = event['thumb'].slice();
                    else
                        thumbArray.push(event['thumb']);

                    for (var i = 0; i < thumbArray.length; i++)
                        element.find('.fc-title').before(createImgHtml(getThumb(thumbArray[i]), 30, true));

                    if (event['type'] === 'fortnight' && event['ranking']) {
                        var imgHtml = createImgHtml(getThumb(event['ranking']), 20, false);
                        element.find('.fc-title').html(imgHtml);
                        element.find('.fc-title').after('<i class="fa fa-trophy fa-lg"></i>');
                    }
                } else if (event['type'] === 'coliseum') {
                    for (var i = 0; i < event['thumb'].length; i++) {
                        if (coliseums[event['id'][i]].chaos_only)
                            element.find('.fc-title').before(createImgHtml(getThumb(event['thumb'][i]), 30, true));
                        else
                            element.find('.fc-title').before(createImgHtml(getThumb(event['thumb'][i]), 20, true));
                    }
                } else if (event['type'] === 'raidAmbush' || event['type'] === 'coliAmbush') {
                    element.find('.fc-title').before(createImgHtml(getThumb(event['thumb']), 15, true));
                } else {
                    element.closest('.fc-bgevent').css('background-image', 'url("assets/img/' + event['thumb'] + '.png")');
                }
            },
            eventClick: function(event) {
                if (event['type'] === 'fortnight'
                    || event['type'] === 'raid'
                    || event['type'] === 'coliseum'
                    || (event['type'] === 'special' && event['subType'] === 'Blitz Battle')
                    || (event['type'] === 'special' && event['subType'] === '20th Anni SH')
                ) {
                    $('#eventDetail').empty();
                    getEventDetail(event);
                    $('#eventDetailModal').modal();
                }
            },
            eventOrder: function(a, b) {
                if (Array.isArray(a.id))
                    return 1;
                if (Array.isArray(b.id))
                    return -1;

                return a.id < b.id ? -1 : 1;
            },
            displayEventTime: false,
            firstDay: isPST ? 0 : 1
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
