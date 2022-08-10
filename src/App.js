import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
            <Cart />
            <div>another</div>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
