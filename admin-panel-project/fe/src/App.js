import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserForm from "./components/UserForm";
import Home from "./pages/Home";
import Users from "./pages/User";

function App() {
  return (
    <div className="App">
      <h1>Admin panel project</h1>
      <Home />
      <Routes>
        <Route path="/users" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
