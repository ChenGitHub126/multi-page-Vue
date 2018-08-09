<template>
  <div class="home">
    <img src="../../../assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  data() {
    return {
      msg: '时空年龄菲尼克斯',
    };
  },
  components: {
    HelloWorld,
  },
  created() {
    console.log(this.msg);
  },
};
</script>
