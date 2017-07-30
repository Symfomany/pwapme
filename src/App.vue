<template>
<v-app
    id="sandbox"
    dark
    standalone
  >
    <toolbar></toolbar>
    <sidebar></sidebar>

    <main>
      <v-container fluid>
        <v-layout align-center justify-center>
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </v-layout>
      </v-container>
    </main>
    
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar';
import Sidebar from '@/components/Sidebar';


export default {
  name: 'app',
  components: {toolbar: Toolbar, sidebar: Sidebar}
}
</script>
<style>

.fade-enter-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);

}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
    transform: translateX(15px);

}
</style>