import { useState } from "react";
import DisplayDiaryCard from "./components/DisplayDiaryCard";
import DiaryForm from "./components/DiaryForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-200 text-gray-100 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col">
        <DiaryForm />
        <DisplayDiaryCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
