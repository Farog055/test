import logo from "/flipkartlogo.webp";
import logo1 from "/login.png";
import { Link } from "react-router-dom";
import Arrow from "/Chevron.png";
import Search from "/SearchIcon.png";
import { Footer } from "../component/footer";
import Profile from "/MyProfile.png";
import Cart from "/Cart.png";
import loginlogo from "/loginlogo.png";

export const Login = () => {
  return (
    <div className=" flex flex-col  ">
      <div className="md:flex md:gap-8  md:pt-4 md:pb-4 md:items-center md:border md:bg-white bg-blue-600  md:border-b-gray-300">
        <div className="flex w-auto h-auto md:pl-8    ">
          <div className="md:hidden w-full flex h-18 justify-center p-6 ">
           <p><img src={loginlogo} alt="logo" /></p>
          </div>
          <Link to="/">
            <div className="md:flex hidden md:bg-[#ffe51f] md:bg-blue md:w-52 md:h-12 h-19  md:rounded-2xl md:pl-8 md:pt-1 md:gap-3">
              <img className="size-6 mt-2" src={logo} alt="Flipkart" />
              <div className="md:flex flex text-white italic text-lg font-semibold md:text-xl md:pt-1 md:font-semibold md:italic md:text-[#133fb9]">
              Flipkart
              </div>
              <img className="size-3 hidden
               md:block mt-3.5" src={Arrow} alt="Arrow" />
            </div>
          </Link>
        </div>
        <div className="md:flex md:ml-4 hidden ">
          <div className="flex rounded-xl  border-3 border-[#2ea1ff] w-210 h-13 ">
            <img className="size-7 ml-5 mt-2" src={Search} alt="Search" />
            <input
              type="text"
              placeholder="Search for Products,Brand and More"
              className="focus:outline-hidden w-full pl-3 text-gray-900 text-xl"
            />
          </div>
        </div>
        <div className="md:ml-6 hidden md:pt-1 md:relative md:group md:flex">
          <div className="flex cursor-pointer items-center gap-2 text-lg">
            <span>
              <img className="size-7" src={Profile} alt="Profile" />
            </span>
            <span>Login</span>
            <span className="inline-block transition-transform duration-200 group-hover:rotate-180">
              <img src={Arrow} alt="Navigate" />
            </span>
          </div>
          <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded shadow-2xl z-50">
            <div className="flex justify-between px-4 py-3 border-b border-gray-200 text-sm">
              <span>New customer?</span>
              <a href="#" className="text-blue-600 font-bold">
                Sign Up
              </a>
            </div>

            <a
              href="#"
              className="flex px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-500 whitespace-nowrap"
            >
              👤 My Profile
            </a>
            <a
              href="#"
              className="flex px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-500 whitespace-nowrap"
            >
              ✦ Flipkart Plus Zone
            </a>
            <a
              href="#"
              className="flex px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-500 whitespace-nowrap"
            >
              📦 Orders
            </a>
            <a
              href="#"
              className="flex px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-500 whitespace-nowrap"
            >
              ♡ Wishlist
            </a>
          </div>
        </div>
        <a href="#">
          <div className="md:flex md:flex-row md:ml-5 hidden md:mt-1.5">
            <img className="size-7  mr-7" src={Cart} alt="Cart" />
            <p className="text-xl" to="#">
              Cart
            </p>
          </div>
        </a>
      </div>
      <div className="md:bg-gray-100 rounded-t-2xl md:pb-10 ">
        <div className=" md:h-165 md:mt-10 md:ml-80 md:mr-80 md:flex  flex md:justify-center ">
         <div className="w-120 bg-[#2874f0] hidden md:block">
            <h1 className="text-4xl font-bold pl-10 pt-13 text-white">Login</h1>
            <p className="text-gray-200 text-2xl pl-10 pt-6">
              Login to access your orders,exclusive offers, rewards and
              recommendations
            </p>
            <img className="pl-15 pt-50" src={logo1} alt="flipkart" />
          </div>
          <div className=" w-170 md:shadow-xl">
            <p className="font-semibold  text-xl pt-18 md:pl-15 pl-5 ">
              Log in for the best experience
            </p>
            <p className=" text-xl text-gray-500 md:pl-15 pl-5  pt-2">
              Enter your phone number to continue
            </p>

            <div className="md:pl-15 pl-5 pt-6 pr-15">
              <div className="flex items-center h-16 border border-gray-300 rounded px-4 focus-within:border-blue-600">
                <div className="flex items-center gap-1 pr-4 border-r border-gray-300 text-gray-700 font-medium cursor-pointer">
                  <span>+91</span>
                  <span className="text-xs text-gray-500">▼</span>
                </div>
                <input
                  className="w-full pl-4 bg-transparent text-lg focus:outline-none"
                  type="tel"
                  name="mobile"
                  id="mobile"
                  placeholder="Phone Number"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  onInput={(e) => {
                    e.target.value = e.target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 10);
                  }}
                />
              </div>
              <div className="text-right mt-6">
                <a href="#" className="text-blue-500  md:text-xl">
                  Use Email-ID
                </a>
              </div>
            </div>

            <p className="pt-10 pl-5 md:pl-15 pr-15 text-gray-500 text-sm md:text-md ">
              By continuing, you confirm that you are above 18 years of age, and
              you agree to the Flipkart's
              <a href="#">
                <l className="text-blue-600"> Terms of Use </l>
              </a>
              and
              <a href="#">
                <l className="text-blue-600"> Privacy Policy</l>
              </a>
            </p>
            <div className="pl-15 pr-15 pt-20 hidden md:block">
              <button className="bg-orange-500 text-white font-medium h-14 w-full rounded shadow hover:bg-orange-600 transition-colors">
                {" "}
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="p-2 w-full fixed bottom-0 border-t-2 md:hidden  border-gray-200">
      <div className=" flex w-full text-white bg-gray-300  h-10 rounded-sm justify-center ">
        <button>Continue</button>
        </div>
      </div>
    </div>
  );
};
