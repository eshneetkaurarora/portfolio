import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import RouteScroll from "./components/RouteScroll";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import ResumeCoach from "./pages/ResumeCoach";
import TripDiaries from "./pages/TripDiaries";
import TripDiaryDetail from "./pages/TripDiaryDetail";
import WhiteboardPost from "./pages/WhiteboardPost";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RouteScroll />
        <div className="grain min-h-screen bg-bg text-text">
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume-coach" element={<ResumeCoach />} />
              <Route path="/writing/whiteboard-to-shipped-feature" element={<WhiteboardPost />} />
              <Route path="/trip-diaries" element={<TripDiaries />} />
              <Route path="/trip-diaries/:id" element={<TripDiaryDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
