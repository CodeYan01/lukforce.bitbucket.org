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
        id: 'dummy',
        start: '2019-07-26',
        end: '2019-07-28'
    },
    {
        id: 'dummy',
        start: '2019-08-08'
    },
    {
        id: 'dummy',
        start: '2019-08-16',
        end: '2019-08-18'
    },
    {
        id: 'dummy',
        start: '2019-09-12'
    },
    {
        id: 'dummy',
        start: '2019-09-14'
    },
    {
        id: 'dummy',
        start: '2019-09-17'
    },
    {
        id: 'dummy',
        start: '2019-09-19'
    },
    {
        id: 'dummy',
        start: '2019-10-26'
    },
    {
        id: 'dummy',
        start: '2019-11-14'
    },
    {
        id: 'dummy',
        start: '2019-11-22',
        end: '2019-11-24'
    },
    {
        id: 'dummy',
        start: '2020-01-20',
        end: '2020-01-22'
    },
    {
        id: 'dummy',
        start: '2020-01-23'
    },
    {
        id: 'dummy',
        start: '2020-01-30'
    },
    {
        id: 'dummy',
        start: '2020-02-06'
    },
    {
        id: 'dummy',
        start: '2020-02-12'
    },
    {
        id: 'dummy',
        start: '2020-02-19'
    },
    {
        id: 'dummy',
        start: '2020-02-27'
    },
    {
        id: 'dummy',
        start: '2020-03-05'
    },
    {
        id: 'dummy',
        start: '2020-03-12',
        end: '2020-03-15'
    },
    {
        id: 'dummy',
        start: '2020-03-12'
    },
    {
        id: 'dummy',
        start: '2020-03-26'
    },
    {
        id: 'dummy',
        start: '2020-03-28'
    },
    {
        id: 'dummy',
        start: '2020-04-02'
    },
    {
        id: 'dummy',
        start: '2020-04-07'
    },
    {
        id: 'dummy',
        start: '2020-04-16'
    },
    {
        id: 'dummy',
        start: '2020-06-06'
    },
    {
        id: 'dummy',
        start: '2020-08-14'
    },
    {
        id: 'dummy',
        start: '2020-09-04'
    },
    {
        id: 'dummy',
        start: '2020-10-05'
    },
    {
        id: 'dummy',
        start: '2021-02-20'
    },
    {
        id: 'dummy',
        start: '2021-06-01',
        end: '2021-06-06'
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
        id: 'rd_9999',
        start: '2019-05-25',
        end: '2019-05-27'
    },
    {
        id: 'rd_9999',
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
        id: 'rd_9999',
        start: '2019-06-10',
        end: '2019-06-16'
    },
    {
        id: 'sb_1985',
        start: '2019-06-11',
        end: '2019-06-15',
        pst_0: true
    },
    {
        id: 'bb_2365',
        start: '2019-06-12',
        end: '2019-06-16'
    },
    {
        id: 'rk_2244',
        start: '2019-06-27',
        end: '2019-07-01'
    },
    {
        id: 'rk_2244',
        start: '2019-07-01',
        end: '2019-07-08'
    },
    {
        id: 'rk_2244',
        start: '2019-07-08',
        end: '2019-07-10'
    },
    {
        id: ['20_1682', '20_1753', '21_1755'],
        start: '2019-07-21'
    },
    {
        id: ['20_1682', '20_1753', '21_1755'],
        start: '2019-07-22',
        end: '2019-07-25'
    },
    {
        id: 'se_2446',
        start: '2019-07-25',
        end: '2019-07-29'
    },
    {
        id: 'se_2446',
        start: '2019-07-29',
        end: '2019-08-04'
    },
    {
        id: '66_2234',
        start: '2019-07-29'
    },
    {
        id: '66_2365',
        start: '2019-07-30'
    },
    {
        id: '66_2351',
        start: '2019-07-31'
    },
    {
        id: '66_2234',
        start: '2019-08-01'
    },
    {
        id: '66_2365',
        start: '2019-08-02'
    },
    {
        id: ['66_2234', '66_2365', '66_2351'],
        start: '2019-08-03'
    },
    {
        id: 'sb_1600',
        start: '2019-08-10',
        end: '2019-08-12'
    },
    {
        id: 'sb_1600',
        start: '2019-08-12',
        end: '2019-08-15'
    },
    {
        id: 'sp_1879',
        start: '2019-08-19',
        end: '2019-08-26'
    },
    {
        id: ['bb_2023', 'bb_2025'],
        start: '2019-09-06',
        end: '2019-09-09'
    },
    {
        id: 'sb_1023',
        start: '2019-09-10',
        end: '2019-09-16',
        pst_0: true
    },
    {
        id: 'sb_1023',
        start: '2019-09-16',
        pst_0: true
    },
    {
        id: 'sp_2281',
        start: '2019-09-23',
        end: '2019-09-30'
    },
    {
        id: 'ev_2475',
        start: '2019-10-04',
        end: '2019-10-07'
    },
    {
        id: 'ev_2475',
        start: '2019-10-07',
        end: '2019-10-10'
    },
    {
        id: 'mf_9999',
        start: '2019-10-28',
        end: '2019-11-04'
    },
    {
        id: 'mf_9999',
        start: '2019-11-04',
        end: '2019-11-11'
    },
    {
        id: 'fa_2072',
        start: '2019-11-17'
    },
    {
        id: 'fa_2072',
        start: '2019-11-18',
        end: '2019-11-24'
    },
    {
        id: 'fa_2078',
        start: '2019-11-24'
    },
    {
        id: 'fa_2078',
        start: '2019-11-25',
        end: '2019-12-01'
    },
    {
        id: ['se_2434', 'se_2588'],
        start: '2019-12-15'
    },
    {
        id: ['se_2434', 'se_2588'],
        start: '2019-12-16',
        end: '2019-12-19'
    },
    {
        id: ['se_2434', 'se_2588'],
        start: '2019-12-19',
        end: '2019-12-22'
    },
    {
        id: 'bb_2620',
        start: '2020-01-04',
        end: '2020-01-06'
    },
    {
        id: 'bb_2620',
        start: '2020-01-06',
        end: '2020-01-09'
    },
    {
        id: 'stp_2668',
        start: '2020-01-22',
        end: '2020-01-27'
    },
    {
        id: 'stp_2668',
        start: '2020-01-27',
        end: '2020-02-03'
    },
    {
        id: 'stp_2668',
        start: '2020-02-03',
        end: '2020-02-08'
    },
    {
        id: 'se_2681',
        start: '2020-01-22',
        end: '2020-01-27'
    },
    {
        id: 'se_2681',
        start: '2020-01-27',
        end: '2020-02-03'
    },
    {
        id: 'se_2681',
        start: '2020-02-03',
        end: '2020-02-08'
    },
    {
        id: ['wj_2825', 'wj_2827', 'wj_2829'],
        start: '2020-02-08',
        end: '2020-02-10'
    },
    {
        id: ['wj_2825', 'wj_2827', 'wj_2829'],
        start: '2020-02-10',
        end: '2020-02-17'
    },
    {
        id: ['wj_2825', 'wj_2827', 'wj_2829'],
        start: '2020-02-17',
        end: '2020-02-20'
    },
    {
        id: 'se_2909',
        start: '2020-02-11',
        end: '2020-02-17'
    },
    {
        id: ['ca_2711', 'ca_2712', 'ca_2714'],
        start: '2020-02-20',
        end: '2020-02-24'
    },
    {
        id: ['ca_2711', 'ca_2712', 'ca_2714'],
        start: '2020-02-24',
        end: '2020-02-27'
    },
    {
        id: 'wa_2802',
        start: '2020-03-09',
        end: '2020-03-16'
    },
    {
        id: 'rk_2672',
        start: '2020-03-22',
    },
    {
        id: 'rk_2672',
        start: '2020-03-23',
        end: '2020-03-29'
    },
    {
        id: 'se_2739',
        start: '2020-04-08',
        end: '2020-04-13'
    },
    {
        id: 'se_2739',
        start: '2020-04-13',
        end: '2020-04-15'
    },
    {
        id: '4e_2738',
        start: '2020-04-21',
        end: '2020-04-26'
    },
    {
        id: 'bb_2734',
        start: '2020-04-23',
        end: '2020-04-26'
    },
    {
        id: 'ev_2799',
        start: '2020-05-14',
        end: '2020-05-17'
    },
    {
        id: 'ev_2799',
        start: '2020-05-17',
        end: '2020-05-21'
    },
    {
        id: 'si_2802',
        start: '2020-05-25',
        end: '2020-05-31'
    },
    {
        id: 'si_2802',
        start: '2020-05-31',
        end: '2020-06-07'
    },
    {
        id: 'si_2802',
        start: '2020-06-07',
        end: '2020-06-14'
    },
    {
        id: 'si_2802',
        start: '2020-06-14'
    },
    {
        id: 'wa_2700',
        start: '2020-05-30',
    },
    {
        id: 'wa_2700',
        start: '2020-05-31',
        end: '2020-06-06'
    },
    {
        id: 'wa_2815',
        start: '2020-06-02',
        end: '2020-06-07'
    },
    {
        id: 'wa_2815',
        start: '2020-06-07',
        end: '2020-06-11'
    },
    {
        id: 'ka_2833',
        start: '2020-06-16',
        end: '2020-06-21'
    },
    {
        id: 'ka_2833',
        start: '2020-06-21'
    },
    {
        id: 'ev_2767',
        start: '2020-06-22',
        end: '2020-06-28'
    },
    {
        id: 'ap_2843',
        start: '2020-06-28',
        end: '2020-07-05'
    },
    {
        id: 'ap_2843',
        start: '2020-07-05',
        end: '2020-07-07'
    },
    {
        id: 'si_2835',
        start: '2020-06-28',
        end: '2020-07-05'
    },
    {
        id: 'si_2835',
        start: '2020-07-05',
        end: '2020-07-12'
    },
    {
        id: 'si_2835',
        start: '2020-07-12',
        end: '2020-07-19'
    },
    {
        id: 'si_2835',
        start: '2020-07-19',
        end: '2020-07-26'
    },
    {
        id: 'si_2835',
        start: '2020-07-26'
    },
    {
        id: 'rk_2672',
        start: '2020-07-12',
        end: '2020-07-19'
    },
    {
        id: 'rk_2672',
        start: '2020-07-19',
        end: '2020-07-26'
    },
    {
        id: 'rk_2672',
        start: '2020-07-26'
    },
    {
        id: 'si_2860',
        start: '2020-07-27',
        end: '2020-08-02'
    },
    {
        id: 'si_2860',
        start: '2020-08-02',
        end: '2020-08-09'
    },
    {
        id: 'si_2860',
        start: '2020-08-09',
        end: '2020-08-16'
    },
    {
        id: 'si_2860',
        start: '2020-08-16',
        end: '2020-08-23'
    },
    {
        id: 'si_2860',
        start: '2020-08-23',
        end: '2020-08-26'
    },
    {
        id: 'ec_1983',
        start: '2020-08-02',
        end: '2020-08-09'
    },
    {
        id: 'ec_1983',
        start: '2020-08-09',
        end: '2020-08-16'
    },
    {
        id: 'ec_1983',
        start: '2020-08-16',
        end: '2020-08-23'
    },
    {
        id: 'ec_1983',
        start: '2020-08-23',
        end: '2020-08-25'
    },
    {
        id: 'si_2897',
        start: '2020-08-26',
        end: '2020-08-30'
    },
    {
        id: 'si_2897',
        start: '2020-08-30',
        end: '2020-09-06'
    },
    {
        id: 'si_2897',
        start: '2020-09-06',
        end: '2020-09-13'
    },
    {
        id: 'si_2897',
        start: '2020-09-13',
        end: '2020-09-20'
    },
    {
        id: 'si_2897',
        start: '2020-09-20',
        end: '2020-09-22'
    },
    {
        id: 'rk_2244',
        start: '2020-08-31',
        end: '2020-09-06'
    },
    {
        id: 'rk_2244',
        start: '2020-09-06',
        end: '2020-09-13'
    },
    {
        id: 'rk_2244',
        start: '2020-09-13',
        end: '2020-09-20'
    },
    {
        id: 'rk_2244',
        start: '2020-09-20',
        end: '2020-09-27'
    },
    {
        id: 'rk_2244',
        start: '2020-09-27',
        end: '2020-09-30'
    },
    {
        id: 'ev_2918',
        start: '2020-09-10',
        end: '2020-09-13'
    },
    {
        id: 'ev_2918',
        start: '2020-09-13',
        end: '2020-09-17'
    },
    {
        id: 'ka_2921',
        start: '2020-09-15',
        end: '2020-09-20'
    },
    {
        id: 'ka_2921',
        start: '2020-09-20',
        end: '2020-09-23'
    },
    {
        id: 'si_2964',
        start: '2020-09-29',
        end: '2020-10-04'
    },
    {
        id: 'si_2964',
        start: '2020-10-04',
        end: '2020-10-11'
    },
    {
        id: 'si_2964',
        start: '2020-10-11',
        end: '2020-10-18'
    },
    {
        id: 'si_2964',
        start: '2020-10-18'
    },
    {
        id: 'ev_2957',
        start: '2020-10-06',
        end: '2020-10-11'
    },
    {
        id: 'ev_2957',
        start: '2020-10-11',
        end: '2020-10-14'
    },
    {
        id: 'ka_2852',
        start: '2020-10-17'
    },
    {
        id: 'ka_2852',
        start: '2020-10-18',
        end: '2020-10-25'
    },
    {
        id: 'si_2982',
        start: '2020-10-28',
        end: '2020-11-01'
    },
    {
        id: 'si_2982',
        start: '2020-11-01',
        end: '2020-11-08'
    },
    {
        id: 'si_2982',
        start: '2020-11-08',
        end: '2020-11-15'
    },
    {
        id: 'si_2982',
        start: '2020-11-15',
        end: '2020-11-22'
    },
    {
        id: 'si_2982',
        start: '2020-11-22',
        end: '2020-11-29'
    },
    {
        id: 'si_2982',
        start: '2020-11-29'
    },
    {
        id: 'wa_2815',
        start: '2020-10-31'
    },
    {
        id: 'wa_2815',
        start: '2020-11-01',
        end: '2020-11-08'
    },
    {
        id: 'wa_2815',
        start: '2020-11-08',
        end: '2020-11-15'
    },
    {
        id: 'wa_2815',
        start: '2020-11-15',
        end: '2020-11-22'
    },
    {
        id: 'wa_2815',
        start: '2020-11-22',
        end: '2020-11-29'
    },
    {
        id: 'wa_2815',
        start: '2020-11-29'
    },
    {
        id: 'ev_2988',
        start: '2020-11-05',
        end: '2020-11-08'
    },
    {
        id: 'ev_2988',
        start: '2020-11-08',
        end: '2020-11-15'
    },
    {
        id: 'ev_2988',
        start: '2020-11-15',
        end: '2020-11-22'
    },
    {
        id: 'ev_2988',
        start: '2020-11-22',
        end: '2020-11-27'
    },
    {
        id: 'ev_3004',
        start: '2020-11-28'
    },
    {
        id: 'ev_3004',
        start: '2020-11-29',
        end: '2020-12-06'
    },
    {
        id: 'ev_3004',
        start: '2020-12-06',
        end: '2020-12-11'
    },
    {
        id: 'si_3007',
        start: '2020-11-28'
    },
    {
        id: 'si_3007',
        start: '2020-11-29',
        end: '2020-12-06'
    },
    {
        id: 'si_3007',
        start: '2020-12-06'
    },
    {
        id: 'ec_1983',
        start: '2020-12-03',
        end: '2020-12-06'
    },
    {
        id: 'ec_1983',
        start: '2020-12-06',
        end: '2020-12-13'
    },
    {
        id: 'ec_1983',
        start: '2020-12-13',
        end: '2020-12-20'
    },
    {
        id: 'ec_1983',
        start: '2020-12-20',
        end: '2020-12-27'
    },
    {
        id: 'ev_3045',
        start: '2020-12-13',
        end: '2020-12-20'
    },
    {
        id: 'ev_3045',
        start: '2020-12-20',
        end: '2020-12-27'
    },
    {
        id: 'si_3038',
        start: '2020-12-13',
        end: '2020-12-20'
    },
    {
        id: 'si_3038',
        start: '2020-12-20',
        end: '2020-12-27'
    },
    {
        id: 'bb_3050',
        start: '2020-12-22',
        end: '2020-12-24'
    },
    {
        id: 'ev_3177',
        start: '2020-12-27',
        end: '2021-01-03'
    },
    {
        id: 'ev_3177',
        start: '2021-01-03',
        end: '2021-01-08'
    },
    {
        id: 'si_3181',
        start: '2020-12-27',
        end: '2021-01-03'
    },
    {
        id: 'si_3181',
        start: '2021-01-03',
        end: '2021-01-10'
    },
    {
        id: 'si_3181',
        start: '2021-01-10',
        end: '2021-01-17'
    },
    {
        id: 'si_3181',
        start: '2021-01-17',
        end: '2021-01-24'
    },
    {
        id: 'si_3181',
        start: '2021-01-24',
        end: '2021-01-31'
    },
    {
        id: 'bb_3188',
        start: '2021-01-01',
        end: '2021-01-03'
    },
    {
        id: 'bb_3188',
        start: '2021-01-03'
    },
    {
        id: 'ka_3053',
        start: '2021-01-06',
        end: '2021-01-10'
    },
    {
        id: 'ka_3053',
        start: '2021-01-10',
        end: '2021-01-13'
    },
    {
        id: 'ev_2918',
        start: '2021-01-14',
        end: '2021-01-17'
    },
    {
        id: 'ev_2918',
        start: '2021-01-17',
        end: '2021-01-21'
    },
    {
        id: 'ev_3034',
        start: '2021-01-21',
        end: '2021-01-24'
    },
    {
        id: 'ev_3034',
        start: '2021-01-24',
        end: '2021-01-29'
    },
    {
        id: 'ev_0738',
        start: '2021-01-21',
        end: '2021-01-24'
    },
    {
        id: 'ev_0327',
        start: '2021-01-21',
        end: '2021-01-24'
    },
    {
        id: ['ev_0738', 'ev_0327'],
        start: '2021-01-24',
        end: '2021-01-31'
    },
    {
        id: ['ev_0738', 'ev_0327'],
        start: '2021-01-31',
        end: '2021-02-07'
    },
    {
        id: 'si_3100',
        start: '2021-01-28',
        end: '2021-01-31'
    },
    {
        id: 'si_3100',
        start: '2021-01-31',
        end: '2021-02-07'
    },
    {
        id: 'si_3100',
        start: '2021-02-07',
        end: '2021-02-14'
    },
    {
        id: 'si_3100',
        start: '2021-02-14',
        end: '2021-02-21'
    },
    {
        id: 'si_3100',
        start: '2021-02-21',
        end: '2021-02-25'
    },
    {
        id: 'ev_3108',
        start: '2021-01-28',
        end: '2021-01-31'
    },
    {
        id: 'ev_3108',
        start: '2021-01-31',
        end: '2021-02-07'
    },
    {
        id: 'ev_3108',
        start: '2021-02-07',
        end: '2021-02-14'
    },
    {
        id: 'ev_3108',
        start: '2021-02-14',
        end: '2021-02-21'
    },
    {
        id: 'ev_3108',
        start: '2021-02-21',
        end: '2021-02-25'
    },
    {
        id: ['ev_2475', 'ev_2767'],
        start: '2021-02-19',
        end: '2021-02-21'
    },
    {
        id: ['ev_2475', 'ev_2767'],
        start: '2021-02-21',
        end: '2021-02-25'
    },
    {
        id: 'bb_3065',
        start: '2021-02-25',
        end: '2021-02-28'
    },
    {
        id: 'bb_3065',
        start: '2021-02-28',
        end: '2021-03-04'
    },
    {
        id: 'si_3065',
        start: '2021-02-25',
        end: '2021-02-28'
    },
    {
        id: 'si_3065',
        start: '2021-02-28',
        end: '2021-03-07'
    },
    {
        id: 'si_3065',
        start: '2021-03-07',
        end: '2021-03-14'
    },
    {
        id: 'si_3065',
        start: '2021-03-14',
        end: '2021-03-19'
    },
    {
        id: 'bb_3069',
        start: '2021-03-04',
        end: '2021-03-07'
    },
    {
        id: 'bb_3069',
        start: '2021-03-07',
        end: '2021-03-09'
    },
    {
        id: 'ev_2469',
        start: '2021-03-09',
        end: '2021-03-14'
    },
    {
        id: 'ev_2469',
        start: '2021-03-14'
    },
    {
        id: 'ka_3111',
        start: '2021-03-18',
        end: '2021-03-21'
    },
    {
        id: 'ka_3111',
        start: '2021-03-21',
        end: '2021-03-24'
    },
    {
        id: 'si_3135',
        start: '2021-03-25',
        end: '2021-03-28'
    },
    {
        id: 'si_3135',
        start: '2021-03-28',
        end: '2021-04-04'
    },
    {
        id: 'si_3135',
        start: '2021-04-04',
        end: '2021-04-11'
    },
    {
        id: 'si_3135',
        start: '2021-04-11',
        end: '2021-04-18'
    },
    {
        id: 'si_3135',
        start: '2021-04-18',
        end: '2021-04-25'
    },
    {
        id: 'si_3135',
        start: '2021-04-25',
        end: '2021-04-30'
    },
    {
        id: 'ev_3135',
        start: '2021-03-31',
        end: '2021-04-04'
    },
    {
        id: 'ev_3135',
        start: '2021-04-04',
        end: '2021-04-07'
    },
    {
        id: 'ev_3172',
        start: '2021-04-23',
        end: '2021-04-25'
    },
    {
        id: 'ev_3172',
        start: '2021-04-25',
        end: '2021-05-02'
    },
    {
        id: 'ev_3172',
        start: '2021-05-02',
        end: '2021-05-08'
    },
    {
        id: ['ev_3198', 'ev_3199'],
        start: '2021-05-12',
        end: '2021-05-16'
    },
    {
        id: ['ev_3198', 'ev_3199'],
        start: '2021-05-16',
        end: '2021-05-23'
    },
    {
        id: ['ev_3198', 'ev_3199'],
        start: '2021-05-23',
        end: '2021-05-26'
    },
    {
        id: 'ev_2799',
        start: '2021-05-22'
    },
    {
        id: 'ev_2799',
        start: '2021-05-23',
        end: '2021-05-26'
    },
    {
        id: 'ev_3222',
        start: '2021-05-26',
        end: '2021-05-30'
    },
    {
        id: 'ev_3222',
        start: '2021-05-30',
        end: '2021-06-06'
    },
    {
        id: 'ev_3222',
        start: '2021-06-06',
        end: '2021-06-09'
    },
    {
        id: 'ka_3264',
        start: '2021-06-13',
        end: '2021-06-19'
    },
    {
        id: 'bb_3246',
        start: '2021-06-20',
        end: '2021-06-23'
    },
    {
        id: 'ev_3262',
        start: '2021-06-24',
        end: '2021-06-27'
    },
    {
        id: 'ev_3262',
        start: '2021-06-27',
        end: '2021-07-04'
    },
    {
        id: 'ev_3262',
        start: '2021-07-04',
        end: '2021-07-09'
    },
    {
        id: 'ka_3311',
        start: '2021-07-13',
        end: '2021-07-18'
    },
    {
        id: 'ka_3311',
        start: '2021-07-18'
    },
    {
        id: 'ev_3287',
        start: '2021-07-22',
        end: '2021-07-25'
    },
    {
        id: 'ev_3287',
        start: '2021-07-25',
        end: '2021-08-01'
    },
    {
        id: 'ev_3287',
        start: '2021-08-01',
        end: '2021-08-08'
    },
    {
        id: 'ev_3287',
        start: '2021-08-08',
        end: '2021-08-13'
    },
    {
        id: ['wj_3077', 'wj_3129', 'wj_3221'],
        start: '2021-08-11',
        end: '2021-08-15'
    },
    {
        id: ['wj_3077', 'wj_3129', 'wj_3221'],
        start: '2021-08-15',
        end: '2021-08-22'
    },
    {
        id: ['wj_3077', 'wj_3129', 'wj_3221'],
        start: '2021-08-22',
        end: '2021-08-25'
    },
    {
        id: 'ev_3304',
        start: '2021-08-25',
        end: '2021-08-29'
    },
    {
        id: 'ev_3304',
        start: '2021-08-29',
        end: '2021-09-05'
    },
    {
        id: 'ev_3304',
        start: '2021-09-05',
        end: '2021-09-11'
    },
    {
        id: 'ev_3122',
        start: '2021-09-05',
        end: '2021-09-12'
    },
    {
        id: 'ev_3122',
        start: '2021-09-12',
        end: '2021-09-19'
    },
    {
        id: 'ev_3122',
        start: '2021-09-19',
        end: '2021-09-21'
    },
    {
        id: 'ev_3346',
        start: '2021-09-11'
    },
    {
        id: 'ev_3346',
        start: '2021-09-12',
        end: '2021-09-19'
    },
    {
        id: 'ev_3346',
        start: '2021-09-19',
        end: '2021-09-26'
    },
    {
        id: 'ev_3346',
        start: '2021-09-26',
        end: '2021-09-29'
    },
    {
        id: 'ev_3353',
        start: '2021-09-29',
        end: '2021-10-03'
    },
    {
        id: 'ev_3353',
        start: '2021-10-03',
        end: '2021-10-10'
    },
    {
        id: 'ev_3353',
        start: '2021-10-10',
        end: '2021-10-16'
    },
    {
        id: 'ev_3382',
        start: '2021-10-26',
        end: '2021-10-31'
    },
    {
        id: 'ev_3382',
        start: '2021-10-31',
        end: '2021-11-07'
    },
    {
        id: 'ev_3382',
        start: '2021-11-07',
        end: '2021-11-09'
    },
    {
        id: 'ev_3436',
        start: '2021-11-09',
        end: '2021-11-12'
    },
    {
        id: 'ev_3034',
        start: '2021-11-21',
        end: '2021-11-28'
    },
    {
        id: 'ev_3034',
        start: '2021-11-28',
        end: '2021-12-05'
    },
    {
        id: 'ev_3034',
        start: '2021-12-05',
        end: '2021-12-12'
    },
    {
        id: 'ev_3034',
        start: '2021-12-12',
        end: '2021-12-14'
    },
    {
        id: 'ev_3400',
        start: '2021-11-29',
        end: '2021-12-05'
    },
    {
        id: 'ev_3400',
        start: '2021-12-05',
        end: '2021-12-12'
    },
    {
        id: 'ev_3400',
        start: '2021-12-12',
        end: '2021-12-14'
    },
    {
        id: 'ev_2799',
        start: '2021-12-19',
        end: '2021-12-26'
    },
    {
        id: 'ev_2799',
        start: '2021-12-26',
        end: '2021-12-31'
    },
    {
        id: 'ev_3518',
        start: '2021-12-27',
        end: '2022-01-02'
    },
    {
        id: 'ev_3518',
        start: '2022-01-02',
        end: '2022-01-09'
    },
    {
        id: 'ev_3518',
        start: '2022-01-09',
        end: '2022-01-16'
    },
    {
        id: 'ev_3518',
        start: '2022-01-16',
        end: '2022-01-23'
    },
    {
        id: 'ev_3518',
        start: '2022-01-23',
        end: '2022-01-29'
    },
    {
        id: 'bb_3520',
        start: '2022-01-02',
        end: '2022-01-04',
        pst_0: true
    },
    {
        id: 'ev_3539',
        start: '2022-01-29',
    },
    {
        id: 'ev_3539',
        start: '2022-01-30',
        end: '2022-02-06'
    },
    {
        id: 'ev_3539',
        start: '2022-02-06',
        end: '2022-02-13'
    },
    {
        id: 'ev_3539',
        start: '2022-02-13',
        end: '2022-02-15'
    },
    {
        id: 'ev_3559',
        start: '2022-02-27',
        end: '2022-03-06'
    },
    {
        id: 'ev_3559',
        start: '2022-03-06',
        end: '2022-03-13'
    },
    {
        id: 'ev_3559',
        start: '2022-03-13',
        end: '2022-03-20'
    },
    {
        id: 'ev_3559',
        start: '2022-03-20',
        end: '2022-03-26'
    },
    {
        id: 'bb_3560',
        start: '2022-03-04',
        end: '2022-03-06',
        pst_0: true
    },
    {
        id: 'ev_3579',
        start: '2022-03-26'
    },
    {
        id: 'ev_3579',
        start: '2022-03-27',
        end: '2022-04-03'
    },
    {
        id: 'ev_3579',
        start: '2022-04-03',
        end: '2022-04-10'
    },
    {
        id: 'ev_3579',
        start: '2022-04-10',
        end: '2022-04-12'
    },
    {
        id: 'ev_3601',
        start: '2022-04-28',
        end: '2022-05-01'
    },
    {
        id: 'ev_3601',
        start: '2022-05-01',
        end: '2022-05-08'
    },
    {
        id: 'ev_3601',
        start: '2022-05-08',
        end: '2022-05-15'
    },
    {
        id: 'ev_3601',
        start: '2022-05-15',
        end: '2022-05-22'
    },
    {
        id: 'ev_3601',
        start: '2022-05-22',
        end: '2022-05-26'
    },
    {
        id: 'bb_3620',
        start: '2022-05-13',
        end: '2022-05-15',
        pst_0: true
    },
    {
        id: 'ev_3634',
        start: '2022-05-29',
        end: '2022-06-05'
    },
    {
        id: 'ev_3634',
        start: '2022-06-05',
        end: '2022-06-12'
    },
    {
        id: 'ev_3634',
        start: '2022-06-12',
        end: '2022-06-19'
    },
    {
        id: 'ev_3634',
        start: '2022-06-19',
        end: '2022-06-26'
    },
    {
        id: 'ev_3657',
        start: '2022-06-26',
        end: '2022-07-03'
    },
    {
        id: 'ev_3657',
        start: '2022-07-03',
        end: '2022-07-10'
    },
    {
        id: 'ev_3657',
        start: '2022-07-10',
        end: '2022-07-17'
    },
    {
        id: 'ev_3657',
        start: '2022-07-17',
        end: '2022-07-24'
    },
    {
        id: 'ev_3657',
        start: '2022-07-24',
        end: '2022-07-27'
    },
    {
        id: 'ev_3678',
        start: '2022-07-27',
        end: '2022-07-31'
    },
    {
        id: 'ev_3678',
        start: '2022-07-31',
        end: '2022-08-07'
    },
    {
        id: 'ev_3678',
        start: '2022-08-07',
        end: '2022-08-14'
    },
    {
        id: 'ev_3678',
        start: '2022-08-14',
        end: '2022-08-21'
    },
    {
        id: 'ev_3678',
        start: '2022-08-21',
        end: '2022-08-27'
    },
]
