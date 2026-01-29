import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

const rubyPlugins = RubyPlugin().map((plugin) => {
  if (plugin && typeof plugin === 'object' && typeof plugin.config === 'function') {
    const original = plugin.config
    plugin.config = function configWithContext(userConfig, env) {
      return original.call(plugin, userConfig, env)
    }
  }

  return plugin
})

export default defineConfig({
  plugins: rubyPlugins,
})
