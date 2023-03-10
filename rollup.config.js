import vue from 'rollup-plugin-vue';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import css from "rollup-plugin-import-css";
export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: [
        {
            format: 'esm',
            file: 'dist/vueticol.mjs'
        },
        {
            format: 'cjs',
            file: 'dist/vueticol.js'
        },
    ],
    plugins: [
        vue(),
        peerDepsExternal(),
        css(),
    ],
};