/**
 * 主进程配置
 */

import { resolve } from 'path';
import webpack from 'webpack';
import baseConfig from './webpack.base.js';
import { merge } from 'webpack-merge';

const mainConfig = {
  entry: resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
};

export default merge(baseConfig, mainConfig);
