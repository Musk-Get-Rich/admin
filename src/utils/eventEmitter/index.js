class EventEmitter {
  constructor() {
    this.listeners = {
      // 登录过期
      'Login_Expired': [],
      // 关闭加载弹窗
      'close_loading': []
    }
  }

  on(eventName, handleFun) {
    this.listeners[eventName].push(handleFun)
  }

  emit(eventName, ...args) {
    this.listeners[eventName].forEach(listener => listener(args))
  }
}

const eventEmitter = new EventEmitter()

export {
  eventEmitter
}
