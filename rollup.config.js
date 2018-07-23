import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'

const plugins = [
    vue(),
    babel()
]

export default [
    {
        input:'src/Krpano.vue',
        output: {
            file: 'dist/vue-krpano.common.js',
            format: 'cjs'
        },
        plugins
    },
    {
        input:'src/Krpano.vue',
        output: {
            file: 'dist/vue-krpano.esm.js',
            format: 'es',
        },
        plugins
    }
]
