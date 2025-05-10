import React from "react";

const Nav = () => {
  return (
    <div>
      <div>
        <div className="w-full">
          <div className="bg-orange-500 text-white flex justify-between lg:justify-around  items-center px-4 py-2 lg:text-[25px] font-extrabold shadow-2xl shadow-white">
            <p>Email: swamiabhyanand@gmail.com</p>
            <p>Call Now! 8881810100</p>
          </div>

          <div className="bg-yellow-50 flex flex-col lg:flex-row items-center justify-between lg:justify-around px-4 py-4">
            <div className="mb-4 lg:mb-0">
              <img
                src="https://swamiabhyanand.com/images/pic1.png"
                alt="Logo"
                className="h-30 w-30 object-contain"
              />
            </div>

            <ul className="flex flex-wrap justify-center gap-5 text-gray-600 font-normal text-lg lg:text-[30px]">
              <li className="text-black font-semibold">Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Gallery</li>
              <li>Donate</li>
              <li>Event</li>
              <li>E-Books</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
