const Gateway = require('@ignitial/iio-services').Gateway
const config = require('./config')

const run = require('./user')

class JsHelper extends Gateway {
  constructor(options) {
    super(options)
  }

  // run user function provided when building related Docker image
  // ***************************************************************************
  fct() {
    /* @_POST_ */
    return fct.apply(this, arguments)
  }
}

// instantiate service with its configuration
const jshelper = new JsHelper(config)

jshelper._init().then(() => {
  console.log('service [' + jshelper.name + '] initialization done with options ',
    jshelper._options)
}).catch(err => {
  console.error('initialization failed', err)
  process.exit(1)
})
