var ywb = 1258;
var shanks = 1380;

var coliseumEvents = [
    // ##############################
    {
        newId: [983, 984],
        repId: [781, 862, 834],
        start: '2017-03-01',
        new_batch: true
    },
    {
        newId: [983, 984],
        repId: [781, 862, 834],
        start: '2017-03-03',
        end: '2017-03-05',
        new_batch: true
    },
    {
        newId: [983, 984],
        repId: [781, 862, 834],
        start: '2017-03-08',
        new_batch: true
    },
    {
        newId: [983, 984],
        repId: [781, 862, 834],
        start: '2017-03-10',
        end: '2017-03-12',
        new_batch: true
    },
    {
        newId: [983, 984],
        repId: [781, 862, 834],
        start: '2017-03-15',
        new_batch: true
    },
    {
        newId: [983, 984],
        repId: [781, 862, 834],
        start: '2017-03-17',
        end: '2017-03-19',
        new_batch: true
    },

    // ##############################
    {
        newId: [1016, 1019],
        repId: [882, 779],
        start: '2017-03-22',
        new_batch: true
    },
    {
        newId: [1016, 1019],
        repId: [882, 779],
        start: '2017-03-24',
        end: '2017-03-26',
        new_batch: true
    },
    {
        newId: [1016, 1019],
        repId: [882, 779],
        start: '2017-03-29',
        new_batch: true
    },
    {
        newId: [1016, 1019],
        repId: [882, 779],
        start: '2017-03-31',
        end: '2017-04-02',
        new_batch: true
    },
    {
        newId: [1016, 1019],
        repId: [882, 779],
        start: '2017-04-05',
        new_batch: true
    },
    {
        newId: [1016, 1019],
        repId: [882, 779],
        start: '2017-04-07',
        end: '2017-04-09',
        new_batch: true
    },

    // ##############################
    {
        newId: [1041, 1018],
        repId: [806, 926],
        start: '2017-04-12',
        new_batch: true
    },
    {
        newId: [1041, 1018],
        repId: [806, 926],
        start: '2017-04-14',
        end: '2017-04-16',
        new_batch: true
    },
    {
        newId: [1041, 1018],
        repId: [806, 926],
        start: '2017-04-19',
        new_batch: true
    },
    {
        newId: [1041, 1018],
        repId: [806, 926],
        start: '2017-04-21',
        end: '2017-04-23',
        new_batch: true
    },
    {
        newId: [1041, 1018],
        repId: [806, 926],
        start: '2017-04-26',
        new_batch: true
    },
    {
        newId: [1041, 1018],
        repId: [806, 926],
        start: '2017-04-28',
        end: '2017-04-30',
        new_batch: true
    },

    // ##############################
    {
        newId: [1043, 1091],
        repId: [777, 833, 860],
        start: '2017-05-03',
        new_batch: true
    },
    {
        newId: [1043, 1091],
        repId: [777, 833, 860],
        start: '2017-05-05',
        end: '2017-05-07',
        new_batch: true
    },
    {
        newId: [1043, 1091],
        repId: [777, 833, 860],
        start: '2017-05-10',
        new_batch: true
    },
    {
        newId: [1043, 1091],
        repId: [777, 833, 860],
        start: '2017-05-12',
        end: '2017-05-14',
        new_batch: true
    },
    {
        newId: [1043, 1091],
        repId: [777, 833, 860],
        start: '2017-05-17',
        new_batch: true
    },
    {
        newId: [1043, 1091],
        repId: [777, 833, 860],
        start: '2017-05-19',
        end: '2017-05-21',
        new_batch: true
    },

    // ##############################
    {
        newId: [],
        repId: [831, 882, 951, 983, 862],
        start: '2017-05-24',
        new_batch: true
    },
    {
        newId: [],
        repId: [831, 882, 951, 983, 862],
        start: '2017-05-26',
        end: '2017-05-28',
        new_batch: true
    },
    {
        newId: [],
        repId: [831, 882, 951, 983, 862],
        start: '2017-05-31',
        new_batch: true
    },
    {
        newId: [],
        repId: [831, 882, 951, 983, 862],
        start: '2017-06-02',
        end: '2017-06-04',
        new_batch: true
    },
    {
        newId: [],
        repId: [831, 882, 951, 983, 862],
        start: '2017-06-07',
        new_batch: true
    },
    {
        newId: [],
        repId: [831, 882, 951, 983, 862],
        start: '2017-06-09',
        end: '2017-06-11',
        new_batch: true
    },

    // ##############################
    {
        newId: [1102, 1104, 1106],
        repId: [884, 903],
        start: '2017-06-14',
        new_batch: true
    },
    {
        newId: [1102, 1104, 1106],
        repId: [884, 903],
        start: '2017-06-16',
        end: '2017-06-18',
        new_batch: true
    },
    {
        newId: [1102, 1104, 1106],
        repId: [884, 903],
        start: '2017-06-21',
        new_batch: true
    },
    {
        newId: [1102, 1104, 1106],
        repId: [884, 903],
        start: '2017-06-23',
        end: '2017-06-25',
        new_batch: true
    },
    {
        newId: [1102, 1104, 1106],
        repId: [884, 903],
        start: '2017-06-28',
        new_batch: true
    },
    {
        newId: [1102, 1104, 1106],
        repId: [884, 903],
        start: '2017-06-30',
        end: '2017-07-02',
        new_batch: true
    },

    // ##############################
    {
        newId: [1087, 1089],
        repId: [781, 924, 834],
        start: '2017-07-05',
        ambush: shanks,
        new_batch: true
    },
    {
        newId: [1087, 1089],
        repId: [781, 924, 834],
        start: '2017-07-07',
        end: '2017-07-09',
        ambush: shanks,
        new_batch: true
    },
    {
        newId: [1087, 1089],
        repId: [781, 924, 834],
        start: '2017-07-12',
        new_batch: true
    },
    {
        newId: [1087, 1089],
        repId: [781, 924, 834],
        start: '2017-07-14',
        end: '2017-07-16',
        new_batch: true
    },
    {
        newId: [1087, 1089],
        repId: [781, 924, 834],
        start: '2017-07-19',
        new_batch: true
    },
    {
        newId: [1087, 1089],
        repId: [781, 924, 834],
        start: '2017-07-21',
        end: '2017-07-23',
        new_batch: true
    },

    // ##############################
    {
        newId: [1141],
        repId: [1016, 1043, 860, 984],
        start: '2017-07-26',
        ambush: ywb,
        new_batch: true
    },
    {
        newId: [1141],
        repId: [1016, 1043, 860, 984],
        start: '2017-07-28',
        end: '2017-07-30',
        ambush: ywb,
        new_batch: true
    },
    {
        newId: [1141],
        repId: [1016, 1043, 860, 984],
        start: '2017-08-02',
        new_batch: true
    },
    {
        newId: [1141],
        repId: [1016, 1043, 860, 984],
        start: '2017-08-04',
        end: '2017-08-06',
        new_batch: true
    },
    {
        newId: [1141],
        repId: [1016, 1043, 860, 984],
        start: '2017-08-09',
        new_batch: true
    },
    {
        newId: [1141],
        repId: [1016, 1043, 860, 984],
        start: '2017-08-11',
        end: '2017-08-13',
        new_batch: true
    },

    // ##############################
    {
        newId: [1456, 1458, 1460],
        repId: [882, 862, 953],
        start: '2017-08-16',
        ambush: shanks,
        new_batch: true
    },
    {
        newId: [1456, 1458, 1460],
        repId: [882, 862, 953],
        start: '2017-08-18',
        end: '2017-08-20',
        ambush: shanks,
        new_batch: true
    },
    {
        newId: [1456, 1458, 1460],
        repId: [882, 862, 953],
        start: '2017-08-23',
        new_batch: true
    },
    {
        newId: [1456, 1458, 1460],
        repId: [882, 862, 953],
        start: '2017-08-25',
        end: '2017-08-27',
        new_batch: true
    },
    {
        newId: [1456, 1458, 1460],
        repId: [882, 862, 953],
        start: '2017-08-30',
        new_batch: true
    },
    {
        newId: [1456, 1458, 1460],
        repId: [882, 862, 953],
        start: '2017-09-01',
        end: '2017-09-03',
        new_batch: true
    },

    // ##############################
    {
        newId: [1310, 1338, 1378],
        repId: [983, 804],
        start: '2017-09-06',
        ambush: shanks,
        new_batch: true
    },
    {
        newId: [1310, 1338, 1378],
        repId: [983, 804],
        start: '2017-09-08',
        end: '2017-09-10',
        ambush: shanks,
        new_batch: true
    },
    {
        newId: [1310, 1338, 1378],
        repId: [983, 804],
        start: '2017-09-13',
        ambush: shanks,
        new_batch: true
    },
    {
        newId: [1310, 1338, 1378],
        repId: [983, 804],
        start: '2017-09-15',
        end: '2017-09-17',
        ambush: shanks,
        new_batch: true
    },
    {
        newId: [1310, 1338, 1378],
        repId: [983, 804],
        start: '2017-09-20',
        ambush: shanks,
        new_batch: true
    },
    {
        newId: [1310, 1338, 1378],
        repId: [983, 804],
        start: '2017-09-22',
        end: '2017-09-24',
        ambush: shanks,
        new_batch: true
    },

    // ##############################
    {
        newId: [1220, 1525, 1196],
        repId: [1091, 833],
        start: '2017-09-27',
        new_batch: true
    },
    {
        newId: [1220, 1525, 1196],
        repId: [1091, 833],
        start: '2017-09-29',
        end: '2017-10-01',
        new_batch: true
    },
    {
        newId: [1220, 1525, 1196],
        repId: [1091, 833],
        start: '2017-10-04',
        new_batch: true
    },
    {
        newId: [1220, 1525, 1196],
        repId: [1091, 833],
        start: '2017-10-06',
        end: '2017-10-08',
        new_batch: true
    },
    {
        newId: [1220, 1525, 1196],
        repId: [1091, 833],
        start: '2017-10-11',
        new_batch: true
    },
    {
        newId: [1220, 1525, 1196],
        repId: [1091, 833],
        start: '2017-10-13',
        end: '2017-10-15',
        new_batch: true
    },

    // ##############################
    {
        newId: [1401, 1584, 1423],
        repId: [806, 953],
        start: '2017-10-18',
        ambush: shanks,
        new_batch: true
    },
    {
        newId: [1401, 1584, 1423],
        repId: [806, 953],
        start: '2017-10-20',
        end: '2017-10-22',
        ambush: shanks,
        new_batch: true
    },
    {
        newId: [1401, 1584, 1423],
        repId: [806, 953],
        start: '2017-10-25',
        new_batch: true
    },
    {
        newId: [1401, 1584, 1423],
        repId: [806, 953],
        start: '2017-10-27',
        end: '2017-10-29',
        new_batch: true
    },
    {
        newId: [1401, 1584, 1423],
        repId: [806, 953],
        start: '2017-11-01',
        new_batch: true
    },
    {
        newId: [1401, 1584, 1423],
        repId: [806, 953],
        start: '2017-11-03',
        end: '2017-11-05',
        new_batch: true
    },

    // ##############################
    {
        newId: [],
        repId: [882, 1141, 779],
        start: '2017-10-16',
        new_batch: false
    },
    {
        newId: [],
        repId: [882, 1141, 779],
        start: '2017-10-19',
        ambush: shanks,
        new_batch: false
    },
    {
        newId: [],
        repId: [882, 1141, 779],
        start: '2017-10-23',
        new_batch: false
    },
    {
        newId: [],
        repId: [882, 1141, 779],
        start: '2017-10-26',
        new_batch: false
    },

    // ##############################
    {
        newId: [],
        repId: [924, 951, 1018, 1019],
        start: '2017-10-30',
        new_batch: false
    },
    {
        newId: [],
        repId: [924, 951, 1018, 1019],
        start: '2017-11-02',
        new_batch: false
    },
    {
        newId: [],
        repId: [924, 951, 1018, 1019],
        start: '2017-11-06',
        ambush: cavendish,
        new_batch: false
    },
    {
        newId: [],
        repId: [924, 951, 1018, 1019],
        start: '2017-11-09',
        ambush: cavendish,
        new_batch: false
    },

    // ##############################
    {
        newId: [1251, 1487],
        repId: [884, 903, 926],
        start: '2017-11-08',
        ambush: cavendish,
        new_batch: true
    },
    {
        newId: [1251, 1487],
        repId: [884, 903, 926],
        start: '2017-11-10',
        end: '2017-11-12',
        ambush: cavendish,
        new_batch: true
    },
    {
        newId: [1251, 1487],
        repId: [884, 903, 926],
        start: '2017-11-15',
        new_batch: true
    },
    {
        newId: [1251, 1487],
        repId: [884, 903, 926],
        start: '2017-11-17',
        end: '2017-11-19',
        new_batch: true
    },
    {
        newId: [1251, 1487],
        repId: [884, 903, 926],
        start: '2017-11-22',
        new_batch: true
    },
    {
        newId: [1251, 1487],
        repId: [884, 903, 926],
        start: '2017-11-24',
        end: '2017-11-26',
        new_batch: true
    },

    // ##############################
    {
        newId: [],
        repId: [901, 1102, 862, 1106],
        start: '2017-11-13',
        new_batch: false
    },
    {
        newId: [],
        repId: [901, 1102, 862, 1106],
        start: '2017-11-16',
        new_batch: false
    },
    {
        newId: [],
        repId: [901, 1102, 862, 1106],
        start: '2017-11-20',
        new_batch: false
    },
    {
        newId: [],
        repId: [901, 1102, 862, 1106],
        start: '2017-11-23',
        new_batch: false
    },

    // ##############################
    {
        newId: [1602, 1603],
        repId: [1043, 777, 860],
        start: '2017-11-29',
        new_batch: true
    },
    {
        newId: [1602, 1603],
        repId: [1043, 777, 860],
        start: '2017-12-01',
        end: '2017-12-03',
        new_batch: true
    },
    {
        newId: [1602, 1603],
        repId: [1043, 777, 860],
        start: '2017-12-06',
        new_batch: true
    },
    {
        newId: [1602, 1603],
        repId: [1043, 777, 860],
        start: '2017-12-08',
        end: '2017-12-10',
        new_batch: true
    },
    {
        newId: [1602, 1603],
        repId: [1043, 777, 860],
        start: '2017-12-13',
        new_batch: true
    },
    {
        newId: [1602, 1603],
        repId: [1043, 777, 860],
        start: '2017-12-15',
        end: '2017-12-17',
        new_batch: true
    },

    // ##############################
    {
        newId: [],
        repId: [1220, 1087, 1089, 1104],
        start: '2017-11-27',
        new_batch: false
    },
    {
        newId: [],
        repId: [1220, 1087, 1089, 1104],
        start: '2017-11-30',
        new_batch: false
    },
    {
        newId: [],
        repId: [1220, 1087, 1089, 1104],
        start: '2017-12-04',
        new_batch: false
    },
    {
        newId: [],
        repId: [1220, 1087, 1089, 1104],
        start: '2017-12-07',
        new_batch: false
    },

    // ##############################
    {
        newId: [],
        repId: [1041, 1310, 834, 903],
        start: '2017-12-11',
        new_batch: false
    },
    {
        newId: [],
        repId: [1041, 1310, 834, 903],
        start: '2017-12-14',
        new_batch: false
    },
    {
        newId: [],
        repId: [1041, 1310, 834, 903],
        start: '2017-12-18',
        new_batch: false
    },
    {
        newId: [],
        repId: [1041, 1310, 834, 903],
        start: '2017-12-21',
        ambush: cavendish,
        new_batch: false
    },

    // ##############################
    {
        newId: [1553, 1694],
        repId: [983, 1016, 804, 904],
        start: '2017-12-20',
        ambush: cavendish,
        new_batch: true
    },
    {
        newId: [1553, 1694],
        repId: [983, 1016, 804, 904],
        start: '2017-12-22',
        end: '2017-12-24',
        ambush: cavendish,
        new_batch: true
    },
    {
        newId: [1553, 1694],
        repId: [983, 1016, 804, 904],
        start: '2017-12-27',
        new_batch: true
    },
    {
        newId: [1553, 1694],
        repId: [983, 1016, 804, 904],
        start: '2017-12-29',
        end: '2017-12-31',
        new_batch: true
    },
    {
        newId: [1553, 1694],
        repId: [983, 1016, 804, 904],
        start: '2018-01-03',
        new_batch: true
    },
    {
        newId: [1553, 1694],
        repId: [983, 1016, 804, 904],
        start: '2018-01-05',
        end: '2018-01-07',
        new_batch: true
    },

    // ##############################
    {
        newId: [],
        repId: [831, 1456, 984, 1603],
        start: '2017-12-25',
        ambush: cavendish,
        new_batch: false
    },
    {
        newId: [],
        repId: [831, 1456, 984, 1603],
        start: '2017-12-28',
        new_batch: false
    },
    {
        newId: [],
        repId: [831, 1456, 984, 1603],
        start: '2018-01-01',
        new_batch: false
    },
    {
        newId: [],
        repId: [831, 1456, 984, 1603],
        start: '2018-01-04',
        new_batch: false
    },

    // ##############################
    {
        newId: [1628, 1733],
        repId: [1141, 833, 1423],
        start: '2018-01-10',
        new_batch: true
    },
    {
        newId: [1628, 1733],
        repId: [1141, 833, 1423],
        start: '2018-01-12',
        end: '2018-01-14',
        new_batch: true
    },
    {
        newId: [1628, 1733],
        repId: [1141, 833, 1423],
        start: '2018-01-17',
        new_batch: true
    },
    {
        newId: [1628, 1733],
        repId: [1141, 833, 1423],
        start: '2018-01-19',
        end: '2018-01-21',
        new_batch: true
    },
    {
        newId: [1628, 1733],
        repId: [1141, 833, 1423],
        start: '2018-01-24',
        new_batch: true
    },
    {
        newId: [1628, 1733],
        repId: [1141, 833, 1423],
        start: '2018-01-26',
        end: '2018-01-28',
        new_batch: true
    },

    // ##############################
    {
        newId: [],
        repId: [951, 1487, 1602, 927],
        start: '2018-01-08',
        new_batch: false
    },
    {
        newId: [],
        repId: [951, 1487, 1602, 927],
        start: '2018-01-11',
        new_batch: false
    },
    {
        newId: [],
        repId: [951, 1487, 1602, 927],
        start: '2018-01-15',
        new_batch: false
    },
    {
        newId: [],
        repId: [951, 1487, 1602, 927],
        start: '2018-01-18',
        new_batch: false
    },

    // ##############################
    {
        newId: [],
        repId: [1091, 1338, 834, 1460],
        start: '2018-01-22',
        new_batch: false
    },
    {
        newId: [],
        repId: [1091, 1338, 834, 1460],
        start: '2018-01-25',
        new_batch: false
    },
    {
        newId: [],
        repId: [1091, 1338, 834, 1460],
        start: '2018-01-29',
        new_batch: false
    },
    {
        newId: [],
        repId: [1091, 1338, 834, 1460],
        start: '2018-02-01',
        new_batch: false
    },

    // ##############################
    {
        newId: [1422, 1828],
        repId: [1251, 777, 1458],
        start: '2018-01-31',
        new_batch: true
    },
    {
        newId: [1422, 1828],
        repId: [1251, 777, 1458],
        start: '2018-02-02',
        end: '2018-02-04',
        new_batch: true
    },
    {
        newId: [1422, 1828],
        repId: [1251, 777, 1458],
        start: '2018-02-07',
        new_batch: true
    },
    {
        newId: [1422, 1828],
        repId: [1251, 777, 1458],
        start: '2018-02-09',
        end: '2018-02-11',
        new_batch: true
    },
    {
        newId: [1422, 1828],
        repId: [1251, 777, 1458],
        start: '2018-02-14',
        new_batch: true
    },
    {
        newId: [1422, 1828],
        repId: [1251, 777, 1458],
        start: '2018-02-16',
        end: '2018-02-18',
        new_batch: true
    },

    // ##############################
    {
        newId: [],
        repId: [781, 831, 882, 924, 1016, 927],
        start: '2018-02-05',
        new_batch: false
    },
    {
        newId: [],
        repId: [781, 831, 882, 924, 1016, 927],
        start: '2018-02-08',
        new_batch: false
    },
    {
        newId: [],
        repId: [781, 831, 882, 924, 1016, 927],
        start: '2018-02-12',
        new_batch: false
    },
    {
        newId: [],
        repId: [781, 831, 882, 924, 1016, 927],
        start: '2018-02-15',
        new_batch: false
    },
]
