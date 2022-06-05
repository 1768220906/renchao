var chartDom = document.getElementById('water');
var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
const data = {
  name: '流域',
  children: [
    {
      name: '长江',
      children: [
        {
          name: '广元市环境监测站'
        },
        {
          name: '重庆市环境监测中心'
        }
        ,
        {
          name: '岳阳市环境监测中心站'
        },
        {
          name: '长沙市环境监测中心站'
        },
        {
          name: '扬州市环境监测中心站'
        },
        {
          name: '九江市环境监测站'
        },
        {
          name: '宜宾市环境监测站'
        },
        {
          name: '泸州市环境保护监测站'
        },
        {
          name: '乐山市环境监测站'
        },
        {
          name: '南昌市环境监测站'
        },
        {
          name: '丹江口市环境监测站'
        },
      ]
    },
    {
      name: '巢湖',
      children: [
        {
          name: '南阳市环境保护监测站'
        },
        {
          name: '巢湖市环境保护监测站'
        },
      ]
    },
    {
      name: '滇池',
      children: [{
        name: '合肥市环境监测中心站'
      },
      {
        name: '昆明市环境监测中心站(西苑隧道)'
      },
      {
        name: '昆明市环境监测中心站(观音山)'
      },]
    },
    {
      name: '海河',
      children: [
        {
          name: '北京市环境保护监测中心(古北口)'
        },
        {
          name: '天津市环境监测中心果河桥'
        },
        {
          name: '天津市环境监测中心(三岔口)'
        },
        {
          name: '张家口市环境监测站'
        },
        {
          name: '石家庄市环境监测站'
        },
        {
          name: '北京市环境保护监测中心门(头沟沿河城)'
        },
        {
          name: '聊城市环境保护监测站'
        },
      ]
    },
    {
      name: '淮河',
      children: [
        {
          name: '盱眙县环境监测站'
        },
        {
          name: '邳州市环境监测站'
        },
        {
          name: '阜阳市环境保护监测站(阜南王家坝)'
        },
        {
          name: '周口市环境监测站(鹿邑付桥闸)'
        },
        {
          name: '安徽省淮南市环境监测站'
        },
        {
          name: '阜阳市环境保护监测站(界首七渡口)'
        },
        {
          name: '淮北市环境监测中心站'
        },
        {
          name: '安徽省蚌埠市环境监测站'
        },
        {
          name: '郯城县环境监测站(临沂清泉寺)'
        },
        {
          name: '驻马店市环境监测站'
        },
        {
          name: '周口市环境监测站(沈丘闸)'
        },
        {
          name: '枣庄市环境监测站'
        },
        {
          name: '郯城县环境监测站(临沂重坊桥)'
        },
        {
          name: '滁州市环境监测站'
        },
        {
          name: '郯城县环境监测站(临沂涝沟桥)'
        },
        {
          name: '安徽省宿州环境监测站(泗县公路桥)'
        },
        {
          name: '安徽省泗洪县环境监测站'
        },
        {
          name: '江苏省徐州市环境监测中心站(小红圈)'
        },
        {
          name: '河南省信阳市环境监测站'
        },
        {
          name: '亳州市环境监测站'
        },
        {
          name: '江苏连云港市环境监测中心站'
        },
        {
          name: '永城市环境监测站'
        },
        {
          name: '安徽省宿州环境监测站(杨庄)'
        },
        {
          name: '阜阳市环境保护测站'
        },
        {
          name: '信阳市环境监测站'
        },
        {
          name: '江苏省徐州市环境监测中心站(李集桥)'
        },
        {
          name: '阜阳市环境保护监测站'
        },
      ]
    },
    {
      name: '黄河',
      children: [{
        name:
          '济源市环境监测站'
      },
      {
        name:
          '兰州市环境监测站'
      },
      {
        name:
          '包头市环境监测站'
      },
      {
        name:
          '运城市汾河河津大桥水质自动监测站'
      },
      {
        name:
          '济南市环境保护监测站'
      },
      {
        name:
          '忻州市环境监测站'
      },
      {
        name:
          '中卫市环境监测站'
      },
      {
        name:
          '乌海市环境监测中心站'
      },
      {
        name:
          '渭南市环境保护监测站'
      },]
    },
    {
      name: '辽河',
      children: [
        {
          name:
            '铁岭市环境监测站'
        },
        {
          name:
            '盘锦市环境保护监测站'
        },
        {
          name:
            '营口市环境监测站'
        },
        {
          name:
            '抚顺市环境保护监测站'
        },
        {
          name:
            '辽阳市环境监测站'
        },
        {
          name:
            '丹东市环境保护监测站'
        },
      ]
    },
    {
      name: '闽江',
      children: [
        {
          name:
            '福州市环境保护监测站'
        },
      ]
    },
    {
      name: '钱塘江',
      children: [
        {
          name:
            '杭州市环境监测中心站'
        },
      ]
    },
    {
      name: '松花江',
      children: [
        {
          name:
            '黑龙江肇源环境监测站'
        },
        {
          name:
            '长春市环境监测中心站'
        },
        {
          name:
            '白城市环境监测站'
        },
        {
          name:
            '黑龙江省三江环境监测站(同江)'
        },
        {
          name:
            '黑河市环境监测站'
        },
        {
          name:
            '延边州环境保护监测站'
        },
        {
          name:
            '呼伦贝尔市环境监测中心站'
        },
        {
          name:
            '黑龙江省三江环境监测站(抚远乌苏镇)'
        },
      ]
    },
    {
      name: '太湖',
      children: [
        {
          name:
            '湖州市环境保护监测中心站'
        },
        {
          name:
            '江苏省无锡市环境监测站'
        },
        {
          name:
            '嘉兴市环境监测站'
        },
        {
          name:
            '苏州市吴中区环境监测站'
        },
        {
          name:
            '宜兴市环境监测站'
        },
        {
          name:
            '上海市环境监测中心'
        },
        {
          name:
            '.嘉兴市环境监测站'
        },
      ]
    },
    {
      name: '西南诸河',
      children: [
        {
          name:
            '西双版纳州环境监测站'
        },
        {
          name:
            '红河州环境监测站'
        },
      ]
    },
    {
      name: '珠江',
      children: [
        {
          name:
            '广州市环境监测中心站'
        },
        {
          name:
            '清远市环境监测站'
        },
        {
          name:
            '梧州市环境保护监测站'
        },
        {
          name:
            '南宁市环境监测站'
        },
        {
          name:
            '贵港市环境监测站'
        },
        {
          name:
            '凭祥市环境监测站'
        },
        {
          name:
            '桂林市环境监测中心站'
        },
        {
          name:
            '中山市环境监测站'
        },
      ]
    },
  ]
};
myChart.hideLoading();
myChart.setOption(
  (option = {
    tooltip: { //提示框组件
      trigger: 'item', //触发类型
      triggerOn: 'mousemove' //提示框触发的条件，默认mousemove|click（鼠标点击和移动时触发）。可选mousemove：鼠标移动时，click：鼠标点击时，none：        
  },
  title: {  //标题样式
    text: '监测站流域分布',
    x: "left",
    textStyle: {
        fontSize: 20,
    },
},
    series: [
      {
        type: 'tree',
        name: 'tree1',
        data: [data],
        top: '0%',
        left: '9%',
        bottom: '0%',
        right: '45%',
        symbolSize: 15,
        itemStyle: {
          color: '#d87c7c',
          borderColor: '#d87c7c',
        },
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
        },
        label: {         //每个节点所对应的标签的样式
            normal: {
                position: 'left',       //标签的位置
                verticalAlign: 'middle',//文字垂直对齐方式，默认自动。可选：top，middle，bottom
                align: 'right',         //文字水平对齐方式，默认自动。可选：top，center，bottom
                fontSize: 12             //标签文字大小
            }
          },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        },
        emphasis: {
          focus: 'descendant',
        },//没生效？？？？？
        expandAndCollapse: true,
        animationDuration: 650,
        animationDurationUpdate: 750,
        initialTreeDepth : 1
      }
    ]
  })
);

option && myChart.setOption(option);