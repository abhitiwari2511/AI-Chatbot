import { useState } from "react";
import { generateAnswer } from "../utils/fetch";
import { FaArrowUp } from "react-icons/fa";

const Dashboard = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div className="bg-zinc-900 flex justify-center p-8 flex-col items-center h-screen w-screen">
      <h1 className="text-white text-2xl sm:text-4xl font-bold">AI Chat Bot</h1>
      <div className="rounded-md overflow-auto bg-zinc-800 text-white p-8 h-[60%] w-[80%] sm:h-[70%] sm:w-[50%] m-6 sm:m-3">
        <pre className="text-sm sm:text-md whitespace-pre-wrap break-words">
          {answer}
        </pre>
      </div>
      <div className="flex justify-between items-center sm:w-[50%] rounded-full">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-white text-sm sm:text-md m-3 w-full bg-zinc-800 rounded-full p-3"
          placeholder="Ask Anything..."
        />
        <button
          onClick={() => { generateAnswer(input, setAnswer); setInput("") }}
          className="text-xl p-3 bg-white hover:cursor-pointer rounded-full"
        >
          <FaArrowUp />
        </button>
      </div>
      <div>
        <p className="text-white text-sm sm:text-md font-bold mt-2">
          Made with ❤️ by{" Abhishek"}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
