import axios from 'axios';

/**
 * Store Management Pattern
 */
export const Store = {

  data: {
    drawer: false,
    search: '',
    isAuth: false,
    me: {}
  },

  checkAuth() {
    let fb = localStorage.getItem('fb')
    if (fb) {
      this.data.isAuth = true
      let user = JSON.parse(localStorage.getItem('fb'));
      if (user) {
        this.data.me = user
      }
    }
    else {
      this.data.isAuth = false
    }
  },


}