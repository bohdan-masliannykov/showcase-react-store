import ReactDOM from 'react-dom/client'
import { AppProvider } from './providers/app.provider.tsx';
import "@/shared/assets/styles/globals.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider />
)
