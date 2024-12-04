class SessionCache {
  getCache(key) {
    const val = window.localStorage.getItem(key)

    if (val && val !== 'undefined') {
      return JSON.parse(val)
    }
  }

  setCache(key, val) {
    window.localStorage.setItem(key, JSON.stringify(val))
  }

  removeCache(key) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new SessionCache()
