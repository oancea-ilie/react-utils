/* eslint-disable import/no-unused-modules */
/* eslint-disable import/no-extraneous-dependencies */
import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ include: '**/*.svg' }), react()],
  resolve: {
    alias: [
      {
        find: '@fonts',
        replacement: path.resolve(__dirname, 'src/assets/fonts'),
      },
      {
        find: '@animations',
        replacement: path.resolve(__dirname, 'src/assets/animations'),
      },
      {
        find: '@images',
        replacement: path.resolve(__dirname, 'src/assets/images'),
      },
      {
        find: '@svgs',
        replacement: path.resolve(__dirname, 'src/assets/svgs'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
      {
        find: '@joy',
        replacement: path.resolve(__dirname, 'src/joy'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/constants'),
      },
      {
        find: '@typescript',
        replacement: path.resolve(__dirname, 'src/typescript'),
      },
      {
        find: '@api',
        replacement: path.resolve(__dirname, 'src/api'),
      },
      {
        find: '@store',
        replacement: path.resolve(__dirname, 'src/store'),
      },
    ],
  },
});
