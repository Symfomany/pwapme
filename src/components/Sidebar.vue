<template>
    <v-navigation-drawer
      class="pb-0"
      overflow
      absolute
      temporary
      height="100%"
      clipped
      enable-resize-watcher
      v-model="data.drawer"
    >

       <v-subheader v-if="data.isAuth == true" class="mt-3 grey--text text--darken-1">Profil</v-subheader>
        
        <v-list v-if="data.isAuth == true">

          <v-list-tile avatar >
            <v-list-tile-avatar>
              <img :src="`//graph.facebook.com/${data.me.id}/picture`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title>Bonjour <b>{{ data.me.name }}</b> ! <br />
            <small>{{ data.me.location.name }}</small>
            </v-list-tile-title>
          </v-list-tile>

        </v-list>
       <v-subheader class="mt-3 grey--text text--darken-1">Actions</v-subheader>
     
       <v-list>
      
       <v-list-tile :to="'/'">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Home
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile  v-if="data.isAuth == false">
              <v-list-tile-content>
              Je me connecte
              </v-list-tile-content>
          </v-list-tile>

 
       <v-list-tile @click.native="logout" v-if="data.isAuth == true" :to="'/'">
          <v-list-tile-action>
            <v-icon>lock</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Deconnexion
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>


  </v-navigation-drawer>
</template>

<script>
import {Store} from '@/Store.js'

export default {
  name: 'sidebar',
  data() {
    return {
      data: Store.data,
    }
  },
  created(){
 
  },
  methods: {
    logout(){
        localStorage.setItem('fb', "");
        Store.data.isAuth = false;
        Store.data.me = {};
    },
    onSignInSuccess (response) {
      FB.api('/me', {fields: 'last_name,email,birthday,about,context,cover,gender,hometown,location,name'}, (me) => {
        localStorage.setItem('fb', JSON.stringify(me));
        Store.data.isAuth = true;
        Store.data.me = me;
        console.log(me)
      });
      
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  },
}
</script>
