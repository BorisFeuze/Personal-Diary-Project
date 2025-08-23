import { useState } from "react";

const DiaryForm = ({ openPopup, setDiary, setOpenPopup }) => {
  const [formDiary, setFormDiary] = useState({
    title: "",
    newDate: "",
    imgUrl: "",
    message: "",
  });
  const handleChange = (event) => {
    console.log(event.target.value);
    setFormDiary((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const newDiary = { _id: Date.now(), ...formDiary };
      console.log(newDiary);
      setDiary((prev) => {
        const updateDiary = [newDiary, ...prev];
        localStorage.setItem("diaryList", JSON.stringify(updateDiary));
        return updateDiary;
      });
      setFormDiary({ title: "", newDate: "", imgUrl: "", message: "" });
      setOpenPopup(false);
    } catch (error) {
      alert(error.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-white flex justify-center mr-[5rem] py-15 text-black">
      {openPopup && (
        <form
          onSubmit={handleSubmit}
          className="items-start flex flex-col gap-y-5 w-2/3"
        >
          <label className="flex flex-row items-center justify-center w-full">
            <span className="text-ms  text-center w-[5rem]">Title</span>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              value={formDiary.title}
              placeholder="Add a title"
              className="flex-1 border rounded px-2 py-2 text-sm w-full"
            />
          </label>
          <label className="flex flex-row items-center justify-center w-full">
            <span className="text-ms text-center w-[5rem]">Date</span>
            <input
              onChange={handleChange}
              type="date"
              name="newDate"
              value={formDiary.newDate}
              className="flex-1 border rounded px-2 py-2 text-sm w-full"
            />
          </label>
          <label className="flex flex-row  items-center justify-center w-full">
            <span className="text-ms text-center w-[5rem]">Image</span>
            <input
              onChange={handleChange}
              type="text"
              name="imgUrl"
              value={formDiary.imgUrl}
              placeholder="Add a image"
              className="flex-1 border rounded px-2 py-2 text-sm w-full"
            />
          </label>
          <label className="flex flex-row items-center justify-center w-full">
            <span className="text-ms text-center w-[5rem]">Content</span>
            <textarea
              onChange={handleChange}
              type="text"
              name="message"
              value={formDiary.message}
              placeholder="Add a Content"
              className="flex-1 border rounded px-2 py-2 text-sm w-full h-[8rem]"
            ></textarea>
          </label>
          <div className="flex flex-row justify-center gap-x-10 ml-[3em] w-full">
            <buttton
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 active:bg-red-300"
              onClick={() => setOpenPopup(false)}
            >
              {" "}
              Cancel
            </buttton>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Diary
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default DiaryForm;
