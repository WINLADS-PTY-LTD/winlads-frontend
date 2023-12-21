import logo2 from "../../assets/images/logo/logo2.png";

function Footer() {
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="mx-auto max-w-[2400px] bg-black w-full">
      <div className="md:pl-0   px-3 sm:py-5 py-3">
        <div className="flex flex-col md:flex-row md:px-14">
          <div className="xl:w-2/3 md:w-1/2 w-full pl-4 pt-5 2xl:pt-10 lg:pl-0">
            <img src={logo2} alt="" className="2xl:w-96" />
            <p className="text-sx sm:text-sm mt-5 2xl:text-xl special:text-2xl text-[#fff]">
            Empowering Lives Through Winlads: A Journey of Giving Back
            </p>
          </div>
          <div className="flex xl:w-1/3 md:w-1/2 w-full justify-between pb-2 linklist">
            <div className="m-5 text-[#fff]">
              <p className="font-bold mb-3 2xl:text-xl special:text-2xl">
                Links
              </p>
              <ul className="2xl:text-xl">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Service</li>
                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Feature</li>
              </ul>
            </div>
            <div className="m-5 text-[#fff]">
              <p className="font-bold mb-3 2xl:text-xl special:text-2xl">
                Product
              </p>
              <ul className="2xl:text-xl">
                <li className="cursor-pointer">Membership</li>
                <li className="cursor-pointer"><a href="https://www.winlads.com/conditions" >T&C</a></li>
                <li className="cursor-pointer">Cars</li>
                <li className="cursor-pointer">Drive</li>
                <li className="cursor-pointer">Winners</li>
              </ul>
            </div>
            <div className="m-5 text-[#fff]">
              <p className="font-bold mb-3 2xl:text-2xl">Community</p>
              <ul className="2xl:text-xl">
                <li className="cursor-pointer">Global Partners</li>
                <li className="cursor-pointer">Forum</li>
                <li className="cursor-pointer">Careers</li>
                <li className="cursor-pointer">Community</li>
                <li className="cursor-pointer">Brand Assets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-2">
        <p className="text-center text-sx sm:text-sm special:text-base text-white">Copyright 2023 Winlads, All Rights Reserved.</p>
      </div>
    </div>
    </div>
  );
}

export default Footer;
