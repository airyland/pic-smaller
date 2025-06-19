import { build } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function buildEntryServer() {
  try {
    await build({
      build: {
        ssr: true,
        outDir: 'dist',
        lib: {
          entry: path.resolve(__dirname, 'src/entry-server.tsx'),
          name: 'entry-server',
          fileName: 'entry-server',
          formats: ['es']
        },
        rollupOptions: {
          external: ['react', 'react-dom/server'],
          output: {
            globals: {
              'react': 'React',
              'react-dom/server': 'ReactDOMServer'
            }
          }
        }
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
      }
    })
    console.log('✓ Built entry-server.js for SSR')
  } catch (error) {
    console.error('Failed to build entry-server:', error)
  }
}

buildEntryServer()