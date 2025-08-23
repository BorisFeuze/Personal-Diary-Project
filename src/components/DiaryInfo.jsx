const DiaryInfo = ({ date, title, content, setOpenInfo, imgUrl }) => {
  return (
    <div>
      <p>{date}</p>
      <h1>{title}</h1>
      <img src={imgUrl} alt={title} />
      <p>{content}</p>
      <button className="" onClick={() => setOpenInfo(false)}>
        Close
      </button>
    </div>
  );
};

export default DiaryInfo;
