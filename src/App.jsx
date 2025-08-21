import { useState } from "react";
import DisplayDiaryCard from "./components/DisplayDiaryCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Diary />
      <DisplayDiaryCard />
    </div>
  );
}

export default App;
