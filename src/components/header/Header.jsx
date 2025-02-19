/* eslint-disable react/prop-types */
import Timer from "../Timer";

export default function Header({ timeLeft, setTimeLeft }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-gray-800 text-2xl font-semibold">
        Interactive Quiz Application
      </h1>
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
    </div>
  );
}
