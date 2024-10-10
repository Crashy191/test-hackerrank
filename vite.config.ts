import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      port: Number(env.VITE_REACT_APP_PORT),
    },
    plugins: [react()]

  }

})
