// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import command from 'eslint-plugin-command/config'

export default withNuxt(
  command(),
)
