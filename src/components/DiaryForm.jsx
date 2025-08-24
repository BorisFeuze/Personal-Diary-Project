import { useState } from "react";
import { toast } from "react-toastify";
import { validateDiaryForm } from "../utils";
const DiaryForm = ({ openPopup, setDiary, setOpenPopup }) => {
  const [formDiary, setFormDiary] = useState({
    title: "",
    newDate: "",
    imgUrl: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormDiary((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const valErrors = validateDiaryForm(formDiary);
      setErrors(valErrors);
      if (Object.keys(valErrors).length !== 0)
        throw new Error("Missing required fields");

      const newDiary = { _id: Date.now(), ...formDiary };
      toast.success("You have successfully added a new Diary.");
      setDiary((prev) => {
        const updateDiary = [newDiary, ...prev];
        localStorage.setItem("diaryList", JSON.stringify(updateDiary));
        return updateDiary;
      });
      setFormDiary({ title: "", newDate: "", imgUrl: "", message: "" });
      setOpenPopup(false);
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-white flex justify-center mr-[5rem] py-6 text-black">
      {openPopup && (
        <form
          onSubmit={handleSubmit}
          className="items-start flex flex-col gap-y-3 w-2/3"
        >
          <label className="flex flex-row items-center justify-center w-full">
            <span className="text-ms  text-center w-[5rem]">Title</span>
            <div className="w-full">
              <input
                onChange={handleChange}
                type="text"
                name="title"
                value={formDiary.title}
                placeholder="Add a title"
                className="flex-1 border rounded px-2 py-2 text-sm w-full"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title}</p>
              )}
            </div>
          </label>
          <label className="flex flex-row items-center justify-center w-full">
            <span className="text-ms text-center w-[5rem]">Date</span>
            <div className="w-full">
              <input
                onChange={handleChange}
                type="date"
                name="newDate"
                value={formDiary.newDate}
                className="flex-1 border rounded px-2 py-2 text-sm w-full"
              />
              {errors.newDate && (
                <p className="text-red-500 text-sm">{errors.newDate}</p>
              )}
            </div>
          </label>
          <label className="flex flex-row  items-center justify-center w-full">
            <span className="text-ms text-center w-[5rem]">Image</span>
            <div className="w-full">
              <input
                onChange={handleChange}
                type="text"
                name="imgUrl"
                value={formDiary.imgUrl}
                placeholder="Add a image"
                className="flex-1 border rounded px-2 py-2 text-sm w-full"
              />
              {errors.imgUrl && (
                <p className="text-red-500 text-sm">{errors.imgUrl}</p>
              )}
            </div>
          </label>
          <label className="flex flex-row items-center justify-center w-full">
            <span className="text-ms text-center w-[5rem]">Content</span>
            <div className="w-full">
              <textarea
                onChange={handleChange}
                type="text"
                name="message"
                value={formDiary.message}
                placeholder="Add a Content"
                className="flex-1 border rounded px-2 py-2 text-sm w-full h-[8rem]"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
          </label>
          <div className="flex flex-row justify-center gap-x-10 ml-[3em] w-full">
            <buttton
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 active:bg-red-300 cursor-pointer"
              onClick={() => setOpenPopup(false)}
            >
              {" "}
              Cancel
            </buttton>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
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
