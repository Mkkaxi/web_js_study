Vue.use = function(plugin) {
  
}

class Vue {
  constructor() {
    this._installedPlugins
  }
  use(plugin) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }
    // 其他参数
    const args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, plugin, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}