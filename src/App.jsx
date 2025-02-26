import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import HistoryPage from "./pages/HistoryPage";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App flex items-center justify-center h-screen px-[12rem] py-[1rem]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/quiz-complete" element={<Scoreboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
