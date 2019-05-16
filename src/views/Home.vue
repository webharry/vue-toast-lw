<template>
  <div class="home">
    <button @click="showToast">
      基本toast
    </button>
    <button @click="show2Toast">
      设置时间
    </button>
  </div>
</template>

<script>
// import Toast from "../components/toast/toast.vue"
export default {
  name: "home",
  methods: {
    showToast() {
      this.$toast("基本toast");
    },
    show2Toast() {
      this.$toast({
        message: "show my Toast!",
        duration: 5000
      });
    }
  },
  components: {
    //   Toast
  }
};
</script>
