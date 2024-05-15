import lwcRollupPlugin from '@lwc/rollup-plugin';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { string } from 'rollup-plugin-string';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'LWCApp'
  },
  plugins: [
    lwcRollupPlugin(),
    resolve(),
    commonjs(),
    string({
      include: '**/*.css'
    })
  ]
};
