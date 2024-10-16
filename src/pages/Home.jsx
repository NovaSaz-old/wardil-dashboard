import { FaSackDollar } from "react-icons/fa6";
import { PiHandCoinsFill } from "react-icons/pi";
import { TbReceipt2 } from "react-icons/tb";
import { TbPigMoney } from "react-icons/tb";
import DashboardReports from "../components/DashboardReports";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/** Stats */}
      <div className="flex">
        <div className="w-full p-12">
          <div className="flex w-80 rounded-2xl bg-white p-8 drop-shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF5D9] p-4 drop-shadow">
              <FaSackDollar className="rounded-full text-3xl text-[#FFBB38] drop-shadow-sm" />
            </div>
            <div className="mx-4 flex flex-col justify-between">
              <h4 className="text-gray-400 drop-shadow-sm">My Balance</h4>
              <h3 className="text-2xl font-medium drop-shadow-sm">$12,750</h3>
            </div>
          </div>
        </div>
        <div className="w-full p-12">
          <div className="flex w-80 rounded-2xl bg-white p-9 drop-shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-200 p-4 drop-shadow">
              <PiHandCoinsFill className="rounded-full text-3xl text-blue-600 drop-shadow-sm" />
            </div>
            <div className="mx-4 flex flex-col justify-between">
              <h4 className="text-gray-400 drop-shadow-sm">Income</h4>
              <h3 className="text-2xl font-medium drop-shadow-sm">$5,600</h3>
            </div>
          </div>
        </div>
        <div className="w-full p-12">
          <div className="flex w-80 rounded-2xl bg-white p-9 drop-shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFE0EB] p-4 drop-shadow">
              <TbReceipt2 className="rounded-full text-3xl text-[#FF82AC] drop-shadow-sm" />
            </div>
            <div className="mx-4 flex flex-col justify-between">
              <h4 className="text-gray-400 drop-shadow-sm">Expense</h4>
              <h3 className="text-2xl font-medium drop-shadow-sm">$3,460</h3>
            </div>
          </div>
        </div>
        <div className="w-full p-12">
          <div className="flex w-80 rounded-2xl bg-white p-9 drop-shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#DCFAF8] p-4 drop-shadow">
              <TbPigMoney className="rounded-full text-3xl text-[#16DBCC] drop-shadow-sm" />
            </div>
            <div className="mx-4 flex flex-col justify-between">
              <h4 className="text-gray-400 drop-shadow-sm">Total Saving</h4>
              <h3 className="text-2xl font-medium drop-shadow-sm">$7,920</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12">
        <DashboardReports />
      </div>
    </div>
  );
}
