import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./components/Menu";
import { Search } from "./pages/Search";
import { TokenPage } from "./pages/TokenPage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/:id" element={<TokenPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
