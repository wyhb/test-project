import { defineComponent, h } from 'vue';
import Home from '../pages/Home.vue'

const Test = defineComponent({
  name: 'TestSea',
  props: {},
  setup(props, { slots }) {
    return () => {
      // return h('div', {
      //   class: 'test-sea',
      //   onClick() {
      //     alert('click事件')
      //   }
      // }, slots.default())
      return h(Home, {
        onClick() {
          alert('home');
        }
      }, slots.default())
    }
  }
})

export default Test;