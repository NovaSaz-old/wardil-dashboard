import { NavLink } from "react-router-dom";
import { HiMiniHome } from "react-icons/hi2";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { BsCreditCardFill } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";

export default function SideBar() {
  return (
    <>
      {/** sticky and top allows the navbar to stick on the top side of the parrent component */}
      <div className="sticky top-0 flex min-h-screen flex-col justify-between bg-white shadow">
        <div className="flex w-64 justify-center py-10">
          <ul className="">
            <li className="my-8 drop-shadow-sm">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center rounded bg-blue-100 p-2 text-xl text-blue-600 drop-shadow"
                    : "flex items-center p-2 text-xl"
                }
              >
                <HiMiniHome />
                <p className="ml-8">Home</p>
              </NavLink>
            </li>
            <li className="my-8 drop-shadow-sm">
              <NavLink
                to="/campaign"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center rounded bg-blue-100 p-2 text-xl text-blue-600 drop-shadow"
                    : "flex items-center p-2 text-xl"
                }
              >
                <FaFileInvoiceDollar />
                <p className="ml-8">Campaign</p>
              </NavLink>
            </li>
            <li className="my-8 drop-shadow-sm">
              <NavLink
                to="/accounts"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center rounded bg-blue-100 p-2 text-xl text-blue-600 drop-shadow"
                    : "flex items-center p-2 text-xl"
                }
              >
                <MdAccountCircle />
                <p className="ml-8">Accounts</p>
              </NavLink>
            </li>
            <li className="my-8 drop-shadow-sm">
              <NavLink
                to="/volunteers"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center rounded bg-blue-100 p-2 text-xl text-blue-600 drop-shadow"
                    : "flex items-center p-2 text-xl"
                }
              >
                <IoStatsChart />
                <p className="ml-8">Volunteers</p>
              </NavLink>
            </li>
            <li className="my-8 drop-shadow-sm">
              <NavLink
                to="/credit-cards"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center rounded bg-blue-100 p-2 text-xl text-blue-600 drop-shadow"
                    : "flex items-center p-2 text-xl"
                }
              >
                <BsCreditCardFill />
                <p className="ml-8">Credit Cards</p>
              </NavLink>
            </li>
            <li className="my-8 drop-shadow-sm">
              <NavLink
                to="/donations"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center rounded bg-blue-100 p-2 text-xl text-blue-600 drop-shadow"
                    : "flex items-center p-2 text-xl"
                }
              >
                <FaDonate />
                <p className="ml-8">Donations</p>
              </NavLink>
            </li>
            <li className="my-8 drop-shadow-sm">
              <NavLink
                to="/what-we-do"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center rounded bg-blue-100 p-2 text-xl text-blue-600 drop-shadow"
                    : "flex items-center p-2 text-xl"
                }
              >
                <FaTools />
                <p className="ml-8">What We Do</p>
              </NavLink>
            </li>
            <li className="my-8 drop-shadow-sm">
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center rounded bg-blue-100 p-2 text-xl text-blue-600 drop-shadow"
                    : "flex items-center p-2 text-xl"
                }
              >
                <MdContactPhone />
                <p className="ml-8">Contact Us</p>
              </NavLink>
            </li>
            <li className="my-8 drop-shadow-sm">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center rounded bg-blue-100 p-2 text-xl text-blue-600 drop-shadow"
                    : "flex items-center p-2 text-xl"
                }
              >
                <FaQuestionCircle />
                <p className="ml-8">About Us</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div>Profile</div>
      </div>
    </>
  );
}
