import DiaryCard from "./DiaryCard";

const DisplayDiaryCard = ({ diary }) => {
  console.log(diary);
  return (
    <ul className="text-black h-auto flex flex-col items-center justify-center my-[7rem]">
      {diary.map((d) => {
        return <DiaryCard key={d._id} {...d} />;
      })}
    </ul>
  );
};

export default DisplayDiaryCard;
