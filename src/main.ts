import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Network} from '@balancer-labs/sdk'

console.log('Network:', Network);

createApp(App).mount('#app')



