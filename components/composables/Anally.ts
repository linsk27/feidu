import * as echarts from "echarts";
export const useAnallyCircle = () => {
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
  const payOption = {
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderColor: "rgba(83, 145, 253, 0.1)",
      textStyle: {
        color: "#fff",
      },
      formatter: "{b}: {d}%",
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
        radius: ["45%", "60%"],
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
            name: "天棚主机",
            itemStyle: {
              color: "#3951f2",
            },
          },
          {
            value: 15,
            name: "天棚水泵",
            itemStyle: {
              color: "#1bcb9c",
            },
          },
          {
            value: 20,
            name: "新风主机",
            itemStyle: {
              color: "#3bdad1",
            },
          },
          {
            value: 10,
            name: "新风水泵",
            itemStyle: {
              color: "#6060ff",
            },
          },
          {
            value: 5,
            name: "地源水泵",
            itemStyle: {
              color: "#08b5f2",
            },
          },
          {
            value: 15,
            name: "冷却水泵",
            itemStyle: {
              color: "#c304ff",
            },
          },
        ],
      },
    ],
  };

  return {
    chartOption,
    payOption,
  };
};
// 进度条配置
export const useBarProgress = () => {
  const chartOption = {
    grid: {
      left: "5%",
      top: "25%",
      bottom: "15%",
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
      data: ["总能耗:53.685KW", "总负荷:32KW"],
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
          textStyle: {
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
        max: 180, // 增大 X 轴的最大值，让它显示更多刻度
        interval: 30,
        splitLine: {
          show: false, // 隐藏网格线
        },
      },
      yAxis: {
        type: "category",
        data: ["当前", "最低", "最高", "初始"],
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
            color: index % 2 === 0 ? "#4c81dd" : "#38d9d0", // 偶数蓝色，奇数红色
          },
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
    ],
  };
  return {
    chartOption,
    xBarOption,
    yBarOptions,
  };
};
