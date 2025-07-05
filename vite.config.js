import { defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return defineConfig({
    plugins: [ react(), tailwindcss() ],
    define: {
      // "process.env.VITE_KEY": JSON.stringify(process.env.VITE_KEY)
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    server: {
      port: 5000,
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  })
}
process.env.API_URL