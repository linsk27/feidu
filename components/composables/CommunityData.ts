import * as echarts from "echarts";

export const useOvertimeChart = () => {
  const chartOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderColor: "rgba(83, 145, 253, 0.1)",
      textStyle: {
        color: "#fff",
      },
      formatter: "{b}: {c}",
    },
    grid: {
      top: "5%",
      left: "5%",
      right: "5%",
      bottom: "8%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["6-27", "6-28", "6-29", "6-30", "7-1", "7-2", "7-3"],
      axisLine: {
        lineStyle: {
          color: "#8b9bb4",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#8b9bb4",
        fontSize: 12,
        margin: 15,
      },
    },
    yAxis: [
      {
        name: "近一月报警次数",
        nameTextStyle: {
          color: "#4c81dd",
          fontSize: 12,
          padding: [0, 0, 0, 100],
        },
        type: "value",
        max: 400,
        interval: 100,
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "rgba(139, 155, 180, 0.2)",
          },
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
          margin: 15,
        },
      },
    ],
    series: [
      {
        data: [10, 50, 200, 330, 390, 330, 230, 210],
        type: "bar",
        barWidth: "60%",
        itemStyle: {
          color: (params: any) => {
            const colorList = [
              new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#5391fd" },
                { offset: 1, color: "#2979ff" },
              ]),
              new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#00E5FF" },
                { offset: 1, color: "#00B8D4" },
              ]),
            ];
            return colorList[params.dataIndex % 2];
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return {
    chartOption,
  };
};

export const useOwnerChart = () => {
  const chartOption = {
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderColor: "rgba(83, 145, 253, 0.1)",
      textStyle: {
        color: "#fff",
      },
      formatter: "{b}: {c}人 ({d}%)",
    },
    legend: {
      orient: "vertical",
      right: "15%",
      top: "0",
      itemWidth: 30,
      itemHeight: 10,
      textStyle: {
        color: "#fff",
        fontSize: 12,
      },
},
    series: [
      {
        type: "pie",
        radius: ["40%", "65%"],
        center: ["30%", "35%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderWidth: 4,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        data: [
          {
            value: 35,
            name: "长期空置",
            itemStyle: {
              color: "#4B91FF",
            },
          },
          {
            value: 30,
            name: "长期未外出",
            itemStyle: {
              color: "#36CBCB",
            },
          },
          {
            value: 20,
            name: "小孩独自出门超时",
            itemStyle: {
              color: "#986EFF",
            },
          },
          {
            value: 15,
            name: "老人独自出门超时",
            itemStyle: {
              color: "#4DCB73",
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
      bottom: "0",
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
        name: "近一月报警次数",
        type: "value",
        nameTextStyle: {
          color: "#4c81dd",
          fontSize: 12,
          padding: [0, 0, 0, 100],
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
        name: "单位：次数/天",
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
