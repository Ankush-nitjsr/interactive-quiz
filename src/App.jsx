import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
