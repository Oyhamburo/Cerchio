import './App.css'
import Router from './pages/Router/Router';
import { CartProvider } from './store/CartContext/CartContext';

function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  )
}

export default App;
