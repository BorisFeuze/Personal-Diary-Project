const Navbar = ({ setOpenPopup, canAccess }) => {
  return (
    <nav className="bg-blue-200 flex justify-between px-[5rem] items-center font-bold py-[1rem] text-green-800 fixed w-full">
      <div>
        <img src="" alt="" />
        <h1>Personal Diary</h1>
      </div>
      <button
        className={`${
          canAccess
            ? "bg-amber-400 hover:bg-amber-300 active:bg-amber-200 cursor-pointer"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        } border-1 border-black p-[0.5rem] rounded`}
        onClick={canAccess ? () => setOpenPopup(true) : ""}
      >
        New Diary
      </button>
    </nav>
  );
};

export default Navbar;
