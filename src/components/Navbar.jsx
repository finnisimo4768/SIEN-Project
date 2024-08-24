import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
            <div className="text-lg font-semibold">Word Counter</div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`${isOpen ? "block" : "hidden"
                } md:flex px-4 mx-auto font-semibold font-heading space-y-4 md:space-y-0 md:space-x-12`}
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-gray-200 text-white shadow-lg shadow-gray-600"
                      : "hover:text-gray-200"
                  }
                  to="/barchart"
                >
                  Bar Chart
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-gray-200 text-white shadow-lg shadow-gray-600"
                      : "hover:text-gray-200"
                  }
                  to="/"
                >
                  Table
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-gray-200 text-white shadow-lg shadow-gray-600"
                      : "hover:text-gray-200"
                  }
                  to="/simplechart"
                >
                  Simple Chart
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
