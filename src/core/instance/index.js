/**
 * lxy
 * vue构造函数
 */
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue) ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  //lxy：重要代码，初始化
  this._init(options)
}

initMixin(Vue) //通过该方法给vue添加_init方法
stateMixin(Vue) 
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
