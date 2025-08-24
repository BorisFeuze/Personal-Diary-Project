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
  const today = dayjs();
  // const diff = 0;
  const [diary, setDiary] = useState(
    JSON.parse(localStorage.getItem("diaryList")) || []
  );
  const [openPopup, setOpenPopup] = useState(false);
  const [openNewDiary, setOpenNewDiary] = useState(true);
  const [saveDiary, setSaveDiary] = useState(today);

  useEffect(() => {
    console.log(today);
    const newDate = today.add(1, "day");
    console.log(newDate);
    setSaveDiary(newDate);
    // diff = saveDiary - today;
    // console.log(diff);
    return () => {};
  }, [diary]);

  // if (diff < 0) {
  //   setOpenNewDiary(true);
  // } else {
  //   toast.error(
  //     `For today it is not possible to save new Diary, Please come again tomorrow`
  //   );
  //   setOpenNewDiary(false);
  // }

  return (
    <div className="bg-slate-200 text-gray-100 flex flex-col h-screen">
      <Navbar setOpenPopup={setOpenPopup} openNewDiary={openNewDiary} />
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
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
