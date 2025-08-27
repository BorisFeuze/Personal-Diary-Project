import { Link } from "react-router-dom";

const DiaryCard = () => {
  return (
    <div className="card w-96 bg-base-100 card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">My First Diary</h2>
        <p>Write your first diary from now.</p>
        <div className="justify-end card-actions">
          <Link
            to="/Diary" className="rounded-lg px-3 py-2 text-sm font-medium bg-black text-yellow-50 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
            Write New Diary
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiaryCard;
