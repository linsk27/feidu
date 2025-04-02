import * as echarts from "echarts";
export const useEnergyProgress = () => {
  const xBarOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      top: 0,
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      axisTick: { show: true, length: 5 },
      min: 0, // 最小值
      max: 350, // 增大 X 轴的最大值，让它显示更多刻度
      interval: 50,
      splitLine: {
        show: false, // 隐藏网格线
      },
    },
    yAxis: {
      type: "category",
      data: ["1", "2", "3", "4", "5", "6", "7"],
    },
    series: [
      {
        type: "bar",
        data: [130, 150, 50, 150, 200, 240, 350],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0.5, 0, 0, 0, [
            { offset: 1, color: "#1baee1" },
            { offset: 0, color: "#9b58db" },
          ]),
        },
      },
    ],
  };
  const lineOptions = {
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
  const yBarOptions = {
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
            // 通过单双数判断柱子颜色
          data: [10, 50, 200, 330, 390, 330, 230, 210].map((value, index) => ({
            value,
            itemStyle: {
              color: index % 2 === 0 ? '#4c81dd' : '#38d9d0' // 偶数蓝色，奇数红色
            }
          })),
          type: "bar",
          barWidth: "60%",
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],};
  return {
    xBarOption,
    lineOptions,
    yBarOptions,
  };
};
