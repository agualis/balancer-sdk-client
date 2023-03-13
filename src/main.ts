import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ISOLATED_CONST } from '@balancer-labs/sor';

console.log('ISOLATED_CONST:', ISOLATED_CONST);

// console.log('WeightedPool:', WeightedPool);
// console.log('WeightedMaths:', SOR);

createApp(App).mount('#app')



