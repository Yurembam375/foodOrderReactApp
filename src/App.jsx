import Cart from "./componet/Cart";
import Checkout from "./componet/Checkout";
import Header from "./componet/Header";
import Meal from "./componet/Meal";
import { CartContextProvider } from "./store/CartContex";
import { UserProgessContextProvider } from "./store/UserProgessContex";
function App() {
  return (
    <UserProgessContextProvider>
      <CartContextProvider>
        <Header />
        <Meal />
        <Cart/>
        <Checkout/>
      </CartContextProvider>
    </UserProgessContextProvider>
  );
}

export default App;
