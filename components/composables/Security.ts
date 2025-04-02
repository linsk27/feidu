// 环形进度配置
export const useCircleProgress = () => {
  const chartOption = {
    series: [
      {
        startAngle: 55,
        type: "pie",
        radius: ["65%", "90%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        data: [
          {
            value: 80,
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
            value: 20,
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
    backgroundColor: "transparent",
    grid: {
      left: "5%",
      right: "30%",
      top: "35%",
      bottom: "5%",
      containLabel: false,
    },
    xAxis: {
      show: false,
    },
    yAxis: {
      type: "category",
      data: ["", ""],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    series: [
      {
        type: "bar",
        data: [
          {
            value: 53.685,
            itemStyle: {
              color: "#12928a",
            },
          },
          {
            value: 32,
            itemStyle: {
              color: "#12928a",
            },
          },
        ],
        barWidth: 15,
        z: 10,
        label: {
          show: true,
          position: ["-10%", "30%"], // 让 label 绝对对齐到左侧
          align: "left",
          offset: [15, -20],
          color: "#fff",
          fontSize: 13,
          formatter: function (params: any) {
            const texts = ["可控摄像头区域：32%", "人脸识别区域：53.685%"];
            return texts[params.dataIndex] || "";
          },
        },
      },
      {
        type: "bar",
        data: [100, 100],
        barWidth: 15,
        barGap: "-100%",
        itemStyle: {
          color: "rgba(0, 0, 0, 0.3)",
        },
        label: {
          show: true,
          position: "right",
          offset: [0, 0],
          color: "#96c9fc",
          fontSize: 12,
          formatter: function (params: any) {
            const values = [32, 53.685];
            return values[params.dataIndex] + "%";
          },
        },
      },
    ],
  };

  return {
    chartOption,
  };
};
