import vuetifyMediaQuery from './vuetify-media-query';
import bootstrapMediaQuery from './bootstrap-media-query';

const VueMediaQueryMixin = {
  install(Vue, options) {

    // var vmqm = Vue.component('vmqm', {
    //   render(h){
    //     return h(
    //       'div', 
    //       {
    //         style: {
    //           background: 'yellow',
    //           position: 'fixed',
    //           'z-index': 99999,
    //           bottom: 0,
    //           right: 0
    //         }
    //       }, 
    //       [
    //         h('small', `wXS - ${ this.wXS } | wSM - ${ this.wSM } | wMD - ${ this.wMD } | wLG - ${ this.wLG } | width - ${ this.windowWidth } |`)
    //       ]
    //     )
    //   }
    // });

    Vue.mixin({
      // components: {
      //   vmqm
      // },
      data: function () {
        return {
          windowWidth: 0,
          windowHeight: 0,
          wXS: false,
          wSM: false,
          wMD: false,
          wLG: false
        }
      },
      mounted() {
        this.$nextTick(function () {
          window.addEventListener('resize', this.getWindowWidth);
          window.addEventListener('resize', this.getWindowHeight);
          this.getWindowWidth()
          this.getWindowHeight()
        })
      },
      methods: {
        getWindowWidth(event) {
          let w = document.documentElement.clientWidth;
          this.windowWidth = w;
          let mediaQuery = {};

          // default
          if(!options) 
            mediaQuery = vuetifyMediaQuery;

          // vuetify
          if(options.framework === 'vuetify') 
            mediaQuery = vuetifyMediaQuery;
          
          // bootstrap
          if(options.framework === 'bootstrap') 
            mediaQuery = bootstrapMediaQuery;

          this.wXS = w < mediaQuery.xs.max;
          this.wSM = w >= mediaQuery.sm.min && w < mediaQuery.sm.max;
          this.wMD = w >= mediaQuery.md.min && w < mediaQuery.md.max;
          this.wLG = w >= mediaQuery.lg.min && w < mediaQuery.lg.max;
          this.wXL = w >= mediaQuery.xl.min;
        },

        getWindowHeight(event) {
          let h = document.documentElement.clientHeight;
          this.windowHeight = h;
        }
      },
      beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth);
        window.removeEventListener('resize', this.getWindowHeight);
      }
    })
  }
};

export default VueMediaQueryMixin;
