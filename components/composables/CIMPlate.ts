import * as echarts from "echarts";

export const useCIMCircle = () => {
  const chartOption = {
    series: [
      {
        startAngle: 30,
        name: "Access From",
        type: "pie",
        radius: ["65%", "95%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        data: [
          {
            value: 65,
            name: "覆盖区域",
            itemStyle: {
              color: {
                type: "linear",
                x: 0, // 渐变方向水平不变化（垂直方向）
                y: 1, // 起点为底部 (y=1)
                x2: 0, // 终点水平位置相同
                y2: 0, // 终点为顶部 (y=0)
                colorStops: [
                  {
                    offset: 0,
                    color: "#2ae8d2", // 底部颜色（深蓝）
                  },
                  {
                    offset: 1,
                    color: "#2b5577", // 顶部颜色（浅蓝）
                  },
                ],
              },
            },
          },
          {
            value: 35,
            name: "未覆盖",
            itemStyle: {
              color: "rgba(0, 0, 0, 0.3)",
            },
          },
        ],
      },
    ],
  };
  return {
    chartOption,
  };
};
// 进度条配置
export const useBarProgress = () => {
  const chartOption = {
    grid: {
      left: "5%",
      top: "10%",
      bottom: "0%",
      right: "0",
      containLabel: false,
    },
    xAxis: {
      type: "value",
      max: 100,
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    yAxis: {
      type: "category",
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        interval: 0,
        margin: 0,
        verticalAlign: "right",
        align: "left",
        padding: [-30, 0, 0, 0],
        textStyle: {
          color: "#ffffff",
          fontSize: 16,
        },
      },
      data: ["室内温度： 53.685%", "室内空气：32%"],
    },
    series: [
      {
        //真实数值的条形图主体
        name: "真实值",
        type: "bar",
        barWidth: 20,
        label: {
          show: true,
          distance: 0,
          textStyle:{
            color: "#ffffff",
            fontSize: 14,
            fontWeight: "bold",
          },
          formatter: function (params: any) {
            const values = [53.685, 32];
            return values[params.dataIndex] + "%";
          },
        },
        data: [
          {
            value: 53.685,
            itemStyle: {
                color: "#29dec9",
            },
          },
          {
            value: 32,
            itemStyle: {
              color: "#29dec9",
            },
          },
        ],
        z: 1,
      },
      {
        type: "bar",
        data: [100, 100],
        barWidth: 15,
        barGap: "-100%",
        itemStyle: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    ],
  };

  return {
    chartOption,
  };
};

export const useAlarmChart = () => {
  const chartOption = {
    tooltip: {
      trigger: "axis",
      // 悬浮背景阴影
      // axisPointer: {
      //     type: 'shadow'
      // },
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderColor: "rgba(83, 145, 253, 0.1)",
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      top: "25%",
      left: "5%",
      right: "10%",
      bottom: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      // 强制数据点从坐标轴起点开始绘制（无间隙），常用于折线图或面积图，避免图表左右出现空白区域。
      boundaryGap: false,
      data: [
        "5-27",
        "6-2",
        "6-7",
        "6-11",
        "6-15",
        "6-19",
        "6-23",
        "6-25",
        "6-27",
      ],
      axisLine: {
        lineStyle: {
          color: "#8b9bb4",
        },
      },
      // 隐藏刻度线，使 X 轴更简洁（适用于标签密集或不需要强调刻度的场景）。
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#8b9bb4",
        fontSize: 12,
        margin: 5,
      },
    },
    yAxis: [
      {
        name: "位数/时",
        type: "value",
        nameTextStyle: {
          color: "#2dcfff",
          fontSize: 12,
          padding: [0, 0, 0, 10],
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "rgba(139, 155, 180, 0.5)",
          },
        },
      },
      {
        type: "value",
        name: "单位：千/kw.h",
        nameTextStyle: {
          color: "#fff",
          fontSize: 12,
          padding: [0, 30, 0, 0],
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#8b9bb4",
          fontSize: 12,
          margin: 100,
        },
      },
    ],
    series: [
      {
        data: [20, 30, 40, 32, 64, 40, 30, 23, 10],
        type: "line",
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(147, 98, 255,0.5)" },
            { offset: 1, color: "rgba(19, 70, 94)" },
          ]),
        },
        lineStyle: {
          width: 2,
          color: "#78508b",
        },
      },
    ],
  };

  return {
    chartOption,
  };
};

export const useStackedChart = () => {
    const chartOption = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          right: "25%",
          top: "5%",
          textStyle: {
            color: "#fff",
          },
          data: ["出水温度", "进水温度"],
        },
        grid: {
          left: "5%",
          right: "15%",
          bottom: "10%",
          top: "20%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          min: -400,
          max: 300,
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "rgba(255,255,255,0.3)",
            },
          },
          axisLabel: {
            color: "rgba(255,255,255,0.5)",
          },
        },
        yAxis: {
          type: "category",
          data: ["蒸发器", "冷凝器"],
          axisLabel: {
            color: "rgba(255,255,255,0.5)",
          },
        },
        series: [
          {
            name: "出水温度",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "inside",
              formatter: "{c}",
            },
            itemStyle: {
              color: "rgba(166, 34, 208,0.8)",
            },
            data: [-120,-302],
          },
          {
            name: "进水温度",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "inside",
              formatter: "{c}",
            },
            itemStyle: {
              color: "rgba(48, 186, 255,0.8)",
            },
            data: [ 120,300],
          },
        ],
    };
  
    return {
      chartOption,
    };
  };