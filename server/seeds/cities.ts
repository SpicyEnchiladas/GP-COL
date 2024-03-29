import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cities").del();

    const cityInfosArray =    [
        ["Hamilton, Bermuda",1646.7,2987.9,4634.6,683.82],
        ["New York, NY, United States",1127.9,3068.0,4195.9,450.00],
        ["Santa Barbara, CA, United States",1134.5,2825.6,3960.1,484.92],
        ["San Francisco, CA, United States",1076.4,2844.6,3921.0,447.705],
        ["Oakland, CA, United States",1042.1,2556.0,3598.0,426.825],
        ["Santa Clara, CA, United States",917.5,2600.4,3517.9,372.06],
        ["Boston, MA, United States",944.2,2362.7,3306.9,371.115],
        ["Geneva, Switzerland",1161.7,2094.8,3256.5,456.84],
        ["San Jose, CA, United States",896.5,2330.8,3227.2,333.585],
        ["Zug, Switzerland",1330.6,1866.6,3197.2,537.93],
        ["Zurich, Switzerland",1338.5,1846.3,3184.8,537.705],
        ["San Diego, CA, United States",884.4,2284.1,3168.5,339.93],
        ["Miami, FL, United States",887.0,2235.0,3122.0,346.635],
        ["Honolulu, HI, United States",1149.7,1945.7,3095.4,509.67],
        ["Los Angeles, CA, United States",875.8,2219.4,3095.2,350.415],
        ["Washington, DC, United States",953.1,2129.2,3082.3,389.025],
        ["Irvine, CA, United States",861.5,2218.8,3080.3,333.135],
        ["Lausanne, Switzerland",1320.9,1695.7,3016.6,545.895],
        ["Seattle, WA, United States",992.0,1987.1,2979.2,406.71],
        ["Sharjah, United Arab Emirates",533.8,2429.2,2963.1,179.55],
        ["Hong Kong, Hong Kong",863.4,2085.9,2949.4,371.295],
        ["Fremont, CA, United States",818.0,2129.5,2947.5,303.705],
        ["Singapore, Singapore",892.1,1997.0,2889.0,321.12],
        ["Fort Lauderdale, FL, United States",828.9,1984.4,2813.3,333.81],
        ["Nashville, TN, United States",895.7,1917.2,2812.9,361.80],
        ["London, United Kingdom",878.3,1892.6,2771.0,254.61],
        ["Basel, Switzerland",1345.1,1369.6,2714.6,564.435],
        ["Austin, TX, United States",781.4,1928.2,2709.7,318.825],
        ["Saint Helier, Jersey",945.4,1681.6,2627.0,303.525],
        ["Asheville, NC, United States",875.9,1722.4,2598.3,402.525],
        ["Chicago, IL, United States",872.5,1717.2,2589.6,333.54],
        ["Denver, CO, United States",909.2,1670.2,2579.4,357.705],
        ["Sacramento, CA, United States",917.3,1651.2,2568.5,385.245],
        ["Tampa, FL, United States",859.5,1701.2,2560.7,335.115],
        ["Long Beach, CA, United States",774.9,1763.2,2538.1,309.06],
        ["Minneapolis, MN, United States",851.9,1681.9,2533.8,343.80],
        ["Vancouver, Canada",850.5,1647.8,2498.3,340.83],
        ["Dallas, TX, United States",842.6,1642.9,2485.5,328.14],
        ["Portland, OR, United States",895.2,1588.9,2484.2,363.105],
        ["Dublin, Ireland",793.8,1678.2,2472.0,255.87],
        ["Luxembourg, Luxembourg",861.2,1600.3,2461.4,308.43],
        ["Tel Aviv-Yafo, Israel",925.1,1535.2,2460.4,318.78],
        ["Nassau, Bahamas",1086.9,1366.2,2453.1,378.135],
        ["Philadelphia, PA, United States",858.1,1573.3,2431.4,354.465],
        ["Charlotte, NC, United States",776.1,1629.4,2405.5,301.68],
        ["Sydney, Australia",864.3,1527.9,2392.2,329.895],
        ["Bern, Switzerland",1278.5,1108.8,2387.3,532.215],
        ["Plano, TX, United States",858.1,1508.5,2366.7,347.265],
        ["Burnaby, Canada",745.4,1607.3,2352.8,297.765],
        ["Orlando, FL, United States",791.1,1554.6,2345.7,299.655],
        ["Atlanta, GA, United States",833.4,1508.8,2342.3,325.26],
        ["Baltimore, MD, United States",830.7,1510.4,2341.1,342.00],
        ["Doha, Qatar",687.0,1625.1,2312.1,233.46],
        ["San Juan, Puerto Rico",774.7,1535.2,2309.9,314.55],
        ["Markham, Canada",794.6,1509.8,2304.4,293.67],
        ["Amsterdam, Netherlands",837.8,1461.3,2299.1,269.37],
        ["Anchorage, AK, United States",992.2,1305.4,2297.7,424.845],
        ["Toronto, Canada",826.5,1454.8,2281.4,320.22],
        ["New Orleans, LA, United States",855.9,1409.7,2265.6,326.475],
        ["Fresno, CA, United States",811.5,1436.1,2247.7,307.125],
        ["Phoenix, AZ, United States",821.6,1425.7,2247.3,319.455],
        ["Reykjavik, Iceland",1009.3,1235.5,2244.8,388.215],
        ["Reno, NV, United States",819.1,1393.5,2212.6,333.27],
        ["Fort Worth, TX, United States",807.0,1404.2,2211.3,323.01],
        ["Oslo, Norway",1013.6,1196.2,2209.8,378.045],
        ["Colorado Springs, CO, United States",854.5,1353.9,2208.4,337.725],
        ["Lagos, Nigeria",443.7,1758.6,2202.3,181.395],
        ["Brighton, United Kingdom",742.5,1452.4,2194.9,235.71],
        ["Victoria, Canada",852.5,1332.7,2185.2,351.36],
        ["Copenhagen, Denmark",864.9,1318.9,2183.8,274.23],
        ["Houston, TX, United States",754.0,1412.2,2166.2,285.93],
        ["Boise, ID, United States",769.4,1394.7,2164.1,292.68],
        ["Mississauga, Canada",781.4,1378.1,2159.6,271.935],
        ["Salt Lake City, UT, United States",750.9,1399.9,2150.8,277.47],
        ["Grand Rapids, MI, United States",787.9,1360.0,2147.9,341.37],
        ["Oxford, United Kingdom",721.8,1414.0,2135.8,253.575],
        ["Birmingham, AL, United States",846.8,1284.3,2131.1,366.255],
        ["Raleigh, NC, United States",734.1,1389.2,2123.2,298.395],
        ["Pittsburgh, PA, United States",903.1,1188.9,2092.0,404.505],
        ["Madison, WI, United States",774.1,1311.3,2085.4,317.295],
        ["Cleveland, OH, United States",819.3,1265.6,2084.9,321.795],
        ["Auckland, New Zealand",854.1,1226.9,2081.0,330.345],
        ["Spokane, WA, United States",813.9,1265.2,2079.2,307.935],
        ["Dubai, United Arab Emirates",703.3,1368.3,2071.6,217.89],
        ["Paris, France",798.0,1267.1,2065.1,307.71],
        ["Las Vegas, NV, United States",800.3,1264.3,2064.6,294.12],
        ["Abu Dhabi, United Arab Emirates",633.1,1429.4,2062.5,209.745],
        ["Munich, Germany",774.8,1274.4,2049.2,265.50],
        ["Ramat Gan, Israel",915.7,1130.9,2046.5,327.195],
        ["Saint Paul, MN, United States",861.7,1184.6,2046.3,338.265],
        ["Guildford, United Kingdom",767.6,1278.4,2046.0,260.64],
        ["Chattanooga, TN, United States",830.0,1201.4,2031.5,319.14],
        ["Mesa, AZ, United States",727.7,1303.6,2031.3,293.445],
        ["Wellington, New Zealand",797.7,1221.1,2018.7,325.26],
        ["Indianapolis, IN, United States",824.5,1188.9,2013.4,342.405],
        ["Haarlem, Netherlands",795.9,1210.0,2005.9,263.79],
        ["Surrey, Canada",786.6,1217.7,2004.3,317.97],
        ["Kansas City, MO, United States",739.5,1250.2,1989.7,265.59],
        ["Detroit, MI, United States",807.6,1180.0,1987.5,300.42],
        ["Guelph, Canada",805.5,1178.4,1983.9,333.00],
        ["Brampton, Canada",758.0,1216.8,1974.7,289.80],
        ["Jacksonville, FL, United States",785.0,1188.5,1973.6,347.31],
        ["Cork, Ireland",742.6,1225.7,1968.3,230.22],
        ["Nanaimo, BC, Canada",856.5,1106.3,1962.9,348.795],
        ["Columbus, OH, United States",796.2,1165.2,1961.4,300.33],
        ["Cincinnati, OH, United States",742.0,1205.4,1947.4,296.145],
        ["Kelowna, Canada",747.7,1198.4,1946.1,298.035],
        ["Brisbane, Australia",843.1,1100.2,1943.3,329.805],
        ["Milan, Italy",777.6,1157.9,1935.5,259.695],
        ["Stockholm, Sweden",771.4,1162.5,1933.9,280.17],
        ["Buffalo, NY, United States",836.8,1092.5,1929.3,323.01],
        ["Ottawa, Canada",797.6,1128.4,1926.0,296.325],
        ["London, Canada",766.2,1159.1,1925.3,284.445],
        ["Melbourne, Australia",838.2,1073.5,1911.7,337.095],
        ["Canberra, Australia",783.7,1127.2,1910.9,327.735],
        ["Jerusalem, Israel",839.4,1069.5,1908.9,291.465],
        ["Utrecht, Netherlands",790.2,1104.5,1894.7,265.725],
        ["Seoul, South Korea",872.6,1018.0,1890.5,443.295],
        ["Albuquerque, NM, United States",720.5,1167.1,1887.6,289.125],
        ["Stavanger, Norway",973.9,911.8,1885.7,363.285],
        ["Bergen, Norway",968.3,916.4,1884.7,369.45],
        ["Rotterdam, Netherlands",786.4,1095.9,1882.3,267.66],
        ["Macao, Macao",798.8,1082.1,1880.9,349.335],
        ["Trondheim, Norway",950.2,926.2,1876.4,354.15],
        ["Hamilton, Canada",766.9,1098.0,1864.9,313.245],
        ["Kitchener, Canada",780.9,1080.5,1861.4,308.34],
        ["San Antonio, TX, United States",696.4,1153.3,1849.6,257.94],
        ["Tokyo, Japan",818.5,1029.6,1848.2,362.475],
        ["Perth, Australia",823.8,1021.0,1844.9,321.75],
        ["Calgary, Canada",833.0,1010.3,1843.3,320.40],
        ["Reading, United Kingdom",765.6,1074.7,1840.4,245.70],
        ["Galway, Ireland",755.6,1080.5,1836.1,265.635],
        ["Valletta, Malta",804.1,1031.2,1835.3,256.365],
        ["Halifax, Canada",791.7,1042.8,1834.5,323.10],
        ["Albany, NY, United States",765.6,1067.4,1833.0,304.47],
        ["Kingston, Canada",752.0,1075.0,1827.0,290.43],
        ["Saint Louis, MO, United States",747.7,1076.9,1824.6,309.33],
        ["Milwaukee, WI, United States",757.4,1065.2,1822.6,288.27],
        ["Gold Coast, Australia",778.3,1042.8,1821.1,295.875],
        ["Beirut, Lebanon",1078.9,742.1,1821.0,493.425],
        ["Beijing, China",566.0,1253.3,1819.3,220.32],
        ["Hamburg, Germany",768.1,1045.3,1813.4,241.11],
        ["Tromso, Norway",906.4,898.0,1804.4,353.205],
        ["Netanya, Israel",914.2,874.7,1788.9,301.185],
        ["Frankfurt, Germany",735.3,1049.3,1784.6,227.565],
        ["Espoo, Finland",843.1,939.7,1782.9,308.43],
        ["Bristol, United Kingdom",716.1,1064.3,1780.4,228.015],
        ["Shanghai, China",549.8,1225.7,1775.4,228.735],
        ["York, United Kingdom",758.4,1016.7,1775.2,249.21],
        ["Eindhoven, Netherlands",784.4,990.7,1775.0,259.56],
        ["Arhus, Denmark",844.3,918.3,1762.5,270.18],
        ["Adelaide, Australia",812.0,949.2,1761.2,329.40],
        ["Helsinki, Finland",765.6,995.3,1760.9,266.355],
        ["Milton Keynes, United Kingdom",720.9,1036.7,1757.5,251.685],
        ["Limerick, Ireland",740.5,1005.4,1745.9,243.09],
        ["Tucson, AZ, United States",757.4,986.1,1743.5,292.545],
        ["Berlin, Germany",707.8,1035.1,1742.9,234.855],
        ["Memphis, TN, United States",690.7,1049.3,1740.0,264.015],
        ["Omaha, NE, United States",852.9,878.1,1731.0,323.55],
        ["Knoxville, TN, United States",712.4,1013.7,1726.1,274.455],
        ["Montreal, Canada",781.9,944.0,1725.9,308.52],
        ["Windsor, Canada",734.6,987.3,1721.9,270.00],
        ["Petah Tikva, Israel",864.1,853.5,1717.6,298.98],
        ["Odense, Denmark",893.3,814.6,1707.9,305.505],
        ["The Hague (Den Haag), Netherlands",745.4,944.9,1690.4,246.915],
        ["Maastricht, Netherlands",730.4,959.7,1690.1,263.61],
        ["Rome, Italy",700.2,984.8,1685.0,238.86],
        ["Manchester, United Kingdom",721.0,961.5,1682.5,232.155],
        ["Nice, France",834.9,833.0,1667.9,316.755],
        ["Birmingham, United Kingdom",653.9,996.2,1650.0,213.12],
        ["Louisville, KY, United States",749.3,895.9,1645.1,307.395],
        ["Edmonton, Canada",807.5,828.4,1635.8,310.50],
        ["Edinburgh, United Kingdom",693.2,940.0,1633.3,219.33],
        ["Christchurch, New Zealand",753.9,878.4,1632.3,303.84],
        ["Oklahoma City, OK, United States",727.4,904.4,1631.8,306.405],
        ["Bournemouth, United Kingdom",706.1,925.6,1631.7,213.885],
        ["Nijmegen, Netherlands",761.9,859.7,1621.6,262.395],
        ["Limassol, Cyprus",644.7,972.9,1617.6,208.98],
        ["Delft, Netherlands",755.0,851.7,1606.7,262.575],
        ["Vienna, Austria",701.6,904.4,1606.0,248.625],
        ["Dusseldorf, Germany",685.4,914.0,1599.4,222.39],
        ["Stuttgart, Germany",705.1,893.4,1598.5,232.785],
        ["Freiburg im Breisgau, Germany",658.3,939.7,1598.0,220.995],
        ["Leeds, United Kingdom",680.9,915.5,1596.4,219.915],
        ["Brussels, Belgium",729.5,866.4,1595.9,246.51],
        ["Bonn, Germany",748.3,847.4,1595.6,239.535],
        ["Heidelberg, Germany",726.7,862.4,1589.1,220.365],
        ["Cardiff, United Kingdom",680.6,904.4,1585.0,224.73],
        ["Hamilton, New Zealand",778.9,804.1,1583.1,303.075],
        ["Tulsa, OK, United States",713.4,857.5,1570.9,261.855],
        ["Winnipeg, Canada",768.7,788.2,1556.9,307.485],
        ["Wichita, KS, United States",670.6,879.6,1550.1,265.86],
        ["Akron, OH, United States",791.0,755.0,1546.1,295.335],
        ["Southampton, United Kingdom",661.0,874.1,1535.0,210.33],
        ["Saskatoon, Canada",754.1,778.4,1532.5,278.19],
        ["Sliema, Malta",713.2,812.4,1525.6,259.245],
        ["Exeter, United Kingdom",659.3,865.8,1525.1,207.99],
        ["Haifa, Israel",873.9,649.5,1523.4,300.24],
        ["Barcelona, Spain",633.2,888.5,1521.7,199.80],
        ["Norwich, United Kingdom",663.0,855.1,1518.0,217.35],
        ["Nottingham, United Kingdom",703.4,811.2,1514.6,250.56],
        ["Enschede, Netherlands",734.6,779.6,1514.2,259.425],
        ["Hobart, Australia",786.8,722.5,1509.4,304.47],
        ["Glasgow, United Kingdom",688.6,820.1,1508.7,215.325],
        ["Salzburg, Austria",695.6,804.4,1500.0,252.18],
        ["Innsbruck, Austria",734.1,765.2,1499.2,251.505],
        ["Manama, Bahrain",607.7,879.0,1486.7,186.975],
        ["Groningen, Netherlands",778.6,704.4,1483.0,263.655],
        ["Lyon, France",787.5,694.3,1481.8,309.06],
        ["St. John's, Newfoundland and Labrador, Canada",844.8,633.5,1478.4,330.705],
        ["Cologne, Germany",688.7,780.8,1469.5,223.38],
        ["Plymouth, United Kingdom",701.3,764.9,1466.2,221.76],
        ["Gothenburg, Sweden",689.4,772.2,1461.6,245.205],
        ["Madrid, Spain",593.9,860.9,1454.7,183.69],
        ["Sheffield, United Kingdom",636.9,816.4,1453.3,204.66],
        ["Karlsruhe, Germany",711.7,741.5,1453.3,245.79],
        ["Lund, Sweden",700.8,751.0,1451.8,266.355],
        ["Leuven, Belgium",722.7,728.3,1451.0,238.635],
        ["Cascais, Portugal",493.4,956.0,1449.3,148.14],
        ["Aalborg, Denmark",808.9,634.5,1443.4,278.10],
        ["Male, Maldives",627.4,811.8,1439.1,242.595],
        ["Gent, Belgium",705.2,733.3,1438.4,238.095],
        ["Antwerp, Belgium",738.0,694.0,1432.0,238.185],
        ["Liverpool, United Kingdom",724.6,693.7,1418.3,226.575],
        ["Regina, Canada",727.4,687.2,1414.6,275.13],
        ["Moscow, Russia",572.9,841.6,1414.4,185.805],
        ["Nantes, France",722.0,691.5,1413.5,283.995],
        ["Belfast, United Kingdom",686.1,725.6,1411.7,224.685],
        ["Augsburg, Germany",671.5,732.3,1403.8,199.845],
        ["Toulouse, France",744.4,656.6,1401.0,292.995],
        ["Bologna, Italy",703.4,686.9,1390.3,241.56],
        ["Florence, Italy",709.7,679.9,1389.6,259.47],
        ["Linz, Austria",716.5,666.4,1382.8,257.58],
        ["Marseille, France",723.1,659.6,1382.7,291.375],
        ["Bilbao, Spain",632.3,747.4,1379.7,221.265],
        ["Bergamo, Italy",697.1,681.4,1378.5,241.02],
        ["Palma de Mallorca, Spain",573.6,802.3,1375.8,185.22],
        ["Kuwait City, Kuwait",524.9,848.0,1372.9,149.31],
        ["Leicester, United Kingdom",616.3,749.2,1365.5,199.80],
        ["Lisbon, Portugal",501.9,863.3,1365.3,157.68],
        ["Newcastle upon Tyne, United Kingdom",649.3,709.0,1358.4,208.215],
        ["Turku, Finland",760.2,598.0,1358.2,272.835],
        ["Makati, Philippines",511.4,844.6,1356.0,221.22],
        ["Quebec City, Canada",734.3,621.3,1355.6,288.72],
        ["Red Deer, Canada",729.3,622.2,1351.5,280.62],
        ["Uppsala, Sweden",700.8,649.5,1350.3,244.035],
        ["Malmo, Sweden",678.6,671.6,1350.1,244.98],
        ["Taipei, Taiwan",683.0,664.5,1347.5,328.365],
        ["Osaka, Japan",710.6,636.6,1347.2,296.235],
        ["Mannheim, Germany",700.4,644.6,1345.0,228.42],
        ["Hanover, Germany",681.2,660.8,1342.0,227.43],
        ["Coventry, United Kingdom",652.6,686.3,1338.9,210.51],
        ["Graz, Austria",742.7,593.4,1336.1,283.77],
        ["Panama City, Panama",567.0,767.3,1334.3,217.575],
        ["Tampere, Finland",690.0,637.2,1327.2,231.30],
        ["Shenzhen, China",522.7,794.9,1317.6,224.775],
        ["Leipzig, Germany",665.4,651.6,1317.0,216.45],
        ["Larnaca, Cyprus",662.4,652.3,1314.7,210.915],
        ["Prague, Czech Republic",548.2,764.2,1312.4,192.915],
        ["Dortmund, Germany",714.5,596.7,1311.3,240.57],
        ["Dundee, United Kingdom",627.0,678.9,1306.0,210.42],
        ["Trinidad, Trinidad And Tobago",655.3,646.4,1301.8,275.76],
        ["Aberdeen, United Kingdom",662.7,636.0,1298.7,220.59],
        ["Grenoble, France",743.2,542.1,1285.3,286.56],
        ["Nuremberg, Germany",644.3,633.2,1277.5,206.145],
        ["Padova, Italy",647.3,618.8,1266.1,206.73],
        ["Bari, Italy",619.6,645.5,1265.1,216.495],
        ["Derby, United Kingdom",686.9,570.0,1256.9,226.305],
        ["Genoa, Italy",711.2,543.0,1254.2,265.50],
        ["Bremen, Germany",663.7,590.3,1254.0,229.77],
        ["Oulu, Finland",716.3,533.5,1249.9,267.435],
        ["Cagliari, Italy",659.0,578.9,1238.0,225.765],
        ["Parma, Italy",713.6,520.6,1234.3,229.095],
        ["Trieste, Italy",690.1,539.0,1229.1,241.335],
        ["Montevideo, Uruguay",665.0,563.6,1228.6,218.52],
        ["Saint Petersburg, Russia",597.8,629.6,1227.4,203.58],
        ["Essen, Germany",666.6,557.1,1223.8,211.68],
        ["Bangkok, Thailand",527.0,696.7,1223.7,206.235],
        ["Treviso, Italy",659.8,546.4,1206.2,227.61],
        ["Aachen, Germany",625.0,567.9,1192.9,206.10],
        ["Ljubljana, Slovenia",569.8,619.7,1189.6,200.97],
        ["Verona, Italy",668.2,520.0,1188.2,241.38],
        ["Valencia, Spain",553.9,629.2,1183.2,196.20],
        ["Havana, Cuba",614.2,563.0,1177.1,205.875],
        ["Turin, Italy",643.4,532.9,1176.3,232.515],
        ["Nicosia, Cyprus",599.9,571.6,1171.5,201.825],
        ["Dresden, Germany",631.0,539.4,1170.3,200.97],
        ["Tallinn, Estonia",614.8,549.2,1164.0,186.30],
        ["Muscat, Oman",576.8,574.0,1150.8,209.25],
        ["Malaga, Spain",527.3,623.1,1150.4,171.585],
        ["Porto, Portugal",497.9,644.0,1141.8,161.685],
        ["Port of Spain, Trinidad And Tobago",643.6,496.4,1140.0,217.665],
        ["Ramallah, Palestine",660.7,468.2,1128.9,222.705],
        ["Catania, Italy",575.2,553.2,1128.4,178.92],
        ["Funchal, Portugal",482.9,645.2,1128.1,146.565],
        ["Dakar, Senegal",491.3,633.2,1124.6,167.355],
        ["Kingston upon Hull, United Kingdom",599.0,525.2,1124.3,204.39],
        ["Naples, Italy",611.2,510.5,1121.7,203.67],
        ["Las Palmas de Gran Canaria, Spain",513.8,602.6,1116.3,187.74],
        ["Kingston, Jamaica",603.6,509.9,1113.5,246.285],
        ["Vilnius, Lithuania",527.8,584.1,1111.9,169.29],
        ["Bratislava, Slovakia",533.1,569.1,1102.2,189.45],
        ["Athens, Greece",611.8,478.9,1090.7,194.67],
        ["Riyadh, Saudi Arabia",608.4,475.2,1083.6,200.565],
        ["Phnom Penh, Cambodia",534.5,545.2,1079.7,210.51],
        ["Santa Cruz de Tenerife, Spain",502.3,572.2,1074.4,172.62],
        ["Brno, Czech Republic",507.2,563.6,1070.8,168.48],
        ["Tehran, Iran",369.3,699.2,1068.5,105.66],
        ["Cape Town, South Africa",422.4,637.8,1060.2,142.335],
        ["Addis Ababa, Ethiopia",493.2,563.3,1056.5,158.985],
        ["San Jose, Costa Rica",502.5,552.5,1055.0,189.405],
        ["Ajman, United Arab Emirates",528.7,525.5,1054.2,163.98],
        ["Mexico City, Mexico",426.9,622.8,1049.7,164.43],
        ["Seville (Sevilla), Spain",532.4,514.8,1047.2,192.06],
        ["Yerevan, Armenia",451.6,590.0,1041.6,157.635],
        ["Manila, Philippines",413.5,611.5,1025.0,162.36],
        ["Chengdu, China",490.9,527.7,1018.6,238.545],
        ["Palermo, Italy",588.8,423.7,1012.5,196.47],
        ["Alicante, Spain",509.3,501.3,1010.6,171.585],
        ["Warsaw, Poland",443.4,563.0,1006.4,144.675],
        ["Zaragoza (Saragossa), Spain",503.1,497.3,1000.4,177.57],
        ["Guangzhou, China",437.9,561.8,999.6,184.815],
        ["Guatemala City, Guatemala",489.4,509.6,999.0,190.485],
        ["Hangzhou, China",477.9,517.3,995.2,225.855],
        ["Kazan, Russia",544.8,447.0,991.8,189.45],
        ["Jeddah (Jiddah), Saudi Arabia",604.0,374.0,978.0,197.055],
        ["Zagreb, Croatia",526.4,450.4,976.8,179.28],
        ["Kaohsiung, Taiwan",586.3,389.9,976.2,277.47],
        ["Santo Domingo, Dominican Republic",521.6,452.8,974.4,188.01],
        ["San Salvador, El Salvador",507.0,461.7,968.7,197.37],
        ["Dubrovnik, Croatia",568.8,396.1,964.9,166.68],
        ["Tbilisi, Georgia",412.0,552.5,964.6,140.13],
        ["Accra, Ghana",369.2,594.9,964.1,149.67],
        ["Riga, Latvia",558.2,404.4,962.6,170.01],
        ["Braga, Portugal",464.3,493.6,957.9,150.84],
        ["Tijuana, Mexico",437.2,514.8,952.0,145.125],
        ["Monterrey, Mexico",449.8,500.4,950.2,171.405],
        ["Ad Dammam, Saudi Arabia",550.3,399.8,950.1,194.40],
        ["Aveiro, Portugal",452.6,497.0,949.7,152.82],
        ["Kosice, Slovakia",499.8,448.8,948.6,177.12],
        ["Murcia, Spain",499.1,445.5,944.6,164.70],
        ["Abidjan, Ivory Coast",438.9,505.3,944.2,156.915],
        ["Ho Chi Minh City, Vietnam",425.2,518.5,943.7,173.025],
        ["Yekaterinburg, Russia",548.2,393.9,942.1,207.135],
        ["Suzhou, China",469.2,471.6,940.8,220.23],
        ["Novosibirsk, Russia",538.6,401.9,940.5,185.67],
        ["Thessaloniki, Greece",583.7,349.4,933.1,175.185],
        ["Granada, Spain",517.4,414.5,931.9,168.48],
        ["Tartu, Estonia",526.1,398.8,924.9,179.865],
        ["Nanjing, China",419.9,502.5,922.5,180.00],
        ["Kiev (Kyiv), Ukraine",398.6,520.6,919.2,138.33],
        ["Bali, Indonesia",436.6,480.4,917.1,190.17],
        ["Ostrava, Czech Republic",482.2,433.8,916.0,163.035],
        ["Nizhny Novgorod, Russia",522.1,380.1,902.2,176.04],
        ["Sao Paulo, Brazil",456.8,444.9,901.7,158.625],
        ["Heraklion, Greece",550.4,350.1,900.5,182.205],
        ["Wroclaw, Poland",425.5,465.4,890.9,137.07],
        ["Split, Croatia",479.0,406.5,885.5,168.30],
        ["Maribor, Slovenia",503.5,377.4,880.9,175.59],
        ["Johannesburg, South Africa",447.0,432.0,879.0,144.45],
        ["Amman, Jordan",557.3,314.5,871.8,183.33],
        ["Coimbra, Portugal",465.4,404.1,869.4,153.81],
        ["Suva, Fiji",388.1,480.8,868.9,158.85],
        ["Sofia, Bulgaria",481.9,382.9,864.7,167.625],
        ["Krakow (Cracow), Poland",421.5,439.6,861.2,134.055],
        ["Mumbai, India",309.2,551.6,860.8,129.105],
        ["Cancun, Mexico",430.0,429.5,859.5,165.78],
        ["Belgrade, Serbia",437.6,421.5,859.2,138.42],
        ["Jakarta, Indonesia",406.5,451.0,857.5,175.68],
        ["Gdansk, Poland",400.5,455.9,856.4,128.745],
        ["Bucharest, Romania",450.4,405.3,855.7,152.775],
        ["Phuket, Thailand",439.2,404.1,843.3,180.495],
        ["Santiago, Chile",441.5,400.7,842.2,161.415],
        ["Gdynia, Poland",409.8,429.8,839.6,133.29],
        ["Pretoria, South Africa",433.8,405.3,839.1,139.50],
        ["Budapest, Hungary",442.4,394.5,836.9,156.195],
        ["Rijeka, Croatia",485.0,351.0,836.0,174.735],
        ["Guadalajara, Mexico",398.7,433.5,832.2,161.19],
        ["Kaunas, Lithuania",469.1,361.1,830.2,153.81],
        ["Harare, Zimbabwe",481.4,343.3,824.7,159.165],
        ["Krasnodar, Russia",522.7,298.8,821.5,170.10],
        ["Cluj-Napoca, Romania",430.3,384.7,815.0,150.12],
        ["Rostov-na-donu, Russia",477.5,337.5,814.9,174.285],
        ["Georgetown, Guyana",522.5,289.9,812.4,223.695],
        ["Quezon City, Philippines",451.2,359.6,810.7,170.10],
        ["Isfahan (Esfahan), Iran",365.2,445.2,810.4,83.70],
        ["Poznan, Poland",397.6,411.7,809.3,131.985],
        ["Durban, South Africa",426.9,381.7,808.6,135.54],
        ["Caracas, Venezuela",489.2,319.4,808.6,166.14],
        ["Kuala Lumpur, Malaysia",429.6,378.3,807.9,182.34],
        ["Lima, Peru",378.8,426.5,805.2,145.53],
        ["Kigali, Rwanda",349.8,444.6,794.3,120.51],
        ["Rio de Janeiro, Brazil",442.7,343.9,786.6,144.225],
        ["Pattaya, Thailand",417.6,366.6,784.2,173.115],
        ["Szczecin, Poland",392.6,388.1,780.7,130.77],
        ["Cuenca, Ecuador",430.8,349.1,779.9,162.45],
        ["Merida, Mexico",414.1,364.5,778.5,174.915],
        ["Brasilia, Brazil",435.5,342.4,777.9,143.46],
        ["Cebu, Philippines",392.0,383.8,775.8,170.865],
        ["Erbil (Irbil), Iraq",393.9,381.4,775.2,128.385],
        ["Kampala, Uganda",377.2,396.4,773.6,135.225],
        ["Klaipeda, Lithuania",469.6,303.7,773.3,158.085],
        ["Constanta, Romania",419.1,348.2,767.4,140.355],
        ["Nairobi, Kenya",408.4,357.7,766.2,153.90],
        ["Tirana, Albania",432.8,331.7,764.4,138.105],
        ["Lodz, Poland",381.4,382.3,763.6,122.67],
        ["Quito, Ecuador",426.0,334.1,760.1,158.715],
        ["Hanoi, Vietnam",392.3,366.3,758.6,156.735],
        ["Katowice, Poland",413.4,344.8,758.2,136.215],
        ["Batumi, Ajara, Georgia",360.3,392.7,753.0,141.75],
        ["Gaborone, Botswana",437.1,311.7,748.8,151.695],
        ["Mashhad, Iran",316.5,429.2,745.7,87.39],
        ["Brasov, Romania",417.6,322.1,739.7,144.36],
        ["Queretaro, Mexico",391.6,347.3,738.9,161.235],
        ["Florianopolis, Brazil",408.1,327.4,735.4,135.81],
        ["Rabat, Morocco",361.7,371.5,733.3,128.115],
        ["Dar es Salaam, Tanzania",341.6,389.6,731.3,125.865],
        ["Guayaquil, Ecuador",407.4,320.0,727.4,138.465],
        ["Petaling Jaya, Malaysia",394.0,331.7,725.6,169.02],
        ["Istanbul, Turkey",351.2,373.7,724.9,119.07],
        ["Dnipro, Ukraine",361.5,360.8,722.3,121.185],
        ["Casablanca, Morocco",372.0,346.7,718.7,125.145],
        ["Chiang Mai, Thailand",407.0,306.2,713.1,190.44],
        ["Lublin, Poland",363.3,341.2,704.5,116.91],
        ["Lviv, Ukraine",339.8,363.6,703.4,121.905],
        ["Baghdad, Iraq",359.8,342.4,702.2,120.42],
        ["Osijek, Croatia",441.2,257.4,698.7,146.295],
        ["Almaty, Kazakhstan",324.5,369.4,693.9,114.12],
        ["Tashkent, Uzbekistan",325.1,363.3,688.3,121.185],
        ["Timisoara, Romania",387.0,299.1,686.1,132.885],
        ["Marrakech, Morocco",380.7,305.3,685.9,120.555],
        ["Iasi, Romania",390.8,292.1,682.9,132.75],
        ["Asuncion, Paraguay",344.2,331.7,675.9,115.92],
        ["La Paz, Bolivia",411.6,263.5,675.1,150.48],
        ["Podgorica, Montenegro",389.4,283.5,672.8,132.165],
        ["Penang, Malaysia",404.4,268.1,672.5,179.685],
        ["Ulaanbaatar, Mongolia",383.6,285.9,669.5,151.335],
        ["Kharkiv, Ukraine",340.2,328.6,668.8,117.27],
        ["Varna, Bulgaria",401.5,262.3,663.9,142.245],
        ["Porto Alegre, Brazil",395.8,266.0,661.8,133.29],
        ["Buenos Aires, Argentina",375.7,282.6,658.3,122.94],
        ["Plovdiv, Bulgaria",409.7,247.6,657.3,151.29],
        ["Debrecen, Hungary",378.0,276.4,654.4,136.17],
        ["Novi Sad, Serbia",372.6,278.9,651.4,125.01],
        ["Antalya, Turkey",319.2,332.0,651.2,99.72],
        ["Curitiba, Brazil",384.7,266.0,650.7,129.78],
        ["Belo Horizonte, Brazil",400.1,247.6,647.7,129.195],
        ["Odessa (Odesa), Ukraine",362.9,282.3,645.1,128.07],
        ["Sibiu, Romania",379.3,254.3,633.7,129.51],
        ["Bogota, Colombia",300.6,329.5,630.1,113.265],
        ["Minsk, Belarus",311.5,317.8,629.4,113.445],
        ["Sarajevo, Bosnia And Herzegovina",398.6,228.9,627.5,136.98],
        ["Szeged, Hungary",379.9,243.9,623.8,144.045],
        ["Damascus, Syria",350.3,269.1,619.4,139.05],
        ["Chisinau, Moldova",349.4,267.2,616.7,114.705],
        ["Surabaya, Indonesia",362.0,254.6,616.6,154.485],
        ["Tangier, Morocco",351.1,264.8,615.9,132.93],
        ["Astana (Nur-Sultan), Kazakhstan",311.9,303.4,615.3,115.965],
        ["Skopje, North Macedonia",371.5,215.4,586.9,124.425],
        ["Baku, Azerbaijan",344.4,241.1,585.5,121.05],
        ["Recife, Brazil",386.1,193.6,579.7,132.255],
        ["Medellin, Colombia",312.4,267.2,579.7,115.20],
        ["Bursa, Turkey",419.3,158.6,577.9,115.605],
        ["Craiova, Romania",354.8,222.4,577.3,120.555],
        ["Banja Luka, Bosnia And Herzegovina",368.0,203.1,571.1,126.63],
        ["Gurgaon, India",329.2,239.6,568.9,137.43],
        ["Bandung, Indonesia",368.5,195.7,564.2,152.91],
        ["Bangalore, India",304.9,257.1,562.0,130.68],
        ["Delhi, India",306.3,255.3,561.6,117.54],
        ["Pristina, Kosovo (Disputed Territory)",296.3,255.3,551.6,105.84],
        ["Bishkek, Kyrgyzstan",309.2,237.2,546.3,115.29],
        ["Tunis, Tunisia",334.5,208.9,543.5,121.185],
        ["Nis, Serbia",348.3,190.5,538.8,108.90],
        ["Cairo, Egypt",321.8,201.3,523.1,115.875],
        ["Visakhapatnam, India",299.6,213.8,513.4,130.725],
        ["Izmir, Turkey",331.3,180.7,512.0,112.23],
        ["Agadir, Morocco",341.6,165.7,507.3,119.205],
        ["Ahmedabad, India",284.7,222.4,507.1,113.94],
        ["Dhaka, Bangladesh",363.2,141.7,504.9,133.56],
        ["Barranquilla, Colombia",292.5,211.7,504.2,110.025],
        ["Noida, India",334.0,168.7,502.7,130.545],
        ["Algiers, Algeria",320.0,179.5,499.5,131.355],
        ["Colombo, Sri Lanka",265.1,232.9,497.9,128.43],
        ["Ankara, Turkey",321.1,169.7,490.8,110.925],
        ["Pune, India",283.4,205.2,488.7,121.59],
        ["Alexandria, Egypt",300.4,185.0,485.4,110.25],
        ["Kathmandu, Nepal",323.8,153.7,477.5,119.61],
        ["Hyderabad, India",284.5,190.8,475.3,125.73],
        ["Cali, Colombia",288.0,182.5,470.5,107.46],
        ["Chennai, India",259.1,183.8,442.9,116.19],
        ["Kochi, India",260.3,181.3,441.6,112.86],
        ["Indore, India",275.2,164.8,440.0,120.285],
        ["Oran, Algeria",288.6,148.5,437.1,122.22],
        ["Giza, Egypt",312.0,119.0,431.0,110.745],
        ["Kolkata, India",267.8,162.3,430.1,115.065],
        ["Sousse, Tunisia",292.4,135.3,427.7,110.115],
        ["Bhubaneswar, India",269.6,154.0,423.6,114.165],
        ["Eskisehir, Turkey",301.0,122.4,423.5,100.305],
        ["Bucaramanga, Colombia",249.6,165.1,414.7,82.485],
        ["Guwahati, India",282.1,126.4,408.5,117.225],
        ["Lucknow (Lakhnau), India",275.2,128.5,403.8,109.215],
        ["Jaipur, India",263.9,133.5,397.4,111.645],
        ["Coimbatore, India",256.0,139.0,395.0,116.595],
        ["Islamabad, Pakistan",210.5,158.0,368.5,72.72],
        ["Karachi, Pakistan",214.1,124.3,338.3,76.05],
        ["Lahore, Pakistan",217.1,109.2,326.3,72.72],
        ["Rawalpindi, Pakistan",203.0,96.3,299.4,72.765],
        ["Multan, Pakistan",190.8,85.0,275.8,72.72],
        ["Faisalabad, Pakistan",190.2,84.7,274.8,61.155],
        ["Peshawar, Pakistan",177.0,55.8,232.8,65.115]
    ];

    interface CityObj {
        city_name: string | number;
        cost_of_living: string | number;
        rent: string | number;
        total_cost_of_living: string | number;
        groceries: string | number;
    };

    function getCityObj(cityArray: Array<Array<string | number>>): Array<CityObj>{
        const cityObjArray: Array<CityObj> = cityArray.map((city) => {
            return {
                city_name: city[0],
                cost_of_living: city[1],
                rent: city[2],
                total_cost_of_living: city[3],
                groceries: city[4]
            };
        });
        return cityObjArray;
    };
    // Inserts seed entries
    await knex("cities").insert(
        getCityObj(cityInfosArray)
    );
};
