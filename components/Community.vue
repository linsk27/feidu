<template>
    <div class="content">
        <!-- 左边 -->
        <div class="flex-1 flex-col">
            <!-- 上方 -->
            <div class="overview-box">
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">安防概况</span>
                </div>
                <div class="overview-content">
                    <div class="overview-item">
                        <img src="/assets/imgs/title.png" />
                    </div>
                    <div class="overview-item ">
                        <div class="overview-item__label color-font">当前社区人数</div>
                        <div class="overview-item__value big-number">12530</div>
                    </div>
                    <div class="overview-item">
                        <div class="overview-item__label color-font">黑名单</div>
                        <div class="overview-item__value">25</div>
                    </div>
                    <div class="overview-item">
                        <div class="overview-item__label label-box">业主人数</div>
                        <div class="overview-item__value">2318</div>
                    </div>
                    <div class="overview-item">
                        <div class="overview-item__label label-box">访客人数</div>
                        <div class="overview-item__value">880</div>
                    </div>
                    <div class="overview-item">
                        <div class="overview-item__label label-box">外来人数</div>
                        <div class="overview-item__value">174</div>
                    </div>
                </div>
            </div>
            <!-- 下方 -->
            <div class="alarm-box">
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">报警讯息列表</span>
                </div>
                <div class="alarm-content">
                    <div v-for="item in alarmList" :key="item.id" class="alarm-item">
                        <div class="alarm-item__left">
                            <div class="alarm-item__top">
                                <div class="alarm-item__location">{{ item.location }}</div>
                                <div class="alarm-item__status" :class="{
                                    'status-pending': item.status === '待派遣',
                                    'status-processing': item.status === '处理中',
                                    'status-resolved': item.status === '已消警'
                                }">
                                    {{ item.status }}
                                </div>
                            </div>
                            <div class="alarm-item__time">{{ item.time }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 中间防护空层 -->
        <div class="w-[36%]"></div>
        <!-- 右边 -->
        <div class="flex-1 flex-col">
            <!-- 上方 -->
            <div class="blacklist-box">
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">黑名单数据</span>
                </div>
                <div class="blacklist-content">
                    <img src="/assets/imgs/user.png" alt="blacklist" />
                    <div class="blacklist-label">近一月出现黑名单次数</div>
                    <div class="blacklist-value">754</div>
                </div>
            </div>
            <!-- 下方 -->
            <div class="e-charts-box">
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">超时访客数据</span>
                </div>
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">业主关怀</span>
                </div>
                <div class="header">
                    <img src="/assets/imgs/titleImg.png" />
                    <span class="title">报警数据</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const alarmList = ref([
    { id: 1, location: '监控1: 大西1云台', time: '07:12:18', status: '待派遣' },
    { id: 2, location: '监控2: A塔南侧', time: '07:13:12', status: '处理中' },
    { id: 3, location: '监控3: T9北侧', time: '08:12:18', status: '已消警' },
    { id: 4, location: '监控4: 大西1云台', time: '07:12:18', status: '待派遣' },
    { id: 5, location: '监控5: A塔南侧', time: '07:13:12', status: '处理中' },
    { id: 6, location: '监控6: T9北侧', time: '08:12:18', status: '已消警' },
    { id: 7, location: '监控7: 大西1云台', time: '07:12:18', status: '待派遣' },
    { id: 8, location: '监控8: A塔南侧', time: '07:13:12', status: '处理中' },
    { id: 9, location: '监控9: T9北侧', time: '08:12:18', status: '已消警' }
])
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

/* 右侧容器特殊样式 */
.flex-1:last-child {
    align-items: flex-end;
}

/* 上方image.png样式 */
.overview-box {
    width: 75%;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    padding: 8px;
}

.overview-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
}

.overview-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
}

.overview-item__label {
    font-size: 12px;
    margin-bottom: 5px;
}

.color-font {
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
    font-size: 16px;
    background: linear-gradient(90deg, #9dceff 0%, #9dceeb 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.big-number {
    font-size: 30px;
    margin-top: -5px;
}

/* 报警讯息列表样式 */
.alarm-box {
    width: 75%;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    padding: 8px;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    /* 确保flex子元素可以正确滚动 */
}

.alarm-content {
    flex: 1;
    overflow-y: auto;
    padding-right: 5px;
    min-height: 0;
    /* 确保内容可以滚动 */
}

.alarm-content::-webkit-scrollbar {
    width: 4px;
}

.alarm-content::-webkit-scrollbar-thumb {
    background: rgba(83, 145, 253, 0.5);
    border-radius: 2px;
}

.alarm-item {
    display: flex;
    flex-direction: column;
    border-left: 20px solid #11467c;
    margin-bottom: 8px;
}

.alarm-item__left {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
}

.alarm-item__top {
    display: flex;
    padding: 5px 15px 5px 22px;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
}

.alarm-item__location {
    font-size: 14px;
    color: #eeebe1;
}

.alarm-item__time {
    font-size: 14px;
    color: #eeebe1;
    padding-left: 22px;
    margin-top: 4px;
}

.alarm-item__status {
    padding: 2px 12px;
    border-radius: 4px;
    font-size: 12px;
}

.status-pending {
    background-color: #673ab7;
}

.status-processing {
    background-color: #409eff;
}

.status-resolved {
    background-color: #3f51b5;
}

/* 黑名单数据样式 */
.blacklist-box {
    width: 75%;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    padding: 8px;
}


.blacklist-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    padding: 15px 25px;
}


.blacklist-label {
    background-color: #1c1e2b;
    padding: 5px;
    font-size: 12px;
    margin-right: 20px;
}

.blacklist-value {
    font-size: 36px;
    font-weight: bold;
    background: linear-gradient(90deg, #00E5FF 0%, #2979FF 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

/* 图表盒子 */
.e-charts-box {
    width: 75%;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);
    padding: 8px;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
}

.header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
}
</style>