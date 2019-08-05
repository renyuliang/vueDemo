<template>
  <div class="hello">
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>
<script>
import headerBar from '../components/headerBar.vue'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    headerBar
  }
}
</script>
