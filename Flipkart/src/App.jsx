import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Footer } from "./component/footer";
import { FruitName } from "./pages/map";
import { WatchPage } from "./pages/watchpage";
import  LiveGreenClock  from "./component/livegreenclock";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/map" element={<FruitName />} />
          <Route path="/watchpage" element={<WatchPage />} />
          <Route path="/livegreenclock" element={<LiveGreenClock />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
