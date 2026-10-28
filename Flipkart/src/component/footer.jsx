import facebook from "/Facebook.png";
import youtube from "/YouTube.png";
import twitter from "/Twitter.png";
import instagram from "/Instagram.png";
import seller from "/Become a Seller.png";
import advertise from "/Advertise.png";
import gift from "/Gift-Cards.png";
import helpcenter from "/Help-Center.png";
import payment from "/Payment-methods.png";

export const Footer = () => {
  return (
    <div className="flex flex-col w-full max-w-8xl bg-[#212121]">
      <div className="flex ">
        <div className="flex-col font-bold ml-10  mt-10">
          <div className="text-gray-400 pb-5 font-normal">ABOUT</div>
          <div className="text-white">Contact Us</div>
          <div className="text-white">About Us</div>
          <div className="text-white">Careers</div>
          <div className="text-white">Flipkart Stories</div>
          <div className="text-white">Press</div>
          <div className="text-white">Corporate</div>
          <div className="text-white">Information</div>
        </div>
        <div className="flex-col font-bold ml-10  mt-10">
          <div className="text-gray-400 pb-5 font-normal">GROUP COMPANIES</div>
          <div className="text-white">Myntra</div>
          <div className="text-white">Cleartrip</div>
          <div className="text-white">Shopsy</div>
        </div>
        <div className="flex-col font-bold ml-10 mt-10 ">
          <div className="text-gray-400 pb-5 font-normal">HELP</div>
          <div className="text-white">Payments</div>
          <div className="text-white">Shipping</div>
          <div className="text-white">Cancellation &</div>
          <div className="text-white">Returns</div>
          <div className="text-white">FAQ</div>
        </div>
        <div className="flex-col shrink-0 font-bold ml-10 mt-10 mb-10 pr-5 border-r border-gray-400">
          <div className="text-gray-400 pb-5 font-normal">CONSUMER POLICY</div>
          <div className="text-white">Cancellation &</div>
          <div className="text-white">Returns</div>
          <div className="text-white">Terms Of Use</div>
          <div className="text-white">Security</div>
          <div className="text-white">Privacy</div>
          <div className="text-white">Sitemap</div>
          <div className="text-white">Grievance</div>
          <div className="text-white">Redressal</div>
          <div className="text-white">EPR Compliance</div>
          <div className="text-white">FSSAI Food Safety</div>
          <div className="text-white">Connect App</div>
        </div>
        <div className="flex-col w-70  ml-10 mt-10 shrink-0">
          <div className="text-gray-400 pb-5 shrink-0">Mail Us:</div>
          <div className="text-white shrink-0">
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India
          </div>
          <div className="text-gray-400 pb-5 shrink-0  pt-5">Social:</div>
          <div className="flex shrink-0 gap-5">
            <div>
              {" "}
              <img src={facebook} alt="fb" />
            </div>
            <div>
              {" "}
              <img src={youtube} alt="" />
            </div>
            <div>
              {" "}
              <img src={twitter} alt="" />
            </div>
            <div>
              {" "}
              <img src={instagram} alt="" />
            </div>
          </div>
        </div>
        <div className="flex-col w-75 shrink-0  ml-10 mt-10">
          <div className="text-gray-400 shrink-0 pb-5">
            Registered Office Address:
          </div>
          <div className="text-white shrink-0">
            Flipkart Internet Private Limited, Buildings Alyssa,Begonia & Clove
            Embassy Tech Village,Outer Ring Road,Devarabeesanahalli
            Village,Bengaluru,560103,Karnataka,India CIN : U51109KA2012PTC066107
            Telephone:{" "}
            <a href="#">
              <l className="text-blue-700 shrink-0">
                {" "}
                044-45614700 / 044-67415800
              </l>
            </a>
          </div>
        </div>
      </div>

      <div className="flex border shrink-0 border-t-gray-200 border-b-gray-200">
        <div className="flex font-bold ml-10 mt-10 shrink-0">
          <div className=" pt-1 pr-2">
            <img src={seller} alt="Become a seller" />
          </div>
          <div className="text-white pb-5 font-normal flex">
            Become a Seller
          </div>
        </div>
        <div className="flex font-bold ml-10 mt-10">
          <div className=" pt-1 pr-2">
            <img src={advertise} alt="Become a seller" />
          </div>
          <div className="text-white pb-5 font-normal flex">Advertise</div>
        </div>
        <div className="flex font-bold ml-10 mt-10">
          <div className=" pt-1 pr-2">
            <img src={gift} alt="Gift Card" />
          </div>
          <div className="text-white pb-5 font-normal flex">Gift Cards</div>
        </div>
        <div className="flex font-bold ml-10 mt-10">
          <div className=" pt-1 pr-2">
            <img src={helpcenter} alt="Help Center" />
          </div>
          <div className="text-white pb-5 font-normal flex">Help Center</div>
        </div>
        <div className="flex font-bold ml-10 mt-10">
          <div className="text-white pb-5 font-normal flex">
            © 2007-2026 Flipkart.com
          </div>
        </div>
        <div>
          <img className="pt-10 pl-50" src={payment} alt="payment" />
        </div>
      </div>
    </div>
  );
};
