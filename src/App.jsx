import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import DisplayDiaryCard from "./components/DisplayDiaryCard";
import Navbar from './components/shared/Navbar';
import Diary from './components/Diary';
import Hero from "./components/Hero";
import Footer from './components/shared/Footer';
import { Outlet } from 'react-router';



function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <Routes>
          {/*homepage */}
          <Route path="/" element={<Hero />} />

          {/*other pages */}
            <Route path="/DiaryCard" element={<DisplayDiaryCard />} />
            <Route path="/Diary" element={<Diary />} />
            {/* <Route path="/diary/new" element={<NewDiary />} /> */}
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
