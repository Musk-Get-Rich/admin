class SessionCache {
  getCache(key) {
    const val = window.sessionStorage.getItem(key)

    if (val && val !== 'undefined') {
      return JSON.parse(val)
    }
  }

  setCache(key, val) {
    window.sessionStorage.setItem(key, JSON.stringify(val))
  }

  removeCache(key) {
    window.sessionStorage.removeItem(key)
  }

  clearCache() {
    window.sessionStorage.clear()
  }
}

export default new SessionCache()
