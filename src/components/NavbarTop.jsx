import { LuBellDot } from "react-icons/lu";
import PP from "../assets/pp.jpg";

export default function NavbarTop() {
  return (
    <div className="flex items-center justify-between bg-white px-8 py-4 drop-shadow-sm">
      <h6>Overview</h6>
      <div className="flex items-center justify-between">
        <button className="mx-4 rounded-full p-3">
          <LuBellDot className="text-xl text-[#FE5C73] hover:text-[#ff2e4d] hover:drop-shadow" />
        </button>
        <img src={PP} className="h-16 rounded-full drop-shadow" />
      </div>
    </div>
  );
}
