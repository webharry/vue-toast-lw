# vue-toast-lw

## Project setup
```
npm install vue-toast-lw --save-dev
```

## use
1、在main.js文件全局引入组件vue-cropperjs-lib:

```js
import ToastPlugin from "vue-toast-lw";

Vue.use(ToastPlugin);
```

2、然后就可以使用组件：

```html
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

```

### 源码
See [toast源码](https://github.com/webharry/vue-toast-lw).
