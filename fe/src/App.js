import "./App.css";
import { ProductContextProvider } from "./contexts/ProductContext";
import { UserContextProvider } from "./contexts/UserContext";
import Home from "./pages/Home";
import { UserRoleContextProvider } from "./contexts/UserRoleContext";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <UserContextProvider>
          <UserRoleContextProvider>
            <Home />
          </UserRoleContextProvider>
        </UserContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
