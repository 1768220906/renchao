var myChart = echarts.init(document.getElementById('an'),'vintage');
var option;

option = {
    title: {  //标题样式
        text: '氨氮平均值',
        x: 100,
        y: 10,
        textStyle: {
            fontSize: 20
        },
   },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: '站点：氨氮平均值',
      type: 'pie',
      radius: ['30%', '85%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        {
          name: '5',
          value: '1.418605'
        },
        {
          name: '8',
          value: '3.666667'
        },
        {
          name: '12',
          value: '1.197917'
        },
        {
          name: '16',
          value: '2.43956'
        },
        {
          name: '18',
          value: '1.311111'
        },
        {
          name: '19',
          value: '3.37931'
        },
        {
          name: '20',
          value: '3.947368'
        },
        {
          name: '32',
          value: '4.468085'
        },
        {
          name: '53',
          value: '1.742268'
        },
        {
          name: '54',
          value: '3.611111'
        },
        {
          name: '55',
          value: '4.033708'
        },
        {
          name: '56',
          value: '1.678261'
        },
        {
          name: '57',
          value: '5.642857'
        },
        {
          name: '58',
          value: '3.908088'
        },
        {
          name: '59',
          value: '3.645161'
        },
        {
          name: '60',
          value: '4.717391'
        },
        {
          name: '61',
          value: '0.814286'
        },
        {
          name: '62',
          value: '7.174603'
        },
        {
          name: '63',
          value: '4.598131'
        },
        {
          name: '64',
          value: '1'
        },
        {
          name: '65',
          value: '3.1'
        },
        {
          name: '66',
          value: '2.353535'
        },
        {
          name: '67',
          value: '3'
        },
        {
          name: '68',
          value: '4.727273'
        },
        {
          name: '70',
          value: '5.211111'
        },
        {
          name: '72',
          value: '1'
        },
        {
          name: '73',
          value: '0.946809'
        },
        {
          name: '74',
          value: '1.222222'
        },
        {
          name: '75',
          value: '0.84'
        },
        {
          name: '76',
          value: '2.148515'
        },
        {
          name: '77',
          value: '3.269939'
        },
        {
          name: '78',
          value: '4.191489'
        },
        {
          name: '79',
          value: '0.391304'
        },
        {
          name: '80',
          value: '0.852273'
        },
        {
          name: '81',
          value: '1.1'
        },
        {
          name: '83',
          value: '2'
        },
        {
          name: '84',
          value: '32.5618'
        },
        {
          name: '85',
          value: '1.483146'
        },
        {
          name: '97',
          value: '6.057471'
        },
        {
          name: '103',
          value: '3.541176'
        },
        {
          name: '104',
          value: '1.018182'
        },
        {
          name: '105',
          value: '5.287356'
        },
        {
          name: '106',
          value: '6.123596'
        },
        {
          name: '107',
          value: '1.78022'
        },
        {
          name: '108',
          value: '1.925926'
        },
        {
          name: '109',
          value: '2.052632'
        },
        {
          name: '110',
          value: '2.526882'
        },
        {
          name: '111',
          value: '7.330097'
        },
        {
          name: '112',
          value: '2.619469'
        },
        {
          name: '113',
          value: '0.75'
        },
        {
          name: '114',
          value: '3.777778'
        },
        {
          name: '115',
          value: '6.575'
        },
        {
          name: '116',
          value: '1.126437'
        },
        {
          name: '117',
          value: '1.5125'
        },
        {
          name: '118',
          value: '2.009091'
        },
        {
          name: '119',
          value: '1.980392'
        },
        {
          name: '120',
          value: '-1'
        },
        {
          name: '121',
          value: '2'
        },
        {
          name: '122',
          value: '5.493976'
        },
        {
          name: '123',
          value: '2.393939'
        },
        {
          name: '124',
          value: '6.589474'
        },
        {
          name: '125',
          value: '1.079646'
        },
        {
          name: '126',
          value: '1.1'
        },
        {
          name: '127',
          value: '0.228916'
        },
        {
          name: '128',
          value: '1.977011'
        },
        {
          name: '129',
          value: '3.122222'
        },
        {
          name: '131',
          value: '0.365854'
        },
        {
          name: '132',
          value: '1.166667'
        },
        {
          name: '133',
          value: '2.840426'
        },
        {
          name: '134',
          value: '5.294118'
        },
        {
          name: '135',
          value: '1.467742'
        },
        {
          name: '136',
          value: '4.926829'
        },
        {
          name: '137',
          value: '1.177215'
        },
        // {
        //     "name": "138",
        //     "value": "9999"
        // },
        {
          name: '140',
          value: '0.967391'
        },
        {
          name: '141',
          value: '5.6375'
        },
        {
          name: '142',
          value: '1.458333'
        },
        {
          name: '143',
          value: '5.447917'
        },
        {
          name: '146',
          value: '2.482759'
        },
        {
          name: '147',
          value: '2.666667'
        },
        {
          name: '149',
          value: '2.9'
        },
        {
          name: '150',
          value: '6.533333'
        },
        {
          name: '151',
          value: '-1'
        },
        {
          name: '152',
          value: '3.25'
        },
        {
          name: '153',
          value: '2.016667'
        },
        {
          name: '154',
          value: '2.942529'
        },
        {
          name: '155',
          value: '6.052083'
        },
        {
          name: '156',
          value: '4.045455'
        },
        {
          name: '157',
          value: '2.551724'
        },
        {
          name: '158',
          value: '0.863636'
        },
        {
          name: '159',
          value: '13.31902'
        },
        {
          name: '161',
          value: '3.310811'
        },
        {
          name: '162',
          value: '0.036145'
        },
        {
          name: '164',
          value: '3.908163'
        },
        {
          name: '166',
          value: '5.10989'
        },
        {
          name: '167',
          value: '1.21875'
        },
        {
          name: '168',
          value: '3.111111'
        },
        {
          name: '173',
          value: '4.788889'
        },
        {
          name: '175',
          value: '-0.13253'
        },
        {
          name: '176',
          value: '0.788889'
        },
        {
          name: '177',
          value: '0.765766'
        },
        {
          name: '178',
          value: '1.621622'
        },
        {
          name: '179',
          value: '2.106383'
        },
        {
          name: '180',
          value: '2.009524'
        },
        {
          name: '181',
          value: '1.97561'
        },
        {
          name: '182',
          value: '4.037736'
        },
        {
          name: '183',
          value: '3.070707'
        },
        {
          name: '184',
          value: '2.033333'
        },
        {
          name: '185',
          value: '2.963636'
        },
        {
          name: '186',
          value: '0.907216'
        },
        {
          name: '187',
          value: '0.305882'
        },
        {
          name: '188',
          value: '2.428571'
        },
        {
          name: '189',
          value: '2.857143'
        },
        {
          name: '190',
          value: '1.659091'
        },
        {
          name: '191',
          value: '2.136364'
        },
        {
          name: '192',
          value: '6.466667'
        },
        {
          name: '193',
          value: '1.795918'
        },
        {
          name: '194',
          value: '1.306818'
        },
        {
          name: '195',
          value: '2.863636'
        },
        {
          name: '196',
          value: '8.150442'
        },
        {
          name: '197',
          value: '1.784946'
        },
        {
          name: '198',
          value: '0.05618'
        },
        {
          name: '199',
          value: '2.945055'
        },
        {
          name: '201',
          value: '12.49107'
        },
        {
          name: '202',
          value: '1.801802'
        },
        {
          name: '205',
          value: '7'
        },
        {
          name: '206',
          value: '1.373626'
        },
        {
          name: '207',
          value: '4.662162'
        },
        {
          name: '209',
          value: '8.433333'
        },
        {
          name: '210',
          value: '9.62'
        },
        {
          name: '211',
          value: '2'
        },
        {
          name: '212',
          value: '9.959459'
        },
        {
          name: '213',
          value: '9.959459'
        },
        {
          name: '214',
          value: '3.833333'
        },
        {
          name: '215',
          value: '0.087912'
        },
        {
          name: '216',
          value: '1.595745'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);
