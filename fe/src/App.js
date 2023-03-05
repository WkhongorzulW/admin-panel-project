import "./App.css";
import { ProductContextProvider } from "./contexts/ProductContext";
import { UserContextProvider } from "./contexts/UserContext";
import Home from "./pages/Home";
import { UserRoleContextProvider } from "./contexts/UserRoleContext";
import { CategoryContextProvider } from "./contexts/CategoryContext";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <UserContextProvider>
          <UserRoleContextProvider>
            <CategoryContextProvider>
              <Home />
            </CategoryContextProvider>
          </UserRoleContextProvider>
        </UserContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
