const DiaryInfo = ({ newDate, title, content, setOpenInfo, imgUrl }) => {
  // if (!currDiary) return <div>Sorry, no Diary found</div>;
  return (
    <div className="hero bg-base-200 my-auto min-h-[50vh]">
      <div className="flex mb-4 items-center">
        <div className="hero-content flex-col lg:flex-row w-[12rem]">
          <img
            className="max-w-sm rounded-lg shadow-2xl w-full h-auto object-cover"
            src={imgUrl}
            alt={title}
          />
        </div>
        <div className="">
          <p className="mb-1">{newDate}</p>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-xl indent-4 ">{content}</p>
        </div>
      </div>
      <button
        className="btn mt-[16rem] m6-[3rem]cursor-pointer"
        onClick={() => setOpenInfo(false)}
      >
        Close
      </button>
    </div>
  );
};

export default DiaryInfo;
