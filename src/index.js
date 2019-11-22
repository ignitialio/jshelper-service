import JsHelper from './components/JsHelper.vue'

// function to be called when service loaded into web app:
// naming rule: iios_<service_unique_name>
//
global.iios_jshelper = function(Vue) {
  // Warning: component name must be globally unique in your host app
  Vue.component('jshelper', JsHelper)

  let register = () => {
    // EXEAMPLE
    Vue.prototype.$services.emit('app:menu:add', [
      {
        path: '/service-jshelper',
        title: 'JsHelper Service view',
        svgIcon: '$$service(jshelper)/assets/jshelper.svg',
        section: 'Services',
        anonymousAccess: true,
        hideIfLogged: false,
        route: {
          name: 'JsHelper',
          path: '/service-jshelper',
          component: JsHelper
        }
      }
    ])

    let onServiceDestroy = () => {
      Vue.prototype.$services.emit('app:menu:remove', [{
        path: '/service-jshelper'
      }])

      Vue.prototype.$services.emit('service:destroy:jshelper:done')
    }

    Vue.prototype.$services.once('service:destroy:jshelper', onServiceDestroy)
  }

  if (Vue.prototype.$services.appReady) {
    register()
  } else {
    Vue.prototype.$services.once('app:ready', register)
  }
}
