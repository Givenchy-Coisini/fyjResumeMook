/**
 * 基础公共配置
 */
import { join } from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const resolve = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  alias: {
    '@src': join(__dirname, '../', 'app/renderer'),
  },
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.(jpg|png|jpeg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
          },
        },
      ],
    },
  ],
};
export const plugins = [new CleanWebpackPlugin()];
