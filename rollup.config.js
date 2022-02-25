import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy'

const plugins = [
    peerDepsExternal(),
    typescript(),
    copy({
        targets: [
            {src: 'src/worker/**', dest: 'dist/worker'}
        ]
    })
]
export default [
    {
        input: './src/index.ts',
        output: {
            file: './dist/index.esm.js',
            format: 'esm',
        },
        external:['worker-threads', 'node-fetch'],
        plugins: [...plugins],
    },
    {
        input: './src/index.ts',
        output: {
            file: './dist/index.js',
            format: 'cjs',
        },
        external:['worker-threads', 'node-fetch'],
        plugins: [...plugins],
    }
]