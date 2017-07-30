<template>
    
   <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="data.drawer = !data.drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Match</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn icon @click.native="go">
          <v-icon>account_circle</v-icon>
        </v-btn>
  </v-toolbar>
  
</template>

<script>
import {Store} from '@/Store.js'

export default {
  name: 'hello',
  data () {
    return {
        data: Store.data
    }
  },
  methods: {
    go(){
      this.$router.push('/account')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
