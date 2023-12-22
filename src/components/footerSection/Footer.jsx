import logo2 from "../../assets/images/logo/logo2.png";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex items-center justify-center  bg-[#000]">
      <div className="mx-auto max-w-[2400px]  bg-[#000] w-full">
        <div className="md:pl-0   px-3 sm:py-5 py-3">
          <div className="flex flex-col md:flex-row md:px-14">
            <div className="xl:w-5/12 lg:w-5/12 md:w-4/12 w-full m-2 sm:m-4  pt-5 2xl:pt-10 lg:pl-0 ">
              <img src={logo2} alt="" className="2xl:w-96" />
              <p className="text-sx sm:text-sm mt-5 2xl:text-xl special:text-2xl text-[#fff]">
                Empowering Lives Through Winlads
              </p>
            </div>
            <div className="flex flex-col sm:flex-row xl:w-7/12 lg:w-7/12 md:w-8/12 w-full sm:justify-between pb-2 ">
              <div className="m-2 sm:m-4 text-[#fff] flex-1 ">
                <p className="font-bold text-sm mb-3 2xl:text-xl special:text-2xl">
                  QUICK LINK
                </p>
                <ul className="text-xs 2xl:text-xl flex flex-col gap-1">
                  <li className="cursor-pointer">
                    <Link
                      to="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    {/* <a href="#" target="_blank" rel="noopener noreferrer">
                      Membership T&C
                    </a> */}
                  </li>
                  <li className="cursor-pointer">
                    <a
                      href="https://www.winlads.com/conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                </ul>
              </div>

              <div className="m-2 sm:m-4 text-[#fff] flex-1 ">
                <p className="font-bold mb-3 text-sm 2xl:text-xl special:text-2xl">
                  Contact Us
                </p>
                <ul className="text-xs 2xl:text-xl flex flex-col gap-1 ">
                  <li className=" cursor-pointer flex items-center gap-2 2xl:gap-5">
                    <MdOutlineLocalPhone className="text-white text-sm 2xl:text-lg" />

                    <a href="#" target="_blank" rel="noopener noreferrer">
                      +61 420 363 993
                    </a>
                  </li>
                  <li className=" cursor-pointer flex items-center gap-2 2xl:gap-5">
                    <MdOutlineEmail className="text-white text-sm 2xl:text-lg" />

                    <a href="#" target="_blank" rel="noopener noreferrer">
                      info@winlads.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="m-2 sm:m-4 text-[#fff] flex-1 ">
                <p className="font-bold text-sm mb-3 2xl:text-xl special:text-2xl">
                  News Letter
                </p>
                <ul className="text-xs 2xl:text-xl flex flex-col gap-1">
                  <li className="cursor-pointer">ABN: 87671535149</li>
                  <li className="cursor-pointer">
                    2009/15 Everage St 
                  </li>
                  <li className="cursor-pointer">
                   Moonee Ponds
                  </li>
                  <li className="cursor-pointer">
                    Victoria
                  </li>
                  <li className="cursor-pointer">
                   3039
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <p className="text-center text-xs special:text-base text-white">
            Copyright 2023 Winlads, All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
