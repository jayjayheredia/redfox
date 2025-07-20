import { defineConfig } from 'vite';

export default defineConfig({
  base: '/redfox/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        login: 'public/login.html',
        admin: 'public/admin.html',
      }
    }
  }
});