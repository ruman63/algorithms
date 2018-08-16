<template>
  <div id="app" class="font-sans">
    <transition name="fade">
      <router-view class="absolute pin-x pin-y"></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'app',
  }
</script>
<style src="./styles/app.css"></style>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
