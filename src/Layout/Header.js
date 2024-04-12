import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-0">
      <nav className="bg-blue-500 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <div className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                Course Website
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/courses"
                className="text-white hover:text-gray-200 text-sm md:text-base"
              >
                Courses
              </Link>
              <Link
                to="/Community"
                className="text-white hover:text-gray-200 text-sm md:text-base"
              >
                Community
              </Link>
              <div className="flex items-center space-x-4">
                {/* User Photo */}
                <Link to="/Profile" className="text-white hover:text-gray-200">
                  <div className="relative">
                    <img
                      src="https://snworksceo.imgix.net/ame-egl/c73309fd-7d70-4338-8ad4-5c95ef88fd30.sized-1000x1000.jpg?w=1000"
                      alt="User"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                    <div className="bg-white rounded-full w-2 h-2 absolute top-0 right-0"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
