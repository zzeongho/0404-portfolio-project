import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/main";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-100 min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio/:projectId" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
