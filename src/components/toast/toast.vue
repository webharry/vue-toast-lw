<template>
  <transition name="fade">
    <div class="modal" v-if="visiable">
      <div class="toast-wrapper">
        <div class="toast">{{ message }}</div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      visiable: false
    };
  }
};
</script>
<style lang="less" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .toast-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .toast {
      padding: 35px 30px;
      border-radius: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.6);
      font-size: 30px;
    }
  }
}
.fade-enter-active {
  animation: scaling 0.2s linear;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes scaling {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
