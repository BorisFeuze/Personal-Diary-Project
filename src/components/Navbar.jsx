const Navbar = ({ setOpenPopup }) => {
  return (
    <nav className="bg-blue-200 flex justify-between px-[5rem] items-center font-bold py-[0.5rem] text-green-800 fixed w-full">
      <div>
        <img src="" alt="" />
        <h1>Personal Diary</h1>
      </div>
      <button
        className="bg-amber-400 hover:bg-amber-300 active:bg-amber-200 border-1 border-black p-[0.5rem] rounded-xl"
        onClick={() => setOpenPopup((prev) => !prev)}
      >
        New Diary
      </button>
    </nav>
  );
};

export default Navbar;
