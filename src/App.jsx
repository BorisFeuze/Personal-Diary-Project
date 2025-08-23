import Model from "react-modal";
import { useState } from "react";
import DisplayDiaryCard from "./components/DisplayDiaryCard";
import DiaryForm from "./components/DiaryForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DiaryInfo from "./components/DiaryInfo";

const diaryList = [
  {
    _id: Date.now(),
    title: "learn React",
    date: "2025-08-23",
    imgUrl: "",
    content: "i have to finish my project today",
  },
  {
    _id: Date.now(),
    title: "learn JavaScript",
    date: "2025-08-22",
    imgUrl: "",
    content: "please read all the array-method",
  },
  {
    _id: Date.now(),
    title: "learn HTML & CSS",
    date: "2025-08-21",
    imgUrl: "",
    content: "please read all about Grip & Flex",
  },
];

function App() {
  const [diary, setDiary] = useState(
    JSON.parse(localStorage.getItem("diaryList")) || []
  );
  const [openPopup, setOpenPopup] = useState(false);

  console.log(diary);

  return (
    <div className="bg-slate-200 text-gray-100 flex flex-col h-screen">
      <Navbar setOpenPopup={setOpenPopup} />
      <main className="flex flex-col">
        <Model
          isOpen={openPopup}
          onRequestClose={() => setOpenPopup(false)}
          style={{
            overlay: { background: "black" },
            content: { width: "1140px", height: "550px" },
          }}
        >
          <DiaryForm
            openPopup={openPopup}
            setDiary={setDiary}
            setOpenPopup={setOpenPopup}
          />
        </Model>
        <DisplayDiaryCard diary={diary} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
