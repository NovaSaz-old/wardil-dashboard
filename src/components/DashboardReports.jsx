import marketing from "../assets/marketing.svg";
import group from "../assets/group.svg";
import salary from "../assets/salary.svg";
import increase from "../assets/increase.svg";
import { IoSaveOutline } from "react-icons/io5";

function DashboardReports() {
  return (
    <div className="rounded-3xl bg-white px-12 py-12 drop-shadow-sm">
      <button className="mb-12 ml-auto flex items-center justify-center rounded-lg bg-blue-600 p-3 px-6 font-medium text-white">
        <IoSaveOutline className="mr-2" />
        Edit
      </button>
      <div className="grid grid-cols-2 gap-16">
        <div className="flex items-center rounded-3xl bg-blue-200 p-12 drop-shadow">
          <img
            src={marketing}
            alt="marketing"
            className="rounded-3xl bg-blue-300 px-10 py-4 drop-shadow"
          />
          <div className="mx-10 flex flex-col">
            <h4 className="text-xl font-medium">10000+</h4>
            <p className="text-xl">Fundraising campaign of all times</p>
          </div>
        </div>
        <div className="flex items-center rounded-3xl bg-green-200 p-12 drop-shadow">
          <img
            src={group}
            alt="marketing"
            className="rounded-3xl bg-green-900 px-10 py-4 drop-shadow"
          />
          <div className="mx-10 flex flex-col">
            <h4 className="text-xl font-medium">10000+</h4>
            <p className="text-xl">Fundraising campaign of all times</p>
          </div>
        </div>
        <div className="flex items-center rounded-3xl bg-[#E0DAB9] p-12 drop-shadow">
          <img
            src={salary}
            alt="marketing"
            className="rounded-3xl bg-yellow-200 px-10 py-4 drop-shadow"
          />
          <div className="mx-10 flex flex-col">
            <h4 className="text-xl font-medium">10000+</h4>
            <p className="text-xl">Fundraising campaign of all times</p>
          </div>
        </div>
        <div className="flex items-center rounded-3xl bg-[#EEDDDC] p-12 drop-shadow">
          <img
            src={increase}
            alt="marketing"
            className="rounded-3xl bg-[#FFC2B4] px-10 py-4 drop-shadow"
          />
          <div className="mx-10 flex flex-col">
            <h4 className="text-xl font-medium">10000+</h4>
            <p className="text-xl">Fundraising campaign of all times</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardReports;
