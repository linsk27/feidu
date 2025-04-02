<template>
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
</template>

<script setup lang="ts">
interface AlarmItem {
    id: number;
    location: string;
    time: string;
    status: '待派遣' | '处理中' | '已消警';
}

// 报警列表数据
const alarmList = ref<AlarmItem[]>([
    { id: 1, location: '监控1: 大西1云台', time: '07:12:18', status: '待派遣' },
    { id: 2, location: '监控2: A塔南侧', time: '07:13:12', status: '处理中' },
    { id: 3, location: '监控3: T9北侧', time: '08:12:18', status: '已消警' },
    { id: 4, location: '监控4: 大西1云台', time: '07:12:18', status: '待派遣' },
    { id: 5, location: '监控5: A塔南侧', time: '07:13:12', status: '处理中' },
    { id: 6, location: '监控6: T9北侧', time: '08:12:18', status: '已消警' },
    { id: 7, location: '监控7: 大西1云台', time: '07:12:18', status: '待派遣' },
    { id: 8, location: '监控8: A塔南侧', time: '07:13:12', status: '处理中' },
    { id: 9, location: '监控9: T9北侧', time: '08:12:18', status: '已消警' }
]);
</script>

<style scoped>
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
}

.alarm-content {
    flex: 1;
    overflow-y: auto;
    padding-right: 5px;
    min-height: 0;
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

.header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
}

.title {
    background: linear-gradient(90deg, #5391fd 0%, #7d9fff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 18px;
}
</style> 