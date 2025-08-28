
import { useState } from "react";
import Model from "react-modal";
import DiaryInfo from "./DiaryInfo";
const DiaryCard = ({ _id, title, newDate, imgUrl, message }) => {
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <li className="mb-3 w-[35rem] h-[]">
      <button
        className="bg-blue-400 w-full p-4 rounded-4xl hover:bg-blue-300 cursor-pointer"
        onClick={() => setOpenInfo(true)}
      >
        <div className="flex flex-row justify-center items-center px-[4rem]">
          <div className="w-[7rem]">
            <img
              className="w-full h-auto object-cover"
              src={imgUrl}
              alt={title}
            />
          </div>
          <div className="w-full">
            <p className="text-sm">{newDate}</p>
            <h2 className="font-bold text-black">{title}</h2>
          </div>
        </div>
      </button>
      <Model
        isOpen={openInfo}
        onRequestClose={() => setOpenInfo(false)}
        style={{
          overlay: { background: "black" },
          content: { width: "1140px", height: "550px" },
        }}
      >
        <DiaryInfo
          title={title}
          newDate={newDate}
          imgUrl={imgUrl}
          content={message}
          setOpenInfo={setOpenInfo}
        />
      </Model>
    </li>

  );

};

export default DiaryCard;
