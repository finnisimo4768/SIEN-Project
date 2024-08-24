import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
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
    </>
  );
};

export default Navbar;
