
import Model from "react-modal";
import { useEffect, useState } from "react";
import DisplayDiaryCard from "./components/DisplayDiaryCard";
import DiaryForm from "./components/DiaryForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { toast, ToastContainer } from "react-toastify";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [diary, setDiary] = useState(
    JSON.parse(localStorage.getItem("diaryList")) || []
  );
  const [openPopup, setOpenPopup] = useState(false);
  const [canAccess, setCanAccess] = useState(false);
  const [message, setMessage] = useState("");

  console.log(message);
  console.log(canAccess);

  useEffect(() => {
    const onedayInS = 10000;
    // const onedayInS = 1 * 24 * 60 * 60 * 1000;
    setTimeout(() => {
      setCanAccess(true);
    }, onedayInS);
    setCanAccess(false);
    setMessage("");
  }, [diary]);

  return (
    <div className="bg-slate-200 text-gray-100 flex flex-col h-screen">
      <Navbar
        setOpenPopup={setOpenPopup}
        canAccess={canAccess}
        setMessage={setMessage}
      />

      <main className="flex flex-col">
        <DisplayDiaryCard diary={diary} canAccess={canAccess} />
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
              setCanAccess={setCanAccess}
            />
          </Model>
        ) : (
          <ErrorMessage message={message} />
        )}
      </main>
      <Footer />
      <ToastContainer position="top-center" />
    </div>
  );
}


export default App;
