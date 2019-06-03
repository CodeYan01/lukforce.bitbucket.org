var specialEvents = [
    {
        id: 'dummy',
        start: '2017-07-26',
        end: '2017-07-30'
    },
    {
        id: 'dummy',
        start: '2018-01-13'
    },
    {
        id: 'dummy',
        start: '2018-02-17'
    },
    {
        id: 'dummy',
        start: '2018-03-10'
    },
    {
        id: 'dummy',
        start: '2018-04-12'
    },
    {
        id: 'dummy',
        start: '2018-04-28'
    },
    {
        id: 'dummy',
        start: '2018-04-30'
    },
    {
        id: 'dummy',
        start: '2018-05-26'
    },
    {
        id: 'dummy',
        start: '2018-08-11'
    },
    {
        id: 'dummy',
        start: '2018-09-15'
    },
    {
        id: 'dummy',
        start: '2018-11-09',
        end: '2018-11-11'
    },
    {
        id: 'dummy',
        start: '2019-01-26'
    },
    {
        id: 'dummy',
        start: '2019-02-12'
    },
    {
        id: 'dummy',
        start: '2019-05-29',
        end: '2019-06-02'
    },

    {
        id: 'ss_0436',
        start: '2017-07-11',
        end: '2017-07-14'
    },
    {
        id: 'ss_0584',
        start: '2017-07-14',
        end: '2017-07-17'
    },
    {
        id: 'ss_0394',
        start: '2017-07-17'
    },
    {
        id: 'ss_0394',
        start: '2017-07-18',
        end: '2017-07-20'
    },
    {
        id: 'ss_0511',
        start: '2017-07-20',
        end: '2017-07-23'
    },
    {
        id: 'ss_0716',
        start: '2017-07-23',
        end: '2017-07-25'
    },
    {
        id: 'ss_0716',
        start: '2017-07-25'
    },
    {
        id: 'bb_1314',
        start: '2017-10-24',
        end: '2017-10-26'
    },
    {
        id: '20_1684',
        start: '2017-11-06'
    },
    {
        id: '20_1684',
        start: '2017-11-07',
        end: '2017-11-14'
    },
    {
        id: '20_1684',
        start: '2017-11-14',
        end: '2017-11-20'
    },
    {
        id: '20_1682',
        start: '2017-11-15',
        end: '2017-11-21'
    },
    {
        id: '20_1682',
        start: '2017-11-21',
        end: '2017-11-28'
    },
    {
        id: '20_1682',
        start: '2017-11-28'
    },
    {
        id: ['20_1755', '20_1753'],
        start: '2017-12-13',
        end: '2017-12-19'
    },
    {
        id: ['20_1755', '20_1753'],
        start: '2017-12-19',
        end: '2017-12-26'
    },
    {
        id: ['20_1755', '20_1753'],
        start: '2017-12-26'
    },
    {
        id: 'bb_1404',
        start: '2018-01-12',
        end: '2018-01-14'
    },
    {
        id: ['cc_0530', 'cc_0562', 'cc_0870', 'cc_1045', 'cc_1123'],
        start: '2018-01-29'
    },
    {
        id: ['cc_0530', 'cc_0562', 'cc_0870', 'cc_1045', 'cc_1123'],
        start: '2018-01-30',
        end: '2018-02-01'
    },
    {
        id: ['cc_0578', 'cc_0720', 'cc_1001', 'cc_1192', 'cc_1268'],
        start: '2018-02-01',
        end: '2018-02-04'
    },
    {
        id: ['cc_0416', 'cc_1035', 'cc_1240', 'cc_1362', 'cc_1391'],
        start: '2018-02-04',
        end: '2018-02-06'
    },
    {
        id: ['cc_0416', 'cc_1035', 'cc_1240', 'cc_1362', 'cc_1391'],
        start: '2018-02-06'
    },
    {
        id: ['cc_0367', 'cc_0669', 'cc_0718', 'cc_0935', 'cc_1085'],
        start: '2018-02-07',
        end: '2018-02-10'
    },
    {
        id: ['cc_0261', 'cc_0459', 'cc_0649', 'cc_0748', 'cc_1314'],
        start: '2018-02-10',
        end: '2018-02-13'
    },
    {
        id: 'sb_1600',
        start: '2018-02-13',
        end: '2018-02-17'
    },
    {
        id: 'sb_1600',
        start: '2018-03-05',
    },
    {
        id: 'sb_1600',
        start: '2018-03-06',
        end: '2018-03-10'
    },
    {
        id: 'bb_0870',
        start: '2018-02-24',
        end: '2018-02-26'
    },
    {
        id: 'tp_1465',
        start: '2018-04-10',
        end: '2018-04-17'
    },
    {
        id: 'tp_1463',
        start: '2018-04-17',
        end: '2018-04-24'
    },
    {
        id: 'tp_1508',
        start: '2018-04-24',
        end: '2018-05-01'
    },
    {
        id: 'rk_1314',
        start: '2018-04-29',
        end: '2018-05-01'
    },
    {
        id: 'rk_1314',
        start: '2018-05-01',
        end: '2018-05-03'
    },
    {
        id: 'tp_1516',
        start: '2018-05-01',
        end: '2018-05-08'
    },
    {
        id: 'pm_1900',
        start: '2018-05-22',
        end: '2018-05-29'
    },
    {
        id: 'pm_1900',
        start: '2018-05-29',
        end: '2018-06-05'
    },
    {
        id: 'sb_1023',
        start: '2018-07-24',
        end: '2018-07-29'
    },
    {
        id: 'hs_1192',
        start: '2018-07-30'
    },
    {
        id: 'hs_1240',
        start: '2018-07-31'
    },
    {
        id: 'hs_1314',
        start: '2018-08-01'
    },
    {
        id: 'hs_1192',
        start: '2018-08-02'
    },
    {
        id: 'hs_1240',
        start: '2018-08-03'
    },
    {
        id: 'hs_1314',
        start: '2018-08-04'
    },
    {
        id: 'db_1985',
        start: '2018-08-05',
        end: '2018-08-07'
    },
    {
        id: 'db_1985',
        start: '2018-08-07',
        end: '2018-08-14'
    },
    {
        id: 'sb_1023',
        start: '2018-08-07',
        end: '2018-08-11'
    },
    {
        id: 'rk_0447',
        start: '2018-08-30',
        end: '2018-09-04'
    },
    {
        id: 'rk_0447',
        start: '2018-09-04',
        end: '2018-09-11'
    },
    {
        id: 'rk_0447',
        start: '2018-09-11',
        end: '2018-09-15'
    },
    {
        id: ['bb_2023', 'bb_2025'],
        start: '2018-09-08',
        end: '2018-09-10'
    },
    {
        id: ['cc_0530', 'cc_0562', 'cc_0870', 'cc_1045', 'cc_1123'],
        start: '2018-09-25',
        pst_0: true
    },
    {
        id: ['cc_0578', 'cc_0720', 'cc_1001', 'cc_1192', 'cc_1268'],
        start: '2018-09-26',
        pst_0: true
    },
    {
        id: ['cc_0367', 'cc_0669', 'cc_0718', 'cc_0935', 'cc_1085'],
        start: '2018-09-27',
        pst_0: true
    },
    {
        id: ['cc_0261', 'cc_0459', 'cc_0649', 'cc_0748', 'cc_1314'],
        start: '2018-09-28',
        pst_0: true
    },
    {
        id: ['cc_0416', 'cc_1035', 'cc_1240', 'cc_1362', 'cc_1391'],
        start: '2018-09-29',
        pst_0: true
    },
    {
        id: 'cc_2113',
        start: '2018-09-27',
        end: '2018-10-02'
    },
    {
        id: 'cc_2113',
        start: '2018-10-02',
        end: '2018-10-04'
    },
    {
        id: 'rk_1700',
        start: '2018-10-03',
        end: '2018-10-09'
    },
    {
        id: 'se_2138',
        start: '2018-10-18',
        end: '2018-10-23'
    },
    {
        id: 'se_2138',
        start: '2018-10-23',
        end: '2018-10-30'
    },
    {
        id: 'rk_1873',
        start: '2018-11-03',
        end: '2018-11-06'
    },
    {
        id: 'rk_1873',
        start: '2018-11-06',
        end: '2018-11-13'
    },
    {
        id: 'rk_1873',
        start: '2018-11-13',
        end: '2018-11-16'
    },
    {
        id: 'wc_2401',
        start: '2018-11-19'
    },
    {
        id: 'wc_2401',
        start: '2018-11-20',
        end: '2018-11-25'
    },
    {
        id: 'fa_2072',
        start: '2018-11-30',
        end: '2018-12-04',
        pst_0: true
    },
    {
        id: 'fa_2072',
        start: '2018-12-04',
        end: '2018-12-06',
        pst_0: true
    },
    {
        id: 'fa_2078',
        start: '2018-12-06',
        end: '2018-12-11',
        pst_0: true
    },
    {
        id: 'univ_sp',
        start: '2018-12-06',
        end: '2018-12-11'
    },
    {
        id: 'se_2232',
        start: '2019-01-08',
        end: '2019-01-15'
    },
    {
        id: 'rk_0870',
        start: '2019-01-13',
        end: '2019-01-15'
    },
    {
        id: 'rk_0870',
        start: '2019-01-15',
        end: '2019-01-21'
    },
    {
        id: 'tp_1463',
        start: '2019-01-22',
        end: '2019-01-27'
    },
    {
        id: 'tp_1465',
        start: '2019-01-27',
        end: '2019-01-29'
    },
    {
        id: 'tp_1465',
        start: '2019-01-29',
        end: '2019-02-01'
    },
    {
        id: 'co_2161',
        start: '2019-02-17'
    },
    {
        id: 'co_2161',
        start: '2019-02-18',
        end: '2019-02-25'
    },
    {
        id: 'co_2161',
        start: '2019-02-25',
        end: '2019-03-03'
    },
    {
        id: 'co_2234',
        start: '2019-02-22',
        end: '2019-02-25'
    },
    {
        id: 'co_2234',
        start: '2019-02-25',
        end: '2019-03-03'
    },
    {
        id: 'fa_2072',
        start: '2019-03-04',
        end: '2019-03-11'
    },
    {
        id: 'fa_2078',
        start: '2019-03-11',
        end: '2019-03-18'
    },
    {
        id: 'se_2259',
        start: '2019-03-12',
        end: '2019-03-18'
    },
    {
        id: 'se_2259',
        start: '2019-03-18'
    },
    {
        id: 'rk_1298',
        start: '2019-03-19',
        end: '2019-03-25'
    },
    {
        id: 'rk_1298',
        start: '2019-03-25',
        end: '2019-03-28'
    },
    {
        id: ['se_2245', 'se_2300'],
        start: '2019-04-04',
        end: '2019-04-08'
    },
    {
        id: ['se_2245', 'se_2300'],
        start: '2019-04-08',
        end: '2019-04-10'
    },
    {
        id: 'rk_0912',
        start: '2019-04-18',
        end: '2019-04-22'
    },
    {
        id: 'rk_0912',
        start: '2019-04-22',
        end: '2019-04-24'
    },
    {
        id: 'sb_1600',
        start: '2019-05-23',
        end: '2019-05-27',
        pst_0: true
    },
    {
        id: 'sb_1600',
        start: '2019-05-27',
        end: '2019-05-29',
        pst_0: true
    },
    {
        id: ['cc2_1268', 'cc2_1473', 'cc2_1652', 'cc2_1921', 'cc2_1922'],
        start: '2019-05-25',
        end: '2019-05-27'
    },
    {
        id: ['cc2_1268', 'cc2_1473', 'cc2_1652', 'cc2_1921', 'cc2_1922'],
        start: '2019-05-27',
        end: '2019-06-03'
    },
    {
        id: 'bb_2363',
        start: '2019-05-28',
        end: '2019-06-02'
    },
    {
        id: ['cc2_1314', 'cc2_1593', 'cc2_1794', 'cc2_1832', 'cc2_1869'],
        start: '2019-06-03',
        end: '2019-06-10'
    },
    {
        id: 'sp_0603',
        start: '2019-06-03',
        end: '2019-06-10'
    },
    {
        id: 'fa_2072',
        start: '2019-06-03',
        end: '2019-06-10'
    },
    {
        id: 'sb_1985',
        start: '2019-06-04',
        end: '2019-06-08',
        pst_0: true
    },
    {
        id: 'fa_2078',
        start: '2019-06-10',
        end: '2019-06-17'
    },
    {
        id: 'sb_1985',
        start: '2019-06-11',
        end: '2019-06-15',
        pst_0: true
    },
]
