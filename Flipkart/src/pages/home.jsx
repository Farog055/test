import logo from "/flipkartlogo.webp";
import logo1 from "/travellogo.webp";
import all from "/all.png";
import fashion from "/Fashion.png";
import mobiles from "/Phone.png";
import beauty from "/Beauty.png";
import books from "/Books.png";
import furniture from "/Furniture.png";
import toys from "/Toys.png";
import supplement from "/Supplement.png";
import ad2 from "/ads2.webp";
import ad4 from "/ad4.webp";
import ad5 from "/ad5.webp";
import ad6 from "/ad6.webp";
import { Link } from "react-router-dom";
//port { Footer } from "../component/footer";
import Profile from "/MyProfile.png";
import Arrow from "/Chevron.png";
import Search from "/SearchIcon.png";
import Cart from "/Cart.png";
import Location from "/location.png";
import ClosingBracket from "/ClosingBracket.png";
import { FiHome } from "react-icons/fi";
import { CiGrid42 } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
const SlideKeyframes = `
@keyframes slideInfinite {
  0%, 20%  { transform: translateX(0%); }
  25%, 45%  { transform: translateX(-35%); }
  50%, 70%  { transform: translateX(-70%); }
  75%, 100%  { transform: translateX(0%); }
}
  `;

export const Home = () => {
  const Tabs = [
    { id: 1, name: "For You", Image: all },
    { id: 2, name: "Fashion", Image: fashion },
    { id: 3, name: "Mobiles", Image: mobiles },
    { id: 4, name: "Beauty", Image: beauty },
    { id: 5, name: "Books", Image: books },
    { id: 6, name: "Furniture", Image: furniture },
    { id: 7, name: "Toys", Image: toys },
    { id: 8, name: "Supplement", Image: supplement },
  ];
  const Login = [
    "👤 My Profile",
    "✦ Flipkart Plus Zone",
    "📦 Orders",
    "♡ Wishlist",
  ];

  return (
    <div className="flex flex-col  w-full">
      <div className="sticky z-50 bg-white top-0 md:mb-4">
        <div className="flex-row md:flex justify-between  w-auto h-auto  ">
          <div className=" flex flex-row md:gap-4 md:m-4 mx-2 gap-4 py-2  ">
            <div className=" flex  bg-red-600 w-50 md:w-40 h-12 rounded-2xl md:pt-2 md:justify-normal  py-2  ">
              <img
                className="md:size-7 md:ml-3.5 flex size-6 ml-4"
                src={logo}
                alt="Flipkart"
              />
              <div className="pl-2 flex font-bold md:font-semibold pt-0.5 md:text-md text-lg italic">
                Flipkart
              </div>
            </div>
            <div className=" flex bg-[#f0f0f0] w-50 h-12 md:w-40 rounded-2xl   md:pt-2 md:justify-normal py-2">
              <img
                className="md:size-7 md:ml-3.5 size-6 ml-4"
                src={logo1}
                alt="Travel"
              />
              <div className="md:font-semibold font-bold pt-0.5 pl-2 md:text-md text-lg italic">
                Travel
              </div>
            </div>
          </div>
          <div className="flex mx-2">
            <div className="flex mr-2">
              <img
                className="size-4 md:size-5 md:mt-7 mt-1 "
                src={Location}
                alt="Location"
              />
              <p className=" md:pl-2  md:pt-6 text-sm md:text-xl font-semibold  ">
                Location not set
              </p>
            </div>
            <div className="flex">
              <p className="font-medium md:pl-2 md:pt-6  text-sm md:text-xl text-[#1254e7] ">
                Select delivery location
              </p>
              <img
                className="md:size-5 md:mt-7 size-4 mt-1"
                src={ClosingBracket}
                alt="close"
              />
            </div>
          </div>
        </div>
        <div className="flex md:pl-10 mx-2 my-4 ">
          <div className="flex md:rounded-xl rounded-xl md:w-6/8 w-full md:border-3 border-2 border-blue-500 md:pl-6 md:h-14 h-12 pl-6 ">
            <img
              className="md:size-8 md:mt-3 size-7 mt-2  "
              src={Search}
              alt="Search"
            />
            <input
              className="focus:outline-hidden sm:hidden w-full text-md font-bold pl-2"
              type="text"
              placeholder="Search for Products"
            />
            <input
              className="focus:outline-hidden  hidden md:block w-full text-xl pl-2"
              type="text"
              placeholder="Search for Products,Brand and More"
            />
          </div>
          <div className="ml-17 pt-3 relative group hidden md:block ">
            <div className="flex cursor-pointer items-center gap-2 text-lg .">
              <span>
                <img className="size-7 " src={Profile} alt="Profile" />
              </span>
              <span>
                <Link to="/Login">Login</Link>
              </span>

              <span className="inline-block transition-transform duration-200 group-hover:rotate-180 ">
                <img src={Arrow} alt="Navigate" />
              </span>
            </div>
            <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded shadow-2xl z-50 .">
              <div className="flex justify-between px-4 py-3 border-b border-gray-200 text-sm .">
                <a href="#">
                  <span>New customer?</span>
                </a>
                <a href="#" className="text-blue-600 font-bold">
                  Sign Up
                </a>
              </div>
              {Login.map((Login, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex px-4 py-3 text-sm whitespace-nowrap hover:bg-blue-50 hover:text-blue-500"
                >
                  {Login}
                </a>
              ))}
            </div>
          </div>
          <a className="hidden md:block" href="#">
            <div className="flex flex-row ml-5 mt-3">
              <img className="size-7 mr-7" src={Cart} alt="Cart" />
              <p className="text-xl" to="#">
                Cart
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="sticky z-40 bg-white top-30 md:h-24 pb-2 border-b md:border-t md:border-b border-gray-300 ">
        <div className="flex  md:pt-4 md:justify-between gap-8 pl-4 w-full max-w-7xl mx-auto overflow-x-auto  ">
          {Tabs.map((tab) => (
            <div
              key={tab.id}
              className="flex flex-col items-center justify-center cursor-pointer group min-w-17.3 "
            >
              <img
                src={tab.Image}
                className="w-10 h-10 object-contain text group-hover:scale-105 hover:bg-[#d1ecff]"
                alt={tab.name}
              />
              <span className="md:text-xl text-sm text-black text-center md:mt-1 whitespace-nowrap">
                {tab.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{SlideKeyframes}</style>
      <div className="bg-white  md:overflow-hidden md:h-full md:mt-5 md:ml-6 md:mr-6 overflow-hidden h-full mt-5 ml-3">
        <div className="flex h-full md:w-[120%] w-[290%] md:gap-8 gap-5 animate-[slideInfinite_8s_ease-in-out_infinite]">
          <img
            src={ad2}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl "
          />
          <img
            src={ad4}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl "
          />
          <img
            src={ad2}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl "
          />
          <img
            src={ad5}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl "
          />
          <img
            src={ad2}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl "
          />
        </div>
      </div>
      <div className=" md:mt-8 md:overflow-hidden md:h-full md:justify-around md:ml-9 md:mb-6 mt-8 overflow-hidden h-full mx-2 my-2">
        <div className="flex h-full  w-[300%]  md:w-[290%]">
          <img src={ad6} alt="Ad" className="w-1/3 h-full object-cover ." />
        </div>
      </div>
      <div className="bg-white md:hidden md:overflow-hidden md:h-full md:mt-5 md:ml-6 md:mr-6 overflow-hidden h-full mt-5 ml-3">
        <div className="flex h-full md:w-[120%] w-[290%] md:gap-8 gap-5 animate-[slideInfinite_8s_ease-in-out_infinite]">
          <img
            src={ad2}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl ."
          />
          <img
            src={ad4}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl ."
          />
          <img
            src={ad2}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl ."
          />
          <img
            src={ad5}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl ."
          />
          <img
            src={ad2}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl ."
          />
        </div>
      </div>
      <div className=" md:mt-8 md:overflow-hidden md:hidden md:h-full md:justify-around md:ml-9 md:mb-6 mt-8 overflow-hidden h-full mx-2 my-2">
        <div className="flex h-full  w-[300%]  md:w-[290%]">
          <img src={ad6} alt="Ad" className="w-1/3 h-full object-cover ." />
        </div>
      </div>
      <div className="bg-white mb-12 md:hidden md:overflow-hidden md:h-full md:mt-5 md:ml-6 md:mr-6 overflow-hidden h-full mt-5 ml-3">
        <div className="flex h-full md:w-[120%] w-[290%] md:gap-8 gap-5 animate-[slideInfinite_8s_ease-in-out_infinite]">
          <img
            src={ad2}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-3xl ."
          />
          <img
            src={ad4}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl ."
          />
          <img
            src={ad2}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl ."
          />
          <img
            src={ad5}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl ."
          />
          <img
            src={ad2}
            alt="Ad"
            className="w-1/3 h-full object-cover rounded-2xl ."
          />
        </div>
      </div>
      
      <div className="flex md:hidden z-50  fixed bottom-0 w-full pt-2 bg-white gap-5 px-4 justify-between  ">
        <div>
          <button className="text-sm">
            <FiHome className="size-8   hover:bg-blue-950" />
            Home
          </button>
        </div>
        <div>
          <button className="text-sm">
            <CiGrid42 className="size-8  hover:bg-blue-950" />
            Categories
          </button>
        </div>
        <div>
          <button className="text-sm">
            <IoPersonOutline className="size-8  hover:bg-blue-950" />
            Account
          </button>
        </div>
        <div>
          <button className="text-sm">
            <IoCartOutline className="size-8  hover:bg-blue-950" />
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};
