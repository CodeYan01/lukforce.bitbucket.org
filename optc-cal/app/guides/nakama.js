var nakama = {
    // Fortnights
    30: '2048070',      // Alvida
    39: '2067982',      // Buggy
    46: '2054137',      // Kuro
    58: '2046884',      // Krieg
    66: '2063774',      // Arlong
    228: '2044406',     // Morgan
    232: '2063744',     // Hina
    263: '2082189',     // CobiMeppo
    268: '2068183',     // Smoker
    297: '2069274',     // Tsuru
    318: '2079262',     // Kalifa
    322: '2067104',     // Lucci
    337: '2083902',     // Franky
    341: '2044215',     // Kraken
    386: '2078259',     // Hogback
    392: '2066356',     // Perona
    405: '2100886',     // Absalom
    420: '2082812',     // Kimono Luffy
    424: '2064839',     // Brook
    436: '2071630',     // Candy Sanji
    445: '2077303',     // Karoo
    462: '2081444',     // Prisoner Mr. 2
    510: '2084431',     // Prisoner Croc
    538: '2077100',     // Domino
    550: '2053391',     // Sadie
    571: '2072678',     // Afro Luffy
    583: '2085230',     // Shandia
    599: '2087966',     // Pirate Apprentice
    607: '2070422',     // Zeff
    635: '2094090',     // Camie
    656: '2083651',     // Arlong Pirates
    664: '2061551',     // Sand Sand Band
    681: '6073100',     // Summer Nami
    683: '6073100',     // Summer Robin
    685: '6073100',     // Summer Perona
    690: '2046015',     // Noland
    713: '2049088',     // Ganfor
    724: '2074962',     // T-Bone
    743: '2063618',     // Wanze
    761: '2087688',     // Halloween 1
    766: '2086896',     // Halloween 2
    797: '2073876',     // Breed
    808: '2061380',     // Wedding Nami
    848: '2040390',     // Tom's Workers
    852: '2045929',     // Wapol
    866: '2142655',     // Kimono Robin
    885: '2117830',     // Kimono Jinbe
    897: '2119918',     // Kimono Croc
    918: '2106825',     // Kuja
    929: '2078637',     // Hannyabal
    946: '2089510',     // WB Pirates 1
    979: '2075362',     // WB Pirates 2
    1003: '2108099',    // Heart Pirates
    1011: '2096300',    // Count Butler
    1037: '2093357',    // Ivankov
    1049: '2074549',    // Nico Olvia
    1072: '2083542',    // Dead End
    1095: '2081225',    // Golden Lion Pirates
    1112: '2146175',    // Young Nami Robin
    1137: '2123359',    // CP9
    1167: '2078991',    // Baccarat
    1199: '6073100',    // Summer Bonney
    1201: '6073100',    // Summer Violet
    1203: '2045646',    // Rumbar Pirates
    1215: '2042682',    // World Pirates
    1242: '2060194',    // Revolutionary Army
    1254: '2080840',    // WB Alliances
    1287: '2130129',    // Donquixote Kids
    1300: '6081218',    // Halloween Rebecca
    1302: '2090756',    // Prisoner Buggy
    1306: '6081218',    // Halloween Sugar
    1326: '6081218',    // Halloween Corazon
    1328: '2107554',    // Tontatta 1
    1332: '2119118',    // Tontatta 2
    1357: '2048913',    // Big Mom Pirates
    1384: '2075017',    // Toy Soldier
    1397: '2088050',    // Shambles G5
    1416: '2101780',    // Sengoku
    1426: '2044619',    // Don Sai
    1450: '2086259',    // Violet
    1469: '2081422',    // Sentomaru
    1509: '2089287',    // WB Pirates 3
    1520: '2062448',    // Dadan
    1547: '2056362',    // Soul King
    1564: '2068018',    // Elizabello
    1581: '2071459',    // Law
    1597: '2079012',    // Shirahoshi
    1606: '2114726',    // BB Pirates
    1624: '2142476',    // New Fishman
    1649: '2110068',    // Giolla & Brook
    1670: '2038800',    // Madam Sharley
    1690: '2035243',    // Kid

    // Raids
    227: '4039081',     // Mihawk
    249: '4070990',     // Monster Chopper
    306: '4070492',     // Garp
    353: '4067724',     // Zephyr
    390: '4042949',     // Ivankov
    418: '4051900',     // Doffy
    447: '4050751',     // Blackbeard
    516: '4049780',     // Heracles-un
    518: '4042359',     // Usopp-un
    575: '4038759',     // Aokiji
    603: '4036043',     // Eneru
    654: '4035948',     // Duval
    771: '4053420',     // Buster Call
    795: '4066936',     // Nightmare Luffy
    836: '4054403',     // Kuma
    865: '4087409',     // Boa Hancock
    933: '4032020',     // Pica
    978: '4039716',     // Kizaru
    989: '4101603',     // Fake Straw Hats
    1047: '4032256',    // Sabo
    1108: '4035822',    // Shiki
    1163: '4053803',    // Gild Tesoro
    1298: '4038813',    // Akainu
    1374: '4065831',    // Magellan
    1518: '4042191',    // Bellamy
    1595: '4046083',    // Fujitora
    1696: '4036175',    // Vergo
    1815: '4063867',    // Sanji
    1924: '4045622',    // Rayleigh

    1623: '4062886',    // Doflamingo (N)
    1669: '4049729',    // Aokiji (N)
    1680: '4050051',    // Mihawk (N)
    1727: '4043234',    // Sabo (N)
    1739: '4053201',    // Bellamy (N)
    1780: '4050686',    // Kizaru (N)

    1258: '6080102',    // Young Whitebeard
    1380: '6073782',    // Shanks
    1530: '6058401',    // Cavendish

    // Coliseums
    777: '5097899',     // Lucky Roux
    779: '5158488',     // Rebecca
    781: '5174150',     // Urouge
    804: '5129770',     // Hina
    806: '5137084',     // Smoker
    831: '5183584',     // Hawkins
    833: '5139953',     // Wyper
    834: '5136256',     // Mr. 7 & Ms. Father's Day
    860: '5148616',     // Coby
    862: '5146907',     // Alvida
    882: '5203477',     // Apoo
    884: '5154857',     // Dorry
    901: '5164452',     // Franky
    903: '5157518',     // Broggy
    904: '5117767',     // Yokozuna
    924: '5153654',     // Kid
    926: '5148659',     // Sadie
    927: '5177338',     // Doberman
    951: '5165214',     // Ace
    953: '5122809',     // Ben Beckman
    983: '5172144',     // Vista
    984: '5190671',     // Paulie
    1016: '5197735',    // Capone Bege
    1018: '5102205',    // Brownbeard
    1019: '5228376',    // Lulu
    1041: '5168956',    // Jozu
    1043: '5125703',    // Killer
    1087: '5097620',    // Musshuru
    1089: '5082110',    // Saga
    1091: '5175199',    // X-Drake
    1102: '5117789',    // Zephyr
    1104: '5115395',    // Ain
    1106: '5119299',    // Binz
    1141: '5177549',    // Moria
    1196: '5154202',    // Ganfor
    1220: '5110825',    // Byrnndi World
    1251: '5144984',    // Marco
    1310: '5092591',    // Kinemon
    1338: '5092920',    // Kanjuro
    1378: '5159871',    // Marguerite
    1401: '5127538',    // Gladius
    1422: '5149842',    // Diamante
    1423: '5135216',    // T-Bone
    1456: '5136553',    // Don Chin Jao
    1458: '5130466',    // Kuro
    1460: '5167718',    // Ms. Valentine
    1487: '5127799',    // Ideo
    1525: '5237291',    // Suleiman
    1553: '5189523',    // Hajrudin
    1584: '5191393',    // Orlumbus
    1602: '5148472',    // Shiryu
    1603: '5125281',    // McGuy
    1628: '5153634',    // Machvise
    1667: '5151816',    // Kyros
    1694: '5145772',    // Inuarashi
    1733: '5191415',    // Nekomamushi
    1792: '5231789',    // Lucy
    1828: '5141993',    // Shishilian

    // Event
    'bb_1314': '6094406',   // Three Admirals
    'bb_1404': '6092400',   // Straw Hat Pirates
    '20_1684': '6078907',   // 20th Anni SH Showdown 1
    '20_1682': '6079819',   // 20th Anni SH Mission 1
    '20_1755': '6064534',   // 20th Anni SH Showdown 2
    '20_1753': '6159457',   // 20th Anni SH Mission 2
};
