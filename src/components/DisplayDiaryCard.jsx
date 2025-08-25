import DiaryCard from "./DiaryCard";

const DisplayDiaryCard = ({ diary, canAccess, message }) => {
  console.log(message);
  return (
    <ul className="text-black h-auto flex flex-col items-center justify-center mt-[6rem]">
      {canAccess ? (
        diary.map((d) => {
          return <DiaryCard key={d._id} {...d} />;
        })
      ) : (
        <h1>{message}</h1>
      )}
    </ul>
  );
};

export default DisplayDiaryCard;
