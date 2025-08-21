const DiaryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.name.value;
    if (!value) return;
    console.log(value);
  };

  return (
    <dialog open>
      <form
        onSubmit={handleSubmit}
        className="mb-4 flex flex-col justify-center"
      >
        <label>
          <span className="text-ms">Title</span>
          <input
            type="text"
            name="title"
            placeholder="Add a title"
            className="flex-1 border rounded px-2 py-1 mr-2"
          />
        </label>
        <label>
          <span className="text-ms">Date</span>
          <input
            type="date"
            name="newDate"
            className="flex-1 border rounded px-2 py-1 mr-2"
          />
        </label>
        <label>
          <span className="text-ms">Image</span>
          <input
            type="text"
            name="imgUrl"
            placeholder="Add a image"
            className="flex-1 border rounded px-2 py-1 mr-2"
          />
        </label>
        <label>
          <span className="text-ms">Content</span>
          <textarea
            type="text"
            name="message"
            placeholder="Add a Content"
            className="border-2 border-black"
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add New Diary
        </button>
      </form>
    </dialog>
  );
};

export default DiaryForm;
