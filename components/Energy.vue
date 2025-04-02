<template>
    <div class="content">
        <!-- 左边 -->
        <div class="flex-1 flex-col">
            <!-- 上方 -->
            <div class="overview-box">
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">摄像头概述总览</span>
                </div>
                <div class="overview-content">
                    <!-- 第一行：总数量 -->
                    <div class="total-camera">
                        <img src="/assets/imgs/title.png" alt="total" />
                        <div class="overview-item">
                            <div class="overview-item__label">摄像头总数量</div>
                            <div class="overview-item__value">53</div>
                        </div>
                    </div>
                    <!-- 第二行：详细分类 -->
                    <div class="camera-types">
                        <div class="type-item" v-for="item in cameraTypes" :key="item.id">
                            <div class="type-label">
                                <img src="/assets/imgs/yz.png" :alt="item.label" />
                                <span>{{ item.label }}</span>
                            </div>
                            <div class="type-value">{{ item.value }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 中间 -->
            <div class="coverage-box">
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">摄像头覆盖占比</span>
                </div>
                <!-- 添加覆盖区域显示标题和开关 -->
                <div class="area-display">
                    <span class="area-title">覆盖区域显示</span>
                    <div class="switch" @click="toggleSwitch">
                        <div class="switch-track" :class="{ 'switch-track-active': showArea }">
                            <div class="switch-thumb" :class="{ 'switch-thumb-active': showArea }"></div>
                        </div>
                    </div>
                </div>
                <div class="coverage-content">
                    <!-- 左侧环形进度 -->
                    <div class="circle-wrap">
                        <div ref="circleChartRef" class="circle-chart"></div>
                        <div class="circle-text">
                            <span class="label">覆盖区域</span>
                            <span class="value">80%</span>
                        </div>
                    </div>
                    <!-- 右侧进度条 -->
                    <div ref="barChartRef" class="bar-chart"></div>
                </div>
            </div>
            <!-- 下方 -->
            <div class="alarm-list-container">
                <AlarmList />
            </div>
        </div>
        <!-- 中间防护空层 -->
        <div class="w-[36%]"></div>
        <!-- 右边 -->
        <div class="flex-1 flex-col">
            <div class="right-box">
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">摄像头概述总览</span>
                </div>
                <div class="video-box">
                    <div v-for="item in cameraVideo" class="video-item">
                        <img src="/assets/imgs/jk.png">
                        <div>{{ item.label }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { useCircleProgress, useBarProgress } from './composables/Security'

// 摄像头类型数据
const cameraTypes = ref([
    {
        id: 1,
        label: '人脸识别摄像头',
        value: 8,
        icon: '/assets/imgs/yz.png'
    },
    {
        id: 2,
        label: '可控制摄像头',
        value: 20,
        icon: '/assets/imgs/yz.png'
    },
    {
        id: 3,
        label: '故障摄像头',
        value: 2,
        icon: '/assets/imgs/yz.png'
    }
])

// 摄像头概述数据
const cameraVideo = ref([
    {
        id: 1,
        label: '人脸识别摄像头',
    },
    {
        id: 2,
        label: '人脸识别摄像头',
    },
    {
        id: 3,
        label: '可控制摄像头',
    },
    {
        id: 4,
        label: '故障摄像头',
    },
    {
        id: 5,
        label: '故障摄像头',
    },
    {
        id: 6,
        label: '故障摄像头',
    },
    {
        id: 7,
        label: '故障摄像头',
    },
    {
        id: 8,
        label: '故障摄像头',
    }
])
// 图表实例
const circleChartRef = ref<HTMLElement>()
const barChartRef = ref<HTMLElement>()
const { chartOption: circleChartOption } = useCircleProgress()
const { chartOption: barChartOption } = useBarProgress()

// 监听环形图表
watch(circleChartRef,() => {
    if (circleChartRef.value) {
        const chart = echarts.init(circleChartRef.value)
        chart.setOption(circleChartOption)

        const handleResize = () => chart.resize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            chart.dispose()
        }
    }
})

// 监听进度条图表
watch(barChartRef,() => {
    if (barChartRef.value) {
        const chart = echarts.init(barChartRef.value)
        chart.setOption(barChartOption)

        const handleResize = () => chart.resize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            chart.dispose()
        }
    }
})

const showArea = ref(true)
const toggleSwitch = () => {
    showArea.value = !showArea.value
}
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

/* 上方概览盒子样式 */
.overview-box {
    width: 75%;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    padding: 8px;
}

.overview-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 10px;
}

.total-camera {
    display: flex;
    align-items: center;
    gap: 15px;
}

.overview-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.overview-item__label {
    font-size: 12px;
    background: linear-gradient(90deg, #5391fd 0%, #5384c7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.label-box {
    padding: 2px 15px;
    background-image: linear-gradient(90deg, #107ea5 0%, #4e4b9e 100%);
}

.overview-item__value {
    font-size: 30px;
    background: linear-gradient(90deg, #9dceff 0%, #9dceeb 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
}

.camera-types {
    display: flex;
    justify-content: space-around;
    gap: 10px;
}

.type-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.type-label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    padding: 2px 8px;
    background-image: linear-gradient(90deg, #107ea5 0%, #4e4b9e 100%);
}

.type-label img {
    width: 11px;
    height: 11px;
}

.type-value {
    color: #96c9fc;
}

/* 覆盖率展示区域 */
.coverage-box {
    position: relative;
    width: 75%;
    margin-top: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    padding: 8px;
}

.coverage-content {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 20px 10px;
    height: 160px;
}

/* 环形进度 */
.circle-wrap {
    width: 120px;
    height: 120px;
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
    color: #96c9fc;
    font-size: 12px;
}

.circle-text .value {
    color: #00ffcc;
    font-size: 20px;
    font-weight: bold;
}

/* 进度条图表 */
.bar-chart {
    flex: 1;
    height: 100%;
}

/* 覆盖区域显示样式 */
.area-display {
    z-index: 10;
    position: absolute;
    display: flex;
    align-items: center;
    left: 45%;
    top: 30%;
}

.area-title {
    color: #fff;
    font-size: 14px;
    margin-right: 10px;
}

/* 原生开关样式 */
.switch {
    cursor: pointer;
    user-select: none;
}

.switch-track {
    width: 40px;
    height: 20px;
    background-color: #32375f;
    border-radius: 10px;
    position: relative;
    transition: background-color 0.3s;
}

.switch-track-active {
    background-color: #12928a;
}

.switch-thumb {
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.3s;
}

.switch-thumb-active {
    transform: translateX(20px);
}

/* 报警列表容器样式 */
.alarm-list-container {
    width: 100%;
    margin-top: 10px;
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
}

.right-box{
    width: 75%;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    padding: 8px;
    margin-left: auto;
}

.video-box {
    display: grid;
    flex:1;
    grid-template-columns: repeat(2, 1fr);
    gap:5px 10px;
    padding: 0 25px;
}
.video-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>