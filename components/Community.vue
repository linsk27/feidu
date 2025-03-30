<!--
 * @Author: linsk27 14062626+linsk27@user.noreply.gitee.com
 * @Date: 2025-03-30 17:07:42
 * @LastEditors: linsk27 14062626+linsk27@user.noreply.gitee.com
 * @LastEditTime: 2025-03-30 19:34:07
 * @FilePath: \入门项目\components\Community.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="security-overview">
        <div class="overview-box">
            <!-- 标题 -->
            <div class="title">
                <img src="/assets/imgs/titleImg.png">
                <span>安防概况</span>
            </div>
            <!-- 表格布局 -->
            <div class="grid-container">
                <div class="grid-item">
                    <div class="item-label">当前社区总人数</div>
                    <div class="item-value">12530</div>
                </div>
                <div class="grid-item">
                    <div class="item-label">黑名单</div>
                    <div class="item-value highlight">25</div>
                </div>
                <div class="grid-item">
                    <div class="item-label">业主人数</div>
                    <div class="item-value">2318</div>
                </div>
                <div class="grid-item">
                    <div class="item-label">访客人数</div>
                    <div class="item-value">880</div>
                </div>
                <div class="grid-item">
                    <div class="item-label">外来人数</div>
                    <div class="item-value">174</div>
                </div>
                <div class="grid-item empty"></div>
            </div>
        </div>

        <!-- 报警信息列表 -->
        <div class="alarm-box">
            <div class="title">
                <img src="/assets/imgs/titleImg.png">
                <span>报警信息列表</span>
            </div>
            <div class="alarm-items">
                <div class="alarm-item">
                    <div class="alarm-info">
                        <div class="alarm-name">监控1: 大西门1云台</div>
                        <div class="alarm-time">07:12:18</div>
                    </div>
                    <div class="alarm-status waiting">待派遣</div>
                </div>
                <div class="alarm-item">
                    <div class="alarm-info">
                        <div class="alarm-name">监控2: A栋南侧</div>
                        <div class="alarm-time">07:13:12</div>
                    </div>
                    <div class="alarm-status processing">处理中</div>
                </div>
                <div class="alarm-item">
                    <div class="alarm-info">
                        <div class="alarm-name">监控3: T9北侧</div>
                        <div class="alarm-time">08:12:18</div>
                    </div>
                    <div class="alarm-status completed">已完警</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// 这里可以添加需要的响应式数据和方法
</script>

<style scoped>
.security-overview {
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
}

/* 基础盒子样式 */
.overview-box, .alarm-box {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(8, 8, 8, 0.1);
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
}

/* 概况盒子 */
.overview-box {
    min-height: 200px;
    display: flex;
    flex-direction: column;
}

/* 报警盒子 */
.alarm-box {
    flex: 1;
    min-height: 300px;
    overflow-y: auto;
}

.title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    font-size: 16px;
    color: #4352b5;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    flex: 1;
    align-content: center;
}

.grid-item {
    border-radius: 4px;
    padding: 12px;
    text-align: left;
}

.item-label {
    color: #8b8b8b;
    font-size: 14px;
    margin-bottom: 4px;
}

.item-value {
    font-size: 20px;
    color: #4352b5;
}

.highlight {
    color: #ff4d4f;
}

.empty {
    background: transparent;
}

/* 报警信息列表样式 */
.alarm-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.alarm-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.alarm-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.alarm-name {
    color: #fff;
    font-size: 14px;
}

.alarm-time {
    color: #8b8b8b;
    font-size: 12px;
}

.alarm-status {
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
}

.waiting {
    background: rgba(67, 82, 181, 0.2);
    color: #4352b5;
}

.processing {
    background: rgba(64, 158, 255, 0.2);
    color: #409eff;
}

.completed {
    background: rgba(103, 194, 58, 0.2);
    color: #67c23a;
}
</style>