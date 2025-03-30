<template>
  <div class="container">
    <div class="inner-container">
      <!-- 左边 -->
      <div class="left-section">
        <Community></Community>
      </div>
      <!-- 中间 -->
      <div class="center-section">
        <div class="center-box">
          <div class="tab-btn skew-30" @click="click = 0" :class="{ 'active': click === 0 }">
            <span class="skew-inverse-30">社区管理</span>
          </div>
          <div class="tab-btn skew-15" @click="click = 1" :class="{ 'active': click === 1 }">
            <span class="skew-inverse-15">安保监控</span>
          </div>
          <div class="tab-btn" @click="click = 2" :class="{ 'active': click === 2 }">
            <span class="center-text">CIM平台</span>
          </div>
          <div class="tab-btn skew-minus-15" @click="click = 3" :class="{ 'active': click === 3 }">
            <span class="skew-inverse-minus-15">能源检测</span>
          </div>
          <div class="tab-btn skew-minus-30" @click="click = 4" :class="{ 'active': click === 4 }">
            <span class="skew-inverse-minus-30">节能分析</span>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="right-section"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const click = ref(3)
</script>

<style scoped>
.container {
  position: fixed;
  /* 改为固定定位 */
  height: 100vh;
  /* 明确指定视口高度 */
  min-height: 100vh;
  width: 100vw;
  /* 明确指定视口高度 */
  min-width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* 四向定位撑满视口 */
  overflow: hidden;
  background: url('assets/imgs/bg.jpg') center/cover no-repeat fixed;
  /* 添加fixed定位 */
  color: white;
  z-index: 0;
  /* 确保作为底层 */
}

.inner-container {
  position: relative;
  display: flex;
  height: 100vh;
  /* 明确指定视口高度 */
  min-height: 100vh;
  width: 100vw;
  /* 明确指定视口高度 */
  min-width: 100vw;
  background-color: rgba(51, 65, 85, 0.5);
  z-index: 1;
}

/* 添加伪元素作为背景保障层 */
.container::before {
  content: '';
  box-shadow: inset 10px 10px 200px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  z-index: -1;
}

.left-section,
.right-section {
  flex: 1;
}

.left-section {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0));
}

.right-section {
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85));
}

.center-section {
  width: 33.33%;
  display: flex;
}

.center-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin-bottom: 5rem;
}

.tab-btn {
  border: 3px solid #4352b5;
  cursor: pointer;
  background-color: rgba(23, 25, 27, 0.5);
  padding: 0.25rem;
}

.skew-30 {
  transform: skewX(30deg);
}

.skew-15 {
  transform: skewX(15deg);
}

.skew-minus-15 {
  transform: skewX(-15deg);
}

.skew-minus-30 {
  transform: skewX(-30deg);
}

.skew-inverse-30 {
  transform: skewX(-30deg);
  display: inline-block;
}

.skew-inverse-15 {
  transform: skewX(-15deg);
  display: inline-block;
}

.skew-inverse-minus-15 {
  transform: skewX(15deg);
  display: inline-block;
}

.skew-inverse-minus-30 {
  transform: skewX(30deg);
  display: inline-block;
}

.center-text {
  font-size: 20px;
  display: inline-block;
}

.active {
  color: #41dca6;
  background-color: rgba(21, 19, 18, 0.7);
}
</style>