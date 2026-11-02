import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/flipkartlogo.webp";
import Arrow from "/Chevron.png";
import Search from "/SearchIcon.png";
import Profile from "/MyProfile.png";
import Cart from "/Cart.png";
import loginlogo from "/loginlogo.png";
import Watchimage from "/watchimage.webp";
import Watchimage2 from "/watchimage2.webp";
import rating from "/rating.png";
import LiveGreenClock from "../component/livegreenclock";
import Arrow1 from "/arrow.png";

const galleryImages = [Watchimage, Watchimage2, Watchimage, Watchimage2];

const breadcrumbs = [
  "Home",
  "Wearable Smart Devices",
  "Smart Watches",
  "Samsung Smart Watches",
  "Samsung Galaxy Watch8 (40mm, Bluetooth)",
];

const profileLinks = [
  "👤 My Profile",
  "✦ Flipkart Plus Zone",
  "📦 Orders",
  "♡ Wishlist",
];

const bankOffers = [
  {
    id: 1,
    title: "₹1,500 off",
    bank: "SBI",
    footer: "Credit Card",
    best: true,
  },
  {
    id: 2,
    title: "₹1,850 off",
    bank: "Flipkart SBI",
    footer: "Credit Card • Includes ca...",
  },
  {
    id: 3,
    title: "₹1,375 off",
    bank: "Flipkart Axis",
    footer: "Credit Card • Includes ca...",
  },
  { id: 4, title: "₹1,250 off", bank: "SBI", footer: "Debit Card" },
];

const emiOffers = [
  {
    id: 1,
    title: "₹5,316/m",
    months: "(3 months)",
    bank: "SBI",
    footer: "Credit Card • ₹1,500 off",
    best: true,
  },
  {
    id: 2,
    title: "₹5,399/m",
    months: "(3 months)",
    bank: "Axis Bank",
    footer: "Credit Card • ₹1,250 off",
  },
  {
    id: 3,
    title: "₹2,669/m",
    months: "(6 months)",
    bank: "Flipkart Axis Bank",
    footer: "Credit Card • ₹1,750 off",
  },
  {
    id: 4,
    title: "₹5,659/m",
    months: "(3 months)",
    bank: "Flipkart SBI",
    footer: "Credit Card • ₹500 off",
  },
];

const infoCards = [
  {
    id: 1,
    label: "Coupons",
    extra: null,
    action: "Apply",
    icon: "🎟",
    title: "₹1,000 off",
    sub: "#OnlyForYou: Exclusive Discount ›",
  },
  {
    id: 2,
    label: "Exchange offer",
    extra: "Not available at this Pincode",
    action: null,
    icon: "🔄",
    title: "Up to ₹14,125",
    sub: "Change pincode to exchange item ›",
  },
];

export const WatchPage = () => {
  const [tab, setTab] = useState("cash");
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(true);
  const offers = tab === "cash" ? bankOffers : emiOffers;

  return (
    <div className="flex flex-col">
      <div className="bg-[#F1F2F4]">
        <div className="border-b border-gray-300 bg-white sticky top-0 z-50">
          <div className="md:flex md:gap-8 md:pt-4 md:mx-4 md:pb-4 md:items-center md:bg-white bg-blue-600">
            <div className="flex w-auto h-auto md:pl-8">
              <div className="md:hidden w-full flex h-18 justify-center p-6">
                <p>
                  <img src={loginlogo} alt="logo" />
                </p>
              </div>

              <Link to="/">
                <div className="md:flex hidden md:bg-[#ffe51f] md:w-52 md:h-12 h-19 md:rounded-2xl md:pl-8 md:pt-1 md:gap-3">
                  <img className="size-6 mt-2" src={logo} alt="Flipkart" />
                  <div className="md:flex flex text-white italic text-lg font-semibold md:text-xl md:pt-1 md:font-semibold md:italic md:text-[#133fb9]">
                    Flipkart
                  </div>
                  <img
                    className="size-3 hidden md:block mt-3.5"
                    src={Arrow}
                    alt="Arrow"
                  />
                </div>
              </Link>
            </div>

            <div className="md:flex md:ml-4 hidden">
              <div className="flex rounded-xl border-3 border-[#2ea1ff] w-210 h-13">
                <img className="size-7 ml-5 mt-2" src={Search} alt="Search" />
                <input
                  type="text"
                  placeholder="Search for Products,Brand and More"
                  className="focus:outline-hidden w-full pl-3 text-gray-900 text-xl"
                />
              </div>
            </div>

            <div className="md:ml-6 hidden md:pt-1 md:relative md:group md:flex z-11">
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

                {profileLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-500 whitespace-nowrap"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <a href="#">
              <div className="md:flex md:flex-row md:ml-5 hidden md:mt-1.5">
                <img className="size-7 mr-7" src={Cart} alt="Cart" />
                <p className="text-xl">Cart</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white">
          <div className="py-2 mx-4 flex text-gray-500 text-xl">
            {breadcrumbs.map((item, i) => (
              <div key={item} className="flex">
                <div>{item}</div>
                {i !== breadcrumbs.length - 1 && <div className="mx-1">/</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full gap-7 flex items-start bg-white p-5">
          <div className="flex flex-wrap content-start flex-3 min-w-0 sticky top-23 self-start gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="flex w-[calc(50%-8px)] h-[calc(100vh-200px)] rounded-2xl overflow-hidden bg-[#F1F2F4]"
              >
                <img
                  className="w-full h-full object-contain"
                  src={img}
                  alt={`Product image ${i + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="flex-2 min-w-0 self-start">
            <div className="flex flex-col bg-white">
              <div className="flex flex-col bg-white">
                <div className="flex text-[#333333] text-xl pt-4">
                  <div className="font-bold">Selected Strap Color:</div>
                  <div className="pl-2">White</div>
                </div>

                <div className="size-25 mt-4">
                  <img
                    className="border-2 rounded-2xl p-2"
                    src={Watchimage}
                    alt="short"
                  />
                </div>

                <div className="flex mt-8 text-xl">
                  <div className="font-bold">Display Size:</div>
                  <div className="pl-2">40 mm</div>
                </div>

                <div className="text-xl font-bold mt-5 p-4 border w-fit rounded-2xl flex bg-[#f0f0f0]">
                  40 mm
                </div>

                <div className="flex font-bold text-lg text-[#1162F2] mt-5">
                  Visit brand store
                </div>

                <h1 className="font-semibold text-[#333333] text-xl">
                  Samsung Galaxy Watch8 (40mm, Bluetooth) (White Strap, Small)
                </h1>

                <div className="flex mt-2 w-fit rounded-lg px-4 py-2 bg-gray-100">
                  <div className="font-semibold">4.4</div>
                  <div className="p-1 pt-1.5">
                    <img src={rating} alt="rating" />
                  </div>
                  <div className="text-gray-500">| 2,086</div>
                </div>

                <div className="mt-8">
                  <div>
                    <LiveGreenClock />
                  </div>

                  <div className="flex text-3xl pt-4 gap-2">
                    <div className="flex">
                      <img className="size-8" src={Arrow1} alt="arrow" />
                      <p className="font-bold text-[#008042]">54%</p>
                    </div>
                    <del className="text-[#707070]">38,999</del>
                    <div className="font-extrabold text-[#333333]">₹17,999</div>
                  </div>

                  <div className="text-[#707070]">
                    +₹149 Protect Promise Fee
                  </div>
                </div>

                <div
                  className={`flex flex-col w-full max-w-165 rounded-3xl bg-[#d6ecff] mt-6 ${
                    open ? "border border-[#8ccaff]" : ""
                  }`}
                >
                  <div
                    onClick={() => setOpen(!open)}
                    className={`relative z-10 flex items-center justify-between px-4 py-4 rounded-t-3xl cursor-pointer bg-linear-to-b from-[#1250d6] to-[#0b3aa6] text-white ${
                      open ? "" : "rounded-b-3xl"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="bg-white text-[#1250d6] font-extrabold italic text-xs leading-tight px-1 py-0.5">
                        WOW!
                        <br />
                        DEAL
                      </span>
                      {open ? (
                        <p className="text-xl">
                          Apply offers for maximum savings
                        </p>
                      ) : (
                        <p className="text-2xl font-bold">Buy at ₹15,499</p>
                      )}
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      className={`transition-transform duration-200 ${
                        open ? "" : "rotate-180"
                      }`}
                    >
                      <path d="M6 15l6-6 6 6" />
                    </svg>
                  </div>

                  {!open && (
                    <div className="-mt-6 pt-9 pb-4 px-4 rounded-b-3xl bg-[#d6ecff] text-lg text-[#333]">
                      Apply offers for maximum savings!
                    </div>
                  )}

                  {open && (
                    <>
                      <div className="flex bg-[#d6ecff]">
                        <button
                          onClick={() => setTab("cash")}
                          className={`flex-1 flex flex-col items-start text-left px-4 pt-4 pb-3 cursor-pointer ${
                            tab === "cash"
                              ? "bg-[#d6ecff]"
                              : "bg-white rounded-br-3xl"
                          }`}
                        >
                          <p className="text-3xl font-bold text-[#212121]">
                            ₹15,499
                          </p>
                          <p className="text-gray-500 text-lg">
                            Lowest price for you
                          </p>
                        </button>

                        <button
                          onClick={() => setTab("emi")}
                          className={`relative flex-1 flex flex-col items-start text-left px-6 pt-4 pb-3 cursor-pointer ${
                            tab === "emi"
                              ? "bg-[#d6ecff]"
                              : "bg-white rounded-bl-3xl"
                          }`}
                        >
                          <span className="absolute -left-4 top-6 z-10 bg-white border rounded-full px-2 text-sm font-bold">
                            OR
                          </span>
                          <p className="text-3xl font-bold text-[#212121]">
                            ₹5,316 x 3m
                          </p>
                          <p className="text-gray-500 text-lg">Pay ₹15,947</p>
                        </button>
                      </div>

                      <div className="flex flex-col gap-3 bg-[#d6ecff] p-3 rounded-b-3xl">
                        {infoCards.map((c) => (
                          <div
                            key={c.id}
                            className="flex flex-col bg-white rounded-xl p-4 gap-3"
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex gap-2 items-center text-xl">
                                <p className="font-semibold text-gray-600">
                                  {c.label}
                                </p>
                                {c.extra && (
                                  <p className="font-bold text-[#212121]">
                                    {c.extra}
                                  </p>
                                )}
                              </div>
                              {c.action && (
                                <button className="text-[#1162F2] font-bold text-2xl">
                                  {c.action}
                                </button>
                              )}
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="size-11 rounded-lg bg-[#f1f2f4] flex items-center justify-center">
                                {c.icon}
                              </div>
                              <div className="flex flex-col">
                                <p className="font-bold text-2xl text-[#212121]">
                                  {c.title}
                                </p>
                                <p className="text-lg text-[#333]">{c.sub}</p>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="flex flex-col bg-white rounded-xl p-4 gap-4">
                          <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold text-gray-600">
                              {tab === "cash" ? "Bank offers" : "EMI offers"}
                            </p>
                            <button
                              onClick={() =>
                                setTab(tab === "cash" ? "emi" : "cash")
                              }
                              className="font-semibold underline text-lg text-[#212121]"
                            >
                              {tab === "cash"
                                ? "View EMI offers"
                                : "View non-EMI offers"}
                            </button>
                          </div>

                          <div className="flex flex-wrap gap-3 gap-y-4 pt-2">
                            {offers.map((o) => (
                              <div
                                key={o.id}
                                className="relative w-[calc(50%-6px)] min-w-0"
                              >
                                {o.best && (
                                  <span className="absolute -top-3 left-2 z-10 bg-[#fde8a6] text-[#333] text-sm font-semibold px-2 rounded">
                                    Best value for you
                                  </span>
                                )}

                                <div className="flex flex-col rounded-xl border border-gray-300 overflow-hidden bg-white">
                                  <div className="flex items-start justify-between gap-2 p-3 pt-4">
                                    <div className="flex gap-3 min-w-0">
                                      <div className="size-8 rounded-full bg-blue-600 shrink-0" />
                                      <div className="flex flex-col min-w-0">
                                        <p className="font-bold text-xl text-[#212121] truncate">
                                          {o.title}
                                          {o.months && (
                                            <span className="font-normal text-base text-[#555] ml-1">
                                              {o.months}
                                            </span>
                                          )}
                                        </p>
                                        <p className="text-[#555] truncate">
                                          {o.bank}
                                        </p>
                                      </div>
                                    </div>
                                    <button className="text-[#1162F2] font-bold text-xl">
                                      Apply
                                    </button>
                                  </div>

                                  <div className="flex items-center justify-between bg-[#f3f3f3] px-3 py-2 text-[#333] font-semibold">
                                    <span className="truncate">{o.footer}</span>
                                    <span className="text-gray-500">›</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="bg-[#f3f3f3] rounded-2xl p-4 mt-4 w-full max-w-165">
                  <p
                    onClick={() => setShow(!show)}
                    className="font-bold text-xl cursor-pointer"
                  >
                    Additional benefits on this purchase
                  </p>

                  {show && (
                    <div className="flex gap-3 mt-4 overflow-x-auto">
                      <div className="shrink-0 bg-white rounded-xl border border-gray-200 px-4 py-3 text-lg whitespace-nowrap">
                        🎟 Unlock Storage Devices coupon • 10% off ›
                      </div>
                      <div className="shrink-0 bg-white rounded-xl border border-gray-200 px-4 py-3 text-lg whitespace-nowrap">
                        🎟 Unlock Smart Watch coupon • 5% off ›
                      </div>
                      <div className="shrink-0 bg-white rounded-xl border border-gray-200 px-4 py-3 text-lg whitespace-nowrap">
                        🎟 No cost EMI on selected cards ›
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
