<template>
  <div class="home-wrapper">
    <div class="aside-wrapper">
      <Aside />
    </div>

    <div class="right-wrapper">
      <div class="header-wrapper">
        <Header />
      </div>
      <div class="main-wrapper">
        <!-- 缓存（我喜欢 本地和下载 最近播放 试听列表） -->
        <!-- 必须加 key 值 -->
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" :key="$route.path" v-if="$route.meta.keepAlive" />
          </keep-alive>
          <component :is="Component" :key="$route.path" v-if="!$route.meta.keepAlive" />
        </router-view>
      </div>
      <div class="footer-wrapper" @contextmenu.prevent>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Aside from '@/layout/aside/Aside.vue'
import Header from '@/layout/header/Header.vue'
import Footer from '@/layout/footer/Footer.vue'
</script>

<style scoped lang="scss">

.home-wrapper {
  padding-left: 220px;
}
// aside
.aside-wrapper {
  position: fixed;
  left: 0;
  top: 0;

  width: $aside-width;
  background-color: var(--aside-bg);
}
.right-wrapper {
  position: relative;
  width: 100%;
  min-width: 900px;
  height: 100vh;
  background-color: var(--right-bg);
  // header
  .header-wrapper {
    box-sizing: border-box;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: $header-height;
    padding: 20px 25px 20px 36px;
  }
  // main
  .main-wrapper {
    padding-top: $header-height;
    padding-bottom: $footer-height;
    background-color: var(--right-bg);
  }
  // footer
  .footer-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: $footer-height;
  }
}
// 侧栏隐藏起来，其余铺满屏幕
@media screen and (max-width: 1120px) {
  .aside-wrapper {
    display: none;
  }
  .home-wrapper {
    padding-left: 0;
  }
}
</style>