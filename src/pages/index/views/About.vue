<template>
    <div>
        <br/>
        <br/>
        <div class="space-btn" @click="spaceChange">显示间隔</div>
        <div class="space" v-if="showSpace">间隔</div>
        <div style="height:44px;">
            <sticky
                    scroll-box="vux_view_box_body"
                    ref="sticky"
                    :offset="46"
                    :check-sticky-support="false"
                    :disabled="disabled">
                <tab :line-width="1">
                    <tab-item selected>正在正映</tab-item>
                    <tab-item>即将上映</tab-item>
                </tab>
            </sticky>
        </div>
        <p v-for="i in 100" :key="i">{{i}}<br></p>
    </div>
</template>

<script>
import { Tab, TabItem, Sticky } from 'vux';

export default {
  components: {
    Tab,
    TabItem,
    Sticky,
  },
  data() {
    return {
      showSpace: false,
      disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent),
    };
  },
  methods: {
    spaceChange() {
      this.showSpace = !this.showSpace;
      this.$nextTick(() => {
        this.$refs.sticky.bindSticky();
      });
    },
  },
};
</script>
<style scoped>
    .space-btn {
        padding: 5px 0;
        margin: 10px;
        text-align: center;
        border: 1px red solid;
    }

    .space {
        padding: 30px 0;
        margin: 10px;
        text-align: center;
        border: 1px green solid;
    }
</style>
