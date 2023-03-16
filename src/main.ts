import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ISOLATED_CONST } from '@balancer-labs/sdk';
// import { ISOLATED_CONST, BalancerSDK } from '@balancer-labs/sdk';

console.log('ISOLATED_CONST:', ISOLATED_CONST);

// //Uncomment to see how importing balancer SDK affects the bundle size
// export const balancer = new BalancerSDK({
//   network: 5,
//   rpcUrl: 'test-url',
//   customSubgraphUrl: 'subgraphurl',
// });
//
// console.log('balancer', balancer);

// console.log('WeightedMaths:', SOR);

createApp(App).mount('#app')



