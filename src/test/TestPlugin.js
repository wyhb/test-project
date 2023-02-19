import TestComponent from './TestComponent.vue'
import Test from './Test';
export default {
  install(app) {
    app.component('TestComponent', TestComponent);
    app.component('TestSea', Test);
    app.provide('testInfo', {
      a: 1, b: 2, c: '3', name: 'kevinzeng'
    })
  }
}
