import Toast from "./toast.vue";

var ToastPlugin = {};

ToastPlugin.install = (Vue, options = {}) => {
  const ToastConstructor = Vue.extend(Toast);

  ToastConstructor.prototype.close = function() {
    this.visiable = false;
  };

  Vue.prototype.$toast = (option = {}) => {
    if (document.querySelector(".toast")) {
      document.body.removeChild(document.querySelector(".toast"));
    }
    var instance = new ToastConstructor().$mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    instance.message = typeof option === "string" ? option : option.message;
    let duration = option.duration || 1500;

    instance.visiable = true;

    setTimeout(function() {
      instance.close();
    }, duration);
  };
};

export default ToastPlugin;
