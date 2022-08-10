import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
            <Cart />
            <div>anothergi </div>
      <Header />
    </CartProvider>
  );
}

export default App;
