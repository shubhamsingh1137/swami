import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();

  console.log(pathname, "this is pathname");
  const navigate = useNavigate();
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

            <ul className="flex flex-wrap justify-center gap-8 cursor-pointer text-gray-600 font-normal text-lg lg:text-[25px] ">
              <li
                onClick={() => navigate("/")}
                className={`hover:text-orange-500   ${
                  pathname === "/" && "text-black  font-semibold"
                }`}
              >
                Home
              </li>
              <li
                onClick={() => navigate("/about")}
                className={`hover:text-orange-500   ${
                  pathname === "/about" && "text-black  font-semibold"
                }`}
              >
                About
              </li>
              <li
                onClick={() => navigate("/blog")}
                className={`hover:text-orange-500   ${
                  pathname === "/blog" && "text-black  font-semibold"
                }`}
              >
                Blog
              </li>
              <li
                onClick={() => navigate("/gallary")}
                className={`hover:text-orange-500   ${
                  pathname === "/gallary" && "text-black  font-semibold"
                }`}
              >
                Gallery
              </li>
              <li
                onClick={() => navigate("/donate")}
                className={`hover:text-orange-500   ${
                  pathname === "/donate" && "text-black  font-semibold"
                }`}
              >
                Donate
              </li>
              <li
                onClick={() => navigate("/event")}
                className={`hover:text-orange-500   ${
                  pathname === "/event" && "text-black  font-semibold"
                }`}
              >
                Event
              </li>
              <li
                onClick={() => navigate("/ebooks")}
                className={`hover:text-orange-500   ${
                  pathname === "/ebooks" && "text-black  font-semibold"
                }`}
              >
                E-Books
              </li>
              <li
                onClick={() => navigate("/contact")}
                className={`hover:text-orange-500   ${
                  pathname === "/contact" && "text-black  font-semibold"
                }`}
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
