import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
