import vue from 'rollup-plugin-vue';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-buble';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy-assets';
import includePaths from 'rollup-plugin-includepaths';
import alias from '@rollup/plugin-alias';

import pkg from './package.json';

const extensions = ['.js', '.vue'];
const config = {
    input: 'src/lib/index.js',
    external: Object.keys(Object.assign(pkg.peerDependencies, pkg.dependencies)),
    output: [{
        format: 'cjs',
        name: 'vue-color-gradient-picker', // umd and iife for var name = (function(){})()
        entryFileNames: 'index-[format].js',
        dir: 'dist',
        sourcemap: true,
    }, {
        format: 'es',
        dir: 'dist',
        entryFileNames: 'index-[format].js',
        sourcemap: true,
        name: 'vue-color-gradient-picker',
    }],
    plugins: [
        vue(),
        scss({
            output: 'dist/index.css',
        }),
        nodeResolve({
            mainFields: ['module', 'main', 'browser'],
            extensions,
        }),
        commonjs(),
        babel({
            exclude: './node_modules/**',
            extensions,
            objectAssign: 'Object.assign',
        }),
        json(),
        copy({
            assets: [
                // You can include directories
                'src/lib/assets',
            ],
        }),
        includePaths({
            paths: ['src'],
            extensions: ['.js', '.vue'],

        }),
        alias({
            entries: {
                ['@']: __dirname  + '/src'
            }
        }),
    ],
};

export default config;
