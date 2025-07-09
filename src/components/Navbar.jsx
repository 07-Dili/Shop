import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 h-24 shadow-md">
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LEFT NAV LINKS */}
        <div className="flex space-x-16 font-normal text-base uppercase tracking-wider absolute left-0 top-1/2 -translate-y-1/2">
          <NavLink
            to="/top-wear"
            className="text-gray-900 hover:scale-105 transition-transform duration-200"
          >
            Top Wear
          </NavLink>
          <NavLink
            to="/bottom-wear"
            className="text-gray-900 hover:scale-105 transition-transform duration-200"
          >
            Bottom Wear
          </NavLink>
          <NavLink
            to="/accessories"
            className="text-gray-900 hover:scale-105 transition-transform duration-200"
          >
            Accessories
          </NavLink>
        </div>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/" className="text-5xl font-bold tracking-widest leading-none">
            <span className="text-indigo-600">S</span>
            <span className="text-pink-500">H</span>
            <span className="text-green-500">O</span>
            <span className="text-yellow-500">P</span>
          </Link>
        </div>

        {/* RIGHT NAV LINKS */}
        <div className="flex space-x-12 text-base font-normal uppercase tracking-wider absolute right-0 top-1/2 -translate-y-1/2">
          <NavLink
            to="/cart"
            className="text-gray-900 hover:scale-105 transition-transform duration-200"
          >
            Cart
          </NavLink>

          {/* Use button instead of NavLink to trigger modal */}
          <button
            onClick={onLoginClick}
            className="text-gray-900 hover:scale-105 transition-transform duration-200 uppercase"
          >
            Login
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
