<template>
    <div class="home">
        <img alt="Vue logo" :src="imgUrl">
        <HelloWorld :msg="msg"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import img from 'assets/logo.png';

export default {
  name: 'home',
  data() {
    return {
      msg: 'lalaal',
      imgUrl: img,
    };
  },
  components: {
    HelloWorld,
  },
  created() {
    console.log(this.imgUrl);
  },
};
</script>
