import MainPage from "./pages/main";
import { Route, Routes } from "react-router-dom";
import CardDetailPage from "./pages/card-detail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:productId" element={<CardDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
