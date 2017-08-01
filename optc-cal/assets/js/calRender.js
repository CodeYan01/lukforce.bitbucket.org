$(document).ready(function() {
    function createFortnightEvent(e) {
        var res = {};

        var id = e['id'];
        var fn = fortnights[id];

        res['id'] = id;

        var title = '『FN』';

        if (e['has_ranking'])
            title += ' ★Rank';

        title += '\n' + fn['name'];

        res['title'] = title;

        res['thumb'] = fn['thumb'];
        res['type'] = 'fortnight';

        var start = e['start'];
        start += ' 01:00';
        res['start'] = start;
        res['end'] = e['end'];

        var opacity = e['is_replay'] ? 0.3 : 0.6;
        res['color'] = 'rgba(255, 0, 0, ' + opacity + ')';
        res['textColor'] = 'black';

        return res;
    }

    function createRaidEvent(e) {
        var res = {};

        var eId = e['id'];

        if (Array.isArray(eId)) {
            res['id'] = eId.slice();
            res['thumb'] = [];

            for (i = 0; i < eId.length; i++) {
                var eRd = raids[eId[i]];
                res['thumb'].push(eRd['thumb']);
            }
        } else {
            var rd = raids[eId];
            res['id'] = eId;

            var title = '『RD』';

            if (typeof e['ambush'] !== 'undefined') {
                res['ambush'] = e['ambush'];
                eventArray.push(createAmbushEvent(e['ambush'], e['start'], e['end'], 'raid'));
            }

            title += '\n' + rd['name'];

            res['title'] = title;

            res['thumb'] = rd['thumb'];
        }

        res['type'] = 'raid';

        var start = e['start'];
        start += ' 05:00';
        res['start'] = start;
        if (typeof e['end'] !== 'undefined')
            res['end'] = e['end'];

        res['color'] = 'rgba(60, 179, 113, 0.6)';
        res['textColor'] = 'black';

        return res;
    }

    function createColiseumEvent(e) {
        var res = {};

        var newId = e['newId'];
        res['newThumb'] = [];
        for (i = 0; i < newId.length; i++) {
            var newColi = coliseums[newId[i]];
            res['newThumb'].push(newColi['thumb']);
        }

        var repId = e['repId'];
        res['repThumb'] = [];
        for (i = 0; i < repId.length; i++) {
            var repColi = coliseums[repId[i]];
            res['repThumb'].push(repColi['thumb']);
        }

        if (typeof e['ambush'] !== 'undefined') {
            res['ambush'] = e['ambush'];
            eventArray.push(createAmbushEvent(e['ambush'], e['start'], e['end'], 'coliseum'));
        }


        res['id'] = newId.concat(repId);

        res['type'] = 'coliseum';

        var start = e['start'];
        start += ' 03:00';
        res['start'] = start;
        if (typeof e['end'] !== 'undefined')
            res['end'] = e['end'];

        res['color'] = 'rgba(0, 0, 255, 0.6)';

        return res;
    }

    function createAmbushEvent(id, start, end, src) {
        var res = {};

        var ambush = ambushes[id];

        res['id'] = id;
        res['title'] = ambush['name'];
        res['thumb'] = ambush['thumb'];

        if (typeof end !== 'undefined')
            res['end'] = end;

        if ('raid' == src) {
            res['type'] = 'raidAmbush';
            res['color'] = 'rgba(60, 179, 113, 0.6)';

            start += ' 06:00';
            res['start'] = start;
        } else {
            res['type'] = 'coliAmbush';
            res['color'] = 'rgba(0, 0, 255, 0.6)';

            start += ' 04:00';
            res['start'] = start;
        }

        res['textColor'] = 'black';

        return res;
    }

    function createSpecialEvent(e) {
        var res = {};

        var id = e['id'];

        if ('dummy' == id) {
            res['color'] = 'rgba(255, 255, 255, 0)';
            res['textColor'] = 'rgba(255, 255, 255, 0)';
        } else {
            var sp = specials[id];

            var title = '『' + sp['type'] + '』';
            title += '\n' + sp['name'];

            res['title'] = title;

            res['thumb'] = sp['thumb'];

            res['color'] = 'rgba(75, 0, 130, 0.6)';
            res['textColor'] = 'black';
        }

        res['id'] = id;

        res['type'] = 'special';

        var start = e['start'];
        start += ' 02:00';
        res['start'] = start;
        if (typeof e['end'] !== 'undefined')
            res['end'] = e['end'];

        return res;
    }

    function createSpecialBgEvent(e) {
        var res = {};

        var id = e['id'];
        var sbge = specials_bg[id];

        res['thumb'] = sbge['thumb'];
        res['type'] = 'event';

        res['start'] = e['start'];
        res['end'] = e['end'];

        res['color'] = 'rgba(0, 0, 0, 0)';
        res['rendering'] = 'background';

        return res;
    }

    function getThumb(thumbId) {
        return 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + thumbId + '.png';
    }

    function getEventDetail(e) {
        var ids = [];

        if (Array.isArray(e.id))
            ids = e.id.slice();
        else
            ids.push(e.id);

        if (typeof e.ambush !== 'undefined')
            ids.push(e.ambush);

        for (i = 0; i < ids.length; i++) {
            var ed = $('#eventDetailClone').clone();
            var id = ids[i];
            ed.attr('id', "eventDetail_" + id);

            var data;
            if (e.type == 'fortnight')
                data = fortnights[id];
            else if (e.type == 'raid')
                data = raids[id];
            else if (e.type == 'coliseum')
                data = coliseums[id];

            if (typeof e.ambush !== 'undefined' && typeof data === 'undefined')
                data = ambushes[id];

            var imgSrc = getThumb(data['thumb']);
            ed.find('.eventThumb').html('<img src="' + imgSrc + '" height="50" width="50" />');

            ed.find('.eventTitle').text(data['name']);

            if (typeof drops[id] !== 'undefined' && drops[id] != '') {
                var dropList = ed.find('.dropList');
                var dropUrl = 'http://optc-db.github.io/drops/?' + drops[id];

                dropList.find('.url').html('<a href="' + dropUrl + '" target="_blank">Drop List</a>');
                dropList.show();
            }

            if (typeof gw[id] !== 'undefined' && gw[id] != '') {
                var gamewith = ed.find('.gamewith');
                var gwUrl = 'https://トレクル.gamewith.jp/article/show/' + gw[id];

                gamewith.find('.url').html('<a href="' + gwUrl + '" target="_blank">Gamewith Stage Guide</a>');
                gamewith.show();
            }

            if (typeof sd[id] !== 'undefined' && sd[id] != '') {
                var sevenDays = ed.find('.sevenDays');
                var sdUrl = 'https://youtu.be/' + sd[id];

                sevenDays.find('.url').html('<a href="' + sdUrl + '" target="_blank">7 Days YouTube Stage Guide</a>');
                sevenDays.show();
            }

            if (typeof wiki[id] !== 'undefined' && wiki[id] != '') {
                var redditWiki = ed.find('.redditWiki');
                var wikiUrl = 'https://www.reddit.com/r/OnePieceTC/wiki/' + wiki[id];

                redditWiki.find('.url').html('<a href="' + wikiUrl + '" target="_blank">Reddit Stage Guide Wiki</a>');
                redditWiki.show();
            }

            if (typeof videoWiki[id] !== 'undefined' && videoWiki[id] != '') {
                var redditVideoWiki = ed.find('.redditVideoWiki');
                var videoWikiUrl = 'https://www.reddit.com/r/OnePieceTC/wiki/video/' + videoWiki[id];

                redditVideoWiki.find('.url').html('<a href="' + videoWikiUrl + '" target="_blank">Reddit Video Wiki</a>');
                redditVideoWiki.show();
            }

            if (typeof slefty[id] !== 'undefined' && slefty[id] != '') {
                var sleftyTeamDb = ed.find('.sleftyTeamDb');
                var sleftyUrl = 'http://slefty.herokuapp.com/' + slefty[id];

                sleftyTeamDb.find('.url').html('<a href="' + sleftyUrl + '" target="_blank">Slefty Team Database</a>');
                sleftyTeamDb.show();
            }

            $('#eventDetail').append(ed);
            ed.show();
        }

        var modalCloseButton = $('#modalCloseButton').clone();
        $('#eventDetail').append(modalCloseButton);
        $(modalCloseButton).show();
    }

    var eventArray = [];

    fortnightEvents.forEach(function(e) {
        eventArray.push(createFortnightEvent(e));
    });

    raidEvents.forEach(function(e) {
        eventArray.push(createRaidEvent(e));
    });

    coliseumEvents.forEach(function(e) {
        eventArray.push(createColiseumEvent(e));
    });

    specialEvents.forEach(function(e) {
        eventArray.push(createSpecialEvent(e));
    });

    specialBgEvents.forEach(function(e) {
        eventArray.push(createSpecialBgEvent(e));
    });

    // Permanent Mihawk
    var mihawk = {
        'thumb': 'mihawk',
        'type': 'event',
        'color': 'rgba(0, 0, 0, 0)',
        'rendering': 'background',
        'permaStart': '2017-06-08',
        'dow': [5, 6]
    }
    eventArray.push(mihawk);

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicTwo'
        },
        viewRender: function(view, element) {
            if (view.name === 'basicTwo')
                $('#calendar').fullCalendar('option', 'contentHeight', 400);
            else
                $('#calendar').fullCalendar('option', 'contentHeight', null);

            if (screen.width < 768) {
                $('#mobile-info').show();

                if (view.name === 'basicTwo') {
                    $('#vp').attr('content', 'width=device-width, initial-scale=1.0');
                    $('#calendar').width('300.6px');
                } else {
                    $('#vp').attr('content', '');
                    $('#calendar').width('1052.1px');
                }
            }
        },
        views: {
            basicTwo: {
                type: 'basic',
                duration: {
                    days: 2
                },
                buttonText: '2-day'
            }
        },
        aspectRatio: 0.55,
        events: eventArray,
        eventRender: function(event, element) {
            if (event.type == 'fortnight' || event.type == 'raid' || (event.type == 'special' && event.id != 'dummy')) {
                var thumbArray = [];
                if (Array.isArray(event.thumb))
                    thumbArray = event.thumb.slice();
                else
                    thumbArray.push(event.thumb);

                for (i = 0; i < thumbArray.length; i++) {
                    var imgSrc = getThumb(thumbArray[i]);

                    element.find('.fc-title').before(
                        '<img src="' + imgSrc + '" height="30" width="30" style="float: left;" />'
                    );
                }
            } else if (event.type == 'raidAmbush' || event.type == 'coliAmbush') {
                var imgSrc = getThumb(event.thumb);

                element.find('.fc-title').before(
                    '<img src="' + imgSrc + '" height="15" width="15" style="float: left;" />'
                );
            } else if (event.type == 'coliseum') {
                for (i = 0; i < event.newThumb.length; i++) {
                    var imgSrc = getThumb(event.newThumb[i]);

                    element.find('.fc-title').before(
                        '<img src="' + imgSrc + '" height="30" width="30" style="float: left;" />'
                    );
                }

                for (i = 0; i < event.repThumb.length; i++) {
                    var imgSrc = getThumb(event.repThumb[i]);

                    element.find('.fc-title').before(
                        '<img src="' + imgSrc + '" height="20" width="20" style="float: left;" />'
                    );
                }
            } else {
                element.closest('.fc-bgevent').css('background-image', 'url("assets/img/' + event.thumb + '.png")');
            }

            if (typeof event.permaStart !== 'undefined')
                return event.start.isAfter(event.permaStart);
        },
        eventClick: function(event) {
            if (event.type == 'fortnight' || event.type == 'raid' || event.type == 'coliseum') {
                $('#eventDetail').empty();
                getEventDetail(event);
                $('#eventDetailModal').modal();
            }
        },
        eventOrder: 'id',
        displayEventTime: false
    });

    // Auto change to 2-day view when on mobile
    if (screen.width < 768)
        $('#calendar').fullCalendar('changeView', 'basicTwo');

    // Swipe left/right for next/prev
    var hm = new Hammer(document.getElementById('calendar'));
    hm.on('swipeleft', function(ev) {
        $('#calendar').fullCalendar('next');
    });
    hm.on('swiperight', function(ev) {
        $('#calendar').fullCalendar('prev');
    });
});
