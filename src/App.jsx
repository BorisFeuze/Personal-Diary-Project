import Model from "react-modal";
import { useEffect, useState } from "react";
import DisplayDiaryCard from "./components/DisplayDiaryCard";
import DiaryForm from "./components/DiaryForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { toast, ToastContainer } from "react-toastify";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

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
  const [canAccess, setCanAccess] = useState(false);
  const [message, setMessage] = useState("");
  console.log(message);
  console.log(canAccess);
  console.log(diary);

  useEffect(() => {
    let timeOut = 0;
    const onedayInS = 5000;
    // const onedayInS = 1 * 24 * 60 * 60 * 1000;
    if (timeOut) {
      setCanAccess(false);
      setMessage(
        "You can save your Diary only once per day, please come black tomorrow"
      );
      toast.error(message);
    } else {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        setCanAccess(true);
      }, onedayInS);
    }
  }, [diary]);

  return (
    <div className="bg-slate-200 text-gray-100 flex flex-col h-screen">
      <Navbar setOpenPopup={setOpenPopup} canAccess={canAccess} />

      <main className="flex flex-col">
        {canAccess ? (
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
        ) : (
          <h1>{message}</h1>
        )}
        <DisplayDiaryCard
          diary={diary}
          message={message}
          canAccess={canAccess}
        />
      </main>
      <Footer />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
