<template>
  <div class="h-screen overflow-hidden bg-cover bg-center bg-[url('assets/imgs/bg.jpg')] text-white ">
    <div class="main-box">
      <!-- 上部 -->
      <div class="content">
        <Community v-if="click===0"/>
        <Security v-if="click===1"/>
        <CIMPlate v-if="click===2"/>
        <Energy v-if="click===3"/>
        <Anally v-if="click===4"/>
      </div>
      <!-- 底部 -->
      <div class="type-button">
        <div class="bt-box">
          <div class="nav-button nav-community" @click="click = 0" :class="{ 'active': click === 0 }">
            <span class="nav-text">社区管理</span>
          </div>
          <div class="nav-button nav-security" @click="click = 1" :class="{ 'active': click === 1 }">
            <span class="nav-text">安保监控</span>
          </div>
          <div class="nav-button nav-cim" @click="click = 2" :class="{ 'active': click === 2 }">
            <span class="nav-text">CIM平台</span>
          </div>
          <div class="nav-button nav-energy" @click="click = 3" :class="{ 'active': click === 3 }">
            <span class="nav-text">能源检测</span>
          </div>
          <div class="nav-button nav-saving" @click="click = 4" :class="{ 'active': click === 4 }">
            <span class="nav-text">节能分析</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const click = ref(2)
</script>
<style scoped>
.main-box {
  position: relative;
  padding: 10px 10px;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  background: radial-gradient(circle at center, transparent 1%, rgba(0, 0, 0, 0.9) 87%);
}

.content {
  height: 95%;
}

.type-button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.bt-box {
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
}

.nav-button {
  border: 3px solid #4352b5;
  cursor: pointer;
  background-color: rgba(23, 24, 26, 0.5);
  padding: 0.35rem 0.5rem;
}

/* 社区管理按钮 - 向右倾斜 */
.nav-community {
  transform: skewX(30deg);
}

.nav-community .nav-text {
  transform: skewX(-30deg);
}

/* 安保监控按钮 - 向左倾斜 */
.nav-security {
  transform: skewX(15deg);
}

.nav-security .nav-text {
  transform: skewX(-15deg);
}

/* CIM平台按钮 - 不倾斜 */
.nav-cim {
  transform: none;
}

.nav-cim .nav-text {
  font-size: 20px;
  transform: none;
}

/* 能源检测按钮 - 向右倾斜 */
.nav-energy {
  transform: skewX(-15deg);
}

.nav-energy .nav-text {
  transform: skewX(15deg);
}

/* 节能分析按钮 - 向左倾斜 */
.nav-saving {
  transform: skewX(-30deg);
}

.nav-saving .nav-text {
  transform: skewX(30deg);
}

.nav-text {
  display: inline-block;
}

.active {
  color: #41dca6;
  background-color: rgba(21, 19, 18, 0.7);
}
</style>