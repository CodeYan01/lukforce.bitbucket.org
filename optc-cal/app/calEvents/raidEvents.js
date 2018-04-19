var ywb = 1258;
var shanks = 1380;
var cavendish = 1530;
var garp = 1846;

var raidEvents = [
    {
        id: 603,
        start: '2017-03-02'
    },
    {
        id: 447,
        start: '2017-03-05'
    },
    {
        id: 1047,
        start: '2017-03-09'
    },
    {
        id: 516,
        start: '2017-03-12'
    },
    {
        id: 575,
        start: '2017-03-16'
    },
    {
        id: 978,
        start: '2017-03-19'
    },
    {
        id: 836,
        start: '2017-03-23',
        ambush: ywb
    },
    {
        id: 306,
        start: '2017-03-24',
        ambush: ywb
    },
    {
        id: 771,
        start: '2017-03-25',
        ambush: ywb
    },
    {
        id: 418,
        start: '2017-03-26',
        ambush: ywb
    },
    {
        id: 227,
        start: '2017-03-30'
    },
    {
        id: 989,
        start: '2017-04-01'
    },
    {
        id: 390,
        start: '2017-04-02'
    },
    {
        id: 865,
        start: '2017-04-06'
    },
    {
        id: 518,
        start: '2017-04-09'
    },
    {
        id: 249,
        start: '2017-04-13'
    },
    {
        id: 978,
        start: '2017-04-16'
    },
    {
        id: 1298,
        start: '2017-04-20',
        ambush: ywb
    },
    {
        id: 865,
        start: '2017-04-21',
        ambush: ywb
    },
    {
        id: 447,
        start: '2017-04-22',
        ambush: ywb
    },
    {
        id: 418,
        start: '2017-04-23',
        ambush: ywb
    },
    {
        id: 654,
        start: '2017-04-27'
    },
    {
        id: 227,
        start: '2017-04-30'
    },
    {
        id: 836,
        start: '2017-05-04',
        ambush: shanks
    },
    {
        id: 603,
        start: '2017-05-07',
        ambush: shanks
    },
    {
        id: 933,
        start: '2017-05-11'
    },
    {
        id: 771,
        start: '2017-05-15'
    },
    {
        id: 306,
        start: '2017-05-18'
    },
    {
        id: 1047,
        start: '2017-05-19'
    },
    {
        id: 390,
        start: '2017-05-21'
    },
    {
        id: [516, 518],
        start: '2017-05-25'
    },
    {
        id: 227,
        start: '2017-05-28'
    },
    {
        id: 575,
        start: '2017-06-01',
        ambush: shanks
    },
    {
        id: 978,
        start: '2017-06-04',
        ambush: shanks
    },
    {
        id: 795,
        start: '2017-06-08'
    },
    {
        id: 353,
        start: '2017-06-11'
    },
    {
        id: 1163,
        start: '2017-06-15'
    },
    {
        id: 603,
        start: '2017-06-16'
    },
    {
        id: 1108,
        start: '2017-06-18'
    },
    {
        id: 418,
        start: '2017-06-22'
    },
    {
        id: [353, 1108, 1163],
        start: '2017-06-23'
    },
    {
        id: [353, 1108, 1163],
        start: '2017-06-24'
    },
    {
        id: [353, 1108, 1163],
        start: '2017-06-25'
    },
    {
        id: 865,
        start: '2017-06-29',
        ambush: ywb
    },
    {
        id: 654,
        start: '2017-07-02',
        ambush: ywb
    },
    {
        id: 1298,
        start: '2017-07-06'
    },
    {
        id: 795,
        start: '2017-07-09'
    },
    {
        id: 1047,
        start: '2017-07-13'
    },
    {
        id: 771,
        start: '2017-07-14'
    },
    {
        id: 989,
        start: '2017-07-15'
    },
    {
        id: 933,
        start: '2017-07-16'
    },
    {
        id: 836,
        start: '2017-07-17'
    },
    {
        id: 978,
        start: '2017-07-18'
    },
    {
        id: [516, 518],
        start: '2017-07-19'
    },
    {
        id: 418,
        start: '2017-07-20'
    },
    {
        id: 249,
        start: '2017-07-23'
    },
    {
        id: 1680,
        start: '2017-07-25',
        end: '2017-08-02'
    },
    {
        id: 447,
        start: '2017-07-27'
    },
    {
        id: 575,
        start: '2017-07-30'
    },
    {
        id: 603,
        start: '2017-08-03'
    },
    {
        id: 771,
        start: '2017-08-05'
    },
    {
        id: 933,
        start: '2017-08-06'
    },
    {
        id: 306,
        start: '2017-08-07'
    },
    {
        id: 1623,
        start: '2017-08-08',
        end: '2017-08-16'
    },
    {
        id: 390,
        start: '2017-08-10'
    },
    {
        id: 447,
        start: '2017-08-13'
    },
    {
        id: 865,
        start: '2017-08-17',
        ambush: ywb
    },
    {
        id: 1047,
        start: '2017-08-20',
        ambush: ywb
    },
    {
        id: [516, 518],
        start: '2017-08-21'
    },
    {
        id: 1669,
        start: '2017-08-22',
        end: '2017-08-30'
    },
    {
        id: 654,
        start: '2017-08-24'
    },
    {
        id: 249,
        start: '2017-08-27'
    },
    {
        id: 795,
        start: '2017-08-31',
        ambush: cavendish
    },
    {
        id: 836,
        start: '2017-09-03',
        ambush: cavendish
    },
    {
        id: 603,
        start: '2017-09-04',
        ambush: cavendish
    },
    {
        id: [516, 933],
        start: '2017-09-07'
    },
    {
        id: 771,
        start: '2017-09-08'
    },
    {
        id: 836,
        start: '2017-09-09'
    },
    {
        id: 1518,
        start: '2017-09-10'
    },
    {
        id: 1623,
        start: '2017-09-12',
        end: '2017-09-15'
    },
    {
        id: 447,
        start: '2017-09-14'
    },
    {
        id: 1374,
        start: '2017-09-17'
    },
    {
        id: 989,
        start: '2017-09-18'
    },
    {
        id: 978,
        start: '2017-09-21'
    },
    {
        id: 575,
        start: '2017-09-22'
    },
    {
        id: 654,
        start: '2017-09-23'
    },
    {
        id: 1298,
        start: '2017-09-25'
    },
    {
        id: 1669,
        start: '2017-09-26',
        end: '2017-09-29'
    },
    {
        id: 447,
        start: '2017-09-27',
        ambush: ywb
    },
    {
        id: 418,
        start: '2017-09-28',
        ambush: ywb
    },
    {
        id: 603,
        start: '2017-09-29',
        ambush: ywb
    },
    {
        id: 654,
        start: '2017-09-30',
        ambush: ywb
    },
    {
        id: 865,
        start: '2017-10-01',
        ambush: ywb
    },
    {
        id: 306,
        start: '2017-10-02',
        ambush: ywb
    },
    {
        id: 836,
        start: '2017-10-04',
        ambush: ywb
    },
    {
        id: 1047,
        start: '2017-10-05',
        ambush: ywb
    },
    {
        id: 575,
        start: '2017-10-06',
        ambush: ywb
    },
    {
        id: 1298,
        start: '2017-10-07',
        ambush: ywb
    },
    {
        id: 1680,
        start: '2017-10-09',
        end: '2017-10-12'
    },
    {
        id: 249,
        start: '2017-10-12'
    },
    {
        id: 771,
        start: '2017-10-15'
    },
    {
        id: [516, 518],
        start: '2017-10-16'
    },
    {
        id: 1924,
        start: '2017-10-19'
    },
    {
        id: 654,
        start: '2017-10-22'
    },
    {
        id: 1374,
        start: '2017-10-26'
    },
    {
        id: 795,
        start: '2017-10-29'
    },
    {
        id: 390,
        start: '2017-10-30'
    },
    {
        id: 1727,
        start: '2017-10-31',
        end: '2017-11-07'
    },
    {
        id: 447,
        start: '2017-11-02'
    },
    {
        id: 1518,
        start: '2017-11-05',
        ambush: ywb
    },
    {
        id: 865,
        start: '2017-11-09',
        ambush: ywb
    },
    {
        id: 418,
        start: '2017-11-12'
    },
    {
        id: 989,
        start: '2017-11-13'
    },
    {
        id: 1669,
        start: '2017-11-14',
        end: '2017-11-17'
    },
    {
        id: 1047,
        start: '2017-11-16'
    },
    {
        id: 1108,
        start: '2017-11-17'
    },
    {
        id: 353,
        start: '2017-11-18'
    },
    {
        id: 1163,
        start: '2017-11-19'
    },
    {
        id: 1696,
        start: '2017-11-20'
    },
    {
        id: 603,
        start: '2017-11-23'
    },
    {
        id: 1780,
        start: '2017-11-24',
        end: '2017-12-01'
    },
    {
        id: 306,
        start: '2017-11-26'
    },
    {
        id: 933,
        start: '2017-11-27'
    },
    {
        id: 1924,
        start: '2017-11-30'
    },
    {
        id: [353, 1108, 1163],
        start: '2017-12-01',
        end: '2017-12-04'
    },
    {
        id: 1739,
        start: '2017-12-06',
        end: '2017-12-13'
    },
    {
        id: 418,
        start: '2017-12-07'
    },
    {
        id: 249,
        start: '2017-12-11'
    },
    {
        id: 1696,
        start: '2017-12-14'
    },
    {
        id: 575,
        start: '2017-12-17'
    },
    {
        id: 978,
        start: '2017-12-18'
    },
    {
        id: 1595,
        start: '2017-12-21'
    },
    {
        id: 836,
        start: '2017-12-24'
    },
    {
        id: 1595,
        start: '2017-12-25'
    },
    {
        id: 1623,
        start: '2017-12-26',
        end: '2017-12-29'
    },
    {
        id: [603, 836],
        start: '2017-12-27',
        end: '2017-12-30'
    },
    {
        id: 1374,
        start: '2017-12-28'
    },
    {
        id: 865,
        start: '2017-12-31'
    },
    {
        id: 575,
        start: '2017-12-31',
        end: '2018-01-03'
    },
    {
        id: [516, 518],
        start: '2018-01-01'
    },
    {
        id: 1924,
        start: '2018-01-03'
    },
    {
        id: 1595,
        start: '2018-01-04'
    },
    {
        id: 1298,
        start: '2018-01-05'
    },
    {
        id: 771,
        start: '2018-01-06'
    },
    {
        id: 1518,
        start: '2018-01-07'
    },
    {
        id: 1680,
        start: '2018-01-09',
        end: '2018-01-12'
    },
    {
        id: 390,
        start: '2018-01-12'
    },
    {
        id: 654,
        start: '2018-01-13'
    },
    {
        id: 603,
        start: '2018-01-14'
    },
    {
        id: 306,
        start: '2018-01-18'
    },
    {
        id: 1047,
        start: '2018-01-19'
    },
    {
        id: 989,
        start: '2018-01-20'
    },
    {
        id: 771,
        start: '2018-01-21'
    },
    {
        id: 865,
        start: '2018-01-22'
    },
    {
        id: 1374,
        start: '2018-01-23'
    },
    {
        id: 575,
        start: '2018-01-24'
    },
    {
        id: 933,
        start: '2018-01-25'
    },
    {
        id: 836,
        start: '2018-01-26'
    },
    {
        id: 795,
        start: '2018-01-27'
    },
    {
        id: 978,
        start: '2018-01-28'
    },
    {
        id: 447,
        start: '2018-02-02'
    },
    {
        id: 933,
        start: '2018-02-03'
    },
    {
        id: 603,
        start: '2018-02-04'
    },
    {
        id: [516, 518],
        start: '2018-02-05'
    },
    {
        id: 771,
        start: '2018-02-06'
    },
    {
        id: 1924,
        start: '2018-02-08'
    },
    {
        id: 865,
        start: '2018-02-09'
    },
    {
        id: 1518,
        start: '2018-02-10'
    },
    {
        id: 1815,
        start: '2018-02-11'
    },
    {
        id: 1298,
        start: '2018-02-16'
    },
    {
        id: 978,
        start: '2018-02-17'
    },
    {
        id: 933,
        start: '2018-02-18'
    },
    {
        id: 2201,
        start: '2018-02-26',
        end: '2018-03-01'
    },
    {
        id: 836,
        start: '2018-02-27'
    },
    {
        id: 978,
        start: '2018-02-28'
    },
    {
        id: 1815,
        start: '2018-03-01'
    },
    {
        id: 1047,
        start: '2018-03-02'
    },
    {
        id: 575,
        start: '2018-03-03'
    },
    {
        id: 1298,
        start: '2018-03-04'
    },
    {
        id: 1595,
        start: '2018-03-05'
    },
    {
        id: 1924,
        start: '2018-03-06'
    },
    {
        id: 989,
        start: '2018-03-08'
    },
    {
        id: 795,
        start: '2018-03-09'
    },
    {
        id: 306,
        start: '2018-03-10'
    },
    {
        id: 390,
        start: '2018-03-11'
    },
    {
        id: 1727,
        start: '2018-03-13',
        end: '2018-03-16'
    },
    {
        id: 1432,
        start: '2018-03-15'
    },
    {
        id: 1374,
        start: '2018-03-16'
    },
    {
        id: 933,
        start: '2018-03-17'
    },
    {
        id: 654,
        start: '2018-03-18'
    },
    {
        id: 865,
        start: '2018-03-23'
    },
    {
        id: 603,
        start: '2018-03-24'
    },
    {
        id: [516, 518],
        start: '2018-03-25'
    },
    {
        id: 771,
        start: '2018-03-26'
    },
    {
        id: 1047,
        start: '2018-03-27'
    },
    {
        id: 1374,
        start: '2018-03-28'
    },
    {
        id: 836,
        start: '2018-03-29'
    },
    {
        id: 1518,
        start: '2018-03-30'
    },
    {
        id: 575,
        start: '2018-03-31'
    },
    {
        id: 447,
        start: '2018-04-01'
    },
    {
        id: 1826,
        start: '2018-04-03',
        end: '2018-04-11'
    },
    {
        id: 306,
        start: '2018-04-06'
    },
    {
        id: 1595,
        start: '2018-04-07'
    },
    {
        id: 1047,
        start: '2018-04-08'
    },
    {
        id: 1680,
        start: '2018-04-10',
        end: '2018-04-12'
    },
    {
        id: 1669,
        start: '2018-04-12',
        end: '2018-04-14'
    },
    {
        id: 2201,
        start: '2018-04-13'
    },
    {
        id: 795,
        start: '2018-04-14'
    },
    {
        id: 1623,
        start: '2018-04-14',
        end: '2018-04-16'
    },
    {
        id: 1298,
        start: '2018-04-15'
    },
    {
        id: 1780,
        start: '2018-04-16',
        end: '2018-04-18'
    },
    {
        id: 390,
        start: '2018-04-20'
    },
    {
        id: [575, 603, 836],
        start: '2018-04-20',
        end: '2018-04-23'
    },
    {
        id: 978,
        start: '2018-04-21'
    },
    {
        id: 1815,
        start: '2018-04-22'
    },
    {
        id: 1879,
        start: '2018-04-26'
    },
    {
        id: 1924,
        start: '2018-04-27'
    },
    {
        id: [836, 1595],
        start: '2018-04-28'
    },
    {
        id: 1595,
        start: '2018-04-29'
    },
    {
        id: 1432,
        start: '2018-05-05',
        ambush: ywb
    },
]
