<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { throttle } from 'lodash';

export default {
  props: {
    // items: { default: {} },
  },

  mounted() {
    let el = this.$el;
    let originalOffsetTop = this.$el.offsetTop;

    window.addEventListener(
      'scroll',
      throttle(function () {
        if (window.scrollY >= originalOffsetTop) {
          el.classList.add('fixed', 'top-0', 'mt-5');
        } else {
          el.classList.remove('fixed', 'top-0', 'mt-5');
        }
      }),
      300
    );
  },
};
</script>
