const DiaryInfo = ({ newDate, title, content, setOpenInfo, imgUrl }) => {
  // if (!currDiary) return <div>Sorry, no Diary found</div>;
  return (
    <div className="hero bg-base-200 my-auto min-h-[50vh]">
      <div className="flex mb-4">
        <div className="hero-content flex-col lg:flex-row">
          <img
            className="max-w-sm rounded-lg shadow-2xl"
            src={imgUrl}
            alt={title}
          />
        </div>
        <div className="pt-[2rem]">
          <p className="mb-6">{newDate}</p>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-2xl indent-4 ">{content}</p>
        </div>
      </div>
      <button
        className="btn mt-[16rem] cursor-pointer"
        onClick={() => setOpenInfo(false)}
      >
        Close
      </button>
    </div>
  );
};

export default DiaryInfo;
