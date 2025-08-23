const DiaryCard = ({ _id, title, newDate, imgUrl, message }) => {
  console.log(title);
  return (
    <li className="mb-3 w-1/3  ">
      <button className="bg-green-600 w-full p-4 rounded-4xl hover:bg-green-400">
        <p>{newDate}</p>
        <h2 className="font-bold text-black">{title}</h2>
      </button>
    </li>
  );
};

export default DiaryCard;
