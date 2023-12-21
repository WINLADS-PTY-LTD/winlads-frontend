import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import SubscribeCard from "../../components/SubscribeCard/SubscribeCard";
import { motion } from "framer-motion";
import axios from "axios";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import "./subscription.css";
import { useEffect, useState } from "react";
import SearchField from "../../components/SearchField/SearchField";
import ChoosePlane from "../../components/SubscribeCard/ChoosePlane";
import BG from "../../assets/images/HomesideBg.png";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import MyEntriesButton from "../../components/MyEntries/MyEntriesButton";

function Subscription() {
  const [planes, setPlanes] = useState([]);
  const [isYearly, setIsYearly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
  const [isQuartly, setIsQuartly] = useState(false);
  const [choosePlane, setChoosePlane] = useState(false);
  const [loading, setLoading] = useState(true);

  const [selectedPlaneId, setSelectedPlaceId] = useState("");
  const [selectedPlanePrice, setSelectedPlanePrice] = useState("");
  const navigate = useNavigate();

  const [valUser, setValUser] = useState({});
  const cookies = new Cookies(null, { path: "/" });

  const handleButton = (id) => {
    setChoosePlane(true);
    setSelectedPlaceId(id);
    setSelectedPlanePrice();
  };

  const handleYear = (val = false) => {
    setIsYearly(val);
  };

  const handleMonthly = () => {
    setIsMonthly(true);
    setIsQuartly(false);
    setIsYearly(false);
  };

  const handleQuatly = () => {
    setIsQuartly(true);
    setIsMonthly(false);
    setIsYearly(false);
  };

  const handleYearly = () => {
    setIsYearly(true);
    setIsMonthly(false);
    setIsQuartly(false);
  };

  useEffect(() => {
    currentUserValidation();
    getPlanes();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user.balance);
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };

  const getPlanes = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getSubscriptionPlans`)
      .then((response) => {
        console.log(response.data.data);
        setPlanes(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex relative min-h-screen">

        {/* home-content */}
        <div className="xl:flex xl:flex-row flex-col xl:justify-between px-4 special:px-12 2xl:px-8 flex-1 xl:gap-4 special:gap-8 2xl:gap-6 space-y-4 xl:space-y-0">
          {/* left side */}
          <img
            src={BG}
            alt=""
            className="absolute right-0 -z-10 top-10 w-72 xl:w-96 md:w-96 special:w-1/3 2xl:w-1/4 special:top-80 opacity-60 xl:top-60 2xl:top-80"
          />
          <div className="flex flex-col space-y-4 flex-1 special:space-y-8 2xl:space-y-6 relative">
            <div className="visible xl:hidden space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="w-full" src={MainCar} alt="main" />
                </div>
              </div>

              <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 gap-2 relative">
                <div className="w-full">
                  <GoldCard />
                </div>
              </div>
            </div>
            <SearchField />
            <p className="font-bold text-3xl special:text-6xl 2xl:text-4xl">
              Choose Your Plan
            </p>
            {loading ? (
              <div className="flex justify-center">
                <FiLoader className="w-9 h-9 2xl:w-12 2xl:h-12 special:w-18 special:h-18 animate-spin" />
              </div>
            ) : planes.length > 0 ? (
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row justify-between bg-black items-center rounded-full px-1 py-1 special:py-2 special:px-2">
                  <button
                    type="button"
                    onClick={handleMonthly}
                    className={`${
                      isMonthly ? "bg-white text-black" : "bg-black text-white"
                    } text-[10px] text-semibold xl:text-sm md:text-sm text-center special:py-4 special:text-xl 2xl:text-lg rounded-full py-2 flex-1`}
                  >
                    Monthly
                  </button>

                  <button
                    type="button"
                    onClick={handleQuatly}
                    className={`${
                      isQuartly ? "bg-white text-black" : "bg-black text-white"
                    } text-[10px] text-semibold xl:text-sm md:text-sm text-center special:py-4 special:text-xl 2xl:text-lg rounded-full py-2 flex-1`}
                  >
                    Quartly
                  </button>

                  <button
                    type="button"
                    onClick={handleYearly}
                    className={`${
                      isYearly ? "bg-white text-black" : "bg-black text-white"
                    } text-[10px] text-semibold xl:text-sm md:text-sm text-center special:py-4 special:text-xl 2xl:text-lg rounded-full py-2 flex-1`}
                  >
                    Yearly (Save2.5%)
                  </button>
                </div>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 special:gap-6 2xl:gap-4 ${
                    choosePlane == "true ? bg-white/50"
                  }`}
                >
                  {planes.map((plane, key) => (
                    <SubscribeCard
                      key={key}
                      name={plane.name}
                      price={isYearly ? plane.annualy : "" | isQuartly ? plane.price_id_semiannual : "" | isMonthly ? plane.price_id : ""}
                      // descList={Array.isArray(plane.desc) ? plane.desc : []}
                      descList={Array.isArray(plane.desc) ? plane.desc : []}
                      desc1={plane.desc1}
                      desc2={plane.desc2}
                      desc3={plane.desc3}
                      bgColor={
                        plane.name == "Starter"
                          ? "[#808080]"
                          : "black" | (plane.name == "Boomer")
                          ? "[#366B71]"
                          : "black" | (plane.name == "Platinum")
                          ? "white"
                          : "black" | (plane.name == "Black")
                          ? "black"
                          : ""
                      }
                      gradientFrom={
                        plane.name == "Bronz"
                          ? "from-red-400"
                          : "black" | (plane.name == "Silver")
                          ? "from-gray-200"
                          : "black" | (plane.name == "Gold")
                          ? "from-[#FFDF37]"
                          : ""
                      }
                      gradientTo={
                        plane.name == "Bronz"
                          ? "to-white"
                          : "black" | (plane.name == "Silver")
                          ? "to-white"
                          : "black" | (plane.name == "Gold")
                          ? "to-[#9D7C00]"
                          : ""
                      }
                      textColor={
                        plane.name == "Starter"
                          ? "white"
                          : "white" | (plane.name == "Boomer")
                          ? "white"
                          : "black" | (plane.name == "Black")
                          ? "white"
                          : "white" | (plane.name == "Platinum")
                          ? "[#01819D]"
                          : "black"
                      }
                      cardBorderColor={
                        plane.name == "Platinum"
                          ? "black"
                          : "black" |
                            (plane.name == "Starter"
                              ? "[#808080]"
                              : "[#808080]") |
                            (plane.name == "Bloomer"
                              ? "[#366B71]"
                              : "[#366B71]")
                      }
                      borderColor={
                        plane.name == "Standard"
                          ? "white"
                          : "white" | (plane.name == "Bronz")
                          ? "black"
                          : "black"
                      }
                      buttonColor={
                        plane.name == "Starter"
                          ? "white"
                          : "" | (plane.name == "Boomer")
                          ? "[#01819D]"
                          : "" | (plane.name == "Platinum")
                          ? "[#01819D]"
                          : "" | (plane.name == "Gold")
                          ? "white"
                          : "" | (plane.name == "Black")
                          ? "white"
                          : ""
                      }
                      buttonText={
                        plane.name == "Starter"
                          ? "[#01819D]"
                          : "" | (plane.name == "Boomer")
                          ? "white"
                          : "" | (plane.name == "Platinum")
                          ? "white"
                          : "" | (plane.name == "Gold")
                          ? "[#01819D]"
                          : "" | (plane.name == "Black")
                          ? "[#01819D]"
                          : ""
                      }
                      buttonHover={
                        plane.name == "Platinum"
                          ? "[#01819D]/50"
                          : "[#01819D]" | (plane.name == "Starter")
                          ? "white/50"
                          : "white/50" | (plane.name == "Gold")
                          ? "white/50"
                          : "white" | (plane.name == "Black")
                          ? "white/50"
                          : "white" | (plane.name == "Boomer")
                          ? "[#01819D]/50"
                          : "[#01819D]"
                      }
                      buttonHoverText={plane.name == "Gold" ? "white" : ""}
                      hoverButtonBorder={plane.name == "Black" ? "white" : ""}
                      raffleCount={
                        isYearly
                          ? plane.raffle_count_annual
                          : "" | isQuartly ? plane.raffle_count_semiannual : "" | isMonthly ? plane.raffle_count : ""
                      }
                      mPlanId={plane.subid}
                      qPlanId={plane.subidsemiannual}
                      yPlanId={plane.subidannual}
                      onButtonClick={() =>
                        handleButton(
                          isMonthly
                            ? plane.subid
                            : isQuartly
                            ? plane.subidsemiannual
                            : isYearly
                            ? plane.subidannual
                            : ""
                        )
                      }
                      planeId={valUser.sub_id}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-16 2xl:h-16 special:w-24 special:h-24" />
                <p className="font-bold text-2xl 2xl:text-4xl special:text-6xl">
                  No More Subscriptions Plans
                </p>
              </div>
            )}

            {/* absolute xl:left-60 left-0 right-0 top-60 bottom-0 flex */}

            {choosePlane && (
              <div className="absolute bottom-0 top-0 left-0 right-0 z-10 bg-white/50">
                <div className="flex justify-center items-center 2xl:pt-80 xl:pt-60">
                  <ChoosePlane
                    onClose={() => setChoosePlane(false)}
                    planeId={selectedPlaneId}
                    userId={valUser.uid}
                  />
                </div>
              </div>
            )}
          </div>

          {/* right-side */}
          <div className="flex-col flex-1 space-y-4 hidden xl:flex">
            <div className=" space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <motion.img
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "tween", duration: 1, delay: 1 }}
                    className="w-3/4"
                    src={MainCar}
                    alt="main"
                  />
                </div>
              </div>
              <div className="w-full">
                <GoldCard />
              </div>
            </div>
          </div>
        </div>
        <MyEntriesButton/>
      </div>
    </>
  );
}

export default Subscription;
