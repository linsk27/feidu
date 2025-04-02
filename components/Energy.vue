<template>
    <div class="content">
        <!-- 左边 -->
        <div class="flex-1 flex-col">
            <!-- 上方 -->
            <div class="overview-box">
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">4#天棚热泵主机</span>
                </div>
                <div class="overview-content" v-for=" in 4">
                    <!-- 第一行：总数量 -->
                    <div class="total-camera">
                        <img src="/assets/imgs/gl.png" alt="total" />
                        <div class="overview-item">
                            <div class="overview-item__label">功率</div>
                            <div class="overview-item__value">211.8</div>
                        </div>
                        <img src="/assets/imgs/dl.png" alt="total" />
                        <div class="overview-item">
                            <div class="overview-item__label">电量</div>
                            <div class="overview-item__value">272322.2</div>
                        </div>
                    </div>
                    <div class="energy-status">
                        <div>机组运行工况</div>
                        <div class="bg-[#e19f40] w-12 mr-auto flex items-center text-[14px] pl-2 pr-2">制热</div>
                        <div>机组运行工况</div>
                        <div class="bg-[#00d5b8] w-12 mr-auto flex items-center text-[14px] pl-2 pr-2">运行</div>
                        <div>C1启动状态</div>
                        <div class="bg-[#00d5b8] w-12 mr-auto flex items-center text-[14px] pl-2 pr-2">启动</div>
                        <div>C2启动状态</div>
                        <div class="bg-[#00d5b8] w-12 mr-auto flex items-center text-[14px] pl-2 pr-2">启动</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 中间防护空层 -->
        <div class="w-[36%]"></div>
        <!-- 右边 -->
        <div class="flex-1 flex-col">
            <div class="right-box">
                <!-- 下拉框组件 -->
                <select v-model="selectedValue" class="w-full p-[10px] border-2 border-[#4050c7] text-white">
                    <option class=" text-white" value="" disabled>请选择</option>
                    <option v-for="option in options" :key="option.value" :value="option.value" class="text-black">
                        {{ option.label }}
                    </option>
                </select>
            </div>
            <div class="right-box">
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">三相电压</span>
                </div>
                <div ref="xBarChartRef" class="h-[180px] w-full"></div>
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">三相电流</span>
                </div>
                <div ref="lineChartRef" class="h-[180px] w-full"></div>
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">超时访客数据</span>
                </div>
                <div ref="yBarChartRef" class="h-[180px] w-full"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { useEnergyProgress } from './composables/EnergyData'
const selectedValue = ref('') // 用于存储选中的值
const options = ref([         // 下拉框选项数据
    { value: '1', label: '选项1' },
    { value: '2', label: '选项2' },
    { value: '3', label: '选项3' }
])

const xBarChartRef = ref<HTMLElement>()
const lineChartRef = ref<HTMLElement>()
const yBarChartRef = ref<HTMLElement>()
const { xBarOption: xBarOption } = useEnergyProgress()
const { lineOptions: lineOption } = useEnergyProgress()
const { yBarOptions: yBarOption } = useEnergyProgress()
watch(xBarChartRef, () => {
    if (xBarChartRef.value) {
        const chart = echarts.init(xBarChartRef.value)
        chart.setOption(xBarOption)

        const handleResize = () => chart.resize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            chart.dispose()
        }
    }
})
watch(lineChartRef, () => {
    if (lineChartRef.value) {
        const chart = echarts.init(lineChartRef.value)
        chart.setOption(lineOption)

        const handleResize = () => chart.resize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            chart.dispose()
        }
    }
})
watch(yBarChartRef, () => {
    if (yBarChartRef.value) {
        const chart = echarts.init(yBarChartRef.value)
        chart.setOption(yBarOption)

        const handleResize = () => chart.resize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            chart.dispose()
        }
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

/* 上方概览盒子样式 */
.overview-box {
    width: 75%;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    padding: 8px;
}

.overview-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 10px 20px;
    padding-left: 10px;
    margin-bottom: 20px;
}

.total-camera {
    display: flex;
    gap: 20px;
    align-items: center;
}

.overview-item {
    display: flex;
    flex-direction: column;
}

.overview-item__label {
    font-size: 14px;
    background: linear-gradient(90deg, #5391fd 0%, #5384c7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.overview-item__value {
    font-size: 30px;
}

.header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
}

.energy-status {
    flex: 1;
    display: grid;
    font-size: 16px;
    grid-template-columns: auto auto auto auto;
    gap: 8px 0;
}

.right-box {
    width: 75%;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    padding: 8px;
    margin-bottom: 8px;
    margin-left: auto;
}
</style>