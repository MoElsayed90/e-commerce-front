import { createRoot } from 'react-dom/client'
import AppRoutes from '@routes/AppRoutes';
import { Provider } from 'react-redux';
import store from '@store/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@styles/global.css"

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>

<AppRoutes/>
  </Provider>

)
