const DiaryInfo = ({ date, title, content, setOpenInfo, imgUrl }) => {
  // if (!currDiary) return <div>Sorry, no Diary found</div>;
  return (
    <div className="hero bg-base-200 my-auto min-h-[50vh]">
      <div className="hero-content flex-col lg:flex-row">
        <img
          className="max-w-sm rounded-lg shadow-2xl"
          src={imgUrl}
          alt={title}
        />
      </div>
      <p className="mb-6">{date}</p>
      <h1 className="text-5xl font-bold mb-[15rem]">{title}</h1>
      <p className="text-3xl indent-4 mt-[10rem]">{content}</p>
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
