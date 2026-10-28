import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Footer } from "./component/footer";
import { FruitName } from "./pages/map";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/map" element={<FruitName />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
