<template>
    <div class="content">
        <!-- 左边 -->
        <div class="flex-1 flex-col">
            <div class="overview-box">
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">舒适度数据统计</span>
                </div>
                <div class="coverage-content">
                    <!-- 左侧环形进度 -->
                    <div class="circle-wrap">
                        <div ref="circleChartRef" class="circle-chart"></div>
                        <div class="circle-text">
                            <span class="label">能效比</span>
                            <span class="value">65%</span>
                        </div>
                    </div>
                    <!-- 右侧进度条 -->
                    <div ref="barChartRef" class="bar-chart"></div>
                </div>

            </div>
            <div class="overview-box">
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">系统费用统计</span>
                </div>
                <div ref="yBarChartRef" class="h-[180px] w-full"></div>
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">各类型费用占比</span>
                </div>
                <div ref="payChartRef" class="h-[180px] flex-1"  />
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">能源分析</span>
                </div>
            </div>
        </div>
        <!-- 中间防护空层 -->
        <div class="w-[36%]"></div>
        <!-- 右边 -->
        <div class="flex-1 flex-col">
            <!-- 上面 -->
            <div class="right-box">

            </div>
            <div class="right-box-down">
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">能源数据概况</span>
                </div>
                <div class="energy-grid">
                    <div v-for="item in energyData" class="energy-item">
                        <div class="energy-label">{{ item.label }}</div>
                        <div class="energy-value">{{ item.value }}</div>
                    </div>
                </div>
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">系统能效统计</span>
                </div>
                <div ref="alarmChartRef" class="bar-chart" />
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">机主运行情况</span>
                </div>
                <div class="flex justify-center item-center">
                    <div ref="stackedChartRef" class="h-[180px] flex-1" />
                    <div class="flex flex-col text-center item-center justify-center">
                        <div class="bg-[rgba(62,70,113,0.7)] pr-4 pl-4">
                            <div class="text-center">1#冷战</div>
                            <div class="text-[13px] text-center">1#主机</div>
                        </div>
                        <div class="text-center">开启状态</div>
                        <div class="text-center w-10 mx-auto bg-[#0ac0a7]">启动</div>
                        <div class="text-center">运行状态</div>
                        <div class="text-center w-10  mx-auto bg-[#0ac0a7]">运行</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { useAlarmChart, useStackedChart } from './composables/CIMPlate'
import { useAnallyCircle, useBarProgress } from './composables/Anally'
const { chartOption: CIMBarOptions } = useBarProgress()
const { chartOption: CIMCircleOptions } = useAnallyCircle()
const { payOption } = useAnallyCircle()
const { chartOption: alarmChartOption } = useAlarmChart()
const { chartOption: stackedChartOption } = useStackedChart()

const { yBarOptions: yBarOption } = useBarProgress()
// 能源数据
const energyData = ref([
    {
        id: 1,
        label: '本月总能耗(单位:kw.h)',
        value: 11787,
    },
    {
        id: 2,
        label: '本年总能耗(单位:kw.h)',
        value: 210688,
    },
    {
        id: 3,
        label: '本日总负荷(单位:kw.h)',
        value: 73779,
    },
    {
        id: 4,
        label: '本年平均能耗(单位:kw.h)',
        value: 10127,
    },
    {
        id: 5,
        label: '本日总电费(单位:元)',
        value: 5646,
    },
    {
        id: 6,
        label: '本年总电费(单位:元)',
        value: 203231,
    }
])
const yBarChartRef = ref<HTMLElement>()
const payChartRef = ref<HTMLElement>()
const circleChartRef = ref<HTMLElement>()
const barChartRef = ref<HTMLElement>()
const alarmChartRef = ref<HTMLElement>()
const stackedChartRef = ref<HTMLElement>()
watch(circleChartRef, () => {
    if (circleChartRef) {
        // 初始化图表
        const chart = echarts.init(circleChartRef.value)
        // 导入配置项
        chart.setOption(CIMCircleOptions ?? {})
        // 监听窗口变化，使图表重绘，使图表随窗口变化自动调整尺寸。
        const handleResize = () => chart.resize()
        window.addEventListener('resize', handleResize)
        // 注销监听
        return () => {
            window.removeEventListener('resize', handleResize);
            chart.dispose();
        };
    }
})
watch(yBarChartRef, () => {
    if (yBarChartRef) {
        // 初始化图表
        const chart = echarts.init(yBarChartRef.value)
        // 导入配置项
        chart.setOption(yBarOption ?? {})
        // 监听窗口变化，使图表重绘，使图表随窗口变化自动调整尺寸。
        const handleResize = () => chart.resize()
        window.addEventListener('resize', handleResize)
        // 注销监听
        return () => {
            window.removeEventListener('resize', handleResize);
            chart.dispose();
        };
    }
})
watch(payChartRef, () => {
    if (payChartRef) {
        // 初始化图表
        const chart = echarts.init(payChartRef.value)
        // 导入配置项
        chart.setOption(payOption ?? {})
        // 监听窗口变化，使图表重绘，使图表随窗口变化自动调整尺寸。
        const handleResize = () => chart.resize()
        window.addEventListener('resize', handleResize)
        // 注销监听
        return () => {
            window.removeEventListener('resize', handleResize);
            chart.dispose();
        };
    }
})
watch(barChartRef, () => {
    if (barChartRef) {
        // 初始化图表
        const chart = echarts.init(barChartRef.value)
        // 导入配置项
        chart.setOption(CIMBarOptions ?? {})
        // 监听窗口变化，使图表重绘，使图表随窗口变化自动调整����。
        const handleResize = () => chart.resize()
        window.addEventListener('resize', handleResize)
        // 注销监听
        return () => {
            window.removeEventListener('resize', handleResize);
            chart.dispose();
        };
    }
})
watch(alarmChartRef, () => {
    if (alarmChartRef.value) {
        const chart = echarts.init(alarmChartRef.value);
        chart.setOption(alarmChartOption);

        const handleResize = () => chart.resize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.dispose();
        };
    }
});
watch(stackedChartRef, () => {
    if (stackedChartRef.value) {
        const chart = echarts.init(stackedChartRef.value);
        chart.setOption(stackedChartOption);

        const handleResize = () => chart.resize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.dispose();
        };
    }
})
</script>

<style scoped>
.content {
    flex: 1;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.title {
    background: linear-gradient(90deg, #5391fd 0%, #7d9fff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 18px;
}

.flex-1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
}

/* 上方概览盒子样式 */
.overview-box {
    width: 75%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    padding: 8px;
    margin-bottom: 8px;
}

.right-box {
    width: 75%;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    padding: 8px;
    margin-bottom: 8px;
    margin-left: auto;
}

.right-box-down {
    flex: 1;
    width: 75%;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    padding: 8px;
    margin-bottom: 8px;
    margin-left: auto;
}

.coverage-content {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0px 10px;
    height: 100px;
}

/* 环形进度 */
.circle-wrap {
    width: 120px;
    height: 100px;
    position: relative;
}

.circle-chart {
    width: 100%;
    height: 100%;
}

.circle-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
}

.circle-text .label {
    color: #5082a0;
    font-size: 13px;
    font-weight: bold;
}

.circle-text .value {
    color: #00ffcc;
    font-size: 20px;
    font-weight: bold;
}

/* 进度条图表 */
.bar-chart {
    flex: 1;
    height: 180px;
}

/* 能源 */
.energy-grid {
    display: grid;
    grid-template-columns: auto auto;
    margin-bottom: 8px;

}

.energy-item {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.energy-value {
    color: #2cbbec;
    font-size: 30px;
}
</style>