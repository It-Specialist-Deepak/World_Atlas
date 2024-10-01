import { useState } from "react";
import { NavLink } from "react-router-dom";

const Headers = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function to open/close the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" onClick={closeMenu}>
            <div className="text-3xl font-bold flex items-center gap-4">
              <img src="/world.png" className="w-9" alt="World Atlas Logo" />
              <h1>WorldAtlas</h1>
            </div>
          </NavLink>
          {/* Navigation Menu - Hidden on mobile, visible on larger screens */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-16 left-0 md:top-auto md:left-auto md:bg-transparent bg-black w-full md:w-auto z-20`}
          >
            <ul className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0">
              {["/", "/about", "/country", "/contact"].map((path, index) => (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `hover:text-gray-300 ${isActive ? "font-bold" : ""}`
                    }
                    onClick={closeMenu} // Close menu on link click
                  >
                    {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger Menu - Visible on mobile, hidden on larger screens */}
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-3xl">
              {isMenuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}{" "}
              {/* Toggle between Hamburger and Cross icon */}
            </button>
          </div>
        </div>
      </div>

      {/* Background overlay when the menu is open on mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={closeMenu} // Close menu when clicking outside
        />
      )}
    </header>
  );
};

export default Headers;
