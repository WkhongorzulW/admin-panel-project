import "./App.css";
import { ProductContextProvider } from "./contexts/ProductContext";
import { UserContextProvider } from "./contexts/UserContext";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <UserContextProvider>
          <Home />
        </UserContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
