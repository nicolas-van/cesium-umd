
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [{
  input: 'index.mjs',
  output: {
    file: 'dist/cesium-umd.umd.js',
    format: 'umd',
    name: 'Cesium'
  },
  plugins: [
    nodeResolve(),
    commonjs()
  ]
}]
