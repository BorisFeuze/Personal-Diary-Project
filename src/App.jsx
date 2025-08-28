import Modal from "react-modal";
import { useEffect, useState } from "react";
import DisplayDiaryCard from "./components/DisplayDiaryCard";
import DiaryForm from "./components/DiaryForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorMessage from "./components/ErrorMessage";
import { ToastContainer } from "react-toastify";

Modal.setAppElement("#root"); // important for accessibility

function App() {
  const [diary, setDiary] = useState(
    JSON.parse(localStorage.getItem("diaryList")) || []
  );
  const [openPopup, setOpenPopup] = useState(false);
  const [canAccess, setCanAccess] = useState(false);
  const [message, setMessage] = useState("");

  console.log(message);
  console.log(canAccess);

  // If you really want a 1-day lock, uncomment this effect.
  useEffect(() => {
    const onedayInS = 15000;
    // const onedayInS = 1 * 24 * 60 * 60 * 1000;
    setTimeout(() => {
      setCanAccess(true);
    }, onedayInS);
    setCanAccess(false);
    setMessage("");
  }, [diary]);

  return (
    <div className="bg-slate-200 text-gray-100 flex flex-col min-h-screen">
      <Navbar
        setOpenPopup={setOpenPopup}
        canAccess={canAccess}
        setMessage={setMessage}
      />

      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Diary list (self-contained, no props needed) */}
        <DisplayDiaryCard />

        {canAccess ? (
          <Modal
            isOpen={openPopup}
            onRequestClose={() => setOpenPopup(false)}
            style={{
              overlay: { background: "black" },
              content: { width: "1140px", height: "550px", margin: "auto" },
            }}
          >
            <DiaryForm
              openPopup={openPopup}
              setDiary={setDiary}
              setOpenPopup={setOpenPopup}
              // setCanAccess={setCanAccess} pass only if you use the 1-day lock
            />
          </Modal>
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
