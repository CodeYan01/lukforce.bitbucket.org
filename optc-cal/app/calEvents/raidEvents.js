var ywb = 1258;
var shanks = 1380;
var cavendish = 1530;
var garp = 1846;
var sengoku = 2283;

var ywb_n = 3354;

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
        end: '2017-08-01',
        pst_0: true
    },
    {
        id: 1680,
        start: '2017-08-01',
        pst_0: true
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
        end: '2017-08-15',
        pst_0: true
    },
    {
        id: 1623,
        start: '2017-08-15',
        pst_0: true
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
        end: '2017-08-29',
        pst_0: true
    },
    {
        id: 1669,
        start: '2017-08-29',
        pst_0: true
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
        end: '2017-09-15',
        pst_0: true
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
        end: '2017-09-29',
        pst_0: true
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
        pst_0: true
    },
    {
        id: 1680,
        start: '2017-10-10',
        end: '2017-10-12',
        pst_0: true
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
        end: '2017-11-07',
        pst_0: true
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
        end: '2017-11-17',
        pst_0: true
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
        end: '2017-11-28',
        pst_0: true
    },
    {
        id: 1780,
        start: '2017-11-28',
        end: '2017-12-01',
        pst_0: true
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
        start: '2017-12-01'
    },
    {
        id: [353, 1108, 1163],
        start: '2017-12-02'
    },
    {
        id: [353, 1108, 1163],
        start: '2017-12-03'
    },
    {
        id: 1739,
        start: '2017-12-06',
        end: '2017-12-12',
        pst_0: true
    },
    {
        id: 1739,
        start: '2017-12-12',
        pst_0: true
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
        end: '2017-12-29',
        pst_0: true
    },
    {
        id: [603, 836],
        start: '2017-12-27'
    },
    {
        id: [603, 836, 1374],
        start: '2017-12-28'
    },
    {
        id: [603, 836],
        start: '2017-12-29'
    },
    {
        id: [575, 865],
        start: '2017-12-31'
    },
    {
        id: [516, 518, 575],
        start: '2018-01-01'
    },
    {
        id: 575,
        start: '2018-01-02',
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
        end: '2018-01-12',
        pst_0: true
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
        id: 2263,
        start: '2018-02-26',
        pst_0: true
    },
    {
        id: 2263,
        start: '2018-02-27',
        end: '2018-03-01',
        pst_0: true
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
        end: '2018-03-16',
        pst_0: true
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
        end: '2018-04-10',
        pst_0: true
    },
    {
        id: 1826,
        start: '2018-04-10',
        pst_0: true
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
        end: '2018-04-12',
        pst_0: true
    },
    {
        id: 1669,
        start: '2018-04-12',
        end: '2018-04-14',
        pst_0: true
    },
    {
        id: 2263,
        start: '2018-04-13'
    },
    {
        id: 795,
        start: '2018-04-14'
    },
    {
        id: 1623,
        start: '2018-04-14',
        end: '2018-04-16',
        pst_0: true
    },
    {
        id: 1298,
        start: '2018-04-15'
    },
    {
        id: 1780,
        start: '2018-04-16',
        pst_0: true
    },
    {
        id: 1780,
        start: '2018-04-17',
        pst_0: true
    },
    {
        id: [575, 603, 836, 390],
        start: '2018-04-20'
    },
    {
        id: [575, 603, 836, 978],
        start: '2018-04-21'
    },
    {
        id: [575, 603, 836, 1815],
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
        id: 1518,
        start: '2018-05-03'
    },
    {
        id: 1727,
        start: '2018-05-04',
        end: '2018-05-06',
        pst_0: true
    },
    {
        id: 1879,
        start: '2018-05-04'
    },
    {
        id: 1432,
        start: '2018-05-05',
        ambush: ywb
    },
    {
        id: 603,
        start: '2018-05-06'
    },
    {
        id: 1772,
        start: '2018-05-07',
        pst_0: true
    },
    {
        id: 1772,
        start: '2018-05-08',
        end: '2018-05-14',
        pst_0: true
    },
    {
        id: 1047,
        start: '2018-05-10',
        ambush: shanks
    },
    {
        id: 933,
        start: '2018-05-11'
    },
    {
        id: 865,
        start: '2018-05-12',
        ambush: ywb
    },
    {
        id: 989,
        start: '2018-05-13'
    },
    {
        id: 306,
        start: '2018-05-18'
    },
    {
        id: [771, 1374],
        start: '2018-05-19'
    },
    {
        id: 1518,
        start: '2018-05-20'
    },
    {
        id: 795,
        start: '2018-05-23'
    },
    {
        id: [516, 518],
        start: '2018-05-24'
    },
    {
        id: 1815,
        start: '2018-05-25',
        ambush: cavendish
    },
    {
        id: 2263,
        start: '2018-05-26'
    },
    {
        id: 933,
        start: '2018-05-27'
    },
    {
        id: 1815,
        start: '2018-05-31'
    },
    {
        id: 447,
        start: '2018-06-01'
    },
    {
        id: 1943,
        start: '2018-06-02'
    },
    {
        id: 1432,
        start: '2018-06-03'
    },
    {
        id: 1930,
        start: '2018-06-07',
        end: '2018-06-12',
        pst_0: true
    },
    {
        id: 1930,
        start: '2018-06-12',
        end: '2018-06-14',
        pst_0: true
    },
    {
        id: 1374,
        start: '2018-06-08'
    },
    {
        id: 1879,
        start: '2018-06-09'
    },
    {
        id: 978,
        start: '2018-06-10'
    },
    {
        id: [353, 1108, 1163],
        start: '2018-06-14'
    },
    {
        id: [353, 1108, 1163],
        start: '2018-06-15'
    },
    {
        id: [353, 1108, 1163],
        start: '2018-06-16'
    },
    {
        id: [353, 1108, 1163],
        start: '2018-06-17'
    },
    {
        id: 306,
        start: '2018-06-22'
    },
    {
        id: 353,
        start: '2018-06-23'
    },
    {
        id: 1163,
        start: '2018-06-24'
    },
    {
        id: 1727,
        start: '2018-06-25',
        pst_0: true
    },
    {
        id: 1727,
        start: '2018-06-26',
        pst_0: true
    },
    {
        id: 1739,
        start: '2018-06-27',
        end: '2018-06-29',
        pst_0: true
    },
    {
        id: 865,
        start: '2018-06-28',
        ambush: shanks
    },
    {
        id: 1108,
        start: '2018-06-29',
        ambush: cavendish
    },
    {
        id: 1826,
        start: '2018-06-29',
        end: '2018-07-01',
        pst_0: true
    },
    {
        id: [516, 518],
        start: '2018-06-30'
    },
    {
        id: 1772,
        start: '2018-07-01',
        end: '2018-07-03',
        pst_0: true
    },
    {
        id: 1830,
        start: '2018-07-01'
    },
    {
        id: 836,
        start: '2018-07-05'
    },
    {
        id: 1830,
        start: '2018-07-06'
    },
    {
        id: 1879,
        start: '2018-07-07',
        ambush: garp
    },
    {
        id: 1518,
        start: '2018-07-08'
    },
    {
        id: 1374,
        start: '2018-07-12'
    },
    {
        id: 306,
        start: '2018-07-13'
    },
    {
        id: 933,
        start: '2018-07-14'
    },
    {
        id: 1595,
        start: '2018-07-15'
    },
    {
        id: 865,
        start: '2018-07-19'
    },
    {
        id: 1047,
        start: '2018-07-20',
        ambush: ywb
    },
    {
        id: 390,
        start: '2018-07-21'
    },
    {
        id: 1924,
        start: '2018-07-22'
    },
    {
        id: 447,
        start: '2018-07-26'
    },
    {
        id: 1298,
        start: '2018-07-27'
    },
    {
        id: 978,
        start: '2018-07-28'
    },
    {
        id: 1943,
        start: '2018-07-29'
    },
    {
        id: [516, 518],
        start: '2018-08-02'
    },
    {
        id: 1595,
        start: '2018-08-03',
        ambush: garp
    },
    {
        id: 1815,
        start: '2018-08-04'
    },
    {
        id: 306,
        start: '2018-08-05'
    },
    {
        id: 2263,
        start: '2018-08-09'
    },
    {
        id: 1432,
        start: '2018-08-10',
        ambush: shanks
    },
    {
        id: 2015,
        start: '2018-08-11'
    },
    {
        id: 447,
        start: '2018-08-12'
    },
    {
        id: 795,
        start: '2018-08-16'
    },
    {
        id: 2263,
        start: '2018-08-17'
    },
    {
        id: 1595,
        start: '2018-08-18',
        ambush: shanks
    },
    {
        id: 1680,
        start: '2018-08-19',
        end: '2018-08-21',
        pst_0: true
    },
    {
        id: 865,
        start: '2018-08-19',
        ambush: shanks
    },
    {
        id: 1669,
        start: '2018-08-21',
        end: '2018-08-23',
        pst_0: true
    },
    {
        id: 1623,
        start: '2018-08-23',
        end: '2018-08-25',
        pst_0: true
    },
    {
        id: 978,
        start: '2018-08-23',
        ambush: garp
    },
    {
        id: 1047,
        start: '2018-08-24'
    },
    {
        id: 1780,
        start: '2018-08-25',
        end: '2018-08-27',
        pst_0: true
    },
    {
        id: 390,
        start: '2018-08-25'
    },
    {
        id: 2015,
        start: '2018-08-26'
    },
    {
        id: 978,
        start: '2018-08-30'
    },
    {
        id: 1298,
        start: '2018-08-31'
    },
    {
        id: 1432,
        start: '2018-09-01',
        ambush: ywb
    },
    {
        id: 1595,
        start: '2018-09-02'
    },
    {
        id: 1924,
        start: '2018-09-06'
    },
    {
        id: 1727,
        start: '2018-09-07',
        end: '2018-09-11',
        pst_0: true
    },
    {
        id: 1727,
        start: '2018-09-11',
        end: '2018-09-13',
        pst_0: true
    },
    {
        id: 1830,
        start: '2018-09-07'
    },
    {
        id: 1298,
        start: '2018-09-08',
        ambush: cavendish
    },
    {
        id: 836,
        start: '2018-09-09'
    },
    {
        id: [447, 865, 933],
        start: '2018-09-11'
    },
    {
        id: [447, 865, 933],
        start: '2018-09-12'
    },
    {
        id: [447, 865, 933, 2033],
        start: '2018-09-13'
    },
    {
        id: 2263,
        start: '2018-09-14'
    },
    {
        id: 1943,
        start: '2018-09-15'
    },
    {
        id: 1879,
        start: '2018-09-16'
    },
    {
        id: 1374,
        start: '2018-09-20'
    },
    {
        id: 1815,
        start: '2018-09-21'
    },
    {
        id: 795,
        start: '2018-09-22'
    },
    {
        id: 2015,
        start: '2018-09-23'
    },
    {
        id: 1518,
        start: '2018-09-27'
    },
    {
        id: 1047,
        start: '2018-09-28',
        ambush: ywb
    },
    {
        id: 2033,
        start: '2018-09-29'
    },
    {
        id: 865,
        start: '2018-09-30'
    },
    {
        id: 1298,
        start: '2018-10-01'
    },
    {
        id: 306,
        start: '2018-10-02'
    },
    {
        id: 1879,
        start: '2018-10-03'
    },
    {
        id: 1943,
        start: '2018-10-04'
    },
    {
        id: 865,
        start: '2018-10-05'
    },
    {
        id: 2015,
        start: '2018-10-06'
    },
    {
        id: [516, 518],
        start: '2018-10-07'
    },
    {
        id: 1924,
        start: '2018-10-08'
    },
    {
        id: 1830,
        start: '2018-10-09'
    },
    {
        id: 1815,
        start: '2018-10-10'
    },
    {
        id: 1432,
        start: '2018-10-11'
    },
    {
        id: 390,
        start: '2018-10-12'
    },
    {
        id: 1815,
        start: '2018-10-13'
    },
    {
        id: 447,
        start: '2018-10-14'
    },
    {
        id: 2033,
        start: '2018-10-15'
    },
    {
        id: 978,
        start: '2018-10-16'
    },
    {
        id: 795,
        start: '2018-10-17'
    },
    {
        id: 306,
        start: '2018-10-18'
    },
    {
        id: 1879,
        start: '2018-10-19'
    },
    {
        id: 1518,
        start: '2018-10-20'
    },
    {
        id: 1924,
        start: '2018-10-21',
        ambush: ywb
    },
    {
        id: 1374,
        start: '2018-10-22'
    },
    {
        id: 836,
        start: '2018-10-23'
    },
    {
        id: 2015,
        start: '2018-10-24'
    },
    {
        id: 1943,
        start: '2018-10-25'
    },
    {
        id: 2263,
        start: '2018-10-26',
        ambush: cavendish
    },
    {
        id: 933,
        start: '2018-10-27'
    },
    {
        id: 1595,
        start: '2018-10-28'
    },
    {
        id: [516, 518],
        start: '2018-10-29'
    },
    {
        id: 865,
        start: '2018-10-30'
    },
    {
        id: 1647,
        start: '2018-10-31',
        end: '2018-11-06',
        pst_0: true
    },
    {
        id: 1647,
        start: '2018-11-06',
        pst_0: true
    },
    {
        id: 1518,
        start: '2018-10-31'
    },
    {
        id: 1047,
        start: '2018-11-01'
    },
    {
        id: 2158,
        start: '2018-11-02'
    },
    {
        id: 1879,
        start: '2018-11-03',
        ambush: garp
    },
    {
        id: 1830,
        start: '2018-11-04'
    },
    {
        id: 1047,
        start: '2018-11-05'
    },
    {
        id: 795,
        start: '2018-11-06'
    },
    {
        id: 1518,
        start: '2018-11-07'
    },
    {
        id: 836,
        start: '2018-11-08'
    },
    {
        id: 933,
        start: '2018-11-09'
    },
    {
        id: 1924,
        start: '2018-11-10',
        ambush: shanks
    },
    {
        id: [516, 518],
        start: '2018-11-11'
    },
    {
        id: 2015,
        start: '2018-11-12'
    },
    {
        id: 989,
        start: '2018-11-13'
    },
    {
        id: 306,
        start: '2018-11-14'
    },
    {
        id: 1047,
        start: '2018-11-15'
    },
    {
        id: 1595,
        start: '2018-11-16'
    },
    {
        id: 1943,
        start: '2018-11-17'
    },
    {
        id: 1879,
        start: '2018-11-18'
    },
    {
        id: 1374,
        start: '2018-11-19'
    },
    {
        id: 1298,
        start: '2018-11-20'
    },
    {
        id: 390,
        start: '2018-11-21'
    },
    {
        id: 933,
        start: '2018-11-22'
    },
    {
        id: 2263,
        start: '2018-11-23'
    },
    {
        id: 2158,
        start: '2018-11-24'
    },
    {
        id: 1374,
        start: '2018-11-25'
    },
    {
        id: 1772,
        start: '2018-11-26',
        pst_0: true
    },
    {
        id: 1772,
        start: '2018-11-27',
        end: '2018-11-30',
        pst_0: true
    },
    {
        id: 447,
        start: '2018-11-26'
    },
    {
        id: 836,
        start: '2018-11-27'
    },
    {
        id: 1830,
        start: '2018-11-28'
    },
    {
        id: 1924,
        start: '2018-11-29'
    },
    {
        id: 1780,
        start: '2018-11-30',
        end: '2018-12-03',
        pst_0: true
    },
    {
        id: 2097,
        start: '2018-11-30'
    },
    {
        id: 1432,
        start: '2018-12-01',
        ambush: cavendish
    },
    {
        id: 795,
        start: '2018-12-02'
    },
    {
        id: 1623,
        start: '2018-12-03',
        pst_0: true
    },
    {
        id: 1623,
        start: '2018-12-04',
        end: '2018-12-07',
        pst_0: true
    },
    {
        id: 795,
        start: '2018-12-03'
    },
    {
        id: 447,
        start: '2018-12-04'
    },
    {
        id: 447,
        start: '2018-12-05'
    },
    {
        id: 933,
        start: '2018-12-06'
    },
    {
        id: 1826,
        start: '2018-12-07',
        end: '2018-12-11',
        pst_0: true
    },
    {
        id: 933,
        start: '2018-12-07'
    },
    {
        id: 1298,
        start: '2018-12-08',
        ambush: ywb
    },
    {
        id: 2033,
        start: '2018-12-09'
    },
    {
        id: 2033,
        start: '2018-12-10'
    },
    {
        id: 1163,
        start: '2018-12-11'
    },
    {
        id: 1163,
        start: '2018-12-12'
    },
    {
        id: 1924,
        start: '2018-12-13',
        ambush: cavendish
    },
    {
        id: 353,
        start: '2018-12-14'
    },
    {
        id: 353,
        start: '2018-12-15'
    },
    {
        id: 1830,
        start: '2018-12-16'
    },
    {
        id: 1830,
        start: '2018-12-17'
    },
    {
        id: 1374,
        start: '2018-12-18'
    },
    {
        id: 1374,
        start: '2018-12-19'
    },
    {
        id: 2070,
        start: '2018-12-19',
        end: '2018-12-25',
        pst_0: true
    },
    {
        id: 2070,
        start: '2018-12-25',
        pst_0: true
    },
    {
        id: 1163,
        start: '2018-12-20'
    },
    {
        id: 1163,
        start: '2018-12-21'
    },
    {
        id: 2158,
        start: '2018-12-22',
        ambush: shanks
    },
    {
        id: 353,
        start: '2018-12-23'
    },
    {
        id: 353,
        start: '2018-12-24'
    },
    {
        id: 516,
        start: '2018-12-25'
    },
    {
        id: 516,
        start: '2018-12-26'
    },
    {
        id: 3338,
        start: '2018-12-27'
    },
    {
        id: 2097,
        start: '2018-12-28'
    },
    {
        id: 1879,
        start: '2018-12-29',
        ambush: shanks
    },
    {
        id: 2033,
        start: '2018-12-30'
    },
    {
        id: 2033,
        start: '2018-12-31'
    },
    {
        id: 3338,
        start: '2019-01-01'
    },
    {
        id: 306,
        start: '2019-01-02'
    },
    {
        id: 306,
        start: '2019-01-03'
    },
    {
        id: 390,
        start: '2019-01-04'
    },
    {
        id: 390,
        start: '2019-01-05'
    },
    {
        id: 2158,
        start: '2019-01-06'
    },
    {
        id: 1830,
        start: '2019-01-07'
    },
    {
        id: 1830,
        start: '2019-01-08'
    },
    {
        id: 447,
        start: '2019-01-09'
    },
    {
        id: 447,
        start: '2019-01-10'
    },
    {
        id: 1879,
        start: '2019-01-11'
    },
    {
        id: 516,
        start: '2019-01-12'
    },
    {
        id: 516,
        start: '2019-01-13'
    },
    {
        id: 1374,
        start: '2019-01-14'
    },
    {
        id: 1374,
        start: '2019-01-15'
    },
    {
        id: 1374,
        start: '2019-01-16'
    },
    {
        id: 1432,
        start: '2019-01-17'
    },
    {
        id: 1432,
        start: '2019-01-18'
    },
    {
        id: 2097,
        start: '2019-01-19',
        ambush: garp
    },
    {
        id: 2033,
        start: '2019-01-20'
    },
    {
        id: 2033,
        start: '2019-01-21'
    },
    {
        id: 3340,
        start: '2019-01-22',
        end: '2019-01-26',
        pst_0: true
    },
    {
        id: 1727,
        start: '2019-01-22',
        end: '2019-01-27',
        pst_0: true
    },
    {
        id: 795,
        start: '2019-01-22'
    },
    {
        id: 795,
        start: '2019-01-23'
    },
    {
        id: 3338,
        start: '2019-01-24'
    },
    {
        id: 3338,
        start: '2019-01-25'
    },
    {
        id: 1298,
        start: '2019-01-26',
        ambush: cavendish
    },
    {
        id: 1669,
        start: '2019-01-27',
        end: '2019-01-29',
        pst_0: true
    },
    {
        id: 1669,
        start: '2019-01-29',
        end: '2019-02-01',
        pst_0: true
    },
    {
        id: 989,
        start: '2019-01-27'
    },
    {
        id: 989,
        start: '2019-01-28'
    },
    {
        id: 306,
        start: '2019-01-29'
    },
    {
        id: 306,
        start: '2019-01-30'
    },
    {
        id: 3342,
        start: '2019-01-30',
        end: '2019-02-01'
    },
    {
        id: 3342,
        start: '2019-02-01',
        end: '2019-02-05'
    },
    {
        id: 1374,
        start: '2019-01-31'
    },
    {
        id: 1374,
        start: '2019-02-01'
    },
    {
        id: 1432,
        start: '2019-02-02',
        ambush: cavendish
    },
    {
        id: 1830,
        start: '2019-02-03'
    },
    {
        id: 1830,
        start: '2019-02-04'
    },
    {
        id: 390,
        start: '2019-02-05'
    },
    {
        id: 390,
        start: '2019-02-06'
    },
    {
        id: 1924,
        start: '2019-02-07',
        ambush: shanks
    },
    {
        id: [1108, 2197],
        start: '2019-02-08'
    },
    {
        id: [1108, 2197],
        start: '2019-02-09'
    },
    {
        id: 1879,
        start: '2019-02-10'
    },
    {
        id: 1879,
        start: '2019-02-11'
    },
    {
        id: 933,
        start: '2019-02-12'
    },
    {
        id: 933,
        start: '2019-02-13'
    },
    {
        id: 516,
        start: '2019-02-14'
    },
    {
        id: 516,
        start: '2019-02-15'
    },
    {
        id: 2097,
        start: '2019-02-16',
        ambush: garp
    },
    {
        id: 1108,
        start: '2019-02-17'
    },
    {
        id: 1108,
        start: '2019-02-18'
    },
    {
        id: 518,
        start: '2019-02-19'
    },
    {
        id: 518,
        start: '2019-02-20'
    },
    {
        id: 2158,
        start: '2019-02-21'
    },
    {
        id: 2158,
        start: '2019-02-22'
    },
    {
        id: 3338,
        start: '2019-02-23',
        ambush: ywb
    },
    {
        id: 306,
        start: '2019-02-24'
    },
    {
        id: 306,
        start: '2019-02-25'
    },
    {
        id: 447,
        start: '2019-02-26'
    },
    {
        id: 447,
        start: '2019-02-27'
    },
    {
        id: 1772,
        start: '2019-02-28',
        end: '2019-03-03'
    },
    {
        id: 795,
        start: '2019-02-28'
    },
    {
        id: 795,
        start: '2019-03-01'
    },
    {
        id: 1879,
        start: '2019-03-02',
        ambush: garp
    },
    {
        id: 1432,
        start: '2019-03-03'
    },
    {
        id: 1432,
        start: '2019-03-04'
    },
    {
        id: 1924,
        start: '2019-03-05'
    },
    {
        id: 1924,
        start: '2019-03-06'
    },
    {
        id: 390,
        start: '2019-03-07'
    },
    {
        id: 390,
        start: '2019-03-08'
    },
    {
        id: 2097,
        start: '2019-03-09',
        ambush: shanks
    },
    {
        id: 1298,
        start: '2019-03-10'
    },
    {
        id: 1298,
        start: '2019-03-11'
    },
    {
        id: 978,
        start: '2019-03-12'
    },
    {
        id: 978,
        start: '2019-03-13'
    },
    {
        id: 306,
        start: '2019-03-14'
    },
    {
        id: 306,
        start: '2019-03-15'
    },
    {
        id: 2197,
        start: '2019-03-16',
        ambush: garp
    },
    {
        id: 518,
        start: '2019-03-17'
    },
    {
        id: 518,
        start: '2019-03-18'
    },
    {
        id: 1830,
        start: '2019-03-19'
    },
    {
        id: 1830,
        start: '2019-03-20'
    },
    {
        id: 2033,
        start: '2019-03-21'
    },
    {
        id: 2033,
        start: '2019-03-22'
    },
    {
        id: 3338,
        start: '2019-03-23',
        ambush: shanks
    },
    {
        id: [516, 1924, 2263],
        start: '2019-03-24'
    },
    {
        id: [516, 1924, 2263],
        start: '2019-03-25'
    },
    {
        id: [933, 1374, 2097],
        start: '2019-03-26'
    },
    {
        id: [933, 1374, 2097],
        start: '2019-03-27'
    },
    {
        id: [447, 1432, 1879],
        start: '2019-03-28'
    },
    {
        id: [447, 1432, 1879],
        start: '2019-03-29'
    },
    {
        id: [2158, 2281],
        start: '2019-03-30',
        ambush: ywb
    },
    {
        id: [795, 2281],
        start: '2019-03-31'
    },
    {
        id: [795, 2281],
        start: '2019-04-01'
    },
    {
        id: [390, 2281],
        start: '2019-04-02'
    },
    {
        id: [390, 2070],
        start: '2019-04-03'
    },
    {
        id: [306, 2070],
        start: '2019-04-04'
    },
    {
        id: [306, 2070],
        start: '2019-04-05'
    },
    {
        id: [2070, 2197],
        start: '2019-04-06',
        ambush: shanks
    },
    {
        id: 1298,
        start: '2019-04-07'
    },
    {
        id: 1298,
        start: '2019-04-08'
    },
    {
        id: 978,
        start: '2019-04-09'
    },
    {
        id: 978,
        start: '2019-04-10'
    },
    {
        id: 1830,
        start: '2019-04-11'
    },
    {
        id: 1830,
        start: '2019-04-12'
    },
    {
        id: 1924,
        start: '2019-04-13',
        ambush: garp
    },
    {
        id: 1374,
        start: '2019-04-14'
    },
    {
        id: 1374,
        start: '2019-04-15'
    },
    {
        id: 933,
        start: '2019-04-16'
    },
    {
        id: 933,
        start: '2019-04-17'
    },
    {
        id: 2097,
        start: '2019-04-18'
    },
    {
        id: 2097,
        start: '2019-04-19'
    },
    {
        id: 1879,
        start: '2019-04-20',
        ambush: cavendish
    },
    {
        id: 2033,
        start: '2019-04-21'
    },
    {
        id: [2033, 3340],
        start: '2019-04-22'
    },
    {
        id: [1432, 3340],
        start: '2019-04-23'
    },
    {
        id: [1432, 3340],
        start: '2019-04-24'
    },
    {
        id: [516, 3340],
        start: '2019-04-25'
    },
    {
        id: 516,
        start: '2019-04-26'
    },
    {
        id: 2158,
        start: '2019-04-27'
    },
    {
        id: [518, 3352],
        start: '2019-04-28',
        ambush: ywb_n
    },
    {
        id: [518, 3352],
        start: '2019-04-29',
        ambush: ywb_n
    },
    {
        id: [306, 3352],
        start: '2019-04-30',
        ambush: ywb_n
    },
    {
        id: [306, 3352],
        start: '2019-05-01',
        ambush: ywb_n
    },
    {
        id: [2197, 3352],
        start: '2019-05-02',
        ambush: ywb_n
    },
    {
        id: 2197,
        start: '2019-05-03'
    },
]
