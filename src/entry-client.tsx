import './main.scss'
import { configure } from 'mobx'
import ReactDOM from 'react-dom/client'
import { initLang } from './locale'
import { initRouter } from './router'
import { App } from './App'

async function initializeApp() {
  await initLang()
  initRouter()
  
  configure({
    enforceActions: 'never',
    useProxies: 'ifavailable',
  })

  const root = document.getElementById('root')!
  
  // For SSR, we use hydrateRoot instead of createRoot
  if (root.innerHTML) {
    ReactDOM.hydrateRoot(root, <App />)
  } else {
    ReactDOM.createRoot(root).render(<App />)
  }
}

initializeApp().catch(console.error)