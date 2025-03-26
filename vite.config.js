import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const config = {
    plugins: [react()],
    base: './',
    server: {
      host: true,
      proxy: {
        '/api': {
          target: loadEnv(mode, process.cwd(), '').VITE_OPEN_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true,
        },
      },
    },
    resolve: {
      alias: [
        { find: '@', replacement: '/src' },
        { find: '@assets', replacement: '/src/assets' },
        { find: '@components', replacement: '/src/components' },
        { find: '@constant', replacement: '/src/constant' },
        { find: '@hooks', replacement: '/src/hooks' },
        { find: '@api', replacement: '/src/api' },
        { find: '@context', replacement: '/src/context' },
        { find: '@services', replacement: '/src/services' },
        { find: '@pages', replacement: '/src/pages' },
        { find: '@routes', replacement: '/src/routes' },
        { find: '@schema', replacement: '/src/schema' },
        { find: '@styles', replacement: '/src/styles' },
        { find: '@utils', replacement: '/src/utils' },
        { find: '@states', replacement: '/src/states' },
      ],
    },
  };

  return defineConfig(config);
};
