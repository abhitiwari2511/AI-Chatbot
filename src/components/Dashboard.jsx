import { useState } from "react";
import { generateAnswer } from "../utils/fetch";
import { FaArrowUp } from "react-icons/fa";

const Dashboard = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div className="bg-zinc-900 flex justify-center flex-col items-center h-screen w-screen">
      <h1 className="text-white text-2xl sm:text-4xl font-bold">AI Chat Bot</h1>
      <div className="rounded-md scroll-auto bg-zinc-800 text-white p-8 h-[60%] w-[70%] sm:h-[70%] sm:w-[40%] m-6 sm:m-3">
        {answer}
      </div>
      <div className="flex justify-between items-center sm:w-[50%] rounded-full">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-white text-md m-3 w-full bg-zinc-800 rounded-full p-3"
          placeholder="Ask Anything..."
        />
        <button
          onClick={() => generateAnswer(input, setAnswer)}
          className="text-xl p-3 bg-white hover:cursor-pointer rounded-full"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
