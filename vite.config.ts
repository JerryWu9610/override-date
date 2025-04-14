import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'MyLib',
      formats: ['iife'],
      fileName: (format) => `my-lib.${format}.js`
    }
  }
}); 